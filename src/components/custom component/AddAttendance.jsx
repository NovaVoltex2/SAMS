import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/Input";
import { X } from "lucide-react";
import { useParams } from "react-router-dom";

export default function AddAttendance({ classId, close, onClose }) {
  const [error] = useState(null);
  const [attendee, setAttendee] = useState({ name: "", matricule: "" });
  const { id } = useParams()

  const AddAttendee = async (e) => {
    e.preventDefault();
    try {
      const fetching = await fetch(
        `http://localhost:4000/api/classes/${id}/attendees`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(attendee),
        }
      );
      const response = await fetching.json();
      console.log(response);
      if (!fetching.ok) {
        setError(true);
        setErrorMessage("error fetching");
        return;
      }
      window.location.reload();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div
      className={`${
        close ? `absolute` : `hidden`
      } top-0 left-0 bg-[#0000004b] backdrop-blur-xs flex justify-center items-center w-full h-screen`}
    >
      <form onSubmit={AddAttendee}>
        <Card className={"w-[30em] bg-white"}>
          <div className="flex justify-end px-5">
            <Button
              variant={"outline"}
              className={
                "hover:bg-black hover:text-white text-xs cursor-pointer"
              }
              onClick={onClose}
            >
              <X />
            </Button>
          </div>
          <CardHeader>
            <CardTitle className={"text-2xl font-bold"}>
              Add Name To Attendance List
            </CardTitle>
            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-sm">
                Sorry,wrong password!
              </div>
            )}
          </CardHeader>
          <CardContent className={"flex flex-col gap-5"}>
              <Input
                placeholder="Student Name"
                className={"py-6"}
                onChange={(e) => {
                  setAttendee({ ...attendee, name: e.target.value });
                }}
              />
              <Input
                placeholder="Matricule"
                className={"py-6"}
                onChange={(e) => {
                  setAttendee({ ...attendee, matricule: e.target.value });
                }}
              />
          </CardContent>
          <CardFooter className={"flex flex-col"}>
            <Button
              type={"submit"}
              variant={"outline"}
              className={
                "w-full cursor-pointer hover:bg-black hover:text-white"
              }
            >
              Add To Attendance
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
