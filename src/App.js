import "./App.css";
import { Home } from "./components/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { VideoPlayer } from "./components/videoPlayer";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/player" element={<VideoPlayer />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
