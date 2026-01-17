import { createFileRoute } from '@tanstack/react-router'
import type { ParcelData } from '@/types/parcel'
import { useParcels } from '@/hooks/parcels'

export const Route = createFileRoute('/dashboard/dashboard/Deliveries')({
  component: RouteComponent,
})

function RouteComponent() {
  const { data: parcels } = useParcels()
  return (
    <div>
      {/* Parcels to be delivered */}
      <h1 className="text-2xl font-bold mb-4">Deliveries</h1>
      {/* table to display parcels */}
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">ID</th>
            <th className="py-2 px-4 border-b border-gray-200">Sender</th>
            <th className="py-2 px-4 border-b border-gray-200">Recipient</th>
            <th className="py-2 px-4 border-b border-gray-200">Weight</th>
            <th className="py-2 px-4 border-b border-gray-200">Description</th>
            <th className="py-2 px-4 border-b border-gray-200">Status</th>
            <th className="py-2 px-4 border-b border-gray-200">
              Pickup Address
            </th>
            <th className="py-2 px-4 border-b border-gray-200">Created At</th>
          </tr>
        </thead>
        <tbody>
          {parcels?.map((parcel: ParcelData) => (
            <tr key={parcel.id}>
              <td className="py-2 px-4 border-b border-gray-200">
                {parcel.id}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {parcel.senderId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {parcel.recipientId}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {parcel.weight}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {parcel.description}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {parcel.status}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {parcel.pickupAddress}
              </td>
              <td className="py-2 px-4 border-b border-gray-200">
                {new Date(parcel.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
