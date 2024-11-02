"use server";

import { connectToDatabase } from "@/mongo";
import Participant from "@/mongo/models/participantModel";

const addNewParticipant = async (participant) => {
  try {
    await connectToDatabase();

    const newParticipant = await Participant.create(participant);
    return JSON.parse(JSON.stringify(newParticipant));
  } catch (error) {
    console.log(error);
  }
};

export default addNewParticipant;
