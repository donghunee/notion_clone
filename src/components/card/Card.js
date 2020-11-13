import "./Card.scss";
import styled from "styled-components";

const CardWrap = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  position: relative;
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 130%;

  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
  .wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const CardImageWrap = styled.div`
  width: 100%;
  height: 40%;
  display: block;
  overflow: hidden;
`;

const CardContentWrap = styled.div`
  height: 60%;
  padding: 15px;
  overflow-y: hidden;
`;

const CardStyledImage = styled.img`
  width: 100%;
  height: 100%;
  font-weight: 500;
  display: inline-block; /* Otherwise it keeps some space around baseline */
  min-width: 100%; /* Scale up to fill container width */
  min-height: 100%; /* Scale up to fill container height */
`;

const CardContentName = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 13px;
  margin: 6px 0;
`;

const CardContentMbtiButton = styled.div`
  font-size: 12px;
  padding: 0 6px;
  border-radius: 3px;
  background: rgb(245, 213, 219);
  display: inline-block;
`;

const Card = ({ memberData, onClickMember }) => {
  const { id, name, instagram, mbti, introduction, profileUrl } = memberData;
  return (
    <CardWrap onClick={() => onClickMember(id)}>
      <div className="wrap">
        <CardImageWrap>
          {profileUrl && <CardStyledImage align={"center"} src={profileUrl} />}
        </CardImageWrap>
        <CardContentWrap>
          <CardContentName>🎉 {name}</CardContentName>
          <CardContent>{instagram}</CardContent>
          <CardContent>{introduction}</CardContent>
          <CardContentMbtiButton>{mbti}</CardContentMbtiButton>
        </CardContentWrap>
      </div>
    </CardWrap>
  );
};

export default Card;
