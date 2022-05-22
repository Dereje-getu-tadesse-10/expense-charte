import { Legend } from 'chart.js';
import '../styles/style.scss';
const Chart = require('chart.js/auto').default;
const axios = require('axios')

const ctx = document.querySelector('canvas').getContext('2d');
const url = 'data.json';

const arrDays = [
    'mon',
    'tue',
    'wed',
    'thu',
    'fri',
    'sat',
    'sun'
];
const arrAmount = [
    '17.45',
    '34.91',
    '52.36',
    '31.07',
    '23.39',
    '43.28',
    '25.48'
];



const data = {
    labels: arrDays,
    datasets: [{
      data: arrAmount,
      borderRadius:[5],
      backgroundColor: [
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(186, 34%, 60%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)',
            'hsl(10, 79%, 65%)'
      ]
    }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        plugins:{
            legend:{
                display:false
            },
            title:{
                display:false
            },
            datalabels: {
                display: false
            }
        },
        yAxes: [{
            gridLines: {
                drawBorder: false,
            },
        }],
        scales:{
            x:{
                grid:{
                    display:false,
                    drawBorder:false,
                    drawOnChartArea: false,
                }
            },
            y:{
                beginAtZero: true,
                ticks:{
                    display:false
                },
                grid:{
                    display: false,
                    drawBorder:false,
                    drawOnChartArea: true,
                }
            }
        }
    }
  };

   const amountChart = new Chart(
    document.getElementById('myChart'),
    config
  );
