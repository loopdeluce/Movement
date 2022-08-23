function SummaryStats() {
  const summaryData = JSON.parse(sessionStorage.getItem("summary"));
  return (
    <div class="mt-8 sm:mt-12">
      <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Days
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {summaryData.total_days}
          </dd>
        </div>

        <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Hours
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {summaryData.total_hours}
          </dd>
        </div>

        <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
          <dt class="order-last text-lg font-medium text-gray-500">
            Total Movements
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {summaryData.total_movements}
          </dd>
        </div>

        <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
          <dt class="order-last text-lg font-medium text-gray-500">
            {" Longest Movement"}
          </dt>
          <dt class="order-last text-lg font-medium text-gray-500">
            {"(hours)"}
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {summaryData.longest_movement_hours}
          </dd>
        </div>

        <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
          <dt class="order-last text-lg font-medium text-gray-500">
            {`Most Popular Activity `}
          </dt>
          <dt class="order-last text-lg font-medium text-gray-500">{`${
            sessionStorage.getItem("uom") === "number"
              ? "(# of movements)"
              : "(hours of movement)"
          }`}</dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {summaryData.popular_movement[0]}
          </dd>
        </div>

        <div class="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
          <dt class="order-last text-lg font-medium text-gray-500">
            Average Movements per Session
          </dt>

          <dd class="text-4xl font-extrabold text-blue-600 md:text-5xl">
            {summaryData.average_movements_per_session}
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default SummaryStats;
