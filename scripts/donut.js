(function () {
    const funds = [
        55891, 
        24928, 
        65600, 
        26240,
        39884.8,
        13120,
        13120,
        13120,
        10496
    ];
    funds.sort((num1, num2) => num2 - num1);
    const data = {
        labels: [
        'Fredericksburg',
        'NOVA',
        'Hampton Roads',
        'Bristol',
        'Salem',
        'Culpepper',
        'Lynchburg',
        'Richmond',
        'Staunton'
        ],
        datasets: [{
            label: "Visitor",
            data: funds,
            backgroundColor: [
                '#69c7fe',
                '#47a6dd',
                '#2ca9b6',
                '#45be71',
                '#aadea7',
                '#e6f69d',
                '#ffe62e',
                '#feae65',
                '#ff7d3f',
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