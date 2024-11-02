import Image from "next/image";
import ScoreTable from "./Components/ScoreTable";
import { connectToDatabase } from "@/mongo";
import AddNewParticipant from "./Components/AddParticipant";

export const dynamic = "force dynamic";
export default async function Home() {
  const db = connectToDatabase();

  return (
    <div className="w-full h-screen flex justify-center items-center mx-auto bg-[url('../app/public/images/richoco.jpg')] bg-cover bg-bottom">
      <div className="flex flex-col gap-10 max-w-[1400px] p-10 shadow-2xl rounded-lg bg-white">
        <h1 className="uppercase text-5xl font-bold text-center">
          quiz scores
        </h1>
        <ScoreTable />
        <div className="w-full flex justify-end">
          <AddNewParticipant />
        </div>
      </div>
    </div>
  );
}
