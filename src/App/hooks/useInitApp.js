import { useEffect, useState } from "react";
import { useAuth } from "../../auth/useAuth.js";

export const useInitApp = () => {
	const [loading, setLoading] = useState(true);
	const refreshToken = useAuth(auth => auth.refreshToken);

	useEffect(() => {
		const controller = new AbortController();
		refreshToken(controller.signal).finally(() => setLoading(false));

		() => controller.abort();
	}, [refreshToken]);

	return { loading };
};
