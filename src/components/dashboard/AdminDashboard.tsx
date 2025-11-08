import { Home, Ship } from "lucide-react";
import StatCard from "../StatCard";
import { AuthStore } from "@/store/authStore"
import { useProfiles } from "@/hooks/profile";
import { useParcels } from "@/hooks/parcels";

function AdminDashboard() {
  const {user} = AuthStore.state;
  const {data: profiles} = useProfiles();
  const {data: parcels} = useParcels();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      {/* first letter uppercase */}
      <p>Welcome, {user.username.charAt(0).toUpperCase() + user.username.slice(1)} 👑!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        <StatCard icon={<Home />} title="Total Users" value={profiles} />
        <StatCard icon={<Ship />} title="Total Deliveries" value={parcels} />
        {/* <StatCard icon={<Book />} title="Total Reports" value={userStats.totalReports} /> */}
      </div>
    </div>
  )
}

export default AdminDashboard