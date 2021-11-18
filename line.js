// line charts js config
const ctx = document.getElementById('linechart1').getContext('2d');
ctx.canvas.height = 125;

// the first chart data
const data= {
    labels:['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM'],
    datasets: [
        {
            label: 'Jolimont Station',
            data: [355.92,651.39,698.72,632.44,528.46],
            fill: false,
            borderColor: '#16a085',
            tension: 0.1
        },
        {
            label: 'North Melbourne Station',
            data: [392.67,672.95,762.24,657.04,452.29],
            fill: false,
            borderColor: '#e74c3c',
            tension: 0.1
        },
        {
            label: 'Richmond Station',
            data: [340.95,586.73,706.17,662.37,464.93],
            fill: false,
            borderColor: '#9b59b6',
            tension: 0.1
        }
    ]
}

Chart.defaults.color = '#fff';
var linechart = new Chart(ctx, {
    type: 'line',
    data: data,
    options:{
        plugins:{
            title: {
                display: true,
                text: 'Average train load of Morning Peak Hours',
                font:{family:"Montserrat"}
            },
            legend:{
                labels:{font:{family:"Montserrat"}}
            }
        },
        maintainAspectRatio: false
    }
});

var ctx2 = document.getElementById('linechart2').getContext('2d');
ctx2.canvas.height = 125;

// the second chart data
const data2= {
    labels:['3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM','6:00 PM','6:30 PM'],
    datasets: [
        {
            label: 'Jolimont Station',
            data: [430.15,449.79,541.33,716.36,733.79,608.38,552.92],
            fill: false,
            borderColor: '#16a085',
            tension: 0.1
        },
        {
            label: 'North Melbourne Station',
            data: [409.23,542.92,538.13,639.26,666.41,469.81,367.65],
            fill: false,
            borderColor: '#e74c3c',
            tension: 0.1
        },
        {
            label: 'Richmond Station',
            data: [316.62,354.62,441.11,590.64,603.61,606.05,427.47],
            fill: false,
            borderColor: '#9b59b6',
            tension: 0.1
        }
    ]
}

var linechart2 = new Chart(ctx2, {
    type: 'line',
    data: data2,
    options:{
        plugins:{
            title: {
                display: true,
                text: 'Average train load of Afternoon Peak Hours',
                font:{family:"Montserrat"}
            },
            legend:{
                labels:{font:{family:"Montserrat"}}
            }
        },
        
        maintainAspectRatio: false
    }
});