import React from "react";
import { Placeholder } from "reactstrap";
import { AuthContext } from "../auth/AuthContext";
import { loginAccount } from "../services/api";

function LoginPage() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { setToken } = React.useContext(AuthContext);

    const login = async () => {
        try {
            const resp = await loginAccount({ username: username, password: password });

            if (resp && resp.token) {
                await setToken(resp.token);
            } else {
                console.log("Login failed:", resp); // Log if login was unsuccessful
            }
        } catch (error) {
            console.error("Error during login:", error); // Log any errors during login
        }
    };

    return (
        <div className="container mx-auto mt-10 flex justify-center items-center h-screen">
          <div className="bg-white shadow-md rounded-lg p-6 w-full sm:w-96">
            <h1 className="text-3xl font-bold text-center mb-5">Login</h1>
            <div className="rounded-lg bg-gray-100 p-4 mb-4">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-primary"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-3 focus:outline-none focus:border-primary"
              />
            </div>
            <button
              onClick={login}
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark focus:outline-none"
            >
              Login
            </button>
          </div>
        </div>
      );
    
    
}

export { LoginPage };
