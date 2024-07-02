import { MenuList } from "../MenuList";
import { Cakes } from "../Cakes";

export const MenuRoutes = [
  {
    path: "/",
    exact: true,
    children: <MenuList />,
  },
  {
    path: "/cake",
    exact: false,
    children: <Cakes />,
  },
];
