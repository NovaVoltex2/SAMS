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
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const router = useNavigate()
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    matricule: ""
})
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("")
   const [Loading, setLoading] = useState(false);

// signup function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const fetching = await fetch("http://localhost:4000/api/students/", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const response = await fetching.json();
      setErrorMessage(response)
      if (!fetching.ok) {
        setError(true);
        setErrorMessage("error fetching")
        return;
      }
      router("/dashboard");
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

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
      <form onSubmit={handleSubmit}>
        <Card className={"w-[27em]"}>
          <CardHeader>
            <CardTitle className={"text-2xl font-bold"}>Sign Up</CardTitle>
            {error && (
              <div className="bg-red-100 text-red-600 p-2 rounded-sm">
                {errorMessage}
              </div>
            )}
          </CardHeader>
          <CardContent className={"flex flex-col gap-5"}>
            <Input
              placeholder="username"
              onChange={(e) => {
                setUserData({ ...userData, username: e.target.value });
              }}
              required
              className={"py-6"}
            />
            <Input
              placeholder="email"
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              required
              type={"email"}
              className={"py-6"}
            />
            <Input
              placeholder="Matricule"
              onChange={(e) => {
                setUserData({ ...userData, matricule: e.target.value });
              }}
              required
              className={"py-6"}
            />
            <Input
              placeholder="password"
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
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
              {Loading ? "Loading....." : "Sign Up"}
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
