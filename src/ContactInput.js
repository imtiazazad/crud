import React from 'react';
import Envalope from "../src/img/envelope-1.png";

const ContactInput = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center bg-[#F9FAFC] gap-3 p-5 w-full mx-auto">
            <div className="w-full relative md:w-3/5 mx-auto">
                <h1 className="text-3xl md:text-7xl font-bold fw-bold capitalize" style={{ fontFamily: "Rajdhani" }}>Get in Touch with <br /> KhaDok</h1>
                <p className="pb-4 pt-2">Consectetur numquam poro nemo veniam
                    eligendi rem adipisci quo modi.</p>
                <div className="w-full md:w-3/6 hidden md:block mx-auto absolute top-12 -right-12 p-10 overflow-hidden">
                    <img draggable="false" style={{ animation: `bounce2 12s infinite`}} src={Envalope} alt="" className="object-cover" />
                </div>
            </div>
            <div className="w-full h-full md:w-2/5 mx-auto bg-white p-3">
                <div className="p-5 w-full border-2 border-dotted">
                    <h3 className="text-center text-2xl font-bold">Send Message</h3>
                    <div className="flex w-full py-7 justify-center items-center">
                        <form action="" className='w-full mx-auto space-y-7'>
                            <div className="relative bg-[#F9FAFC] w-full pt-2 z-0 mt-2">
                                <input type="text" name="name" id="floating_standard" className="block px-5 py-2 rounded w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-transparent appearance-none dark:text-white dark:border-transparent dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-[#ffaa00] peer" placeholder=" " />
                                <label htmlFor="floating_standard" className="absolute text-md text-left pl-3 w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                            </div>
                            <div className="relative bg-[#F9FAFC] w-full pt-2 z-0 mt-2">
                                <input type="email" name="email" id="floating_standard" className="block px-5 py-2 rounded w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-transparent appearance-none dark:text-white dark:border-transparent dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-[#ffaa00] peer" placeholder=" " />
                                <label htmlFor="floating_standard" className="absolute text-md text-left pl-3 w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                            </div>
                            <div className="relative bg-[#F9FAFC] w-full pt-2 z-0 mt-2">
                                <textarea type="text" name="messege" id="floating_standard" className="block px-5 py-2 h-24 rounded w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-transparent appearance-none dark:text-white dark:border-transparent dark:focus:green-blue-500 focus:outline-none focus:ring-0 focus:border-[#ffaa00] peer" placeholder=" " />
                                <label htmlFor="floating_standard" className="absolute text-md text-left pl-3 w-full justify-start flex text-gray-700 dark:text-gray-700 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-gray-600 peer-focus:dark:text-gray-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Messege</label>
                            </div>
                            <p className="text-gray-500 text-center">*We promise not to disclose your <br />
                                personal information to third parties.</p>
                            <div className="w-full flex justify-center">
                                <button type='submit' className="flex hover:cursor-pointer gap-2 justify-center font-semibold items-center bg-[#ffbb33] py-3 px-5"><img src="https://elanta.app/nazar/starbelly-demo/img/ui/icons/arrow.svg" alt="" className="" />SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInput;