import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen gap-5 flex-col items-center p-24">
      <h1 className="text-3xl font-semibold">NextJS + Auth0</h1>
      <div className="space-x-5">
        <Button asChild>
          <Link href="/api/auth/login">Login</Link>
        </Button>
        <Button asChild variant={"outline"}>
          <Link href="/me">User</Link>
        </Button>
      </div>
    </main>
  );
}
