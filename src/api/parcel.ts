import { getHeaders } from './auth'
import type { ParcelData } from '@/types/parce'

const url = 'http://localhost:4001'

export const createParcel = async (parcelData: ParcelData) => {
  const response = await fetch(`${url}/parcel`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(parcelData),
  })
  if (!response.ok) {
    throw new Error('Failed to create parcel')
  }
  return response.json()
}

export const getParcelById = async (parcelId: string) => {
  const response = await fetch(`${url}/parcel/${parcelId}`, {
    method: 'GET',
    headers: getHeaders(),
  })
  if (!response.ok) {
    throw new Error('Failed to fetch parcel')
  }
  return response.json()
}

export const getAllParcels = async () => {
  const response = await fetch(`${url}/parcel`, {
    method: 'GET',
    headers: getHeaders(),
  })
    if (!response.ok) {
    throw new Error('Failed to fetch parcels')
  }
  return response.json()
}

export const updateParcelStatus = async (
  parcelId: string,
  status: string,
) => {
  const response = await fetch(`${url}/parcel/${parcelId}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify({ status }),
  })
  if (!response.ok) {
    throw new Error('Failed to update parcel status')
  }
  return response.json()
}

export const assignCourierToParcel = async (
    parcelId: string,
    courierId: string,
) => {
    const response = await fetch(`${url}/parcel/${parcelId}/assign-courier`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ courierId }),
    })
    if (!response.ok) {
        throw new Error('Failed to assign courier to parcel')
    }
    return response.json()
}
