import Link from "next/link";
import { Logo } from "@/ui/icons/Logo";
import { Button } from "@/ui/components/Button";
import { LogoLight } from "@/ui/icons/LogoLight";
import { LogoDark } from "@/ui/icons/LogoDark";
import { LinkButton } from "@/ui/components/LinkButton";

export default function Home() {
  return (
    <div>
      <header className="grid h-14 grid-cols-[minmax(0,_1fr)_auto_auto] items-center gap-x-2 px-2">
        <Link href="/home" className="text-xl font-bold">
          <Logo className="inline-block h-8 w-8" /> <span>Infostack</span>
        </Link>
        <LinkButton href="login" intent="outline">
          Log In
        </LinkButton>
        <LinkButton href="signup">Sign Up</LinkButton>
      </header>
      <main></main>
    </div>
  );
}
