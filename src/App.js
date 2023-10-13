import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { MenuContextProvider } from "./context/MenuContext.jsx";
import HomeComponent from "./components/HomeComponent.jsx";
import LoginComponent from './components/accounts/LoginComponent';
import SignupComponent from "./components/accounts/SignupComponent";
import AccountComponent from './components/accounts/AccountComponent';
import AboutComponent from './components/about/AboutComponent';
import ProtfolioComponent from './components/protfolio/ProtfolioComponent';
import Navbar from './components/Navbar';
import ProjectDetailsComponent from './components/protfolio/ProjectDetailsComponent';

function App() {
  return (
    <MenuContextProvider>
      <Router>
        <div className="w-screen h-screen">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomeComponent />} />
            <Route path="about" element={<AboutComponent />} />
            <Route path="myprotfolio" element={<ProtfolioComponent />} />
            <Route path="project/:projectName" element={<ProjectDetailsComponent />} />
            <Route path="account" element={<AccountComponent />}>
              <Route path="login" element={<LoginComponent />} />
              <Route path="signup" element={<SignupComponent />} />
              <Route path="*" element={<Navigate to="login" />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </MenuContextProvider>
  );
}

export default App;
