import { Package, Ship, TrendingUp, User } from 'lucide-react'
import { useMemo } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import StatCard from '../StatCard'
import type { ParcelData } from '@/types/parcel'
import { AuthStore } from '@/store/authStore'
import { useParcels } from '@/hooks/parcels'
import { useGetUserByRole } from '@/hooks/users'

const STATUS_COLORS = {
  pending: '#fbbf24',
  in_transit: '#3b82f6',
  delivered: '#10b981',
  cancelled: '#ef4444',
}

function AdminDashboard() {
  const { user } = AuthStore.state
  const { data: customers } = useGetUserByRole('customer')
  const { data: couriers } = useGetUserByRole('courier')
  const { data: parcels } = useParcels()

  const totalUsers = customers?.length || 0
  const totalDeliveries = parcels?.length || 0
  const totalCouriers = couriers?.length || 0

  // Calculate delivery status distribution
  const deliveryStatusData = useMemo(() => {
    if (!parcels) return []

    const statusCounts = parcels.reduce(
      (acc, parcel: ParcelData) => {
        acc[parcel.status] = (acc[parcel.status] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    return Object.entries(statusCounts).map(([status, count]) => ({
      name: status.replace('_', ' ').toUpperCase(),
      value: count,
      color: STATUS_COLORS[status as keyof typeof STATUS_COLORS],
    }))
  }, [parcels])

  // Calculate active vs completed deliveries
  const deliveryMetrics = useMemo(() => {
    if (!parcels) return { active: 0, completed: 0, cancelled: 0 }

    return parcels.reduce(
      (acc, parcel: ParcelData) => {
        if (parcel.status === 'delivered') acc.completed++
        else if (parcel.status === 'cancelled') acc.cancelled++
        else acc.active++
        return acc
      },
      { active: 0, completed: 0, cancelled: 0 },
    )
  }, [parcels])

  const metricsBarData = [
    { name: 'Active', value: deliveryMetrics.active, fill: '#3b82f6' },
    { name: 'Completed', value: deliveryMetrics.completed, fill: '#10b981' },
    { name: 'Cancelled', value: deliveryMetrics.cancelled, fill: '#ef4444' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">
          Welcome,{' '}
          {user.username.charAt(0).toUpperCase() + user.username.slice(1)} 👑
        </h1>
        <p className="text-muted-foreground">
          Here is the summary of your platform activities
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard icon={<User />} title="Total Customers" value={totalUsers} />
        <StatCard
          icon={<Ship />}
          title="Total Deliveries"
          value={totalDeliveries}
        />
        <StatCard
          icon={<User />}
          title="Total Couriers"
          value={totalCouriers}
        />
        <StatCard
          icon={<TrendingUp />}
          title="Active Deliveries"
          value={deliveryMetrics.active}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Delivery Status Distribution */}
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Package className="w-5 h-5" />
            Delivery Status Distribution
          </h2>
          {deliveryStatusData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={deliveryStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {deliveryStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              No delivery data available
            </div>
          )}
        </div>

        {/* Delivery Metrics */}
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <Ship className="w-5 h-5" />
            Delivery Metrics
          </h2>
          {parcels && parcels.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={metricsBarData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              No delivery data available
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
