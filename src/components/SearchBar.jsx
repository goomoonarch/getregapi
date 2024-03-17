import { useEffect, useState } from "react";
import { CustomDropdown } from "./CustomDropdown";
import { InputData } from "./InputData";
import { useFetch } from "../hooks/useFetch";

export const SearchBar = () => {
  const [tid, setTid] = useState("");
  const [docNumber, setDocNumber] = useState("");
  const [onKey, setOnKey] = useState(false);

  const { userData, isLoading } = useFetch({ onKey, tid, docNumber });
  console.log(userData, isLoading);

  useEffect(() => {
    setOnKey(false);
  }, [tid, docNumber]);

  //console.log(tid, docNumber, onKey);
  return (
    <div className="flex justify-center">
      <div className="flex translate-y-[-10px] bg-[#F6F6F6] h-[48px] rounded-[8px] w-[350px] sm:w-[490px]">
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
        {/*<ButtonSearch />*/}
      </div>
    </div>
  );
};
