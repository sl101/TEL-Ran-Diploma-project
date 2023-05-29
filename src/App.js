import { Route, Routes, useNavigate } from 'react-router-dom';
import './fonts/fonts.css';
import './reset.css';
import './App.css';
import { Layout } from './components';
import {
	CategoriesListPage,
	MainPage,
	NotFoundPage,
	ProductInfoPage,
	ProductsListPage,
	ShopingCartPage,
} from './pages';
import { useEffect } from 'react';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/');
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<MainPage />} />
					<Route path="categories" element={<CategoriesListPage />} />
					<Route path="products" element={<ProductsListPage />} />
					<Route path="categories/:id" element={<ProductsListPage />} />
					<Route path="products/:id" element={<ProductInfoPage />} />
					<Route path="cart" element={<ShopingCartPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
