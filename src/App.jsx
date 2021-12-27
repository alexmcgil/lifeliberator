import './App.sass';
import Header from "./components/Header/Header"
import Navigation from "./components/Navigation/Navigation"
import Profile from "./components/Profile/Profile"
import Footer from "./components/Footer/Footer"
import {Route, Routes } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";


const App = (props) =>
    (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*" element={<Profile store={props.store} />}/>
                    <Route path="/messages/*" element={<MessagesContainer store={props.store} />}/>
                    <Route path="/music/*" element={<Music/>}/>
                    <Route path="/news/*" element={<News/>}/>
                    <Route path="/settings/*" element={<Settings/>}/>
                    <Route path="*" element={<div>Кожевник, тобою выбрана неверная ссылка</div>}/>
                </Routes>
            </div>
            <Footer/>
        </div>

    )

export default App;

// <Route path="/messages/*" element={<Messages/>} />

