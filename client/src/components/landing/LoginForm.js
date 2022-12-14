import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";

function LoginForm({ setReadyToLoad }) {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [user, handleUserChange] = useContext(UserContext);

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          handleUserChange(data);
          sessionStorage.setItem("chosenPage", "My Movement Summary");
          sessionStorage.setItem("user", JSON.stringify(data));
          setFormData(initialFormData);
          setReadyToLoad(true);
          history.push("/home");
        }
      });
  }

  function handleSignup(e) {
    e.preventDefault();
    history.push("/signup");
  }

  return (
    <div class="px-4 py-16 sm:px-6 lg:px-8">
      <div class="">
        <form
          action=""
          class="p-8 mb-0 space-y-4 rounded-lg shadow-2xl bg-white"
          onSubmit={handleLoginSubmit}
        >
          <div>
            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                class="sm:w-96 w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-blue-50"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div>
            <div class="relative mt-1">
              <input
                type="password"
                id="password"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-blue-50"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {errors.length > 0
            ? errors.map((error) => {
                return (
                  <>
                    <p key={error} class="text-sm text-red-600">
                      {error}
                    </p>
                  </>
                );
              })
            : null}

          <button
            type="submit"
            class="block w-full px-5 py-3 text-sm font-medium text-white text-base bg-jungle rounded-lg font-bold hover:bg-jungle_800"
          >
            Log in
          </button>

          <p class="text-sm text-center text-gray-500">
            No account?{" "}
            <a class="underline" onClick={handleSignup}>
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
