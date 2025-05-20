import {
  MdCheckCircle,
  MdEvent,
  MdHistory,
  MdList,
  MdStar,
  MdToday,
} from "react-icons/md";

export const categoriesTask = [
  { name: "Todas", icon: MdList, cant: 23 },
  { name: "Hoy", icon: MdToday, cant: 5 },
  { name: "Planeadas", icon: MdEvent, cant: 1 },
  { name: "Completadas", icon: MdCheckCircle, cant: 4 },
  { name: "Importantes", icon: MdStar, cant: 6 },
  { name: "Pasadas", icon: MdHistory, cant: 6 },
];
