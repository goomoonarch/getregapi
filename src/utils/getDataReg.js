export const getDataReg = async (tid, document) => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  const response = await fetch(
    `https://paiwebservices.paiweb.gov.co:8081/api/interoperabilidad/GetInfoRegistraduria/${tid}/${document}`,
    requestOptions
  );
  const data = await response.json();
  return data;
};
