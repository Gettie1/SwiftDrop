import { useQuery } from "@tanstack/react-query"
import { getAllParcels } from "@/api/parcel"

export const useParcels = () => {
    return useQuery({
        queryKey: ['parcels'],
        queryFn: getAllParcels
    })
        
}