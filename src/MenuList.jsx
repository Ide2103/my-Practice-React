import { Link } from "react-router-dom";
import kobaruto from "./assets/kobaruto.jpg";
import matiruda from "./assets/matiruda.jpg";
import sitoron from "./assets/sitoron.jpg";

export const MenuList = () => {
  const cakes = [
    { name: "コバルト", image: kobaruto, price: "¥600" },
    { name: "マチルダ", image: matiruda, price: "¥620" },
    { name: "シトロン", image: sitoron, price: "¥500" },
  ];
  return (
    <div>
      <p className="list-cake-caption">販売中のケーキ</p>
      {cakes.map((cake, index) => (
        <div key={index} className="list-cakes">
          <Link
            to={`/menuList/cake?url=${cake.image}&name=${cake.name}`}
            className="list-cake-info"
          >
            <img className="list-cake-image" src={`${cake.image}`} />
          </Link>
          <br />
          <Link
            to={`/menuList/cake?url=${cake.image}&name=${cake.name}`}
            className="list-cake-info"
          >
            {cake.name}
          </Link>
          <br />
          <Link
            to={`/menuList/cake?url=${cake.image}&name=${cake.name}`}
            className="list-cake-info"
          >
            {cake.price}
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
};
