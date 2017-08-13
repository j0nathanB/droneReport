const dummyData = 
  [
    {
      "_id": "55c79e711cbee48856a30886",
      "number": 1,
      "country": "Yemen",
      "date": "2002-11-03T00:00:00.000Z",
      "narrative": "In the first known US targeted assassination using a drone, a CIA Predator struck a car, killing 6 people.",
      "town": "",
      "location": "Marib Province",
      "deaths": "6",
      "deaths_min": "6",
      "deaths_max": "6",
      "civilians": "0",
      "injuries": "",
      "children": "",
      "tweet_id": "278544689483890688",
      "bureau_id": "YEM001",
      "bij_summary_short": "In the first known US targeted assassination using a drone, a CIA Predator struck a car killing six al Qaeda suspects.",
      "bij_link": "http://www.thebureauinvestigates.com/2012/03/29/yemen-reported-us-covert-actions-since-2001/",
      "target": "",
      "lat": "15.47467",
      "lon": "45.322755",
      "articles": [],
      "names": [
        "Qa'id Salim Sinan al-Harithi, Abu Ahmad al-Hijazi, Salih Hussain Ali al-Nunu, Awsan Ahmad al-Tarihi, Munir Ahmad Abdallah al-Sauda, Adil Nasir al-Sauda'"
      ]
    },
    {
      "_id": "55c79e711cbee48856a30887",
      "number": 2,
      "country": "Pakistan",
      "date": "2004-06-17T00:00:00.000Z",
      "narrative": "The first known fatal US drone strike inside Pakistan killed 6-8 people, including 2 children.",
      "town": "Wana",
      "location": "South Waziristan",
      "deaths": "6-8",
      "deaths_min": "6",
      "deaths_max": "8",
      "civilians": "2",
      "injuries": "1",
      "children": "2",
      "tweet_id": "278544750867533824",
      "bureau_id": "B1",
      "bij_summary_short": "First known drone strike in Pakistan kills at least six, including infamous Taliban leader Nek Mohammad and two children. Wana, South Waziristan.",
      "bij_link": "http://www.thebureauinvestigates.com/2011/08/10/the-bush-years-2004-2009/",
      "target": "Nek Mohammed",
      "lat": "32.30512565",
      "lon": "69.57624435",
      "articles": [],
      "names": [
        "Nek Mohammad, Fakhar Zaman, Azmat Khan, Marez Khan, Shahrukh Khan, Leetak, Sher Zaman Ashrafkhel"
      ]
    },
    {
      "_id": "55c79e711cbee48856a30888",
      "number": 3,
      "country": "Pakistan",
      "date": "2005-05-08T00:00:00.000Z",
      "narrative": "2 people killed in a Predator strike which reportedly targeted Haitham al-Yemeni's mobile phone.",
      "town": "Toorikhel",
      "location": "North Waziristan",
      "deaths": "2",
      "deaths_min": "2",
      "deaths_max": "2",
      "civilians": "",
      "injuries": "",
      "children": "",
      "tweet_id": "278544812255367168",
      "bureau_id": "B2",
      "bij_summary_short": "Two killed, including Haitham al-Yemeni an al Qaeda explosives expert, near Mir Ali, North Waziristan.",
      "bij_link": "http://www.thebureauinvestigates.com/2011/08/10/the-bush-years-2004-2009/",
      "target": "Haitham al-Yemeni",
      "lat": "32.98677989",
      "lon": "70.26082993",
      "articles": [],
      "names": [
        "Haitham al-Yemeni, Samiullah Khan"
      ]
    },
    {
      "_id": "55c79e721cbee48856a30889",
      "number": 4,
      "country": "Pakistan",
      "date": "2005-11-05T00:00:00.000Z",
      "narrative": "A failed strike destroyed Abu Hamza Rabia's house and killed 8 people, including 3 young girls.",
      "town": "Mosaki",
      "location": "North Waziristan",
      "deaths": "8",
      "deaths_min": "8",
      "deaths_max": "8",
      "civilians": "3-8",
      "injuries": "1",
      "children": "3",
      "tweet_id": "278544854483628032",
      "bureau_id": "B3",
      "bij_summary_short": "Failed strike against Abu Hamza Rabia (\"al Qaeda's Number 3\") kills eight including three children.",
      "bij_link": "http://www.thebureauinvestigates.com/2011/08/10/the-bush-years-2004-2009/",
      "target": "Abu Hamza Rabia",
      "lat": "32.99988191",
      "lon": "70.34082413",
      "articles": [],
      "names": [
        ""
      ]
    },
    {
      "_id": "55c79e721cbee48856a3088a",
      "number": 5,
      "country": "Pakistan",
      "date": "2005-12-01T00:00:00.000Z",
      "narrative": "5 people were killed, including 2 children, when drones fired on a house 'for about 8 minutes.'",
      "town": "Haisori",
      "location": "North Waziristan",
      "deaths": "5",
      "deaths_min": "5",
      "deaths_max": "5",
      "civilians": "2",
      "injuries": "",
      "children": "2",
      "tweet_id": "278544895789133825",
      "bureau_id": "B4",
      "bij_summary_short": "Syrian Abu Hamza Rabia, the senior al Qaeda operative targeted in B3, was killed with two other foreign militants and two boys, aged eight and 17.",
      "bij_link": "http://www.thebureauinvestigates.com/2011/08/10/the-bush-years-2004-2009/",
      "target": "Abu Hamza Rabia",
      "lat": "33.00866349",
      "lon": "70.04196167",
      "articles": [],
      "names": [
        "Abu Hamza Rabia, Suleiman al-Moghrabi, Amer Azizi, Noor Aziz, Abdul Wasit"
      ]
    }
  ]

  /*
  var convertGeoJson = array => {
    let featureCollection = { 
      "type": "FeatureCollection",
      "features": []
    }
    
    let results = array.map(
      strike => {
        featureCollection.features.push(
          { "type": "Feature",
          "geometry": {
            "type": "Point",
            "coordinates": [Number(strike.lon), Number(strike.lat)]
            },
            "properties": {
              "deaths": Number(strike.deaths_max)
            }
          }
        )
      }
    )

    return featureCollection;
  }

  console.log(JSON.stringify(convertGeoJson(dummyData)))
  
   let obj = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Point","coordinates":[45.322755,15.47467]},"properties":{"deaths":6}},{"type":"Feature","geometry":{"type":"Point","coordinates":[69.57624435,32.30512565]},"properties":{"deaths":8}},{"type":"Feature","geometry":{"type":"Point","coordinates":[70.26082993,32.98677989]},"properties":{"deaths":2}},{"type":"Feature","geometry":{"type":"Point","coordinates":[70.34082413,32.99988191]},"properties":{"deaths":8}},{"type":"Feature","geometry":{"type":"Point","coordinates":[70.04196167,33.00866349]},"properties":{"deaths":5}}]}
  
  */