"use client";
import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Updated menu structure to include price, availability, veg/non-veg, and quantity
const menu: { breakfast: any[]; lunch: any[]; dinner: any[] } = {
  breakfast: [
    { name: "Pancakes", price: 5, available: true, veg: true, quantity: 1 },
    { name: "Omelette", price: 4, available: true, veg: false, quantity: 1 },
    { name: "Toast", price: 2, available: true, veg: true, quantity: 1 },
    { name: "Fruit Salad", price: 3, available: false, veg: true, quantity: 1 },
  ],
  lunch: [
    { name: "Grilled Chicken", price: 8, available: true, veg: false, quantity: 1 },
    { name: "Caesar Salad", price: 7, available: true, veg: true, quantity: 1 },
    { name: "Pasta", price: 6, available: true, veg: true, quantity: 1 },
    { name: "Rice Bowl", price: 5, available: false, veg: true, quantity: 1 },
  ],
  dinner: [
    { name: "Steak", price: 12, available: true, veg: false, quantity: 1 },
    { name: "Soup", price: 4, available: true, veg: true, quantity: 1 },
    { name: "Grilled Fish", price: 10, available: true, veg: false, quantity: 1 },
    { name: "Vegetable Stir-fry", price: 8, available: false, veg: true, quantity: 1 },
  ],
};

export default function Page() {
  const [mealTime, setMealTime] = useState<"breakfast" | "lunch" | "dinner">("breakfast");
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  // Mess Details
  const messDetails = {
    name: "Foodie's Delight",
    address: "123 Tasty Avenue, Culinary City, 10101",
    owner: "John Doe",
    rating: 4.5,
  };

  return (
    <SidebarProvider
      style={{
        "--sidebar-width": "calc(var(--spacing) * 72)",
        "--header-height": "calc(var(--spacing) * 12)",
      } as React.CSSProperties}
    >
      <AppSidebar variant="inset" role={"admin"} />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col p-4">
          {/* Mess Information */}
          <div className="mb-6 p-4 rounded-lg shadow-md border bg-gray-100">
            <h2 className="text-2xl font-semibold mb-2">{messDetails.name}</h2>
            <p className="text-lg text-gray-700 mb-2">{messDetails.address}</p>
            <p className="text-lg text-gray-700 mb-2">Owner: {messDetails.owner}</p>
            <p className="text-lg text-yellow-500">Rating: {messDetails.rating} / 5</p>
          </div>

          <h2 className="text-xl font-bold mb-4">Food Menu</h2>
          <div className="flex space-x-4 mb-4">
            {Object.keys(menu).map((time) => (
              <Button
                key={time}
                variant={mealTime === time ? "default" : "outline"}
                onClick={() => setMealTime(time as "breakfast" | "lunch" | "dinner")}
              >
                {time.charAt(0).toUpperCase() + time.slice(1)}
              </Button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {menu[mealTime].map((item) => (
              <Card
                key={item.name}
                className={`cursor-pointer p-6 rounded-xl border shadow-lg transition-all duration-300 hover:shadow-xl ${
                  selectedItem === item.name ? "border-blue-500" : "border-gray-200"
                }`}
                onClick={() => setSelectedItem(item.name)}
              >
                <CardContent className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">Price: ${item.price}</p>
                  <p className={`text-sm ${item.available ? "text-green-500" : "text-red-500"} mb-2`}>
                    {item.available ? "Available" : "Out of Stock"}
                  </p>
                  <p className={`text-sm ${item.veg ? "text-green-500" : "text-red-500"} mb-2`}>
                    {item.veg ? "Veg" : "Non-Veg"}
                  </p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          {selectedItem && (
            <div className="mt-4">
              <p className="text-lg">Selected Item: {selectedItem}</p>
              <Button className="mt-2" onClick={() => alert(`Order placed for ${selectedItem}`)}>
                Place Order
              </Button>
            </div>
          )}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
