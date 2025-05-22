import {
  MdCheckCircle,
  MdEvent,
  MdHistory,
  MdList,
  MdStar,
  MdToday,
} from "react-icons/md";

export const categoriesTask = [
  { name: "todas", icon: MdList, cant: 23 },
  { name: "hoy", icon: MdToday, cant: 5 },
  { name: "planeadas", icon: MdEvent, cant: 1 },
  { name: "completadas", icon: MdCheckCircle, cant: 4 },
  { name: "importantes", icon: MdStar, cant: 6 },
  { name: "pasadas", icon: MdHistory, cant: 6 },
];
