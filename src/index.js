import { Legend } from 'chart.js';
// import scss file pour compilation avec webpack
import '../styles/style.scss';
// import de chart js
const Chart = require('chart.js/auto').default;

// les datas
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


// data pour le graphe
const data = {
    labels: arrDays,
    datasets: [{
      data: arrAmount,
    //   style pour le graphique
      borderRadius:[5],
      borderSkipped: false,
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
 // petite config pour ne pas afficher les ligne de base
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
        // remove des lignes de bases sur l'axe x & y
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
// affichage dans le canvas html
const amountChart = new Chart(
    document.getElementById('amountChart'),
    config
);
// fin ✌️ 
