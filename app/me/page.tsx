import {getSession} from "@auth0/nextjs-auth0";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

export default async function Page() {
  const {user}: any = await getSession();

  return (
    <section className="flex min-h-screen flex-col items-center p-24">
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
            <h2 className="text-lg font-semibold">Name: {user.name}</h2>
            <p>Email: {user.email}</p>
          </CardContent>
          <CardFooter>
            <Button variant={"destructive"}>LogOut</Button>
          </CardFooter>
        </Card>
      ) : (
        <div>
          <h3>login for see your user</h3>
        </div>
      )}
    </section>
  );
}
