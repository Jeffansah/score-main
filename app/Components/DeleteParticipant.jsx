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
import { useToast } from "@/hooks/use-toast";
import deleteParticipant from "@/lib/actions/deleteParticipant.action";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const DeleteParticipant = ({ participant }) => {
  const router = useRouter();

  const { toast } = useToast();

  const handleDeleteParticipant = async () => {
    const deletedParticipant = await deleteParticipant(participant._id);
    if (!deletedParticipant) {
      toast({
        title: "Error",
        description:
          "We encountered an issue deleting the participant. Please try again.",
        className: "bg-red-400 text-white",
      });
      return;
    }

    toast({
      title: "Participant Removed",
      description: `${
        deletedParticipant.name.split(" ")[0]
      } has been removed from the quiz.`,
      className: "bg-amber-400 text-white",
    });
    router.refresh();
  };

  return (
    <Dialog>
      <DialogTrigger>
        <XIcon className="w-4" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently remove the
            participant and all their data
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" onClick={handleDeleteParticipant}>
              Remove Participant
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteParticipant;
