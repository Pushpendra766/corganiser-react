import "./App.css";
import { Header } from "./components/header";
import { LearningSection } from "./components/learningSection";

function App() {
    return (
        <div className="mt-10 flex flex-col gap-10">
            <Header />
            <LearningSection />
        </div>
    );
}

export default App;
