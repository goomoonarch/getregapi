export const normAuthERA = (authERAseg) => {
  const mapEstado = {
    AC: "ACTIVO",
    AF: "AFILIADO FALLECIDO",
    DE: "DESAFILIADO",
    PL: "PROTECION LABORAL",
    RE: "RETIRADO",
    SM: "SUSPENCION POR MORA",
    SD: "SUSPENCION POR DOCUMENTO",
    default: "non define"
  };

  const mapRegimen = {
    C: "CONTRIBUTIVO",
    S: "SUBSIDIADO",
    default: "non define"
  };

  let normalizedData = {
    estado: mapEstado.default,
    regimen: mapRegimen.default,
    ipsAsignada: "non asigned",
  };

  if (authERAseg.estado) {
    normalizedData.estado = mapEstado[authERAseg.estado] || authERAseg.estado;
  }
  if (authERAseg.regimen) {
    normalizedData.regimen =
      mapRegimen[authERAseg.regimen] || authERAseg.regimen;
  }
  if (authERAseg.ipsAsignada) {
    normalizedData.ipsAsignada = authERAseg.ipsAsignada;
  } else if (authERAseg.ipsPrimaria) {
    normalizedData.ipsAsignada = authERAseg.ipsPrimaria;
  }
  return normalizedData;
};
