/* eslint-disable react/prop-types */
import { birthFormatter, ageCalculator, colorized } from "../utils";
export const PersonCard = ({ dataResponse}) => {

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

  return (
    <>
    <div className="text-[#1d1d1f]">Información de Usuario</div>
    <div className="flex">
    <div id="userinfoheader" className="flex justify-center items-center w-[40px] h-full" style={{backgroundColor: sexColorized.lmcolor}}>
    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#ffffff"  strokeWidth="1.75"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle" style={{stroke: sexColorized.iconconlor}}><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" /></svg>
    </div>
    <div className="flex flex-col px-2 py-2 w-[300px]" style={{backgroundColor: sexColorized.bgcolor}}>
    {dataResponse && <div>      
            <div id="fullname" className="font-normal text-[15px] text-[#1d1d1d]">{`${primerApellido} ${segundoApellido ? segundoApellido : ''} ${primerNombre} ${segundoNombre ? segundoNombre : ''}`}</div>
            <div id="sex" className="font-light text-[14px] text-[#6c6c6e] leading-4">{sexo === 'M' ? 'Masculino' : 'Femenino'}</div>
            <div id="date" className=" font-light text-[14px] text-[#6c6c6e] ">{formatDate}</div>
            <div id="fullage" className="font-light text-[14px] text-[#6c6c6e] leading-none">{age.años} años {age.meses} meses y {age.días} dias</div>
       </div>}
    </div>
    </div>
    <hr className="mb-2"/>
    </>
  );
  
  
};
