import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from 'react-toastify';
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const Login = () => {
    const { userLogin, loginWithGoogle } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    // user login 
    const handleLoginBtn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const email = form.get('email')
        const password = form.get('password')
        userLogin(email, password)
            .then((res) => {
                toast.success("Login sucessfully", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                })
                navigate("/")


            })
            .catch((err) => {
                const error = err?.code.split("-").join(" ").split("/").join(" ")
                toast.error(error, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",

                })
            })
    }
    // user login with google
    const handleGoogleLoginBtn = () => {
        loginWithGoogle()
            .then(async (res) => {
                if (res?.user) {
                    const email = res?.user?.email
                    const fullName = res?.user?.displayName
                    const { data } = await axiosPublic.post("/users", { fullName, email })

                    toast.success("Login sucessfully", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",

                    })
                    navigate("/")

                }
            })
            .catch(() => {

            })
    }
    return (
        <div className="flex justify-center mt-10 p-10">
            <div>
                <div className="text-center">
                    <h1 className="text-6xl font-medium">Nekre News</h1>
                    <h1 className="text-3xl mt-6">Login</h1>
                    <p className="text-xl mt-2">To continue to  Nekre News</p>
                    <div className="mt-10 space-y-7">
                        {/* <button className="bg-blue-500 py-2 w-full rounded text-xl font-medium text-white flex justify-center items-center gap-2">
                            <img className="w-9" src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff" alt="" />
                            Sign in with Facebook</button> */}
                        <button type="button" onClick={handleGoogleLoginBtn} className="bg-blue-500 py-2 w-full rounded text-xl font-medium text-white flex justify-center items-center gap-2 cursor-pointer">
                            <img className="w-9" src="https://img.icons8.com/?size=100&id=af2csRrots6V&format=png&color=ffffff" alt="" />
                            Sign in with  Google</button>
                    </div>
                    <p className="py-4 text-lg">Or</p>
                </div>
                <form onSubmit={handleLoginBtn} className="space-y-7 mb-10">

                    <input className="border p-2 w-full rounded text-lg" type="email" name="email" placeholder="Email" />
                    <input className="border p-2 w-full rounded text-lg" type="password" name="password" placeholder="Password" />

                    <button className="gradientRed py-2 w-full rounded text-xl font-medium text-white cursor-pointer">Login</button>
                </form>

                <p className="text-center text-xl">New to News Bangla ? <Link to={"/register"} className="text-red-700 hover:border-b">Create an account</Link> </p>
            </div>
        </div>
    );
};

export default Login;