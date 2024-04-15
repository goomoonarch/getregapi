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
import PnaOrRegEsp from "./PnaOrRegEsp";

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
  }, [ERAsegData.authERAdata]);

  return (
    <>
      <div className="flex">
        <div
          id="userinfoheader"
          className={
            isStateMatching
              ? getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion).gold
              : getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion).lm
          }
        >
          {(ERAsegData.ERAsegData.codigoRespuesta === "01") && <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              stroke: isStateMatching
                ? getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion)
                    .strokeGold
                : getERAsegClass(ERAsegData.ERAsegData.estadoAfiliacion).stroke,
            }}
            className="icon icon-tabler icons-tabler-outline icon-tabler-medical-cross"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 3a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-1 1.732a1 1 0 0 1 -1.366 .366l-3.928 -2.269v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l3.928 2.267v-4.535a1 1 0 0 1 1 -1h2z" />
          </svg>}
        </div>
        <div className="flex mb-2">
          {ERAsegData.ERAsegData.codigoRespuesta === "01" ? (
            <div className="flex flex-col pl-2 w-[300px]">
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
              <div id="erasegname" className="text-[15px] text-[#1d1d1d] leading-4">
                {ERAsegData.ERAsegData.nombreEPS}
              </div>
              {ERAsegData.isAuthReady && (
                <div className="font-light text-[14px] text-[#6c6c6e]">
                  {ERAsegData.authERAdata.ipsAsignada}
                </div>
              )}
              <div className="font-light text-[14px] text-[#6c6c6e]">
                {ERAsegData.authERAdata && !isRegimenMatching ? (
                  <div className="flex items-center">
                    <span className="line-through">
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
              <div className="font-light text-[14px] leading-none text-[#6c6c6e]">
                {toTitleCase(getMunName(ERAsegData.ERAsegData.codigoDivipola))}{" "}
                •{" "}
                {toTitleCase(
                  getDepName(ERAsegData.ERAsegData.departamentoAfiliacion)
                )}
              </div>
            </div>
          ) : ERAsegData.ERAsegData.codigoRespuesta === "02" ? (
            <PnaOrRegEsp />
          ) : (
            "usuario pobre o del régimen especial"
          )}
        </div>
      </div>
    </>
  );
};
