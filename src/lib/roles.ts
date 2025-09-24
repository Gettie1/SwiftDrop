import { Home } from "lucide-react";
import { Role } from "../types/auth";

const navLinks = [
    {
        label: 'Admin',
        links: [
            { to: '/admin/dashboard', icon: Home, title: 'Dashboard' },
            { to: '/admin/users', icon: Home, title: 'Users' },
            { to: '/admin/deliveries', icon: Home, title: 'Deliveries' },
            { to: '/admin/reports', icon: Home, title: 'Reports' },
            { to: '/admin/settings', icon: Home, title: 'Settings' },
        ]
    },
    {
        label: 'Customer',
        links: [
            { to: '/customer/orders', icon: Home, title: 'Orders' },
            { to: '/customer/cart', icon: Home, title: 'Cart' },
            { to: '/customer/profile', icon: Home, title: 'Profile' },
            { to: '/customer/payments', icon: Home, title: 'Payments' },
            { to: '/customer/notifications', icon: Home, title: 'Notifications' },
            { to: '/customer/settings', icon: Home, title: 'Settings' },
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
            { to: '/courier/settings', icon: Home, title: 'Settings' },
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