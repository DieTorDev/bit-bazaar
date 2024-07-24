import Header from './components/Header/Header';
import Search from './components/Search/Search';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Search />
		</>
	);
};

export default App;
