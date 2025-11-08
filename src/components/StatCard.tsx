import type React from "react";

function StatCard({ icon, title, value }: { icon: React.ReactNode; title: string; value: string | number } ) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center space-y-2">
      <div className="text-xl font-bold">{icon}</div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-gray-500">{value}</div>
    </div>
  )
}

export default StatCard