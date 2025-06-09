import React, { useEffect, useState } from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/button";
import { ArrowLeft, PlusCircle, Printer } from "lucide-react";
import AttendanceTable from "../../components/custom component/AttendanceTable";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import AddAttendance from "../../components/custom component/AddAttendance";

export default function ClassDetails() {
  const {id} = useParams()
  const [close, setClose] = useState(false);
  const [courseData, SetCourseData] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchClassData = async() =>{
    try {
      setLoading(true);
      const fetching = await fetch(`http://localhost:4000/api/classes/${id}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const response = await fetching.json();
      SetCourseData(response);
      console.log(courseData);
      if (!fetching.ok) {
        setError(true);
        return;
      }
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }


  // fetch course data when page mounts
  useEffect(() => {
    fetchClassData()
  }, [])
  
  
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
                Attendance Sheet for :: <b>{courseData.className}</b>
              </h1>
              <p className="text-center">
                {" "}
                <p>{courseData.createdBy}</p>
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
                  Date/Time: <b>{courseData.createdAt}</b>
                </p>
                <p>
                  Attendance Count: <b>{courseData.attendees?.length}</b>
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
        {courseData.attendees?.length == 0 ? (
          <p className="text-center mt-5">No attendees yet</p>
        ) : courseData.attendees ? (
          <AttendanceTable students={courseData?.attendees} />
        ) : (
          <p>Nothing to show</p>
        )}
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
