import { Bell, Book, Home, Settings, Ship, User2 } from "lucide-react";
import { Role } from "../types/auth";

const navLinks = [
    {
        label: 'Admin',
        links: [
            { to: '/admin/dashboard', icon: Home, title: 'Dashboard' },
            { to: '/admin/users', icon: User2, title: 'Users' },
            { to: '/admin/deliveries', icon: Ship, title: 'Deliveries' },
            { to: '/admin/reports', icon: Book, title: 'Reports' },
            { to: '/admin/settings', icon: Settings, title: 'Settings' },
        ]
    },
    {
        label: 'Customer',
        links: [
            { to: '/customer/orders', icon: Ship, title: 'Orders' },
            { to: '/customer/cart', icon: Home, title: 'Cart' },
            { to: '/customer/profile', icon: User2, title: 'Profile' },
            { to: '/customer/payments', icon: Ship, title: 'Payments' },
            { to: '/customer/notifications', icon: Bell, title: 'Notifications' },
            { to: '/customer/settings', icon: Settings, title: 'Settings' },
        ]
    },
    {
        label: 'Courier',
        links: [
            { to: '/courier/assignments', icon: Home, title: 'Assignments' },
            { to: '/courier/route', icon: Home, title: 'Route' },
            { to: '/courier/deliveries', icon: Home, title: 'Deliveries' },
            { to: '/courier/profile', icon: Home, title: 'Profile' },
            { to: '/courier/notifications', icon: Home, title: 'Notifications' },
            { to: '/courier/settings', icon: Settings, title: 'Settings' },
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