import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

export default function Login() {


  const [error] = useState(null);



  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl py-8">
        <em className="text-2xl">Welcome Back!</em>, to{" "}
        <abbr
          title="Student Attendance Management System"
          className="font-bold"
        >
          {" "}
          SAMS
        </abbr>
      </h1>
      <form action="">
        <Card className={"w-[27em]"}>
          <CardHeader>
            <CardTitle className={"text-2xl font-bold"}>Log in</CardTitle>
            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-sm">
                Sorry,wrong password!
              </div>
            )}
          </CardHeader>
          <CardContent className={"flex flex-col gap-5"}>
            <Input placeholder="username" className={"py-6"} />
            <Input
              placeholder="password"
              type={"password"}
              className={"py-6"}
            />
          </CardContent>
          <CardFooter className={"flex flex-col"}>
            <Button
              variant={"outline"}
              className={
                "w-full cursor-pointer hover:bg-black hover:text-white"
              }
            >
              Log In
            </Button>
            <Link to={"/signup"} className="py-4 hover:underline">
              Create an Account
            </Link>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
