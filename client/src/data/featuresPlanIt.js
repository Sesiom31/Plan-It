import {
  PiArrowCircleUp,
  PiDevices,
  PiListDashes,
  PiListPlus,
} from "react-icons/pi";

export const featuresPlanIt = [
  {
    title: "Listas inteligentes",
    description:
      "Crea listas personalizadas para diferentes áreas de tu vida: trabajo, hogar, proyectos personales, etc.",
    icon: PiListDashes,
    color: "text-yellow-600",
  },
  {
    title: "Priorización de tareas",
    description:
      "Marca tareas como importantes para enfocarte en lo crucial y evitar distracciones.",
    icon: PiArrowCircleUp,
    color: "text-green-500",
  },
  {
    title: "Subtareas",
    description:
      "Divide tareas complejas en subtareas más pequeñas y manejables para una mejor planificación.",
    icon: PiListPlus,
    color: "text-orange-500",
  },

  {
    title: "Sincronización multiplataforma",
    description:
      "Accede a tus tareas desde cualquier dispositivo con sincronización en tiempo real.",
    icon: PiDevices,
    color: "text-violet-600",
  },
];
