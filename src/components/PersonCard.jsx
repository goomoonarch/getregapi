/* eslint-disable react/prop-types */
import {
  birthFormatter,
  ageCalculator,
  colorized,
} from "../utils";

export const PersonCard = ({ dataResponse }) => {
  const {
    primerApellido,
    segundoApellido,
    primerNombre,
    segundoNombre,
    fechaNacimiento,
    sexo,
  } = dataResponse;
  const formatDate = birthFormatter(fechaNacimiento);
  const age = ageCalculator(fechaNacimiento);
  const sexColorized = colorized(sexo);

  const formatAge = (age) => {
    const meses = age.meses === 0 ? "mes" : "meses";
    const mes =
      age.meses === 0
        ? "0 meses"
        : age.meses < 10
        ? `0${age.meses}`
        : age.meses;
    return `${age.años} años, ${mes} ${meses} y ${age.días} días`;
  };

  return (
    <>
      <div className="flex sm:mx-0 sm:translate-x-0 translate-x-3">
        <div
          id="userinfoheader"
          className="flex justify-center items-center w-[52px] rounded-[2px]"
          style={{ backgroundColor: sexColorized.lmcolor }}
        >
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: sexColorized.iconconlor }}
          >
            <g clipPath="url(#clip0_48_27)">
              <path
                d="M23.9062 11.9531C23.9062 18.4805 18.4922 23.9062 11.9531 23.9062C5.42578 23.9062 0 18.4805 0 11.9531C0 5.41406 5.41406 0 11.9414 0C18.4805 0 23.9062 5.41406 23.9062 11.9531ZM4.74609 19.1133C6.53906 21.0234 9.25781 22.125 11.9414 22.125C14.6367 22.125 17.3438 21.0234 19.1484 19.1133C17.8711 17.0977 15.0938 15.9492 11.9414 15.9492C8.76562 15.9492 6.01172 17.1211 4.74609 19.1133ZM7.92188 9.53906C7.92188 12.0586 9.69141 13.9336 11.9414 13.957C14.2031 13.9805 15.9609 12.0586 15.9609 9.53906C15.9609 7.17188 14.1914 5.20312 11.9414 5.20312C9.70312 5.20312 7.91016 7.17188 7.92188 9.53906Z"
                fillOpacity="0.85"
              />
            </g>
            <defs>
              <clipPath id="clip0_48_27">
                <rect width="24.2578" height="23.918" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div
          className="flex flex-col ml-[11px]"
          style={{ backgroundColor: sexColorized.bgcolor }}
        >
          {dataResponse && (
            <div>
              <div id="fullname" className="text-[16px] text-[#292929]"></div>
              <div id="lastname" className="leading-4">
                {primerApellido +
                  " " +
                  (segundoApellido ? segundoApellido : "")}
              </div>
              <div id="firstname">
                {primerNombre + " " + (segundoNombre ? segundoNombre : "")}
              </div>
              <div id="sex" className="text-[15px] text-[#656565]">
                {sexo === "M" ? "Masculino" : "Femenino"}
              </div>
              <div id="date" className="text-[15px] text-[#656565] ">
                {formatDate}
              </div>
              <div id="fullage" className="text-[15px] text-[#6c6c6e]">
                {formatAge(age)}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
