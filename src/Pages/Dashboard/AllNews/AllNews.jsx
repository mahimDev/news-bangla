import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useNews from "../../../Hooks/useNews";

const AllNews = () => {
    const { news, refetch } = useNews()
    const axiosSecure = useAxiosSecure()
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    // news edit related work
    const handleNewsEditBtn = (data) => {
        console.log(data)
    }
    // news delete related work
    const handleDeleteBtn = (id) => {
        setDeleteModal(true)
        setDeleteId(id)
        console.log(id)
    }
    const confirmDelete = async () => {
        const { data } = await axiosSecure.delete(`/news/${deleteId}`)
        if (data?.deletedCount) {
            refetch()
            setDeleteModal(false)
        }

    }
    return (
        <div className="p-10">
            <div className="overflow-x-auto">
                <table className="min-w-[90%] shadow-md border mx-auto border-gray-100 my-6">
                    <thead>
                        <tr className="bg-green-800 text-white">
                            <th className="py-4 px-6 text-lg text-left border-b">Image</th>
                            <th className="py-4 px-6 text-lg text-left border-b">Title</th>
                            <th className="py-4 px-6 text-lg border-b text-center">Author</th>
                            <th className="py-4 px-6 text-lg border-b text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*  */}

                        {news?.map((item) => <tr key={item?._id} className="hover:bg-green-600/40  border-b transition duration-300">
                            <td className="py-4 px-4 flex justify-start">
                                <img src={item?.imageUrl || null} className="h-16 w-16 object-cover rounded  bg-gray-300" />
                                {/* <img src={item?.imageUrl} alt="image" /> */}
                            </td>
                            <td className="py-4 px-6 border-b text-md ">{item?.title}</td>

                            <td className="py-4 px-6 border-b text-center ">
                                <p>{item?.author}</p>
                            </td>

                            <td className="py-4 px-6 border-b space-x-4 text-center font-semibold">

                                <button
                                    onClick={() => handleNewsEditBtn(item)}
                                    className="bg-green-800 hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteBtn(item?._id)}
                                    className="bg-red-600 hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md">
                                    Delete
                                </button>
                            </td>


                        </tr>)}
                    </tbody>
                </table>
            </div>
            {/* modal */}
            {deleteModal && <div>
                <div className="fixed open: z-30 w-screen h-screen flex justify-center items-center bg-green-500/10 top-0 left-0">
                    <div className="bg-green-600 p-5 rounded-xl  ">
                        <div className="flex justify-center">
                            <img className="" src="https://img.icons8.com/?size=100&id=P46lrVvs4kgI&format=png&color=000000" alt="" />
                        </div>
                        <h1 className="p-2 text-2xl text-gray-100 font-semibold">Are you sure ! you want to delete this news ? </h1>
                        <div className="flex justify-end gap-3 pt-5">
                            <button
                                onClick={() => setDeleteModal(false)}
                                className="border-2 hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md">
                                cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="bg-red-700 hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md border-2 border-red-800">
                                confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default AllNews;