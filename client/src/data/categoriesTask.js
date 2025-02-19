import {
  MdCheckCircle,
  MdEvent,
  MdHistory,
  MdList,
  MdStar,
  MdToday,
} from "react-icons/md";

export const categoriesTask = [
  { name: "Todas", icon: MdList },
  { name: "Hoy", icon: MdToday },
  { name: "Próximas", icon: MdEvent },
  { name: "Completadas", icon: MdCheckCircle },
  { name: "Importantes", icon: MdStar },
  { name: "Pasadas", icon: MdHistory },
];
