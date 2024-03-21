import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './approuter';
import Nav from './components/nav';
import Footer from './components/footer'; 
import "../globals.css";

const App = () => {
    return (
        <Router>
            <div>
                <Nav /> 
                <AppRouter />
                <Footer />
            </div>
        </Router>
    );
};

export default App;
