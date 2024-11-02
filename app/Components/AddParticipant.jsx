"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Table, TableFooter } from "@/components/ui/table";
import addNewParticipant from "@/lib/actions/addNewParticipant.action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddNewParticipant = () => {
  const router = useRouter();

  const [participantDetails, setParticipantDetails] = useState({
    name: "",
    school: "",
  });

  const handleAddParticipant = async () => {
    const newParticipant = await addNewParticipant(participantDetails);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Participant</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new Participant</DialogTitle>
          <DialogDescription>
            Enter details of the participant. Click Add when you are done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              placeholder="Enter name"
              className="col-span-3"
              onChange={(e) =>
                setParticipantDetails({
                  ...participantDetails,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="username"
              placeholder="Enter school"
              className="col-span-3"
              onChange={(e) =>
                setParticipantDetails({
                  ...participantDetails,
                  school: e.target.value,
                })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleAddParticipant}>
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewParticipant;
