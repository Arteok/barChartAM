/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 *
 * For more information visit:
 * https://www.amcharts.com/
 *
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root and chart
var root = am5.Root.new("chartdiv");

root.setThemes([
    am5themes_Animated.new(root)
]);

var chart = root.container.children.push(
    am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
    })
);

// Define data
var data = [{
    date: new Date(2021, 0, 1).getTime(),
    value: 1000
}, {
    date: new Date(2021, 0, 2).getTime(),
    value: 800
}, {
    date: new Date(2021, 0, 3).getTime(),
    value: 700
}, {
    date: new Date(2021, 0, 4).getTime(),
    value: 1200
}, {
    date: new Date(2021, 0, 5).getTime(),
    value: 740
}];

// Craete Y-axis
var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
    })
);

// Create X-Axis
var xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
        baseInterval: {
            timeUnit: "day",
            count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 20
        }),
    
        
    })
);

// Create series
function createSeries(name, field, openField) {
    var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: field,
            valueXField: "date",
            locationY: 0

        })
    );
    series.columns.template.setAll({
        fillOpacity: 0.5,
        strokeWidth: 2
    });
    series.data.setAll(data);

    series.columns.template.states.create("riseFromPrevious", {
        fill: am5.color(0x76b041),
        stroke: am5.color(0x76b041)
    });

    series.columns.template.states.create("dropFromPrevious", {
        fill: am5.color(0xe4572e),
        stroke: am5.color(0xe4572e)
    });
}

createSeries("Series with breaks", "value", "openValue");