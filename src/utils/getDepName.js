import Divipola from "../assets/Divipola.json";

export const getDepName = (code) => {
    const departamento = Divipola.find(
        (departamento) => departamento.cod_depto === code
      );
      return departamento ? departamento.dpto : null;
}