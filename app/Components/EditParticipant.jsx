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
import { Label } from "@/components/ui/label";
import { Table, TableFooter } from "@/components/ui/table";
import addNewParticipant from "@/lib/actions/addNewParticipant.action";
import editParticipant from "@/lib/actions/editParticipant.action";
import { PencilIcon, SquarePenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const EditParticipant = ({ participant }) => {
  const router = useRouter();

  const [scores, setScores] = useState({
    round1: { score: participant.round1.score },
    round2: { score: participant.round2.score },
    round3: { score: participant.round3.score },
    round4: { score: participant.round4.score },
    round5: { score: participant.round5.score },
  });

  const handleScoreChange = (round, newScore) => {
    setScores((prevScores) => ({
      ...prevScores,
      [round]: { score: Number(newScore) },
    }));
  };

  const handleEditParticipant = async () => {
    const editedParticipant = await editParticipant(participant._id, scores);
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <PencilIcon className="w-4 shadow-none cursor-pointer" />
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Participant Scores</DialogTitle>
          <DialogDescription>
            Edit scores of the participant. Click save changes when you are
            done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="round1">Round 1</Label>
            <Input
              id="round1"
              placeholder="Enter score"
              className="col-span-3"
              value={scores.round1.score}
              onChange={(e) => handleScoreChange("round1", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="round2">Round 2</Label>
            <Input
              id="round2"
              placeholder="Enter score"
              className="col-span-3"
              value={scores.round2.score}
              onChange={(e) => handleScoreChange("round2", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="round3">Round 3</Label>
            <Input
              id="round3"
              placeholder="Enter score"
              className="col-span-3"
              value={scores.round3.score}
              onChange={(e) => handleScoreChange("round3", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="round4">Round 4</Label>
            <Input
              id="round4"
              placeholder="Enter score"
              className="col-span-3"
              value={scores.round4.score}
              onChange={(e) => handleScoreChange("round4", e.target.value)}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="round5">Round 5</Label>
            <Input
              id="round5"
              placeholder="Enter score"
              className="col-span-3"
              value={scores.round5.score}
              onChange={(e) => handleScoreChange("round5", e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleEditParticipant}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditParticipant;
