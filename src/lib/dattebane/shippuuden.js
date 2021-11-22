export async function getEpisodesUrls() {
	// TODO: Fetch urls directly from dattebane instead of this json... But cookies and cors are fucking annoying
	let url = '/episode_urls.json'
	const res = await fetch(url);
	if (res.ok) {
		return await res.json();
	} else {
		console.error("Couldn't get episodes urls list...")
		return {};
	}
}

export function getEpisodeUrl(episode, hd, urls) {
	let key = episode.toString().padStart(3, '0');
	if (hd) key += "_HD";
	return urls[key];
}

export function getEpisodeTitle(episode) {
	let key = episode.toString().padStart(3, '0');
	return titles[key];
}

export function getEpisodeTimestamps(episode) {
	let key = episode.toString().padStart(3, '0');
	return timestaps[key];
}

export function isFillerTitle(title) {
	return title.includes("(Filler)") || title.includes("(Omake)")
}

export function getNextNonFiller(episode) {
	if (episode <= 0) return 1;

	let tryEpisode = episode + 1;
	while (tryEpisode <= 500) {
		const tryKey = tryEpisode.toString().padStart(3, '0');
		const tryTitle = titles[tryKey];
		if (isFillerTitle(tryTitle)) {
			tryEpisode++;
		} else {
			return tryEpisode;
		}
	}
	return episode;
}

export const timestaps = {
	"006": {
		"openning_start": 192.090125,
		"openning_end": 282.223458,
		"ending_start": 1205.1699795
	},
	"005": {
		"openning_start": 81.11075,
		"openning_end": 171.244083,
		"ending_start": 1207.5038955
	},
	"001": {
		"openning_start": 512.101625,
		"openning_end": 602.234958,
		"ending_start": 1206.5311875
	},
	"002": {
		"openning_start": 119.17712499999999,
		"openning_end": 209.31045799999998,
		"ending_start": 1206.1325625
	},
	"004": {
		"openning_start": 170.162375,
		"openning_end": 260.295708,
		"ending_start": 1207.5335624999998
	},
	"003": {
		"openning_start": 131.122,
		"openning_end": 221.255333,
		"ending_start": 1206.5463955
	},
	"012": {
		"openning_start": 100.159,
		"openning_end": 190.29233299999999,
		"ending_start": 1206.3314375
	},
	"007": {
		"openning_start": 0.09750000000000014,
		"openning_end": 90.23083299999999,
		"ending_start": 1207.305708
	},
	"011": {
		"openning_start": 146.1376875,
		"openning_end": 236.2710205,
		"ending_start": 1206.263125
	},
	"009": {
		"openning_start": 0.11768749999999883,
		"openning_end": 90.2510205,
		"ending_start": 1207.1905205
	},
	"008": {
		"openning_start": 122.08687499999999,
		"openning_end": 212.22020799999999,
		"ending_start": 1206.037667
	},
	"010": {
		"openning_start": 140.1255625,
		"openning_end": 230.2588955,
		"ending_start": 1205.123708
	},
	"018": {
		"openning_start": 58.907624999999996,
		"openning_end": 149.040958,
		"ending_start": 1207.9233545000002
	},
	"013": {
		"openning_start": 114.1645,
		"openning_end": 204.297833,
		"ending_start": 1207.522958
	},
	"017": {
		"openning_start": 207.104875,
		"openning_end": 297.238208,
		"ending_start": 1206.1694169999998
	},
	"015": {
		"openning_start": 393.090125,
		"openning_end": 483.223458,
		"ending_start": 1206.1684794999999
	},
	"014": {
		"openning_start": 245.08743750000002,
		"openning_end": 335.2207705,
		"ending_start": 1205.179625
	},
	"016": {
		"openning_start": 175.1395,
		"openning_end": 265.272833,
		"ending_start": 1206.168958
	},
	"024": {
		"openning_start": 188.1139375,
		"openning_end": 278.2472705,
		"ending_start": 1212.754375
	},
	"019": {
		"openning_start": 172.1365,
		"openning_end": 262.269833,
		"ending_start": 1214.1781455
	},
	"023": {
		"openning_start": 374.09925,
		"openning_end": 464.232583,
		"ending_start": 1212.7524795
	},
	"021": {
		"openning_start": 274.1298125,
		"openning_end": 364.2631455,
		"ending_start": 1214.7508955
	},
	"020": {
		"openning_start": 182.081125,
		"openning_end": 272.214458,
		"ending_start": 1212.658667
	},
	"022": {
		"openning_start": 224.149375,
		"openning_end": 314.28270799999996,
		"ending_start": 1216.1555205
	},
	"030": {
		"openning_start": 205.0950625,
		"openning_end": 295.22839550000003,
		"ending_start": 1215.505125
	},
	"025": {
		"openning_start": 332.064,
		"openning_end": 422.197333,
		"ending_start": 1213.7608750000002
	},
	"029": {
		"openning_start": 299.1219375,
		"openning_end": 389.2552705,
		"ending_start": 1213.9866044999999
	},
	"027": {
		"openning_start": 159.110125,
		"openning_end": 249.243458,
		"ending_start": 1213.7802295
	},
	"026": {
		"openning_start": 117.1160625,
		"openning_end": 207.2493955,
		"ending_start": 1213.5451874999999
	},
	"028": {
		"openning_start": 298.1160625,
		"openning_end": 388.2493955,
		"ending_start": 1214.648375
	},
	"036": {
		"openning_start": 230.1126875,
		"openning_end": 320.2460205,
		"ending_start": 1195.353917
	},
	"031": {
		"openning_start": 0.0861875000000012,
		"openning_end": 90.21952049999999,
		"ending_start": 1196.3563545
	},
	"035": {
		"openning_start": 244.05868750000002,
		"openning_end": 334.1920205,
		"ending_start": 1261.315375
	},
	"033": {
		"openning_start": 199.0589375,
		"openning_end": 289.1922705,
		"ending_start": 1086.404792
	},
	"032": {
		"openning_start": 203.0898125,
		"openning_end": 293.2231455,
		"ending_start": 1198.3594375
	},
	"034": {
		"openning_start": 204.0654375,
		"openning_end": 294.1987705,
		"ending_start": 1196.3993954999999
	},
	"037": {
		"openning_start": 150.0845,
		"openning_end": 240.21783299999998,
		"ending_start": 1196.4069375
	},
	"042": {
		"openning_start": 55.05500000000001,
		"openning_end": 145.188333,
		"ending_start": 1195.163375
	},
	"041": {
		"openning_start": 48.07962499999999,
		"openning_end": 138.212958,
		"ending_start": 1074.4178545
	},
	"039": {
		"openning_start": 337.0213125,
		"openning_end": 427.1546455,
		"ending_start": 1196.2893125
	},
	"038": {
		"openning_start": 200.01875,
		"openning_end": 290.152083,
		"ending_start": 1117.7005
	},
	"040": {
		"openning_start": 160.045375,
		"openning_end": 250.178708,
		"ending_start": 1064.4886875
	},
	"043": {
		"openning_start": 265.997375,
		"openning_end": 356.13070799999997,
		"ending_start": 1196.8304375
	},
	"048": {
		"openning_start": 59.059749999999994,
		"openning_end": 149.193083,
		"ending_start": 1195.499125
	},
	"047": {
		"openning_start": 127.99393749999999,
		"openning_end": 218.12727049999998,
		"ending_start": 1196.498083
	},
	"045": {
		"openning_start": 211.058875,
		"openning_end": 301.192208,
		"ending_start": 1196.547333
	},
	"044": {
		"openning_start": 150.0158125,
		"openning_end": 240.1491455,
		"ending_start": 1195.4972500000001
	},
	"046": {
		"openning_start": 271.987875,
		"openning_end": 362.12120799999997,
		"ending_start": 1195.479083
	},
	"049": {
		"openning_start": 96.0985,
		"openning_end": 186.231833,
		"ending_start": 1195.5682295
	},
	"054": {
		"openning_start": 124.9863125,
		"openning_end": 216.1696455,
		"ending_start": 1240.0713954999999
	},
	"053": {
		"openning_start": 98.128375,
		"openning_end": 188.261708,
		"ending_start": 1197.597125
	},
	"051": {
		"openning_start": 20.0423125,
		"openning_end": 110.1756455,
		"ending_start": 1196.5189169999999
	},
	"050": {
		"openning_start": 321.9650625,
		"openning_end": 412.0983955,
		"ending_start": 1195.4757295
	},
	"052": {
		"openning_start": 0.022375000000000256,
		"openning_end": 90.15570799999999,
		"ending_start": 1102.5617499999998
	},
	"055": {
		"openning_start": 75.0060625,
		"openning_end": 166.1893955,
		"ending_start": 1298.0647295
	},
	"060": {
		"openning_start": 192.4733125,
		"openning_end": 283.65664549999997,
		"ending_start": 1234.0927080000001
	},
	"059": {
		"openning_start": 185.9714375,
		"openning_end": 277.15477050000004,
		"ending_start": 1150.2248749999999
	},
	"057": {
		"openning_start": 0.0022500000000000853,
		"openning_end": 91.18558300000001,
		"ending_start": 1240.1943330000001
	},
	"056": {
		"openning_start": 98.03275,
		"openning_end": 189.216083,
		"ending_start": 1240.0777705
	},
	"058": {
		"openning_start": 154.0050625,
		"openning_end": 245.1883955,
		"ending_start": 1236.5323955000001
	},
	"061": {
		"openning_start": 31.005499999999998,
		"openning_end": 122.188833,
		"ending_start": 1045.3601875
	},
	"066": {
		"openning_start": 197.97025,
		"openning_end": 289.153583,
		"ending_start": 1226.951458
	},
	"065": {
		"openning_start": 401.972625,
		"openning_end": 493.155958,
		"ending_start": 1224.8418749999998
	},
	"063": {
		"openning_start": 225.012875,
		"openning_end": 316.196208,
		"ending_start": 1236.6004375
	},
	"062": {
		"openning_start": 284.00375,
		"openning_end": 375.18708300000003,
		"ending_start": 1234.5973955
	},
	"067": {
		"openning_start": 159.006875,
		"openning_end": 250.190208,
		"ending_start": 1224.6256875
	},
	"064": {
		"openning_start": 69.9915625,
		"openning_end": 161.1748955,
		"ending_start": 1230.331708
	},
	"072": {
		"openning_start": 222.9903125,
		"openning_end": 314.1736455,
		"ending_start": 1214.4991045000002
	},
	"071": {
		"openning_start": 39.0395625,
		"openning_end": 130.2228955,
		"ending_start": 1283.669083
	},
	"069": {
		"openning_start": 76.990625,
		"openning_end": 168.173958,
		"ending_start": 1224.2457295000002
	},
	"068": {
		"openning_start": 185.9685,
		"openning_end": 277.151833,
		"ending_start": 1228.010125
	},
	"073": {
		"openning_start": 178.01,
		"openning_end": 269.193333,
		"ending_start": 1115.1848544999998
	},
	"070": {
		"openning_start": 31.0063125,
		"openning_end": 122.18964550000001,
		"ending_start": 1227.5622295
	},
	"077": {
		"openning_start": 360.003,
		"openning_end": 451.186333,
		"ending_start": 1230.3377704999998
	},
	"078": {
		"openning_start": 82.9543125,
		"openning_end": 174.13764550000002,
		"ending_start": 1192.6063955
	},
	"075": {
		"openning_start": 78.994,
		"openning_end": 170.177333,
		"ending_start": 1226.960875
	},
	"074": {
		"openning_start": 80.9954375,
		"openning_end": 172.17877049999998,
		"ending_start": 1226.9606455
	},
	"079": {
		"openning_start": 192.9316875,
		"openning_end": 284.1150205,
		"ending_start": 1061.6553330000002
	},
	"076": {
		"openning_start": 314.9563125,
		"openning_end": 406.13964550000003,
		"ending_start": 1044.1969375
	},
	"083": {
		"openning_start": 104.1193125,
		"openning_end": 195.3026455,
		"ending_start": 1149.6962295
	},
	"084": {
		"openning_start": 122.07106250000001,
		"openning_end": 213.25439550000002,
		"ending_start": 1156.4621455000001
	},
	"081": {
		"openning_start": 0.08162499999999895,
		"openning_end": 91.26495800000001,
		"ending_start": 1184.071208
	},
	"080": {
		"openning_start": 112.1275,
		"openning_end": 203.310833,
		"ending_start": 1243.999292
	},
	"085": {
		"openning_start": 61.07543750000001,
		"openning_end": 152.25877050000003,
		"ending_start": 1144.7613955
	},
	"082": {
		"openning_start": 36.117625,
		"openning_end": 127.30095800000001,
		"ending_start": 1250.3398545
	},
	"089": {
		"openning_start": 189.0719375,
		"openning_end": 280.2552705,
		"ending_start": 1066.5741455
	},
	"090": {
		"openning_start": 49.1320625,
		"openning_end": 140.31539550000002,
		"ending_start": 1273.915917
	},
	"087": {
		"openning_start": 125.0745,
		"openning_end": 216.257833,
		"ending_start": 1141.5821455
	},
	"086": {
		"openning_start": 204.08675,
		"openning_end": 295.270083,
		"ending_start": 1090.7598125
	},
	"091": {
		"openning_start": 178.1280625,
		"openning_end": 269.3113955,
		"ending_start": 1268.607333
	},
	"088": {
		"openning_start": 154.1035625,
		"openning_end": 245.2868955,
		"ending_start": 1074.9796045
	},
	"095": {
		"openning_start": 107.12475,
		"openning_end": 198.308083,
		"ending_start": 1208.5471045
	},
	"096": {
		"openning_start": 95.112625,
		"openning_end": 186.29595799999998,
		"ending_start": 1208.5469795000001
	},
	"093": {
		"openning_start": 0.11768749999999883,
		"openning_end": 91.3010205,
		"ending_start": 1208.5136045
	},
	"092": {
		"openning_start": 74.125,
		"openning_end": 165.308333,
		"ending_start": 1268.707375
	},
	"097": {
		"openning_start": 115.13262499999999,
		"openning_end": 206.315958,
		"ending_start": 1154.0633545
	},
	"094": {
		"openning_start": 218.10225,
		"openning_end": 309.285583,
		"ending_start": 1208.614458
	},
	"101": {
		"openning_start": 188.072125,
		"openning_end": 279.255458,
		"ending_start": 1208.5469170000001
	},
	"102": {
		"openning_start": 169.1199375,
		"openning_end": 260.3032705,
		"ending_start": 1268.6076455
	},
	"099": {
		"openning_start": 134.0849375,
		"openning_end": 225.2682705,
		"ending_start": 1208.6140205
	},
	"098": {
		"openning_start": 203.0870625,
		"openning_end": 294.2703955,
		"ending_start": 1208.6142705
	},
	"103": {
		"openning_start": 218.0679375,
		"openning_end": 309.2079375,
		"ending_start": 1081.2531455
	},
	"100": {
		"openning_start": 77.0946875,
		"openning_end": 168.27802050000003,
		"ending_start": 1268.6076455
	},
	"107": {
		"openning_start": 298.093875,
		"openning_end": 389.233875,
		"ending_start": 1225.1644375
	},
	"108": {
		"openning_start": 166.0954375,
		"openning_end": 257.2354375,
		"ending_start": 1156.3195
	},
	"105": {
		"openning_start": 196.1245,
		"openning_end": 287.2645,
		"ending_start": 1264.346
	},
	"104": {
		"openning_start": 0.05056250000000162,
		"openning_end": 91.1905625,
		"ending_start": 1294.068417
	},
	"109": {
		"openning_start": 139.0685,
		"openning_end": 230.20850000000002,
		"ending_start": 1273.7501874999998
	},
	"106": {
		"openning_start": 43.107124999999996,
		"openning_end": 134.24712499999998,
		"ending_start": 1063.0486045
	},
	"113": {
		"openning_start": 329.0583125,
		"openning_end": 420.1983125,
		"ending_start": 1138.045625
	},
	"114": {
		"openning_start": 27.0910625,
		"openning_end": 118.23106250000001,
		"ending_start": 1335.58225
	},
	"111": {
		"openning_start": 133.0623125,
		"openning_end": 224.2023125,
		"ending_start": 1120.387042
	},
	"110": {
		"openning_start": 243.04025000000001,
		"openning_end": 334.18025,
		"ending_start": 1314.8685
	},
	"115": {
		"openning_start": 225.088875,
		"openning_end": 316.228875,
		"ending_start": 1294.0484374999999
	},
	"112": {
		"openning_start": 0.0627500000000012,
		"openning_end": 91.20275000000001,
		"ending_start": 1147.5541249999999
	},
	"119": {
		"openning_start": 0.08537499999999909,
		"openning_end": 91.225375,
		"ending_start": 1278.2642295
	},
	"120": {
		"openning_start": 0.08531250000000057,
		"openning_end": 91.2253125,
		"ending_start": 1278.2647705
	},
	"116": {
		"openning_start": 290.085875,
		"openning_end": 381.225875,
		"ending_start": 1187.605792
	},
	"117": {
		"openning_start": 303.032625,
		"openning_end": 394.172625,
		"ending_start": 1218.245625
	},
	"121": {
		"openning_start": 408.0943125,
		"openning_end": 499.2343125,
		"ending_start": 1218.2060205
	},
	"118": {
		"openning_start": 294.0895625,
		"openning_end": 385.2295625,
		"ending_start": 1218.2474375
	},
	"125": {
		"openning_start": 198.0845,
		"openning_end": 289.2245,
		"ending_start": 1278.198417
	},
	"126": {
		"openning_start": 64.083875,
		"openning_end": 155.22387500000002,
		"ending_start": 1218.2047705
	},
	"122": {
		"openning_start": 205.09025,
		"openning_end": 296.23025,
		"ending_start": 1187.7647080000002
	},
	"123": {
		"openning_start": 34.1345,
		"openning_end": 125.2745,
		"ending_start": 1247.691708
	},
	"127": {
		"openning_start": 0.0861875000000012,
		"openning_end": 91.22618750000001,
		"ending_start": 1278.198625
	},
	"124": {
		"openning_start": 148.1011875,
		"openning_end": 239.24118750000002,
		"ending_start": 1217.186375
	},
	"131": {
		"openning_start": 447.0591875,
		"openning_end": 537.2608545,
		"ending_start": 1248.1651875
	},
	"132": {
		"openning_start": 382.068625,
		"openning_end": 472.270292,
		"ending_start": 1209.2093545
	},
	"128": {
		"openning_start": 0.0861875000000012,
		"openning_end": 91.22618750000001,
		"ending_start": 1278.198625
	},
	"133": {
		"openning_start": 0.0782500000000006,
		"openning_end": 90.279917,
		"ending_start": 1269.1264375
	},
	"129": {
		"openning_start": 524.0673125,
		"openning_end": 614.2689795,
		"ending_start": 1209.1654375
	},
	"130": {
		"openning_start": 406.0814375,
		"openning_end": 496.2831045,
		"ending_start": 1209.13075
	},
	"137": {
		"openning_start": 343.087375,
		"openning_end": 433.289042,
		"ending_start": 1209.0665205
	},
	"138": {
		"openning_start": 207.0849375,
		"openning_end": 297.2866045,
		"ending_start": 1209.1330624999998
	},
	"134": {
		"openning_start": 425.0360625,
		"openning_end": 515.2377295,
		"ending_start": 1209.1330624999998
	},
	"139": {
		"openning_start": 234.1119375,
		"openning_end": 324.3136045,
		"ending_start": 1269.0588955
	},
	"135": {
		"openning_start": 85.0964375,
		"openning_end": 175.2981045,
		"ending_start": 1269.1933955
	},
	"136": {
		"openning_start": 0.07806250000000148,
		"openning_end": 90.2797295,
		"ending_start": 1209.1332705
	},
	"143": {
		"openning_start": 159.1049375,
		"openning_end": 249.3066045,
		"ending_start": 1304.8103330000001
	},
	"144": {
		"openning_start": 328.0724375,
		"openning_end": 418.27410449999996,
		"ending_start": 1244.8167704999998
	},
	"140": {
		"openning_start": 414.0918125,
		"openning_end": 504.2934795,
		"ending_start": 1269.059292
	},
	"145": {
		"openning_start": 132.0766875,
		"openning_end": 222.27835449999998,
		"ending_start": 1304.743333
	},
	"141": {
		"openning_start": 352.12975,
		"openning_end": 442.331417,
		"ending_start": 1269.1596249999998
	},
	"142": {
		"openning_start": 121.06687500000001,
		"openning_end": 211.26854200000002,
		"ending_start": 1244.8131455
	},
	"149": {
		"openning_start": 0.078125,
		"openning_end": 90.279792,
		"ending_start": 1304.80975
	},
	"150": {
		"openning_start": 0.078125,
		"openning_end": 90.279792,
		"ending_start": 1304.80975
	},
	"146": {
		"openning_start": 361.0386875,
		"openning_end": 451.24035449999997,
		"ending_start": 1244.750083
	},
	"151": {
		"openning_start": 357.1014375,
		"openning_end": 447.30310449999996,
		"ending_start": 1304.8093545
	},
	"147": {
		"openning_start": 383.06075,
		"openning_end": 473.26241699999997,
		"ending_start": 1244.8165
	},
	"148": {
		"openning_start": 47.126374999999996,
		"openning_end": 137.32804199999998,
		"ending_start": 1304.811
	},
	"155": {
		"openning_start": 372.1311875,
		"openning_end": 461.22118750000004,
		"ending_start": 1290.0809375
	},
	"156": {
		"openning_start": 302.1446875,
		"openning_end": 391.23468749999995,
		"ending_start": 1230.0057080000001
	},
	"152": {
		"openning_start": 553.0365625,
		"openning_end": 643.2382295,
		"ending_start": 1304.857
	},
	"157": {
		"openning_start": 171.213875,
		"openning_end": 260.303875,
		"ending_start": 1290.0473545
	},
	"153": {
		"openning_start": 50.134187499999996,
		"openning_end": 140.33585449999998,
		"ending_start": 1304.6571455
	},
	"154": {
		"openning_start": 0.17624999999999957,
		"openning_end": 89.26625,
		"ending_start": 1292.4955
	},
	"161": {
		"openning_start": 284.1933125,
		"openning_end": 373.28331249999997,
		"ending_start": 1230.2134795
	},
	"162": {
		"openning_start": 168.2108125,
		"openning_end": 257.3008125,
		"ending_start": 1132.0191455
	},
	"158": {
		"openning_start": 387.14625,
		"openning_end": 476.23625000000004,
		"ending_start": 1117.383667
	},
	"163": {
		"openning_start": 197.028125,
		"openning_end": 286.11812499999996,
		"ending_start": 1281.408458
	},
	"159": {
		"openning_start": 83.1759375,
		"openning_end": 172.2659375,
		"ending_start": 1290.164167
	},
	"160": {
		"openning_start": 86.1789375,
		"openning_end": 175.2689375,
		"ending_start": 1132.394542
	},
	"167": {
		"openning_start": 0.039750000000001506,
		"openning_end": 89.12975,
		"ending_start": 1334.3140205
	},
	"168": {
		"openning_start": 515.0124375,
		"openning_end": 604.1024375000001,
		"ending_start": 1070.9641045
	},
	"169": {
		"openning_start": 152.0583125,
		"openning_end": 241.1483125,
		"ending_start": 1257.048875
	},
	"164": {
		"openning_start": 233.0641875,
		"openning_end": 322.15418750000003,
		"ending_start": 1271.2181045
	},
	"165": {
		"openning_start": 63.01925,
		"openning_end": 152.10925,
		"ending_start": 1203.381292
	},
	"166": {
		"openning_start": 80.036375,
		"openning_end": 169.126375,
		"ending_start": 1137.3609374999999
	},
	"173": {
		"openning_start": 121.0273125,
		"openning_end": 210.1173125,
		"ending_start": 1235.5912919999998
	},
	"174": {
		"openning_start": 109.0653125,
		"openning_end": 198.1553125,
		"ending_start": 1295.6756249999999
	},
	"175": {
		"openning_start": 222.0531875,
		"openning_end": 311.1431875,
		"ending_start": 1288.1177705
	},
	"170": {
		"openning_start": 0.03968749999999943,
		"openning_end": 89.1296875,
		"ending_start": 1295.6923124999998
	},
	"171": {
		"openning_start": 0.03968749999999943,
		"openning_end": 89.1296875,
		"ending_start": 1295.5931249999999
	},
	"172": {
		"openning_start": 0.039750000000001506,
		"openning_end": 89.12975,
		"ending_start": 1183.929625
	},
	"179": {
		"openning_start": 463.0355625,
		"openning_end": 552.1255625,
		"ending_start": 1295.602167
	},
	"180": {
		"openning_start": 133.0196875,
		"openning_end": 222.1096875,
		"ending_start": 1262.351458
	},
	"181": {
		"openning_start": 0.020187499999998693,
		"openning_end": 89.1101875,
		"ending_start": 1262.3761875
	},
	"176": {
		"openning_start": 239.07012500000002,
		"openning_end": 328.160125,
		"ending_start": 1295.6011669999998
	},
	"177": {
		"openning_start": 359.065,
		"openning_end": 448.155,
		"ending_start": 1295.660208
	},
	"178": {
		"openning_start": 304.9645625,
		"openning_end": 394.0545625,
		"ending_start": 1330.537625
	},
	"185": {
		"openning_start": 230.0415625,
		"openning_end": 319.1315625,
		"ending_start": 1202.17425
	},
	"186": {
		"openning_start": 113.04974999999999,
		"openning_end": 202.13975,
		"ending_start": 1262.4599580000001
	},
	"187": {
		"openning_start": 193.004625,
		"openning_end": 282.094625,
		"ending_start": 1088.3629999999998
	},
	"182": {
		"openning_start": 536.0139375,
		"openning_end": 625.1039375,
		"ending_start": 1262.4599580000001
	},
	"183": {
		"openning_start": 276.02925,
		"openning_end": 365.11924999999997,
		"ending_start": 1279.2960830000002
	},
	"184": {
		"openning_start": 154.0406875,
		"openning_end": 243.1306875,
		"ending_start": 1109.093333
	},
	"191": {
		"openning_start": 25.045187499999997,
		"openning_end": 114.1351875,
		"ending_start": 1262.459958
	},
	"192": {
		"openning_start": 78.056375,
		"openning_end": 167.146375,
		"ending_start": 1262.442875
	},
	"193": {
		"openning_start": 297.0501875,
		"openning_end": 386.1401875,
		"ending_start": 1259.806167
	},
	"188": {
		"openning_start": 0.020187499999998693,
		"openning_end": 89.1101875,
		"ending_start": 1262.376917
	},
	"189": {
		"openning_start": 113.0496875,
		"openning_end": 202.1396875,
		"ending_start": 1085.255083
	},
	"190": {
		"openning_start": 339.0254375,
		"openning_end": 428.1154375,
		"ending_start": 1262.384833
	},
	"197": {
		"openning_start": 112.0486875,
		"openning_end": 201.1386875,
		"ending_start": 1259.6804375
	},
	"198": {
		"openning_start": 224.035875,
		"openning_end": 313.125875,
		"ending_start": 1259.806542
	},
	"199": {
		"openning_start": 346.0324375,
		"openning_end": 435.12243750000005,
		"ending_start": 1259.8062295
	},
	"194": {
		"openning_start": 85.0216875,
		"openning_end": 174.11168750000002,
		"ending_start": 1259.7641455
	},
	"195": {
		"openning_start": 102.0638125,
		"openning_end": 191.15381250000002,
		"ending_start": 1259.805958
	},
	"196": {
		"openning_start": 184.9965625,
		"openning_end": 274.0865625,
		"ending_start": 1259.789542
	},
	"203": {
		"openning_start": 377.02175,
		"openning_end": 466.11175000000003,
		"ending_start": 1259.797583
	},
	"204": {
		"openning_start": 276.0291875,
		"openning_end": 365.11918749999995,
		"ending_start": 1259.7978545
	},
	"205": {
		"openning_start": 369.01375,
		"openning_end": 458.10375,
		"ending_start": 1225.451458
	},
	"200": {
		"openning_start": 517.972875,
		"openning_end": 607.0628750000001,
		"ending_start": 1259.7157499999998
	},
	"201": {
		"openning_start": 64.0006875,
		"openning_end": 153.0906875,
		"ending_start": 1259.7304374999999
	},
	"202": {
		"openning_start": 275.0281875,
		"openning_end": 364.1181875,
		"ending_start": 1259.722125
	},
	"209": {
		"openning_start": 171.0601875,
		"openning_end": 260.1501875,
		"ending_start": 1174.087333
	},
	"210": {
		"openning_start": 48.07062500000001,
		"openning_end": 137.160625,
		"ending_start": 1234.097542
	},
	"211": {
		"openning_start": 0.02268749999999997,
		"openning_end": 89.1126875,
		"ending_start": 1234.1046455
	},
	"206": {
		"openning_start": 145.03425,
		"openning_end": 234.12425,
		"ending_start": 1234.063958
	},
	"207": {
		"openning_start": 167.0645,
		"openning_end": 256.1545,
		"ending_start": 1234.0972705
	},
	"208": {
		"openning_start": 137.0595625,
		"openning_end": 226.1495625,
		"ending_start": 1234.0055205
	},
	"215": {
		"openning_start": 185.8030625,
		"openning_end": 274.89306250000004,
		"ending_start": 1233.916833
	},
	"216": {
		"openning_start": 0.02268749999999997,
		"openning_end": 89.1126875,
		"ending_start": 1233.972292
	},
	"217": {
		"openning_start": 212.026125,
		"openning_end": 301.116125,
		"ending_start": 1234.0806455
	},
	"212": {
		"openning_start": 200.0355,
		"openning_end": 289.1255,
		"ending_start": 1174.0666250000002
	},
	"213": {
		"openning_start": -0.1744374999999998,
		"openning_end": 88.91556250000001,
		"ending_start": 1233.8062080000002
	},
	"214": {
		"openning_start": 437.9935,
		"openning_end": 527.0835,
		"ending_start": 1231.647833
	},
	"221": {
		"openning_start": 36.8625625,
		"openning_end": 125.9525625,
		"ending_start": 1242.580583
	},
	"222": {
		"openning_start": 253.00875000000002,
		"openning_end": 342.09875,
		"ending_start": 1256.0059999999999
	},
	"223": {
		"openning_start": 47.0696875,
		"openning_end": 136.15968750000002,
		"ending_start": 1242.7108955
	},
	"218": {
		"openning_start": 136.829125,
		"openning_end": 225.919125,
		"ending_start": 1233.79975
	},
	"219": {
		"openning_start": 132.0211875,
		"openning_end": 221.1111875,
		"ending_start": 1256.0563955
	},
	"220": {
		"openning_start": 271.0266875,
		"openning_end": 360.1166875,
		"ending_start": 1242.711167
	},
	"227": {
		"openning_start": 80.0193125,
		"openning_end": 169.1093125,
		"ending_start": 1256.138833
	},
	"228": {
		"openning_start": 155.04425,
		"openning_end": 244.13425,
		"ending_start": 1256.0731455
	},
	"229": {
		"openning_start": 238.8560625,
		"openning_end": 327.94606250000004,
		"ending_start": 1149.011917
	},
	"224": {
		"openning_start": 79.01825,
		"openning_end": 168.10825,
		"ending_start": 1256.0063955
	},
	"225": {
		"openning_start": 202.016125,
		"openning_end": 291.106125,
		"ending_start": 1163.712542
	},
	"226": {
		"openning_start": 76.01525,
		"openning_end": 165.10525,
		"ending_start": 1242.7105625
	},
	"234": {
		"openning_start": 99.037625,
		"openning_end": 188.12762500000002,
		"ending_start": 1340.087833
	},
	"233": {
		"openning_start": 190.0035,
		"openning_end": 279.0935,
		"ending_start": 1073.9031045000002
	},
	"235": {
		"openning_start": 124.02087499999999,
		"openning_end": 213.110875,
		"ending_start": 1142.6518545
	},
	"230": {
		"openning_start": 405.010625,
		"openning_end": 494.10062500000004,
		"ending_start": 1256.0731455
	},
	"231": {
		"openning_start": 122.01887500000001,
		"openning_end": 211.108875,
		"ending_start": 1160.6001875
	},
	"232": {
		"openning_start": 140.0285,
		"openning_end": 229.1185,
		"ending_start": 1331.4852704999998
	},
	"239": {
		"openning_start": 206.801125,
		"openning_end": 295.891125,
		"ending_start": 1126.9567705
	},
	"240": {
		"openning_start": 173.8515,
		"openning_end": 262.9415,
		"ending_start": 1187.601208
	},
	"241": {
		"openning_start": 248.8013125,
		"openning_end": 337.8913125,
		"ending_start": 1190.4496455
	},
	"236": {
		"openning_start": 45.044,
		"openning_end": 134.13400000000001,
		"ending_start": 1071.406542
	},
	"237": {
		"openning_start": 171.848875,
		"openning_end": 260.938875,
		"ending_start": 1193.0353955
	},
	"238": {
		"openning_start": 107.8265625,
		"openning_end": 196.9165625,
		"ending_start": 1068.928708
	},
	"245": {
		"openning_start": 149.8488125,
		"openning_end": 238.9388125,
		"ending_start": 1193.3345205
	},
	"246": {
		"openning_start": 187.803375,
		"openning_end": 276.893375,
		"ending_start": 1269.6785419999999
	},
	"247": {
		"openning_start": 376.9809375,
		"openning_end": 466.0709375,
		"ending_start": 1269.876
	},
	"242": {
		"openning_start": 272.0214375,
		"openning_end": 361.11143749999997,
		"ending_start": 1341.412167
	},
	"243": {
		"openning_start": 164.059875,
		"openning_end": 253.149875,
		"ending_start": 1262.614958
	},
	"244": {
		"openning_start": 217.0294375,
		"openning_end": 306.1194375,
		"ending_start": 1123.753583
	},
	"251": {
		"openning_start": 148.84775,
		"openning_end": 237.93775,
		"ending_start": 1269.7455625
	},
	"252": {
		"openning_start": 183.9964375,
		"openning_end": 273.0864375,
		"ending_start": 1167.65275
	},
	"253": {
		"openning_start": 0.02093749999999872,
		"openning_end": 89.1109375,
		"ending_start": 1277.523125
	},
	"248": {
		"openning_start": 0.021000000000000796,
		"openning_end": 89.111,
		"ending_start": 1164.3196455
	},
	"249": {
		"openning_start": -0.17599999999999838,
		"openning_end": 88.914,
		"ending_start": 1269.745625
	},
	"250": {
		"openning_start": 117.85849999999999,
		"openning_end": 206.9485,
		"ending_start": 1269.679208
	},
	"257": {
		"openning_start": 216.5295,
		"openning_end": 307.121167,
		"ending_start": 1119.7308125
	},
	"258": {
		"openning_start": 130.526875,
		"openning_end": 221.118542,
		"ending_start": 1202.848542
	},
	"259": {
		"openning_start": 169.565875,
		"openning_end": 260.15754200000003,
		"ending_start": 1291.1000625
	},
	"254": {
		"openning_start": 163.058875,
		"openning_end": 252.148875,
		"ending_start": 1239.912958
	},
	"255": {
		"openning_start": 264.8386875,
		"openning_end": 353.9286875,
		"ending_start": 1277.3934795
	},
	"256": {
		"openning_start": 50.071,
		"openning_end": 139.161,
		"ending_start": 1100.555875
	},
	"263": {
		"openning_start": 91.5711875,
		"openning_end": 182.16285449999998,
		"ending_start": 1291.1670205
	},
	"264": {
		"openning_start": 167.3668125,
		"openning_end": 257.9584795,
		"ending_start": 1222.095417
	},
	"265": {
		"openning_start": 172.37175,
		"openning_end": 262.963417,
		"ending_start": 1209.176458
	},
	"260": {
		"openning_start": 215.5283125,
		"openning_end": 306.1199795,
		"ending_start": 1139.501125
	},
	"261": {
		"openning_start": 128.5248125,
		"openning_end": 219.1164795,
		"ending_start": 1291.1
	},
	"262": {
		"openning_start": 140.536875,
		"openning_end": 231.128542,
		"ending_start": 1290.203042
	},
	"269": {
		"openning_start": 261.555625,
		"openning_end": 352.147292,
		"ending_start": 1180.055583
	},
	"270": {
		"openning_start": 137.55675,
		"openning_end": 228.148417,
		"ending_start": 1216.8837704999999
	},
	"271": {
		"openning_start": 50.571937500000004,
		"openning_end": 141.16360450000002,
		"ending_start": 1195.817583
	},
	"266": {
		"openning_start": 238.551375,
		"openning_end": 329.14304200000004,
		"ending_start": 1291.1670205
	},
	"267": {
		"openning_start": 44.565875000000005,
		"openning_end": 135.157542,
		"ending_start": 1291.1670829999998
	},
	"268": {
		"openning_start": 299.5706875,
		"openning_end": 390.1623545,
		"ending_start": 1142.2996249999999
	},
	"275": {
		"openning_start": 60.54025,
		"openning_end": 151.131917,
		"ending_start": 1191.1611455
	},
	"276": {
		"openning_start": 29.561437499999997,
		"openning_end": 120.1531045,
		"ending_start": 1323.2346045
	},
	"277": {
		"openning_start": 221.544875,
		"openning_end": 312.13654199999996,
		"ending_start": 1122.7097079999999
	},
	"272": {
		"openning_start": 98.57825,
		"openning_end": 189.169917,
		"ending_start": 1316.2465
	},
	"273": {
		"openning_start": 238.55143750000002,
		"openning_end": 329.14310450000005,
		"ending_start": 1197.4848749999999
	},
	"274": {
		"openning_start": -0.4789999999999992,
		"openning_end": 90.112667,
		"ending_start": 1191.738333
	},
	"281": {
		"openning_start": 68.5586875,
		"openning_end": 159.1503545,
		"ending_start": 1133.7596875
	},
	"282": {
		"openning_start": 53.0750625,
		"openning_end": 143.1667295,
		"ending_start": 1085.767417
	},
	"283": {
		"openning_start": 164.061,
		"openning_end": 254.152667,
		"ending_start": 1104.1039375
	},
	"278": {
		"openning_start": 135.5255625,
		"openning_end": 226.1172295,
		"ending_start": 1215.414792
	},
	"279": {
		"openning_start": 180.5038125,
		"openning_end": 271.0954795,
		"ending_start": 1086.5346455
	},
	"280": {
		"openning_start": 91.58175,
		"openning_end": 182.173417,
		"ending_start": 1217.857708
	},
	"287": {
		"openning_start": 0.024312500000000625,
		"openning_end": 90.11597950000001,
		"ending_start": 1208.0051454999998
	},
	"288": {
		"openning_start": 311.0015625,
		"openning_end": 401.0932295,
		"ending_start": 1087.0304999999998
	},
	"289": {
		"openning_start": 56.08025000000001,
		"openning_end": 146.171917,
		"ending_start": 1217.6380625
	},
	"284": {
		"openning_start": 348.0593125,
		"openning_end": 438.15097949999995,
		"ending_start": 1159.624875
	},
	"285": {
		"openning_start": 180.0708125,
		"openning_end": 270.1624795,
		"ending_start": 1166.7647705
	},
	"286": {
		"openning_start": 164.0548125,
		"openning_end": 254.1464795,
		"ending_start": 1114.098667
	},
	"293": {
		"openning_start": 407.07875,
		"openning_end": 497.17041700000004,
		"ending_start": 1334.862917
	},
	"294": {
		"openning_start": 191.048375,
		"openning_end": 281.140042,
		"ending_start": 1148.997833
	},
	"295": {
		"openning_start": 164.0611875,
		"openning_end": 254.1528545,
		"ending_start": 1126.9528125
	},
	"290": {
		"openning_start": 72.054625,
		"openning_end": 162.14629200000002,
		"ending_start": 1218.0914375
	},
	"291": {
		"openning_start": 251.02499999999998,
		"openning_end": 341.116667,
		"ending_start": 1273.2872705
	},
	"292": {
		"openning_start": 95.1004375,
		"openning_end": 185.1921045,
		"ending_start": 1179.6398545000002
	},
	"299": {
		"openning_start": 151.050125,
		"openning_end": 241.141792,
		"ending_start": 1267.667125
	},
	"300": {
		"openning_start": 110.09256250000001,
		"openning_end": 200.18422950000001,
		"ending_start": 1153.896542
	},
	"301": {
		"openning_start": 98.0708125,
		"openning_end": 188.16247950000002,
		"ending_start": 1087.8356455
	},
	"296": {
		"openning_start": 180.0790625,
		"openning_end": 270.1707295,
		"ending_start": 1106.054083
	},
	"297": {
		"openning_start": 0.02424999999999855,
		"openning_end": 90.115917,
		"ending_start": 1258.6851669999999
	},
	"298": {
		"openning_start": 159.058125,
		"openning_end": 249.149792,
		"ending_start": 1165.4896455
	},
	"305": {
		"openning_start": 210.02575,
		"openning_end": 300.117417,
		"ending_start": 1172.755792
	},
	"306": {
		"openning_start": 357.0475625,
		"openning_end": 447.13922950000006,
		"ending_start": 1164.705
	},
	"307": {
		"openning_start": 92.038375,
		"openning_end": 182.130042,
		"ending_start": 1096.5859580000001
	},
	"302": {
		"openning_start": 157.056125,
		"openning_end": 247.147792,
		"ending_start": 1267.6670625
	},
	"303": {
		"openning_start": 280.054,
		"openning_end": 370.145667,
		"ending_start": 1065.4871455
	},
	"304": {
		"openning_start": 327.017625,
		"openning_end": 417.109292,
		"ending_start": 1109.1943955
	},
	"311": {
		"openning_start": 0.02131250000000051,
		"openning_end": 90.1129795,
		"ending_start": 1307.7071875
	},
	"312": {
		"openning_start": 183.9966875,
		"openning_end": 274.08835450000004,
		"ending_start": 1307.6438125
	},
	"313": {
		"openning_start": 198.0525,
		"openning_end": 288.14416700000004,
		"ending_start": 1078.3964999999998
	},
	"308": {
		"openning_start": 0.02131250000000051,
		"openning_end": 90.1129795,
		"ending_start": 1307.7742704999998
	},
	"309": {
		"openning_start": 257.0280625,
		"openning_end": 347.11972949999995,
		"ending_start": 1307.620958
	},
	"310": {
		"openning_start": 0.021249999999998437,
		"openning_end": 90.112917,
		"ending_start": 1307.6404375
	},
	"317": {
		"openning_start": 124.02012500000001,
		"openning_end": 214.111792,
		"ending_start": 1307.7102295
	},
	"318": {
		"openning_start": 523.919625,
		"openning_end": 614.011292,
		"ending_start": 1307.5603749999998
	},
	"319": {
		"openning_start": 0.02131250000000051,
		"openning_end": 90.1129795,
		"ending_start": 1211.6231455
	},
	"314": {
		"openning_start": 0.021249999999998437,
		"openning_end": 90.112917,
		"ending_start": 1307.5932295
	},
	"315": {
		"openning_start": 125.0211875,
		"openning_end": 215.1128545,
		"ending_start": 1307.6275205
	},
	"316": {
		"openning_start": 84.0635625,
		"openning_end": 174.15522950000002,
		"ending_start": 1307.7105625
	},
	"323": {
		"openning_start": 165.279,
		"openning_end": 255.370667,
		"ending_start": 1309.6851875000002
	},
	"324": {
		"openning_start": 0.2612500000000004,
		"openning_end": 90.352917,
		"ending_start": 1309.62075
	},
	"325": {
		"openning_start": 345.251125,
		"openning_end": 435.34279200000003,
		"ending_start": 1309.6694795
	},
	"320": {
		"openning_start": 0.021374999999999034,
		"openning_end": 90.11304200000001,
		"ending_start": 1309.470542
	},
	"321": {
		"openning_start": 212.0248125,
		"openning_end": 302.11647949999997,
		"ending_start": 1309.4667705
	},
	"322": {
		"openning_start": 121.23712499999999,
		"openning_end": 211.328792,
		"ending_start": 1309.6195625
	},
	"329": {
		"openning_start": 0.21875,
		"openning_end": 90.310417,
		"ending_start": 1309.4113125
	},
	"330": {
		"openning_start": 133.290875,
		"openning_end": 223.382542,
		"ending_start": 1309.687375
	},
	"331": {
		"openning_start": 60.3011875,
		"openning_end": 150.3928545,
		"ending_start": 1309.6202295
	},
	"326": {
		"openning_start": 116.31549999999999,
		"openning_end": 206.407167,
		"ending_start": 1309.7290625
	},
	"327": {
		"openning_start": 158.274125,
		"openning_end": 248.365792,
		"ending_start": 1309.6873125000002
	},
	"328": {
		"openning_start": 0.24125000000000085,
		"openning_end": 90.33291700000001,
		"ending_start": 1196.8401250000002
	},
	"335": {
		"openning_start": 203.015875,
		"openning_end": 293.10754199999997,
		"ending_start": 1278.293583
	},
	"336": {
		"openning_start": 0.023499999999998522,
		"openning_end": 90.115167,
		"ending_start": 1068.2511455
	},
	"337": {
		"openning_start": 307.997875,
		"openning_end": 398.08954200000005,
		"ending_start": 1211.6729579999999
	},
	"332": {
		"openning_start": 156.272125,
		"openning_end": 246.363792,
		"ending_start": 1309.619958
	},
	"333": {
		"openning_start": 73.05275,
		"openning_end": 163.144417,
		"ending_start": 1106.0744375000002
	},
	"334": {
		"openning_start": 19.040437500000003,
		"openning_end": 109.1321045,
		"ending_start": 1162.1234375
	},
	"341": {
		"openning_start": 0.023562500000000597,
		"openning_end": 90.1152295,
		"ending_start": 1122.6058329999998
	},
	"342": {
		"openning_start": 128.0264375,
		"openning_end": 218.1181045,
		"ending_start": 1142.895708
	},
	"343": {
		"openning_start": 272.0453125,
		"openning_end": 362.13697950000005,
		"ending_start": 1182.4451875
	},
	"338": {
		"openning_start": 172.0704375,
		"openning_end": 262.1621045,
		"ending_start": 1332.32
	},
	"339": {
		"openning_start": 160.059625,
		"openning_end": 250.151292,
		"ending_start": 1327.7715
	},
	"340": {
		"openning_start": 0.023562500000000597,
		"openning_end": 90.1152295,
		"ending_start": 1221.5740624999999
	},
	"347": {
		"openning_start": 0.0011249999999982663,
		"openning_end": 90.092792,
		"ending_start": 1135.30575
	},
	"348": {
		"openning_start": 0.0010624999999997442,
		"openning_end": 90.0927295,
		"ending_start": 1265.998125
	},
	"349": {
		"openning_start": 53.076562499999994,
		"openning_end": 143.1682295,
		"ending_start": 1176.5221044999998
	},
	"344": {
		"openning_start": 70.051875,
		"openning_end": 160.143542,
		"ending_start": 1212.7152704999999
	},
	"345": {
		"openning_start": 0.023562500000000597,
		"openning_end": 90.1152295,
		"ending_start": 1113.4231874999998
	},
	"346": {
		"openning_start": 0.02362499999999912,
		"openning_end": 90.115292,
		"ending_start": 1205.9288955
	},
	"353": {
		"openning_start": 0.023562500000000597,
		"openning_end": 90.1152295,
		"ending_start": 1292.6309795
	},
	"354": {
		"openning_start": 0.02362499999999912,
		"openning_end": 90.115292,
		"ending_start": 1205.2731454999998
	},
	"355": {
		"openning_start": 0.023562500000000597,
		"openning_end": 90.1152295,
		"ending_start": 1131.3072499999998
	},
	"350": {
		"openning_start": 0.023562500000000597,
		"openning_end": 90.1152295,
		"ending_start": 1115.279083
	},
	"351": {
		"openning_start": 0.023562500000000597,
		"openning_end": 90.1152295,
		"ending_start": 1292.6729999999998
	},
	"352": {
		"openning_start": 0.023499999999998522,
		"openning_end": 90.115167,
		"ending_start": 1292.7817705
	},
	"359": {
		"openning_start": 0.021562500000001705,
		"openning_end": 90.1132295,
		"ending_start": 1216.7321874999998
	},
	"360": {
		"openning_start": 0.023749999999999716,
		"openning_end": 90.11541700000001,
		"ending_start": 1295.6381875
	},
	"361": {
		"openning_start": -0.004937500000000483,
		"openning_end": 90.0867295,
		"ending_start": 1061.3984375
	},
	"356": {
		"openning_start": 0.013562499999999034,
		"openning_end": 90.10522950000001,
		"ending_start": 1292.6887295000001
	},
	"357": {
		"openning_start": 0.0727499999999992,
		"openning_end": 90.164417,
		"ending_start": 1334.2698545
	},
	"358": {
		"openning_start": 0.021562500000001705,
		"openning_end": 90.1132295,
		"ending_start": 1139.8345
	},
	"365": {
		"openning_start": 0.023687500000001194,
		"openning_end": 90.1153545,
		"ending_start": 1214.9349375
	},
	"366": {
		"openning_start": 0.023687500000001194,
		"openning_end": 90.1153545,
		"ending_start": 1148.7441875
	},
	"367": {
		"openning_start": 57.091875,
		"openning_end": 147.183542,
		"ending_start": 1330.648625
	},
	"362": {
		"openning_start": 304.995,
		"openning_end": 395.08666700000003,
		"ending_start": 1087.402292
	},
	"363": {
		"openning_start": 0.023812499999998238,
		"openning_end": 90.11547949999999,
		"ending_start": 1085.5758329999999
	},
	"364": {
		"openning_start": 0.023687500000001194,
		"openning_end": 90.1153545,
		"ending_start": 1149.7169374999999
	},
	"371": {
		"openning_start": 27.061812500000002,
		"openning_end": 117.1534795,
		"ending_start": 1297.7379170000002
	},
	"372": {
		"openning_start": 0.03687499999999844,
		"openning_end": 90.128542,
		"ending_start": 1165.9085625
	},
	"373": {
		"openning_start": 66.06125,
		"openning_end": 156.152917,
		"ending_start": 1080.5519375000001
	},
	"368": {
		"openning_start": 0.03481250000000102,
		"openning_end": 90.1264795,
		"ending_start": 1300.0076875
	},
	"369": {
		"openning_start": 51.0625,
		"openning_end": 141.154167,
		"ending_start": 1135.5680205
	},
	"370": {
		"openning_start": 0.012250000000001648,
		"openning_end": 90.103917,
		"ending_start": 1082.672125
	},
	"377": {
		"openning_start": 0.036999999999999034,
		"openning_end": 90.12866700000001,
		"ending_start": 1134.0200625000002
	},
	"378": {
		"openning_start": 11.089687499999997,
		"openning_end": 101.1813545,
		"ending_start": 1137.736625
	},
	"379": {
		"openning_start": 0.03693750000000051,
		"openning_end": 90.1286045,
		"ending_start": 1190.0228125
	},
	"374": {
		"openning_start": 58.095,
		"openning_end": 148.186667,
		"ending_start": 1300.0760205000001
	},
	"375": {
		"openning_start": 119.11418750000001,
		"openning_end": 209.20585450000002,
		"ending_start": 1153.017542
	},
	"376": {
		"openning_start": 0.036999999999999034,
		"openning_end": 90.12866700000001,
		"ending_start": 1124.9025
	},
	"383": {
		"openning_start": 0.02618749999999892,
		"openning_end": 90.11785449999999,
		"ending_start": 1293.839208
	},
	"384": {
		"openning_start": 88.0725625,
		"openning_end": 178.1642295,
		"ending_start": 1293.9727705
	},
	"385": {
		"openning_start": 75.061625,
		"openning_end": 165.15329200000002,
		"ending_start": 1213.483458
	},
	"380": {
		"openning_start": 0.02787500000000165,
		"openning_end": 90.119542,
		"ending_start": 1293.7996249999999
	},
	"381": {
		"openning_start": 357.0495625,
		"openning_end": 447.1412295,
		"ending_start": 1293.9056874999999
	},
	"382": {
		"openning_start": 141.0368125,
		"openning_end": 231.1284795,
		"ending_start": 1077.1903125000001
	},
	"389": {
		"openning_start": 0.028437499999999005,
		"openning_end": 90.1201045,
		"ending_start": 1073.4318750000002
	},
	"390": {
		"openning_start": 0.028437499999999005,
		"openning_end": 90.1201045,
		"ending_start": 1293.8254375000001
	},
	"391": {
		"openning_start": 286.0640625,
		"openning_end": 376.1557295,
		"ending_start": 1185.4915205
	},
	"386": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1293.842
	},
	"387": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1293.842
	},
	"388": {
		"openning_start": 0.02831249999999841,
		"openning_end": 90.1199795,
		"ending_start": 1293.9915205
	},
	"395": {
		"openning_start": 71.057625,
		"openning_end": 161.149292,
		"ending_start": 1216.41425
	},
	"396": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1208.0698125000001
	},
	"397": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1205.973583
	},
	"392": {
		"openning_start": 37.065375,
		"openning_end": 127.157042,
		"ending_start": 1216.6684375
	},
	"393": {
		"openning_start": 91.0776875,
		"openning_end": 181.1693545,
		"ending_start": 1293.8413955
	},
	"394": {
		"openning_start": 234.0538125,
		"openning_end": 324.14547949999996,
		"ending_start": 1082.4305625
	},
	"401": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1317.145917
	},
	"402": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1063.988792
	},
	"403": {
		"openning_start": 164.04475,
		"openning_end": 254.136417,
		"ending_start": 1182.6079375
	},
	"398": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1207.4745625
	},
	"399": {
		"openning_start": 0.028375000000000483,
		"openning_end": 90.120042,
		"ending_start": 1330.08825
	},
	"400": {
		"openning_start": 0.023125000000000284,
		"openning_end": 90.114792,
		"ending_start": 1214.9763329999998
	},
	"407": {
		"openning_start": 39.065375,
		"openning_end": 129.157042,
		"ending_start": 1304.238375
	},
	"408": {
		"openning_start": 0.02637500000000159,
		"openning_end": 90.118042,
		"ending_start": 1083.116583
	},
	"409": {
		"openning_start": 0.026312499999999517,
		"openning_end": 90.1179795,
		"ending_start": 1140.7930000000001
	},
	"404": {
		"openning_start": 71.0576875,
		"openning_end": 161.14935450000002,
		"ending_start": 1317.1456455
	},
	"413": {
		"openning_start": 0.026312499999999517,
		"openning_end": 90.1179795,
		"ending_start": 1304.255333
	},
	"405": {
		"openning_start": 0.02831249999999841,
		"openning_end": 90.1199795,
		"ending_start": 1061.1936875000001
	},
	"406": {
		"openning_start": 98.0826875,
		"openning_end": 188.1743545,
		"ending_start": 1304.2394375000001
	},
	"414": {
		"openning_start": 88.067375,
		"openning_end": 178.159042,
		"ending_start": 1214.6051875
	},
	"415": {
		"openning_start": 0.026312499999999517,
		"openning_end": 90.1179795,
		"ending_start": 1304.3217499999998
	},
	"410": {
		"openning_start": 0.02637500000000159,
		"openning_end": 90.118042,
		"ending_start": 1304.3218124999999
	},
	"419": {
		"openning_start": 0.021062499999999318,
		"openning_end": 90.1127295,
		"ending_start": 1297.8353124999999
	},
	"411": {
		"openning_start": 0.026437500000000114,
		"openning_end": 90.1181045,
		"ending_start": 1205.0211875
	},
	"412": {
		"openning_start": 0.026437500000000114,
		"openning_end": 90.1181045,
		"ending_start": 1102.0888955
	},
	"420": {
		"openning_start": 38.064375,
		"openning_end": 128.156042,
		"ending_start": 1297.8406249999998
	},
	"421": {
		"openning_start": 171.0721875,
		"openning_end": 261.1638545,
		"ending_start": 1099.904958
	},
	"416": {
		"openning_start": 0.026437500000000114,
		"openning_end": 90.1181045,
		"ending_start": 1128.4592499999999
	},
	"425": {
		"openning_start": 29.01375,
		"openning_end": 119.105417,
		"ending_start": 1172.1932080000001
	},
	"417": {
		"openning_start": 0.026312499999999517,
		"openning_end": 90.1179795,
		"ending_start": 1159.9245
	},
	"418": {
		"openning_start": 73.057625,
		"openning_end": 163.149292,
		"ending_start": 1297.774542
	},
	"427": {
		"openning_start": -0.020562500000000483,
		"openning_end": 90.0711045,
		"ending_start": 1297.704042
	},
	"426": {
		"openning_start": 39.023687499999994,
		"openning_end": 129.1153545,
		"ending_start": 1297.737708
	},
	"422": {
		"openning_start": 99.0784375,
		"openning_end": 189.1701045,
		"ending_start": 1297.7711454999999
	},
	"431": {
		"openning_start": 58.001000000000005,
		"openning_end": 148.092667,
		"ending_start": 1297.737625
	},
	"423": {
		"openning_start": 0.021125000000001393,
		"openning_end": 90.112792,
		"ending_start": 1109.8625625
	},
	"424": {
		"openning_start": 112.09662499999999,
		"openning_end": 202.188292,
		"ending_start": 1071.657083
	},
	"433": {
		"openning_start": 86.0301875,
		"openning_end": 176.12185449999998,
		"ending_start": 1158.809125
	},
	"432": {
		"openning_start": -0.014124999999999943,
		"openning_end": 90.077542,
		"ending_start": 1280.1456455
	},
	"437": {
		"openning_start": 190.8195,
		"openning_end": 280.911167,
		"ending_start": 1126.1604375
	},
	"428": {
		"openning_start": -0.015312500000000284,
		"openning_end": 90.07635450000001,
		"ending_start": 1110.967333
	},
	"429": {
		"openning_start": 31.974937500000003,
		"openning_end": 122.06660450000001,
		"ending_start": 1297.7999795
	},
	"430": {
		"openning_start": -0.015437500000000881,
		"openning_end": 90.0762295,
		"ending_start": 1146.0447705000001
	},
	"439": {
		"openning_start": 80.8763125,
		"openning_end": 170.9679795,
		"ending_start": 1280.063125
	},
	"438": {
		"openning_start": 75.8713125,
		"openning_end": 165.96297950000002,
		"ending_start": 1216.8885
	},
	"443": {
		"openning_start": 74.8703125,
		"openning_end": 164.96197949999998,
		"ending_start": 1279.9300205
	},
	"434": {
		"openning_start": -0.12600000000000122,
		"openning_end": 89.965667,
		"ending_start": 1110.6151875
	},
	"435": {
		"openning_start": 71.90425,
		"openning_end": 161.99591700000002,
		"ending_start": 1062.87875
	},
	"445": {
		"openning_start": -0.16300000000000026,
		"openning_end": 89.928667,
		"ending_start": 1206.78025
	},
	"436": {
		"openning_start": 133.845875,
		"openning_end": 223.937542,
		"ending_start": 1279.9964375
	},
	"444": {
		"openning_start": 27.865000000000002,
		"openning_end": 117.95666700000001,
		"ending_start": 1171.8750625
	},
	"449": {
		"openning_start": 151.8633125,
		"openning_end": 241.9549795,
		"ending_start": 1101.1714375
	},
	"440": {
		"openning_start": 90.918,
		"openning_end": 181.009667,
		"ending_start": 1163.7916045
	},
	"441": {
		"openning_start": 147.974,
		"openning_end": 238.065667,
		"ending_start": 1166.4937705
	},
	"451": {
		"openning_start": 26.8635625,
		"openning_end": 116.9552295,
		"ending_start": 1290.9700625
	},
	"442": {
		"openning_start": -0.16300000000000026,
		"openning_end": 89.928667,
		"ending_start": 1090.59625
	},
	"450": {
		"openning_start": 35.8725,
		"openning_end": 125.964167,
		"ending_start": 1087.6821875
	},
	"455": {
		"openning_start": 19.748624999999997,
		"openning_end": 109.840292,
		"ending_start": 1265.7525624999998
	},
	"446": {
		"openning_start": -0.16293750000000173,
		"openning_end": 89.9287295,
		"ending_start": 1072.0892705
	},
	"447": {
		"openning_start": 97.851625,
		"openning_end": 187.94329199999999,
		"ending_start": 1180.0659999999998
	},
	"457": {
		"openning_start": -0.18799999999999883,
		"openning_end": 89.903667,
		"ending_start": 1265.702833
	},
	"448": {
		"openning_start": -0.15287500000000165,
		"openning_end": 89.938792,
		"ending_start": 1103.695792
	},
	"456": {
		"openning_start": -0.27137499999999903,
		"openning_end": 89.820292,
		"ending_start": 1269.560125
	},
	"461": {
		"openning_start": -0.18568750000000023,
		"openning_end": 89.9059795,
		"ending_start": 1271.7174375000002
	},
	"452": {
		"openning_start": 31.868562500000003,
		"openning_end": 121.9602295,
		"ending_start": 1070.5726455
	},
	"453": {
		"openning_start": -0.16356250000000117,
		"openning_end": 89.9281045,
		"ending_start": 1175.8685624999998
	},
	"463": {
		"openning_start": 85.858625,
		"openning_end": 175.950292,
		"ending_start": 1271.7831875
	},
	"454": {
		"openning_start": 110.86406249999999,
		"openning_end": 200.9557295,
		"ending_start": 1331.5865
	},
	"462": {
		"openning_start": -0.18568750000000023,
		"openning_end": 89.9059795,
		"ending_start": 1271.650083
	},
	"467": {
		"openning_start": 88.8610625,
		"openning_end": 178.9527295,
		"ending_start": 1086.359625
	},
	"458": {
		"openning_start": -0.27137499999999903,
		"openning_end": 89.820292,
		"ending_start": 1265.6194580000001
	},
	"459": {
		"openning_start": 178.8681875,
		"openning_end": 268.9598545,
		"ending_start": 1271.7174375000002
	},
	"469": {
		"openning_start": 62.83506250000001,
		"openning_end": 152.92672950000002,
		"ending_start": 1295.838583
	},
	"460": {
		"openning_start": 67.8405625,
		"openning_end": 157.9322295,
		"ending_start": 1176.6345000000001
	},
	"468": {
		"openning_start": 125.814625,
		"openning_end": 215.906292,
		"ending_start": 1291.1225000000002
	},
	"473": {
		"openning_start": 253.81743749999998,
		"openning_end": 343.9091045,
		"ending_start": 1295.8385205
	},
	"464": {
		"openning_start": 117.84887499999999,
		"openning_end": 207.940542,
		"ending_start": 1271.7174375000002
	},
	"475": {
		"openning_start": 23.8593125,
		"openning_end": 113.9509795,
		"ending_start": 1175.3780625000002
	},
	"465": {
		"openning_start": -0.18618749999999906,
		"openning_end": 89.9054795,
		"ending_start": 1271.649583
	},
	"466": {
		"openning_start": -0.18625000000000114,
		"openning_end": 89.905417,
		"ending_start": 1271.6495205
	},
	"474": {
		"openning_start": 164.8751875,
		"openning_end": 254.9668545,
		"ending_start": 1295.860083
	},
	"479": {
		"openning_start": -0.1647500000000015,
		"openning_end": 89.926917,
		"ending_start": 1250.9241875
	},
	"470": {
		"openning_start": 39.87531250000001,
		"openning_end": 129.9669795,
		"ending_start": 1137.9493955
	},
	"481": {
		"openning_start": -0.16256249999999994,
		"openning_end": 89.9291045,
		"ending_start": 1186.518708
	},
	"472": {
		"openning_start": 53.8893125,
		"openning_end": 143.9809795,
		"ending_start": 1125.593208
	},
	"471": {
		"openning_start": 65.8595625,
		"openning_end": 155.9512295,
		"ending_start": 1110.812333
	},
	"480": {
		"openning_start": -0.16256249999999994,
		"openning_end": 89.9291045,
		"ending_start": 1342.3601455
	},
	"485": {
		"openning_start": -0.16256249999999994,
		"openning_end": 89.9291045,
		"ending_start": 1191.786
	},
	"476": {
		"openning_start": 58.8943125,
		"openning_end": 148.98597949999998,
		"ending_start": 1295.9275
	},
	"487": {
		"openning_start": 0.10331250000000125,
		"openning_end": 90.1949795,
		"ending_start": 1281.98175
	},
	"478": {
		"openning_start": 82.8765625,
		"openning_end": 172.9682295,
		"ending_start": 1283.80925
	},
	"477": {
		"openning_start": -0.18568750000000023,
		"openning_end": 89.9059795,
		"ending_start": 1182.559833
	},
	"491": {
		"openning_start": 51.112562499999996,
		"openning_end": 141.2042295,
		"ending_start": 1101.447292
	},
	"486": {
		"openning_start": 0.061437500000000256,
		"openning_end": 90.1531045,
		"ending_start": 1282.1915625000001
	},
	"482": {
		"openning_start": -0.16256249999999994,
		"openning_end": 89.9291045,
		"ending_start": 1282.0342500000002
	},
	"493": {
		"openning_start": 0.06149999999999878,
		"openning_end": 90.153167,
		"ending_start": 1299.8477295
	},
	"484": {
		"openning_start": 68.823125,
		"openning_end": 158.914792,
		"ending_start": 1282.0343750000002
	},
	"483": {
		"openning_start": -0.12081249999999955,
		"openning_end": 89.9708545,
		"ending_start": 1282.0760625
	},
	"497": {
		"openning_start": 15.076562500000001,
		"openning_end": 105.1682295,
		"ending_start": 1299.764625
	},
	"492": {
		"openning_start": 15.076500000000003,
		"openning_end": 105.16816700000001,
		"ending_start": 1102.084875
	},
	"488": {
		"openning_start": 0.06156250000000085,
		"openning_end": 90.15322950000001,
		"ending_start": 1282.2571045
	},
	"499": {
		"openning_start": 0.06149999999999878,
		"openning_end": 90.153167,
		"ending_start": 1215.94075
	},
	"490": {
		"openning_start": 33.073,
		"openning_end": 123.16466700000001,
		"ending_start": 1299.8094795
	},
	"489": {
		"openning_start": 0.039937500000000625,
		"openning_end": 90.13160450000001,
		"ending_start": 1299.809417
	},
	"498": {
		"openning_start": 156.0924375,
		"openning_end": 246.1841045,
		"ending_start": 1299.723
	},
	"494": {
		"openning_start": 143.079375,
		"openning_end": 233.171042,
		"ending_start": 1299.844792
	},
	"496": {
		"openning_start": 41.102500000000006,
		"openning_end": 131.194167,
		"ending_start": 1299.8313125
	},
	"495": {
		"openning_start": 0.06149999999999878,
		"openning_end": 90.153167,
		"ending_start": 1299.7822500000002
	},
	"500": {
		"openning_start": 99.0555,
		"openning_end": 189.147167,
		"ending_start": 1299.827167
	}
};

export const titles = {
	"001": "De Volta Para Casa",
	"002": "A Akatsuki Faz Seu Movimento",
	"003": "Os Resultados do Treinamento",
	"004": "Jinchuuriki da Areia",
	"005": "A Coragem do Kazegake...",
	"006": "Missão Cumprida",
	"007": "Corra, Kankuro",
	"008": "Time Kakashi Se Prepara!",
	"009": "Lágrimas do Jinchuuriki",
	"010": "Jutsu de Selamento: Nove Dragões Fantasmas",
	"011": "A Pupila da Médica Ninja",
	"012": "A Decisão da Velha Aposentada",
	"013": "O Encontro do Destino",
	"014": "O Crescimento de Naruto",
	"015": "A Arma Seccreta é Chamada...",
	"016": "O Segredo do Jinchuuriki!",
	"017": "A Morte do Gaara!",
	"018": "Invasão! A Investida Gancho Lateral!",
	"019": "Ativar Armadilhas! Os Inimigos do Time Gai!",
	"020": "Hiruko Contra Duas Kunoichi!",
	"021": "A Verdadeira Face de Sasori",
	"022": "As Habilidades Secretas de Chiyo",
	"023": "Pai e Mãe",
	"024": "O Sandaime Kazekage",
	"025": "Três Minutos Entre a Vida e a Morte",
	"026": "Luta de Marionetes: 10 Contra 100!",
	"027": "Sonho Impossível",
	"028": "As Feras Renascidas!",
	"029": "Kakashi Evoluido",
	"030": "A Beleza de um Segundo",

	"031": "O Legado",
	"032": "O Retorno do Kazekage",
	"033": "O Novo Alvo",
	"034": "Formação! O Novo Time Kakashi",
	"035": "Uma Adição Desnecessária",
	"036": "O Sorrido Falso",
	"037": "Sem Título",
	"038": "Simulação",
	"039": "A Ponte Tenchi",
	"040": "Kyuubi Liberada!!",
	"041": "A Missão Super Secreta Começa",
	"042": "Orochimaru Vs. Jinchuuriki",
	"043": "As Lágrimas de Sakura",
	"044": "O Segredo da Batalha!",
	"045": "As Consequências da Traição",
	"046": "A Página Inacabada",
	"047": "Infiltração: O Ninho da Cobra",
	"048": "Laços",
	"049": "Algo Importante",
	"050": "A História do Livro de Desenhos",
	"051": "Reencontro",
	"052": "O Poder dos Uchiha",
	"053": "Título",

	"054": "Pesadelo (Semi-Filler)",
	"055": "Vento",
	"056": "Contorcer",
	"057": "Desprovido do Descanso Eterno (Filler)",
	"058": "Solidão (Filler)",
	"059": "Um Novo Inimigo (Filler)",
	"060": "Roda da Sorte (Filler)",
	"061": "Contato (Filler)",
	"062": "Companheiro (Filler)",
	"063": "Os Dois Reis (Filler)",
	"064": "Sinal de Fogo Preto e Brilhoso (Filler)",
	"065": "Confinados pela Escuridão (Filler)",
	"066": "Almas Revividas (Filler)",
	"067": "Todos se Esforçando até a Morte (Filler)",
	"068": "Momento do Despertar (Filler)",
	"069": "Desespero (Filler)",
	"070": "Ressonância (Filler)",
	"071": "Meu Amigo (Semi-Filler)",
	"072": "A Ameaça que se Aproxima Sorrateiramente",
	"073": "A Invasão da Akatsuki",
	"074": "Sob o Céu Estrelado",
	"075": "A Oração do Velho Monge",
	"076": "O Próximo Passo",
	"077": "Escalada de Prata",

	"078": "O Julgamento",
	"079": "O Grito Que Não o Alcançou",
	"080": "Últimas Palavras",
	"081": "Notícias Tristes",
	"082": "Time 10",
	"083": "Alvo Na Mira",
	"084": "As Habilidades de Kakuzu",
	"085": "O Segredo Assustador",
	"086": "A Genialidade de Shikamaru",
	"087": "Quando Amaldiçoamos Alguém, Cavamos a Propria Cova",
	"088": "Futon: Rasen Shuriken!",
	"089": "O Preço do Poder",
	"090": "A Determinação de Um Ninja (Semi-Filler)",
	"091": "O Esconderijo de Orochimaru é Descoberto! (Semi-Filler)",
	"092": "Encontro (Semi-Filler)",
	"093": "Conectando Corações (Filler)",
	"094": "Uma Noite de Chuva (Filler)",
	"095": "As Duas Lembranças (Filler)",
	"096": "O Inimigo Que Não Se Vê (Filler)",
	"097": "O Labirinto de Reflexo Distorcido (Filler)",
	"098": "O Alvo Aparece (Filler)",
	"099": "A Bijuu Enlouquecida (Filler)",
	"100": "Dentro da Névoa (Filler)",
	"101": "O Sentimento de Todos (Filler)",
	"102": "Reagrupar! (Filler)",

	"103": "A Barreira de Selamento de Quatro Cantos (Filler)",
	"104": "Quebrando o Shouton (Filler)",
	"105": "A Batalha Pela Barreira (Filler)",
	"106": "Camélia Vermelha (Filler)",
	"107": "Companheiros Estranhos (Filler)",
	"108": "O Caminho para a Camélia (Filler)",
	"109": "Contra-Ataque da Marca da Maldição (Filler)",
	"110": "Memórias de Culpa (Filler)",
	"111": "Promessa Quebrada (Filler)",
	"112": "Um Lugar para Voltar (Semi-Filler)",
	"113": "O Discípulo da Serpente",
	"114": "Olho de Falcão",
	"115": "A Espada de Zabuza (Semi-Filler)",
	"116": "Guardiã da Muralha de Aço",
	"117": "Juugo do Escoderijo Norte",
	"118": "Formação",
	"119": "Crônicas de Kakashi ~A vida de um Menino no Campo de Batalha~ Parte 1 (Gaiden)",
	"120": "Crônicas de Kakashi ~A vida de um Menino no Campo de Batalha~ Parte 2 (Gaiden)",
	"121": "Reunir",
	"122": "A Caçada",
	"123": "Colisão!",
	"124": "Arte",
	"125": "Desaparecimento",
	"126": "Crepúsculo",
	"127": "Contos de um Ninja Corajoso ~Pergaminhos Ninja de Jiraya~ Parte 1 (Gaiden)",
	"128": "Contos de um Ninja Corajoso ~Pergaminhos Ninja de Jiraya~ Parte 2 (Gaiden)",

	"129": "Infiltração! A Vila Oculta da Chuva",
	"130": "O Homem Que Virou Deus",
	"131": "Ativar! Modo Sennin",
	"132": "Apresentando: Os Seis Caminhos de Pain",
	"133": "O Conto do Valente Jiraya",
	"134": "Convite para o Banquete",
	"135": "O Momento mais Longo...",
	"136": "A Luz e a Escuridão do Mangekyo Sharingan",
	"137": "Amaterasu",
	"138": "O Fim",
	"139": "O Mistério de Tobi",
	"140": "Destino",
	"141": "Verdade",
	"142": "A Batalha no Desfiladeiro do Trovão",
	"143": "Hachibi versus Sasuke",
	"144": "Andarilho (Filler)",
	"145": "Sucessora do Jutsu Proibido (Filler)",
	"146": "O Desejo da Sucessora (Filler)",
	"147": "O Passado do Ninja Renegado (Filler)",
	"148": "Herdeira da Escuridão (Filler)",
	"149": "Separação (Filler)",
	"150": "Jutsu Proibido Liberado (Filler)",
	"151": "Mestre e Aluno (Filler)",
	"152": "Notícias Sombrias",
	"153": "Seguindo a Sombra do Mestre",

	"154": "Decodificação",
	"155": "O Primeiro Desafio",
	"156": "Superando o Mestre",
	"157": "Ataque à Vila Oculta de Konoha!",
	"158": "O Poder de Acreditar",
	"159": "Pain versus Kakashi",
	"160": "O Mistério de Pain",
	"161": "Sobrenome, Sarutobi! Nome, Konohamaru!",
	"162": "Dor ao Mundo",
	"163": "Explosão! Modo Sennin",
	"164": "Perigo! Alcançado o Limite do Modo Sennin",
	"165": "Kyuubi Capturada!",
	"166": "Confissão",
	"167": "Chibaku Tensei",
	"168": "O Quarto Hokage",
	"169": "Os Dois Pupilos",
	"170": "A Busca Pelo Legado do Quarto Hokage Parte 1 (Omake)",
	"171": "A Busca Pelo Legado do Quarto Hokage Parte 2 (Omake)",
	"172": "Encontro",
	"173": "A Origem de Pain",
	"174": "Contos do Uzumaki Naruto",
	"175": "O Herói de Konoha",
	"176": "A História de Konoha O Instrutor Iruka (Semi-Filler)",
	"177": "A História de Konoha O Juízo do Iruka (Filler)",
	"178": "A História de Konoha A Decisão de Iruka (Semi-Filler)",
	"179": "Hatake Kakashi O Jounin no Comando (Semi-Filler)",

	"180": "A Coragem de Inari Posta a Prova (Semi-Filler)",
	"181": "Os Ensinamentos Sobre Vingança de Naruto (Semi-Filler)",
	"182": "O Vínculo de Gaara (Filler)",
	"183": "Naruto: Incontrolável (Filler)",
	"184": "Posicionamento: Time Tenten! (Filler)",
	"185": "Distrito Animal (Filler)",
	"186": "Ah, a Medicina da Juventude (Filler)",
	"187": "Mestre e Aluno Corajosos: O Treinamento (Filler)",
	"188": "Memórias dos Corajosos Mestre e Aluno (Filler)",
	"189": "Enciclopédia de Patas do Sasuke (Filler)",
	"190": "Naruto e o Velho Soldado (Filler)",
	"191": "A Música de Amor de Kakashi (Filler)",
	"192": "As Crônicas de Neji (Filler)",
	"193": "O Homem que Morreu Duas Vezes (Filler)",
	"194": "A Pior Corrida de Três Pernas (Filler)",
	"195": "Cooperação, Time 10! (Filler)",
	"196": "Avançando pela Escuridão (Filler)",
	"197": "O Sexto Hokage Danzou",
	"198": "Véspera de Reunião dos Cinco Kages",
	"199": "Apareçam, Cinco Kages!",
	"200": "Fundamento de Naruto",
	"201": "A Dolorosa Decisão",
	"202": "Corrida Relâmpago",
	"203": "O Jeito Ninja de Sasuke",
	"204": "A Força dos Cinco Kages",
	"205": "Declaração de Guerra",

	"206": "Os Sentimentos de Sakura",
	"207": "Bijuu Vs. Bijuu Sem Cauda",
	"208": "Como um Amigo",
	"209": "O Braço Direito de Danzou",
	"210": "O Doujutsu Proibído!",
	"211": "Shimura Danzou",
	"212": "A Decisão de Sakura",
	"213": "Laços Rompidos",
	"214": "O Fardo Que Devo Carregar",
	"215": "Os Dois Destinos",
	"216": "Shinobi Classe A",
	"217": "Infiltrados",
	"218": "As Cinco Grandes Nações se Movem",
	"219": "O Hokage Kakashi Hatake! (Semi-Filler)",
	"220": "A Profecia do Oogama-sennin",
	"221": "Armazenagem!",
	"222": "A Decisão dos Cinco Kages",
	"223": "O Jovem e o Mar (Filler)",
	"224": "O Mercador Ninja de Benisu (Filler)",
	"225": "O Navio Fantasma Amaldiçoado (Filler)",
	"226": "A Ilha do Navio de Guerra (Filler)",
	"227": "A Ilha Perdida (Filler)",
	"228": "Lute! Rock Lee! (Filler)",
	"229": "Coma ou Morra! Os Cogumelos do Inferno! (Filler)",
	"230": "A Vingança dos Clones da Sombra (Filler)",

	"231": "Os A Rota Fechada (Filler)",
	"232": "As Meninas se Reúnem (Filler)",
	"233": "Os Impostores de Naruto (Filler)",
	"234": "O Pupilo Favorito de Naruto (Filler)",
	"235": "A Kunoichi de Nadeshiko (Filler)",
	"236": "Amigos em Quem Possa Confiar (Filler)",
	"237": "Minha Heroína, Tsunade-sama (Filler)",
	"238": "O Dia de Folga de Sai (Filler)",
	"239": "O Lendário Ino-Shika-Cho (Filler)",
	"240": "A Determinação do Kiba (Filler)",
	"241": "Kakashi, Meu Eterno Rival (Filler)",
	"242": "O Voto de Naruto (Filler)",
	"243": "Terra a Vista! Será essa a Ilha Paradisíaca?",
	"244": "Killer Bee e Motoi",
	"245": "Naruto vs Kyuubi",
	"246": "O Brilho Laranja",
	"247": "Alvo: Kyuubi",
	"248": "A Batalha Mortal de Yondaime",
	"249": "Obrigada",
	"250": "Batalha no Paraíso! Besta Estranha vs Monstro!",
	"251": "O Homem Chamado Kisame",
	"252": "O Anjo que Trás a Morte",
	"253": "A Ponte Para à Paz",
	"254": "Missão Rank S Super Secreta",
	"255": "O Artista Retorna",
	"256": "Reúnam-se! Aliança Shinobi!",

	"257": "Encontro (Filler)",
	"258": "Rivais (Filler)",
	"259": "Rachaduras (Filler)",
	"260": "Separação (Filler)",
	"261": "Pelo Seu Amigo",
	"262": "Começa a Guerra!",
	"263": "Sai e Shin",
	"264": "Os Segredos do Edo Tensei",
	"265": "Um Antigo Inimigo Retorna",
	"266": "O Primeiro e o Último Adversário",
	"267": "O Brilhante Conselheiro Estrategista de Konoha",
	"268": "Campo de Batalha!!!",
	"269": "A Palavra Tabu",
	"270": "Laços Dourados",
	"271": "Road to Sakura (Omake)",
	"272": "Mifune Vs. Hanzou",
	"273": "A Verdadeira Gentileza",
	"274": "Formação Ino-Shika-Chou Completa!",
	"275": "Uma Mensagem do Coração",
	"276": "O Ataque de Gedou Mazou",
	"277": "Selo de União",
	"278": "Ninjas Médicos em Perigo",
	"279": "Armadilha do Zetsu Branco (Filler)",
	"280": "A Estética do Artista (Filler)",
	"281": "Aliança Materna (Filler)",

	"282": "Origem Secreta da Dupla Mais Forte!",
	"283": "Dois Sóis!",
	"284": "Akebino Jinin da Espada Rachadora de Elmos (Filler)",
	"285": "Usuária de Shakuton! Pakura da Areia (Filler)",
	"286": "Aquilo que Não Podemos Recuperar (Filler)",
	"287": "Alguém em que se pode apostar (Filler)",
	"288": "Perigo: Jinpachi e Kushimaru (Filler)",
	"289": "As Espadas de Raiton: Ringo Ameyuri! (Filler)",
	"290": "Chikara - Episódio 01 (Filler)",
	"291": "Chikara - Episódio 02 (Filler)",
	"292": "Chikara - Episódio 03 (Filler)",
	"293": "Chikara - Episódio 04 (Filler)",
	"294": "Chikara - Episódio 05 (Filler)",
	"295": "Chikara - Episódio 06 (Filler)",
	"296": "Naruto Vai a Guerra",
	"297": "A Esperança de um Pai, O Amor de uma Mãe",
	"298": "Contato! Naruto Contra Itachi!",
	"299": "O Reconhecido!",
	"300": "O Mizukage, O Marisco Gigante e as Miragens",
	"301": "Paradoxo",
	"302": "Terror: Jokey Boy!",
	"303": "Fantasmas do Passado (Filler)",
	"304": "O Jutsu de Viagem ao Submundo (Filler)",
	"305": "Vingadores (Filler)",
	"306": "Olhos do Coração (Filler)",

	"307": "Desaparecendo no Luar (Filler)",
	"308": "A Noite de Lua Crescente! (Filler)",
	"309": "Missão Rank-A: A Competição de Comida (Filler)",
	"310": "A Queda do Castelo (Filler)",
	"311": "Prólogo de Road to Ninja (Omake)",
	"312": "O Antigo Mestre e o Olho de Dragão (Filler)",
	"313": "Chuva Seguida de Neve, com Chances de Raios (Filler)",
	"314": "O Triste Banho de Chuva e Sol (Filler)",
	"315": "Nevasca Duradoura (Filler)",
	"316": "Aliança Edo Tensei (Filler)",
	"317": "Shino Vs. Torune! (Filler)",
	"318": "Um Buraco no Coração - O Outro Jinchuuriki (Filler)",
	"319": "A Alma que Habita uma Marionete (Filler)",
	"320": "Corra, Omoi! (Filler)",
	"321": "A Chegada de Reforços!",
	"322": "Uchiha Madara",
	"323": "O Encontro dos Cinco Kages!",
	"324": "A Inquebrável Máscara e a Bolha Destruída (Semi-Filler)",
	"325": "Jinchuuriki Vs. Jinchuuriki",
	"326": "Yonbi, O Eremita Rei dos Macacos",
	"327": "Kyuubi",
	"328": "Kurama",
	"329": "Duas Duplas",
	"330": "Predição de Vitória",
	"331": "Os Olhos que Olham Para A Escuridão",
	"332": "Determinação de Pedra",

	"333": "Riscos do Edo Tensei",
	"334": "Time de Irmãos",
	"335": "A Folha de Todos",
	"336": "Yakushi Kabuto",
	"337": "Izanami Ativado",
	"338": "Izanagi e Izanami",
	"339": "Eu Sempre Vou Te Amar",
	"340": "Edo Tensei: Liberar",
	"341": "O Retorno de Orochimaru!",
	"342": "O Segredo do Jikuukan Ninjutsu",
	"343": "Quem é você?!",
	"344": "Obito e Madara",
	"345": "Estou no Inferno",
	"346": "Mundo dos Sonhos",
	"347": "Sombras Arrepiantes (Filler)",
	"348": "Akatsuki: Renascer (Filler)",
	"349": "A Máscara Que Esconde o Coração (Filler)",
	"350": "A Morte de Minato (Filler)",
	"351": "Células de Hashirama (Filler)",
	"352": "Nukenin: Orochimaru (Filler)",
	"353": "O Objeto de Estudo do Orochimaru (Filler)",
	"354": "Seus Próprios Caminhos (Filler)",
	"355": "O Alvo, Sharingan (Filler)",
	"356": "Shinobi de Konoha (Filler)",

	"357": "Um Uchiha ANBU (Filler)",
	"358": "Golpe de Estado (Filler)",
	"359": "A Noite da Tragédia (Filler)",
	"360": "Líder Jounnin (Filler)",
	"361": "Time Sete (Filler)",
	"362": "A Decisão de Kakashi!!",
	"363": "Aliança Shinobi no Jutsu!",
	"364": "Laços Inquebráveis!",
	"365": "Dança do Ninjas!",
	"366": "Aqueles Que Sabem Tudo",
	"367": "Hashirama e Madara!",
	"368": "Era da Guerra Entre Nações!",
	"369": "Meu Verdadeiro Sonho!",
	"370": "A Resposta de Sasuke!",
	"371": "Buraco",
	"372": "Algo Para Preencher o Buraco!",
	"373": "Time 7, Reunir!",
	"374": "O Novo Trio do Impasse Mortal",
	"375": "Kakashi vs Obito!",
	"376": "Instruções para Capturar a Kyuubi! (Omake)",
	"377": "Naruto contra Mecha Naruto! (Omake)",
	"378": "O Jinchuuriki do Juubi!",
	"379": "Uma Abertura!",

	"380": "O Dia em Que Naruto Nasceu!",
	"381": "Shinju!",
	"382": "O Sonho de um Ninja!",
	"383": "Perseguindo a Esperança!",
	"384": "Coração Preenchido de Amigos!",
	"385": "Uchiha Obito!",
	"386": "Sempre Estarei te Observando!",
	"387": "A Promessa Que Foi Cumprida!",
	"388": "Meu Primeiro Amigo! (Semi-Filler)",
	"389": "A Adorada Irmã Mais Velha (Omake)",
	"390": "A Decisão de Hanabi (Omake)",
	"391": "A Ascensão de Uchiha Madara!",
	"392": "O Coração Oculto",
	"393": "Um Verdadeiro Fim",
	"394": "Os Novos Exames Chuunins (Filler)",
	"395": "Começam os Exames Chuunin! (Filler)",
	"396": "As Três Perguntas! (Filler)",
	"397": "Alguém digno de ser líder! (Filler)",
	"398": "A Noite Antes do Segundo Exame! (Filler)",
	"399": "Sobrevivência no Deserto Infernal! (Filler)",
	"400": "Como Um Usuário de Taijutsu... (Filler)",
	"401": "Aqueles Que Chegam Ao Limite! (Filler)",
	"402": "Fuga e Perseguição! (Filler)",
	"403": "Força de Vontade Inabalável! (Filler)",
	"404": "Os Problemas da Tenten! (Filler)",
	"405": "A Dupla Aprisionada! (Filler)",

	"406": "O Lugar Ao Qual Pertenço! (Filler)",
	"407": "O Ninjutsu Secreto do Clã Yamanaka! (Filler)",
	"408": "A Boneca Amaldiçoada! (Filler)",
	"409": "As Costas Daqueles Dois! (Filler)",
	"410": "O Começo da Conspiração! (Filler)",
	"411": "A Almejada Bijuu! (Filler)",
	"412": "A Decisão de Neji! (Filler)",
	"413": "Sentimentos Confiados Ao Futuro! (Filler)",
	"414": "À Beira da Morte!",
	"415": "Os Dois Mangekyous",
	"416": "A Formação do Time Minato (Filler)",
	"417": "Você Será Meu Reserva (Semi-Filler)",
	"418": "A Besta Verde vs Rikudou Madara",
	"419": "A Primavera da Juventude do Papai",
	"420": "A Formação do Hachimon Tonkou!",
	"421": "Rikudou Sennin!",
	"422": "Aqueles Que Herdarão (Omake)",
	"423": "O Rival de Naruto (Omake)",
	"424": "Ascenção",
	"425": "Sonho Infinito",
	"426": "Mugen Tsukuomi! (Semi-Filler)",
	"427": "O Mundo dos Sonhos! (Filler)",
	"428": "O Lugar da Tenten! (Filler)",
	"429": "Killer Bee Rappuuden - Parte 1! (Filler)",
	"430": "Killer Bee Rappuuden - Parte 2! (Filler)",
	"431": "Para Ver Aquele Sorriso Mais Uma Vez! (Filler)",

	"432": "O Ninja Perdedor! (Filler)",
	"433": "A Missão de Busca! (Filler)",
	"434": "Time Jiraiya! (Filler)",
	"435": "Prioridades! (Filler)",
	"436": "O Homem Mascarado! (Filler)",
	"437": "O Poder Selado! (Filler)",
	"438": "Regras ou Companheiros (Filler)",
	"439": "O Garoto da Profecia (Filler)",
	"440": "Pássaros Engaiolados (Filler)",
	"441": "Retorno ao Lar (Filler)",
	"442": "Caminho Mútuo! (Filler)",
	"443": "Diferença de Poder (Filler)",
	"444": "Renegado (Filler)",
	"445": "Perseguidores (Filler)",
	"446": "Colisão (Filler)",
	"447": "A Outra Lua (Filler)",
	"448": "Companheiro (Filler)",
	"449": "A Ação Conjunta dos Shinobis (Filler)",
	"450": "Rival (Filler)",
	"451": "Vida Que Nasce, Vida Que Morre (Semi-Filler)",
	"452": "Gênio (Novel)",
	"453": "Dor de Viver (Novel)",
	"454": "O Pedido de Shisui (Novel)",
	"455": "Noite de Luar (Novel)",
	"456": "A Escuridão da Akatsuki (Novel)",
	"457": "Parceiro! (Novel)",
	"458": "Verdade (Semi-Filler)",

	"459": "O Começo de Tudo",
	"460": "Ootsutsuki Kaguya",
	"461": "Hagoromo e Hamura",
	"462": "O Passado Produzido",
	"463": "Ninja Imprevisível Número 1!",
	"464": "Ninshuu",
	"465": "Ashura e Indra",
	"466": "A Tumultuosa Jornada",
	"467": "A Decisão do Ashura",
	"468": "O Sucessor",
	"469": "Uma Missão Especial (Omake)",
	"470": "Mentes Conectadas",
	"471": "Aqueles Dois... Sempre",
	"472": "Custe o Que Custar, Você...",
	"473": "Sharingan, Mais Uma Vez",
	"474": "Congratulações",
	"475": "O Vale do Fim",
	"476": "A Batalha Final",
	"477": "Naruto e Sasuke",
	"478": "O Selo da União",
	"479": "Uzumaki Naruto!!",

	"480": "Naruto•Hinata (Filler)",
	"481": "Sasuke•Sakura (Filler)",
	"482": "Gaara•Shikamaru (Filler)",
	"483": "Jiraiya•Kakashi (Filler)",
	"484": "Sasuke Shinden: Humanos Explosivos (Novel)",
	"485": "Sasuke Shinden: Coliseu (Novel)",
	"486": "Sasuke Shinden: Fuushin (Novel)",
	"487": "Sasuke Shinden: Ketsuryuugan (Novel)",
	"488": "Sasuke Shinden: A Última Pessoa (Novel)",
	"489": "Shikamaru Hiden: A Situação (Novel)",
	"490": "Shikamaru Hiden: Nuvens Negras (Novel)",
	"491": "Shikamaru Hiden: Às Cegas (Novel)",
	"492": "Shikamaru Hiden: Nuvem de Suspeição (Novel)",
	"493": "Shikamaru Hiden: Alvorecer (Novel)",
	"494": "Konoha Hiden: O Casamento do Naruto (Novel)",
	"495": "Konoha Hiden: Um Presente de Casamento Todo Poderoso (Novel)",
	"496": "Konoha Hiden: Vapor e Pílulas de Comida (Novel)",
	"497": "Konoha Hiden: O Presente do Kazekage (Novel)",
	"498": "Konoha Hiden: A Última Missão (Novel)",
	"499": "Konoha Hiden: Os Resultados da Missão Secreta (Novel)",
	"500": "Konoha Hiden: As Mensagens de Felicitação (Novel)",
}
