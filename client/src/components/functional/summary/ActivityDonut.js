import Chart from "react-apexcharts";

function ActivityDonut() {
  const donut_data = JSON.parse(sessionStorage.getItem("summary")).donut_hash;
  const chartData = {
    options: {
      labels: donut_data.labels,
      legend: { horizontalAlign: "left" },
    },
    series: donut_data.series,
  };

  return (
    <div class="mt-10 ml-10 bg-white w-max rounded-lg">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="500"
        class="p-5"
        onClick={(e) => console.log(e.target)}
      />
    </div>
  );
}

export default ActivityDonut;
