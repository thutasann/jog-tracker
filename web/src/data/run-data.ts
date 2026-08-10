export type StravaActivity = {
  date: string;
  id: string;
  url: string;
};

export const exerciseDates = [
  "2025-03-03",
  "2025-09-20",
  "2025-09-21",
  "2025-09-22",
  "2025-09-23",
  "2025-09-24",
  "2025-09-25",
  "2025-09-27",
  "2025-09-28",
  "2025-09-29",
  "2025-09-30",
  "2025-10-01",
  "2025-10-02",
  "2025-10-03",
  "2025-10-04",
  "2025-10-05",
  "2025-10-06",
  "2025-10-07",
  "2025-10-08",
  "2025-10-10",
  "2025-10-11",
  "2025-10-12",
  "2025-10-13",
  "2025-10-15",
  "2025-10-16",
  "2025-10-18",
  "2025-10-19",
  "2025-10-20",
  "2025-10-22",
  "2025-10-23",
  "2025-10-24",
  "2025-10-26",
  "2025-10-28",
  "2025-10-29",
  "2025-10-30",
  "2025-11-01",
  "2025-11-03",
  "2025-11-04",
  "2025-11-05",
  "2025-11-06",
  "2025-11-08",
  "2025-11-09",
  "2025-11-11",
  "2025-11-13",
  "2025-11-15",
  "2025-11-17",
  "2025-11-19",
  "2025-11-20",
  "2025-11-22",
  "2025-11-24",
  "2025-11-26",
  "2025-11-30",
  "2025-12-01",
  "2025-12-03",
  "2025-12-06",
  "2025-12-11",
  "2025-12-14",
  "2025-12-16",
  "2025-12-18",
  "2025-12-20",
  "2025-12-21",
  "2025-12-28",
  "2025-12-30",
  "2026-01-03",
  "2026-01-05",
  "2026-01-07",
  "2026-01-10",
  "2026-01-12",
  "2026-01-14",
  "2026-01-19",
  "2026-01-21",
  "2026-01-22",
  "2026-01-24",
  "2026-02-02",
  "2026-02-04",
  "2026-02-05",
  "2026-02-08",
  "2026-02-10",
  "2026-02-11",
  "2026-02-13",
  "2026-02-14",
  "2026-02-18",
  "2026-02-19",
  "2026-02-21",
  "2026-02-22",
  "2026-02-24",
  "2026-02-25",
  "2026-02-26",
  "2026-02-27",
  "2026-02-28",
  "2026-03-02",
  "2026-03-05",
  "2026-03-07",
  "2026-03-08",
  "2026-03-09",
  "2026-03-10",
  "2026-03-11",
  "2026-03-12",
  "2026-03-13",
  "2026-03-14",
  "2026-03-15",
  "2026-03-16",
  "2026-03-17",
  "2026-03-18",
  "2026-03-20",
  "2026-03-21",
  "2026-03-22",
  "2026-03-23",
  "2026-03-24",
  "2026-03-26",
  "2026-03-27",
  "2026-03-28",
  "2026-03-29",
  "2026-03-30",
  "2026-03-31",
  "2026-04-01",
  "2026-04-03",
  "2026-04-04",
  "2026-04-05",
  "2026-04-06",
  "2026-04-07",
  "2026-04-08",
  "2026-04-09",
  "2026-04-10",
  "2026-04-12",
  "2026-04-13",
  "2026-04-14",
  "2026-04-15",
  "2026-04-16",
  "2026-04-18",
  "2026-04-19",
  "2026-04-20",
  "2026-04-21",
  "2026-04-23",
  "2026-04-24",
  "2026-04-25",
  "2026-04-26",
  "2026-04-27",
  "2026-04-28",
  "2026-04-29",
  "2026-04-30",
  "2026-05-01",
  "2026-05-02",
  "2026-05-03",
  "2026-05-04",
  "2026-05-05",
  "2026-05-07",
  "2026-05-09",
  "2026-05-10",
  "2026-05-11",
  "2026-05-12",
  "2026-05-13",
  "2026-05-14",
  "2026-05-15",
  "2026-05-16",
  "2026-05-17",
  "2026-05-18",
  "2026-05-21",
  "2026-05-22",
  "2026-05-23",
  "2026-05-24",
  "2026-05-25",
  "2026-05-26",
  "2026-05-28",
  "2026-05-30",
  "2026-05-31",
  "2026-06-01",
  "2026-06-03",
  "2026-06-04",
  "2026-06-06",
  "2026-06-07",
  "2026-06-08",
  "2026-06-10",
  "2026-06-11",
  "2026-06-12",
  "2026-06-13",
  "2026-06-14",
  "2026-06-15",
  "2026-06-16",
  "2026-06-17",
  "2026-06-18",
  "2026-06-19",
  "2026-06-20",
  "2026-06-21",
  "2026-06-22",
  "2026-06-23",
  "2026-06-25",
  "2026-06-27",
  "2026-06-28",
  "2026-06-29",
  "2026-06-30",
  "2026-07-01",
  "2026-07-02",
  "2026-07-03",
  "2026-07-04",
  "2026-07-05",
  "2026-07-06",
  "2026-07-07",
  "2026-07-08",
  "2026-07-09",
  "2026-07-11",
  "2026-07-12",
  "2026-07-13",
  "2026-07-14",
  "2026-07-15",
  "2026-07-17",
  "2026-07-18",
  "2026-07-19",
  "2026-07-20",
  "2026-07-21",
  "2026-07-22",
  "2026-07-24",
  "2026-07-25",
  "2026-07-26",
  "2026-07-27",
  "2026-07-28",
  "2026-07-29",
  "2026-07-30",
  "2026-07-31",
  "2026-08-01",
  "2026-08-02",
  "2026-08-03",
  "2026-08-04",
  "2026-08-05",
  "2026-08-06",
  "2026-08-07",
  "2026-08-08",
  "2026-08-09",
  "2026-08-10"
] as const;

export const streak = {
  "current_streak": 72,
  "total_days": 229,
  "last_updated": "2026-08-10"
} as const;

export const stravaActivities = [
  {
    "date": "2026-08-10",
    "id": "19680137230",
    "url": "https://www.strava.com/activities/19680137230"
  },
  {
    "date": "2026-08-09",
    "id": "19666908867",
    "url": "https://www.strava.com/activities/19666908867"
  },
  {
    "date": "2026-08-08",
    "id": "19653493385",
    "url": "https://www.strava.com/activities/19653493385"
  },
  {
    "date": "2026-08-07",
    "id": "19639794943",
    "url": "https://www.strava.com/activities/19639794943"
  },
  {
    "date": "2026-08-06",
    "id": "19626594490",
    "url": "https://www.strava.com/activities/19626594490"
  },
  {
    "date": "2026-08-05",
    "id": "19612025109",
    "url": "https://www.strava.com/activities/19612025109"
  },
  {
    "date": "2026-08-04",
    "id": "19597254381",
    "url": "https://www.strava.com/activities/19597254381"
  },
  {
    "date": "2026-08-03",
    "id": "19582275075",
    "url": "https://www.strava.com/activities/19582275075"
  },
  {
    "date": "2026-08-02",
    "id": "19568647409",
    "url": "https://www.strava.com/activities/19568647409"
  },
  {
    "date": "2026-08-01",
    "id": "19555147861",
    "url": "https://www.strava.com/activities/19555147861"
  },
  {
    "date": "2026-07-31",
    "id": "19542993745",
    "url": "https://www.strava.com/activities/19542993745"
  },
  {
    "date": "2026-07-30",
    "id": "19528516471",
    "url": "https://www.strava.com/activities/19528516471"
  },
  {
    "date": "2026-07-29",
    "id": "19514675958",
    "url": "https://www.strava.com/activities/19514675958"
  },
  {
    "date": "2026-07-28",
    "id": "19500137150",
    "url": "https://www.strava.com/activities/19500137150"
  },
  {
    "date": "2026-07-27",
    "id": "19484928339",
    "url": "https://www.strava.com/activities/19484928339"
  },
  {
    "date": "2026-07-26",
    "id": "19471765496",
    "url": "https://www.strava.com/activities/19471765496"
  },
  {
    "date": "2026-07-25",
    "id": "19456671507",
    "url": "https://www.strava.com/activities/19456671507"
  },
  {
    "date": "2026-07-24",
    "id": "19444640997",
    "url": "https://www.strava.com/activities/19444640997"
  },
  {
    "date": "2026-07-22",
    "id": "19417299218",
    "url": "https://www.strava.com/activities/19417299218"
  },
  {
    "date": "2026-07-21",
    "id": "19401469194",
    "url": "https://www.strava.com/activities/19401469194"
  },
  {
    "date": "2026-07-20",
    "id": "19388169986",
    "url": "https://www.strava.com/activities/19388169986"
  },
  {
    "date": "2026-07-19",
    "id": "19375283924",
    "url": "https://www.strava.com/activities/19375283924"
  },
  {
    "date": "2026-07-18",
    "id": "19362767791",
    "url": "https://www.strava.com/activities/19362767791"
  },
  {
    "date": "2026-07-17",
    "id": "19350820487",
    "url": "https://www.strava.com/activities/19350820487"
  },
  {
    "date": "2026-07-15",
    "id": "19323047159",
    "url": "https://www.strava.com/activities/19323047159"
  },
  {
    "date": "2026-07-14",
    "id": "19309006522",
    "url": "https://www.strava.com/activities/19309006522"
  },
  {
    "date": "2026-07-13",
    "id": "19294217096",
    "url": "https://www.strava.com/activities/19294217096"
  },
  {
    "date": "2026-07-12",
    "id": "19280965881",
    "url": "https://www.strava.com/activities/19280965881"
  },
  {
    "date": "2026-07-11",
    "id": "19263785242",
    "url": "https://www.strava.com/activities/19263785242"
  },
  {
    "date": "2026-07-09",
    "id": "19242446306",
    "url": "https://www.strava.com/activities/19242446306"
  },
  {
    "date": "2026-07-08",
    "id": "19227282052",
    "url": "https://www.strava.com/activities/19227282052"
  },
  {
    "date": "2026-07-07",
    "id": "19214445061",
    "url": "https://www.strava.com/activities/19214445061"
  },
  {
    "date": "2026-07-06",
    "id": "19200391500",
    "url": "https://www.strava.com/activities/19200391500"
  },
  {
    "date": "2026-07-05",
    "id": "19188266861",
    "url": "https://www.strava.com/activities/19188266861"
  },
  {
    "date": "2026-07-04",
    "id": "19175167560",
    "url": "https://www.strava.com/activities/19175167560"
  },
  {
    "date": "2026-07-03",
    "id": "19163029415",
    "url": "https://www.strava.com/activities/19163029415"
  },
  {
    "date": "2026-07-02",
    "id": "19150211433",
    "url": "https://www.strava.com/activities/19150211433"
  },
  {
    "date": "2026-07-01",
    "id": "19136935756",
    "url": "https://www.strava.com/activities/19136935756"
  },
  {
    "date": "2026-06-30",
    "id": "19123758971",
    "url": "https://www.strava.com/activities/19123758971"
  },
  {
    "date": "2026-06-29",
    "id": "19109892263",
    "url": "https://www.strava.com/activities/19109892263"
  },
  {
    "date": "2026-06-28",
    "id": "19097685336",
    "url": "https://www.strava.com/activities/19097685336"
  },
  {
    "date": "2026-06-27",
    "id": "19084788941",
    "url": "https://www.strava.com/activities/19084788941"
  },
  {
    "date": "2026-06-25",
    "id": "19061626301",
    "url": "https://www.strava.com/activities/19061626301"
  },
  {
    "date": "2026-06-23",
    "id": "19035480364",
    "url": "https://www.strava.com/activities/19035480364"
  },
  {
    "date": "2026-06-22",
    "id": "19022076053",
    "url": "https://www.strava.com/activities/19022076053"
  },
  {
    "date": "2026-06-21",
    "id": "19008844759",
    "url": "https://www.strava.com/activities/19008844759"
  },
  {
    "date": "2026-06-20",
    "id": "18995959493",
    "url": "https://www.strava.com/activities/18995959493"
  },
  {
    "date": "2026-06-19",
    "id": "18983601345",
    "url": "https://www.strava.com/activities/18983601345"
  },
  {
    "date": "2026-06-18",
    "id": "18971194995",
    "url": "https://www.strava.com/activities/18971194995"
  },
  {
    "date": "2026-06-17",
    "id": "18957636970",
    "url": "https://www.strava.com/activities/18957636970"
  },
  {
    "date": "2026-06-16",
    "id": "18943193720",
    "url": "https://www.strava.com/activities/18943193720"
  },
  {
    "date": "2026-06-15",
    "id": "18928763240",
    "url": "https://www.strava.com/activities/18928763240"
  },
  {
    "date": "2026-06-14",
    "id": "18914306463",
    "url": "https://www.strava.com/activities/18914306463"
  },
  {
    "date": "2026-06-13",
    "id": "18902903191",
    "url": "https://www.strava.com/activities/18902903191"
  },
  {
    "date": "2026-06-12",
    "id": "18889854705",
    "url": "https://www.strava.com/activities/18889854705"
  },
  {
    "date": "2026-06-11",
    "id": "18877809205",
    "url": "https://www.strava.com/activities/18877809205"
  },
  {
    "date": "2026-06-10",
    "id": "18864442377",
    "url": "https://www.strava.com/activities/18864442377"
  },
  {
    "date": "2026-06-08",
    "id": "18836438756",
    "url": "https://www.strava.com/activities/18836438756"
  },
  {
    "date": "2026-06-07",
    "id": "18822425119",
    "url": "https://www.strava.com/activities/18822425119"
  },
  {
    "date": "2026-06-06",
    "id": "18807843590",
    "url": "https://www.strava.com/activities/18807843590"
  },
  {
    "date": "2026-06-04",
    "id": "18783471145",
    "url": "https://www.strava.com/activities/18783471145"
  },
  {
    "date": "2026-06-03",
    "id": "18769802918",
    "url": "https://www.strava.com/activities/18769802918"
  },
  {
    "date": "2026-06-01",
    "id": "18741314835",
    "url": "https://www.strava.com/activities/18741314835"
  },
  {
    "date": "2026-05-31",
    "id": "18727916700",
    "url": "https://www.strava.com/activities/18727916700"
  },
  {
    "date": "2026-05-30",
    "id": "18714206499",
    "url": "https://www.strava.com/activities/18714206499"
  },
  {
    "date": "2026-05-28",
    "id": "18681341888",
    "url": "https://www.strava.com/activities/18681341888"
  },
  {
    "date": "2026-05-26",
    "id": "18660698809",
    "url": "https://www.strava.com/activities/18660698809"
  },
  {
    "date": "2026-05-25",
    "id": "18647396352",
    "url": "https://www.strava.com/activities/18647396352"
  },
  {
    "date": "2026-05-24",
    "id": "18633798969",
    "url": "https://www.strava.com/activities/18633798969"
  },
  {
    "date": "2026-05-23",
    "id": "18620826686",
    "url": "https://www.strava.com/activities/18620826686"
  },
  {
    "date": "2026-05-22",
    "id": "18607840822",
    "url": "https://www.strava.com/activities/18607840822"
  },
  {
    "date": "2026-05-21",
    "id": "18594746788",
    "url": "https://www.strava.com/activities/18594746788"
  },
  {
    "date": "2026-05-18",
    "id": "18554268099",
    "url": "https://www.strava.com/activities/18554268099"
  },
  {
    "date": "2026-05-17",
    "id": "18541393880",
    "url": "https://www.strava.com/activities/18541393880"
  },
  {
    "date": "2026-05-16",
    "id": "18528264129",
    "url": "https://www.strava.com/activities/18528264129"
  },
  {
    "date": "2026-05-15",
    "id": "18516354196",
    "url": "https://www.strava.com/activities/18516354196"
  },
  {
    "date": "2026-05-14",
    "id": "18503934856",
    "url": "https://www.strava.com/activities/18503934856"
  },
  {
    "date": "2026-05-13",
    "id": "18490390150",
    "url": "https://www.strava.com/activities/18490390150"
  },
  {
    "date": "2026-05-12",
    "id": "18476503083",
    "url": "https://www.strava.com/activities/18476503083"
  },
  {
    "date": "2026-05-11",
    "id": "18463335665",
    "url": "https://www.strava.com/activities/18463335665"
  },
  {
    "date": "2026-05-10",
    "id": "18451316938",
    "url": "https://www.strava.com/activities/18451316938"
  },
  {
    "date": "2026-05-09",
    "id": "18436970057",
    "url": "https://www.strava.com/activities/18436970057"
  },
  {
    "date": "2026-05-07",
    "id": "18411871851",
    "url": "https://www.strava.com/activities/18411871851"
  },
  {
    "date": "2026-05-05",
    "id": "18384944876",
    "url": "https://www.strava.com/activities/18384944876"
  },
  {
    "date": "2026-05-04",
    "id": "18371428526",
    "url": "https://www.strava.com/activities/18371428526"
  },
  {
    "date": "2026-05-03",
    "id": "18358306014",
    "url": "https://www.strava.com/activities/18358306014"
  },
  {
    "date": "2026-05-02",
    "id": "18345014332",
    "url": "https://www.strava.com/activities/18345014332"
  },
  {
    "date": "2026-05-01",
    "id": "18330666764",
    "url": "https://www.strava.com/activities/18330666764"
  },
  {
    "date": "2026-04-30",
    "id": "18318921598",
    "url": "https://www.strava.com/activities/18318921598"
  },
  {
    "date": "2026-04-29",
    "id": "18305774108",
    "url": "https://www.strava.com/activities/18305774108"
  },
  {
    "date": "2026-04-28",
    "id": "18291677883",
    "url": "https://www.strava.com/activities/18291677883"
  },
  {
    "date": "2026-04-27",
    "id": "18278036689",
    "url": "https://www.strava.com/activities/18278036689"
  },
  {
    "date": "2026-04-26",
    "id": "18265754458",
    "url": "https://www.strava.com/activities/18265754458"
  },
  {
    "date": "2026-04-25",
    "id": "18250642763",
    "url": "https://www.strava.com/activities/18250642763"
  },
  {
    "date": "2026-04-24",
    "id": "18238322513",
    "url": "https://www.strava.com/activities/18238322513"
  },
  {
    "date": "2026-04-23",
    "id": "18225323218",
    "url": "https://www.strava.com/activities/18225323218"
  },
  {
    "date": "2026-04-21",
    "id": "18197360260",
    "url": "https://www.strava.com/activities/18197360260"
  },
  {
    "date": "2026-04-20",
    "id": "18183651091",
    "url": "https://www.strava.com/activities/18183651091"
  },
  {
    "date": "2026-04-19",
    "id": "18171658424",
    "url": "https://www.strava.com/activities/18171658424"
  },
  {
    "date": "2026-04-18",
    "id": "18156487125",
    "url": "https://www.strava.com/activities/18156487125"
  },
  {
    "date": "2026-04-16",
    "id": "18131545778",
    "url": "https://www.strava.com/activities/18131545778"
  },
  {
    "date": "2026-04-15",
    "id": "18118040350",
    "url": "https://www.strava.com/activities/18118040350"
  },
  {
    "date": "2026-04-14",
    "id": "18104147862",
    "url": "https://www.strava.com/activities/18104147862"
  },
  {
    "date": "2026-04-13",
    "id": "18090991247",
    "url": "https://www.strava.com/activities/18090991247"
  },
  {
    "date": "2026-04-12",
    "id": "18074276434",
    "url": "https://www.strava.com/activities/18074276434"
  },
  {
    "date": "2026-04-10",
    "id": "18052588775",
    "url": "https://www.strava.com/activities/18052588775"
  },
  {
    "date": "2026-04-09",
    "id": "18040638981",
    "url": "https://www.strava.com/activities/18040638981"
  },
  {
    "date": "2026-04-08",
    "id": "18026712050",
    "url": "https://www.strava.com/activities/18026712050"
  },
  {
    "date": "2026-04-07",
    "id": "18013057696",
    "url": "https://www.strava.com/activities/18013057696"
  },
  {
    "date": "2026-04-06",
    "id": "17999579144",
    "url": "https://www.strava.com/activities/17999579144"
  },
  {
    "date": "2026-04-05",
    "id": "17986224468",
    "url": "https://www.strava.com/activities/17986224468"
  },
  {
    "date": "2026-04-04",
    "id": "17973277133",
    "url": "https://www.strava.com/activities/17973277133"
  },
  {
    "date": "2026-04-03",
    "id": "17961809706",
    "url": "https://www.strava.com/activities/17961809706"
  },
  {
    "date": "2026-04-01",
    "id": "17937332585",
    "url": "https://www.strava.com/activities/17937332585"
  },
  {
    "date": "2026-03-31",
    "id": "17924563961",
    "url": "https://www.strava.com/activities/17924563961"
  },
  {
    "date": "2026-03-30",
    "id": "17911926888",
    "url": "https://www.strava.com/activities/17911926888"
  },
  {
    "date": "2026-03-29",
    "id": "17899629398",
    "url": "https://www.strava.com/activities/17899629398"
  },
  {
    "date": "2026-03-28",
    "id": "17884026430",
    "url": "https://www.strava.com/activities/17884026430"
  },
  {
    "date": "2026-03-27",
    "id": "17877115555",
    "url": "https://www.strava.com/activities/17877115555"
  },
  {
    "date": "2026-03-26",
    "id": "17864802963",
    "url": "https://www.strava.com/activities/17864802963"
  },
  {
    "date": "2026-03-24",
    "id": "17839707169",
    "url": "https://www.strava.com/activities/17839707169"
  },
  {
    "date": "2026-03-23",
    "id": "17827185912",
    "url": "https://www.strava.com/activities/17827185912"
  },
  {
    "date": "2026-03-21",
    "id": "17801893214",
    "url": "https://www.strava.com/activities/17801893214"
  },
  {
    "date": "2026-03-22",
    "id": "17814515125",
    "url": "https://www.strava.com/activities/17814515125"
  },
  {
    "date": "2026-03-20",
    "id": "17790021023",
    "url": "https://www.strava.com/activities/17790021023"
  },
  {
    "date": "2026-03-18",
    "id": "17766296771",
    "url": "https://www.strava.com/activities/17766296771"
  },
  {
    "date": "2026-03-17",
    "id": "17753383632",
    "url": "https://www.strava.com/activities/17753383632"
  },
  {
    "date": "2026-03-16",
    "id": "17741563599",
    "url": "https://www.strava.com/activities/17741563599"
  },
  {
    "date": "2026-03-15",
    "id": "17729948604",
    "url": "https://www.strava.com/activities/17729948604"
  },
  {
    "date": "2026-03-14",
    "id": "17718445411",
    "url": "https://www.strava.com/activities/17718445411"
  },
  {
    "date": "2026-03-13",
    "id": "17706974862",
    "url": "https://www.strava.com/activities/17706974862"
  },
  {
    "date": "2026-03-12",
    "id": "17696227588",
    "url": "https://www.strava.com/activities/17696227588"
  },
  {
    "date": "2026-03-11",
    "id": "17684541486",
    "url": "https://www.strava.com/activities/17684541486"
  },
  {
    "date": "2026-03-10",
    "id": "17671709146",
    "url": "https://www.strava.com/activities/17671709146"
  },
  {
    "date": "2026-03-09",
    "id": "17659131104",
    "url": "https://www.strava.com/activities/17659131104"
  },
  {
    "date": "2026-03-08",
    "id": "17647125751",
    "url": "https://www.strava.com/activities/17647125751"
  },
  {
    "date": "2026-03-07",
    "id": "17634877458",
    "url": "https://www.strava.com/activities/17634877458"
  },
  {
    "date": "2026-03-05",
    "id": "17612678069",
    "url": "https://www.strava.com/activities/17612678069"
  },
  {
    "date": "2025-03-03",
    "id": "17587235510",
    "url": "https://www.strava.com/activities/17587235510"
  },
  {
    "date": "2026-03-02",
    "id": "17575115192",
    "url": "https://www.strava.com/activities/17575115192"
  },
  {
    "date": "2026-02-28",
    "id": "17551695579",
    "url": "https://www.strava.com/activities/17551695579"
  },
  {
    "date": "2026-02-27",
    "id": "17540262131",
    "url": "https://www.strava.com/activities/17540262131"
  },
  {
    "date": "2026-02-26",
    "id": "17529507668",
    "url": "https://www.strava.com/activities/17529507668"
  },
  {
    "date": "2026-02-25",
    "id": "17517530122",
    "url": "https://www.strava.com/activities/17517530122"
  },
  {
    "date": "2026-02-24",
    "id": "17504816462",
    "url": "https://www.strava.com/activities/17504816462"
  },
  {
    "date": "2026-02-22",
    "id": "17482526470",
    "url": "https://www.strava.com/activities/17482526470"
  },
  {
    "date": "2026-02-21",
    "id": "17470917421",
    "url": "https://www.strava.com/activities/17470917421"
  },
  {
    "date": "2026-02-19",
    "id": "17449683822",
    "url": "https://www.strava.com/activities/17449683822"
  },
  {
    "date": "2026-02-18",
    "id": "17435625780",
    "url": "https://www.strava.com/activities/17435625780"
  },
  {
    "date": "2026-02-14",
    "id": "17392829116",
    "url": "https://www.strava.com/activities/17392829116"
  },
  {
    "date": "2026-02-13",
    "id": "17383627433",
    "url": "https://www.strava.com/activities/17383627433"
  },
  {
    "date": "2026-02-11",
    "id": "17361856352",
    "url": "https://www.strava.com/activities/17361856352"
  },
  {
    "date": "2026-02-10",
    "id": "17350117485",
    "url": "https://www.strava.com/activities/17350117485"
  },
  {
    "date": "2026-02-08",
    "id": "17326539288",
    "url": "https://www.strava.com/activities/17326539288"
  },
  {
    "date": "2026-02-05",
    "id": "17294710953",
    "url": "https://www.strava.com/activities/17294710953"
  },
  {
    "date": "2026-02-04",
    "id": "17283355004",
    "url": "https://www.strava.com/activities/17283355004"
  },
  {
    "date": "2026-02-02",
    "id": "17259909268",
    "url": "https://www.strava.com/activities/17259909268"
  },
  {
    "date": "2026-01-24",
    "id": "17159419638",
    "url": "https://www.strava.com/activities/17159419638"
  },
  {
    "date": "2026-01-22",
    "id": "17138247299",
    "url": "https://www.strava.com/activities/17138247299"
  },
  {
    "date": "2026-01-21",
    "id": "17126916848",
    "url": "https://www.strava.com/activities/17126916848"
  },
  {
    "date": "2026-01-19",
    "id": "17102926420",
    "url": "https://www.strava.com/activities/17102926420"
  },
  {
    "date": "2026-01-14",
    "id": "17046271834",
    "url": "https://www.strava.com/activities/17046271834"
  },
  {
    "date": "2026-01-12",
    "id": "17022219780",
    "url": "https://www.strava.com/activities/17022219780"
  },
  {
    "date": "2026-01-10",
    "id": "16999741088",
    "url": "https://www.strava.com/activities/16999741088"
  },
  {
    "date": "2026-01-07",
    "id": "16967203186",
    "url": "https://www.strava.com/activities/16967203186"
  },
  {
    "date": "2026-01-05",
    "id": "16944408321",
    "url": "https://www.strava.com/activities/16944408321"
  },
  {
    "date": "2026-01-03",
    "id": "16922725231",
    "url": "https://www.strava.com/activities/16922725231"
  },
  {
    "date": "2025-12-30",
    "id": "16883463869",
    "url": "https://www.strava.com/activities/16883463869"
  },
  {
    "date": "2025-12-28",
    "id": "16863664724",
    "url": "https://www.strava.com/activities/16863664724"
  },
  {
    "date": "2025-12-21",
    "id": "16802385998",
    "url": "https://www.strava.com/activities/16802385998"
  },
  {
    "date": "2025-12-20",
    "id": "16792850309",
    "url": "https://www.strava.com/activities/16792850309"
  },
  {
    "date": "2025-12-18",
    "id": "16775969440",
    "url": "https://www.strava.com/activities/16775969440"
  },
  {
    "date": "2025-12-16",
    "id": "16757300650",
    "url": "https://www.strava.com/activities/16757300650"
  },
  {
    "date": "2025-12-14",
    "id": "16740053063",
    "url": "https://www.strava.com/activities/16740053063"
  },
  {
    "date": "2025-12-11",
    "id": "16712913437",
    "url": "https://www.strava.com/activities/16712913437"
  },
  {
    "date": "2025-12-06",
    "id": "16665209164",
    "url": "https://www.strava.com/activities/16665209164"
  },
  {
    "date": "2025-12-03",
    "id": "16638477344",
    "url": "https://www.strava.com/activities/16638477344"
  },
  {
    "date": "2025-12-01",
    "id": "16618627070",
    "url": "https://www.strava.com/activities/16618627070"
  },
  {
    "date": "2025-11-30",
    "id": "16609365960",
    "url": "https://www.strava.com/activities/16609365960"
  },
  {
    "date": "2025-11-26",
    "id": "16571710560",
    "url": "https://www.strava.com/activities/16571710560"
  },
  {
    "date": "2025-11-24",
    "id": "16551925367",
    "url": "https://www.strava.com/activities/16551925367"
  },
  {
    "date": "2025-11-22",
    "id": "16533282518",
    "url": "https://www.strava.com/activities/16533282518"
  },
  {
    "date": "2025-11-20",
    "id": "16514224221",
    "url": "https://www.strava.com/activities/16514224221"
  },
  {
    "date": "2025-11-19",
    "id": "16505194816",
    "url": "https://www.strava.com/activities/16505194816"
  },
  {
    "date": "2025-11-17",
    "id": "16484447283",
    "url": "https://www.strava.com/activities/16484447283"
  },
  {
    "date": "2025-11-15",
    "id": "16464812119",
    "url": "https://www.strava.com/activities/16464812119"
  },
  {
    "date": "2025-11-13",
    "id": "16445979103",
    "url": "https://www.strava.com/activities/16445979103"
  },
  {
    "date": "2025-11-11",
    "id": "16424790516",
    "url": "https://www.strava.com/activities/16424790516"
  },
  {
    "date": "2025-11-09",
    "id": "16404192552",
    "url": "https://www.strava.com/activities/16404192552"
  },
  {
    "date": "2025-11-08",
    "id": "16392931754",
    "url": "https://www.strava.com/activities/16392931754"
  },
  {
    "date": "2025-11-06",
    "id": "16373462637",
    "url": "https://www.strava.com/activities/16373462637"
  },
  {
    "date": "2025-11-05",
    "id": "16362071530",
    "url": "https://www.strava.com/activities/16362071530"
  },
  {
    "date": "2025-11-04",
    "id": "16351522581",
    "url": "https://www.strava.com/activities/16351522581"
  },
  {
    "date": "2025-11-03",
    "id": "16341311912",
    "url": "https://www.strava.com/activities/16341311912"
  },
  {
    "date": "2025-11-01",
    "id": "16320572555",
    "url": "https://www.strava.com/activities/16320572555"
  },
  {
    "date": "2025-10-30",
    "id": "16301581681",
    "url": "https://www.strava.com/activities/16301581681"
  },
  {
    "date": "2025-10-29",
    "id": "16292224140",
    "url": "https://www.strava.com/activities/16292224140"
  },
  {
    "date": "2025-10-28",
    "id": "16281434498",
    "url": "https://www.strava.com/activities/16281434498"
  },
  {
    "date": "2025-10-26",
    "id": "16261790408",
    "url": "https://www.strava.com/activities/16261790408"
  },
  {
    "date": "2025-10-24",
    "id": "16241703174",
    "url": "https://www.strava.com/activities/16241703174"
  },
  {
    "date": "2025-10-23",
    "id": "16231769966",
    "url": "https://www.strava.com/activities/16231769966"
  },
  {
    "date": "2025-10-22",
    "id": "16221551020",
    "url": "https://www.strava.com/activities/16221551020"
  },
  {
    "date": "2025-10-20",
    "id": "16199882621",
    "url": "https://www.strava.com/activities/16199882621"
  },
  {
    "date": "2025-10-19",
    "id": "16191571560",
    "url": "https://www.strava.com/activities/16191571560"
  },
  {
    "date": "2025-10-18",
    "id": "16180881025",
    "url": "https://www.strava.com/activities/16180881025"
  },
  {
    "date": "2025-10-16",
    "id": "16158713300",
    "url": "https://www.strava.com/activities/16158713300"
  },
  {
    "date": "2025-10-15",
    "id": "16149367079",
    "url": "https://www.strava.com/activities/16149367079"
  },
  {
    "date": "2025-10-13",
    "id": "16126371159",
    "url": "https://www.strava.com/activities/16126371159"
  },
  {
    "date": "2025-10-12",
    "id": "16116455437",
    "url": "https://www.strava.com/activities/16116455437"
  },
  {
    "date": "2025-10-11",
    "id": "16105253151",
    "url": "https://www.strava.com/activities/16105253151"
  },
  {
    "date": "2025-10-10",
    "id": "16095514777",
    "url": "https://www.strava.com/activities/16095514777"
  },
  {
    "date": "2025-10-08",
    "id": "16075097350",
    "url": "https://www.strava.com/activities/16075097350"
  },
  {
    "date": "2025-10-07",
    "id": "16062685128",
    "url": "https://www.strava.com/activities/16062685128"
  },
  {
    "date": "2025-10-06",
    "id": "16052060981",
    "url": "https://www.strava.com/activities/16052060981"
  },
  {
    "date": "2025-10-05",
    "id": "16037753011",
    "url": "https://www.strava.com/activities/16037753011"
  },
  {
    "date": "2025-10-04",
    "id": "16026439608",
    "url": "https://www.strava.com/activities/16026439608"
  },
  {
    "date": "2025-10-03",
    "id": "16019730486",
    "url": "https://www.strava.com/activities/16019730486"
  },
  {
    "date": "2025-10-02",
    "id": "16008750079",
    "url": "https://www.strava.com/activities/16008750079"
  },
  {
    "date": "2025-10-01",
    "id": "15998059201",
    "url": "https://www.strava.com/activities/15998059201"
  },
  {
    "date": "2025-09-30",
    "id": "15986087004",
    "url": "https://www.strava.com/activities/15986087004"
  },
  {
    "date": "2025-09-29",
    "id": "15974941394",
    "url": "https://www.strava.com/activities/15974941394"
  },
  {
    "date": "2025-09-28",
    "id": "15960054696",
    "url": "https://www.strava.com/activities/15960054696"
  },
  {
    "date": "2025-09-27",
    "id": "15948755698",
    "url": "https://www.strava.com/activities/15948755698"
  },
  {
    "date": "2025-09-25",
    "id": "15931740222",
    "url": "https://www.strava.com/activities/15931740222"
  },
  {
    "date": "2025-09-24",
    "id": "15921041760",
    "url": "https://www.strava.com/activities/15921041760"
  },
  {
    "date": "2025-09-23",
    "id": "15908913505",
    "url": "https://www.strava.com/activities/15908913505"
  },
  {
    "date": "2025-09-22",
    "id": "15897596994",
    "url": "https://www.strava.com/activities/15897596994"
  },
  {
    "date": "2025-09-21",
    "id": "15887544821",
    "url": "https://www.strava.com/activities/15887544821"
  },
  {
    "date": "2025-09-20",
    "id": "15875620162",
    "url": "https://www.strava.com/activities/15875620162"
  }
] as const satisfies readonly StravaActivity[];
