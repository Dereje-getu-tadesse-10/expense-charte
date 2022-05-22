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

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: arrDays, 
        datasets: [{
            data: arrAmount, //Y-axis data
            backgroundColor: 'hsl(10, 79%, 65%)',
            borderColor: 'white',
            // fill: false, //Fills the curve under the line with the babckground color. It's true by default
        }]
    },



    options: {
        // del ligne en background
        scales: {
            x: {
              grid: {
                display: false
              }
            },
            y: {
              grid: {
                display: false
              }
            }
          }
    }



});
