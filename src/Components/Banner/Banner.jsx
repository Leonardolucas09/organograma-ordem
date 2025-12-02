import BannerImg from "./assets/banner.png";
import "./Banner.css";

export function Banner() {
  return (
    <>
      <header className="banner">
        <img src={BannerImg} alt="Banner do Organograma" />
      </header>
    </>
  );
}
