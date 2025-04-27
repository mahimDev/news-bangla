import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useNews from "../../../Hooks/useNews";
import NewsEditModal from "../../../Components/NewsEditModal/NewsEditModal";

const AllNews = () => {
    const { news, refetch } = useNews()
    const axiosSecure = useAxiosSecure()
    const [editNewsModal, setEditNewsModal] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
    const [deleteId, setDeleteId] = useState("")
    const [editNewsData, setEditNewsData] = useState(null)
    // news edit related work
    const handleNewsEditBtn = (data) => {
        setEditNewsModal(true)
        setEditNewsData(data)
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
                        <tr className="backgroundGradient text-white">
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
                                    className="backgroundGradient hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md">
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDeleteBtn(item?._id)}
                                    className="gradientRed hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md">
                                    Delete
                                </button>
                            </td>


                        </tr>)}
                    </tbody>
                </table>
            </div>
            {/* modal */}
            {deleteModal &&
                <div>
                    <div className="backdrop-blur-lg fixed open: z-30 w-screen h-screen flex justify-center items-center bg-green-100/10 top-0 left-0">
                        <div className="backgroundGradient p-7 rounded-xl  ">
                            <div className="flex justify-center">
                                <img className="w-20" src="https://img.icons8.com/?size=100&id=P46lrVvs4kgI&format=png&color=000000" alt="" />
                            </div>
                            <h1 className="p-2 text-2xl text-gray-100 font-semibold">Are you sure ! you want to delete this news ? </h1>
                            <div className="flex justify-end gap-3 pt-16 text-lg font-medium">
                                <button
                                    onClick={() => setDeleteModal(false)}
                                    className="border-2 hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md">
                                    Cancel
                                </button>
                                <button
                                    onClick={confirmDelete}
                                    className="gradientRed hover:scale-110 scale-100 transition-all duration-300 text-white py-2 px-4 rounded-md border-2 border-red-700">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {/* edit modal */}
            {editNewsModal && <NewsEditModal setEditNewsModal={setEditNewsModal} news={editNewsData} refetch={refetch} />}
        </div>
    );
};

export default AllNews;