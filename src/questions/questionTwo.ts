export function questionTwo() {
  const numero = 21;

  function pertenceFibonacci(n: number): boolean {
    let a = 0,
      b = 1;
    while (b < n) {
      const temp = a + b;
      a = b;
      b = temp;
    }
    return b === n || n === 0;
  }

  console.log(
    `2) ${numero} ${
      pertenceFibonacci(numero) ? "pertence" : "não pertence"
    } à sequência de Fibonacci.`
  );
}
