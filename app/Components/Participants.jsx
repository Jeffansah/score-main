"use client";

import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { ordinalSuffix } from "@/lib/utils";
import { useParticipantStore } from "@/store";
import { useEffect } from "react";
import EditParticipant from "./EditParticipant";
import DeleteParticipant from "./DeleteParticipant";

const Participants = ({ participants }) => {
  return (
    <TableBody>
      {participants.map((participant) => {
        participant.total =
          participant.round1.score +
          participant.round2.score +
          participant.round3.score +
          participant.round4.score +
          participant.round5.score;

        const rankedParticipants = participants
          .slice()
          .sort((a, b) => b.total - a.total);

        const rank =
          rankedParticipants.findIndex((p) => p.total === participant.total) +
          1;

        return (
          <TableRow key={participant._id}>
            <TableCell>{participant.name}</TableCell>
            <TableCell>{participant.school}</TableCell>
            <TableCell>{participant.round1.score}</TableCell>
            <TableCell>{participant.round2.score}</TableCell>
            <TableCell>{participant.round3.score}</TableCell>
            <TableCell>{participant.round4.score}</TableCell>
            <TableCell>{participant.round5.score}</TableCell>
            <TableCell>{participant.total}</TableCell>
            <TableCell
              className={
                rank === 1
                  ? "text-emerald-400"
                  : rank === 2
                  ? "text-blue-400"
                  : rank === 3
                  ? "text-yellow-400"
                  : rank === rankedParticipants.length
                  ? "text-red-500"
                  : "text-gray-500"
              }
            >
              {ordinalSuffix(rank)}
            </TableCell>

            <TableCell>
              <EditParticipant participant={participant} />
            </TableCell>
            <TableCell>
              <DeleteParticipant participant={participant} />
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default Participants;
