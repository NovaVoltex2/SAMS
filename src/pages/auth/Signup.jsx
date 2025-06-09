import React, { useState } from 'react'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/button";
import { Link } from 'react-router-dom';

export default function Signup() {

  const [error] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-2xl py-8">
        <em className="text-2xl">Welcome!</em>, to{" "}
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
            <CardTitle className={"text-2xl font-bold"}>Sign Up</CardTitle>
            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-sm">
                Sorry,wrong password!
              </div>
            )}
          </CardHeader>
          <CardContent className={"flex flex-col gap-5"}>
            <Input placeholder="username" required className={"py-6"} />
            <Input
              placeholder="email"
              required
              type={"email"}
              className={"py-6"}
            />
            <Input placeholder="Matricule" required className={"py-6"} />
            <Input
              placeholder="password"
              type={"password"}
              required
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
              Sign Up
            </Button>
            <Link to={"/"} className="py-4 hover:underline">
              Already have an Account
            </Link>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
