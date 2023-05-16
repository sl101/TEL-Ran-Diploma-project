import './fonts/fonts.css';
import './reset.css';
import './App.css';
import { Footer, Header } from './components';
import { Route, Routes } from 'react-router-dom';
import {
	CategoriesListPage,
	MainPage,
	NotFoundPage,
	ProductItemPage,
	ProductsListPage,
	ShopingCartPage,
} from './pages';

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<MainPage />} />
					<Route path="/categories" element={<CategoriesListPage />} />
					<Route path="/products" element={<ProductsListPage />} />
					<Route path="/products/:id" element={<ProductItemPage />} />
					<Route path="/cart" element={<ShopingCartPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
