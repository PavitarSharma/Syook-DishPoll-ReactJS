import { useState, useEffect } from 'react'

const Login = () => {
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("")


    useEffect(() => {
        document.title = "Sybook - Login";
    }, []);

    const loginUser = (event) => {
        event.preventDefault();

     

    
        console.log(username, password);
     
    }

    const isInvalid = username === "" || password === ""



    return (
        <div className="h-[100vh] w-full flex items-center justify-center">
            <form onSubmit={loginUser} className="shadow-xl h-[500px] md:w-[500px]  flex flex-col p-8 items-center">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold">Welcome Back</h2>
                    <p>Login and Visit our website</p>
                    <p>{error}</p>
                </div>
                <div className="my-4">
                    <input
                        type="text"
                        id="username"
                        name="username"
                        autoComplete='off'
                        placeholder='Username'
                        value={username}
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
                        value={password}
                        onChange={(event => setPassword(event.target.value))}
                        className="border border-gray-400 px-2 py-3 rounded outline-orange-400 text-md font-semibold"
                    />
                  
                </div>

                <button disabled={isInvalid} type="submit" className={`${isInvalid ?"bg-blue-300" : "bg-blue-700"}  text-white w-80 rounded py-2 text-lg cursor-pointer hover:bg-blue-600 duration-500 transition-all`}>Login</button>
            </form>
        </div>
    )
}

export default Login