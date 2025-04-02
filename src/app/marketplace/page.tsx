import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Line } from "recharts";
import Link from "next/link";

const foodMessData = [
  {
    messName: "Green Leaf Mess",
    location: "Block A, Ground Floor",
    price: "$5 per meal",
    foodType: "Veg",
    rating: 4.5,
    reviews: 200,
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=", // Replace with actual image path
  },
  {
    messName: "Spice Delight",
    location: "Block B, First Floor",
    price: "$6 per meal",
    foodType: "Non-Veg",
    rating: 4.7,
    reviews: 180,
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=", 
  },
  {
    messName: "Healthy Bites",
    location: "Block C, Second Floor",
    price: "$4.5 per meal",
    foodType: "Veg",
    rating: 4.2,
    reviews: 150,
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=", 
  },
  {
    messName: "Tandoori Treats",
    location: "Block D, Rooftop",
    price: "$7 per meal",
    foodType: "Non-Veg",
    rating: 4.8,
    reviews: 220,
    image: "https://media.istockphoto.com/id/1457433817/photo/group-of-healthy-food-for-flexitarian-diet.jpg?s=612x612&w=0&k=20&c=v48RE0ZNWpMZOlSp13KdF1yFDmidorO2pZTu2Idmd3M=", 
  },
];

export default function Page() {
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
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodMessData.map((mess, index) => (
            <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
              {/* Image Section */}
              <img
                src={mess.image}
                alt={mess.messName}
                className="w-full h-40 object-cover"
              />
              
              {/* Card Content */}
              <CardHeader className="p-4">
                <CardTitle className="text-lg font-semibold">
                  {mess.messName}
                </CardTitle>
                <p className="text-sm text-gray-600">{mess.foodType}</p>
              </CardHeader>

              <CardContent className="p-4 flex justify-between items-center">
                {/* Rating Section */}
                <div className="flex items-center text-yellow-500">
                  <Star size={16} fill="currentColor" className="mr-1" />
                  <span className="text-sm font-semibold">{mess.rating}</span>
                  <span className="text-xs text-gray-500 ml-1">({mess.reviews}+)</span>
                </div>

                {/* Price */}
                <p className="text-lg font-bold">{mess.price}</p>
              </CardContent>

              {/* Buttons */}
              <div className="p-4 flex gap-2">
                {/* View Details Button (Yellow with Green Text) */}
                 <Button className="w-1/2 bg-yellow-400 text-green-800 font-semibold">
                 <Link href={"/marketplace/dudnucncucnucnudnc"}>  View Details </Link> 
                </Button>
               

                {/* Add Button (Red with White Text) */}
                <Button className="w-1/2 bg-red-500 text-white font-semibold">
                  Add
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
