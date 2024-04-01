export const getDataReg = async (tid, document) => {
  if ((tid && document) === "") {
    return {
      dataResponse: null,
      statusCode: null,
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
    const status = response.status;
    status === 200 ? (data = await response.json()) : null;

    return {
      dataResponse: data,
      statusCode: status,
    };
  }
};
