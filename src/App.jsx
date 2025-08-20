
import Home from './components/Home';
import './index.css';
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		{/* Support hash links for sections, e.g. /#about, /#projects, etc. */}
		<Route path="/*" element={<Home />} />
		{/* Optionally, add a 404 fallback: */}
		{/* <Route path="*" element={<div>404 Not Found</div>} /> */}
	</Routes>
);

export default App;
