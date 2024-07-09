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
        <>
            <h1>Login</h1>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={login}>Login</button>
        </>
    );
}

export { LoginPage };
