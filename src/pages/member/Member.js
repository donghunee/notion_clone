import { Route, Switch } from "react-router-dom";
import MemberDetail from "./MemberDetail";
import MemberList from "./MemberList";

const Member = ({ match }) => {
  console.log(match);
  return (
    <section style={{ margin: "0 90px" }}>
      <Switch>
        <Route path={match.path} exact component={MemberList}></Route>
        <Route path={`${match.path}/:id`} component={MemberDetail}></Route>
      </Switch>
    </section>
  );
};

export default Member;
