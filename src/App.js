import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/footer/Footer";
import HeaderNavbar from "./Components/Navbar/HeaderNavbar";
import SideNavbar from "./Components/Navbar/SideNavbar";
import Trainings from "./pages/Trainings";
import Meetups from "./pages/Meetups";
import Webinars from "./pages/Webinars";
import Conference from "./pages/Conference";
import Videos from "./pages/Videos";
import Series from "./pages/Series";
import Blogs from "./pages/Blogs";
import Podcasts from "./pages/Podcasts";
import Speaker from "./pages/Speaker";
import Volunteer from "./pages/Volunteer";

function App() {
  return (
    <div className="App">
      <HeaderNavbar />
      <div className="backImage flexnav" >
        <div>
          <SideNavbar />
        </div>
        <div className="routes" >
          <Routes>
            <Route path="/trainings" exact element={<Trainings />} />
            <Route path="/meetups" exact element={<Meetups />} />
            <Route path="/webinars" exact element={<Webinars />} />
            <Route path="/conference" exact element={<Conference />} />
            <Route path="/videos" exact element={<Videos />} />
            <Route path="/series" exact element={<Series />} />
            <Route path="/blogs" exact element={<Blogs />} />
            <Route path="/podcasts" exact element={<Podcasts />} />
            <Route path="/speaker" exact element={<Speaker />} />
            <Route path="/volunteer" exact element={<Volunteer />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
