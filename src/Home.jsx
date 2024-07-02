import home_img from "./assets/home_img.png";
import { BrowserRouter, Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)), url(${home_img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "500px",
          margin: "0",
          padding: "40px",
        }}
      >
        <br />
        <br />
        <br />
        <p
          style={{
            color: "#363432",
            fontStyle: "italic",
            fontSize: "100px",
            textAlign: "left",
            lineHeight: "100%",
            margin: "0",
          }}
        >
          Patisserie
          <br />
          Ide
        </p>
        <br />
        <br />
        <br />
        <BrowserRouter>
          <div>
            <Link
              style={{
                textDecoration: "none",
                color: "#363432",
                fontWeight: "bold",
              }}
              to="/menuList"
            >
              ＞＞＞ケーキを見る
            </Link>
            <br />
            <br />
            <Link
              style={{
                textDecoration: "none",
                color: "#363432",
                fontWeight: "bold",
              }}
              to="/menuList"
            >
              ＞＞＞About Us
            </Link>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
};
