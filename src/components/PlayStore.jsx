import React from "react";
import { LuMessageCircleMore } from "react-icons/lu";

function PlayStore(){
    return(
        <div className="mt-[500px] bg-[#FFF7E2]">
            <div className="h-[707px] flex flex-row justify-evenly">
                <div>
                    <h1>Download Amrutam Ayurveda App Now</h1>
                    <p>The Amrutam Ayurveda App is your one-stop app for all things Ayurveda! Apart from mimicking the website, the app has added benefits</p>
                    <div className="inline-flex ">
                        <div>
                            <span>
                                <span>
                                    <LuMessageCircleMore />

                                </span>
                                <p></p>
                            </span>
                        </div>
                        

                    </div>

                </div>
                <div>
                    <div className=" relative  rounded-full bg-[#DFDFC7] w-[283px] h-[283px]"><img className="absolute top-[-64.04px] left-[38.42px] object-cover   h-[401.93px] w-[218.35px]" src="/images/phone.png" alt="" /></div>
                    

                </div>

            </div>
            

        </div>

    );
}
export default PlayStore;