export const getERAseg = async (dataResponse) => {
  const {
    tipoIdentificacion,
    numeroIdentificacion,
    primerNombre,
    primerApellido,
  } = dataResponse;

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json; charset=utf-8");

  const raw = JSON.stringify({
    tipoDocumento: tipoIdentificacion,
    numerodocumento: numeroIdentificacion,
    primerApellido: primerApellido,
    primerNombre: primerNombre,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    //`http://localhost:3000/api/interoperabilidad/GetEPSPersonaMSS`,
    "https://paiwebservices.paiweb.gov.co:8081/api/interoperabilidad/GetEPSPersonaMSS",
    requestOptions
  );
  let data;
  const status = response.status;
  status === 200 ? (data = await response.json()) : null;

  //---> Lógica de población del régimen especial o no asegurada! <---//
  if (data.codigoRespuesta === "02") {
    return {
      data,
      status,
    };
  //---> Lógica de población del régimen especial o no asegurada! <---//
  } else {
    return {
      data,
      status,
    };
  }
};
