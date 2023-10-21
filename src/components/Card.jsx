import React from "react";
import cloud from "../assets/cloud_icon_ambar_yellow.png";
import girld_sat from "../assets/girld_sat_searching_wb.png";

const Card = () => {
  return (
    <div className="bg-[#f5f5f7] relative my-6 rounded-[15px] text-gray-800  h-[700px] w-[400px]">
      <h1 className="text-3xl text-center font-SFpro font-black pt-10">
        Carga masiva
      </h1>
      <h1 className="text-3xl text-center font-SFpro font-black">
        en tiempo real.
      </h1>
      <div className="py-6 flex justify-center items-center">
        <img src={cloud} alt="cloud_icon" width={55} />
      </div>
      <p className="text-center text-[#86868b] font-SFpro px-16 text-[16px]">
        Sin tiempos de espera, información que se refleja en PAIWEB
        inmediatamente y a prueba de errores.
      </p>
      <img
        src={girld_sat}
        alt="gild_sat_img"
        className="rounded-[15px] absolute top-0 left-0 w-full h-full object-cover z-0"
      />
    </div>
  );
};

export default Card;
