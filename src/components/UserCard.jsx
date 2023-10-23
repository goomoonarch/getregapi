import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { IconContext } from "react-icons";

export default function ({ PersonData }) {
  function formatDate(dateString) {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    const mes = hoy.getMonth() - fechaNac.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }
    return edad;
  }

  function toPascalCase(str) {
    return str.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
      return g1.toUpperCase() + g2.toLowerCase();
    });
  }

  return (
    <div>
      <div className="flex flex-col items-start w-[400px] font-SFpro justify-center bg-white shadow-md rounded-[8px] p-4 my-1 border">
        <div className="pt-2 px-6">
          {console.log(PersonData)}
          <h1 className="text-[25px] font-semibold text-blue-gray-700">
            {toPascalCase(
              PersonData.primerApellido + " " + PersonData.primerNombre
            )}
          </h1>
        </div>
        <div className="px-6 pb-2 text-lg text-blue-gray-600">
          {`${[
            PersonData.primerApellido,
            PersonData.segundoApellido,
            PersonData.primerNombre,
            PersonData.segundoNombre
          ].filter(Boolean).map(toPascalCase).join(" ")}`}
        </div>
        <div className="px-[22px] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.4}
            stroke="currentColor"
            className="w-6 stroke-blue-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
            />
          </svg>
          <h1 className="text-[16px] px-2 text-blue-gray-600">
            {formatDate(PersonData.fechaNacimiento)}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 fill-blue-gray-600"
          >
            <path
              fillRule="evenodd"
              d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"
              clipRule="evenodd"
            />
          </svg>
          <h1 className="text-[16px] px-2 text-blue-gray-600">
            {calcularEdad(PersonData.fechaNacimiento)} años
          </h1>
        </div>
        <div className="flex px-[24px] py-1">
          {PersonData.sexo === "M" ? (
            <IconContext.Provider
              value={{ size: "22px", className: "fill-[#546e7a] stroke-[0.4px] stroke-[#546e7a]" }}
            >
              <BsGenderMale />
            </IconContext.Provider>
          ) : (
            <IconContext.Provider
              value={{ size: "22px", className: "fill-[#546e7a] stroke-[0.4px] stroke-[#546e7a]" }}
            >
              <BsGenderFemale />
            </IconContext.Provider>
          )}
          <h1 className="text-[16px] px-[12px] text-blue-gray-600">
            {PersonData.sexo === "M" ? "Masculino" : "Femenino"}
          </h1>
        </div>
      </div>
    </div>
  );
}
