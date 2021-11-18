// stations entires data source
let table = 
[{
    "station name": "Flinders Street",
    "weekday": 92632,
    "Saturday": 41420,
    "Sunday": 34950
},
{
    "station name": "Southern Cross",
    "weekday": 56976,
    "Saturday": 24600,
    "Sunday": 20439
},
{
    "station name": "Melbourne Central",
    "weekday": 50710,
    "Saturday": 22681,
    "Sunday": 17017
},
{
    "station name": "Parliament",
    "weekday": 40463,
    "Saturday": 7233,
    "Sunday": 5740
},
{
    "station name": "Footscray",
    "weekday": 14838,
    "Saturday": 7921,
    "Sunday": 5965
},
{
    "station name": "Caulfield",
    "weekday": 13002,
    "Saturday": 8232,
    "Sunday": 5456
},
{
    "station name": "Flagstaff",
    "weekday": 20602,
    "Saturday": 4,
    "Sunday": 0
},
{
    "station name": "Box Hill",
    "weekday": 9439,
    "Saturday": 4872,
    "Sunday": 3696
},
{
    "station name": "Frankston",
    "weekday": 8011,
    "Saturday": 5611,
    "Sunday": 4152
},
{
    "station name": "Dandenong",
    "weekday": 9232,
    "Saturday": 5176,
    "Sunday": 2995
},
{
    "station name": "South Yarra",
    "weekday": 8344,
    "Saturday": 4340,
    "Sunday": 2937
},
{
    "station name": "Camberwell",
    "weekday": 6571,
    "Saturday": 4866,
    "Sunday": 4154
},
{
    "station name": "Richmond",
    "weekday": 6414,
    "Saturday": 5009,
    "Sunday": 3504
},
{
    "station name": "Glenferrie",
    "weekday": 8677,
    "Saturday": 3193,
    "Sunday": 2290
},
{
    "station name": "Sunshine",
    "weekday": 7031,
    "Saturday": 3380,
    "Sunday": 2554
},
{
    "station name": "Glen Waverley",
    "weekday": 6192,
    "Saturday": 3296,
    "Sunday": 2703
},
{
    "station name": "Oakleigh",
    "weekday": 5541,
    "Saturday": 3856,
    "Sunday": 2683
},
{
    "station name": "Clayton",
    "weekday": 5358,
    "Saturday": 3211,
    "Sunday": 2550
},
{
    "station name": "Essendon",
    "weekday": 6056,
    "Saturday": 2295,
    "Sunday": 1470
},
{
    "station name": "St Albans",
    "weekday": 5992,
    "Saturday": 1806,
    "Sunday": 1427
}
];

// bar chart js config
const barctx = document.getElementById('barchart').getContext('2d');
Chart.defaults.color = '#fff';
let barchart = new Chart(barctx, {
  type: 'bar',
  data: {
      datasets: [{
      label: "Weekday",
      data: table,
      parsing: {
          xAxisKey: 'station name',
          yAxisKey: 'weekday'
      },
      backgroundColor: '#748fb3'
      }, {
      label: "Saturday",
      data: table,
      parsing: {
          xAxisKey: 'station name',
          yAxisKey: 'Saturday'
      },
      backgroundColor: '#8856a7'
      },{
      label: "Sunday",
      data: table,
      parsing: {
          xAxisKey: 'station name',
          yAxisKey: 'Sunday'
      },
      backgroundColor: '#f56f42'
      }]
  },
  options: {
      scales: {
        x: {
            stacked: true,
            grid: {
            display: false
            },
        },
        y: {
            stacked: true,
        }
      },
      plugins:{
        title: {
            display: true,
            text: 'Top 20 busiest stations',
            font:{family:"Montserrat"}
            },
            legend:{
                labels:{font:{family:"Montserrat"}}
            }
      },
      responsive: true,
      maintainAspectRatio: false
  }
});