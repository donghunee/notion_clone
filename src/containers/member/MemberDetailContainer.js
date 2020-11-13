import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import MemberDetail from "../../components/member/MemberDetail";

const MemberDetailContainer = ({ match }) => {
  const [targetData, setTargetData] = useState(null);

  const client = axios.create({
    baseURL:
      "http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/",
  });

  useEffect(() => {
    (async () => {
      const result = await client.get(`api/members/${match.params.id}`);
      console.log(result);
      setTargetData(result.data.data);
    })();
  }, []);

  return targetData && <MemberDetail targetData={targetData} />;
};

export default withRouter(MemberDetailContainer);
