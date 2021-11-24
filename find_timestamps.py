# %%
import numpy as np
import sys
from scipy.io import wavfile
from scipy import signal
from pydub import AudioSegment
from pathlib import Path
from multiprocessing.dummy import Pool as ThreadPool
import requests
import shutil
from pydub.utils import mediainfo
import json
import matplotlib.pyplot as plt

THREAD_COUNT = 6

EPISODES_VIDEO_FOLDER = "D:\\Videos\\NarutoShippudden\\Episodios"
EPISODES_START_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Episodios\\Start10"
EPISODES_END_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Episodios\\End5"
OPENNINGS_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Aberturas"
ENDINGS_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Encerramentos"

Path(EPISODES_START_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)
Path(EPISODES_END_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)
Path(OPENNINGS_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)
Path(ENDINGS_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)

opennings_by_episode = {
    30: "001",
    53: "002",
    77: "003",
    102: "004",
    128: "005",
    153: "006",
    179: "007",
    205: "008",
    230: "009",
    256: "010",
    281: "011",
    306: "012",
    332: "013",
    356: "014",
    379: "015",
    405: "016",
    431: "017",
    458: "018",
    479: "019",
    500: "020",
}

endings_by_episode = {
    18: "001",
    30: "002",
    41: "003",
    53: "004",
    63: "005",
    77: "006",
    90: "007",
    102: "008",
    115: "009",
    128: "010",
    141: "011",
    153: "012",
    166: "013",
    179: "014",
    192: "015",
    205: "016",
    218: "017",
    230: "018",
    242: "019",
    256: "020",
    268: "021",
    281: "022",
    295: "023",
    306: "024",
    319: "025",
    332: "026",
    343: "027",
    356: "028",
    366: "029",
    379: "030",
    393: "031",
    405: "032",
    417: "033",
    431: "034",
    443: "035",
    454: "036",
    466: "037",
    479: "038",
    488: "039",
    500: "040",
}


def secToMinSec(sec):
    return f"{sec//60:02.0f}:{sec%60:02.0f}"


def getOpenningForEpisode(ep_num):
    for i, openning in opennings_by_episode.items():
        if ep_num <= i:
            return openning
    raise Exception("Couldn't find!")


def getEndingForEpisode(ep_num):
    for i, openning in endings_by_episode.items():
        if ep_num <= i:
            return openning
    raise Exception("Couldn't find!")


def find_short_in_long(short_path, long_path):
    rate_short, short = wavfile.read(short_path)
    short = np.array(short, dtype='float')

    rate, long = wavfile.read(long_path)
    long = np.array(long, dtype='float')

    z = signal.correlate(long, short, mode='same')
    peak = np.argmax(np.abs(z))
    start = (peak-short.size/2) / rate
    # center = (peak) / rate
    # end = (peak+short.size/2) / rate
    return start


episodes_per_thread = {}
data = {}

for path in Path(EPISODES_VIDEO_FOLDER).iterdir():
    ep_name = path.name[:-4]
    ep_num = int(ep_name)
    thread_id = ep_num % THREAD_COUNT
    if thread_id not in episodes_per_thread:
        episodes_per_thread[thread_id] = []
    episodes_per_thread[thread_id].append((ep_num, ep_name))


def fetch_episode_data(episode_num, episode_str):
    episode_video_path = f"D:\\Videos\\NarutoShippudden\\Episodios\\{episode_str}.mp4"
    episode_start_snippet_path = f"D:\\Videos\\NarutoShippudden\\WAV\\Episodios\\Start10\\{episode_str}.wav"
    episode_end_snippet_path = f"D:\\Videos\\NarutoShippudden\\WAV\\Episodios\\End5\\{episode_str}.wav"
    openning_str = getOpenningForEpisode(episode_num)
    openning_snippet_path = f"D:\\Videos\\NarutoShippudden\\WAV\\Aberturas\\Abertura {openning_str}.wav"
    openning_video_path = f"D:\\Videos\\NarutoShippudden\\Aberturas\\ Abertura {openning_str}.mp4"
    ending_str = getEndingForEpisode(episode_num)
    ending_snippet_path = f"D:\\Videos\\NarutoShippudden\\WAV\\Encerramentos\\Encerramento {ending_str}.wav"

    episode_length = float(mediainfo(episode_video_path)['duration'])
    episode_end_snippet_length = float(
        mediainfo(episode_end_snippet_path)['duration'])
    openning_length = float(mediainfo(openning_video_path)['duration']) - 2

    openning_start = find_short_in_long(
        openning_snippet_path, episode_start_snippet_path) - 10
    openning_end = openning_start + openning_length
    ending_start = find_short_in_long(
        ending_snippet_path, episode_end_snippet_path) - 10
    ending_start = (episode_length - episode_end_snippet_length) + ending_start

    if ending_start < (episode_length - (60*3.5)):
        print(
            f"  WARNING - Episode {episode_str}'s ending seem too soon at {secToMinSec(ending_start)} of {secToMinSec(episode_length)}")
    if ending_start > (episode_length - (60*2) + 1):
        print(
            f"  WARNING - Episode {episode_str}'s ending seem too late at {secToMinSec(ending_start)} of {secToMinSec(episode_length)}")

    d = {
        "openning_start": openning_start,
        "openning_end": openning_end,
        "ending_start": ending_start,
    }
    data[episode_str] = d
    return d


def worker(thread_id):
    eps = episodes_per_thread[thread_id]
    i = 0
    for (ep_num, ep_str) in eps:
        i += 1
        d = fetch_episode_data(ep_num, ep_str)
        print(f"{thread_id} - Found timestamps {i} of {len(eps)} (episode {ep_str}): openning at {secToMinSec(d['openning_start'])}, ending at {secToMinSec(d['ending_start'])}")


pool = ThreadPool(len(episodes_per_thread))
pool.map(worker, episodes_per_thread.keys())
pool.close()
pool.join()

with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
print("All finished")
