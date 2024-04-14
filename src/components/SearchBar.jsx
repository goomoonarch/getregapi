import { useEffect, useState } from "react";
import { CustomDropdown } from "./CustomDropdown";
import { InputData } from "./InputData";
import { ButtonSearch } from "./ButtonSearch";
import { getDataReg, getERAseg, ERAsegAuthenticator, EPSCodes, normAuthERA } from "../utils";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ onUserData }) => {
  const [tid, setTid] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [onKey, setOnKey] = useState(false);

  const handleKey = (value) => { if(tid && docNumber && !isNaN(docNumber)){ setOnKey(value)}} // ---> manejador de alerta para llenar los campos
  
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
            LoadingLabel: "Cargando informaciónd de usuario ...",
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
              LoadingLabel: "Cargando ERAseg ...",
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
              LoadingLabel: "Cargando ERAseg ...",
              onKey,
              isReady: true,
              isERAsegReady: true,
              ERAsegData: data,
              isAuthReady: false,
              allReady: false,
              authERAdata: null,
            });
            let authERAseg;
            if (data.codigoRespuesta === "01" && EPSCodes.has(data.codigoEPS)) {
              onUserData({
                dataResponse,
                statusCode,
                LoadingLabel: "Autenticando ERAseg ...",
                onKey,
                isERAsegReady: true,
                ERAsegData: data,
                isReady: true,
                isAuthReady: false,
                allReady: false,
                authERAdata: null,
              });
              authERAseg = await ERAsegAuthenticator(data);
              const ERAsegAuth = normAuthERA(authERAseg);
              onUserData({
                dataResponse,
                statusCode,
                LoadingLabel: "ERAseg",
                onKey,
                isERAsegReady: true,
                ERAsegData: data,
                authERAdata: ERAsegAuth,
                isReady: true,
                allReady: true,
                isAuthReady: true,
              });
            } else {
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
              LoadingLabel: "Cargando informaciónd de usuario ...",
              allReady: true,
              authERAdata: null,
            });
          } //---> fetching the ERAseg data in the SearchBar!
        } catch (e) {
          console.error("error fetching data:", e);
          onUserData({
            dataResponse: null,
            statusCode: null,
            onKey,
            data: null,
            isReady: true,
          });
        }
      }
    };
    fetchData();
    setOnKey(false);
  }, [onKey]);

  return (
    <div className="flex justify-center">
      <div className="flex translate-y-[-10px] bg-[#F6F6F6] h-[48px] rounded-[8px] w-[350px] sm:w-[400px]">
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
        <ButtonSearch
          enterKey={() => handleKey(true)}
        />
      </div>
    </div>
  );
};
