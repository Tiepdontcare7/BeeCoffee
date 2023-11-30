// import { useState } from 'react';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';

const Header = () => {
    const megaE = useRef(null);
    console.log(megaE.current);

    const [srollY, setScrollY] = useState(0);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showSearch, setShowSearch] = useState(false);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (srollY > lastScrollY && srollY > 100) {
            megaE.current?.classList?.add('hidden');
        } else if (scrollY < lastScrollY) {
            megaE.current?.classList?.remove('hidden');
        }
        setLastScrollY(scrollY);
    }, [srollY]);

    return (
        <div>
            <header
                ref={megaE}
                className="mx-auto w-full max-w-screen-2xl fixed top-0 z-50 transition-all duration-700  ease-in-out bg-white"
            >
                <div ref={megaE} className={' flex justify-between p-2 w-full bg-[#2e2f31]'}>
                    <ul className="flex">
                        <div className="flex justify-center gap-3 text-white ml-3">
                            <li className="group flex">
                                <a href="" className="flex items-center gap-2 uppercase font-semibold text-sm">
                                    <i className="fa-solid fa-location-dot"></i>Location
                                </a>
                                <ul className="absolute hidden group-hover:block bg-black mt-1 p-2 px-3 rounded-md z-20 transition-all duration-500 left-0 top-12">
                                    <div className="absolute -translate-y-5 translate-x-12 text-black">
                                        <i className="fa-solid fa-caret-down fa-rotate-180"></i>
                                    </div>
                                    <div className="text-sm">
                                        <li>
                                            <a href="">168 Trung Hòa, Mai Dịch, Cầu Giấy,Hà Nội</a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="group flex">
                                <a
                                    href=""
                                    className="flex justify-items-center items-center gap-2 uppercase font-semibold text-sm"
                                >
                                    <i className="fa-regular fa-envelope"></i>Email
                                </a>
                                <ul className="absolute hidden group-hover:block bg-black mt-1 p-2 px-3  text-white rounded-md z-20 left-13 top-12">
                                    <div className="absolute -translate-y-5 translate-x-6 text-black">
                                        <i className="fa-solid fa-caret-down fa-rotate-180"></i>
                                    </div>
                                    <div className="text-sm">
                                        <li>
                                            <a href="">name@gmail.com</a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                            <li className="group flex">
                                <a href="" className="flex items-center gap-2 uppercase font-semibold text-sm">
                                    <i className="fa-solid fa-phone"></i>0123.456.789
                                </a>
                                <ul className="absolute hidden group-hover:block bg-black mt-1 p-2 px-3  text-white rounded-md z-20 left-13 top-12">
                                    <div className="absolute -translate-y-5 translate-x-6 text-black">
                                        <i className="fa-solid fa-caret-down fa-rotate-180"></i>
                                    </div>
                                    <div className="text-sm">
                                        <li>
                                            <a href="">0123.456.789</a>
                                        </li>
                                    </div>
                                </ul>
                            </li>
                        </div>
                    </ul>

                    <div className="text-white px-4 text-sm flex">
                        <Marquee speed={50} gradient={false} pauseOnHover={true}>
                            <Marquee pauseOnHover={true}>
                                Quán Cà Phê, Trà Sữa Bee - thỏa mãn vị giác, tạo không gian ấm áp, mang lại trải nghiệm
                                thư giãn và độc đáo. Bee là điểm đến lý tưởng cho mọi người.
                            </Marquee>
                        </Marquee>
                    </div>
                    <div
                        className="relative flex flex-row-reverse gap-2 justify-center items-center"
                        style={{ transition: 'all 0.3s', animation: 'fadeIn 0.5s' }}
                    >
                        <a className="bg-[#f2b10b] p-1 px-2 rounded-md mr-2 " onClick={() => setShowSearch(!showSearch)}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        {showSearch && (
                            <div
                                className="right-0 bg-white rounded-md shadow-md"
                                style={{ transition: 'all 0.8s', animation: 'fadeIn 0.5s' }}
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="border border-gray-300 p-1 rounded-md"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <nav className="flex flex-row justify-around items-center p-2 relative">
                    <a href="#" className="basis-2/6 text-left">
                        <img className="w-2/3" src="/images/logo.png" alt="" />
                    </a>
                    <ul className="basis-3/6  flex items-center justify-end gap-8 uppercase text-sm text-black-600 font-bold -mr-32">
                        <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
                            <a href="#" className="">
                                Trang chủ
                            </a>
                        </li>
                        <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
                            <a href="#" className="">
                                Giới thiệu
                            </a>
                        </li>
                        <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
                            <a href="#" className="">
                                Sản phẩm
                            </a>
                        </li>
                        <li className="group py-1 transition delay-75 group-hover:text-[#f2b10b] after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
                            <a href="#" className="hover:text-[#f2b10b]">
                                Menu Bee
                            </a>
                            {/* Mega Menu */}
                            <ul className="absolute hidden group-hover:block bg-[#ffffffa1] text-black right-0 border-[2px] border-[#f2b10b] rounded-2xl w-3/5 group-hover:mt-1 transition-all duration-500">
                                    <div className="absolute -translate-y-4 translate-x-96 text-[#f2b10b]">
                                        <i className="fa-solid fa-chevron-up"></i>
                                    </div>
                                <div className="grid grid-cols-4 ">
                                    <li>
                                        <a
                                            href=""
                                            className="block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Best-Seller
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="  block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Trà sữa
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="  block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Coffee
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href=""
                                            className="  block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Trà hoa quả
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className=" block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Olong
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className=" block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Sữa tươi
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href=""
                                            className="  block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Trà trái cây
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="  block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Món nóng
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href=""
                                            className="  block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Đá xay
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href=""
                                            className=" block p-2 hover:text-[#f2b10b] transition-all duration-150"
                                        >
                                            <i className="fa-solid fa-caret-right m-2"></i>
                                            Món khác
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </li>

                        <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
                            <a href="#" className="">
                                Tin tức
                            </a>
                        </li>
                        <li className="py-1 transition delay-75 hover:text-[#f2b10b] relative after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300">
                            <a href="#" className="">
                                Liên hệ
                            </a>
                        </li>
                    </ul>

                    <ul className="basis-3/6 lg:basis-1/6 flex justify-end text-sm text-black font-medium">
                        <li className="after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-coffee-200 after:lg:h-0.5 after:lg:w-0 hover:after:lg:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300;">
                            <a href="#" className="flex gap-2 items-center font-bold rounded-md p-1 px-4 bg-[#f2b10b]">
                                <span className="underline">0 đ</span>
                                <i className="fa-solid fa-bag-shopping text-center"></i>
                            </a>
                        </li>
                    </ul>

                    <div className="basis-1/6 lg:hidden flex items-center cursor-pointer px-3 sm:px-8">
                        <svg
                            id="tqd-toggle-top-menu-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            className=" w-7 h-7 inline-block;"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;
