import Chart from "react-apexcharts";
function MultiSeries() {
  // console.log(JSON.parse(sessionStorage.getItem("summary")));

  const multiData = JSON.parse(sessionStorage.getItem("summary")).multiple_hash;
  console.log(multiData);
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
      legend: { horizontalAlign: "left" },
      yaxis: [
        {
          title: {
            text: "Average Exertion",
          },
          min: 1,
          max: 10,
          tickAmount: 6,
        },
        {
          opposite: true,
          title: {
            text: `Total ${
              sessionStorage.getItem("uom") === "time" ? "Hours" : "Number"
            } of Movements`,
          },
        },
      ],
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
    <div class="mt-10 ml-10 bg-white w-max rounded-lg">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        width="500"
        class="p-5"
        onClick={(e) => console.log(e.target)}
      />
    </div>
  );
}

export default MultiSeries;
