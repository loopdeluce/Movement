import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user";

function SignupForm() {
  const initialFormData = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState([]);
  const [user, handleUserChange] = useContext(UserContext);
  const history = useHistory();

  function handleInputChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSignupSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
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
          setFormData({
            ...formData,
            password: "",
            password_confirmation: "",
          });
        } else {
          handleUserChange(data);
          sessionStorage.setItem("user", JSON.stringify(data));
          history.push("/home");
          setFormData(initialFormData);
        }
      });
  }

  return (
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        <form
          action=""
          class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-white"
          onSubmit={handleSignupSubmit}
        >
          <div class="flex gap-x-5">
            <div>
              <div class="relative mt-1">
                <input
                  type="first_name"
                  id="first_name"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-blue-50"
                  placeholder="First name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <div class="relative mt-1">
                <input
                  type="last_name"
                  id="last_name"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-blue-50"
                  placeholder="Last name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

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

          <div>
            <div class="relative mt-1">
              <input
                type="password"
                id="password_confirmation"
                class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm bg-blue-50"
                placeholder="Confirm password"
                name="password_confirmation"
                value={formData.password_confirmation}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {errors
            ? errors.map((anError) => {
                return (
                  <>
                    <p key={anError} class="text-sm text-red-600">
                      {anError}
                    </p>
                  </>
                );
              })
            : null}

          <button
            type="submit"
            class="block w-full px-5 py-3 text-sm font-medium text-white bg-jungle rounded-lg font-semibold hover:bg-jungle_800"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
