"use server";

import { connectToDatabase } from "@/mongo";
import Participant from "@/mongo/models/participantModel";

const editParticipant = async (participantId, updatedScores) => {
  try {
    await connectToDatabase();

    const participant = await Participant.findById(participantId);

    if (!participant) throw new Error("Participant not found");

    for (const round in updatedScores) {
      if (participant[round] && updatedScores[round].score !== undefined) {
        participant[round].score = updatedScores[round].score;
      }
    }

    participant.total =
      participant.round1.score +
      participant.round2.score +
      participant.round3.score +
      participant.round4.score +
      participant.round5.score;

    const updatedParticipant = await participant.save();
    return JSON.parse(JSON.stringify(updatedParticipant));
  } catch (error) {
    console.log(error);
    throw new Error("Failed to edit participant");
  }
};

export default editParticipant;
