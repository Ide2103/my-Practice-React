import { useLocation } from "react-router-dom";

export const Cakes = () => {
  const { search } = useLocation();
  console.log(search);
  const query = new URLSearchParams(search);

  return (
    <div className="cake-detail">
      <img className="cake-image" src={query.get("url")} />
      <p>{query.get("name")}</p>
    </div>
  );
};
