export async function twice(x: number): Promise<number> {
  return x * 2;
}

export async function badFunc(): Promise<string> {
  return Promise.resolve("poyo");
}

async function main(): Promise<void> {
  console.log("poyo");
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
