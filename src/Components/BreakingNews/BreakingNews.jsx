import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosSecure";
import { data, Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { FreeMode, Autoplay, Pagination, Navigation } from 'swiper/modules';

const BreakingNews = ({ title }) => {
    const axiosnPublic = useAxiosPublic()
    const { data: news = [] } = useQuery({
        queryKey: ["news", axiosnPublic],
        queryFn: async () => {
            const { data } = await axiosnPublic.get("/news")
            return data
        }
    })

    return (
        <div>
            {
                title &&
                <h1 className="text-2xl font-semibold  bg-rose-600 text-white w-fit mx-auto mb-5 p-5  ">{title}</h1>
            }
            {/*  */}
            <Swiper

                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1280: {
                        slidesPerView: 4,
                    },
                }}
                // spaceBetween={5}
                // pagination={{
                //     type: 'fraction',
                // }}
                // navigation={true}
                freeMode={true}
                modules={[FreeMode, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    news?.map((newsItem) =>
                        <SwiperSlide className=" ">
                            <div key={newsItem?._id} className=" text-center rounded bg-blue-200 hover:bg-amber-100 group w-52 h-76">

                                <Link to={`news/${newsItem?._id}`}
                                    className="group-hover:text-blue-600">
                                    <div className="overflow-hidden rounded">
                                        <img className="w-full h-44 mx-auto object-cover rounded-t group-hover:scale-110 duration-500 transition ease-in-out" src={newsItem?.imageUrl} alt="" />
                                    </div>
                                    <h1 className="w-44 mx-auto mt-2">{newsItem?.title}</h1>

                                </Link>

                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            {/*  */}
            {/* <div className="flex justify-center gap-4">


            </div> */}
        </div>
    );
};

export default BreakingNews;