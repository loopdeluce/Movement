import { useState } from "react";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

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
          sessionStorage.setItem("user", data);
          setFormData(initialFormData);
          history.push("/home");
        }
      });
  }

  return (
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <form
          action=""
          class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          onSubmit={handleLoginSubmit}
        >
          <div>
            <div class="relative mt-1">
              <input
                type="email"
                id="email"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-blue-50"
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

          {errors
            ? errors.map((error) => {
                return (
                  <>
                    <p key={error}>{error}</p>
                    <br />
                  </>
                );
              })
            : null}

          <button
            type="submit"
            class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
          >
            Log in
          </button>

          <p class="text-sm text-center text-gray-500">
            No account?
            <a class="underline" href="">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
