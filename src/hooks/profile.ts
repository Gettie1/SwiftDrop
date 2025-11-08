import { useMutation } from "@tanstack/react-query"
import { getAllProfiles, getProfileByUserId, getUpdateProfile } from "@/api/profiles"

export const useProfile = () => {
    return useMutation({
        mutationKey: ['profile'],
        mutationFn: getProfileByUserId,
        onSuccess: (data) => {
            console.log('Fetched profile:', data)
        },
        onError: (error) => {
            console.error('Failed to fetch profile:', error)
        }
    })
}

export const useProfiles = () => {
    return useMutation({
        mutationKey: ['profiles'],
        mutationFn: getAllProfiles,
        onSuccess: (data) => {
            console.log('Fetched profiles:', data)
        },
        onError: (error) => {
            console.error('Failed to fetch profiles:', error)
        }
    })
}

export const useUpdateProfile = () => {
    return useMutation<any, unknown, [string, Partial<any>]>({
        mutationKey: ['updateProfile'],
        mutationFn: ([profileId, profileData]) => getUpdateProfile(profileId, profileData),
        onSuccess: (data) => {
            console.log('Profile updated successfully:', data)
        },
        onError: (error) => {
            console.error('Failed to update profile:', error)
        }
    })
}