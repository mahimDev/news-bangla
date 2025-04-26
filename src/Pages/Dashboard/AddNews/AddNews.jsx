import axios from "axios";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AddNews = () => {
    const [news, setNews] = useState({
        title: "",
        content: "",
        category: "",
        author: "",
        imageUrl: "",
    });
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
        console.log(content)
        const { data } = await axiosSecure.post("addNews", news)
        if (data?.insertedId) {
            setNews({
                title: "",
                content: "",
                category: "",
                author: "",
                imageUrl: "",
            })
            setPreview("")
            alert("News Added")
        }

    };
    return (
        <div className="p-10">
            <h1 className="text-center font-bold text-4xl">   Upload News</h1>
            <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
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
                        {preview && (
                            <img src={preview} alt="Preview" className="mt-3 w-full h-40 object-cover rounded-md" />
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-800 text-white py-3 rounded-md hover:bg-green-700 transition text-lg font-bold"
                    >
                        {proccess ? "proccessing..." : "Add News"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;