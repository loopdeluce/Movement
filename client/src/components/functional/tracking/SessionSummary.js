function SessionSummary() {
  function handleReset(e) {
    e.preventDefault();
    sessionStorage.setItem("second", "00");
    sessionStorage.setItem("minute", "00");
    sessionStorage.setItem("hour", "00");
    sessionStorage.setItem("counter", 0);
  }
  return (
    <div class="flex justify-center">
      <div class="my-10 bg-white rounded-2xl w-9/12 py-7 px-10">
        <div class="flex justify-between">
          <h3 class="text-md sm:text-lg text-jungle hover:underline">Resume</h3>
          <h1 class="text-xl sm:text-2xl font-bold text-left text-black ">
            Save Session
          </h1>
          <h3 class="text-md sm:text-lg text-jungle hover:underline">Delete</h3>
        </div>
        <div class="border-2 border-gray-300 my-5"></div>
        <form>Form</form>
        <div>Footer</div>
        <button onClick={handleReset}>Reset session storage</button>
      </div>
    </div>
  );
}

export default SessionSummary;
