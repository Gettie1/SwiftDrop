import { Store } from "@tanstack/store";
import type { LoginResponse } from "@/types/auth";

const initialState: LoginResponse = {
    isAuthenticated: false,
    user:{
        id: '',
        username: '',
        email: '',
        role: ''
    },
    access_token: undefined,
    refresh_token: undefined,
};
export const AuthStore: Store<LoginResponse> = new Store<LoginResponse>(initialState);
export const authActions = {
    setUser: (data: LoginResponse) => {
        const processedData = {
            ...data,
            user: {
                ...data.user,
                role: typeof data.user.role === 'string' ? data.user.role.toLowerCase() : data.user.role,
                
            },  
            access_token: data.access_token,
            refresh_token: data.refresh_token,
        };
        AuthStore.setState(processedData);
        localStorage.setItem('auth', JSON.stringify(processedData));
    },
    clearUser: () => {
        AuthStore.setState(initialState);
        localStorage.removeItem('auth');
    },
    initializeUser: () => {
        const storedAuth = localStorage.getItem('auth');
        if (storedAuth) {
            try {
                const parsedAuth: LoginResponse = JSON.parse(storedAuth);
                AuthStore.setState(parsedAuth);
            } catch (error) {
                console.error("Failed to parse auth data:", error);
                localStorage.setItem('auth', JSON.stringify(initialState));
            }
        } else {
            AuthStore.setState(initialState);
        }
    }
};
authActions.initializeUser();