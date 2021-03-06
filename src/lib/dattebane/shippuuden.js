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
    "001": {
        "openning_start": 512.101625,
        "openning_end": 602.234958,
        "ending_start": 1206.5311875
    },
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
    "003": {
        "openning_start": 131.122,
        "openning_end": 221.255333,
        "ending_start": 1206.5463955
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
    "007": {
        "openning_start": 0.09750000000000014,
        "openning_end": 90.23083299999999,
        "ending_start": 1207.305708
    },
    "009": {
        "openning_start": 0.11768750000000061,
        "openning_end": 90.2510205,
        "ending_start": 1207.1905205
    },
    "010": {
        "openning_start": 140.1255625,
        "openning_end": 230.2588955,
        "ending_start": 1205.1237079999999
    },
    "011": {
        "openning_start": 146.1376875,
        "openning_end": 236.2710205,
        "ending_start": 1206.263125
    },
    "012": {
        "openning_start": 100.159,
        "openning_end": 190.29233299999999,
        "ending_start": 1206.3314375
    },
    "008": {
        "openning_start": 122.08687499999999,
        "openning_end": 212.22020799999999,
        "ending_start": 1206.037667
    },
    "013": {
        "openning_start": 114.1645,
        "openning_end": 204.297833,
        "ending_start": 1207.522958
    },
    "015": {
        "openning_start": 393.090125,
        "openning_end": 483.223458,
        "ending_start": 1206.1684794999999
    },
    "017": {
        "openning_start": 207.104875,
        "openning_end": 297.238208,
        "ending_start": 1206.1694169999998
    },
    "014": {
        "openning_start": 245.0874375,
        "openning_end": 335.22077049999996,
        "ending_start": 1205.179625
    },
    "016": {
        "openning_start": 175.1395,
        "openning_end": 265.272833,
        "ending_start": 1206.168958
    },
    "018": {
        "openning_start": 58.907624999999996,
        "openning_end": 149.040958,
        "ending_start": 1207.9233545000002
    },
    "019": {
        "openning_start": 172.1365,
        "openning_end": 262.269833,
        "ending_start": 1207.1682704999998
    },
    "021": {
        "openning_start": 274.1298125,
        "openning_end": 364.2631455,
        "ending_start": 1207.191083
    },
    "023": {
        "openning_start": 374.09925,
        "openning_end": 464.232583,
        "ending_start": 1205.192667
    },
    "022": {
        "openning_start": 224.149375,
        "openning_end": 314.28270799999996,
        "ending_start": 1208.595708
    },
    "020": {
        "openning_start": 182.081125,
        "openning_end": 272.214458,
        "ending_start": 1205.0988545
    },
    "024": {
        "openning_start": 188.1139375,
        "openning_end": 278.2472705,
        "ending_start": 1205.1945625
    },
    "025": {
        "openning_start": 332.064,
        "openning_end": 422.197333,
        "ending_start": 1206.2010625
    },
    "027": {
        "openning_start": 159.110125,
        "openning_end": 249.243458,
        "ending_start": 1206.220417
    },
    "029": {
        "openning_start": 299.1219375,
        "openning_end": 389.2552705,
        "ending_start": 1206.4268545
    },
    "028": {
        "openning_start": 298.1160625,
        "openning_end": 388.2493955,
        "ending_start": 1207.088625
    },
    "026": {
        "openning_start": 117.1160625,
        "openning_end": 207.2493955,
        "ending_start": 1206.5355625
    },
    "030": {
        "openning_start": 205.0950625,
        "openning_end": 295.22839550000003,
        "ending_start": 1208.49525
    },
    "031": {
        "openning_start": 0.08618749999999942,
        "openning_end": 90.21952049999999,
        "ending_start": 1206.4942295
    },
    "033": {
        "openning_start": 199.0589375,
        "openning_end": 289.1922705,
        "ending_start": 1207.4709795
    },
    "035": {
        "openning_start": 244.0586875,
        "openning_end": 334.1920205,
        "ending_start": 1206.5576875
    },
    "034": {
        "openning_start": 204.0654375,
        "openning_end": 294.1987705,
        "ending_start": 1206.5373955
    },
    "036": {
        "openning_start": 230.1126875,
        "openning_end": 320.2460205,
        "ending_start": 1205.491792
    },
    "032": {
        "openning_start": 203.0898125,
        "openning_end": 293.2231455,
        "ending_start": 1208.4973125
    },
    "037": {
        "openning_start": 150.0845,
        "openning_end": 240.21783299999998,
        "ending_start": 1206.5449374999998
    },
    "039": {
        "openning_start": 337.0213125,
        "openning_end": 427.1546455,
        "ending_start": 1206.4272500000002
    },
    "041": {
        "openning_start": 48.079625,
        "openning_end": 138.212958,
        "ending_start": 1207.441542
    },
    "040": {
        "openning_start": 160.045375,
        "openning_end": 250.178708,
        "ending_start": 1207.428625
    },
    "042": {
        "openning_start": 55.05500000000001,
        "openning_end": 145.188333,
        "ending_start": 1206.068125
    },
    "038": {
        "openning_start": 200.01875,
        "openning_end": 290.152083,
        "ending_start": 1207.4291875
    },
    "043": {
        "openning_start": 265.997375,
        "openning_end": 356.13070799999997,
        "ending_start": 1207.7351875
    },
    "045": {
        "openning_start": 211.058875,
        "openning_end": 301.192208,
        "ending_start": 1207.4520205
    },
    "047": {
        "openning_start": 127.99393749999999,
        "openning_end": 218.12727049999998,
        "ending_start": 1207.4028329999999
    },
    "046": {
        "openning_start": 271.987875,
        "openning_end": 362.12120799999997,
        "ending_start": 1206.3837705
    },
    "048": {
        "openning_start": 59.059749999999994,
        "openning_end": 149.193083,
        "ending_start": 1206.4038125000002
    },
    "044": {
        "openning_start": 150.0158125,
        "openning_end": 240.1491455,
        "ending_start": 1206.402
    },
    "049": {
        "openning_start": 96.0985,
        "openning_end": 186.231833,
        "ending_start": 1206.4729169999998
    },
    "051": {
        "openning_start": 20.0423125,
        "openning_end": 110.1756455,
        "ending_start": 1207.423667
    },
    "053": {
        "openning_start": 98.128375,
        "openning_end": 188.261708,
        "ending_start": 1208.5018750000002
    },
    "052": {
        "openning_start": 0.022375000000000256,
        "openning_end": 90.15570799999999,
        "ending_start": 1207.425125
    },
    "054": {
        "openning_start": 124.9863125,
        "openning_end": 216.1696455,
        "ending_start": 1207.367458
    },
    "050": {
        "openning_start": 321.9650625,
        "openning_end": 412.0983955,
        "ending_start": 1206.3804169999999
    },
    "055": {
        "openning_start": 75.0060625,
        "openning_end": 166.1893955,
        "ending_start": 1265.360792
    },
    "057": {
        "openning_start": 0.0022500000000000853,
        "openning_end": 91.18558300000001,
        "ending_start": 1207.4903955
    },
    "059": {
        "openning_start": 185.9714375,
        "openning_end": 277.15477050000004,
        "ending_start": 1207.3585625
    },
    "058": {
        "openning_start": 154.0050625,
        "openning_end": 245.1883955,
        "ending_start": 1207.2920205
    },
    "060": {
        "openning_start": 192.4733125,
        "openning_end": 283.65664549999997,
        "ending_start": 1204.852333
    },
    "056": {
        "openning_start": 98.03275,
        "openning_end": 189.216083,
        "ending_start": 1207.3738329999999
    },
    "061": {
        "openning_start": 31.005499999999998,
        "openning_end": 122.188833,
        "ending_start": 1206.20275
    },
    "063": {
        "openning_start": 225.012875,
        "openning_end": 316.196208,
        "ending_start": 1207.3600625
    },
    "065": {
        "openning_start": 401.972625,
        "openning_end": 493.155958,
        "ending_start": 1205.1994375
    },
    "064": {
        "openning_start": 69.9915625,
        "openning_end": 161.1748955,
        "ending_start": 1207.3061455
    },
    "066": {
        "openning_start": 197.97025,
        "openning_end": 289.153583,
        "ending_start": 1207.3089579999998
    },
    "062": {
        "openning_start": 284.00375,
        "openning_end": 375.18708300000003,
        "ending_start": 1205.357083
    },
    "067": {
        "openning_start": 159.0068125,
        "openning_end": 250.1901455,
        "ending_start": 1204.9831875
    },
    "069": {
        "openning_start": 76.990625,
        "openning_end": 168.173958,
        "ending_start": 1204.6032295
    },
    "071": {
        "openning_start": 39.0395625,
        "openning_end": 130.2228955,
        "ending_start": 1264.026583
    },
    "070": {
        "openning_start": 31.0063125,
        "openning_end": 122.18964550000001,
        "ending_start": 1204.5367295
    },
    "072": {
        "openning_start": 222.9903125,
        "openning_end": 314.1736455,
        "ending_start": 1205.9301045000002
    },
    "068": {
        "openning_start": 185.9685,
        "openning_end": 277.151833,
        "ending_start": 1204.9845625
    },
    "073": {
        "openning_start": 178.01,
        "openning_end": 269.193333,
        "ending_start": 1205.2998544999998
    },
    "075": {
        "openning_start": 78.994,
        "openning_end": 170.177333,
        "ending_start": 1207.318375
    },
    "077": {
        "openning_start": 360.003,
        "openning_end": 451.186333,
        "ending_start": 1207.3122079999998
    },
    "076": {
        "openning_start": 314.9563125,
        "openning_end": 406.13964550000003,
        "ending_start": 1206.3106875
    },
    "078": {
        "openning_start": 82.9543125,
        "openning_end": 174.13764550000002,
        "ending_start": 1207.3488955
    },
    "074": {
        "openning_start": 80.9954375,
        "openning_end": 172.17877049999998,
        "ending_start": 1207.3181455
    },
    "079": {
        "openning_start": 192.9316875,
        "openning_end": 284.1150205,
        "ending_start": 1267.3418955000002
    },
    "081": {
        "openning_start": 0.08162500000000072,
        "openning_end": 91.26495800000001,
        "ending_start": 1205.1555205
    },
    "083": {
        "openning_start": 104.1193125,
        "openning_end": 195.3026455,
        "ending_start": 1205.086792
    },
    "082": {
        "openning_start": 36.117625,
        "openning_end": 127.30095800000001,
        "ending_start": 1265.0823545
    },
    "084": {
        "openning_start": 122.07106250000001,
        "openning_end": 213.25439550000002,
        "ending_start": 1205.1556455
    },
    "080": {
        "openning_start": 112.1274375,
        "openning_end": 203.3107705,
        "ending_start": 1265.083667
    },
    "085": {
        "openning_start": 61.07543750000001,
        "openning_end": 152.25877050000003,
        "ending_start": 1265.1490205
    },
    "087": {
        "openning_start": 125.0745,
        "openning_end": 216.257833,
        "ending_start": 1205.155708
    },
    "089": {
        "openning_start": 189.0719375,
        "openning_end": 280.2552705,
        "ending_start": 1205.155833
    },
    "088": {
        "openning_start": 154.1035625,
        "openning_end": 245.2868955,
        "ending_start": 1205.088417
    },
    "090": {
        "openning_start": 49.1320625,
        "openning_end": 140.31539550000002,
        "ending_start": 1205.088417
    },
    "086": {
        "openning_start": 204.08675,
        "openning_end": 295.270083,
        "ending_start": 1205.1886875
    },
    "091": {
        "openning_start": 178.1280625,
        "openning_end": 269.3113955,
        "ending_start": 1265.1805205
    },
    "093": {
        "openning_start": 0.11768750000000061,
        "openning_end": 91.3010205,
        "ending_start": 1205.0867295
    },
    "095": {
        "openning_start": 107.12475,
        "openning_end": 198.308083,
        "ending_start": 1205.120292
    },
    "094": {
        "openning_start": 218.10225,
        "openning_end": 309.285583,
        "ending_start": 1205.1876455
    },
    "096": {
        "openning_start": 95.112625,
        "openning_end": 186.29595799999998,
        "ending_start": 1205.120167
    },
    "092": {
        "openning_start": 74.125,
        "openning_end": 165.308333,
        "ending_start": 1265.280625
    },
    "097": {
        "openning_start": 115.132625,
        "openning_end": 206.31595800000002,
        "ending_start": 1205.120167
    },
    "099": {
        "openning_start": 134.0849375,
        "openning_end": 225.2682705,
        "ending_start": 1205.187208
    },
    "101": {
        "openning_start": 188.072125,
        "openning_end": 279.255458,
        "ending_start": 1205.1201045
    },
    "100": {
        "openning_start": 77.0946875,
        "openning_end": 168.27802050000003,
        "ending_start": 1265.180833
    },
    "102": {
        "openning_start": 169.1199375,
        "openning_end": 260.3032705,
        "ending_start": 1265.180833
    },
    "098": {
        "openning_start": 203.0870625,
        "openning_end": 294.2703955,
        "ending_start": 1205.187458
    },
    "103": {
        "openning_start": 218.0679375,
        "openning_end": 309.2079375,
        "ending_start": 1205.121083
    },
    "105": {
        "openning_start": 196.1245,
        "openning_end": 287.2645,
        "ending_start": 1205.0345000000002
    },
    "107": {
        "openning_start": 298.093875,
        "openning_end": 389.233875,
        "ending_start": 1265.12775
    },
    "106": {
        "openning_start": 43.107125,
        "openning_end": 134.247125,
        "ending_start": 1265.1268545
    },
    "108": {
        "openning_start": 166.0954375,
        "openning_end": 257.2354375,
        "ending_start": 1204.9666875
    },
    "104": {
        "openning_start": 0.050562499999999844,
        "openning_end": 91.1905625,
        "ending_start": 1265.047792
    },
    "109": {
        "openning_start": 139.0685,
        "openning_end": 230.20850000000002,
        "ending_start": 1205.0335
    },
    "111": {
        "openning_start": 133.0623125,
        "openning_end": 224.2023125,
        "ending_start": 1265.0929795
    },
    "113": {
        "openning_start": 329.05825,
        "openning_end": 420.19825,
        "ending_start": 1265.1601875
    },
    "112": {
        "openning_start": 0.06274999999999942,
        "openning_end": 91.20275,
        "ending_start": 1265.09325
    },
    "114": {
        "openning_start": 27.0910625,
        "openning_end": 118.23106250000001,
        "ending_start": 1265.094625
    },
    "110": {
        "openning_start": 243.04025,
        "openning_end": 334.18025,
        "ending_start": 1205.1014375
    },
    "115": {
        "openning_start": 225.088875,
        "openning_end": 316.228875,
        "ending_start": 1265.027875
    },
    "117": {
        "openning_start": 303.032625,
        "openning_end": 394.172625,
        "ending_start": 1205.0975624999999
    },
    "119": {
        "openning_start": 0.08537500000000087,
        "openning_end": 91.225375,
        "ending_start": 1265.1162295000001
    },
    "118": {
        "openning_start": 294.0895625,
        "openning_end": 385.2295625,
        "ending_start": 1205.099375
    },
    "120": {
        "openning_start": 0.08531250000000057,
        "openning_end": 91.2253125,
        "ending_start": 1265.116708
    },
    "116": {
        "openning_start": 290.085875,
        "openning_end": 381.225875,
        "ending_start": 1205.0313545
    },
    "121": {
        "openning_start": 408.0943125,
        "openning_end": 499.2343125,
        "ending_start": 1205.0580205
    },
    "123": {
        "openning_start": 34.1345,
        "openning_end": 125.2745,
        "ending_start": 1265.1173330000001
    },
    "125": {
        "openning_start": 198.0845,
        "openning_end": 289.2245,
        "ending_start": 1265.0503545000001
    },
    "124": {
        "openning_start": 148.1011875,
        "openning_end": 239.24118750000002,
        "ending_start": 1265.1174375
    },
    "126": {
        "openning_start": 64.083875,
        "openning_end": 155.22387500000002,
        "ending_start": 1205.056708
    },
    "122": {
        "openning_start": 205.09025,
        "openning_end": 296.23025,
        "ending_start": 1205.1902705
    },
    "127": {
        "openning_start": 0.08618749999999942,
        "openning_end": 91.2261875,
        "ending_start": 1265.050625
    },
    "129": {
        "openning_start": 524.0673125,
        "openning_end": 614.2689795,
        "ending_start": 1205.1561875
    },
    "131": {
        "openning_start": 447.0591875,
        "openning_end": 537.2608545,
        "ending_start": 1265.1515625
    },
    "130": {
        "openning_start": 406.0814375,
        "openning_end": 496.2831045,
        "ending_start": 1205.1214375
    },
    "132": {
        "openning_start": 382.068625,
        "openning_end": 472.270292,
        "ending_start": 1205.2000420000002
    },
    "128": {
        "openning_start": 0.08612499999999912,
        "openning_end": 91.226125,
        "ending_start": 1265.050625
    },
    "133": {
        "openning_start": 0.0782500000000006,
        "openning_end": 90.279917,
        "ending_start": 1265.117125
    },
    "135": {
        "openning_start": 85.0964375,
        "openning_end": 175.2981045,
        "ending_start": 1265.1841454999999
    },
    "137": {
        "openning_start": 343.087375,
        "openning_end": 433.289042,
        "ending_start": 1205.057208
    },
    "136": {
        "openning_start": 0.078125,
        "openning_end": 90.279792,
        "ending_start": 1205.1240205
    },
    "138": {
        "openning_start": 207.0849375,
        "openning_end": 297.2866045,
        "ending_start": 1205.12375
    },
    "134": {
        "openning_start": 425.0360625,
        "openning_end": 515.2377295,
        "ending_start": 1205.12375
    },
    "139": {
        "openning_start": 234.1119375,
        "openning_end": 324.3136045,
        "ending_start": 1265.049583
    },
    "141": {
        "openning_start": 352.12975,
        "openning_end": 442.331417,
        "ending_start": 1265.1503125
    },
    "143": {
        "openning_start": 159.1049375,
        "openning_end": 249.3066045,
        "ending_start": 1265.083333
    },
    "142": {
        "openning_start": 121.06687500000001,
        "openning_end": 211.26854200000002,
        "ending_start": 1205.0860830000001
    },
    "144": {
        "openning_start": 328.0724375,
        "openning_end": 418.27410449999996,
        "ending_start": 1205.0897705
    },
    "140": {
        "openning_start": 414.0918125,
        "openning_end": 504.2934795,
        "ending_start": 1265.0499794999998
    },
    "145": {
        "openning_start": 132.0766875,
        "openning_end": 222.27835449999998,
        "ending_start": 1265.0162705
    },
    "147": {
        "openning_start": 383.06075,
        "openning_end": 473.26241699999997,
        "ending_start": 1205.0894374999998
    },
    "149": {
        "openning_start": 0.078125,
        "openning_end": 90.279792,
        "ending_start": 1265.0826874999998
    },
    "148": {
        "openning_start": 47.126375,
        "openning_end": 137.328042,
        "ending_start": 1265.0839374999998
    },
    "150": {
        "openning_start": 0.078125,
        "openning_end": 90.279792,
        "ending_start": 1265.0826874999998
    },
    "146": {
        "openning_start": 361.0386875,
        "openning_end": 451.24035449999997,
        "ending_start": 1205.0230205
    },
    "151": {
        "openning_start": 357.1014375,
        "openning_end": 447.30310449999996,
        "ending_start": 1265.0823544999998
    },
    "155": {
        "openning_start": 372.1311875,
        "openning_end": 461.22118750000004,
        "ending_start": 1265.054875
    },
    "153": {
        "openning_start": 50.1341875,
        "openning_end": 140.3358545,
        "ending_start": 1264.9301455
    },
    "154": {
        "openning_start": 0.17624999999999957,
        "openning_end": 89.26625,
        "ending_start": 1265.171625
    },
    "156": {
        "openning_start": 302.1446875,
        "openning_end": 391.23468749999995,
        "ending_start": 1204.9796455
    },
    "152": {
        "openning_start": 553.0365625,
        "openning_end": 643.2382295,
        "ending_start": 1265.1299374999999
    },
    "157": {
        "openning_start": 171.213875,
        "openning_end": 260.303875,
        "ending_start": 1265.0212295
    },
    "161": {
        "openning_start": 284.1933125,
        "openning_end": 373.28331249999997,
        "ending_start": 1205.1873544999999
    },
    "159": {
        "openning_start": 83.1759375,
        "openning_end": 172.2659375,
        "ending_start": 1265.1381045
    },
    "160": {
        "openning_start": 86.1789375,
        "openning_end": 175.2689375,
        "ending_start": 1204.185542
    },
    "162": {
        "openning_start": 168.2108125,
        "openning_end": 257.3008125,
        "ending_start": 1265.1376455
    },
    "158": {
        "openning_start": 387.14625,
        "openning_end": 476.23625000000004,
        "ending_start": 1265.1214169999998
    },
    "163": {
        "openning_start": 197.028125,
        "openning_end": 286.11812499999996,
        "ending_start": 1204.9420205000001
    },
    "167": {
        "openning_start": 0.03974999999999973,
        "openning_end": 89.12975,
        "ending_start": 1265.0685205
    },
    "165": {
        "openning_start": 63.01925,
        "openning_end": 152.10925,
        "ending_start": 1205.0081045
    },
    "166": {
        "openning_start": 80.036375,
        "openning_end": 169.126375,
        "ending_start": 1205.02525
    },
    "168": {
        "openning_start": 515.0124375,
        "openning_end": 604.1024375000001,
        "ending_start": 1204.968042
    },
    "164": {
        "openning_start": 233.0641875,
        "openning_end": 322.15418750000003,
        "ending_start": 1205.0164794999998
    },
    "169": {
        "openning_start": 152.0583125,
        "openning_end": 241.1483125,
        "ending_start": 1204.884125
    },
    "173": {
        "openning_start": 121.0273125,
        "openning_end": 210.1173125,
        "ending_start": 1204.8753545
    },
    "171": {
        "openning_start": 0.03968749999999943,
        "openning_end": 89.1296875,
        "ending_start": 1264.87725
    },
    "172": {
        "openning_start": 0.03974999999999973,
        "openning_end": 89.12975,
        "ending_start": 1264.9440625
    },
    "174": {
        "openning_start": 109.0653125,
        "openning_end": 198.1553125,
        "ending_start": 1264.9596875
    },
    "170": {
        "openning_start": 0.03968749999999943,
        "openning_end": 89.1296875,
        "ending_start": 1264.976375
    },
    "175": {
        "openning_start": 222.0531875,
        "openning_end": 311.1431875,
        "ending_start": 1264.919333
    },
    "179": {
        "openning_start": 463.0355625,
        "openning_end": 552.1255625,
        "ending_start": 1264.8862295
    },
    "177": {
        "openning_start": 359.065,
        "openning_end": 448.155,
        "ending_start": 1264.9442705000001
    },
    "178": {
        "openning_start": 304.9645625,
        "openning_end": 394.0545625,
        "ending_start": 1264.789125
    },
    "180": {
        "openning_start": 133.0196875,
        "openning_end": 222.1096875,
        "ending_start": 1264.9187080000002
    },
    "176": {
        "openning_start": 239.070125,
        "openning_end": 328.160125,
        "ending_start": 1264.8852295
    },
    "181": {
        "openning_start": 0.02018750000000047,
        "openning_end": 89.11018750000001,
        "ending_start": 1264.9433749999998
    },
    "185": {
        "openning_start": 230.0415625,
        "openning_end": 319.1315625,
        "ending_start": 1204.7414999999999
    },
    "183": {
        "openning_start": 276.02925,
        "openning_end": 365.11924999999997,
        "ending_start": 1264.7852705
    },
    "184": {
        "openning_start": 154.0406875,
        "openning_end": 243.1306875,
        "ending_start": 1264.7601455000001
    },
    "186": {
        "openning_start": 113.04975,
        "openning_end": 202.13975,
        "ending_start": 1265.0271455000002
    },
    "182": {
        "openning_start": 536.0139375,
        "openning_end": 625.1039375,
        "ending_start": 1265.0270830000002
    },
    "187": {
        "openning_start": 193.004625,
        "openning_end": 282.094625,
        "ending_start": 1264.95175
    },
    "191": {
        "openning_start": 25.045187499999997,
        "openning_end": 114.1351875,
        "ending_start": 1265.027208
    },
    "189": {
        "openning_start": 113.0496875,
        "openning_end": 202.1396875,
        "ending_start": 1265.027083
    },
    "190": {
        "openning_start": 339.0254375,
        "openning_end": 428.1154375,
        "ending_start": 1264.951958
    },
    "192": {
        "openning_start": 78.056375,
        "openning_end": 167.146375,
        "ending_start": 1265.0100625
    },
    "188": {
        "openning_start": 0.02018750000000047,
        "openning_end": 89.11018750000001,
        "ending_start": 1264.9441045
    },
    "193": {
        "openning_start": 297.0501875,
        "openning_end": 386.1401875,
        "ending_start": 1265.028042
    },
    "197": {
        "openning_start": 112.0486875,
        "openning_end": 201.1386875,
        "ending_start": 1264.9023124999999
    },
    "195": {
        "openning_start": 102.0638125,
        "openning_end": 191.15381250000002,
        "ending_start": 1265.027833
    },
    "196": {
        "openning_start": 184.9965625,
        "openning_end": 274.0865625,
        "ending_start": 1265.011417
    },
    "198": {
        "openning_start": 224.035875,
        "openning_end": 313.125875,
        "ending_start": 1265.028417
    },
    "194": {
        "openning_start": 85.0216875,
        "openning_end": 174.11168750000002,
        "ending_start": 1264.9860205
    },
    "199": {
        "openning_start": 346.0324375,
        "openning_end": 435.12243750000005,
        "ending_start": 1265.028042
    },
    "203": {
        "openning_start": 377.02175,
        "openning_end": 466.11175000000003,
        "ending_start": 1265.019458
    },
    "201": {
        "openning_start": 64.0006875,
        "openning_end": 153.0906875,
        "ending_start": 1264.9523125
    },
    "202": {
        "openning_start": 275.0281875,
        "openning_end": 364.1181875,
        "ending_start": 1264.944
    },
    "204": {
        "openning_start": 276.0291875,
        "openning_end": 365.11918749999995,
        "ending_start": 1265.0197295
    },
    "200": {
        "openning_start": 517.972875,
        "openning_end": 607.0628750000001,
        "ending_start": 1264.937625
    },
    "205": {
        "openning_start": 369.01375,
        "openning_end": 458.10375,
        "ending_start": 1265.0193955
    },
    "209": {
        "openning_start": 171.0601875,
        "openning_end": 260.1501875,
        "ending_start": 1205.033833
    },
    "207": {
        "openning_start": 167.0645,
        "openning_end": 256.1545,
        "ending_start": 1265.0437705
    },
    "210": {
        "openning_start": 48.070625,
        "openning_end": 137.160625,
        "ending_start": 1265.044042
    },
    "208": {
        "openning_start": 137.0595625,
        "openning_end": 226.1495625,
        "ending_start": 1264.9520205000001
    },
    "206": {
        "openning_start": 145.03425,
        "openning_end": 234.12425,
        "ending_start": 1265.010458
    },
    "211": {
        "openning_start": 0.02268749999999997,
        "openning_end": 89.1126875,
        "ending_start": 1265.051083
    },
    "215": {
        "openning_start": 185.8030625,
        "openning_end": 274.89306250000004,
        "ending_start": 1264.8633955
    },
    "213": {
        "openning_start": -0.1744374999999998,
        "openning_end": 88.91556250000001,
        "ending_start": 1264.7632705
    },
    "214": {
        "openning_start": 437.9935,
        "openning_end": 527.0835,
        "ending_start": 1265.052083
    },
    "216": {
        "openning_start": 0.02268749999999997,
        "openning_end": 89.1126875,
        "ending_start": 1264.9189795
    },
    "212": {
        "openning_start": 200.0354375,
        "openning_end": 289.1254375,
        "ending_start": 1205.0131250000002
    },
    "217": {
        "openning_start": 212.026125,
        "openning_end": 301.116125,
        "ending_start": 1265.027083
    },
    "221": {
        "openning_start": 36.8625625,
        "openning_end": 125.9525625,
        "ending_start": 1264.830708
    },
    "219": {
        "openning_start": 132.0211875,
        "openning_end": 221.1111875,
        "ending_start": 1265.0110205
    },
    "220": {
        "openning_start": 271.0266875,
        "openning_end": 360.1166875,
        "ending_start": 1264.961292
    },
    "222": {
        "openning_start": 253.00875000000002,
        "openning_end": 342.09875,
        "ending_start": 1264.960625
    },
    "218": {
        "openning_start": 136.829125,
        "openning_end": 225.919125,
        "ending_start": 1264.74625
    },
    "223": {
        "openning_start": 47.0696875,
        "openning_end": 136.15968750000002,
        "ending_start": 1264.9610205000001
    },
    "227": {
        "openning_start": 80.0193125,
        "openning_end": 169.1093125,
        "ending_start": 1265.0935205
    },
    "225": {
        "openning_start": 202.016125,
        "openning_end": 291.106125,
        "ending_start": 1265.0281045
    },
    "226": {
        "openning_start": 76.01525,
        "openning_end": 165.10525,
        "ending_start": 1264.9606875
    },
    "228": {
        "openning_start": 155.04425,
        "openning_end": 244.13425,
        "ending_start": 1265.0277704999999
    },
    "224": {
        "openning_start": 79.01825,
        "openning_end": 168.10825,
        "ending_start": 1264.9610205000001
    },
    "229": {
        "openning_start": 238.8560625,
        "openning_end": 327.94606250000004,
        "ending_start": 1264.7642295
    },
    "233": {
        "openning_start": 190.0035625,
        "openning_end": 279.09356249999996,
        "ending_start": 1265.0277295
    },
    "231": {
        "openning_start": 122.01893749999999,
        "openning_end": 211.1089375,
        "ending_start": 1264.9603124999999
    },
    "232": {
        "openning_start": 140.0285625,
        "openning_end": 229.1185625,
        "ending_start": 1265.077458
    },
    "234": {
        "openning_start": 99.037625,
        "openning_end": 188.12762500000002,
        "ending_start": 1264.960708
    },
    "230": {
        "openning_start": 405.010625,
        "openning_end": 494.10062500000004,
        "ending_start": 1265.0277704999999
    },
    "235": {
        "openning_start": 124.0209375,
        "openning_end": 213.1109375,
        "ending_start": 1265.0277295
    },
    "239": {
        "openning_start": 206.801125,
        "openning_end": 295.891125,
        "ending_start": 1264.807333
    },
    "237": {
        "openning_start": 171.848875,
        "openning_end": 260.938875,
        "ending_start": 1264.8073955
    },
    "238": {
        "openning_start": 107.826625,
        "openning_end": 196.916625,
        "ending_start": 1264.7406455
    },
    "240": {
        "openning_start": 173.8515,
        "openning_end": 262.9415,
        "ending_start": 1264.8063955
    },
    "236": {
        "openning_start": 45.0440625,
        "openning_end": 134.1340625,
        "ending_start": 1264.9379795
    },
    "241": {
        "openning_start": 248.8013125,
        "openning_end": 337.8913125,
        "ending_start": 1264.806333
    },
    "245": {
        "openning_start": 149.8488125,
        "openning_end": 238.9388125,
        "ending_start": 1264.895083
    },
    "243": {
        "openning_start": 164.059875,
        "openning_end": 253.149875,
        "ending_start": 1264.9419579999999
    },
    "244": {
        "openning_start": 217.0294375,
        "openning_end": 306.1194375,
        "ending_start": 1265.0087079999998
    },
    "246": {
        "openning_start": 187.803375,
        "openning_end": 276.893375,
        "ending_start": 1264.760917
    },
    "242": {
        "openning_start": 272.0214375,
        "openning_end": 361.11143749999997,
        "ending_start": 1264.9379795
    },
    "247": {
        "openning_start": 376.9809375,
        "openning_end": 466.0709375,
        "ending_start": 1264.9583125
    },
    "251": {
        "openning_start": 148.84775,
        "openning_end": 237.93775,
        "ending_start": 1264.828
    },
    "249": {
        "openning_start": -0.17600000000000016,
        "openning_end": 88.914,
        "ending_start": 1264.828
    },
    "250": {
        "openning_start": 117.8585,
        "openning_end": 206.94850000000002,
        "ending_start": 1264.761583
    },
    "248": {
        "openning_start": 0.021000000000000796,
        "openning_end": 89.111,
        "ending_start": 1265.024458
    },
    "252": {
        "openning_start": 183.9964375,
        "openning_end": 273.0864375,
        "ending_start": 1234.9283125
    },
    "253": {
        "openning_start": 0.020937500000000497,
        "openning_end": 89.1109375,
        "ending_start": 1234.995
    },
    "257": {
        "openning_start": 216.5295,
        "openning_end": 307.121167,
        "ending_start": 1264.9591874999999
    },
    "255": {
        "openning_start": 264.8386875,
        "openning_end": 353.9286875,
        "ending_start": 1234.865417
    },
    "256": {
        "openning_start": 50.071,
        "openning_end": 139.161,
        "ending_start": 1234.9950625
    },
    "259": {
        "openning_start": 169.565875,
        "openning_end": 260.15754200000003,
        "ending_start": 1264.9591874999999
    },
    "258": {
        "openning_start": 130.526875,
        "openning_end": 221.118542,
        "ending_start": 1264.9588545
    },
    "254": {
        "openning_start": 163.058875,
        "openning_end": 252.148875,
        "ending_start": 1234.9953954999999
    },
    "263": {
        "openning_start": 91.5711875,
        "openning_end": 182.16285449999998,
        "ending_start": 1265.026083
    },
    "261": {
        "openning_start": 128.5248125,
        "openning_end": 219.1164795,
        "ending_start": 1264.9590624999998
    },
    "262": {
        "openning_start": 140.536875,
        "openning_end": 231.128542,
        "ending_start": 1265.0933545
    },
    "260": {
        "openning_start": 215.5283125,
        "openning_end": 306.1199795,
        "ending_start": 1265.02575
    },
    "264": {
        "openning_start": 167.3668125,
        "openning_end": 257.9584795,
        "ending_start": 1264.7617295
    },
    "265": {
        "openning_start": 172.37175,
        "openning_end": 262.963417,
        "ending_start": 1264.7623955
    },
    "269": {
        "openning_start": 261.555625,
        "openning_end": 352.147292,
        "ending_start": 1265.116458
    },
    "267": {
        "openning_start": 44.565875,
        "openning_end": 135.157542,
        "ending_start": 1265.0261455
    },
    "268": {
        "openning_start": 299.5706875,
        "openning_end": 390.1623545,
        "ending_start": 1264.9590624999998
    },
    "266": {
        "openning_start": 238.551375,
        "openning_end": 329.14304200000004,
        "ending_start": 1265.0261455
    },
    "271": {
        "openning_start": 50.5719375,
        "openning_end": 141.1636045,
        "ending_start": 1265.0685205
    },
    "270": {
        "openning_start": 137.55675,
        "openning_end": 228.148417,
        "ending_start": 1264.9830204999998
    },
    "275": {
        "openning_start": 60.54025,
        "openning_end": 151.131917,
        "ending_start": 1265.0268955
    },
    "273": {
        "openning_start": 238.5514375,
        "openning_end": 329.1431045,
        "ending_start": 1264.9598124999998
    },
    "274": {
        "openning_start": -0.4789999999999992,
        "openning_end": 90.112667,
        "ending_start": 1264.8923955
    },
    "272": {
        "openning_start": 98.57825,
        "openning_end": 189.169917,
        "ending_start": 1264.9598124999998
    },
    "276": {
        "openning_start": 29.561437499999997,
        "openning_end": 120.1531045,
        "ending_start": 1265.0833545
    },
    "277": {
        "openning_start": 221.544875,
        "openning_end": 312.13654199999996,
        "ending_start": 1264.9495205
    },
    "281": {
        "openning_start": 68.5586875,
        "openning_end": 159.1503545,
        "ending_start": 1264.9491874999999
    },
    "279": {
        "openning_start": 180.5038125,
        "openning_end": 271.0954795,
        "ending_start": 1265.016208
    },
    "280": {
        "openning_start": 91.58175,
        "openning_end": 182.173417,
        "ending_start": 1265.0162705
    },
    "278": {
        "openning_start": 135.525625,
        "openning_end": 226.117292,
        "ending_start": 1264.9488545
    },
    "283": {
        "openning_start": 164.061,
        "openning_end": 254.152667,
        "ending_start": 1264.9590624999998
    },
    "282": {
        "openning_start": 53.0750625,
        "openning_end": 143.1667295,
        "ending_start": 1264.9587295
    },
    "287": {
        "openning_start": 0.024312500000000625,
        "openning_end": 90.11597950000001,
        "ending_start": 1265.0367079999999
    },
    "285": {
        "openning_start": 180.0708125,
        "openning_end": 270.1624795,
        "ending_start": 1265.0366454999998
    },
    "286": {
        "openning_start": 164.0548125,
        "openning_end": 254.1464795,
        "ending_start": 1264.969292
    },
    "284": {
        "openning_start": 348.0593125,
        "openning_end": 438.15097949999995,
        "ending_start": 1265.04875
    },
    "289": {
        "openning_start": 56.08025000000001,
        "openning_end": 146.171917,
        "ending_start": 1264.9695625
    },
    "293": {
        "openning_start": 407.07875,
        "openning_end": 497.17041700000004,
        "ending_start": 1265.0004795
    },
    "291": {
        "openning_start": 251.02499999999998,
        "openning_end": 341.116667,
        "ending_start": 1265.044958
    },
    "288": {
        "openning_start": 311.0015625,
        "openning_end": 401.0932295,
        "ending_start": 1264.9695625
    },
    "292": {
        "openning_start": 95.1004375,
        "openning_end": 185.1921045,
        "ending_start": 1265.0682295000001
    },
    "290": {
        "openning_start": 72.054625,
        "openning_end": 162.14629200000002,
        "ending_start": 1264.9779999999998
    },
    "299": {
        "openning_start": 151.050125,
        "openning_end": 241.141792,
        "ending_start": 1264.9591249999999
    },
    "297": {
        "openning_start": 0.024250000000000327,
        "openning_end": 90.115917,
        "ending_start": 1265.0255419999999
    },
    "295": {
        "openning_start": 164.0611875,
        "openning_end": 254.1528545,
        "ending_start": 1229.4595
    },
    "298": {
        "openning_start": 159.058125,
        "openning_end": 249.149792,
        "ending_start": 1265.026208
    },
    "294": {
        "openning_start": 191.048375,
        "openning_end": 281.140042,
        "ending_start": 1265.044958
    },
    "296": {
        "openning_start": 180.0790625,
        "openning_end": 270.1707295,
        "ending_start": 1265.026208
    },
    "305": {
        "openning_start": 210.02575,
        "openning_end": 300.117417,
        "ending_start": 1265.093292
    },
    "304": {
        "openning_start": 327.017625,
        "openning_end": 417.109292,
        "ending_start": 1265.026208
    },
    "300": {
        "openning_start": 110.0925625,
        "openning_end": 200.18422950000001,
        "ending_start": 1265.0256044999999
    },
    "301": {
        "openning_start": 98.0708125,
        "openning_end": 188.16247950000002,
        "ending_start": 1264.9601455
    },
    "303": {
        "openning_start": 280.054,
        "openning_end": 370.145667,
        "ending_start": 1265.026208
    },
    "302": {
        "openning_start": 157.056125,
        "openning_end": 247.147792,
        "ending_start": 1264.9591249999999
    },
    "311": {
        "openning_start": 0.02131250000000051,
        "openning_end": 90.1129795,
        "ending_start": 1264.9596875
    },
    "307": {
        "openning_start": 92.038375,
        "openning_end": 182.130042,
        "ending_start": 1265.009208
    },
    "310": {
        "openning_start": 0.021250000000000213,
        "openning_end": 90.112917,
        "ending_start": 1264.892875
    },
    "309": {
        "openning_start": 257.0280625,
        "openning_end": 347.11972949999995,
        "ending_start": 1264.936708
    },
    "306": {
        "openning_start": 357.0475625,
        "openning_end": 447.13922950000006,
        "ending_start": 1264.9590624999998
    },
    "308": {
        "openning_start": 0.02131250000000051,
        "openning_end": 90.1129795,
        "ending_start": 1265.0267079999999
    },
    "317": {
        "openning_start": 124.02012500000001,
        "openning_end": 214.111792,
        "ending_start": 1265.026042
    },
    "313": {
        "openning_start": 198.0525,
        "openning_end": 288.14416700000004,
        "ending_start": 1264.959625
    },
    "312": {
        "openning_start": 183.9966875,
        "openning_end": 274.08835450000004,
        "ending_start": 1264.9595625
    },
    "316": {
        "openning_start": 84.0635625,
        "openning_end": 174.15522950000002,
        "ending_start": 1265.0263125
    },
    "315": {
        "openning_start": 125.0211875,
        "openning_end": 215.1128545,
        "ending_start": 1264.9432705
    },
    "314": {
        "openning_start": 0.021250000000000213,
        "openning_end": 90.112917,
        "ending_start": 1265.026042
    },
    "323": {
        "openning_start": 165.279,
        "openning_end": 255.370667,
        "ending_start": 1265.2409375000002
    },
    "319": {
        "openning_start": 0.02131250000000051,
        "openning_end": 90.1129795,
        "ending_start": 1265.0348955
    },
    "321": {
        "openning_start": 212.0248125,
        "openning_end": 302.11647949999997,
        "ending_start": 1265.0225205
    },
    "318": {
        "openning_start": 523.919625,
        "openning_end": 614.011292,
        "ending_start": 1264.8761875
    },
    "322": {
        "openning_start": 121.23712499999999,
        "openning_end": 211.328792,
        "ending_start": 1265.1753125
    },
    "320": {
        "openning_start": 0.02137500000000081,
        "openning_end": 90.11304200000001,
        "ending_start": 1265.0262295
    },
    "329": {
        "openning_start": 0.21875,
        "openning_end": 90.310417,
        "ending_start": 1264.967
    },
    "325": {
        "openning_start": 345.251125,
        "openning_end": 435.34279200000003,
        "ending_start": 1265.2252295
    },
    "327": {
        "openning_start": 158.274125,
        "openning_end": 248.365792,
        "ending_start": 1265.2430000000002
    },
    "328": {
        "openning_start": 0.24125000000000085,
        "openning_end": 90.33291700000001,
        "ending_start": 1265.2430625000002
    },
    "326": {
        "openning_start": 116.3155,
        "openning_end": 206.40716700000002,
        "ending_start": 1265.28475
    },
    "324": {
        "openning_start": 0.2612500000000004,
        "openning_end": 90.352917,
        "ending_start": 1265.1765
    },
    "335": {
        "openning_start": 203.015875,
        "openning_end": 293.10754199999997,
        "ending_start": 1265.0261455
    },
    "331": {
        "openning_start": 60.3011875,
        "openning_end": 150.3928545,
        "ending_start": 1265.175917
    },
    "333": {
        "openning_start": 73.05275,
        "openning_end": 163.144417,
        "ending_start": 1265.026875
    },
    "332": {
        "openning_start": 156.272125,
        "openning_end": 246.363792,
        "ending_start": 1265.1756455
    },
    "334": {
        "openning_start": 19.0404375,
        "openning_end": 109.1321045,
        "ending_start": 1265.025875
    },
    "330": {
        "openning_start": 133.290875,
        "openning_end": 223.382542,
        "ending_start": 1265.243125
    },
    "341": {
        "openning_start": 0.023562500000000597,
        "openning_end": 90.1152295,
        "ending_start": 1265.0282705
    },
    "337": {
        "openning_start": 307.997875,
        "openning_end": 398.08954200000005,
        "ending_start": 1265.028333
    },
    "339": {
        "openning_start": 160.059625,
        "openning_end": 250.151292,
        "ending_start": 1265.0301875
    },
    "338": {
        "openning_start": 172.0704375,
        "openning_end": 262.1621045,
        "ending_start": 1264.9612499999998
    },
    "340": {
        "openning_start": 0.023562500000000597,
        "openning_end": 90.1152295,
        "ending_start": 1264.9611874999998
    },
    "336": {
        "openning_start": 0.0235000000000003,
        "openning_end": 90.115167,
        "ending_start": 1265.0282705
    },
    "347": {
        "openning_start": 0.0011250000000000426,
        "openning_end": 90.092792,
        "ending_start": 1264.9680625
    },
    "343": {
        "openning_start": 272.0453125,
        "openning_end": 362.13697950000005,
        "ending_start": 1264.9611874999998
    },
    "345": {
        "openning_start": 0.023562500000000597,
        "openning_end": 90.1152295,
        "ending_start": 1264.9611874999998
    },
    "346": {
        "openning_start": 0.02362499999999912,
        "openning_end": 90.115292,
        "ending_start": 1265.0262705
    },
    "353": {
        "openning_start": 0.023562500000000597,
        "openning_end": 90.1152295,
        "ending_start": 1264.8774795
    },
    "344": {
        "openning_start": 70.051875,
        "openning_end": 160.143542,
        "ending_start": 1265.0095205
    },
    "342": {
        "openning_start": 128.0264375,
        "openning_end": 218.1181045,
        "ending_start": 1265.0282705
    },
    "349": {
        "openning_start": 53.0765625,
        "openning_end": 143.1682295,
        "ending_start": 1264.8774795
    },
    "351": {
        "openning_start": 0.023562500000000597,
        "openning_end": 90.1152295,
        "ending_start": 1264.9195
    },
    "359": {
        "openning_start": 0.02156249999999993,
        "openning_end": 90.1132295,
        "ending_start": 1264.95825
    },
    "352": {
        "openning_start": 0.0235000000000003,
        "openning_end": 90.115167,
        "ending_start": 1265.0282705
    },
    "350": {
        "openning_start": 0.023562500000000597,
        "openning_end": 90.1152295,
        "ending_start": 1265.0282705
    },
    "348": {
        "openning_start": 0.0010624999999997442,
        "openning_end": 90.0927295,
        "ending_start": 1264.9680625
    },
    "355": {
        "openning_start": 0.023562500000000597,
        "openning_end": 90.1152295,
        "ending_start": 1264.9612499999998
    },
    "357": {
        "openning_start": 0.0727499999999992,
        "openning_end": 90.164417,
        "ending_start": 1265.068542
    },
    "365": {
        "openning_start": 0.023687499999999417,
        "openning_end": 90.1153545,
        "ending_start": 1264.8769375
    },
    "358": {
        "openning_start": 0.02156249999999993,
        "openning_end": 90.1132295,
        "ending_start": 1264.95825
    },
    "361": {
        "openning_start": -0.004937500000000483,
        "openning_end": 90.0867295,
        "ending_start": 1264.93175
    },
    "356": {
        "openning_start": 0.01356250000000081,
        "openning_end": 90.10522950000001,
        "ending_start": 1264.9352295
    },
    "354": {
        "openning_start": 0.02362499999999912,
        "openning_end": 90.115292,
        "ending_start": 1265.028333
    },
    "363": {
        "openning_start": 0.023812500000000014,
        "openning_end": 90.1154795,
        "ending_start": 1265.0275829999998
    },
    "371": {
        "openning_start": 27.061812500000002,
        "openning_end": 117.1534795,
        "ending_start": 1264.964042
    },
    "364": {
        "openning_start": 0.023687499999999417,
        "openning_end": 90.1153545,
        "ending_start": 1264.9604375
    },
    "367": {
        "openning_start": 57.091875,
        "openning_end": 147.183542,
        "ending_start": 1264.9644375
    },
    "360": {
        "openning_start": 0.023749999999999716,
        "openning_end": 90.11541700000001,
        "ending_start": 1264.9604375
    },
    "362": {
        "openning_start": 304.995,
        "openning_end": 395.08666700000003,
        "ending_start": 1265.026792
    },
    "369": {
        "openning_start": 51.0625,
        "openning_end": 141.154167,
        "ending_start": 1265.007208
    },
    "377": {
        "openning_start": 0.03700000000000081,
        "openning_end": 90.12866700000001,
        "ending_start": 1264.883125
    },
    "370": {
        "openning_start": 0.012249999999999872,
        "openning_end": 90.103917,
        "ending_start": 1265.0085625000002
    },
    "366": {
        "openning_start": 0.023687499999999417,
        "openning_end": 90.1153545,
        "ending_start": 1264.960375
    },
    "368": {
        "openning_start": 0.03481249999999925,
        "openning_end": 90.1264795,
        "ending_start": 1264.964375
    },
    "373": {
        "openning_start": 66.06125,
        "openning_end": 156.152917,
        "ending_start": 1264.9248125000001
    },
    "375": {
        "openning_start": 119.11418750000001,
        "openning_end": 209.20585450000002,
        "ending_start": 1265.0318545
    },
    "383": {
        "openning_start": 0.026187500000000696,
        "openning_end": 90.1178545,
        "ending_start": 1264.9382705
    },
    "376": {
        "openning_start": 0.03700000000000081,
        "openning_end": 90.12866700000001,
        "ending_start": 1265.0323125
    },
    "374": {
        "openning_start": 58.095,
        "openning_end": 148.186667,
        "ending_start": 1265.0326455
    },
    "372": {
        "openning_start": 0.03687500000000021,
        "openning_end": 90.128542,
        "ending_start": 1265.0498750000002
    },
    "379": {
        "openning_start": 0.03693750000000051,
        "openning_end": 90.1286045,
        "ending_start": 1264.9665
    },
    "381": {
        "openning_start": 357.0495625,
        "openning_end": 447.1412295,
        "ending_start": 1265.00475
    },
    "389": {
        "openning_start": 0.02843750000000078,
        "openning_end": 90.1201045,
        "ending_start": 1264.9411875
    },
    "382": {
        "openning_start": 141.0368125,
        "openning_end": 231.1284795,
        "ending_start": 1265.067125
    },
    "380": {
        "openning_start": 0.027874999999999872,
        "openning_end": 90.119542,
        "ending_start": 1264.8986875
    },
    "387": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1264.9410625
    },
    "385": {
        "openning_start": 75.061625,
        "openning_end": 165.15329200000002,
        "ending_start": 1264.940458
    },
    "378": {
        "openning_start": 11.0896875,
        "openning_end": 101.1813545,
        "ending_start": 1265.0323125
    },
    "395": {
        "openning_start": 71.057625,
        "openning_end": 161.149292,
        "ending_start": 1265.047
    },
    "388": {
        "openning_start": 0.028312500000000185,
        "openning_end": 90.1199795,
        "ending_start": 1265.090583
    },
    "386": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1264.9410625
    },
    "393": {
        "openning_start": 91.0776875,
        "openning_end": 181.1693545,
        "ending_start": 1264.940458
    },
    "391": {
        "openning_start": 286.0640625,
        "openning_end": 376.1557295,
        "ending_start": 1264.9403955
    },
    "384": {
        "openning_start": 88.0725625,
        "openning_end": 178.1642295,
        "ending_start": 1265.071833
    },
    "401": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1265.046667
    },
    "394": {
        "openning_start": 234.0538125,
        "openning_end": 324.14547949999996,
        "ending_start": 1265.0293749999998
    },
    "392": {
        "openning_start": 37.065375,
        "openning_end": 127.157042,
        "ending_start": 1264.9234374999999
    },
    "399": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1265.1136875000002
    },
    "397": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1265.1130205
    },
    "390": {
        "openning_start": 0.02843750000000078,
        "openning_end": 90.1201045,
        "ending_start": 1264.9245
    },
    "407": {
        "openning_start": 39.065375,
        "openning_end": 129.157042,
        "ending_start": 1264.9481875
    },
    "400": {
        "openning_start": 0.023125000000000284,
        "openning_end": 90.114792,
        "ending_start": 1265.107833
    },
    "398": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1265.11375
    },
    "405": {
        "openning_start": 0.028312500000000185,
        "openning_end": 90.1199795,
        "ending_start": 1265.11375
    },
    "403": {
        "openning_start": 164.04475,
        "openning_end": 254.136417,
        "ending_start": 1265.0903125
    },
    "396": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1264.9635625
    },
    "413": {
        "openning_start": 0.026312499999999517,
        "openning_end": 90.1179795,
        "ending_start": 1264.965208
    },
    "406": {
        "openning_start": 98.0826875,
        "openning_end": 188.1743545,
        "ending_start": 1264.9492500000001
    },
    "404": {
        "openning_start": 71.0576875,
        "openning_end": 161.14935450000002,
        "ending_start": 1265.0463955
    },
    "411": {
        "openning_start": 0.026437500000000114,
        "openning_end": 90.1181045,
        "ending_start": 1264.497625
    },
    "409": {
        "openning_start": 0.026312499999999517,
        "openning_end": 90.1179795,
        "ending_start": 1265.0325625
    },
    "402": {
        "openning_start": 0.028375000000000483,
        "openning_end": 90.120042,
        "ending_start": 1265.046667
    },
    "419": {
        "openning_start": 0.021062499999999318,
        "openning_end": 90.1127295,
        "ending_start": 1265.0268125
    },
    "412": {
        "openning_start": 0.026437500000000114,
        "openning_end": 90.1181045,
        "ending_start": 1264.9652705
    },
    "410": {
        "openning_start": 0.026374999999999815,
        "openning_end": 90.118042,
        "ending_start": 1265.0316249999998
    },
    "417": {
        "openning_start": 0.026312499999999517,
        "openning_end": 90.1179795,
        "ending_start": 1265.032625
    },
    "415": {
        "openning_start": 0.026312499999999517,
        "openning_end": 90.1179795,
        "ending_start": 1265.0315624999998
    },
    "408": {
        "openning_start": 0.026374999999999815,
        "openning_end": 90.118042,
        "ending_start": 1264.9652705
    },
    "425": {
        "openning_start": 29.01375,
        "openning_end": 119.105417,
        "ending_start": 1264.992958
    },
    "418": {
        "openning_start": 73.057625,
        "openning_end": 163.149292,
        "ending_start": 1264.966042
    },
    "416": {
        "openning_start": 0.026437500000000114,
        "openning_end": 90.1181045,
        "ending_start": 1265.0316874999999
    },
    "423": {
        "openning_start": 0.021124999999999616,
        "openning_end": 90.112792,
        "ending_start": 1265.0290625
    },
    "421": {
        "openning_start": 171.0721875,
        "openning_end": 261.1638545,
        "ending_start": 1264.967833
    },
    "414": {
        "openning_start": 88.067375,
        "openning_end": 178.159042,
        "ending_start": 1265.0263125
    },
    "431": {
        "openning_start": 58.001000000000005,
        "openning_end": 148.092667,
        "ending_start": 1264.929125
    },
    "424": {
        "openning_start": 112.096625,
        "openning_end": 202.188292,
        "ending_start": 1264.967833
    },
    "422": {
        "openning_start": 99.0784375,
        "openning_end": 189.1701045,
        "ending_start": 1264.9626455
    },
    "429": {
        "openning_start": 31.974937500000003,
        "openning_end": 122.06660450000001,
        "ending_start": 1264.9914795
    },
    "427": {
        "openning_start": -0.020562500000000483,
        "openning_end": 90.0711045,
        "ending_start": 1264.895542
    },
    "420": {
        "openning_start": 38.064375,
        "openning_end": 128.156042,
        "ending_start": 1265.032125
    },
    "430": {
        "openning_start": -0.015437500000000881,
        "openning_end": 90.0762295,
        "ending_start": 1264.992833
    },
    "437": {
        "openning_start": 190.8195,
        "openning_end": 280.911167,
        "ending_start": 1264.8391875
    },
    "428": {
        "openning_start": -0.015312500000000284,
        "openning_end": 90.07635450000001,
        "ending_start": 1264.9928955
    },
    "435": {
        "openning_start": 71.90425,
        "openning_end": 161.99591700000002,
        "ending_start": 1264.877125
    },
    "433": {
        "openning_start": 86.0301875,
        "openning_end": 176.12185449999998,
        "ending_start": 1265.0857500000002
    },
    "426": {
        "openning_start": 39.0236875,
        "openning_end": 129.1153545,
        "ending_start": 1264.929208
    },
    "436": {
        "openning_start": 133.845875,
        "openning_end": 223.937542,
        "ending_start": 1264.8391875
    },
    "443": {
        "openning_start": 74.8703125,
        "openning_end": 164.96197949999998,
        "ending_start": 1264.7727705
    },
    "434": {
        "openning_start": -0.12599999999999945,
        "openning_end": 89.965667,
        "ending_start": 1264.8761875
    },
    "441": {
        "openning_start": 147.974,
        "openning_end": 238.065667,
        "ending_start": 1265.020333
    },
    "439": {
        "openning_start": 80.8763125,
        "openning_end": 170.9679795,
        "ending_start": 1264.905875
    },
    "432": {
        "openning_start": -0.014124999999999943,
        "openning_end": 90.077542,
        "ending_start": 1264.9883955
    },
    "442": {
        "openning_start": -0.16300000000000026,
        "openning_end": 89.928667,
        "ending_start": 1264.8391875
    },
    "449": {
        "openning_start": 151.8633125,
        "openning_end": 241.9549795,
        "ending_start": 1264.839125
    },
    "447": {
        "openning_start": 97.851625,
        "openning_end": 187.94329199999999,
        "ending_start": 1264.8396249999998
    },
    "440": {
        "openning_start": 90.918,
        "openning_end": 181.009667,
        "ending_start": 1264.803792
    },
    "445": {
        "openning_start": -0.16300000000000026,
        "openning_end": 89.928667,
        "ending_start": 1264.8396249999998
    },
    "438": {
        "openning_start": 75.8713125,
        "openning_end": 165.96297950000002,
        "ending_start": 1264.8391875
    },
    "448": {
        "openning_start": -0.15287499999999987,
        "openning_end": 89.938792,
        "ending_start": 1264.8828545000001
    },
    "455": {
        "openning_start": 19.748625,
        "openning_end": 109.840292,
        "ending_start": 1264.8048125
    },
    "453": {
        "openning_start": -0.1635624999999994,
        "openning_end": 89.9281045,
        "ending_start": 1264.839125
    },
    "451": {
        "openning_start": 26.8635625,
        "openning_end": 116.9552295,
        "ending_start": 1264.8391875
    },
    "444": {
        "openning_start": 27.865000000000002,
        "openning_end": 117.95666700000001,
        "ending_start": 1264.8374999999999
    },
    "446": {
        "openning_start": -0.16293749999999996,
        "openning_end": 89.9287295,
        "ending_start": 1264.7732705
    },
    "454": {
        "openning_start": 110.8640625,
        "openning_end": 200.95572950000002,
        "ending_start": 1264.8391875
    },
    "461": {
        "openning_start": -0.18568750000000023,
        "openning_end": 89.9059795,
        "ending_start": 1264.8225000000002
    },
    "452": {
        "openning_start": 31.868562500000003,
        "openning_end": 121.9602295,
        "ending_start": 1264.7727705
    },
    "459": {
        "openning_start": 178.8681875,
        "openning_end": 268.9598545,
        "ending_start": 1264.8225000000002
    },
    "457": {
        "openning_start": -0.1880000000000006,
        "openning_end": 89.903667,
        "ending_start": 1264.755083
    },
    "450": {
        "openning_start": 35.8725,
        "openning_end": 125.964167,
        "ending_start": 1264.839125
    },
    "460": {
        "openning_start": 67.8405625,
        "openning_end": 157.9322295,
        "ending_start": 1264.8224375
    },
    "467": {
        "openning_start": 88.8610625,
        "openning_end": 178.9527295,
        "ending_start": 1264.8855624999999
    },
    "465": {
        "openning_start": -0.18618750000000084,
        "openning_end": 89.9054795,
        "ending_start": 1264.754583
    },
    "458": {
        "openning_start": -0.2713750000000008,
        "openning_end": 89.820292,
        "ending_start": 1264.671708
    },
    "463": {
        "openning_start": 85.858625,
        "openning_end": 175.950292,
        "ending_start": 1264.8881875
    },
    "456": {
        "openning_start": -0.2713750000000008,
        "openning_end": 89.820292,
        "ending_start": 1264.7390625
    },
    "466": {
        "openning_start": -0.18624999999999936,
        "openning_end": 89.905417,
        "ending_start": 1264.7545205000001
    },
    "473": {
        "openning_start": 253.81743749999998,
        "openning_end": 343.9091045,
        "ending_start": 1264.7545205000001
    },
    "471": {
        "openning_start": 65.8595625,
        "openning_end": 155.9512295,
        "ending_start": 1264.776083
    },
    "464": {
        "openning_start": 117.848875,
        "openning_end": 207.940542,
        "ending_start": 1264.8224375
    },
    "469": {
        "openning_start": 62.83506250000001,
        "openning_end": 152.92672950000002,
        "ending_start": 1264.754583
    },
    "462": {
        "openning_start": -0.18568750000000023,
        "openning_end": 89.9059795,
        "ending_start": 1264.755083
    },
    "472": {
        "openning_start": 53.8893125,
        "openning_end": 143.9809795,
        "ending_start": 1264.7761455
    },
    "479": {
        "openning_start": -0.16474999999999973,
        "openning_end": 89.926917,
        "ending_start": 1219.8401875000002
    },
    "478": {
        "openning_start": 82.8765625,
        "openning_end": 172.9682295,
        "ending_start": 1252.7252500000002
    },
    "470": {
        "openning_start": 39.8753125,
        "openning_end": 129.9669795,
        "ending_start": 1264.776083
    },
    "468": {
        "openning_start": 125.814625,
        "openning_end": 215.906292,
        "ending_start": 1264.8220000000001
    },
    "475": {
        "openning_start": 23.8593125,
        "openning_end": 113.9509795,
        "ending_start": 1264.8435000000002
    },
    "477": {
        "openning_start": -0.18568750000000023,
        "openning_end": 89.9059795,
        "ending_start": 1264.755083
    },
    "485": {
        "openning_start": -0.16256249999999994,
        "openning_end": 89.9291045,
        "ending_start": 1264.8428125
    },
    "484": {
        "openning_start": 68.823125,
        "openning_end": 158.914792,
        "ending_start": 1264.8429375
    },
    "476": {
        "openning_start": 58.8943125,
        "openning_end": 148.98597949999998,
        "ending_start": 1264.8435000000002
    },
    "483": {
        "openning_start": -0.12081249999999955,
        "openning_end": 89.9708545,
        "ending_start": 1264.8845625000001
    },
    "481": {
        "openning_start": -0.16256249999999994,
        "openning_end": 89.9291045,
        "ending_start": 1264.7753955
    },
    "491": {
        "openning_start": 51.1125625,
        "openning_end": 141.2042295,
        "ending_start": 1265.064167
    },
    "474": {
        "openning_start": 164.8751875,
        "openning_end": 254.9668545,
        "ending_start": 1264.776083
    },
    "497": {
        "openning_start": 15.076562500000001,
        "openning_end": 105.1682295,
        "ending_start": 1264.9976875
    },
    "482": {
        "openning_start": -0.16256249999999994,
        "openning_end": 89.9291045,
        "ending_start": 1264.8428125
    },
    "487": {
        "openning_start": 0.10331249999999947,
        "openning_end": 90.1949795,
        "ending_start": 1265.0409375
    },
    "480": {
        "openning_start": -0.16256249999999994,
        "openning_end": 89.9291045,
        "ending_start": 1264.775458
    },
    "489": {
        "openning_start": 0.039937500000000625,
        "openning_end": 90.13160450000001,
        "ending_start": 1265.042542
    },
    "490": {
        "openning_start": 33.073,
        "openning_end": 123.16466700000001,
        "ending_start": 1265.0426045
    },
    "495": {
        "openning_start": 0.061500000000000554,
        "openning_end": 90.153167,
        "ending_start": 1265.0153125000002
    },
    "496": {
        "openning_start": 41.1025,
        "openning_end": 131.194167,
        "ending_start": 1265.0644375
    },
    "488": {
        "openning_start": 0.06156250000000085,
        "openning_end": 90.15322950000001,
        "ending_start": 1265.0656045
    },
    "486": {
        "openning_start": 0.061437500000000256,
        "openning_end": 90.1531045,
        "ending_start": 1265.000125
    },
    "493": {
        "openning_start": 0.061500000000000554,
        "openning_end": 90.153167,
        "ending_start": 1265.080792
    },
    "494": {
        "openning_start": 143.079375,
        "openning_end": 233.171042,
        "ending_start": 1265.077792
    },
    "499": {
        "openning_start": 0.061500000000000554,
        "openning_end": 90.153167,
        "ending_start": 1264.9976875
    },
    "492": {
        "openning_start": 15.0765,
        "openning_end": 105.168167,
        "ending_start": 1265.014375
    },
    "500": {
        "openning_start": 99.0555,
        "openning_end": 189.147167,
        "ending_start": 1265.060292
    },
    "498": {
        "openning_start": 156.0924375,
        "openning_end": 246.1841045,
        "ending_start": 1264.9560625
    }
};

export const titles = {
	"001": "De Volta Para Casa",
	"002": "A Akatsuki Faz Seu Movimento",
	"003": "Os Resultados do Treinamento",
	"004": "Jinchuuriki da Areia",
	"005": "A Coragem do Kazegake...",
	"006": "Miss??o Cumprida",
	"007": "Corra, Kankuro",
	"008": "Time Kakashi Se Prepara!",
	"009": "L??grimas do Jinchuuriki",
	"010": "Jutsu de Selamento: Nove Drag??es Fantasmas",
	"011": "A Pupila da M??dica Ninja",
	"012": "A Decis??o da Velha Aposentada",
	"013": "O Encontro do Destino",
	"014": "O Crescimento de Naruto",
	"015": "A Arma Seccreta ?? Chamada...",
	"016": "O Segredo do Jinchuuriki!",
	"017": "A Morte do Gaara!",
	"018": "Invas??o! A Investida Gancho Lateral!",
	"019": "Ativar Armadilhas! Os Inimigos do Time Gai!",
	"020": "Hiruko Contra Duas Kunoichi!",
	"021": "A Verdadeira Face de Sasori",
	"022": "As Habilidades Secretas de Chiyo",
	"023": "Pai e M??e",
	"024": "O Sandaime Kazekage",
	"025": "Tr??s Minutos Entre a Vida e a Morte",
	"026": "Luta de Marionetes: 10 Contra 100!",
	"027": "Sonho Imposs??vel",
	"028": "As Feras Renascidas!",
	"029": "Kakashi Evoluido",
	"030": "A Beleza de um Segundo",

	"031": "O Legado",
	"032": "O Retorno do Kazekage",
	"033": "O Novo Alvo",
	"034": "Forma????o! O Novo Time Kakashi",
	"035": "Uma Adi????o Desnecess??ria",
	"036": "O Sorrido Falso",
	"037": "Sem T??tulo",
	"038": "Simula????o",
	"039": "A Ponte Tenchi",
	"040": "Kyuubi Liberada!!",
	"041": "A Miss??o Super Secreta Come??a",
	"042": "Orochimaru Vs. Jinchuuriki",
	"043": "As L??grimas de Sakura",
	"044": "O Segredo da Batalha!",
	"045": "As Consequ??ncias da Trai????o",
	"046": "A P??gina Inacabada",
	"047": "Infiltra????o: O Ninho da Cobra",
	"048": "La??os",
	"049": "Algo Importante",
	"050": "A Hist??ria do Livro de Desenhos",
	"051": "Reencontro",
	"052": "O Poder dos Uchiha",
	"053": "T??tulo",

	"054": "Pesadelo (Semi-Filler)",
	"055": "Vento",
	"056": "Contorcer",
	"057": "Desprovido do Descanso Eterno (Filler)",
	"058": "Solid??o (Filler)",
	"059": "Um Novo Inimigo (Filler)",
	"060": "Roda da Sorte (Filler)",
	"061": "Contato (Filler)",
	"062": "Companheiro (Filler)",
	"063": "Os Dois Reis (Filler)",
	"064": "Sinal de Fogo Preto e Brilhoso (Filler)",
	"065": "Confinados pela Escurid??o (Filler)",
	"066": "Almas Revividas (Filler)",
	"067": "Todos se Esfor??ando at?? a Morte (Filler)",
	"068": "Momento do Despertar (Filler)",
	"069": "Desespero (Filler)",
	"070": "Resson??ncia (Filler)",
	"071": "Meu Amigo (Semi-Filler)",
	"072": "A Amea??a que se Aproxima Sorrateiramente",
	"073": "A Invas??o da Akatsuki",
	"074": "Sob o C??u Estrelado",
	"075": "A Ora????o do Velho Monge",
	"076": "O Pr??ximo Passo",
	"077": "Escalada de Prata",

	"078": "O Julgamento",
	"079": "O Grito Que N??o o Alcan??ou",
	"080": "??ltimas Palavras",
	"081": "Not??cias Tristes",
	"082": "Time 10",
	"083": "Alvo Na Mira",
	"084": "As Habilidades de Kakuzu",
	"085": "O Segredo Assustador",
	"086": "A Genialidade de Shikamaru",
	"087": "Quando Amaldi??oamos Algu??m, Cavamos a Propria Cova",
	"088": "Futon: Rasen Shuriken!",
	"089": "O Pre??o do Poder",
	"090": "A Determina????o de Um Ninja (Semi-Filler)",
	"091": "O Esconderijo de Orochimaru ?? Descoberto! (Semi-Filler)",
	"092": "Encontro (Semi-Filler)",
	"093": "Conectando Cora????es (Filler)",
	"094": "Uma Noite de Chuva (Filler)",
	"095": "As Duas Lembran??as (Filler)",
	"096": "O Inimigo Que N??o Se V?? (Filler)",
	"097": "O Labirinto de Reflexo Distorcido (Filler)",
	"098": "O Alvo Aparece (Filler)",
	"099": "A Bijuu Enlouquecida (Filler)",
	"100": "Dentro da N??voa (Filler)",
	"101": "O Sentimento de Todos (Filler)",
	"102": "Reagrupar! (Filler)",

	"103": "A Barreira de Selamento de Quatro Cantos (Filler)",
	"104": "Quebrando o Shouton (Filler)",
	"105": "A Batalha Pela Barreira (Filler)",
	"106": "Cam??lia Vermelha (Filler)",
	"107": "Companheiros Estranhos (Filler)",
	"108": "O Caminho para a Cam??lia (Filler)",
	"109": "Contra-Ataque da Marca da Maldi????o (Filler)",
	"110": "Mem??rias de Culpa (Filler)",
	"111": "Promessa Quebrada (Filler)",
	"112": "Um Lugar para Voltar (Semi-Filler)",
	"113": "O Disc??pulo da Serpente",
	"114": "Olho de Falc??o",
	"115": "A Espada de Zabuza (Semi-Filler)",
	"116": "Guardi?? da Muralha de A??o",
	"117": "Juugo do Escoderijo Norte",
	"118": "Forma????o",
	"119": "Cr??nicas de Kakashi ~A vida de um Menino no Campo de Batalha~ Parte 1 (Gaiden)",
	"120": "Cr??nicas de Kakashi ~A vida de um Menino no Campo de Batalha~ Parte 2 (Gaiden)",
	"121": "Reunir",
	"122": "A Ca??ada",
	"123": "Colis??o!",
	"124": "Arte",
	"125": "Desaparecimento",
	"126": "Crep??sculo",
	"127": "Contos de um Ninja Corajoso ~Pergaminhos Ninja de Jiraya~ Parte 1 (Gaiden)",
	"128": "Contos de um Ninja Corajoso ~Pergaminhos Ninja de Jiraya~ Parte 2 (Gaiden)",

	"129": "Infiltra????o! A Vila Oculta da Chuva",
	"130": "O Homem Que Virou Deus",
	"131": "Ativar! Modo Sennin",
	"132": "Apresentando: Os Seis Caminhos de Pain",
	"133": "O Conto do Valente Jiraya",
	"134": "Convite para o Banquete",
	"135": "O Momento mais Longo...",
	"136": "A Luz e a Escurid??o do Mangekyo Sharingan",
	"137": "Amaterasu",
	"138": "O Fim",
	"139": "O Mist??rio de Tobi",
	"140": "Destino",
	"141": "Verdade",
	"142": "A Batalha no Desfiladeiro do Trov??o",
	"143": "Hachibi versus Sasuke",
	"144": "Andarilho (Filler)",
	"145": "Sucessora do Jutsu Proibido (Filler)",
	"146": "O Desejo da Sucessora (Filler)",
	"147": "O Passado do Ninja Renegado (Filler)",
	"148": "Herdeira da Escurid??o (Filler)",
	"149": "Separa????o (Filler)",
	"150": "Jutsu Proibido Liberado (Filler)",
	"151": "Mestre e Aluno (Filler)",
	"152": "Not??cias Sombrias",
	"153": "Seguindo a Sombra do Mestre",

	"154": "Decodifica????o",
	"155": "O Primeiro Desafio",
	"156": "Superando o Mestre",
	"157": "Ataque ?? Vila Oculta de Konoha!",
	"158": "O Poder de Acreditar",
	"159": "Pain versus Kakashi",
	"160": "O Mist??rio de Pain",
	"161": "Sobrenome, Sarutobi! Nome, Konohamaru!",
	"162": "Dor ao Mundo",
	"163": "Explos??o! Modo Sennin",
	"164": "Perigo! Alcan??ado o Limite do Modo Sennin",
	"165": "Kyuubi Capturada!",
	"166": "Confiss??o",
	"167": "Chibaku Tensei",
	"168": "O Quarto Hokage",
	"169": "Os Dois Pupilos",
	"170": "A Busca Pelo Legado do Quarto Hokage Parte 1 (Omake)",
	"171": "A Busca Pelo Legado do Quarto Hokage Parte 2 (Omake)",
	"172": "Encontro",
	"173": "A Origem de Pain",
	"174": "Contos do Uzumaki Naruto",
	"175": "O Her??i de Konoha",
	"176": "A Hist??ria de Konoha O Instrutor Iruka (Semi-Filler)",
	"177": "A Hist??ria de Konoha O Ju??zo do Iruka (Filler)",
	"178": "A Hist??ria de Konoha A Decis??o de Iruka (Semi-Filler)",
	"179": "Hatake Kakashi O Jounin no Comando (Semi-Filler)",

	"180": "A Coragem de Inari Posta a Prova (Semi-Filler)",
	"181": "Os Ensinamentos Sobre Vingan??a de Naruto (Semi-Filler)",
	"182": "O V??nculo de Gaara (Filler)",
	"183": "Naruto: Incontrol??vel (Filler)",
	"184": "Posicionamento: Time Tenten! (Filler)",
	"185": "Distrito Animal (Filler)",
	"186": "Ah, a Medicina da Juventude (Filler)",
	"187": "Mestre e Aluno Corajosos: O Treinamento (Filler)",
	"188": "Mem??rias dos Corajosos Mestre e Aluno (Filler)",
	"189": "Enciclop??dia de Patas do Sasuke (Filler)",
	"190": "Naruto e o Velho Soldado (Filler)",
	"191": "A M??sica de Amor de Kakashi (Filler)",
	"192": "As Cr??nicas de Neji (Filler)",
	"193": "O Homem que Morreu Duas Vezes (Filler)",
	"194": "A Pior Corrida de Tr??s Pernas (Filler)",
	"195": "Coopera????o, Time 10! (Filler)",
	"196": "Avan??ando pela Escurid??o (Filler)",
	"197": "O Sexto Hokage Danzou",
	"198": "V??spera de Reuni??o dos Cinco Kages",
	"199": "Apare??am, Cinco Kages!",
	"200": "Fundamento de Naruto",
	"201": "A Dolorosa Decis??o",
	"202": "Corrida Rel??mpago",
	"203": "O Jeito Ninja de Sasuke",
	"204": "A For??a dos Cinco Kages",
	"205": "Declara????o de Guerra",

	"206": "Os Sentimentos de Sakura",
	"207": "Bijuu Vs. Bijuu Sem Cauda",
	"208": "Como um Amigo",
	"209": "O Bra??o Direito de Danzou",
	"210": "O Doujutsu Proib??do!",
	"211": "Shimura Danzou",
	"212": "A Decis??o de Sakura",
	"213": "La??os Rompidos",
	"214": "O Fardo Que Devo Carregar",
	"215": "Os Dois Destinos",
	"216": "Shinobi Classe A",
	"217": "Infiltrados",
	"218": "As Cinco Grandes Na????es se Movem",
	"219": "O Hokage Kakashi Hatake! (Semi-Filler)",
	"220": "A Profecia do Oogama-sennin",
	"221": "Armazenagem!",
	"222": "A Decis??o dos Cinco Kages",
	"223": "O Jovem e o Mar (Filler)",
	"224": "O Mercador Ninja de Benisu (Filler)",
	"225": "O Navio Fantasma Amaldi??oado (Filler)",
	"226": "A Ilha do Navio de Guerra (Filler)",
	"227": "A Ilha Perdida (Filler)",
	"228": "Lute! Rock Lee! (Filler)",
	"229": "Coma ou Morra! Os Cogumelos do Inferno! (Filler)",
	"230": "A Vingan??a dos Clones da Sombra (Filler)",

	"231": "Os A Rota Fechada (Filler)",
	"232": "As Meninas se Re??nem (Filler)",
	"233": "Os Impostores de Naruto (Filler)",
	"234": "O Pupilo Favorito de Naruto (Filler)",
	"235": "A Kunoichi de Nadeshiko (Filler)",
	"236": "Amigos em Quem Possa Confiar (Filler)",
	"237": "Minha Hero??na, Tsunade-sama (Filler)",
	"238": "O Dia de Folga de Sai (Filler)",
	"239": "O Lend??rio Ino-Shika-Cho (Filler)",
	"240": "A Determina????o do Kiba (Filler)",
	"241": "Kakashi, Meu Eterno Rival (Filler)",
	"242": "O Voto de Naruto (Filler)",
	"243": "Terra a Vista! Ser?? essa a Ilha Paradis??aca?",
	"244": "Killer Bee e Motoi",
	"245": "Naruto vs Kyuubi",
	"246": "O Brilho Laranja",
	"247": "Alvo: Kyuubi",
	"248": "A Batalha Mortal de Yondaime",
	"249": "Obrigada",
	"250": "Batalha no Para??so! Besta Estranha vs Monstro!",
	"251": "O Homem Chamado Kisame",
	"252": "O Anjo que Tr??s a Morte",
	"253": "A Ponte Para ?? Paz",
	"254": "Miss??o Rank S Super Secreta",
	"255": "O Artista Retorna",
	"256": "Re??nam-se! Alian??a Shinobi!",

	"257": "Encontro (Filler)",
	"258": "Rivais (Filler)",
	"259": "Rachaduras (Filler)",
	"260": "Separa????o (Filler)",
	"261": "Pelo Seu Amigo",
	"262": "Come??a a Guerra!",
	"263": "Sai e Shin",
	"264": "Os Segredos do Edo Tensei",
	"265": "Um Antigo Inimigo Retorna",
	"266": "O Primeiro e o ??ltimo Advers??rio",
	"267": "O Brilhante Conselheiro Estrategista de Konoha",
	"268": "Campo de Batalha!!!",
	"269": "A Palavra Tabu",
	"270": "La??os Dourados",
	"271": "Road to Sakura (Omake)",
	"272": "Mifune Vs. Hanzou",
	"273": "A Verdadeira Gentileza",
	"274": "Forma????o Ino-Shika-Chou Completa!",
	"275": "Uma Mensagem do Cora????o",
	"276": "O Ataque de Gedou Mazou",
	"277": "Selo de Uni??o",
	"278": "Ninjas M??dicos em Perigo",
	"279": "Armadilha do Zetsu Branco (Filler)",
	"280": "A Est??tica do Artista (Filler)",
	"281": "Alian??a Materna (Filler)",

	"282": "Origem Secreta da Dupla Mais Forte!",
	"283": "Dois S??is!",
	"284": "Akebino Jinin da Espada Rachadora de Elmos (Filler)",
	"285": "Usu??ria de Shakuton! Pakura da Areia (Filler)",
	"286": "Aquilo que N??o Podemos Recuperar (Filler)",
	"287": "Algu??m em que se pode apostar (Filler)",
	"288": "Perigo: Jinpachi e Kushimaru (Filler)",
	"289": "As Espadas de Raiton: Ringo Ameyuri! (Filler)",
	"290": "Chikara - Epis??dio 01 (Filler)",
	"291": "Chikara - Epis??dio 02 (Filler)",
	"292": "Chikara - Epis??dio 03 (Filler)",
	"293": "Chikara - Epis??dio 04 (Filler)",
	"294": "Chikara - Epis??dio 05 (Filler)",
	"295": "Chikara - Epis??dio 06 (Filler)",
	"296": "Naruto Vai a Guerra",
	"297": "A Esperan??a de um Pai, O Amor de uma M??e",
	"298": "Contato! Naruto Contra Itachi!",
	"299": "O Reconhecido!",
	"300": "O Mizukage, O Marisco Gigante e as Miragens",
	"301": "Paradoxo",
	"302": "Terror: Jokey Boy!",
	"303": "Fantasmas do Passado (Filler)",
	"304": "O Jutsu de Viagem ao Submundo (Filler)",
	"305": "Vingadores (Filler)",
	"306": "Olhos do Cora????o (Filler)",

	"307": "Desaparecendo no Luar (Filler)",
	"308": "A Noite de Lua Crescente! (Filler)",
	"309": "Miss??o Rank-A: A Competi????o de Comida (Filler)",
	"310": "A Queda do Castelo (Filler)",
	"311": "Pr??logo de Road to Ninja (Omake)",
	"312": "O Antigo Mestre e o Olho de Drag??o (Filler)",
	"313": "Chuva Seguida de Neve, com Chances de Raios (Filler)",
	"314": "O Triste Banho de Chuva e Sol (Filler)",
	"315": "Nevasca Duradoura (Filler)",
	"316": "Alian??a Edo Tensei (Filler)",
	"317": "Shino Vs. Torune! (Filler)",
	"318": "Um Buraco no Cora????o - O Outro Jinchuuriki (Filler)",
	"319": "A Alma que Habita uma Marionete (Filler)",
	"320": "Corra, Omoi! (Filler)",
	"321": "A Chegada de Refor??os!",
	"322": "Uchiha Madara",
	"323": "O Encontro dos Cinco Kages!",
	"324": "A Inquebr??vel M??scara e a Bolha Destru??da (Semi-Filler)",
	"325": "Jinchuuriki Vs. Jinchuuriki",
	"326": "Yonbi, O Eremita Rei dos Macacos",
	"327": "Kyuubi",
	"328": "Kurama",
	"329": "Duas Duplas",
	"330": "Predi????o de Vit??ria",
	"331": "Os Olhos que Olham Para A Escurid??o",
	"332": "Determina????o de Pedra",

	"333": "Riscos do Edo Tensei",
	"334": "Time de Irm??os",
	"335": "A Folha de Todos",
	"336": "Yakushi Kabuto",
	"337": "Izanami Ativado",
	"338": "Izanagi e Izanami",
	"339": "Eu Sempre Vou Te Amar",
	"340": "Edo Tensei: Liberar",
	"341": "O Retorno de Orochimaru!",
	"342": "O Segredo do Jikuukan Ninjutsu",
	"343": "Quem ?? voc???!",
	"344": "Obito e Madara",
	"345": "Estou no Inferno",
	"346": "Mundo dos Sonhos",
	"347": "Sombras Arrepiantes (Filler)",
	"348": "Akatsuki: Renascer (Filler)",
	"349": "A M??scara Que Esconde o Cora????o (Filler)",
	"350": "A Morte de Minato (Filler)",
	"351": "C??lulas de Hashirama (Filler)",
	"352": "Nukenin: Orochimaru (Filler)",
	"353": "O Objeto de Estudo do Orochimaru (Filler)",
	"354": "Seus Pr??prios Caminhos (Filler)",
	"355": "O Alvo, Sharingan (Filler)",
	"356": "Shinobi de Konoha (Filler)",

	"357": "Um Uchiha ANBU (Filler)",
	"358": "Golpe de Estado (Filler)",
	"359": "A Noite da Trag??dia (Filler)",
	"360": "L??der Jounnin (Filler)",
	"361": "Time Sete (Filler)",
	"362": "A Decis??o de Kakashi!!",
	"363": "Alian??a Shinobi no Jutsu!",
	"364": "La??os Inquebr??veis!",
	"365": "Dan??a do Ninjas!",
	"366": "Aqueles Que Sabem Tudo",
	"367": "Hashirama e Madara!",
	"368": "Era da Guerra Entre Na????es!",
	"369": "Meu Verdadeiro Sonho!",
	"370": "A Resposta de Sasuke!",
	"371": "Buraco",
	"372": "Algo Para Preencher o Buraco!",
	"373": "Time 7, Reunir!",
	"374": "O Novo Trio do Impasse Mortal",
	"375": "Kakashi vs Obito!",
	"376": "Instru????es para Capturar a Kyuubi! (Omake)",
	"377": "Naruto contra Mecha Naruto! (Omake)",
	"378": "O Jinchuuriki do Juubi!",
	"379": "Uma Abertura!",

	"380": "O Dia em Que Naruto Nasceu!",
	"381": "Shinju!",
	"382": "O Sonho de um Ninja!",
	"383": "Perseguindo a Esperan??a!",
	"384": "Cora????o Preenchido de Amigos!",
	"385": "Uchiha Obito!",
	"386": "Sempre Estarei te Observando!",
	"387": "A Promessa Que Foi Cumprida!",
	"388": "Meu Primeiro Amigo! (Semi-Filler)",
	"389": "A Adorada Irm?? Mais Velha (Omake)",
	"390": "A Decis??o de Hanabi (Omake)",
	"391": "A Ascens??o de Uchiha Madara!",
	"392": "O Cora????o Oculto",
	"393": "Um Verdadeiro Fim",
	"394": "Os Novos Exames Chuunins (Filler)",
	"395": "Come??am os Exames Chuunin! (Filler)",
	"396": "As Tr??s Perguntas! (Filler)",
	"397": "Algu??m digno de ser l??der! (Filler)",
	"398": "A Noite Antes do Segundo Exame! (Filler)",
	"399": "Sobreviv??ncia no Deserto Infernal! (Filler)",
	"400": "Como Um Usu??rio de Taijutsu... (Filler)",
	"401": "Aqueles Que Chegam Ao Limite! (Filler)",
	"402": "Fuga e Persegui????o! (Filler)",
	"403": "For??a de Vontade Inabal??vel! (Filler)",
	"404": "Os Problemas da Tenten! (Filler)",
	"405": "A Dupla Aprisionada! (Filler)",

	"406": "O Lugar Ao Qual Perten??o! (Filler)",
	"407": "O Ninjutsu Secreto do Cl?? Yamanaka! (Filler)",
	"408": "A Boneca Amaldi??oada! (Filler)",
	"409": "As Costas Daqueles Dois! (Filler)",
	"410": "O Come??o da Conspira????o! (Filler)",
	"411": "A Almejada Bijuu! (Filler)",
	"412": "A Decis??o de Neji! (Filler)",
	"413": "Sentimentos Confiados Ao Futuro! (Filler)",
	"414": "?? Beira da Morte!",
	"415": "Os Dois Mangekyous",
	"416": "A Forma????o do Time Minato (Filler)",
	"417": "Voc?? Ser?? Meu Reserva (Semi-Filler)",
	"418": "A Besta Verde vs Rikudou Madara",
	"419": "A Primavera da Juventude do Papai",
	"420": "A Forma????o do Hachimon Tonkou!",
	"421": "Rikudou Sennin!",
	"422": "Aqueles Que Herdar??o (Omake)",
	"423": "O Rival de Naruto (Omake)",
	"424": "Ascen????o",
	"425": "Sonho Infinito",
	"426": "Mugen Tsukuomi! (Semi-Filler)",
	"427": "O Mundo dos Sonhos! (Filler)",
	"428": "O Lugar da Tenten! (Filler)",
	"429": "Killer Bee Rappuuden - Parte 1! (Filler)",
	"430": "Killer Bee Rappuuden - Parte 2! (Filler)",
	"431": "Para Ver Aquele Sorriso Mais Uma Vez! (Filler)",

	"432": "O Ninja Perdedor! (Filler)",
	"433": "A Miss??o de Busca! (Filler)",
	"434": "Time Jiraiya! (Filler)",
	"435": "Prioridades! (Filler)",
	"436": "O Homem Mascarado! (Filler)",
	"437": "O Poder Selado! (Filler)",
	"438": "Regras ou Companheiros (Filler)",
	"439": "O Garoto da Profecia (Filler)",
	"440": "P??ssaros Engaiolados (Filler)",
	"441": "Retorno ao Lar (Filler)",
	"442": "Caminho M??tuo! (Filler)",
	"443": "Diferen??a de Poder (Filler)",
	"444": "Renegado (Filler)",
	"445": "Perseguidores (Filler)",
	"446": "Colis??o (Filler)",
	"447": "A Outra Lua (Filler)",
	"448": "Companheiro (Filler)",
	"449": "A A????o Conjunta dos Shinobis (Filler)",
	"450": "Rival (Filler)",
	"451": "Vida Que Nasce, Vida Que Morre (Semi-Filler)",
	"452": "G??nio (Novel)",
	"453": "Dor de Viver (Novel)",
	"454": "O Pedido de Shisui (Novel)",
	"455": "Noite de Luar (Novel)",
	"456": "A Escurid??o da Akatsuki (Novel)",
	"457": "Parceiro! (Novel)",
	"458": "Verdade (Semi-Filler)",

	"459": "O Come??o de Tudo",
	"460": "Ootsutsuki Kaguya",
	"461": "Hagoromo e Hamura",
	"462": "O Passado Produzido",
	"463": "Ninja Imprevis??vel N??mero 1!",
	"464": "Ninshuu",
	"465": "Ashura e Indra",
	"466": "A Tumultuosa Jornada",
	"467": "A Decis??o do Ashura",
	"468": "O Sucessor",
	"469": "Uma Miss??o Especial (Omake)",
	"470": "Mentes Conectadas",
	"471": "Aqueles Dois... Sempre",
	"472": "Custe o Que Custar, Voc??...",
	"473": "Sharingan, Mais Uma Vez",
	"474": "Congratula????es",
	"475": "O Vale do Fim",
	"476": "A Batalha Final",
	"477": "Naruto e Sasuke",
	"478": "O Selo da Uni??o",
	"479": "Uzumaki Naruto!!",

	"480": "Naruto???Hinata (Filler)",
	"481": "Sasuke???Sakura (Filler)",
	"482": "Gaara???Shikamaru (Filler)",
	"483": "Jiraiya???Kakashi (Filler)",
	"484": "Sasuke Shinden: Humanos Explosivos (Novel)",
	"485": "Sasuke Shinden: Coliseu (Novel)",
	"486": "Sasuke Shinden: Fuushin (Novel)",
	"487": "Sasuke Shinden: Ketsuryuugan (Novel)",
	"488": "Sasuke Shinden: A ??ltima Pessoa (Novel)",
	"489": "Shikamaru Hiden: A Situa????o (Novel)",
	"490": "Shikamaru Hiden: Nuvens Negras (Novel)",
	"491": "Shikamaru Hiden: ??s Cegas (Novel)",
	"492": "Shikamaru Hiden: Nuvem de Suspei????o (Novel)",
	"493": "Shikamaru Hiden: Alvorecer (Novel)",
	"494": "Konoha Hiden: O Casamento do Naruto (Novel)",
	"495": "Konoha Hiden: Um Presente de Casamento Todo Poderoso (Novel)",
	"496": "Konoha Hiden: Vapor e P??lulas de Comida (Novel)",
	"497": "Konoha Hiden: O Presente do Kazekage (Novel)",
	"498": "Konoha Hiden: A ??ltima Miss??o (Novel)",
	"499": "Konoha Hiden: Os Resultados da Miss??o Secreta (Novel)",
	"500": "Konoha Hiden: As Mensagens de Felicita????o (Novel)",
}
