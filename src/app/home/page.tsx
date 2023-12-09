import type { ComponentPropsWithoutRef, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, Card, Button, Heading, Strong, Text } from "@radix-ui/themes";
import {
  BoltIcon,
  RectangleStackIcon,
  StarIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { cx } from "class-variance-authority";
import { Logo } from "@/ui/icons/Logo";

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <Heading as="h2" align="center" size="6">
      {children}
    </Heading>
  );
}

interface TweetProps extends ComponentPropsWithoutRef<typeof Card> {
  avatarSrc: string;
  name: string;
  username: string;
}

function Tweet({ avatarSrc, name, username, children, ...props }: TweetProps) {
  return (
    <Card {...props}>
      <div className="mb-2 grid grid-cols-[min-content_minmax(0,_1fr)] items-center gap-x-2">
        <Avatar
          src={avatarSrc}
          radius="full"
          fallback={<UserIcon className="h-6 w-6" />}
        />
        <div>
          <Text as="p">{name}</Text>
          <Text as="p" size="2" color="gray">
            @{username}
          </Text>
        </div>
      </div>
      <Text as="p">{children}</Text>
    </Card>
  );
}

export default function Home() {
  return (
    <div
      className={cx(
        "grid min-h-dvh gap-y-8",
        "[--footer:theme(height.20)] [--header:theme(height.14)] [--main:1fr]",
        "grid-rows-[[header]_var(--header)_[main]_var(--main)_[footer]_var(--footer)]",
        "[--breakout:theme(width.4)] [--content:minmax(0,1080px)] [--fullbleed:1fr]",
        "grid-cols-[[fullbleed-start]_var(--fullbleed)_[breakout-start]_var(--breakout)_[content-start]_var(--content)_[content-end]_var(--breakout)_[breakout-end]_var(--fullbleed)_[fullbleed-end]]",
      )}
    >
      <header
        className={cx(
          "sticky top-0 isolate z-10",
          "col-[fullbleed] row-[header] grid grid-cols-subgrid grid-rows-subgrid",
          "border-b border-solid border-gray-6 bg-background",
        )}
      >
        <div className="col-[content] row-[header] grid grid-cols-2 items-center justify-between">
          <Link
            href="/home"
            className="flex items-center gap-x-1 justify-self-start text-xl font-bold"
          >
            <Logo className="inline-block h-8 w-8" />{" "}
            <Text size="4" trim="both">
              Infostack
            </Text>
          </Link>
          <div className="flex items-center gap-x-2 justify-self-end">
            <Button asChild variant="outline" color="gray">
              <Link href="auth/login">Log In</Link>
            </Button>
            <Button asChild>
              <Link href="auth/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="col-[content] row-[main] grid auto-rows-min grid-cols-subgrid gap-y-12">
        <div className="grid justify-items-center gap-y-6 md:grid-cols-2 md:items-center md:gap-x-6">
          <div className="space-y-2">
            <Heading align="center" size="7">
              Empower your team with a collective brain
            </Heading>
            <Text as="p" align="center" size="4">
              Infostack is a flexible and easy-to-use solution that makes
              documentation a joy to write.
            </Text>
          </div>
          <div className="scrollbar-w-none grid max-w-2xl snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-x-4 overflow-x-auto overscroll-contain scroll-smooth rounded-4 bg-transparent shadow-6">
            <Image
              src="/app-example-1.png"
              width={1920}
              height={1080}
              alt=""
              className="rounded snap-center rounded-4"
              priority
            />
            <Image
              src="/app-example-2.png"
              width={1920}
              height={1080}
              alt=""
              className="rounded snap-center rounded-4"
              priority
            />
            <Image
              src="/app-example-3.png"
              width={1920}
              height={1080}
              alt=""
              className="rounded snap-center rounded-4"
              priority
            />
          </div>
        </div>
        <div className="grid gap-y-8">
          <SectionHeading>Why teams love Infostack</SectionHeading>
          <div className="grid justify-center gap-x-6 gap-y-6 sm:grid-cols-[repeat(3,_minmax(0,_300px))]">
            <div className="flex flex-col items-center gap-y-1">
              <StarIcon className="h-8 w-8 text-accent-9" />
              <Text
                size="4"
                align="center"
                weight="bold"
                className="text-accent-9"
              >
                EASY
              </Text>
              <Text size="3" align="center">
                Your whole team can contribute from day one.
              </Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <BoltIcon className="h-8 w-8 text-accent-9" />
              <Text
                size="4"
                align="center"
                weight="bold"
                className="text-accent-9"
              >
                FAST
              </Text>
              <Text size="3" align="center">
                Create and collaborate at the speed of thought.
              </Text>
            </div>
            <div className="flex flex-col items-center gap-y-1">
              <RectangleStackIcon className="h-8 w-8 text-accent-9" />
              <Text
                size="4"
                align="center"
                weight="bold"
                className="text-accent-9"
              >
                EASY
              </Text>
              <Text size="3" align="center">
                Find all knowledge and information in one central place.
              </Text>
            </div>
          </div>
        </div>
        <div className="grid gap-y-8">
          <SectionHeading>Join more than 12,000 happy teams!</SectionHeading>
          <div className="grid auto-rows-fr grid-cols-[minmax(0,_360px)] justify-center gap-y-6 sm:grid-cols-[repeat(2,_minmax(0,_360px))] sm:gap-x-6 md:grid-cols-[repeat(3,_minmax(0,_360px))]">
            <Tweet
              avatarSrc="/tweet-avatar-1.jpg"
              name="Oleksii Ovchynnikov"
              username="ovchynnikov"
            >
              So <Strong className="text-accent-9">@Infostack</Strong> looks
              amazing. Such a smart approach to collaboration. Like the best of{" "}
              <Strong>@SlackHQ</Strong>, <Strong>@medium</Strong>, and{" "}
              <Strong>@evernote</Strong> in one.
            </Tweet>
            <Tweet
              avatarSrc="/tweet-avatar-2.jpg"
              name="Denis Klemeshov"
              username="denis_klemeshov"
            >
              Finally! Someone built a great product for Team Intelligence.
              Thank you <Strong className="text-accent-9">@Infostack!</Strong>{" "}
              <Strong>#WebApp</Strong> <Strong>#thumbsup</Strong>
            </Tweet>
            <Tweet
              avatarSrc="/tweet-avatar-3.jpg"
              name="Mykyta Batrak"
              username="SirRedrick"
            >
              Moved our internal wiki from confluence to{" "}
              <Strong className="text-accent-9">@Infostack</Strong>. Lovely
              product and well worth checking out!
            </Tweet>
            <Tweet
              avatarSrc="/tweet-avatar-4.jpg"
              name="Kapic Alex"
              username="kapicalex"
              className="hidden sm:block"
            >
              <Strong className="text-accent-9">@Infostack!</Strong> - It&apos;s
              really an amazing tool to organize and collaborate. It&apos;s{" "}
              <Strong>#free</Strong>. <Strong>#mustTry</Strong>
            </Tweet>
            <Tweet
              avatarSrc="/tweet-avatar-5.jpg"
              name="Nelia Kunyk"
              username="neonila-kunyk"
              className="hidden md:block"
            >
              <Strong className="text-accent-9">@Infostack!</Strong> &lt;3 you.
              Looking for this for a long time.
            </Tweet>
            <Tweet
              avatarSrc="/tweet-avatar-4.jpg"
              name="Kapic Alex"
              username="kapicalex"
              className="hidden md:block"
            >
              Found <Strong className="text-accent-9">@Infostack!</Strong> and
              so happy about it. Handy, simple, free at first. Best thing for
              ideas-workout inside a team. After a week of searching.
            </Tweet>
          </div>
        </div>
        <div className="grid justify-center justify-items-center gap-y-8 py-12">
          <SectionHeading>Ready to get started?</SectionHeading>
          <Button>Get Started</Button>
        </div>
      </main>
      <footer className="col-[fullbleed] row-[footer] grid grid-cols-subgrid border-t border-solid border-gray-6 bg-gray-1">
        <div className="col-[content] grid items-center">
          <Text as="p" size="2" color="gray">
            &copy; {new Date().getFullYear()} Mykyta Batrak. All rights
            reserved.
          </Text>
        </div>
      </footer>
    </div>
  );
}
