/* globals Chart:false, feather:false */

(function () {
    'use strict'
  
    feather.replace()
  
    // Graphs
    

    var ctx = document.getElementById("histogram").getContext('2d');
    var dataValues = [12, 19, 3, 5];
    var dataLabels = [0, 1, 2, 3, 4];
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dataLabels,
        datasets: [{
          label: 'SSS',
          data: dataValues,
          backgroundColor: 'rgb(13, 110, 253)',
        }]
      },
      options: {
        title: {
          display: false,
          position: 'top',
          fontsize: 20,
          fontcolor: 'rgb(13, 110, 253)',
          padding: 50,
          text: 'Round SSS Trends'
        },
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 1.3,
            ticks: {
                max: 3,
            }
        }, {
            display: true,
            ticks: {
                autoSkip: false,
                max: 4,
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        },
        legend: {
          display: false
        },
        layout: {
          padding: {
              left: 30,
              right: 30,
              top: 60,
              bottom: 50
        }
      }
      }
    })
})()
  