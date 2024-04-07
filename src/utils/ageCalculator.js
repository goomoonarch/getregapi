export const ageCalculator = (birth) => {
  const nacimiento = new Date(birth);
  const hoy = new Date();
  let edad = hoy.getFullYear() - nacimiento.getFullYear();
  let diferenciaMeses = hoy.getMonth() - nacimiento.getMonth();

  if (
    diferenciaMeses < 0 ||
    (diferenciaMeses === 0 && hoy.getDate() < nacimiento.getDate())
  ) {
    edad--;
  }

  let meses = diferenciaMeses < 0 ? 12 + diferenciaMeses : diferenciaMeses;
  if (hoy.getDate() < nacimiento.getDate()) {
    if (meses === 0) {
      meses = 11;
      edad = edad !== 0 ? edad - 1 : 0;
    } else {
      meses--;
    }
  }

  let dias = hoy.getDate() - nacimiento.getDate();
  if (dias < 0) {
    const ultimoDiaDelMesAnterior = new Date(
      hoy.getFullYear(),
      hoy.getMonth(),
      0
    ).getDate();
    dias = ultimoDiaDelMesAnterior + dias;
  }

  return { años: edad, meses, días: dias };
};
