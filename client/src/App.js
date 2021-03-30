import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/404";
import SignIn from "./pages/Auth";

function App() {
  const { auth } = useSelector((store) => store.login);
  const EditTask = lazy(() => import("./pages/EditTask"));
  const SuspensedEdit = () => (
    <Suspense fallback={MainPage}>
      <EditTask />
    </Suspense>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/login" component={SignIn} />
        {auth ? (
          <Route path="/edit/:id" component={SuspensedEdit} />
        ) : (
          <Redirect to="/">
            <Route component={MainPage} />
          </Redirect>
        )}
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
