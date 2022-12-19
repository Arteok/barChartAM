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
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout
    })
);

// Define data
var data = [{
    "year": "2021",
    "europe": 5,
    "namerica": 2.5,
    "asia": 1
}, {
    "year": "2022",
    "europe": 2.6,
    "namerica": 6.7,
    "asia": 2.2
}, {
    "year": "2023",
    "europe": 4.8,
    "namerica": 1.9,
    "asia": 4.4
}]

// Create Y-axis
var yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
        min: 0,
        max: 100,
        calculateTotals: true,
        numberFormat: "#'%'",
        renderer: am5xy.AxisRendererY.new(root, {})
    })
);

// Create X-Axis
var xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
        maxDeviation: 0.2,
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "year"
    })
);
xAxis.data.setAll(data);

// Create series
function createSeries(name, field) {
    var series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
            name: name,
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: field,
            valueYShow: "valueYTotalPercent",
            categoryXField: "year",
            stacked: true
        })
    );
    series.data.setAll(data);
}

createSeries("Europe", "europe");
createSeries("North America", "namerica");
createSeries("Asia", "asia");