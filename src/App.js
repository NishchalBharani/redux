import { Route } from "react-router-dom";
import FormComponent from "./FormComponent";
import UserDetails from "./UserDetails";

export default function App() {
  return (
    <div className="card-panel yellow lighten-5">
      <div className="row">
        <div className="App">
          
          <Route path="/usersDetails" component={UserDetails} exact />
          <Route path="/" component={FormComponent} exact />
        </div>
      </div>
    </div>
  );
}