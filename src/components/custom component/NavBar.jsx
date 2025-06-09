import React from "react";
import { Button } from "../ui/button";
import { LogOutIcon, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex justify-between my-3 shadow p-5 rounded-sm bg-black text-white items-center sticky w-full top-5 z-50">
      <div>
        <h2 className="font-bold flex gap-1 text-2xl items-center">
          <Star />
          S.A.M.S
        </h2>
      </div>
      <div className="flex justify-center items-center gap-10">
        <p className="flex items-center">
          <p className="text-3xl">👋</p> Hello!,{" "}
          <em className="font-bold capitalize">{"username"}</em>
        </p>
        <Link to={"/"}>
          <Button
            variant={"outline"}
            className={
              "cursor-pointer hover:bg-white hover:text-black flex justify-center items-center gap-2"
            }
          >
            <LogOutIcon /> <p className="hidden sm:block">Log out</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
