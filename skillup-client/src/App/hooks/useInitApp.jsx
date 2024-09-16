import { useEffect, useState } from "react";
import { useAuth } from "../../auth/useAuth.js";

export const useInitApp = () => {
	const [loading, setLoading] = useState(true);
	const refreshToken = useAuth(auth => auth.refreshToken);

	useEffect(() => {
		refreshToken().finally(() => setLoading(false));
	}, [refreshToken]);

	return { loading };
};
