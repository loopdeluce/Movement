import Chart from "react-apexcharts";
function MultiSeries() {
  console.log(JSON.parse(sessionStorage.getItem("summary")));
  const multiData = JSON.parse(sessionStorage.getItem("summary")).multiple_hash;
  const chartData = {
    options: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      fill: {
        colors: ["#244b45", "#ebf0ef"],
      },
      tooltip: {
        marker: {
          show: false,
        },
      },
      chart: { height: "200px", toolbar: { show: false } },
      dataLabels: { enabled: false },
      legend: {
        horizontalAlign: "center",
        fontSize: "16px",
        labels: { colors: ["#244b45", "#d6e1e0"] },
        markers: {
          fillColors: ["#244b45", "#d6e1e0"],
        },
      },
      markers: {
        colors: ["#244b45", "#d6e1e0"],
      },
      stroke: { curve: "smooth", colors: ["#244b45", "#d6e1e0"] },
      yaxis: [
        {
          title: {
            text: "Average Exertion",
            style: { fontSize: "16px" },
          },
          min: 0,
          max: 10,
          tickAmount: 5,
          labels: { style: { fontSize: "16px" } },
        },
        {
          opposite: true,
          title: {
            text: `Total ${
              sessionStorage.getItem("uom") === "time" ? "Hours" : "Number"
            } of Movements`,
            style: { fontSize: "16px" },
          },
          labels: { style: { fontSize: "16px" } },
        },
      ],
      xaxis: { labels: { style: { fontSize: "16px" } } },
    },
    series: [
      {
        name: "Average Exertion",
        type: "line",
        data: multiData.exertion_series,
      },
      {
        name: `Movements`,
        type: "area",
        data: multiData.area_series,
      },
    ],
  };

  return (
    <div class="my-3 ml-10 bg-white w-max rounded-lg">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="800px"
        class="p-5 shadow-xl rounded-lg"
        onClick={(e) => console.log(e.target)}
      />
    </div>
  );
}

export default MultiSeries;
