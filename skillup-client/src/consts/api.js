class Url {
	baseUrl = "https://skillup-pi83.onrender.com/api";
	login = `${this.baseUrl}/login/`;
	singUp = `${this.baseUrl}/register/`;
	refreshToken = `${this.baseUrl}/token-refresh/`;
}

export const API = new Url();
