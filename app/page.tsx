import Link from "next/link";

import {Button} from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>HOLA</h1>
      <Button asChild>
        <Link href="/me">User</Link>
      </Button>
      <Link href="/api/auth/login">Login</Link>
    </main>
  );
}
