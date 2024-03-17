import { useEffect, useState } from "react";
import { getDataReg } from "../utils/getDataReg";

export const useFetch = ({ onKey, tid, docNumber }) => {
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (onKey === true) {
        try {
          const data = await getDataReg(tid, docNumber);
          setUserData(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      } else return;
    };

    fetchData();
  }, [onKey, tid, docNumber]);

  return { userData, isLoading };
};
