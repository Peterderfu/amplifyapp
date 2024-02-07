import { Routes, Route } from 'react-router-dom';
import RegisteredUsers from '../pages/userPage';

export default function MyRoutes() {
    return (
        <Routes>
            <Route path="/RegisteredUsers" element={<RegisteredUsers />} />
        </Routes>
    )
}
