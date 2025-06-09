import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { Link } from "react-router-dom";
export default function AddCard() {
  return (
    <Card
      className={
        "capitalize border-dashed border-2 cursor-pointer hover:bg-gray-200 backdrop-blur-xs"
      }
    >
      <Link
        to={"create"}
        className={
          "text-6xl font-semibold justify-center flex items-center h-full"
        }
      >
        <CardContent>+</CardContent>
      </Link>
    </Card>
  );
}
