import { Link, createFileRoute } from '@tanstack/react-router'
import swiflogo from '../swiflogo.jpg'
import Header from '@/components/Header'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="font-sans">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <img src={swiflogo} alt="SwiftDrop Logo" className="mx-auto mb-6 h-20 animate-bounce rounded-full" />
          <h1 className="text-5xl font-bold">SwiftDrop 🚀</h1>
          <p className="mt-4 text-lg">
            Fast, Secure & Reliable Delivery Services for Everyone
          </p>
          <Link
          to="/register"
            className="mt-6 inline-block px-8 py-3 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-600 transition"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="p-6 shadow-lg rounded-xl bg-white text-center">
          <h3 className="text-xl font-semibold">🚀 Fast Delivery</h3>
          <p className="mt-2 text-gray-600">Deliveries made on time, every time.</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl bg-white text-center">
          <h3 className="text-xl font-semibold">🔒 Secure Payments</h3>
          <p className="mt-2 text-gray-600">Your transactions are fully protected.</p>
        </div>
        <div className="p-6 shadow-lg rounded-xl bg-white text-center">
          <h3 className="text-xl font-semibold">📍 Real-time Tracking</h3>
          <p className="mt-2 text-gray-600">Know exactly where your package is.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="get-started"
        className="bg-blue-600 text-white text-center py-16 px-8"
      >
        <h2 className="text-3xl font-bold">Join SwiftDrop Today</h2>
        <p className="mt-2">Sign up now and experience stress-free deliveries.</p>
        <Link
          to="/register"
          className="mt-6 inline-block px-8 py-3 bg-orange-500 rounded-full text-white font-semibold hover:bg-orange-600 transition"
        >
          Create Account
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        <p>&copy; {new Date().getFullYear()} SwiftDrop. All rights reserved.</p>
        <p className="mt-2 space-x-4">
          <a href="/privacy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms" className="hover:text-white">Terms of Service</a>
        </p>
      </footer>
    </div>
  )
}
