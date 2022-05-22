import '../styles/style.scss';
const Chart = require('chart.js/auto').default;
const axios = require('axios')

const ctx = document.querySelector('canvas').getContext('2d');
const url = './data.json';

const arrDays = [];
const arrAmount = [];

const getValue = async () => {
    try {
      const response = await axios.get(url);
      const res = response.data;
      res.forEach(element => {
        arrDays.push(element.day);
        arrAmount.push(element.amount);
      });
    } catch (errors) {
      console.error(errors);
    }
};
getValue();

function amountCharte() {
    new Chart(ctx, {
        type: 'bar',
        data: {
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
        },
        options: {
            plugins: {
                  datalabels: {
                    display: false
                  }
                },
                yAxes: [{
                    gridLines: {
                      drawBorder: false,
                    },
                  }],
            scales: {
                x: {
                  grid: {
                    display: false,
                    drawBorder:false,
                    drawOnChartArea: false,
                  }
                },
                y: {
                    beginAtZero: true,
                    ticks:{
                        display:false
                    },
                  grid: {
                    display: false,
                    drawBorder:false,
                    drawOnChartArea: true,
                  },
              }
            }
        }
    })
}
amountCharte();