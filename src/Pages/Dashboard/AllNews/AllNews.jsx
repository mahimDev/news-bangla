import useNews from "../../../Hooks/useNews";

const AllNews = () => {
    const { news } = useNews()
    console.log(news)
    return (
        <div className="p-5">
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

                        {news?.map((item) => <tr key={item._id} className="hover:bg-green-600/40  border-b transition duration-300">
                            <td className="py-4 px-4 flex justify-start">
                                <img src={item?.imageUrl} className="h-16 w-16 object-cover rounded  bg-gray-300" />
                            </td>
                            <td className="py-4 px-6 border-b text-md ">{item?.title}</td>

                            <td className="py-4 px-6 border-b text-center ">
                                <p>{item?.author}</p>
                            </td>

                            <td className="py-4 px-6 border-b space-x-4 text-center">

                                <button
                                    // onClick={() => productDeleteBtn(book._id)}
                                    className="bg-red-600 hover:scale-110 scale-100 transition-all duration-100 text-white py-2 px-4 rounded-md">Delete</button>
                            </td>


                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllNews;