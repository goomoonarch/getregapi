import { birthFormatter } from "./birthFormatter";

export const copyFunction = ( userInfo ) => {
    if (userInfo) {
        const {dataResponse, ERAsegData, isERAsegReady, isReady} = userInfo
        if ( !isReady || !isERAsegReady || !dataResponse ) {return}
        const { tipoIdentificacion, numeroIdentificacion,primerApellido,segundoApellido, primerNombre, segundoNombre, fechaNacimiento, sexo } = dataResponse;
        const { codigoEPS, estadoMIPRES, regimenAfiliacion, nombreEPS } = ERAsegData;
        const copyInfo = `${tipoIdentificacion} ${numeroIdentificacion} ${primerApellido} ${segundoApellido ? segundoApellido : ''} ${primerNombre} ${segundoNombre ? segundoNombre : ''} ${birthFormatter(fechaNacimiento)} ${sexo} ${codigoEPS ? codigoEPS : ''} ${estadoMIPRES ? estadoMIPRES : ''} ${regimenAfiliacion ? regimenAfiliacion : ''} ${nombreEPS ? nombreEPS : ''}`;
        navigator.clipboard.writeText(copyInfo);
    }
}