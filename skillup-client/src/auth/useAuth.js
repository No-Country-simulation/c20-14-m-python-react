import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { jwtDecode } from "jwt-decode";
import { refreshAuthService } from "./refreshAuthService.js";

export const useAuth = create()(
	devtools(
		(set, get) => ({
			token: null,
			removeToken: () => {
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
			refreshToken: async () => {
				const token = localStorage.getItem("token");
				if (!token) return;

				const infoToken = jwtDecode(token);
				const currentTime = Math.floor(Date.now() / 1000);
				const daysInSeconds = 3 * 24 * 60 * 60;
				const isTimeToRefresh = currentTime - infoToken.iat > daysInSeconds;

				const { updateToken } = get();
				if (!isTimeToRefresh) return updateToken(token);

				try {
					const res = await refreshAuthService(token);
					const newToken = res.token;
					updateToken(newToken);
				} catch {
					const { removeToken } = get();
					removeToken();
				}
			}
		}),
		{ name: "auth" }
	)
);
