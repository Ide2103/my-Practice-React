import { ShopList } from "../ShopList";
import { ShopA } from "../ShopA";
import { ShopB } from "../ShopB";

export const ShopRoutes = [
  {
    path: "/",
    exact: true,
    children: <ShopList />,
  },
  {
    path: "/shopA",
    exact: false,
    children: <ShopA />,
  },
  {
    path: "/shopB",
    exact: false,
    children: <ShopB />,
  },
];
