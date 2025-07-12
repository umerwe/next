import { CardData } from "@/components/card";
import Categories from "@/components/categories";
import Header from "@/components/header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <CardData />
    </div>
  );
}
