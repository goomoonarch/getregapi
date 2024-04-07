/* eslint-disable react/prop-types */
import { birthFormatter, toTitleCase, ageCalculator } from "../utils";
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

  return (
    <>
      <div className="flex justify-center pt-2 font-Inter" id="usercard">
        <div className="flex flex-col pl-12 bg-[#fcfcfc] w-[400px] rounded-[8px] p-[8px]">
            <div id="fullname" className="font-normal text-[16px] text-[#1d1d1d]">{`${toTitleCase(primerApellido)} ${segundoApellido ? toTitleCase(segundoApellido) : ''} ${toTitleCase(primerNombre)} ${segundoNombre ? toTitleCase(segundoNombre) : ''}`}</div>
            <div id="sex" className="font-light text-[15px] text-[#898a8d] leading-4">{sexo === 'M' ? 'Masculino' : 'Femenino'}</div>
            <div id="date" className=" font-light text-[14px] text-[#898a8d] ">{formatDate}</div>
            <div id="fullage" className="font-light text-[14px] text-[#898a8d] leading-none">{age.años} years {age.meses} months and {age.días} days</div>
        </div>
      </div>
    </>
  );
};
