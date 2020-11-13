import Button from "../../components/button/ButtonComponent";
import Card from "../../components/card/Card";
import MemberButtonList from "../../components/member/MemberButtonList";
import CardContainer from "../../containers/Card/CardContainer";
import "./MemberList.scss";

const MemberList = () => {
  return (
    <div className="member-list">
      <h1 style={{ fontSize: "40px" }}>⭐︎파트원 소개*</h1>
      <MemberButtonList />
      <hr style={{ borderColor: "grey", opacity: "0.2" }} />
      <div className="member-list-content-wrap">
        <CardContainer />
      </div>
    </div>
  );
};

export default MemberList;
