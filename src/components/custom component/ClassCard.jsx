import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/Card";
import { LucideArrowUpRightFromSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClassCard({ title, lecturer, venue, time,id }) {
  return (
    <Card
      className={"capitalize hover:shadow hover:outline-1 backdrop-blur-xs"}
    >
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className={"text-2xl font-bold"}>{title}</CardTitle>
          <Link to={`details/${id}`}>
            <div className="text-xl cursor-pointer hover:bg-gray-100 p-2 rounded-sm">
              <LucideArrowUpRightFromSquare />
            </div>
          </Link>
        </div>
        <div>
          <CardDescription>{lecturer}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex justify-between items-center">
        <CardContent className={"text-2xl font-semibold"}>{venue}</CardContent>
        <p className="pr-2">{time}</p>
      </div>
    </Card>
  );
}
