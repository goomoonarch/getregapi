import { useEffect, useState } from "react";
import { CustomDropdown } from "./CustomDropdown";
import { InputData } from "./InputData";
import { ButtonSearch } from "./ButtonSearch";
import { getDataReg, getERAseg } from "../utils";
//import { getDataReg, getERAseg, ERAsegAuthenticator, EPSCodes, normAuthERA } from "../utils";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ onUserData }) => {
  const [tid, setTid] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [onKey, setOnKey] = useState(false);

  const handleKey = (value) => {
    if (tid && docNumber && !isNaN(docNumber)) {
      setOnKey(value);
    }
  }; // ---> manejador de alerta para llenar los campos

  useEffect(() => {

    const fetchData = async () => {

      if (onKey) {
        onUserData({
          onKey,
          isReady: false,
          isAuthReady: false,
          dataResponse: null,
          ERAsegData: null,
          statusCode: null,
          isERAsegReady: false,
          LoadingLabel: "Cargando información de usuario ...",
          allReady: false,
          authERAdata: null,
        });
        try {
          const { dataResponse, statusCode } = await getDataReg(tid, docNumber);
          onUserData({
            dataResponse,
            isReady: true,
            statusCode,
            LoadingLabel: "Cargando información de usuario ...",
            onKey,
            isERAsegReady: false,
            ERAsegData: null,
            isAuthReady: false,
            allReady: false,
            authERAdata: null,
          });
          if (statusCode === 200) {
            onUserData({
              dataResponse,
              statusCode,
              LoadingLabel: "Cargando información de ERAseg ...",
              onKey,
              ERAsegData: null,
              isERAsegReady: false,
              isReady: true,
              isAuthReady: false,
              allReady: false,
              authERAdata: null,
            });
            const { data } = await getERAseg(dataResponse);
            onUserData({
              dataResponse,
              statusCode,
              LoadingLabel: "Cargando información de ERAseg ...",
              onKey,
              isReady: true,
              isERAsegReady: true,
              ERAsegData: data,
              isAuthReady: false,
              allReady: false,
              authERAdata: null,
            });
            {
              onUserData({
                dataResponse,
                statusCode,
                LoadingLabel: "ERAseg",
                onKey,
                isERAsegReady: true,
                ERAsegData: data,
                isReady: true,
                isAuthReady: false,
                allReady: true,
                authERAdata: null,
              });
            }
          } else if (statusCode === 204) {
            onUserData({
              onKey,
              isReady: false,
              isAuthReady: false,
              dataResponse: null,
              ERAsegData: null,
              statusCode: 204,
              isERAsegReady: true,
              LoadingLabel: "Cargando información de usuario ...",
              allReady: true,
              authERAdata: null,
            });
          } //---> fetching the ERAseg data in the SearchBar!
        } catch (e) {
          const { dataResponse, statusCode } = await getDataReg(tid, docNumber);
          console.log(JSON.stringify(dataResponse));
          console.error("error fetching data", e);
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
          onUserData({
            dataResponse,
            statusCode,
            LoadingLabel: "Cargando información de ERAseg ...",
            onKey,
            ERAsegData: edata,
            isERAsegReady: true,
            isReady: true,
            allReady: true,
            authERAdata: null,
          });
        }
      }
    };
    fetchData();
    setOnKey(false);
  }, [docNumber, onKey, onUserData, tid]);

  return (
    <div className="flex justify-center items-center translate-y-[-25px] z-10">
      <div className="flex bg-[#F6F6F6] h-[48px] w-[400px] rounded-[6px] z-20">
        <CustomDropdown
          onChange={(tid) => {
            setTid(tid);
          }}
          enterKey={() => handleKey(true)}
        />
        <InputData
          onChange={(docNumber) => {
            setDocNumber(docNumber);
          }}
          enterKey={() => handleKey(true)}
        />
        <ButtonSearch enterKey={() => handleKey(true)} />
      </div>
    </div>
  );
};
