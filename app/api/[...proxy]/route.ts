import {getAccessToken} from "@auth0/nextjs-auth0/edge";
import {NextRequest, NextResponse} from "next/server";

const handler = async (request: NextRequest) => {
  let token = null;

  try {
    const response = new NextResponse();
    const {accessToken} = await getAccessToken(request, response);

    token = accessToken;
  } catch (e: any) {
    console.error("Cannot get access token.");
    console.log(e);

    return new Response(e, {
      status: 500,
    });
  }

  try {
    if (token) {
      request.headers.set("Authorization", `Bearer ${token}`);
    }

    // Extract the necessary components from the original request
    const originalURL = new URL(request.url);
    const basePath = process.env.NEXT_PUBLIC_API_BASE_URL; // Your base path
    const newPath = originalURL.pathname.replace("/api/proxy", "sarasa");
    const queryString = originalURL.search; // Query string
    const hash = originalURL.hash; // Hash

    // Construct the new URL using string format
    const newURLString = `${basePath}${newPath}${queryString}${hash}`;
    const newURL = new URL(newURLString);

    // Next.js adapted the fetch implementation that forces caching on a success response. We don't want that.
    const response = await fetch(newURL.toString(), {...request, cache: "no-store"});

    if (response.status === 401) {
      console.error(`Received 401 Unauthorized from backend API.`);
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers,
    });
  } catch (e: any) {
    console.error(`Received 500 Internal Server Error from backend API.`);
    console.log(e);

    return new Response(e, {
      status: 500,
    });
  }
};
