export async function badFunc(): Promise<string> {
  return await Promise.resolve("poyo");
}
