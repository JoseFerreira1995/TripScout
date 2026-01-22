"use client";
import { useState } from "react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { SearchIcon, User2Icon } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchBar() {
  const [destination, setDestination] = useState<string>("");
  const [numOfTravelers, setNumOfTravelers] = useState<number>(1);

  return (
    <div className="bg-white grid-rows-3 space-y-2 m-10 sm:flex ">
      <div className="border-black">
        <InputGroup className="">
          <InputGroupInput
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          ></InputGroupInput>
          <InputGroupAddon align="inline-start">
            <SearchIcon></SearchIcon>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div>
        <InputGroup>
          <InputGroupInput></InputGroupInput>
        </InputGroup>
      </div>
      <InputGroup>
        <InputGroupInput
          type="number"
          value={numOfTravelers}
          onChange={(e) => setNumOfTravelers(parseInt(e.target.value) || 1)}
        ></InputGroupInput>
        <InputGroupAddon align="inline-start">
          <User2Icon></User2Icon>
        </InputGroupAddon>
      </InputGroup>
      <Button className="w-full sm:w-15">Search</Button>
    </div>
    // Todo: change color pallet in the main css file
  );
}
