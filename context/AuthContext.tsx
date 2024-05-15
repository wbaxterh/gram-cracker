// src/context/AuthContext.tsx
"use client";
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { useRouter } from "next/navigation"; // using new next navigation

interface AuthData {
	token: string | null;
	email: string | null;
}

interface AuthContextType extends AuthData {
	login: (token: string, email: string) => void;
	logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

interface AuthProviderProps {
	children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [authData, setAuthData] = useState<AuthData>({
		token: null,
		email: null,
	});
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");
		const email = localStorage.getItem("email");
		if (token && email) {
			setAuthData({ token, email });
		}
	}, []);

	const login = (token: string, email: string) => {
		localStorage.setItem("token", token);
		localStorage.setItem("email", email);
		setAuthData({ token, email });
		router.push("/profile"); // redirect to profile page
	};

	const logout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("email");
		setAuthData({ token: null, email: null });
	};

	return (
		<AuthContext.Provider value={{ ...authData, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
