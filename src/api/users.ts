import { getHeaders } from './auth'

const url = 'http://localhost:4001'

export const createUser = async (userData: {
  email: string
  password: string
}) => {
  const response = await fetch(`${url}/users`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(userData),
  })
  if (!response.ok) {
    throw new Error('Failed to create user')
  }
  return response.json()
}

export const getUsers = async () => {
  const response = await fetch(`${url}/users`, {
    method: 'GET',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  return response.json()
}
export const getUserById = async (id: string) => {
  const response = await fetch(`${url}/users/${id}`, {
    method: 'GET',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to fetch user')
  }
  return response.json()
}
export const updateUser = async (id: string, data: any) => {
  const response = await fetch(`${url}/users/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(data),
  })
  if (!response.ok) {
    throw new Error('Failed to update user')
  }
  return response.json()
}
export const deleteUser = async (id: string) => {
  const response = await fetch(`${url}/users/${id}`, {
    method: 'DELETE',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to delete user')
  }
  return response.json()
}
export const getUserByRole = async (role: string) => {
  const response = await fetch(`${url}/users/role/${role}`, {
    method: 'GET',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to fetch users by role')
  }
  return response.json()
} 
