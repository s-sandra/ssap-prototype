(function () {
    'use strict'
  
    var percId = document.getElementById("percentile").getContext('2d');
    var percValues = [0.149, 0.283, 0.737, 2.301, 7.347, 25.141, 44.623];
    var percLabels = [5, 10, 25, 50, 75, 90, 95]
    var percentiles = new Chart(percId, {
      type: 'line',
      data: {
        labels: percLabels,
        datasets: [{
          label: 'SSS',
          data: percValues,
          borderColor: 'rgb(13, 110, 253)',
          backgroundColor: 'rgba(13, 109, 253, 0.293)'
        }]
      },
      options: {
        scales: {
          xAxes: [{
            gridLines: {
              display:false
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
})();