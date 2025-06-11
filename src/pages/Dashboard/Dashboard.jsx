import React, { useEffect, useState } from "react";
import CustomCard from "../../components/custom component/CustomCard";
import ClassCard from "../../components/custom component/ClassCard";
import AddCard from "../../components/custom component/AddCard";
import { Input } from "../../components/ui/Input";
import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

export default function Dashboard() {
  const router = useNavigate();
  const [currentUser, setCurrentUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    try {
      if (currentUser == null) {
        redirect("/");
        return;
      }
    } catch (error) {
      console.log(error.message);
      
    }
  }, [currentUser]);

  const [loading, setLoading] = useState(false);
  const [courses, SetCourses] = useState([]);

  // function to fetch all informations
  const fetchData = async () => {
    try {
      setLoading(true);
      const fetching = await fetch("http://localhost:4000/api/classes/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const response = await fetching.json();
      SetCourses(response.classes);
      console.log(courses);
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
  };

  // when the component mounts, fetch all the classes
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl px-5 sm:px-0">Basic Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 py-5 px-5 sm:px-0 gap-5">
        <CustomCard
          title={"Total Classes Created"}
          stats={courses?.length || "00"}
          description={"the total number of classes created in the system"}
          icon={"🛄"}
        />
        <CustomCard
          title={"Total Attendance"}
          stats={"00"}
          description={"the total number of Attendance in the system"}
          icon={"🧑‍🎓"}
        />
        <CustomCard
          title={"Over-all Attendance Rate"}
          stats={"00%"}
          description={"Percentage Rating of Attendance"}
          icon={"📈"}
        />
      </div>
      <hr />
      <div className="flex items-center justify-between py-5 flex-wrap px-5 sm:px-0">
        {" "}
        <h2 className="font-semibold text-2xl">All Classes</h2>
        <Input className={"max-w-[30em]"} placeholder={"search course here"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-5 p-5 gap-2">
        {courses.length > 0 ? (
          courses.map((item) => (
            <ClassCard
              key={item._id}
              title={item.className}
              lecturer={item.createdBy}
              venue={item.vanue}
              time={item.createdAt}
              id={item._id}
            />
          ))
        ) : (
          <p className="text-center col-span-full">No classes found.</p>
        )}
        {currentUser.isStudent == true? "" : (<AddCard />)}
      </div>
    </div>
  );
}
;