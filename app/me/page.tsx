import {getSession} from "@auth0/nextjs-auth0";
import Image from "next/image";

export default async function Page() {
  const {user}: any = await getSession();

  return user ? (
    <div>
      <Image alt={user.name} height={50} src={user.picture} width={50} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  ) : (
    <div>
      <h3>login for see your user</h3>
    </div>
  );
}
