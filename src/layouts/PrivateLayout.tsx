import { Header } from "@/modules/header";
import { Outlet } from "react-router-dom";

interface PrivateLayoutProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: JSX.Element;
}

export const PrivateLayout = ({
	children = <Outlet />
}: PrivateLayoutProps) => {
	// const { session } = useGlobalProvider();
	// const test = 1;

	// if (test) {
	// 	return <Navigate to="/sign-in" />;
	// }

	return (
		<div>
			<Header />
			<main className="px-10 pt-32">{children}</main>
			{/* <footer>FOOTER</footer> */}
		</div>
	);
};
