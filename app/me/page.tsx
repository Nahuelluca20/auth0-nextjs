import {getSession} from "@auth0/nextjs-auth0";
import Image from "next/image";

import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import SessionButton from "@/components/session-button";

export default async function Page() {
  const dataSession = await getSession();
  const user = dataSession?.user;

  return (
    <section className="flex gap-5 min-h-screen flex-col items-center p-24">
      {user ? (
        <Card className="max-w-[300px]  grid justify-center items-center">
          <CardHeader>
            <CardTitle>My User</CardTitle>
            <Image
              alt={user.name}
              className="rounded-full"
              height={80}
              src={user.picture}
              width={80}
            />
          </CardHeader>
          <CardContent>
            <h2 className="text-lg font-semibold">Name: {user.nickname}</h2>
            <p>Email: {user.email}</p>
          </CardContent>
          <CardFooter>
            <SessionButton />
          </CardFooter>
        </Card>
      ) : (
        <>
          <h3 className="text-2xl font-semibold">Login for see your user</h3>
          <SessionButton />
        </>
      )}
    </section>
  );
}
