import styled from "styled-components";
import Button from "../button/ButtonComponent";
import { MdSearch, MdMoreHoriz } from "react-icons/md";
const MemberButtonListWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 13px;
  font-weight: 500;
`;

const MemberButtonList = () => {
  return (
    <MemberButtonListWrap>
      <Button textColor={"grey"}>Propertise</Button>
      <Button textColor={"grey"}>Filter</Button>
      <Button textColor={"grey"}>Sort</Button>
      <Button textColor={"grey"}>
        <MdSearch size={15} style={{ marginRight: "8px" }} />
        Search
      </Button>
      <Button textColor={"grey"}>
        <MdMoreHoriz size={17} />
      </Button>
    </MemberButtonListWrap>
  );
};

export default MemberButtonList;
