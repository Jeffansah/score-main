"use server";

import { connectToDatabase } from "@/mongo";

import Participant from "@/mongo/models/participantModel";

const getAllParticipants = async () => {
  try {
    await connectToDatabase();

    const participants = await Participant.find();
    return JSON.parse(JSON.stringify(participants));
  } catch (error) {
    console.log(error);
  }
};

export default getAllParticipants;
