import type { RegisterData, loginData } from "@/types/auth";
import { AuthStore } from "@/store/authStore";

export const url = 'http://localhost:4001';

export const getHeaders = () => {
  const token = AuthStore.state.access_token;
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

// ✅ Login (auth only)
export const login = async (data: loginData) => {
  const response = await fetch(`${url}/auth/signin`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }
 const result = await response.json();
 console.log('Login response:', result);
  return result;
};

// ✅ Register (create user → then profile)
export const register = async (data: RegisterData) => {
  // 1️⃣ Create user
  const userResponse = await fetch(`${url}/users`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      role: data.role,
    }),
  });

  if (!userResponse.ok) {
    throw new Error('User registration failed');
  }

  const user = await userResponse.json();

  // 2️⃣ Create profile linked to that user
  const profileResponse = await fetch(`${url}/profiles`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify({
      userId: user.id,
      firstname: data.firstName,
      lastname: data.lastName,
      address: data.address,
      phoneNumber: data.phoneNumber,
    }),
  });

  if (!profileResponse.ok) {
    throw new Error('Profile creation failed');
  }

  const profile = await profileResponse.json();

  // Return both results if you need them
  return { user, profile };
};
