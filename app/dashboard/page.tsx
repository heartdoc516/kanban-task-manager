import DashBoardHeader from "@/components/DashBoardHeader";
import NewBoard from "@/components/NewBoard";
import { LogOut } from "react-feather";

export default function Page({ params }) {
  console.log(params.id);
  return <DashBoardHeader />;
}
