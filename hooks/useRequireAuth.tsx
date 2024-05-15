// src/hooks/useRequireAuth.ts
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const useRequireAuth = (redirectUrl = "/sign-in") => {
	const { token } = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (!token) {
			router.push(redirectUrl);
		}
	}, [token, router, redirectUrl]);

	return token;
};

export default useRequireAuth;
