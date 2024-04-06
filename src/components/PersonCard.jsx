/* eslint-disable react/prop-types */
import { birthFormatter, toTitleCase, ageCalculator } from "../utils";
export const PersonCard = ({ dataResponse }) => {
  const {
    tipoIdentificacion,
    numeroIdentificacion,
    primerApellido,
    segundoApellido,
    primerNombre,
    segundoNombre,
    fechaNacimiento,
    sexo,
  } = dataResponse;
  const formatDate = birthFormatter(fechaNacimiento);
  const age = ageCalculator(fechaNacimiento);
  console.log(
    tipoIdentificacion,
    numeroIdentificacion,
    primerApellido,
    segundoApellido,
    primerNombre,
    segundoNombre,
    formatDate,
    age,
    sexo
  );

  return (
    <>
      <div className="flex justify-center pt-2 font-Inter" id="usercard">
        <div className="flex bg-[#FCFCFC] w-[400px] rounded-[8px] p-[8px]">
          <div id="names" className="font-light">
            {/*<h1>{`${toTitleCase(primerApellido)} ${segundoApellido ? toTitleCase(segundoApellido) : ''} ${toTitleCase(primerNombre)} ${ segundoNombre ? toTitleCase(segundoNombre) : '' }`}</h1>}
            <p>{formatDate} - {sexo}</p>*/}
            <span>
              {`${primerApellido} ${
                segundoApellido ? segundoApellido : ""
              } ${primerNombre} ${segundoNombre ? segundoNombre : ""}`}
            </span>
            <div>{formatDate} - {sexo}</div>
          </div>
        </div>
      </div>
    </>
  );
};
