"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

// Define the Order type
type Order = {
  id: string;
  userName: string;
  phoneNumber: string;
  address: string;
  orderStatus: "Delivered" | "Pending" | "Processing";
  price: string;
  orderTime: string;
  messAddress: string;
  deliveryTime: string;
  paymentStatus: "Paid" | "Pending" | "Failed";
};

// Sample order data
const orders: Order[] = [
  {
    id: "ORD123",
    userName: "John Doe",
    phoneNumber: "+1 234 567 890",
    address: "123 Main Street, NY",
    orderStatus: "Delivered",
    price: "$15",
    orderTime: "10:30 AM",
    messAddress: "Green Leaf Mess, Block A",
    deliveryTime: "11:15 AM",
    paymentStatus: "Paid",
  },
  {
    id: "ORD124",
    userName: "Alice Smith",
    phoneNumber: "+1 987 654 321",
    address: "456 Elm Street, CA",
    orderStatus: "Pending",
    price: "$12",
    orderTime: "09:00 AM",
    messAddress: "Healthy Bites, Block C",
    deliveryTime: "10:00 AM",
    paymentStatus: "Pending",
  },
];

export default function Page() {
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" role={"admin"} />
      <SidebarInset>
        <SiteHeader />
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Order Details</h2>
          
          {/* Order Table */}
          <Table className="border border-gray-200 shadow-md rounded-md">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead>Order ID</TableHead>
                <TableHead>User Name</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Order Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => (
                <TableRow key={index}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.userName}</TableCell>
                  <TableCell>{order.phoneNumber}</TableCell>
                  <TableCell>{order.address}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-sm rounded ${
                        order.orderStatus === "Delivered"
                          ? "bg-green-200 text-green-800"
                          : order.orderStatus === "Pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : "bg-blue-200 text-blue-800"
                      }`}
                    >
                      {order.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="ghost"
                          onClick={() => setSelectedOrder(order)}
                        >
                          <Eye className="text-blue-600" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Order Details</DialogTitle>
                        </DialogHeader>
                        {selectedOrder && (
                          <div className="space-y-2">
                            <p><strong>User Name:</strong> {selectedOrder.userName}</p>
                            <p><strong>Phone Number:</strong> {selectedOrder.phoneNumber}</p>
                            <p><strong>Address:</strong> {selectedOrder.address}</p>
                            <p><strong>Mess Address:</strong> {selectedOrder.messAddress}</p>
                            <p><strong>Price:</strong> {selectedOrder.price}</p>
                            <p><strong>Order Time:</strong> {selectedOrder.orderTime}</p>
                            <p><strong>Delivery Time:</strong> {selectedOrder.deliveryTime}</p>
                            <p><strong>Payment Status:</strong> 
                              <span className={`ml-1 px-2 py-1 text-sm rounded ${
                                selectedOrder.paymentStatus === "Paid"
                                  ? "bg-green-200 text-green-800"
                                  : selectedOrder.paymentStatus === "Pending"
                                  ? "bg-red-200 text-red-800"
                                  : "bg-gray-200 text-gray-800"
                              }`}>
                                {selectedOrder.paymentStatus}
                              </span>
                            </p>
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
