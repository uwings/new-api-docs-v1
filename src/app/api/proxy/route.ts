import { NextRequest } from 'next/server';

/**
 * Generic API proxy — forwards any HTTP request to a user-specified URL.
 * Replaces fumadocs-openapi's createProxy for the OpenAPI playground.
 *
 * Usage: the client sends a request to /api/proxy?<target-url>
 * The server forwards it (method, headers, body) and returns the response.
 * This avoids CORS issues when testing foreign AI APIs from the browser.
 */

async function handler(req: NextRequest) {
  const target = req.nextUrl.searchParams.get('url');
  if (!target) {
    return new Response(JSON.stringify({ error: 'Missing "url" query parameter' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let targetUrl: string;
  try {
    // Allow both ?url=... and path-style /api/proxy/<encoded-url>
    targetUrl = decodeURIComponent(target);
    new URL(targetUrl); // validate
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid target URL' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Forward the request to the target URL
  try {
    const headers = new Headers(req.headers);
    // Remove hop-by-hop headers
    headers.delete('host');
    headers.delete('connection');
    headers.delete('content-length');

    const init: RequestInit = {
      method: req.method,
      headers,
      redirect: 'follow',
    };

    // Forward body for methods that have one
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      init.body = await req.text();
    }

    const resp = await fetch(targetUrl, init);

    // Return the response with headers, excluding hop-by-hop
    const respHeaders = new Headers(resp.headers);
    respHeaders.delete('transfer-encoding');
    respHeaders.delete('connection');
    respHeaders.delete('content-encoding');

    return new Response(resp.body, {
      status: resp.status,
      statusText: resp.statusText,
      headers: respHeaders,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Proxy request failed';
    return new Response(JSON.stringify({ error: message }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

export const GET = handler;
export const HEAD = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const OPTIONS = handler;
