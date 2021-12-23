import './App.sass';
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import Profile from "./components/Profile/Profile"
import Footer from "./components/Footer/Footer"
import Messages from "./components/Messages/Messages";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";



const App = (props) => {
    return (<Router>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<Profile state={props.state} dispatch={props.dispatch}/>} />
                        <Route path="/messages/*" element={<Messages state={props.state}/>} />
                        <Route path="/music/*" element={<Music/>} />
                        <Route path="/news/*" element={<News/>} />
                        <Route path="/settings/*" element={<Settings/>} />
                        <Route path="*" element={<div>Кожевник, тобою выбрана неверная ссылка</div>} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;

// <Route path="/messages/*" element={<Messages/>} />

