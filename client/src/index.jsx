import React from 'react';
import reactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import AppRouter from './components/AppRouter.jsx';

reactDOM.render(<HashRouter><AppRouter /></HashRouter>, document.getElementById('root'));
