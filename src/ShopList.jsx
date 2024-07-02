import { Link, useHistory } from "react-router-dom";

export const ShopList = () => {
  const arr = [...Array(10).keys()];
  // const arr = "aaa";
  console.log(arr);

  const history = useHistory();
  const onClickShopA = () => history.push("/shopList/shopA");

  return (
    <div>
      <p>ShopList</p>
      <p>{arr}</p>
      <Link to={{ pathname: "/shopList/shopA", state: arr }}>長野店</Link>
      <br />
      <Link to="/shopList/shopB">富山店</Link>
      <br />
      <button onClick={onClickShopA}>ShopA</button>
    </div>
  );
};
