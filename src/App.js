import { Route, Routes } from 'react-router-dom';
import './fonts/fonts.css';
import './reset.css';
import './App.css';
import { Layout } from './components';
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
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="categories" element={<CategoriesListPage />} />
					<Route path="products" element={<ProductsListPage />} />
					<Route path="categories/:id" element={<ProductsListPage />} />
					<Route path="products/:id" element={<ProductItemPage />} />
					<Route path="cart" element={<ShopingCartPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
