export async function badFunc(): Promise<string> {
  return await Promise.resolve("poyo");
}

export async function triple(x): Promise<number> {
  return x * 3;
}

export async function hoge(): Promise<void> {
  console.log("hoge");
}
