import Divipola from "../assets/Divipola.json"

export const getMunName = (code) => {
    const municipio = Divipola.find(
        (municipio) => municipio.cod_mpio === code
      );
      return municipio ? municipio.nom_mpio : null;
}