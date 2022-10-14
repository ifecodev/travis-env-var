
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const greeting = process.env.HELLO;
    console.log(`Microservices rock! ${greeting}`);
    await sleep(5000);
  }
}

main();
