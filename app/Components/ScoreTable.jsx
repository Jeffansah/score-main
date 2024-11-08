import { Dialog } from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getAllParticipants from "@/lib/actions/getAllParticipants";
import AddNewParticipant from "./AddParticipant";
import Participants from "./Participants";

const ScoreTable = async () => {
  const participants = await getAllParticipants();

  return (
    <Table>
      <TableHeader>
        <TableRow className="font-bold">
          <TableHead className="w-[100px]">Participant</TableHead>
          <TableHead>School</TableHead>
          <TableHead>Round 1</TableHead>
          <TableHead>Round 2</TableHead>
          <TableHead>Round 3</TableHead>
          <TableHead>Round 4</TableHead>
          <TableHead>Round 5</TableHead>
          <TableHead className="">Total</TableHead>
          <TableHead className="">Rank</TableHead>
          <TableHead className="">Edit Scores</TableHead>
          <TableHead className="">Remove Participant</TableHead>
        </TableRow>
      </TableHeader>
      {participants && <Participants participants={participants} />}
    </Table>
  );
};

export default ScoreTable;
