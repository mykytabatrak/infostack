import { Logo } from "@/ui/icons/Logo";
import { Flex, Grid, Text } from "@radix-ui/themes";

export default function LogIn() {
  return (
    <main className="h-full place-content-center">
      <div className="flex items-center gap-1">
        <Logo className="inline-block h-8 w-8" />
        <Text size="4" trim="both">
          Infostack
        </Text>
      </div>
    </main>
  );
}
