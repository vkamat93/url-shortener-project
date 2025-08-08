import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-3xl font-bold">
            Best URL shortener
          </p>
          <p className="px-60">
            No Login. No Tracking. Straightforward URL shortener on the web.
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
          </p>
          <div className="flex gap-3 text-white font-bold">
            <Link href={"/shorten"}>
              <button className='bg-purple-500 rounded-lg p-3 py-1'>Try it Now!</button>
            </Link>
            <Link href={"/github"}>
              <button className='bg-purple-500 rounded-lg p-3 py-1'>Github</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" src={"/10921.jpg"} fill alt="image of vector" />
        </div>
      </section>
    </main>
  );
}
