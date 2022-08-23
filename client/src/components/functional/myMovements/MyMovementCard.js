import {
  buildFormattedDatetime,
  secondsToHoursMinutesSeconds,
  quantitativeExertion,
} from "../../helpers";

function MyMovementCard({
  session: {
    activities,
    datetime_session_start,
    title,
    total_activities,
    total_time_seconds,
    avg_exertion,
  },
}) {
  const activityBlurbs = activities.map((activity) => {
    return (
      <div class="sm:pr-8">
        <h2 class="text-base text-gray-700 text-left font-bold">
          {activity.movement_type} •{" "}
          <span class="font-normal text-gray-600 text-sm">
            {secondsToHoursMinutesSeconds(activity.activity_stat.time_seconds)}
          </span>{" "}
          •{" "}
          <span class="font-normal text-gray-600 text-sm">
            {activity.activity_stat.exertion} -{" "}
            {quantitativeExertion(activity.activity_stat.exertion)} exertion{" "}
          </span>{" "}
        </h2>
        {activity.description === "" ? null : (
          <p class="text-sm text-gray-600 text-left">
            <span class="font-semibold">Description: </span>
            {activity.description}
          </p>
        )}
        {activity.private_notes === "" ? null : (
          <p class="text-sm text-gray-600 text-left">
            <span class="font-semibold">Private Notes: </span>
            {activity.private_notes}
          </p>
        )}
        <div class="mb-1"></div>
      </div>
    );
  });
  return (
    <div class="relative p-8 border border-gray-100 rounded-lg bg-white mt-3 mb-5 ">
      <span class="absolute inset-x-0 bottom-0 rounded-b-lg h-2 bg-gradient-to-r from-jungle_100 via-jungle_500 to-jungle_800 shadow-lxl"></span>

      <div class="justify-between sm:flex">
        <div>
          <h5 class="text-xl font-bold text-gray-900 text-left">{title}</h5>
          <p class="mt-1 text-xs font-medium text-gray-600 text-left ">
            {buildFormattedDatetime(datetime_session_start)}
          </p>
        </div>
        {/* <div class="flex-shrink-0 hidden ml-3 sm:block">
          <img
            class="object-cover w-16 h-16 rounded-lg shadow-sm"
            src="https://www.hyperui.dev/photos/man-5.jpeg"
            alt=""
          />
        </div> */}
      </div>

      <dl class="flex mt-3 mb-4">
        <div class="flex flex-col-reverse">
          <dt class="text-sm font-medium text-gray-600">{total_activities}</dt>
          <dd class="text-xs text-gray-500">Movements</dd>
        </div>

        <div class="flex flex-col-reverse ml-3 sm:ml-6">
          <dt class="text-sm font-medium text-gray-600">
            {secondsToHoursMinutesSeconds(total_time_seconds)}
          </dt>
          <dd class="text-xs text-gray-500">Total Time Moving</dd>
        </div>

        <div class="flex flex-col-reverse ml-3 sm:ml-6">
          <dt class="text-sm font-medium text-gray-600">{avg_exertion}</dt>
          <dd class="text-xs text-gray-500">Average Exertion</dd>
        </div>
      </dl>

      {activities.length > 1 ? (
        activityBlurbs
      ) : (
        <div class=" sm:pr-8">
          <h2 class="text-base text-gray-700 text-left font-bold">
            {activities[0].movement_type} •{" "}
            <span class="font-normal text-gray-600 text-sm">
              {secondsToHoursMinutesSeconds(
                activities[0].activity_stat.time_seconds
              )}
            </span>{" "}
            •{" "}
            <span class="font-normal text-gray-600 text-sm">
              {activities[0].activity_stat.exertion} -{" "}
              {quantitativeExertion(activities[0].activity_stat.exertion)}{" "}
              exertion{" "}
            </span>{" "}
          </h2>
          {activities[0].description === "" ? null : (
            <p class="text-sm text-gray-600 text-left">
              <span class="font-semibold">Description: </span>
              {activities[0].description}
            </p>
          )}
          {activities[0].private_notes === "" ? null : (
            <p class="text-sm text-gray-600 text-left">
              <span class="font-semibold">Private Notes: </span>
              {activities[0].private_notes}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default MyMovementCard;
