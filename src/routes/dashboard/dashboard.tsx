import { Outlet, createFileRoute } from "@tanstack/react-router"
import { Sidebar } from "@/components/Sidebar"
// import Header from "@/components/Header"
import { Navbar } from "@/components/NavBar"
import Footer from "@/components/Footer"

export const Route = createFileRoute('/dashboard/dashboard')({
  component: RouteComponent,
})
function RouteComponent() {
   return <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
            </main>
            </div>
            <Footer />
        </div>
}