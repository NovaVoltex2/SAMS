import React, { useState } from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { ArrowLeft, PlusCircle, Printer } from "lucide-react";
import AttendanceTable from "../../components/custom component/AttendanceTable";
import { Link } from "react-router-dom";
import AddAttendance from "../../components/custom component/AddAttendance";

export default function ClassDetails() {
  const [close, setClose] = useState(false);
  return (
    <div className="relative">
      {" "}
      <div className="py-5">
        <Card className={"px-5 backdrop-blur-xs"}>
          <div className="flex justify-between items-center flex-wrap sm:flex-nowrap gap-5">
            <div className="w-full">
              <Link to={"../"}>
                <div className="flex gap-2 hover:gap-5 transition-all cursor-pointer">
                  <ArrowLeft />{" "}
                  <p className="font-semibold">Back to Dasboard</p>
                </div>
              </Link>
            </div>
            <div className="w-full">
              <h1 className="font-semibold text-2xl text-center">
                Attendance Sheet for :: <b>{"CEC 418"}</b>
              </h1>
              <p className="text-center">
                {" "}
                <p>Mr.Kometa Dennis</p>
              </p>
            </div>
            <div className="w-full flex flex-col items-end">
              <div className="flex gap-2">
                <Button
                  variant={"outline"}
                  className={
                    "flex gap-3 cursor-pointer hover:bg-black hover:text-white"
                  }
                >
                  <Printer /> Print Attendance
                </Button>
                <Button
                  onClick={() => {
                    setClose(!close);
                  }}
                  variant={"outline"}
                  className={
                    "flex gap-3 cursor-pointer hover:bg-black hover:text-white"
                  }
                >
                  <PlusCircle /> Add Name To Attendance
                </Button>
              </div>
              <div className="flex gap-5">
                <p>
                  Date/Time: <b>{"12-02-2025 15:30"}</b>
                </p>
                <p>
                  Attendance Count: <b>{"50"}</b>
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div className="pt-2">
        <Card
          className={
            "grid grid-cols-5 justify-center items-center text-center font-bold backdrop-blur-xs"
          }
        >
          <p>No</p>
          <p>Student Name</p>
          <p>Student Matricule</p>
          <p>Created At</p>
          <p>Operations</p>
        </Card>
        <AttendanceTable />
      </div>
      <AddAttendance
        close={close}
        onClose={() => {
          setClose(!close);
        }}
      />
    </div>
  );
}
