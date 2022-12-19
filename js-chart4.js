// Apply chart themes
am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

chart.marginRight = 400;

// Add data
chart.data = [{
    "country": "Lithuania",
    "research": 501.9,
    "marketing": 250,
    "sales": 199
}, {
    "country": "Czech Republic",
    "research": 301.9,
    "marketing": 222,
    "sales": 251
}, ];

//console.log('chart', chart);

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "country";
categoryAxis.title.text = "Local country offices";
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.minGridDistance = 20;


var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = "Expenditure (M)";

// Create series
var series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = "research";
series.dataFields.categoryX = "country";
series.name = "Research";
series.tooltipText = "{name}: [bold]{valueY}[/]";
series.stacked = true;



// Add cursor
chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.set("visible", false);
chart.cursor.lineX.set("visible", false);

