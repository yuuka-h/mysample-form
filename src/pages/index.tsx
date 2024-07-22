import { Inter } from "next/font/google";
import Kiyaku from "./kiyaku";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <Kiyaku />
  );
}
