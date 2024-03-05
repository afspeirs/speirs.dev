import allowRobots from './allow-robots.txt?raw';
import disallowRobots from './disallow-robots.txt?raw';

export function GET() {
  const isMainBranch = process.env.HEAD === 'main';

  if (isMainBranch) {
    return new Response(allowRobots);
  }
  return new Response(disallowRobots);
}

export const prerender = true;
