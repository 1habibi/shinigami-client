import { useState } from "react";

const useLoadingState = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const startLoading = () => setIsLoading(true);
	const stopLoading = () => setIsLoading(false);

	return { isLoading, startLoading, stopLoading };
};

export default useLoadingState;
