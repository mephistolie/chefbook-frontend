import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <BrowserRouter>
            <div className="d-flex flex-column" style={{
                minHeight: "100vh",
                alignContent: "space-between",
                justifyContent: "space-between",
            }}>
                <Header/>
                <div style={{marginTop: "64px"}}>
                    <AppRouter/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
