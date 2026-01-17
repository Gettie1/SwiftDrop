import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard/dashboard/customer/payments')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/dashboard/customer/payments"!</div>
}
