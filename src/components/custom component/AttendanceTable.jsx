import React from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/button";
import { Edit, Trash2 } from "lucide-react";

export default function AttendanceTable() {
  return (
    <Card
      className={
        "h-[65vh] overflow-y-scroll scroll-smooth scroll-hidden backdrop-blur-xs"
      }
    >
      {Array.from({ length: 50 }).map((_, id) => (
        <div
          className={
            "grid grid-cols-5 justify-center items-center text-center hover:bg-gray-100 cursor-default"
          }
          key={id}
        >
          <p>{id}</p>
          <p>Student Name</p>
          <p>Student Matricule</p>
          <p>Created At</p>
          <div className="flex gap-2 justify-center">
            <Button
              className={"cursor-pointer text-green-900 hover:bg-green-100"}
            >
              <Edit />
            </Button>
            <Button className={"cursor-pointer text-red-900 hover:bg-red-100"}>
              <Trash2 />
            </Button>
          </div>
        </div>
      ))}
    </Card>
  );
}
