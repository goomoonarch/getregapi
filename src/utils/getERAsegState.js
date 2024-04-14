export const getERAsegState = (stateAf, ERAsegState) => {
    const state = ERAsegState.find(
        (state) => state.estadoSG === stateAf
      );
      return state ? state.estadoName : null;
}

export const getERAsegReg = (regAf) => {
  return regAf === "C" ? "CONTRIBUTIVO" : "SUBSIDIADO";
}