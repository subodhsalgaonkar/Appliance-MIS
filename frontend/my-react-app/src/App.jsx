import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Appliance from './components/Appliance';
import GroupDescription from './components/GroupDescription';
import ApplianceDetails from './components/ApplianceDetails';
import AddAppliance from './components/AddAppliances';
import "./App.css";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/appliance" element={<Appliance />} />
                    <Route path="/group-description" element={<GroupDescription />} />
                    <Route path='/appliance-details' element={<ApplianceDetails/>}/>
                    <Route path='/add-appliance' element={<AddAppliance/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
