import {getSession} from "@auth0/nextjs-auth0";

import {Button} from "./ui/button";

export default async function SessionButton() {
  const user = await getSession();

  return user ? (
    <Button asChild variant={"destructive"}>
      <a href="/api/auth/logout">Logout</a>
    </Button>
  ) : (
    <Button asChild>
      <a href="/api/auth/login">Login</a>
    </Button>
  );
}
