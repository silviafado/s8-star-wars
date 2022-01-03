import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import ListPage from '../pages/ListPage';
import ShipPage from '../pages/ShipPage';

// Exercise 5: Routes
const Path = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/list/" element={<ListPage />} />
            <Route path="/starships/:id" element={<ShipPage />} />
            <Route path="*" element={() => <div>404</div>} />
        </Routes>
    </BrowserRouter>
);

export default Path;