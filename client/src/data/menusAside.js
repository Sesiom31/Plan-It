import { GrProjects, GrTask } from "react-icons/gr";

import { CgNotes } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";

export const menus = [
  { name: "Tareas", icon: GrTask, path: "/tasks" },
  { name: "Proyectos", icon: GrProjects, path: "/projects" },
  { name: "Calendario", icon: VscCalendar, path: "/calendar" },
  { name: "Notas", icon: CgNotes, path: "/notes" },
  { name: "Panel", icon: MdOutlineSpaceDashboard, path: "/dashboard" },
];
