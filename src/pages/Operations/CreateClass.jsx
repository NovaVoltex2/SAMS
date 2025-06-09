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
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CreateClass() {
  const [error] = useState(null);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full py-8">
        <Link to={"../"}>
          <div className="flex gap-2 hover:gap-5 transition-all cursor-pointer">
            <ArrowLeft /> <p className="font-semibold">Back to Dasboard</p>
          </div>
        </Link>
      </div>
      <form action="">
        <Card className={"w-[20em] sm:w-[30em]"}>
          <CardHeader>
            <CardTitle className={"text-2xl font-bold"}>
              Create A Class
            </CardTitle>
            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-sm">
                Sorry,wrong password!
              </div>
            )}
          </CardHeader>
          <CardContent className={"flex flex-col gap-5"}>
            <Input placeholder="Class Name or Course Code" className={"py-6"} />
            <Input placeholder="Lecture's Name" className={"py-6"} />
            <Input placeholder="For Which Level" className={"py-6"} />
            <Input placeholder="Veneu" className={"py-6"} />
          </CardContent>
          <CardFooter className={"flex flex-col"}>
            <Button
              variant={"outline"}
              className={
                "w-full cursor-pointer hover:bg-black hover:text-white"
              }
            >
              Create Class
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
