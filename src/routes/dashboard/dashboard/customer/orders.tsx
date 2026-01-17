import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/dashboard/customer/orders')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/dashboard/customer/orders"!</div>
}
