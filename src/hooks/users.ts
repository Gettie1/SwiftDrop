import { useMutation } from "@tanstack/react-query"

export const useUsers = () => {
    return useMutation({
        mutationKey: ['users'],
        mutationFn: async () => {
            const res = await fetch('/api/users')
            if (!res.ok) {
                throw new Error('Failed to fetch users')
            }
            return res.json()
        },
        onSuccess: (data) => {
            console.log('Fetched users:', data)
            return data
        },
        onError: (error) => {
            console.error('Failed to fetch users:', error)
        }
    })
}