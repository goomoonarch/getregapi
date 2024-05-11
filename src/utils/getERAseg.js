export const getERAseg = async (dataResponse) => {
  const edata = {
    tipoDocumento: "CC",
    numerodocumento: "1234567890",
    primerApellido: "DOE",
    segundoApellido: null,
    primerNombre: "JANE",
    segundoNombre: null,
    regimenAfiliacion: null,
    codigoRespuesta: "03",
    codigoEPS: null,
    nombreEPS: null,
    fechaCorteSAT: null,
    fechaConsulta: null,
    fechaNacimiento: null,
    sexo: null,
    fechaCorteBDEX: null,
    fechaCorteEvol: null,
    estadoBDEX: null,
    estadoEvol: null,
    estadoAfiliacion: null,
    estadoMIPRES: null,
    fechaAfiliacionEntidad: null,
    tipoAfiliado: null,
    departamentoAfiliacion: null,
    municipioAfiliacion: null,
    codigoDivipola: null,
  };
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

  try {
    const response = await fetch(
      "https://paiwebservices.paiweb.gov.co:8081/api/interoperabilidad/GetEPSPersonaMSS",
      requestOptions
    );
    let data;
    const status = response.status;
    status === 200 ? (data = await response.json()) : null;
    if (data.codigoRespuesta === "02") {
      return { data, status };
    } else {
      return { data, status };
    }
  } catch (e) {
    if (e.message === "Failed to fetch") {return {data: edata, status: 606}}
  }
};
