import { createFileRoute } from '@tanstack/react-router'
import { useProfile } from '@/hooks/profile';
import { AuthStore } from '@/store/authStore';

export const Route = createFileRoute('/dashboard/dashboard/profile')({
  component: RouteComponent,
})

function RouteComponent() {
    const {user} = AuthStore.state;
    console.log('Current user:', user);
    // Fetch profile data using the useProfile hook
    const { data: profile } = useProfile(user.id);

  return <div>
    <h1 className="text-2xl font-bold mb-4">Profile</h1>
    {/* <p>This is your Profile Information.</p> */}
    {/* Display profile information */}
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-2">Profile Information</h2>
      <p><strong>Username:</strong> {profile?.username}</p>
      <p><strong>Email:</strong> {profile?.email}</p>
      <p><strong>Role:</strong> {profile?.role}</p>
        <p><strong>Address:</strong> {profile?.address}</p>
        <p><strong>First Name:</strong> {profile?.firstName}</p>
        <p><strong>Last Name:</strong> {profile?.lastName}</p>
        <p><strong>Phone Number:</strong> {profile?.phone}</p>
      {/* Add more profile fields as needed */}
    </div>
  </div>
}
