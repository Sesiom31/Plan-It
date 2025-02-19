import { es } from "date-fns/locale";
import { format } from "date-fns";

export const getDate = (dateToday) => {
  const formattedDate = format(dateToday, "d 'de' MMMM 'del' yyyy", {
    locale: es,
  });
  return formattedDate;
};
