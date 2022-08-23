import Chart from "react-apexcharts";

function ActivityDonut() {
  const chartData = {
    options: {},
    series: [44, 55, 41, 17, 15],
    labels: ["A", "B", "C", "D", "E"],
  };

  return (
    <div class="mt-10 ml-10 bg-white w-max rounded-lg">
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="donut"
        width="500"
        class="p-5"
      />
    </div>
  );
}

export default ActivityDonut;
