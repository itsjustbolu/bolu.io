import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import TopNav from "./components/TopNav";
import NewPostPage from "./pages/NewPostPage";
import NewProjectPage from "./pages/NewProjectPage";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    <Router>
      <TopNav />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/blog" component={BlogPage} exact />
        <Route path="/contact" component={ContactPage} exact />
        <Route path="/projects" component={ProjectsPage} exact />
        <Route path="/admin" component={AdminPage} exact />
        <Route path="/admin/new-post" component={NewPostPage} exact />
        <Route path="/admin/new-project" component={NewProjectPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
