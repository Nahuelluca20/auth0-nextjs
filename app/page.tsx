import Link from "next/link";

import {Button} from "@/components/ui/button";
import SessionButton from "@/components/session-button";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-5 flex-col items-center p-24">
      <h1 className="text-3xl font-semibold">NextJS + Auth0</h1>
      <SessionButton />
      <Button asChild variant={"secondary"}>
        <Link href="/me">User</Link>
      </Button>
      <Button asChild variant={"outline"}>
        <Link href="/protected-route">Protected route</Link>
      </Button>
      <Button asChild variant={"secondary"}>
        <Link href="/ssr-protected">User</Link>
      </Button>
    </main>
  );
}
