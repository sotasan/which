export type Input = {
  html: string;
  headers: Record<string, string>;
};

export function detect(input: Input): string[] {
  const found: string[] = [];
  if (/wp-content/.test(input.html)) found.push("WordPress");
  if (input.headers["x-powered-by"]?.toLowerCase().includes("wordpress")) {
    found.push("WordPress");
  }
  return [...new Set(found)];
}
