import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import AppContainer from "./components/AppContainer";
import NotFound from "./components/NotFound";
import Course from "./components/Course";
import FaqRoute from "./components/FaqRoute";
import LoginForm from "./components/LoginForm";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <BrowserRouter>
    {/* Browser router wraps all the Routes*/}
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/">
        <Redirect to="/courses" />
      </ProtectedRoute>
      <ProtectedRoute exact path="/courses" component={AppContainer} />
      <ProtectedRoute exact path="/courses/:id" component={Course} />
      <ProtectedRoute exact path="/faq" component={FaqRoute} />
      <ProtectedRoute eaxact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
);

export default App;
