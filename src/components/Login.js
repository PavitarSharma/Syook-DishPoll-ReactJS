import { useState, useEffect, useContext } from 'react'
import { UserContext } from "../index"
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
const Login = () => {
    const navigate = useNavigate()
    const [userName, setUserName] = useState("");
    const [userpassword, setUserPassword] = useState("");

    const [error, setError] = useState({
        value: "",
        message: ""
    })
    const userData = useContext(UserContext)



    useEffect(() => {
        document.title = "Syook - Login";
    }, []);

    const loginUser = (event) => {
        event.preventDefault();
        const user = userData.find(({ username }) => username === userName)
        const pass = userData.find(({ password }) => password === userpassword)

        if (!user) {
            setError({
                value: "username",
                message: "Username not exits!"
            })
        }

        else if (!pass) {
            setError({
                value: "passwprd",
                message: "Password not exits!"
            })
        }

        if (user && pass) {
            setError({
                value: "",
                message: ""
            })
        }

        localStorage.setItem('user', JSON.stringify(user))
        navigate("/")

    }

    const isInvalid = userName === "" || userpassword === ""



    return (
        <>
            <div className="h-[100vh] w-full flex items-center justify-center">
                <form onSubmit={loginUser} className="shadow-xl h-[500px] md:w-[500px]  flex flex-col p-8 items-center">
                    <div className="text-center mb-6">
                        <h2 className="text-2xl font-semibold">Welcome Back</h2>
                        <p>Login and Visit our website</p>
                        <p className="text-red-700">{error.message}</p>
                    </div>
                    <div className="my-4">
                        <input
                            type="text"
                            id="username"
                            name="username"
                            autoComplete='off'
                            placeholder='Username'
                            value={userName}
                            onChange={(event => setUserName(event.target.value))}
                            className="border border-gray-400 px-2 h-12 sm:w-80 w-50 rounded outline-orange-400 text-md font-semibold"
                        />

                    </div>

                    <div className="my-4">
                        <input
                            type="text"
                            id="password"
                            name="password"
                            autoComplete='off'
                            placeholder="Password"
                            value={userpassword}
                            onChange={(event => setUserPassword(event.target.value))}
                            className="border border-gray-400 px-2 py-3 rounded outline-orange-400 text-md font-semibold"
                        />

                    </div>

                    <button disabled={isInvalid} type="submit" className={`${isInvalid ? "bg-blue-300" : "bg-blue-700"}  text-white w-80 rounded py-2 text-lg cursor-pointer hover:bg-blue-600 duration-500 transition-all`}>Login</button>
                </form>
            </div>

            <Footer />
        </>
    )
}

export default Login