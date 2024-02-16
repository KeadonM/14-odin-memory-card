import Image from "next/image";

export default function Card() {
  return (
    <div className="rounded-lg bg-black p-200 opacity-80 hover:opacity-100">
      <div>Title</div>
      <Image className="m-100 aspect-square bg-white" alt="" />
    </div>
  );
}
