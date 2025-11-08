import { useMutation } from "@tanstack/react-query"
import { getAllParcels } from "@/api/parcel"

export const useParcels = () => {
    return useMutation({
        mutationKey: ['parcels'],
        mutationFn: getAllParcels,
        onSuccess: (data) => {
            console.log('Fetched parcels:', data)
        },
        onError: (error) => {
            console.error('Failed to fetch parcels:', error)
        }
    })
}