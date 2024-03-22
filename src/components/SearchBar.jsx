import { useEffect, useState } from "react";
import { CustomDropdown } from "./CustomDropdown";
import { InputData } from "./InputData";
import { ButtonSearch } from "./ButtonSearch";
import { getDataReg } from "../utils/getDataReg";

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
          dataResponse: null,
          statusCode: null,
        });
        try {
          const { dataResponse, statusCode } = await getDataReg(tid, docNumber);
          onUserData({ dataResponse, statusCode, onKey, isReady: true });
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
