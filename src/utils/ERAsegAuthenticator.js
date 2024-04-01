import { CoosaludESPAuth } from "./CoosaludESPAuth";
import { NuevaEPSAuth } from "./NuevaEPSAuth";

export const ERAsegAuthenticator = async ({
  codigoEPS,
  tipoDocumento,
  numerodocumento,
}) => {
  let AuthData = {};

  const codesNUEVAEPS = new Set(["EPS037", "EPS041", "EPSS37", "EPSS41"]);
  const codesCOOSALUD = new Set(["ESSC24", "EPS042", "ESS024", "EPSS42"]);

  if (codesNUEVAEPS.has(codigoEPS)) {
    AuthData = await NuevaEPSAuth({ tipoDocumento, numerodocumento });
  }

  if (codesCOOSALUD.has(codigoEPS)) {
    AuthData = await CoosaludESPAuth({ tipoDocumento, numerodocumento });
  }
  return AuthData;
};
