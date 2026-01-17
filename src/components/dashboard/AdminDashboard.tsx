import { Ship, User } from "lucide-react";
import StatCard from "../StatCard";
import { AuthStore } from "@/store/authStore"
// import { useProfiles } from "@/hooks/profile";
import { useParcels } from "@/hooks/parcels";
import { useGetUserByRole } from "@/hooks/users";

function AdminDashboard() {
  const {user} = AuthStore.state;
  const {data: customers} = useGetUserByRole('customer');
  const {data: couriers} = useGetUserByRole('courier');
  console.log('Users with role customer:', customers);
  // const {data: profiles} = useProfiles();
  const {data: parcels } = useParcels();
  console.log('Parcels:', parcels);
  const totalUsers = customers?.length || 0;
  const totalDeliveries = parcels?.length || 0;
  console.log('eee',AuthStore.state);
  return (
    <div>
      {/* <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1> */}
      {/* first letter uppercase */}
      <p className="font-bold">Welcome, {user.username.charAt(0).toUpperCase() + user.username.slice(1)} 👑!</p>
      <p className="text-center">Here is the summary of your activities:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <StatCard icon={<User />} title="Total Users" value={totalUsers} />
        <StatCard icon={<Ship />} title="Total Deliveries" value={totalDeliveries} />
        <StatCard icon={<User />} title="Total Couriers" value={couriers?.length || 0} />
      </div>
      {/* graph showing deliveries against status */}
      
    </div>
  )
}

export default AdminDashboard