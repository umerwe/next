import { CardData } from "@/components/card";
import Categories from "@/components/categories";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Categories />
      <CardData />
    </div>
  );
}
