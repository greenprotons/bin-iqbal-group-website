import type { MetaFunction } from "@remix-run/node";
import Home from "@/components/Home";

export const meta: MetaFunction = () => {
  return [
    { title: "Bin Iqbal Group" },
    { name: "description", content: "Bin Iqbal Group" },
  ];
};

export default function Index() {
  return (
    <Home />
  );
}
