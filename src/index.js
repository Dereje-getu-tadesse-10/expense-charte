import '../styles/style.scss';
const Chart = require('chart.js/auto').default;
const axios = require('axios')

// const ctx = document.getElementsById('canvas').getContext('2d');
const ctx = document.querySelector('canvas').getContext('2d');
const url = './data.json';

const arrDays = [];
const arrAmount = [];

const getValue = async () => {
    try {
      const response = await axios.get(url);

      const res = response.data;

    //   console.log(res[0].day);
      res.forEach(element => {
        // console.log(element.day);

        arrDays.push(element.day);
        arrAmount.push(element.amount);
      });

    } catch (errors) {
      console.error(errors);
    }
};

getValue()