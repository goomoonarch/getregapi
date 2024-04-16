import * as cheerio from "cheerio";

export const NuevaEPSAuth = ({ tipoDocumento, numerodocumento }) => {
  return new Promise((resolve, reject) => {
    const myHeaders = new Headers();
    const decodeUTF8 = (input) => {
      return input.replace(/\\u[\dA-F]{4}/gi, (match) =>
        String.fromCharCode(parseInt(match.replace(/\\u/g, ""), 16))
      );
    };

    myHeaders.append(
      "sec-ch-ua",
      '"Chromium";v="122", "Not(A:Brand";v="24", "Google Chrome";v="122"'
    );
    myHeaders.append("sec-ch-ua-mobile", "?0");
    myHeaders.append("sec-ch-ua-platform", '"Windows"');
    myHeaders.append("Upgrade-Insecure-Requests", "1");
    myHeaders.append(
      "User-Agent",
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36"
    );
    myHeaders.append(
      "Accept",
      "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
    );
    myHeaders.append("host", "herramientas.nuevaeps.com.co");
    myHeaders.append(
      "Cookie",
      "ofvirtual[AutoLogin]=autologin; ofvirtual[Checksum]=-1731695152; ofvirtual[Password]=PW7vIpBD_LPjuizQ_kYATQ..; ofvirtual[Username]=usk-ZMxsCCDo-0-q6ViuCQ..; __cf_bm=7RqI3A888KVYWJdshHEbpyi7KuA8YoR10sLcb4NSFAs-1710552692-1.0.1.1-I0FCj3aoZA8L_NwatzmenbBszia.YetedvJzU6Lfalpya60w6GsYapZqQZiVMRZtJ.s_Kg_yPqReMAYGv31Hmw; PHPSESSID=ljervd7mjgh27ndc37cpb96945"
    );

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      credentials: "include",
    };

    const url = `https://herramientas.nuevaeps.com.co/ofVirtual/V_AFILIADO_POSlist.php?tipoDocumento=${tipoDocumento}&numeroDocumento=${numerodocumento}`;

    window
      .fetch(url, requestOptions)
      .then((response) => response.text())
      .then((html) => {
        const decodedResult = decodeUTF8(html);
        const $ = cheerio.load(decodedResult);
        const table = $(".ewGrid");
        const attributes = [];

        table.find("tr").each((index, row) => {
          if (index > 0) {
            const cells = $(row).find("td");
            const attribute = {
              tipoDocumento: cells.eq(3).text().trim(),
              numeroIdentificacion: cells.eq(4).text().trim(),
              nombres: cells.eq(5).text().trim(),
              primerApellido: cells.eq(6).text().trim(),
              segundoApellido: cells.eq(7).text().trim(),
              fechaNacimiento: cells.eq(8).text().trim(),
              edad: cells.eq(9).text().trim(),
              tipoAfiliado: cells.eq(10).text().trim(),
              estado: cells.eq(11).text().trim(),
              ipsPrimaria: cells.eq(12).text().trim(),
              regimen: cells.eq(13).text().trim(),
              categoria: cells.eq(14).text().trim(),
            };
            attributes.push(attribute);
          }
        });

        const filteredAttributes = attributes.filter(
          (attribute) => attribute.nombres !== ""
        );
        resolve(filteredAttributes[0]);
      })
      .catch((error) => {
        console.error(error);
        reject(error);
      });
  });
};
