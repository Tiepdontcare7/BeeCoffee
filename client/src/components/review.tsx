

export const Review = () => {
    return (
        <div className="w-[100%]">
            {/* review */}
            <div>
                <div className="font-sans">
                    <h3 className="text-center text-[#f2b10b] text-4xl mb-4 pt-[50px] uppercase font-bold">KHÁCH HÀNG NÓI VỀ BEE MILKTEA COFFEE</h3>
                    <img src="../../public/images/ngoi-sao.png" alt="" className="mx-auto  uppercase font-bold h-[15px]" />
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[50px] mx-[30px] ">
                    <div className="text-center ">
                        <img src="../../public/images/review-001.jpg" alt="" className=" xl:w-[290px] xl:h-[290px] lg:w-[280px] lg:h-[280px] md:w-[270px] md:h-[270px] w-[260px] h-[260px]  mx-auto" />
                        <div className="my-[10px]">
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                        </div>
                        <h3 className="font-sans font-bold italic text-[20px]">TRẦN NHƯ QUỲNH</h3>
                        <p className="mt-[10px] leading-5 italic xl:font-normal text-gray-600 xl:text-[16px]   text-[19px] font-normal">Trà Sữa của BeeteaCoffee đa dạng và thú vị. Hương vị độc đáo, kết hợp tinh tế và chất lượng phục vụ chuyên nghiệp, tạo nên trải nghiệm tuyệt vời cho khách hàng…</p>
                    </div>
                    {/* name1 */}
                    <div className="text-center">
                        <img src="../../public/images/review-003.webp" alt="" className=" xl:w-[290px] xl:h-[290px] lg:w-[280px] lg:h-[280px] md:w-[270px] md:h-[270px] w-[260px] h-[260px] mx-auto" />
                        <div className="my-[10px]">
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                        </div>
                        <h3 className="font-sans font-bold italic text-[20px]">NGUYỄN TRUNG HẢI</h3>
                        <p className="mt-[10px] leading-5 italic xl:font-normal xl:text-[17px] text-gray-600 text-[19px] font-normal">Đồ uống của BeeteaCoffee đa dạng và phong phú. Hương vị độc đáo, chất lượng tuyệt vời, và tạo cảm giác sảng khoái. Dịch vụ tận tâm và hiệu quả, tạo nên trải nghiệm thú vị cho khách hàng…</p>
                    </div>
                    {/* name2 */}
                    <div className="text-center">
                        <img src="../../public/images/review-002.jpg" alt="" className=" xl:w-[290px] xl:h-[290px] lg:w-[280px] lg:h-[280px] md:w-[270px] md:h-[270px] w-[260px] h-[260px] mx-auto" />
                        <div className="my-[10px]">
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                            <i className="fa-solid fa-star text-[#e67e22]"></i>
                        </div>
                        <h3 className="font-sans font-bold italic text-[20px]">TRẦN THỊ QUỲNH ANH </h3>
                        <p className="mt-[10px] leading-5 italic xl:font-normal xl:text-[17px] text-gray-600 text-[19px] font-normal">Đồ uống của BeeteaCoffee độc đáo, thú vị và tinh tế. Hương vị tuyệt hảo, chất lượng nguyên liệu cao cấp, và dịch vụ chuyên nghiệp tạo nên trải nghiệm đáng nhớ…</p>
                    </div>
                    {/* name 3 */}
                </div>
            </div>

            {/* new  */}
            <div className="bg-[#e6e9eb] h-auto mt-[50px] cursor-pointer">
                <div className="font-sans">
                    <h3 className="text-center text-[#f2b10b] text-4xl pt-[50px] uppercase font-bold mb-4">TIN TỨC</h3>
                    <img src="../../public/images/ngoi-sao.png" alt="" className="mx-auto text-[35px] uppercase font-bold h-[15px] " />
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5 mt-[15px] mx-[30px] ">
                    <div className="text-center mt-[35px]">
                        <div className="overflow-hidden ">
                            <img src="/images/new-001.png" alt="" className=" xl:w-full xl:h-[290px] lg:w-[280px] lg:h-[280px] md:w-full md:h-[300px] w-[260px] h-[260px] transform transition-transform duration-300 hover:scale-110 mx-auto flex cursor-pointer" />
                        </div>
                        <h3 className="font-sans font-bold italic text-[20px] mt-5">  BEE RA MẮT “TOPPING MỚI” SIÊU HOT - ... </h3>
                        <p className="mt-[10px] leading-5 italic text-[#0A0A0A] font-normal"> 𝐓𝐚̣̆𝐧𝐠 THẠCH MIỄN PHÍ 𝐤𝐡𝐢 𝐨𝐫𝐝𝐞𝐫 𝟑 𝐧𝐡𝐨́𝐦 𝐭𝐫𝐚̀ – 𝐧𝐮̛𝐨̛́𝐜 𝐧𝐡𝐚̀ 𝐁𝐞𝐞! Chào cả nhà, cũng đã lâu rồi [...] </p>
                    </div>
                    {/* name1 */}
                    <div className="text-center mt-[35px]">
                        <div className="overflow-hidden">
                            <img src="/images/new-002.jpg" alt="" className=" xl:w-full xl:h-[290px] lg:w-[280px] lg:h-[280px] md:w-full md:h-[300px] w-[260px] h-[260px] transform transition-transform hover:scale-110 duration-300 mx-auto cursor-pointer" />
                        </div>
                        <h3 className="font-sans font-bold italic text-[20px] mt-5">VÌ SAO NÊN ĐẦU TƯ THIẾT KẾ QUÁN CÀ PHÊ?</h3>
                        <p className="mt-[10px] leading-5 italic xl:font-normal xl:text-[17px]  text-[19px] font-normal">Một bài viết tìm hiểu vì sao đầu tư thiết kế quán cà phê là một quyết định quan trọng [...]</p>
                    </div>
                    {/* name2 */}
                    <div className="text-center mt-[35px] ">
                        <div className="overflow-hidden ">
                            <img src="/images/new-003.jpg" alt="" className=" xl:w-full xl:h-[290px] lg:w-[280px] lg:h-[280px] md:w-full md:h-[300px] w-[260px] h-[260px] hover:scale-110 transform transition-transform duration-300 mx-auto cursor-pointer" />
                        </div>
                        <h3 className="font-sans font-bold italic text-[20px] mt-5">Bee Coffee & Tea – Không chỉ đơn thuần làm ...</h3>
                        <p className="mt-[10px] leading-5 italic xl:font-normal xl:text-[17px]  text-[19px] font-normal">Không đơn thuần chỉ là một chuỗi cà phê phục vụ thức uống chất lượng, thơm ngon, đi đôi với [...]</p>
                    </div>
                    {/* name 3 */}
                </div>

                <div className="flex flex-wrap mt-8">
                    <div className="flex flex-col w-full md:w-1/2 lg:w-[260px] xl:w-[340px] xl:flex mb-8 lg:flex xl:mx-[30px] md:mx-[15px] xl:ml-[20px] lg:ml-[20px] rounded-lg overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid">
                        <div className="flex w-full h-40 bg-white md:flex">
                            <div className="w-1/4 h-full pt-8">
                                <img src="../../public/images/icon-01.png" alt="" className="w-full" />
                            </div>
                            <div className="w-2/3 pl-2">
                                <p className="text-black font-bold pt-2">Tình yêu với bee</p>
                                <p className="pt-2">Bee milk tea & coffee tạo nên những sản phẩm tuyệt vời hương vị khó quên và một trải nghiệm đáng nhớ</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex flex-col w-full md:w-1/2 lg:w-[260px] xl:w-[340px] mb-8 md:flex rounded-lg overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid ">
                        <div className="flex w-full h-40 bg-white md:flex">
                            <div className="w-1/4 h-full pt-8">
                                <img src="../../public/images/icon-02.png" alt="" className="w-full" />
                            </div>
                            <div className="w-2/3 pl-2">
                                <p className="text-black font-bold pt-2">Sản phẩm</p>
                                <p className="pt-2">Chúng tôi tự hào đó chính là chất lượng hương vị đặc biệt của mỗi ly nước mà chúng tôi làm ra</p>
                            </div>
                        </div>
                    </div>



                    <div className="flex flex-col w-full md:w-1/2 lg:w-[260px] xl:w-[340px] mb-8 md:flex xl:ml-[30px] md:ml-[15px] rounded-lg overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid">
                        <div className="flex w-full h-40 bg-white md:flex">
                            <div className="w-1/4 h-full pt-8">
                                <img src="../../public/images/icon-03.png" alt="" className="w-full" />
                            </div>
                            <div className="w-2/3 pl-2">
                                <p className="text-black font-bold pt-2">Nguyên liệu</p>
                                <p className="pt-2">Sử dụng những nguyên liệu sạch có nguồn gốc xuất xứ rõ hàng tự hào nông sản Việt</p>
                            </div>
                        </div>
                    </div>




                    <div className="flex flex-col w-full md:w-1/2 lg:w-[260px] xl:w-[340px] mb-8 md:flex md:mr[30px] xl:ml-[30px] md:ml-[15px] rounded-lg overflow-hidden border-dashed border-2 border-yellow-500 hover:border-solid">
                        <div className="flex w-full h-40 bg-white md:flex">
                            <div className="w-1/4 h-full pt-8">
                                <img src="../../public/images/icon-04.png" alt="" className="w-full" />
                            </div>
                            <div className="w-2/3 pl-2">
                                <p className="text-black font-bold pt-2">Giao hàng</p>
                                <p className="pt-2">Giao hành nhanh chóng qua các App trực tuyến , Fanpage và số Hotline của cửa hàng 0366292585</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
