export function questionOne() {
  let index = 13;
  let sum = 0;
  let K = 0;

  while (K < index) {
    K = K + 1;
    sum = sum + K;
  }

  console.log(`1) SOMA = ${sum}`);
}
