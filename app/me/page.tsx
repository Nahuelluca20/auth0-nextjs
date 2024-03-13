import {getSession} from "@auth0/nextjs-auth0";

import SessionButton from "@/components/session-button";
import UserCard from "@/components/user-card";

export default async function Page() {
  const dataSession = await getSession();
  const user = dataSession?.user;

  return (
    <section className="flex gap-5 min-h-screen flex-col items-center p-24">
      {user ? (
        <UserCard user={user} />
      ) : (
        <>
          <h3 className="text-2xl font-semibold">Login for see your user</h3>
          <SessionButton />
        </>
      )}
    </section>
  );
}
