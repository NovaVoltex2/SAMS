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
import { useNavigate } from "react-router-dom";

export default function Login() {
  const router = useNavigate()
    const [error, setError] = useState(false);
  // state to hold all the user data
  const [userdata, setUserDdata] = useState({
    "username": "",
    "password": ""
  })
  const [Loading, setLoading] = useState(false)

  // function to handel submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const fetching = await fetch("http://localhost:4000/api/students/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userdata),
      });

      console.log(JSON.stringify(userdata));
      const response = await fetching.json();
       console.log(response);
      if (!fetching.ok) {
        setError(true)
        return;
      }
      router("/dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    } finally {
      setLoading(false)
    }
  }

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
      <form onSubmit={handleSubmit}>
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
            <Input
              placeholder="username"
              value={userdata.username}
              onChange={(e) => {
                setUserDdata({ ...userdata, username: e.target.value });
              }}
              className={"py-6"}
            />
            <Input
              onChange={(e) => {
                setUserDdata({ ...userdata, password: e.target.value });
              }}
              value={userdata.password}
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
              {Loading ? "Loading....." : "Log In"}
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
