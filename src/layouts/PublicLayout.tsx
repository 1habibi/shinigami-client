import { Header } from "@/modules/header";
import { Outlet } from "react-router-dom";

interface PublicLayoutProps extends React.ComponentPropsWithoutRef<"div"> {
	children?: JSX.Element;
}

export const PublicLayout = ({ children = <Outlet /> }: PublicLayoutProps) => {
	// const { session, isResetPasswordValid } = useGlobalProvider();

	// if (session && !isResetPasswordValid) {
	// 	return <Navigate to="/" />;
	// }

	return (
		<div>
			<Header />
			<main className="">{children}</main>
			{/* <footer>FOOTER</footer> */}
		</div>
	);
};
