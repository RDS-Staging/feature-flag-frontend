import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import FeatureFlagList from './pages/FeatureFlagList';
import FeatureFlagDetails from './pages/FeatureFlagDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/featureFlag" element={<FeatureFlagList />} />
        <Route path="/featureFlag/:id" element={<FeatureFlagDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
