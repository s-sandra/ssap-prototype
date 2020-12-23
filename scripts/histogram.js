(function () {
    'use strict'
    
    var histId = document.getElementById("histogram").getContext('2d');
    var histValues = [801, 437, 412, 300, 70, 27, 100, 10, 24, 34, 15,
                      17, 23, 80, 4, 7, 2, 3, 0, 2, 6, 1,
                      0, 7, 0, 2, 5, 1, 1, 0, 2, 0, 1];
    var histLabels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                      11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
                      21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    var histogram = new Chart(histId, {
      type: 'bar',
      data: {
        labels: histLabels,
        datasets: [{
          label: 'Total Projects',
          data: histValues,
          backgroundColor: 'rgb(13, 110, 253)',
        }]
      },
      options: {
        scales: {
          xAxes: [{
            display: false,
            barPercentage: 1.29,
            ticks: {
                beginAtZero: true,
                max: 29, // the max number of bars
            }
          },{
            display: true,
            ticks: {
                autoSkip: false,
                max: 30,
            },
            gridLines: {
              display:false
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
              top: 30,
              bottom: 30
          }
        }
      }
    })
})()

