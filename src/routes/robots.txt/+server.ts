import allowRobots from './allow-robots.txt?raw';
import disallowRobots from './disallow-robots.txt?raw';

const headers = { 'Content-Type': 'text/plain; charset=utf-8' };

export function GET() {
  const isMainBranch = process.env.HEAD === 'main';

  if (isMainBranch) {
    return new Response(allowRobots, { headers });
  }
  return new Response(disallowRobots, { headers });
}

export const prerender = true;
