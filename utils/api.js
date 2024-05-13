const API_URL = "https://api.gramcracker.io"; // Adjust this to match your API server URL

export async function loginUser(credentials) {
	return fetch(`${API_URL}/users/login`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export async function registerUser(details) {
	return fetch(`${API_URL}/users/register`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(details),
	}).then((data) => data.json());
}
