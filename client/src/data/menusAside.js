import { GrProjects, GrTask } from "react-icons/gr";

import { CgNotes } from "react-icons/cg";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { VscCalendar } from "react-icons/vsc";

export const menus = [
  { label: "Tareas", icon: GrTask, to: "/tasks" },
  { label: "Proyectos", icon: GrProjects, to: "/projects" },
  { label: "Calendario", icon: VscCalendar, to: "/calendar" },
  { label: "Notas", icon: CgNotes, to: "/notes" },
  { label: "Panel", icon: MdOutlineSpaceDashboard, to: "/dashboard" },
];
