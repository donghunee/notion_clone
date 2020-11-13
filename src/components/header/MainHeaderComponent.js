import styled from "styled-components";
import "./MainHeader.scss";
import Button from "../button/ButtonComponent";
import { GiHamburgerMenu } from "react-icons/gi";

const MainHeaderComponent = ({ history, match }) => {
  return (
    <header className="main-header">
      <GiHamburgerMenu style={{ width: "20px" }} />
      <nav className="main-header__nav">
        <Button onClickFunc={() => history.push("/")}>
          [ON SOPT] Web part
        </Button>
        <span> / </span>
        <Button onClickFunc={() => history.push("/members")}>파트원소개</Button>
      </nav>
      <div className="empty"></div>
      <div className="main-header__nav">
        <Button>Share</Button>
        <Button>Updates</Button>
        <Button>Favorite</Button>
      </div>
    </header>
  );
};

export default MainHeaderComponent;
