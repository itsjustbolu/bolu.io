import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import TopNav from "./components/TopNav";
import BlogNewPost from "./pages/BlogNewPost";
import BlogAdminPage from "./pages/BlogAdminPage";

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/blog" component={BlogPage} exact />
        <Route path="/blog/admin" component={BlogAdminPage} exact />
        <Route path="/blog/new-post" component={BlogNewPost} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/projects" component={ProjectsPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
