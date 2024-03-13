import Image from "next/image";
import {Claims} from "@auth0/nextjs-auth0";

import SessionButton from "./session-button";
import {Card, CardHeader, CardTitle, CardContent, CardFooter} from "./ui/card";

export default function UserCard({user}: {user: Claims | undefined}) {
  return (
    <Card className="max-w-[300px]  grid justify-center items-center">
      <CardHeader>
        <CardTitle>My User</CardTitle>
        <Image
          alt={user?.name}
          className="rounded-full"
          height={80}
          src={user?.picture}
          width={80}
        />
      </CardHeader>
      <CardContent>
        <h2 className="text-lg font-semibold">Name: {user?.nickname}</h2>
        <p>Email: {user?.email}</p>
      </CardContent>
      <CardFooter>
        <SessionButton />
      </CardFooter>
    </Card>
  );
}
