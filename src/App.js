import "./App.css";
import { Header } from "./components/header";
import { LearningSection } from "./components/learningSection";
import { Footer } from "./components/footer";

function App() {
    return (
        <div className="flex flex-col gap-10">
            <Header />
            <LearningSection />
            <Footer />
        </div>
    );
}

export default App;
