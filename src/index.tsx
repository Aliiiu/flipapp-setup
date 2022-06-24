import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SchoolForm from './pages/schoolForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import TermsAndYear from './pages/TermsAndYear';
import Subject from './pages/Subject';
import Classes from './pages/Classes';
import Departments from './pages/Departments';
import SuperAdmin from './pages/SuperAdmin';
import Welcome from './pages/Welcome';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route path='/school-form' element={<SchoolForm />} />
			<Route path='/terms-and-year' element={<TermsAndYear />} />
			<Route path='/add-subject' element={<Subject />} />
			<Route path='/add-class' element={<Classes />} />
			<Route path='/add-department' element={<Departments />} />
			<Route path='/superadmin' element={<SuperAdmin />} />
			<Route path='/welcome' element={<Welcome />} />
		</Routes>
	</BrowserRouter>
);
