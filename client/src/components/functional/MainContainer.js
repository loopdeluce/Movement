import InformationContainer from "./InformationContainer";
import NavBar from "./NavBar";

function MainContainer() {
  return (
    <div class="grid container grid grid-cols-4 ">
      <div class="item1 col-span-1">
        <NavBar />
      </div>
      <div class="item2 col-span-3 ">
        <InformationContainer />
      </div>
    </div>
  );
}

export default MainContainer;
