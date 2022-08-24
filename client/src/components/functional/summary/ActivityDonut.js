import Chart from "react-apexcharts";

function ActivityDonut() {
  const donut_data = JSON.parse(sessionStorage.getItem("summary")).donut_hash;
  const chartData = {
    options: {
      labels: donut_data.labels,
      legend: { horizontalAlign: "left" },
      theme: {
        monochrome: {
          enabled: true,
          color: "#2e6059",
          shadeIntensity: 0.75,
        },
      },
    },
    series: donut_data.series,
  };

  return (
    <div class="mt-10 mr-5 bg-white w-max rounded-lg">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="450"
        class="p-5 shadow-md rounded-lg"
        onClick={(e) => console.log(e.target)}
      />
    </div>
  );
}

export default ActivityDonut;
