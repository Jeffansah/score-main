"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import addNewParticipant from "@/lib/actions/addNewParticipant.action";
import { useRouter } from "next/navigation";
import { useState } from "react";

const AddNewParticipant = () => {
  const router = useRouter();

  const { toast } = useToast();

  const [participantDetails, setParticipantDetails] = useState({
    name: "",
    school: "",
  });

  const handleAddParticipant = async () => {
    const newParticipant = await addNewParticipant(participantDetails);
    if (!newParticipant) {
      toast({
        title: "Error",
        description:
          "We run into an issue adding participant, Please try again.",
        className: "bg-red-400 text-white capitalize",
      });
      return;
    }

    toast({
      title: "Participant Added",
      description: "New participant has been added to the quiz.",
      className: "bg-emerald-400 text-white",
    });
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add New Participant</Button>
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
          <DialogClose asChild>
            <Button type="submit" onClick={handleAddParticipant}>
              Add Participant
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewParticipant;
