"use server";

import { connectToDatabase } from "@/mongo";
import Participant from "@/mongo/models/participantModel";

const deleteParticipant = async (participantId) => {
  try {
    await connectToDatabase();

    const deletedParticipant = await Participant.findByIdAndDelete(
      participantId
    );
    if (!deletedParticipant) {
      throw new Error("Participant not found");
    }

    return JSON.parse(JSON.stringify(deletedParticipant));
  } catch (e) {
    console.log(e);
    throw new Error("Failed to delete participant");
  }
};

export default deleteParticipant;
