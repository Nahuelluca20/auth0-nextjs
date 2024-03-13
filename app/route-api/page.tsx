"use client";
import useSWR from "swr";
import {withPageAuthRequired} from "@auth0/nextjs-auth0/client";

const fetcher = async (uri: string) => {
  const response = await fetch(uri);

  return response.json();
};

export default withPageAuthRequired(function Products() {
  const {data, error} = useSWR("/api/protected", fetcher);

  if (error) return <div>oops... {error.message}</div>;
  if (data === undefined) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen gap-5 flex-col items-center p-24">
      <h1 className="text-2xl font-semibold">{data.protected}</h1>
      <h3>{data.id}</h3>
    </div>
  );
});
