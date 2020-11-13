import Card from "../../components/card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
const CardContainer = ({ history }) => {
  const [userData, setUserData] = useState(null);
  const [targetData, targetrData] = useState(null);

  const client = axios.create({
    baseURL:
      "http://ec2-13-124-127-8.ap-northeast-2.compute.amazonaws.com:3000/",
  });

  useEffect(() => {
    (async () => {
      const result = await client.get("api/members");
      setUserData(result.data.data);
    })();
  }, [client]);

  const onClickMember = async (id) => {
    // const result = await client.get(`api/members/${id}`);
    // targetrData(result);
    history.push(`/members/${id}`);
  };

  return (
    userData &&
    userData.map((e) => (
      <Card key={e.id} memberData={e} onClickMember={onClickMember} />
    ))
  );
};

export default withRouter(CardContainer);
