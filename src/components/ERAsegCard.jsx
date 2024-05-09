import {
  getDepName,
  getERAsegClass,
  getERAsegReg,
  getERAsegState,
  getMunName,
  toTitleCase,
} from "../utils";
import ERAsegState from "../assets/ERAsegState.json";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
export const ERAsegCard = ({ ERAsegData }) => {
  const [isStateMatching, setIsStateMatching] = useState(false);
  const [isRegimenMatching, setIsRegimenMatching] = useState(false);

  useEffect(() => {
    if (ERAsegData.authERAdata) {
      const estadoAfiliacion = getERAsegState(
        ERAsegData.ERAsegData.estadoAfiliacion,
        ERAsegState
      );
      const authEstado = toTitleCase(ERAsegData.authERAdata.estado);
      const regimenAfiliacion = getERAsegReg(
        ERAsegData.ERAsegData.regimenAfiliacion
      );
      const authRegimen = ERAsegData.authERAdata.regimen;

      setIsStateMatching(authEstado && estadoAfiliacion === authEstado);
      setIsRegimenMatching(authRegimen && regimenAfiliacion === authRegimen);
    }
  }, [ERAsegData.ERAsegData.estadoAfiliacion, ERAsegData.ERAsegData.regimenAfiliacion, ERAsegData.authERAdata]);

  return (
    <>
      <div className="flex mt-[18px]">
        <div
          id="userinfoheader"
          className={`mr-[11px] ${
            isStateMatching
              ? getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion).gold
              : getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion).lm
          }`}
        >
          {ERAsegData.ERAsegData.codigoRespuesta === "01" && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                fill: isStateMatching
                  ? getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion)
                      .strokeGold
                  : getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion)
                      .stroke,
              }}
            >
              <path
                d="M23.9062 11.9648C23.9062 18.5039 18.4922 23.918 11.9531 23.918C5.42578 23.918 0 18.5039 0 11.9648C0 5.4375 5.41406 0.0117188 11.9414 0.0117188C18.4805 0.0117188 23.9062 5.4375 23.9062 11.9648ZM10.6641 5.28516C9.92578 5.28516 9.42188 5.78906 9.42188 6.55078V9.42188H6.51562C5.77734 9.42188 5.27344 9.9375 5.27344 10.6758V13.2305C5.27344 13.9688 5.78906 14.4727 6.51562 14.4727H9.42188V17.3672C9.42188 18.1289 9.92578 18.6211 10.6641 18.6211H13.2188C13.9688 18.6211 14.4609 18.1289 14.4609 17.3672V14.4727H17.3672C18.1172 14.4727 18.6211 13.9688 18.6211 13.2305V10.6758C18.6211 9.9375 18.1172 9.42188 17.3672 9.42188H14.4609V6.55078C14.4609 5.78906 13.9688 5.28516 13.2188 5.28516H10.6641Z"
                fillOpacity="0.85"
              />
            </svg>
          )}
        </div>
        <div className="flex">
          {ERAsegData.ERAsegData.codigoRespuesta === "01" ? (
            <div className="flex flex-col w-[300px]">
              <div id="chirp" className="flex">
                <div
                  className={
                    isStateMatching
                      ? getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion)
                          .chirpGold
                      : getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion)
                          .chirp
                  }
                >
                  <div>
                    <svg
                      viewBox="0 0 24 24"
                      strokeWidth={1.0}
                      className="w-4 animate-pulse"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path>
                    </svg>
                  </div>
                  <div
                    className={
                      isStateMatching
                        ? getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion)
                            .textGold
                        : getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion)
                            .text
                    }
                  >
                    {getERAsegState(
                      ERAsegData.ERAsegData.estadoAfiliacion,
                      ERAsegState
                    )}
                  </div>
                </div>
              </div>
              <div
                id="erasegname"
                className="text-[16px] text-[#292929] leading-4 mb-[3px]"
              >
                {toTitleCase(ERAsegData.ERAsegData.nombreEPS)}
              </div>
              {ERAsegData.isAuthReady && (
                <div className="text-[14px] text-[#656565]">
                  {ERAsegData.authERAdata.ipsAsignada}
                </div>
              )}
              <div className="text-[14px] text-[#656565]">
                {ERAsegData.authERAdata && !isRegimenMatching ? (
                  <div className="flex items-center">
                    <span>
                      {toTitleCase(
                        getERAsegReg(ERAsegData.ERAsegData.regimenAfiliacion)
                      )}
                    </span>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.0}
                      stroke="currentColor"
                      className="w-4 animate-pulse ml-2"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
                    </svg>
                  </div>
                ) : (
                  toTitleCase(
                    getERAsegReg(ERAsegData.ERAsegData.regimenAfiliacion)
                  )
                )}
              </div>
              <div className="font-Inter text-[14px] text-[#656565] leading-4">
                {toTitleCase(getMunName(ERAsegData.ERAsegData.codigoDivipola))}{" "}
                •{" "}
                {toTitleCase(
                  getDepName(ERAsegData.ERAsegData.departamentoAfiliacion)
                )}
              </div>
            </div>
          ) : ERAsegData.ERAsegData.codigoRespuesta === "02" ? (
            null
          ) : (
            "usuario pobre o del régimen especial"
          )}
        </div>
      </div>
    </>
  );
};
