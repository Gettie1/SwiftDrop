import { Bell, Book, Home, Settings, Ship, User2 } from "lucide-react";
import { Role } from "../types/auth";

const navLinks = [
    {
        label: 'Admin',
        links: [
            { to: '/dashboard/dashboard/', icon: Home, title: 'Dashboard' },
            { to: '/dashboard/dashboard/users', icon: User2, title: 'Users' },
            { to: '/dashboard/dashboard/Deliveries', icon: Ship, title: 'Deliveries' },
            { to: '/dashboard/reports', icon: Book, title: 'Reports' },
            { to: '/dashboard/dashboard/settings', icon: Settings, title: 'Settings' },
        ]
    },
    {
        label: 'Customer',
        links: [
            { to: '/dashboard/dashboard/customer/orders', icon: Ship, title: 'Orders' },
            { to: '/dashboard/dashboard/customer/cart', icon: Home, title: 'Cart' },
            { to: '/dashboard/dashboard/profile', icon: User2, title: 'Profile' },
            { to: '/dashboard/dashboard/customer/payments', icon: Ship, title: 'Payments' },
            { to: '/dashboard/dashboard/customer/notifications', icon: Bell, title: 'Notifications' },
            { to: '/dashboard/dashboard/settings', icon: Settings, title: 'Settings' },
        ]
    },
    {
        label: 'Courier',
        links: [
            { to: '/dashboard/dashboard/courier/assignments', icon: Home, title: 'Assignments' },
            { to: '/dashboard/dashboard/courier/route', icon: Home, title: 'Route' },
            { to: '/dashboard/dashboard/courier/deliveries', icon: Home, title: 'Deliveries' },
            { to: '/dashboard/dashboard/profile', icon: Home, title: 'Profile' },
            { to: '/dashboard/dashboard/courier/notifications', icon: Home, title: 'Notifications' },
            { to: '/dashboard/dashboard/settings', icon: Settings, title: 'Settings' },
        ]
    }
];
    
export const checkRole = (userRole: string) => {
    switch (userRole) {
        case Role.ADMIN:
            return navLinks.filter((group) => ['admin'].includes(group.label.toLowerCase()));
        case Role.CUSTOMER:
            return navLinks.filter((group) => ['customer'].includes(group.label.toLowerCase()));
        case Role.COURIER:
            return navLinks.filter((group) => ['courier'].includes(group.label.toLowerCase()));
        default:
            return [];
    }
};