import styled from "styled-components";

const MeberDetailWrap = styled.div`
  padding-top: 50px;
`;

const MemberDetailTitle = styled.div`
  font-size: 30px;
  font-weight: bolder;
  margin-bottom: 40px;
`;

const MemberDetailContentWrap = styled.div`
  display: flex;
`;

const MemberDetailContentName = styled.div`
  width: 100px;
  color: grey;
`;

const MemberDetailContent = styled.div`
  flex-grow: 1;
`;

const MemberDetail = ({ targetData }) => {
  const { instagram, introduction, mbti, name } = targetData;
  return (
    <MeberDetailWrap>
      <MemberDetailTitle>{name}</MemberDetailTitle>
      <MemberDetailContentWrap>
        <MemberDetailContentName>인스타그램</MemberDetailContentName>
        <MemberDetailContent>{instagram}</MemberDetailContent>
      </MemberDetailContentWrap>
      <MemberDetailContentWrap>
        <MemberDetailContentName>소개</MemberDetailContentName>
        <MemberDetailContent>{introduction}</MemberDetailContent>
      </MemberDetailContentWrap>
      <MemberDetailContentWrap>
        <MemberDetailContentName>mbti</MemberDetailContentName>
        <MemberDetailContent>{mbti}</MemberDetailContent>
      </MemberDetailContentWrap>
    </MeberDetailWrap>
  );
};

export default MemberDetail;
