import { GlobalContext } from "@/providers";
import { useContext } from "react";

export const useGlobalProvider = () => {
	return useContext(GlobalContext);
};
