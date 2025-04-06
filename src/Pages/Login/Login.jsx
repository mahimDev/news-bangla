import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Login = () => {
    const { userLogin, user } = useAuth()
    const navigate = useNavigate()
    const handleLoginBtn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        if (email === "admin@gmail.com" && password === "admin123") {
            navigate("/addNews")
        } else {
            navigate("/")
        }
        // userLogin(email, password)
        //     .then((res) => {
        //         // navigate("/")
        //         console.log(res.user)

        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    }
    return (
        <div className="flex justify-center mt-10 p-10">
            <div>
                <div className="text-center">
                    <h1 className="text-6xl font-medium">News Bangla</h1>
                    <h1 className="text-3xl mt-6">Login</h1>
                    <p className="text-xl mt-2">To continue to  News Bangla</p>
                    <div className="mt-10 space-y-7">
                        {/* <button className="bg-blue-500 py-2 w-full rounded text-xl font-medium text-white flex justify-center items-center gap-2">
                            <img className="w-9" src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff" alt="" />
                            Sign in with Facebook</button> */}
                        <button className="bg-blue-500 py-2 w-full rounded text-xl font-medium text-white flex justify-center items-center gap-2">
                            <img className="w-9" src="https://img.icons8.com/?size=100&id=af2csRrots6V&format=png&color=ffffff" alt="" />
                            Sign in with  Google</button>
                    </div>
                    <p className="py-4 text-lg">Or</p>
                </div>
                <form onSubmit={handleLoginBtn} className="space-y-7 mb-10">

                    <input className="border p-2 w-full rounded text-lg" type="email" name="email" placeholder="Email" />
                    <input className="border p-2 w-full rounded text-lg" type="password" name="password" placeholder="Password" />

                    <button className="bg-red-600 py-2 w-full rounded text-xl font-medium text-white cursor-pointer">Login</button>
                </form>

                {/* <p className="text-center text-xl">New to News Bangla ? <Link to={"/register"} className="text-red-700 hover:border-b">Create an account</Link> </p> */}
            </div>
        </div>
    );
};

export default Login;