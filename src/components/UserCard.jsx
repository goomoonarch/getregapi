import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { IconContext } from "react-icons";
import Divipola from "../assets/Divipola.json";
import ERAsegState from "../assets/ERAsegState.json";
import ERAsegEmpty from "./ERAsegEmpty";
import UserSqueleton from "./UserSqueleton";
import ERAsegSqueleton from "./ERAsegSqueleton";

export default function ({
  PersonData,
  ERAsegData,
  showERAsegCard,
  showUserCard,
  showERAsegWarning,
}) {
  function getMunicipioName(codigoDivipola) {
    const municipio = Divipola.find(
      (municipio) => municipio.cod_mpio === codigoDivipola
    );
    return municipio ? municipio.nom_mpio : null;
  }

  function getDepartamentoName(departamentoAfiliacion) {
    const departamento = Divipola.find(
      (departamento) => departamento.cod_depto === departamentoAfiliacion
    );
    return departamento ? departamento.dpto : null;
  }

  function getERAsegState(estadoAfiliacion, ERAsegState) {
    const state = ERAsegState.find(
      (state) => state.estadoSG === estadoAfiliacion
    );
    return state ? state.estadoName : null;
  }

  function getERAsegClass(estadoAfiliacion) {
    let className = [];
    switch (estadoAfiliacion) {
      case "AC":
        className = {
          chirp:
            "flex justify-left items-center pl-2 pr-3 py-1 bg-[#F0FDF4] text-[#4ADE80] rounded-md text-[14px] font-regular",
          text: "text-[#166534]",
        };
        break;
      case "AF":
        className = {
          chirp:
            "flex justify-left items-center pl-2 pr-3 py-1 bg-[#FEF2F2] text-[#F87171] rounded-md text-[14px] font-regular",
          text: "text-[#B91C1C]",
        };
        break;
      case "DE":
        className = {
          chirp:
            "flex justify-left items-center pl-2 pr-3 py-1 text-[#334155] bg-[#F1F5F9] rounded-md text-[14px] font-regular",
          text: "text-blue-gray-700",
        };
        break;
      case "PL":
        className = {
          chirp:
            "flex justify-left items-center pl-2 pr-3 py-1 bg-[#F0FDF4] text-[#4ADE80] rounded-md text-[14px] font-regular",
          text: "text-[#166534]",
        };
        break;
      case "RE":
        className = {
          chirp:
            "flex justify-left items-center pl-2 pr-3 py-1 text-[#334155] bg-[#F1F5F9] rounded-md text-[14px] font-regular",
          text: "text-blue-gray-700",
        };
        break;
      case "SM":
        className = {
          chirp:
            "flex justify-left items-center pl-2 pr-3 py-1 text-[#FACC15] bg-[#FEFCE8] rounded-md text-[14px] font-regular",
          text: "text-[#854D0E]",
        };
        break;
      case "SD":
        className = {
          chirp:
            "flex justify-left items-center pl-2 pr-3 py-1 text-[#FACC15] bg-[#FEFCE8] rounded-md text-[14px] font-regular",
          text: "text-[#854D0E]",
        };
        break;
    }
    return className;
  }

  function getRegimenName(regimenAfiliacion) {
    const regimen = regimenAfiliacion === "C" ? "Contributivo" : "Subsidiado";
    return regimen;
  }

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
    console.log(str);
    return str.replace(
      /([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ])([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ]*)/g,
      function (g0, g1, g2) {
        return g1.toUpperCase() + g2.toLowerCase();
      }
    );
  }

  return (
    <div>
      <div className="flex flex-col items-start w-[350px] sm:w-[400px] font-SFpro justify-center rounded-[10px] bg-[#f6f6f64a] p-4">
        {/*<---------------- UserCardSubComponent!---------------------->*/}
        {showUserCard ? (
          <>
            <div className="flex pt-2 px-[4px] items-center">
              <div className="pr-[4px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.0}
                  stroke="currentColor"
                  className="w-[32px] stroke-blue-gray-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              <h1 className="text-[25px] font-semibold text-blue-gray-700">
                {toPascalCase(
                  PersonData.primerApellido + " " + PersonData.primerNombre
                )}
              </h1>
            </div>
            <div className="pl-[40px] pb-2 text-lg text-blue-gray-600">
              {`${[
                PersonData.primerApellido,
                PersonData.segundoApellido,
                PersonData.primerNombre,
                PersonData.segundoNombre,
              ]
                .filter(Boolean)
                .map(toPascalCase)
                .join(" ")}`}
            </div>
            <div className="pl-[40px] flex">
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
            <div className="flex pl-[40px] py-1">
              {PersonData.sexo === "M" ? (
                <IconContext.Provider
                  value={{
                    size: "22px",
                    className: "fill-[#546e7a] stroke-[0.4px] stroke-[#546e7a]",
                  }}
                >
                  <BsGenderMale />
                </IconContext.Provider>
              ) : (
                <IconContext.Provider
                  value={{
                    size: "22px",
                    className: "fill-[#546e7a] stroke-[0.4px] stroke-[#546e7a]",
                  }}
                >
                  <BsGenderFemale />
                </IconContext.Provider>
              )}
              <h1 className="text-[16px] px-[12px] text-blue-gray-600">
                {PersonData.sexo === "M" ? "Masculino" : "Femenino"}
              </h1>
            </div>
          </>
        ) : (
          <UserSqueleton />
        )}
        <div className="pt-3 pl-10">
          <div className="bg-blue-gray-200 h-[2px] w-[250px] sm:w-[300px] rounded-full" />
        </div>
        {/*<---------------- ERAsegSubComponent!---------------------->*/}
        {showERAsegCard ? (
          <>
            {ERAsegData.codigoRespuesta === "01" ? (
              <div className="pt-0 pb-4">
                <div className="flex pt-2 px-[4px] items-center">
                  <div className="pl-[26px]"></div>
                  <div className="pl-2 pb-1">
                    <div
                      className={
                        getERAsegClass(ERAsegData.estadoAfiliacion).chirp
                      }
                    >
                      <div>
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.0}
                          stroke="currentColor"
                          className="w-4 animate-pulse"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                        </svg>
                      </div>
                      <div
                        className={
                          getERAsegClass(ERAsegData.estadoAfiliacion).text
                        }
                      >
                        {getERAsegState(
                          ERAsegData.estadoAfiliacion,
                          ERAsegState
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pl-[40px] pr-2 text-blue-gray-600">
                  {ERAsegData.nombreEPS}
                </div>
                <div className="flex items-center">
                  <div className="pl-[40px] pr-3 text-blue-gray-700 font-bold">
                    {getRegimenName(ERAsegData.regimenAfiliacion)}
                  </div>
                </div>
                <div id="location" className=" flex px-[36px]">
                  <div id="location_icon" className="translate-y-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 stroke-blue-gray-600"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <div className="pl-[5px] pr-[5px] items-center justify-center text-blue-gray-600">
                      {toPascalCase(
                        getMunicipioName(ERAsegData.codigoDivipola)
                      )}
                    </div>
                    <div className="pl-[5px] pr-[5px] items-center justify-center text-blue-gray-600 translate-y-[-5px]">
                      {toPascalCase(
                        getDepartamentoName(ERAsegData.departamentoAfiliacion)
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : ERAsegData.codigoRespuesta === "02" ? (
              <ERAsegEmpty />
            ) : null}
          </>
        ) : (
          <ERAsegSqueleton />
        ) }
      </div>
    </div>
  );
}
