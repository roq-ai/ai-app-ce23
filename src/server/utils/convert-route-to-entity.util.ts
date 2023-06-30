const mapping: Record<string, string> = {
  businesses: 'business',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
