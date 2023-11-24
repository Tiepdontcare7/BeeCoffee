
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className='bg-[#f2edd5] '>
      <div className='container h-auto xl:px-[60px] md:px-[8px] px-[15px]  grid xl:grid-cols-3 md:grid-cols-3 gap-8 lg:grid-cols-3  w-[100%]' >
        <div className="Address block ">
          <div className="w-[250px] pt-[15px] lg:pl-[10px] xl:pl-[20px] xl:mt-[18px] md:pt-[15px] md:w-[200px] ">
            <img src="../../public/images/logo.png" alt="Company Logo" className="w-full" />
          </div>
          <div className="diachi pt-[25px] xl:pl-[20px]">
            <address>
              <a href="https://example.com">
                <FontAwesomeIcon icon={faHome} className="fa-house" />
              </a>
              <span className="pl-[5px]"><strong className='text-[17px] font-bold'>Địa chỉ</strong> : <span className='text-[15px] font-medium'>223 Phúc Diễn - Bắc Từ Liêm - Hà Nội</span></span>
            </address>
            <address className='mt-[3px]'>
              <a href="https://example.com">
                <FontAwesomeIcon icon={faHome} className="fa-house" />
              </a>
              <span className="pl-[5px]"><strong className='text-[17px] font-bold'>Địa chỉ</strong> : <span className='text-[15px] font-medium'>125 Chương Mỹ - Hà Đông - Hà Nội</span></span>
            </address>
            <address className='mt-[3px]'>
              <a href="https://example.com">
                <FontAwesomeIcon icon={faHome} className="fa-house" />
              </a>
              <span className="pl-[5px]"><strong className='text-[17px] font-bold'>Địa chỉ</strong> : <span className='text-[15px] font-medium'>32 Cầu Giấy -  Hà Nội</span></span>
            </address>
            <div className='mt-[3px]'>
              <FontAwesomeIcon icon={faPhone} className="fa-phone" />
              <span className='pt-[8px] pl-[8px]'><strong className='text-[17px] font-bold'>Hotline</strong> : <span className='text-[15px] font-medium'>0366292585</span></span>
            </div>
            <div className='mt-[3px]'>
              <FontAwesomeIcon icon={faEnvelope} className="fa-envelope" />
              <a href="https://www.facebook.com/beeteaandcoffe" target="_blank" rel="noopener noreferrer">
                <span className='pt-[8px] pl-[8px]'><strong className='text-[17px] font-bold'>Email</strong> : <span className='text-[15px] font-medium'>Beemilkteacoffee@gmail.com</span></span>
              </a>
            </div>
            {/* home */}
            <div className='flex pt-[25px]'>
              <a href="https://zalo.com" target="_blank" rel="noopener noreferrer">
                <div className=' flex'>
                  <img src="../../public/images/zalo.jpg" alt="" className='xl:w-[35px] xl:h-[25px] md:w-[15px] md:h-[15px] w-[25px] h-[25px]' />
                  <span className='xl:text-[15px] md:text-[8px] text-[14px] ml-[2px] font-bold xl:pt-[4px] md:pt-[2.5px] '>Zalo</span>
                </div>
              </a>

              <a href="https://youtobe.com" target="_blank" rel="noopener noreferrer">
                <div className='ml-[8px]  flex'>
                  <img src="../../public/images/youtobe.png" alt="" className='xl:w-[35px] xl:h-[25px] md:w-[17px] md:h-[17px] w-[25px] h-[25px]' />
                  <span className='xl:text-[15px] md:text-[8px] text-[14px] font-bold xl:pt-[1px] md:pt-[2.5px]'>Youtube</span>
                </div>
              </a>

              <a href="https://intagram.com" target="_blank" rel="noopener noreferrer">
                <div className='ml-[8px]  flex'>
                  <img src="../../public/images/intagram.png" alt="" className='xl:w-[35px] xl:h-[25px] md:w-[17px] md:h-[17px] w-[25px] h-[25px] ' />
                  <span className='xl:text-[15px] md:text-[8px] text-[14px] font-bold xl:pt-[-1px] md:pt-[2px]'>Instagram</span>
                </div>
              </a>

              <a href="https://www.tiktok.com/@beemilkteacoffee?_t=8hcNQqOLgKl&_r=1" target="_blank" rel="noopener noreferrer">
                <span className='ml-[8px]  flex'>
                  <img src="../../public/images/tiktok.png" alt="" className='xl:w-[35px] xl:h-[25px] md:w-[17px] md:h-[17px] w-[25px] h-[25px] ' />
                  <span className='xl:text-[15px] md:text-[8px] text-[14px] font-bold xl:pt-[-2px] md:pt-[2.5px]'>Tiktok</span>
                </span>
              </a>
            </div>
            {/* icon */}
            <div className='mt-[20px]'>
              <i className="fa-brands fa-facebook xl:text-[22px] md:text-[16px] text-[20px] text-[#999]" title='facebook'></i>
              <i className="fa-brands fa-square-instagram xl:text-[22px] md:text-[16px] text-[20px] mx-[10px] text-[#999]" title='instagram'></i>
              <i className="fa-brands fa-tiktok xl:text-[22px] md:text-[16px] text-[20px] text-[#999]" title='tiktok'></i>
              <i className="fa-solid fa-envelope xl:text-[22px] md:text-[16px] text-[20px] mx-[10px] text-[#999]" title='email'></i>
              <i className="fa-brands fa-youtube xl:text-[22px] md:text-[16px] text-[20px] text-[#999]" title='youtube'></i>
              <i className="fa-solid fa-phone xl:text-[20px] md:text-[15px] text-[19px] ml-[10px] text-[#999]" title='phone'></i>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='best seller block pt-[25px]  w-full xl:mt-[10px] xl:pl-[-20px] '>
          <div>
            <h3 className='xl:text-[26px] md:text-[20px] text-[25px] font-bold text-yellow-600 ' >Sản phẩm bán chạy</h3>
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-5'>
              <div className='blox md:w-[100px] xl:w-[180px] md:mt-[20px] md:ml-[10px] xl:mt-[10px] xl:pl-[-20px] '>
                <div className='xl:pt-[20px] pt-[10px] hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Best seller</span>

                  </a>
                </div>
                <div className='pt-[15px] hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Trà sữa siêu ngon</span>
                    
                  </a>
                </div>
                <div className='pt-[15px] hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Cofeee</span>

                  </a>
                </div>
                <div className='pt-[15px] hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Trà hoa quả</span>

                  </a>
                </div>
              </div>

              <div className='blok md:w-[100px] md:ml-[px] md:mt-[28px] md:mr-[10px] xl:mt-[10px] xl:w-[180px] '>
                <div className='xl:pt-[20px]  hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Best seller</span>

                  </a>
                </div>
                <div className='pt-[15px] hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Trà sữa</span>

                  </a>
                </div>
                <div className='pt-[15px] hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Cofeee</span>

                  </a>
                </div>
                <div className='pt-[15px] hover:text-yellow-600'>
                  <a href="" className=''>   {/* link den san pham  */}
                    <i className="fa-solid fa-angle-right"></i>
                    <span className='text-[16px] ml-[10px]'>Trà hoa quả</span>

                  </a>
                </div>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        {/*  */}

        <div className='pt-[25px] border'>
          <div>
            <h3 className='xl:text-[26px] xl:mt-[12px] md:text-[19px] text-[25px] font-bold text-yellow-600 ' >Phương Thức Thanh Toán</h3>
          </div>
          {/*  */}
          <div>
            <div className='flex mt-[20px]'>
              <div>
                <img src="../../public/images/vietinbank.png" alt="" className='w-[50px] h-[50px]' />
              </div>
              <div className='ml-[10px]'>
                <h3 className='font-bold'>Ngân Hàng Vietinbank</h3>
                <p className='text-[13px] font-medium mt-[5px]'>105873870801 : Tran Thi Thuong</p>
              </div>
            </div>
            {/* vietinbank */}
            <div className='flex mt-[30px]'>
              <div>
                <img src="../../public/images/mbbank.png" alt="" className='w-[50px] h-[50px]' />
              </div>
              <div className='ml-[10px]'>
                <h3 className='font-bold'>Ngân Hàng MB-Bank</h3>
                <p className='text-[13px] font-medium mt-[5px]'>0366292585 : Le Duc Huynh</p>
              </div>
            </div>
            {/* mb bank */}
            <div className='mt-[30px]'>
              <img src="../../public/images/bank.png" alt="" className='xl:w-full xl:h-full md:w-full md:h-[150px]'/>
            </div>
          </div>
          {/* 3 */}
        </div>
      </div>
      <div className='text-center mt-[50px] pb-[20px]'>
        <h3 className='text-[16px]'>Copyright 2023 ©  <strong>Bản quyền thuộc về BEE</strong> </h3>
      </div>
    </div>
  );
};

export default Footer;
