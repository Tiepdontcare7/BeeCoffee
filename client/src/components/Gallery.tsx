const Gallery = () => {
    return <>
        <section className="section-gallery bg-[url('/images/bg-img.jpg')] h-auto py-12">
            <div className="row ">
                <div className="title mx-auto text-center">
                    <h3 className="font-bold text-4xl text-[#f2b10b]">HÌNH ẢNH QUÁN BEE</h3>
                    <img className="mx-auto text-center" src="/images/ngoi-sao.jpg" alt="" />
                </div>
            </div>
            <div className="row  ">
                <div className="col grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center">
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.1.jpg" alt="" />
                    </div>
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.4.jpg" alt="" />
                    </div>
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.5.jpg" alt="" />
                    </div>
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.6.jpg" alt="" />
                    </div>
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.7.jpg" alt="" />
                    </div>
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.8.jpg" alt="" />
                    </div>
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.9.jpg" alt="" />
                    </div>
                    <div className="col-item w-64 h-64 flex items-center justify-center rounded-2xl my-4 overflow-hidden">
                        <img className="object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500"
                            src="/images/img-bee-v1.10.jpg" alt="" />
                    </div>

                </div>
            </div>
        </section>
    </>
}

export default Gallery;