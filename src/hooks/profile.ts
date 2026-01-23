import { useMutation, useQuery } from "@tanstack/react-query"
import { getAllProfiles, getProfileByUserId, getUpdateProfile } from "@/api/profiles"

export const useProfile = (user?:string) => {
    return useQuery({
        queryKey: ['profile', user],
        queryFn: () => getProfileByUserId(user!),
        enabled: !!user, // Only run the query if userId is provided
    })
}

export const useProfiles = () => {
    return useQuery({
        queryKey: ['profiles'],
        queryFn: getAllProfiles
    })

}

export const useUpdateProfile = () => {
    return useMutation({
        mutationFn: ({profileId, profileData}: {profileId: string, profileData: Partial<any>}) => 
            getUpdateProfile(profileId, profileData)
    })
}