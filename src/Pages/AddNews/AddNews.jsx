import axios from "axios";
import { useState } from "react";


const AddNews = () => {
    const [news, setNews] = useState({
        title: "",
        content: "",
        category: "",
        author: "",
        imageUrl: "",
    });
    const [preview, setPreview] = useState(null);

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
            return res.data.data.url
        } catch (err) {
            console.error(err)
            return null
        }
    }

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            // const res = await axios.post(`${apiURL}?key=${apiKey}`, file)
            // console.log(res)
            const imageUrl = await uploadImgBB(file);

            setPreview(imageUrl);
            setNews({ ...news, imageUrl });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("News Submitted:", news);
        // Send data to API or database
    };
    return (
        <div>
            <h1 className="text-center font-bold text-4xl">   AddNews</h1>
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
                        <option value="Technology">Technology</option>
                        <option value="Business">Business</option>
                        <option value="Sports">Sports</option>
                        <option value="Health">Health</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Weather">Weather</option>
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
                        className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                    >
                        Add News
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNews;