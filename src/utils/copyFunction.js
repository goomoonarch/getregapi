export const copyFunction = ( ready2copy, dataResponse, ERAsegData ) => {
    if ( !ready2copy ) {return}
    const { tipoIdentificacion, numeroIdentificacion,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento, sexo } = dataResponse;
    const { codigoEPS, estadoMIPRES, regimenAfiliacion, nombreEPS } = ERAsegData;
    const copyInfo = `${tipoIdentificacion} ${numeroIdentificacion} ${primerApellido} ${segundoApellido} ${primerNombre} ${segundoNombre} ${fechaNacimiento} ${sexo} ${codigoEPS} ${estadoMIPRES} ${regimenAfiliacion} ${nombreEPS}`;
    navigator.clipboard.writeText(copyInfo);
}