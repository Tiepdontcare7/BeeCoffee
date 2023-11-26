const Introduce = () => {
    return (
        <section className="bg-white py-16">
            <div className="text-center">
                <h2 className="font-bold text-4xl mb-4 text-[#f2b10b]">Giới thiệu</h2>
                <div>
                    <img className="block mx-auto" src="/images/ngoi-sao.jpg" alt="" />
                </div>
            </div>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-bold tracking-tight leading-none md:text-5xl xl:text-2xl">
                        Câu chuyện thương hiệu Bee Tea&coffee:
                    </h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-lg">
                        Năm 2018, tại thành phố Đà Nẵng xinh đẹp của Việt Nam, một thương hiệu trà sữa và cà phê độc đáo
                        đã nở rộ – Bee ra đời. Thương hiệu này mang trong mình một câu chuyện đầy cảm hứng và tình yêu
                        với đất nước, và nó đã bắt đầu từ tấm lòng và tài năng của nhà sáng lập. Họ có một tình yêu đặc
                        biệt với trà và cà phê, và họ luôn muốn chia sẻ vị ngon và tinh tế này đến cho mọi người. Không
                        chỉ vậy, họ đặt ra mục tiêu sử dụng nguyên liệu trà và cà phê sạch được sản xuất tại Việt Nam để
                        ủng hộ nền kinh tế địa phương và đảm bảo chất lượng sản phẩm.
                    </p>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center rounded-lg bg-yellow-500 text-white hover:opacity-90 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    >
                        Get started
                        <svg
                            className="w-5 h-5 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100"
                    >
                        Speak to Sales
                    </a>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="/images/IMG-GT-01.jpg" alt="mockup" />
                </div>
            </div>
        </section>
    );
};

export default Introduce;
