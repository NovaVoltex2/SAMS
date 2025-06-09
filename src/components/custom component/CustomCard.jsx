import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";

export default function CustomCard({ title, stats, description, icon }) {
  return (
    <Card className={"capitalize backdrop-blur-xs"}>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className={"text-2xl font-bold"}>{title}</CardTitle>
          <div className="text-3xl cursor-pointer hover:bg-gray-100 p-2 rounded-sm">{icon}</div>
        </div>
        <div>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className={"text-6xl font-semibold"}>{stats}</CardContent>
    </Card>
  );
}
