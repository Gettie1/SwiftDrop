import { getHeaders } from './auth'

const url = 'http://localhost:4001'

export interface ProfileData {
  userId: string
  firstName: string
  lastName: string
  phone: string
  address: string
  role: 'customer' | 'admin' | 'courier'
}

export const createProfile = async (profileData: ProfileData) => {
  const response = await fetch(`${url}/profile`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(profileData),
  })
  if (!response.ok) {
    throw new Error('Failed to create profile')
  }
  return response.json()
}

export const getProfileByUserId = async (userId: string) => {
  const response = await fetch(`${url}/profile/user/${userId}`, {
    method: 'GET',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to fetch profile')
  }
  return response.json()
}

export const getAllProfiles = async () => {
  const response = await fetch(`${url}/profile`, {
    method: 'GET',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to fetch profiles')
  }
  return response.json()
}

export const getUpdateProfile = async (
  profileId: string,
  profileData: Partial<ProfileData>,
) => {
  const response = await fetch(`${url}/profile/${profileId}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(profileData),
  })
  if (!response.ok) {
    throw new Error('Failed to update profile')
  }
  return response.json()
}

export const deleteProfile = async (profileId: string) => {
  const response = await fetch(`${url}/profile/${profileId}`, {
    method: 'DELETE',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to delete profile')
  }
  return response.json()
}
