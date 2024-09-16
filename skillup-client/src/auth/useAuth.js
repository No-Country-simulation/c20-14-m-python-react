import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { refreshAuthService } from "./refreshAuthService.js";

export const useAuth = create()(
	devtools(
		(set, get) => ({
			token: null,
			logout: () => {
				set({ token: null });
				localStorage.removeItem("token");
			},
			updateToken: token => {
				set({ token });
				localStorage.setItem("token", token);
			},
			getInfoToken() {
				const { token } = get();
				if (!token) return;
				const infoToken = jwtDecode(token);
				return infoToken;
			},
			refreshToken: async signal => {
				const token = localStorage.getItem("token");
				if (!token) return;

				try {
					const infoToken = jwtDecode(token);
					const currentTime = Math.floor(Date.now() / 1000);
					const hoursInSeconds = 5; // 12h en segundos
					const isTimeToRefresh = currentTime - infoToken.iat > hoursInSeconds;

					const { updateToken } = get();
					if (!isTimeToRefresh) return updateToken(token);

					const { token: newToken } = await refreshAuthService(signal, token);
					return updateToken(newToken);
				} catch {
					const { logout } = get();
					return logout();
				}
			}
		}),
		{ name: "auth" }
	)
);
