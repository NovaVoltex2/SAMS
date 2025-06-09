import React from "react";
import CustomCard from "../../components/custom component/CustomCard";
import ClassCard from "../../components/custom component/ClassCard";
import AddCard from "../../components/custom component/AddCard";
import { Input } from "../../components/ui/Input";

export default function Dashboard() {
  return (
    <div>
      <h2 className="font-semibold text-2xl px-5 sm:px-0">Basic Statistics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-12 py-5 px-5 sm:px-0 gap-5">
        <CustomCard
          title={"Total Classes Created"}
          stats={"00"}
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
        <Input className={"max-w-[30em]"} placeholder={"search course here"}/>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 sm:gap-5 p-5 gap-2">
        {Array.from({ length: 2 }).map((_, id) => (
          <ClassCard
            key={id}
            title={"CEC 418"}
            lecturer={"Mr. Kometa"}
            venue={"CLB II"}
            time={"Jan 18,2025 15:30"}
            id={id}
          />
        ))}
        <AddCard />
      </div>
    </div>
  );
}
