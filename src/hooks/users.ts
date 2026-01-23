// hooks/users.ts
import { useQuery } from "@tanstack/react-query"
import { getUserByRole, getUsers } from "@/api/users"

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: getUsers
    })
}

export const useGetUserByRole = (role: string) => {
    return useQuery({
        queryKey: ['usersByRole', role],
        queryFn: () => getUserByRole(role),
        enabled: !!role, // Only fetch if role is provided
    })
}