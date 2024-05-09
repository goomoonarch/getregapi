import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export const birthFormatter = (date) => {
    const dateObj = new Date(date);
    return format(dateObj, `dd 'de' MMMM 'de' yyyy`, { locale: es });
}
