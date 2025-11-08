export interface ParcelData {
    id: string
    senderId: string
    recipientId: string
    description: string
    pickupAddress: string
    weight: number
    status: 'pending' | 'in_transit' | 'delivered' | 'cancelled'
    createdAt: string
    updatedAt: string
}