import { useEffect, useState } from "react";
import { CustomDropdown } from "./CustomDropdown";
import { InputData } from "./InputData";
import { ButtonSearch } from "./ButtonSearch";
import { getDataReg, getERAseg, ERAsegAuthenticator } from "../utils";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ onUserData }) => {
  const [tid, setTid] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [onKey, setOnKey] = useState(false);

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
          LoadingLabel: "Cargando informaciónd de usuario ...",
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
            });
            const { data } = await getERAseg(dataResponse);
            console.log(data);
            onUserData({
              dataResponse,
              statusCode,
              LoadingLabel: "Cargando ERAseg ...",
              onKey,
              isReady: true,
              isERAsegReady: true,
              ERAsegData: data,
              isAuthReady: false,
            });
            let authERAseg;
            if (data.codigoRespuesta === "01") {
              onUserData({
                dataResponse,
                statusCode,
                LoadingLabel: "Autenticando ERAseg ...",
                onKey,
                isERAsegReady: true,
                ERAsegData: data,
                isReady: true,
                isAuthReady: false,
              });
              authERAseg = await ERAsegAuthenticator(data);
              onUserData({
                dataResponse,
                statusCode,
                LoadingLabel: "ERAseg",
                onKey,
                isERAsegReady: true,
                ERAsegData: data,
                isReady: true,
                isAuthReady: true,
              });
            }
            console.log(authERAseg); //---> Manejar los resultados de la autenticación de ERAseg!
          } //---> fetching the ERAseg data in the SearchBar!
        } catch (e) {
          console.error("error fetching data:", e);
          onUserData({
            dataResponse: null,
            statusCode: e,
            onKey,
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
          enterKey={(onKey) => {
            setOnKey(onKey);
          }}
        />
        <InputData
          onChange={(docNumber) => {
            setDocNumber(docNumber);
          }}
          enterKey={(onKey) => {
            setOnKey(onKey);
          }}
        />
        <ButtonSearch
          enterKey={(onKey) => {
            setOnKey(onKey);
          }}
        />
      </div>
    </div>
  );
};
