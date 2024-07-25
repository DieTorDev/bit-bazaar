import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { GlobalStyles } from './styles/GlobalStyles';
import UserProvider from './providers/UserProvider';

const App = () => {
	return (
		<BrowserRouter>
			<UserProvider>
				<GlobalStyles />
				<Router />
			</UserProvider>
		</BrowserRouter>
	);
};

export default App;
