import Card from "./card.js";

export default function Home() {
  return (
    <main className="mt-700 flex min-h-screen flex-col items-center">
      <div className="flex gap-400 text-white">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </main>
  );
}
