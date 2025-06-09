import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/Input";
import { X } from 'lucide-react';

export default function AddAttendance({close,onClose}) {
  const [error] = useState(null);
  return (
    <div
      className={`${
        close ? `absolute` : `hidden`
      } top-0 left-0 bg-[#0000004b] backdrop-blur-xs flex justify-center items-center w-full h-full`}
    >
      <form action="">
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
            <Input placeholder="Student Name" className={"py-6"} />
            <Input placeholder="Matricule" className={"py-6"} />
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
