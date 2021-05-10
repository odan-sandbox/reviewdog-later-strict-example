export async function twice(x): Promise<number> {
  return x * 2;
}

export async function triple(x): Promise<number> {
  return x * 3;
}

async function main(): Promise<void> {
  console.log("poyo");
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
