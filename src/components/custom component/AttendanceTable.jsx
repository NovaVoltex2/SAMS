import React, { useState } from "react";
import { Card } from "../ui/Card";
import { Button } from "../ui/button";
import { Edit, Trash2 } from "lucide-react";

export default function AttendanceTable({ students, id }) {
  const [Matricule, setMatricule] = useState(students.matricule);
  const delteAttendee = async (matriculeToDelete) => { // Rename the parameter for clarity
    console.log(matriculeToDelete); // This should now log the correct matricule

    try {
      console.log(students); // This logs the entire students array prop

      const fetching = await fetch(
        `http://localhost:4000/api/classes/${id}/attendees`,
        {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ matricule: matriculeToDelete }), // Use the passed parameter
        }
      );
      const response = await fetching.json();
      console.log(response);
      if (!fetching.ok) {
        console.log("error fetching");
        return;
      }
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Card
      className={
        "h-[65vh] overflow-y-scroll scroll-smooth scroll-hidden backdrop-blur-xs"
      }
    >
      {students.map((item, key) => (
        <div
          className={
            "grid grid-cols-5 justify-center items-center text-center hover:bg-gray-100 cursor-default"
          }
          key={key}
        >
          <p>{key+1}</p>
          <p>{item.name}</p>
          <p>{item.matricule}</p>
          <p>{item.addedAt}</p>
          <div className="flex gap-2 justify-center">
            <Button
              onClick={() => delteAttendee(item.matricule)}
              className={"cursor-pointer text-red-900 hover:bg-red-100"}
            >
              <Trash2 />
            </Button>
          </div>
        </div>
      ))}
    </Card>
  );
}
