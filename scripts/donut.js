(function () {   
    const data = {
        labels: [
        'Fredericksburg',
        'Lee Hill',
        'Chancellor',
        'Salem'
        ],
        datasets: [{
            label: "Visitor",
            data: [65600, 15600, 115600, 15403],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(155, 205, 86)'
            ],
        }]
    };

    var chartId = document.getElementById("donut").getContext('2d');
    var chart = new Chart(chartId, {
        type: 'doughnut',
        data: data,
        options: {
            legend: false,
            responsive: true,
            aspectRatio: 1,  /* Remove space around donut */
            cutoutPercentage: 70,
            legendCallback: function(chart) {
                var legendHtml = [];
                var item = chart.data.datasets[0];
                item.data.sort((num1, num2) => num2 - num1);;

                legendHtml.push('<div class="grid">');
                for (var i=0; i < item.data.length; i++) {
                    legendHtml.push(`<div class="card label" style="border-left:${item.backgroundColor[i]} solid 10px">`);
                    legendHtml.push('<div class="card-body">')
                    legendHtml.push(`<h6 class="card-title">${chart.data.labels[i]}</h6>`);
                    legendHtml.push(`<p class="card-subtitle">$ ${item.data[i]}</p>`)
                    legendHtml.push('</div></div>');
                }
                legendHtml.push('</div>');
                return legendHtml.join("");
            }
         }
    });

    $('#legend').html(chart.generateLegend());
})()