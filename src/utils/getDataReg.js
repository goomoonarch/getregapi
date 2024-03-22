export const getDataReg = async (tid, document) => {
  if ((tid || document) === "") {
    return {
      dataResponse: null,
      statusCode: 0,
    };
  } else {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      `https://paiwebservices.paiweb.gov.co:8081/api/interoperabilidad/GetInfoRegistraduria/${tid}/${document}`,
      requestOptions
    );
    let data;
    response.status === 200 ? (data = await response.json()) : null;
    const status = response.status;
    return {
      dataResponse: data,
      statusCode: status,
    };
  }
};
