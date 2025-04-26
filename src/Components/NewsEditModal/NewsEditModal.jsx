import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import axios from "axios";

const NewsEditModal = (props = {}) => {
    const { setEditNewsModal, news: item, refetch } = props || {}
    const [news, setNews] = useState({
        title: item?.title,
        content: item?.content,
        category: item?.category,
        author: item?.author,
        imageUrl: item?.imageUrl,
    });
    // console.log(item?._id)
    const [preview, setPreview] = useState(null);
    const [proccess, setProccess] = useState(false)
    const axiosSecure = useAxiosSecure()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNews({ ...news, [name]: value });

    };

    const uploadImgBB = async (file) => {
        const apiKey = import.meta.env.VITE_IMAGE_API_KEY
        const apiURL = import.meta.env.VITE_IMAGE_API_URL
        const formData = new FormData()
        formData.append("image", file)
        try {
            const res = await axios.post(`${apiURL}?key=${apiKey}`, formData)
            if (res.data.data.url) {
                setProccess(false)
            }
            return res.data.data.url
        } catch (err) {
            console.error(err)
            return null
        }
    }

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setProccess(true)
            // const res = await axios.post(`${apiURL}?key=${apiKey}`, file)
            // console.log(res)
            const imageUrl = await uploadImgBB(file);

            setPreview(imageUrl);
            setNews({ ...news, imageUrl });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, content, imageUrl, author } = news
        // console.log(news)
        const { data } = await axiosSecure.put(`/updateNews/${item?._id}`, news)
        if (data.modifiedCount) {
            refetch()
            setEditNewsModal(false)
        }

    };
    console.log(news)
    return (
        <div>
            <div>
                <div className="fixed open: z-30 w-screen h-screen flex justify-center items-center bg-green-500/10 top-0 left-0">
                    <div className="shadow-2xl   rounded-lg">
                        {/*  */}
                        <div className="">
                            {/* <h1 className="text-center font-bold text-4xl">   Upload News</h1> */}
                            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg backdrop-blur-2xl">
                                <h2 className="text-2xl font-bold mb-5">Add News Article</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Title */}
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="News Title"
                                        value={news.title}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />

                                    {/* Content */}
                                    <textarea
                                        name="content"
                                        placeholder="News Content"
                                        value={news.content}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />

                                    {/* Category */}
                                    <select
                                        name="category"
                                        value={news.category}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    >
                                        <option value="">Select Category</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="politics">Politics</option>
                                        <option value="international">International</option>
                                        <option value="technology">Technology</option>
                                        <option value="business">Business</option>
                                        <option value="sports">Sports</option>
                                        <option value="entertainment">Entertainment</option>
                                        <option value="weather">Weather</option>
                                    </select>

                                    {/* Author */}
                                    <input
                                        type="text"
                                        name="author"
                                        placeholder="Author Name"
                                        value={news.author}
                                        onChange={handleChange}
                                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />

                                    {/* Image Upload */}
                                    <div>
                                        <label className="block mb-2 font-medium">Upload Image</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="w-full p-2 border rounded-md"
                                        />

                                        <img src={news?.imageUrl} alt="Nekre news image " className="mt-3 w-full h-40 object-cover rounded-md" />

                                    </div>
                                    <div className="flex text-lg font-semibold gap-3">
                                        {/* cancleBtn */}
                                        <button
                                            type="button"
                                            onClick={() => setEditNewsModal(false)}
                                            className="border-2 text-green-800 hover:scale-110 scale-100 transition-all duration-300  py-2 px-4 rounded-md w-full">
                                            cancel
                                        </button>
                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="backgroundGradient text-white  hover:scale-110 scale-100 transition-all duration-300  py-2 px-4 rounded-md w-full "
                                        >
                                            {proccess ? "proccessing..." : "Update News"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsEditModal;