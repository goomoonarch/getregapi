import { useEffect, useState } from "react";
import { CustomDropdown } from "./CustomDropdown";
import { InputData } from "./InputData";
import { ButtonSearch } from "./ButtonSearch";
import { getDataReg } from "../utils/getDataReg";

export const SearchBar = () => {
  const [tid, setTid] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [onKey, setOnKey] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (onKey === true) {
        const { dataResponse, isLoading } = await getDataReg(tid, docNumber);
        console.log(dataResponse, isLoading);
        setUserData(dataResponse);
      }
    };

    fetchData();
  }, [onKey,tid, docNumber]);

  useEffect(() => {
    setOnKey(false);
  }, [tid, docNumber]);

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
