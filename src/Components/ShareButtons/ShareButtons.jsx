import { useState } from "react";

const ShareButtons = ({ newsId, title }) => {
    //   const shareUrl = `https://nekrenews.net/news/${newsId}`;
    //   const shareUrl = `https://news-bangla-server-test.vercel.app/share/${newsId}`;
    const shareUrl = `${import.meta.env.VITE_SEVER_API_URL}share/${newsId}`;
    console.log(shareUrl)
    //   const shareUrl = `http://localhost:4000/share/${newsId}`;
    //   const [copied, setCopied] = useState(false);

    //   const handleCopy = async () => {
    //     try {
    //       await navigator.clipboard.writeText(shareUrl);
    //       setCopied(true);
    //       setTimeout(() => setCopied(false), 2000);
    //     } catch (err) {
    //       console.error("Copy failed", err);
    //     }
    //   };
    // const facebookAppId = 2036211623566683;
    return (
        <div className="flex flex-wrap gap-2 mt-6 items-center">
            <span className="text-gray-700 font-semibold">শেয়ার করুন:</span>

            <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
                Facebook
            </a>

            <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    shareUrl
                )}&text=${encodeURIComponent(title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#0d8ddb]"
            >
                Twitter
            </a>
            <a
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    `${import.meta.env.VITE_SEVER_API_URL}whatsappShare/${newsId}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
                WhatsApp
            </a>
            {/* <a
        href={`https://www.facebook.com/dialog/send?app_id=1020121840275140&link=${encodeURIComponent(
          shareUrl
        )}&redirect_uri=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-[#0084FF] text-white rounded-lg hover:bg-[#006fd6]"
      >
        Messenger
      </a> */}
            {/* <a
        href={`https://m.me/?link=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3 py-1 bg-[#0084FF] text-white rounded-lg hover:bg-[#006fd6]"
      >
        Messenger
      </a> */}
            <a
                href={`fb-messenger://share?link=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#0084FF] text-white rounded-lg hover:bg-[#006fd6]"
            >
                Messenger
            </a>
            {/* <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
            >

                {copied ? "কপি হয়েছে!" : "লিংক কপি করুন"}
            </button> */}
        </div>
    );
};

export default ShareButtons;
