import { PublicLayout } from "@/layouts";
import { Home } from "@/pages/home";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route
} from "react-router-dom";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			{/* <Route path="/" element={<PrivateLayout />}></Route> */}
			<Route path="/" element={<PublicLayout />}>
				<Route path="/" element={<Home />}></Route>
			</Route>
			<Route path="*" element={<h1>404</h1>} />
		</Route>
	)
);
