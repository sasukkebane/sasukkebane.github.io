import ffmpeg
from pathlib import Path
from multiprocessing.dummy import Pool as ThreadPool
import requests
import shutil
from pydub import AudioSegment
import json

THREAD_COUNT = 6

EPISODES_VIDEO_FOLDER = "D:\\Videos\\NarutoShippudden\\Episodios"
OPENNINGS_VIDEO_FOLDER = "D:\\Videos\\NarutoShippudden\\Aberturas"
ENDINGS_VIDEO_FOLDER = "D:\\Videos\\NarutoShippudden\\Encerramentos"

EPISODES_START_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Episodios\\Start10"
EPISODES_END_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Episodios\\End5"
OPENNINGS_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Aberturas"
ENDINGS_AUDIO_FOLDER = "D:\\Videos\\NarutoShippudden\\WAV\\Encerramentos"

Path(EPISODES_START_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)
Path(EPISODES_END_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)
Path(OPENNINGS_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)
Path(ENDINGS_AUDIO_FOLDER).mkdir(parents=True, exist_ok=True)

videos_queue = {}

for path in Path(EPISODES_VIDEO_FOLDER).iterdir():
    ep_name = path.name[:-4]
    ep_num = int(ep_name)
    thread_id = ep_num % THREAD_COUNT
    if thread_id not in videos_queue:
        videos_queue[thread_id] = []
    videos_queue[thread_id].append({
        "input": path,
        "output": Path.joinpath(Path(EPISODES_START_AUDIO_FOLDER), f"{ep_name}.wav"),
        "sliceStart": 0,
        "sliceEnd": 10*60*1000
    })

for path in Path(EPISODES_VIDEO_FOLDER).iterdir():
    ep_name = path.name[:-4]
    ep_num = int(ep_name)
    thread_id = ep_num % THREAD_COUNT
    if thread_id not in videos_queue:
        videos_queue[thread_id] = []
    videos_queue[thread_id].append({
        "input": path,
        "output": Path.joinpath(Path(EPISODES_END_AUDIO_FOLDER), f"{ep_name}.wav"),
        "sliceStart": -5*60*1000,
        "sliceEnd": None
    })

for path in Path(OPENNINGS_VIDEO_FOLDER).iterdir():
    op_name = path.name[10:13]
    op_num = int(op_name)
    thread_id = op_num % THREAD_COUNT
    if thread_id not in videos_queue:
        videos_queue[thread_id] = []
    videos_queue[thread_id].append({
        "input": path,
        "output": Path.joinpath(Path(OPENNINGS_AUDIO_FOLDER), f"Abertura {op_name}.wav"),
        "sliceStart": 10*1000,
        "sliceEnd": 60*1000
    })

for path in Path(ENDINGS_VIDEO_FOLDER).iterdir():
    en_name = path.name[13:16]
    en_num = int(en_name)
    thread_id = en_num % THREAD_COUNT
    if thread_id not in videos_queue:
        videos_queue[thread_id] = []
    videos_queue[thread_id].append({
        "input": path,
        "output": Path.joinpath(Path(ENDINGS_AUDIO_FOLDER), f"Encerramento {en_name}.wav"),
        "sliceStart": 10*1000,
        "sliceEnd": 60*1000
    })


def worker(thread_id):
    videos = videos_queue[thread_id]
    i = 0
    for video in videos:
        i += 1
        print(
            f"{thread_id} - Converting {i} of {len(videos)} to {video['output']}")
        if not video["output"].exists():
            audio = AudioSegment.from_file(video["input"], format="mp4", channels=1)[
                video["sliceStart"]:video["sliceEnd"]]
            audio = audio.set_channels(1)
            audio = audio.set_frame_rate(16000)
            audio.export(video["output"], format="wav")
    print(f"{thread_id} - Finished")


pool = ThreadPool(len(videos_queue))
pool.map(worker, videos_queue.keys())
pool.close()
pool.join()
print("All finished")
