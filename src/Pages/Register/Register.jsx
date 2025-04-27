import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Register = () => {
    const { createUser, user, loginWithGoogle } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    // user register
    const handleRegisterBtn = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const fullName = form.get('fullName')
        const email = form.get('email')
        const password = form.get('password')
        createUser(email, password)
            .then(async (res) => {
                const { data } = await axiosPublic.post("/users", { fullName, email, password })
                if (data.insertedId) {
                    navigate("/")
                }

            })
            .catch((err) => {
                console.log(err)
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
                    navigate("/")

                }
            })
        // .catch(() => {
        //     // console.log(err.code)
        // })
    }
    console.log(user)
    return (
        <div className="flex justify-center mt-10 p-10">
            <div className=" p-10 rounded shadow-2xl ">
                <div className="text-center">
                    <h1 className="text-6xl font-medium">Nekre News</h1>
                    <h1 className="text-3xl mt-6">Create an account</h1>
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
                <form onSubmit={handleRegisterBtn} className="space-y-7 mb-10">
                    <input className="border p-2 w-full rounded text-lg" type="text" name="fullName" placeholder="Full Name" />
                    <input className="border p-2 w-full rounded text-lg" type="email" name="email" placeholder="Email" />
                    <input className="border p-2 w-full rounded text-lg" type="password" name="password" placeholder="Password" />

                    <button className="gradientRed py-2 w-full rounded text-xl font-medium text-white cursor-pointer">Register</button>
                </form>

                <p className="text-center text-xl">Already a member ? <Link to={"/login"} className="text-red-700 hover:border-b">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;