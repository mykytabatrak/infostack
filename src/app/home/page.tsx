import Link from "next/link";
import { Logo } from "@/ui/icons/Logo";
import { Button } from "@/ui/components/Button";

export default function Home() {
  return (
    <main>
      <header className="grid h-14 grid-cols-[minmax(0,_1fr)_auto_auto] items-center gap-x-2 px-2">
        <Link href="/home" className="text-xl font-bold">
          <Logo className="inline-block h-8 w-8 rounded border border-solid border-black" />{" "}
          <span>Infostack</span>
        </Link>
        <Button>Log In</Button>
        <Button>Sign Up</Button>
      </header>
    </main>
  );
}
