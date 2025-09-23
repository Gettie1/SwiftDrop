import { Link } from "@tanstack/react-router";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 text-center py-6">
            <p>&copy; {new Date().getFullYear()} SwiftDrop. All rights reserved.</p>
            <p className="mt-2 space-x-4">
                <Link to="/" className="hover:text-white">Privacy Policy</Link>
                <Link to="/" className="hover:text-white">Terms of Service</Link>
            </p>
        </footer>
    )
}