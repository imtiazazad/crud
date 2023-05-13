import React from 'react';

const ContactAddress = () => {
    return (
        <div className='container py-20 grid grid-cols-1 md:grid-cols-3 gap-3 w-full mx-auto'>
            <div className="flex justify-start md:justify-center gap-2 px-5 py-1 w-full items-center">
                <div className="">
                    <h3 className="text-3xl md:text-5xl text-[#ffaa00] capitalize" style={{ fontFamily: "Monoton" }}>01</h3>
                </div>
                <div className="flex flex-col py-1 px-3 gap-2">
                    <h3 className="font-bold text-xl md:text-2xl capitalize">Welcome</h3>
                    <h3 className="capitalize text-sm md:text-md">9 W 53rd St, New York, NY 10019, USA</h3>
                </div>
            </div>
            <div className="flex justify-start md:justify-center gap-2 px-5 py-1 w-full items-center">
                <div className="">
                    <h3 className="text-3xl md:text-5xl text-[#ffaa00] capitalize" style={{ fontFamily: "Monoton" }}>02</h3>
                </div>
                <div className="flex flex-col py-1 px-3 gap-2">
                    <h3 className="font-bold text-xl md:text-2xl capitalize">Call</h3>
                    <h3 className="capitalize text-sm md:text-md">+02 (044) 756-X6-52</h3>
                </div>
            </div>            
            <div className="flex justify-start md:justify-center gap-2 px-5 py-1 w-full items-center">
                <div className="">
                    <h3 className="text-3xl md:text-5xl text-[#ffaa00] capitalize" style={{ fontFamily: "Monoton" }}>03</h3>
                </div>
                <div className="flex flex-col py-1 px-3 gap-2">
                    <h3 className="font-bold text-xl md:text-2xl capitalize">Write</h3>
                    <h3 className="capitalize text-sm md:text-md">khadok@mail.com</h3>
                </div>
            </div>
        </div>
    );
};

export default ContactAddress;