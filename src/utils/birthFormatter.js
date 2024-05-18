import { format } from "date-fns";
import { es } from "date-fns/locale";

export const birthFormatter = (date) => {
  const dateObj = new Date(date);
  return format(dateObj, `dd 'de' MMMM 'de' yyyy`, { locale: es });
};

export const birthFormatter2 = (date) => {
    const datetime = new Date(date);
    
    const day = String(datetime.getDate()).padStart(2, '0');
    const month = String(datetime.getMonth() + 1).padStart(2, '0');
    const year = datetime.getFullYear();

    return `${day}/${month}/${year}`;
};
