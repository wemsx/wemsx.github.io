---
pin: true
abbrlink: 1
date: 2022-09-09 00:00:00
---

<p>
{% span logo center large, wemsx %}
{% span center small logo, Hi there👋! %}
</p>
<script>
// chart data example
var chartData = [{
  date: valid Javascript date object,
  count: Number
}];
var chart1 = calendarHeatmap()
              .data(chartData)
              .selector('#chart-one')
              .colorRange(['#D8E6E7', '#218380'])
              .tooltipEnabled(true)
              .onClick(function (data) {
                console.log('onClick callback. Data:', data);
              });
chart1();  // render the chart
</script>
<!--more-->