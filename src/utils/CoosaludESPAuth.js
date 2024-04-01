export const CoosaludESPAuth = async ({ tipoDocumento, numerodocumento }) => {
  try {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    const response = await fetch(
      `https://apiautogestion.coosalud.com/Afiliado/GetAnyByTipoDocAndDoc/${tipoDocumento}/${numerodocumento}`,
      requestOptions
    );
    const { jsonObject } = await response.json();
    const parsedJSON = JSON.parse(jsonObject);
    return parsedJSON;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
