import { useMutation } from '@tanstack/react-query'
import type { LoginResponse, RegisterData, loginData } from '@/types/auth'
import { login, register } from '@/api/auth'

export const useLogin = () => {
  return useMutation<LoginResponse, Error, loginData>({
    mutationKey: ['login'],
    mutationFn: login,
    onSuccess: (data) => {
      console.log('Login successful:', data)
    },
    onError: (error) => {
      console.error('Login failed:', error)
    }
  })
}
export const useRegister = () => {
  return useMutation<{ user: any; profile: any }, Error, RegisterData>({
    mutationKey: ['register'],
    mutationFn: register,
    onSuccess: (data) => {
      console.log('Registration successful:', data)
    },
    onError: (error) => {
      console.error('Registration failed:', error)
    }
  })
}
