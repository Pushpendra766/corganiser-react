import "./App.css";
import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/player/:id" element={<VideoPlayer />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
