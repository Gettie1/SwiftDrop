// hooks/users.ts
import { useQuery } from "@tanstack/react-query"
import { getUserByRole } from "@/api/users"

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('/api/users')
            if (!res.ok) {
                throw new Error('Failed to fetch users')
            }
            return res.json()
        }
    })
}

export const useGetUserByRole = (role: string) => {
    return useQuery({
        queryKey: ['usersByRole', role],
        queryFn: () => getUserByRole(role),
        enabled: !!role, // Only fetch if role is provided
    })
}