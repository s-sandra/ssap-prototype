const verticalLinePlugin = {
    getLinePosition: function (chart, pointIndex) {
        const meta = chart.getDatasetMeta(0); // first dataset is used to discover X coordinate of a point
        const data = meta.data;
        return data[pointIndex]._model.x;
    },
    renderVerticalLine: function (chartInstance, index, offset, value) {
        const scale = chartInstance.scales['y-axis-0'];
        const context = chartInstance.chart.ctx;
        xTicks = 7;  // 7 ticks on x-axis
        xScale = 25;  // x-axis in increments of 25
        firstTick = this.getLinePosition(chartInstance, 0);
        lastTick = this.getLinePosition(chartInstance, xTicks - 1);
        xAreaBetween = (lastTick - firstTick) / xTicks;

        const linePosition = this.getLinePosition(chartInstance, index) + (xAreaBetween * (offset * 1/xScale));
  
        // render vertical line
        context.beginPath();
        context.strokeStyle = 'rgba(114, 114, 114, 0.25)';
        context.lineWidth = 5
        context.moveTo(linePosition, scale.top);
        context.lineTo(linePosition, scale.bottom);
        context.stroke();

        // write label
        context.fillStyle = 'rgba(114, 114, 114)';
        context.textAlign = 'center';
        context.fillText(value, linePosition, scale.top - (scale.top / 4));
    },
  
    afterDatasetsDraw: function (chart, easing) {
        if (chart.config.lineAtIndex) {
            chart.config.lineAtIndex.forEach(
                point => {
                    index = point[0];
                    offset = point[1];
                    value = point[2];
                    return this.renderVerticalLine(chart, index, offset, value);
                }
            );
        }
    }
};
  
Chart.plugins.register(verticalLinePlugin);

(function () {
    'use strict'
    const getNearestLabel = (value, values) =>
        values.reduce((prev, curr) =>
            Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev
        );
    ;
    
    var percId = document.getElementById("percentileHighlight").getContext('2d');
    var highlightValue = 1.195;
    var highlightLabel = 33;
    var percValues = [0.149, 0.283, 0.737, 2.301, 7.347, 25.141, 44.623];
    var percLabels = [5, 10, 25, 50, 75, 90, 95];
    var nearestLabel = getNearestLabel(highlightLabel, percLabels);
    var nearestIndex = percLabels.indexOf(nearestLabel);

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
        },
        lineAtIndex: [[nearestIndex, highlightLabel - nearestLabel, highlightValue]]
    })
})();