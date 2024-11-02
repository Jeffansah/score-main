import Image from "next/image";
import ScoreTable from "./Components/ScoreTable";
import { connectToDatabase } from "@/mongo";
import getAllParticipants from "@/lib/actions/getAllParticipants";
import AddNewParticipant from "./Components/AddParticipant";
import addNewParticipant from "@/lib/actions/addNewParticipant.action";

export const dynamic = "force dynamic";
export default async function Home() {
  const db = connectToDatabase();

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-6 max-w-[1400px] mx-auto ">
      <h1 className="uppercase text-3xl font-bold">quiz scores</h1>
      <ScoreTable />
      <div className="w-full flex justify-end">
        <AddNewParticipant />
      </div>
    </div>
  );
}
