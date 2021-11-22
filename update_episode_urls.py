import re
import json
import requests

url = 'https://www.dattebane.com/pagina/Naruto%20Shippuuden%20Download'
request = requests.get(url, cookies={"ServerOption": "NOTFIX"})
file_str = request.text

matches = re.findall( r'(\/\/.+?NaruttebaneNS)(\d\d\d.*?)(\.mp4)">', file_str)

episodes = {}
for match in matches:
    episodes[match[1]] = f"https:{match[0]}{match[1]}{match[2]}"

with open('static\\episode_urls.json', 'w', encoding='utf-8') as f:
    json.dump(episodes, f, ensure_ascii=False, indent=4)
print("All finished")