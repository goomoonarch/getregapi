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
          statusCode: null,
          LoadingLabel: "Cargando informaciónd de usuario ...",
        });
        try {
          const { dataResponse, statusCode } = await getDataReg(tid, docNumber);
          onUserData({
            dataResponse,
            statusCode,
            LoadingLabel: "Cargando informaciónd de usuario ...",
            onKey,
            isReady: true,
            isAuthReady: false
          });
          if (statusCode === 200) {
            onUserData({
              dataResponse,
              statusCode,
              LoadingLabel: "Cargando ERAseg ...",
              onKey,
              isReady: false,
              isAuthReady: false
            });
            const { data } = await getERAseg(dataResponse);
            console.log(data);
            onUserData({
              dataResponse,
              statusCode,
              LoadingLabel: "Cargando ERAseg ...",
              onKey,
              isReady: true,
              isAuthReady: false
            });
            let authERAseg;
            if (data.codigoRespuesta === "01") {
              onUserData({
                dataResponse,
                statusCode,
                LoadingLabel: "Autenticando ERAseg ...",
                onKey,
                isReady: false,
                isAuthReady: false
              });
               authERAseg = await ERAsegAuthenticator(data)
               onUserData({
                dataResponse,
                statusCode,
                LoadingLabel: "ERAseg",
                onKey,
                isReady: true,
                isAuthReady: true,
              });
            }
            console.log(authERAseg);
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
