import { preloadAccess } from "./utils/get-access"
import { redirect } from "next/navigation"

export default async function Home() {
  //preloadAccess();

  redirect('/songs');
}