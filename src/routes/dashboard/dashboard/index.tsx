import { createFileRoute } from '@tanstack/react-router'
import AdminDashboard from '@/components/dashboard/AdminDashboard'

export const Route = createFileRoute('/dashboard/dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <AdminDashboard />
  </div>
}
