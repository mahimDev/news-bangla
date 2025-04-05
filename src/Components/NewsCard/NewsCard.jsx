// latestNews
const NewsCard = () => {
    return (
        <div>
            <div className="flex justify-center gap-20">
                <div className="w-[800px] ">
                    <img className="h-[500px] w-full object-cover" src="https://i.ibb.co.com/m9Jkh0v/view-University-of-Oxford-England-Oxfordshire.webp " alt="" />
                    <h1 className="text-4xl p-3">
                        স্বস্তি ফিরলেও শঙ্কা কাটেনি বিএনপির
                    </h1>
                    <p className="p-3">
                        ঢাকা: ৫ আগস্টের পট পরিবর্তনের পর কিছুটা স্বাস্তির নিঃশ্বাস ফেললেও ভোটের রাজনীতি নিয়ে এখনো শঙ্কায় বিএনপি। এই শঙ্কা দূর করার শর্টকাট কোনো পথও খুঁজে পাচ্ছে না দলটি। দ্রুত নির্বাচনের দাবিতে এপ্রিল থেকে সমমনাদের নিয়ে ছোট ছোট কর্মসূচি দেওয়ার পরিকল্পনা থাকলেও সেখান থেকে সরে এসেছে তারা। কারণ, এই মুহূর্তে ড. মুহাম্মদ ইউনূসের নেতৃত্বাধীন অন্তর্বর্তী সরকার এবং […]
                        খবর
                    </p>
                </div>
                <div className="">
                    <div className="w-[200px] ">
                        <img className="h-[200px] w-full object-cover" src="https://i.ibb.co.com/m9Jkh0v/view-University-of-Oxford-England-Oxfordshire.webp " alt="" />
                        <h1 className="text-2xl p-3">
                            স্বস্তি ফিরলেও শঙ্কা কাটেনি বিএনপির
                        </h1>
                        {/* <p className="p-3">
                            ঢাকা: ৫ আগস্টের পট পরিবর্তনের পর কিছুটা স্বাস্তির নিঃশ্বাস ফেললেও ভোটের রাজনীতি নিয়ে এখনো শঙ্কায় বিএনপি। এই শঙ্কা দূর করার শর্টকাট কোনো পথও খুঁজে পাচ্ছে না দলটি।
                            খবর
                        </p> */}
                    </div>
                    <div className="w-[200px] ">
                        <img className="h-[200px] w-full object-cover" src="https://i.ibb.co.com/m9Jkh0v/view-University-of-Oxford-England-Oxfordshire.webp " alt="" />
                        <h1 className="text-2xl p-3">
                            স্বস্তি ফিরলেও শঙ্কা কাটেনি বিএনপির
                        </h1>
                        {/* <p className="p-3">
                            ঢাকা: ৫ আগস্টের পট পরিবর্তনের পর কিছুটা স্বাস্তির নিঃশ্বাস ফেললেও ভোটের রাজনীতি নিয়ে এখনো শঙ্কায় বিএনপি। এই শঙ্কা দূর করার শর্টকাট কোনো পথও খুঁজে পাচ্ছে না দলটি।
                            খবর
                        </p> */}
                    </div>
                </div>
                {/* ad */}
                <div className="relative ">
                    <img className="max-w-[200px] h-full object-cover blur-sm" src="https://i.ibb.co.com/m9Jkh0v/view-University-of-Oxford-England-Oxfordshire.webp" alt="" />
                    <h1 className="text-2xl font-bold top-70 left-20 text-white absolute">Ads</h1>
                </div>
            </div>

        </div>
    );
};

export default NewsCard;