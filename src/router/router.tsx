import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import NotFound from '../pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/home',
		element: <h1>Home</h1>,
	},
	{
		path: '*',
		element: <NotFound />,
	},
]);

export default router;
