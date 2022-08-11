import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      sessionStorage.setItem("user", null);
      history.push("/");
    });
  }

  return (
    <div class="bg-gray-100">
      <div class="flex justify-between px-7 py-3 items-center">
        <h1 class="">the joy of Movement</h1>
        <button
          class="bg-gray-50 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Header;
