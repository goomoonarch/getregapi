import { birthFormatter2 } from "./birthFormatter";

export const copyFunction = (userInfo) => {
  if (userInfo) {
    const { dataResponse, ERAsegData, isERAsegReady, isReady } = userInfo;
    if (!isReady || !isERAsegReady || !dataResponse) {
      return;
    }
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
    const { codigoEPS, estadoMIPRES, regimenAfiliacion, nombreEPS } =
      ERAsegData;
    const copyInfo = `
    Identificación: ${tipoIdentificacion} ${numeroIdentificacion}
    Nombres: ${primerNombre} ${segundoNombre ? segundoNombre : ""}
    Apellidos: ${primerApellido} ${segundoApellido ? segundoApellido : ""}
    Fecha de nacimiento: ${birthFormatter2(fechaNacimiento)}
    Sexo: ${sexo}
    Código EPS: ${codigoEPS ? codigoEPS : ""}
    Estado MIPRES: ${estadoMIPRES ? estadoMIPRES : ""}
    Régimen de afiliación: ${regimenAfiliacion ? regimenAfiliacion : ""}
    Nombre EPS: ${nombreEPS ? nombreEPS : ""}
        `.trim();
    navigator.clipboard.writeText(copyInfo);
  }
};
