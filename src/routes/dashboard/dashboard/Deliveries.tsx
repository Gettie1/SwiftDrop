import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/dashboard/Deliveries')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    {/* Parcels to be delivered */}
    <h1 className="text-2xl font-bold mb-4">Deliveries</h1>
  </div>
}
