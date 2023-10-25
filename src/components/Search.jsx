import React, { useState } from "react";
import CustomDropdown from "./CustomSelect";

export const Search = ({ onPersonData, onERAsegData, onUserStatus, onERAsegStatus, setLoadingState, onShowERAsegCard }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [Error, setError] = useState("");



  const handleDropdownChange = (value) => {
    setSelectedValue(value);
  };

  

  const fetchData = () => {
    
    setLoadingState(true);
    onShowERAsegCard(false); 

    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://paiwebservices.paiweb.gov.co:8081/api/interoperabilidad/GetInfoRegistraduria/${selectedValue}/${inputValue}`,
      requestOptions
    )
      .then((response) => {

        onUserStatus(response.status);
        return response.json();

      })
      .then((result) => {

        onPersonData(result);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
          tipoDocumento: result.tipoIdentificacion,
          numerodocumento: result.numeroIdentificacion,
          primerApellido: result.primerApellido,
          primerNombre: result.primerNombre,
        });
        var requestOptionsSecondFetch = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        return fetch(
          "https://proxy-cors-service.onrender.com/api/interoperabilidad/GetEPSPersonaMSS",
          requestOptionsSecondFetch
        );
      })
      .then((response) => {
        setLoadingState(false);
        return response.json();
      })
      .then((resultSecondFetch) => {
        onERAsegData(resultSecondFetch);
        if (resultSecondFetch === null) {
          onERAsegStatus(true);
        }
        onShowERAsegCard(true);
      })
      .catch((error) => {
        console.log("error", error);
        setError("Hubo un error al obtener los datos.");
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      fetchData();
      
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
    

  };

  const clearInput = () => {
    setInputValue("");
  };

  return (
    <div className="h-6">
      <div className="flex items-center justify-center translate-y-[-32px]">
        <div className="flex px-4 py-2 bg-white rounded-[8px] shadow-sm border w-[390px] sm:w-[490px]">
          <CustomDropdown onChange={handleDropdownChange} />
          <div className="flex pl-[4px] items-center justify-center">
            <div className="h-[35px] w-[1.3px] rounded-lg bg-gray-300" />
          </div>
          <input
            placeholder="Número de documento..."
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 py-2 text-blue-gray-700 focus:outline-none font-SFpro"
          />
          {inputValue && (
            <button onClick={clearInput} className="mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 fill-blue-gray-600 hover:fill-blue-gray-700"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
          <button onClick={handleButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="h-5 w-5 stroke-[#b3b4b9] hover:stroke-blue-gray-700"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
