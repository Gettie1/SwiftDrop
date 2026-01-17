import { createFileRoute } from '@tanstack/react-router'
import type { Profile } from '@/types/auth';
import { useUsers } from '@/hooks/users';

export const Route = createFileRoute('/dashboard/dashboard/users')({
  component: RouteComponent,
})

function RouteComponent() {
    const {data: users } = useUsers();
  return <div>
    {/* sumary of all system users */}
    <h1 className="text-2xl font-bold mb-4">Users</h1>
    <p>This is the Users page.</p>
    {/* table to display users */}
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b border-gray-200">ID</th>
          <th className="py-2 px-4 border-b border-gray-200">First Name</th>
          <th className="py-2 px-4 border-b border-gray-200">Last Name</th>
          <th className="py-2 px-4 border-b border-gray-200">Username</th>
          <th className="py-2 px-4 border-b border-gray-200">Email</th>
          <th className="py-2 px-4 border-b border-gray-200">Phone</th>
          <th className="py-2 px-4 border-b border-gray-200">Address</th>
          <th className="py-2 px-4 border-b border-gray-200">Role</th>
          {/* <th className="py-2 px-4 border-b border-gray-200">Created At</th> */}
        </tr>
      </thead>
      <tbody>
        {users?.map((user: Profile) => (
          <tr key={user.id}>
            <td className="py-2 px-4 border-b border-gray-200">{user.id}</td>
            <td className="py-2 px-4 border-b border-gray-200">{user.firstName}</td>
            <td className="py-2 px-4 border-b border-gray-200">{user.lastName}</td>
            <td className="py-2 px-4 border-b border-gray-200">{user.username}</td>
            <td className="py-2 px-4 border-b border-gray-200">{user.email}</td>
            <td className="py-2 px-4 border-b border-gray-200">{user.phone}</td>
            <td className="py-2 px-4 border-b border-gray-200">{user.address}</td>
            <td className="py-2 px-4 border-b border-gray-200">{user.role}</td>
            {/* <td className="py-2 px-4 border-b border-gray-200">{new Date(user.createdAt).toLocaleDateString()}</td> */}
          </tr>
        ))}
      </tbody>
    </table>

  </div>
}
