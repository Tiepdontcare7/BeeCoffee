import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; const Chains = () => {
    return <>
        <section className="section-chains grid grid-cols-5 relative bg-[url('/images/bg-ar.jpg')] bg-contain h-auto ">
            <div className="time flex items-center justify-center col-span-2">
                <div className="text-center">
                    <div className="text">
                        <h4 className="text-3xl text-[#ffa300] font-semibold">GIỜ MỞ CỬA:</h4>
                        <p className='py-7'>7am - 11pm<br />
                            Tất cả các ngày trong tuần</p>
                        <p >Hãy ghé Bee để thưởng thức hương vị độc đáo<br />
                            của trà và cà phê ngay nhé!</p>
                        <p className="text-[22px] py-7 text-[#ffa300] font-semibold">&nbsp;———–<br />
                            HOTLINE:<br />
                            0923.069.069</p>

                    </div>

                </div>
            </div>
            <div className="swiper relative col-span-3 m-10">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div>
                            <img className="w-full object-cover" src="/images/IMG-QUAN-BEE-V2.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="/images/IMG-QUAN-BEE-V2.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img src="/images/IMG-QUAN-BEE-V2.jpg" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    </>
}

export default Chains;