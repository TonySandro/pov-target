export function questionFive() {
  const text = "OpenAI";

  function inverterString(str: string): string {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  }

  console.log("5)");
  console.log(inverterString(text));
}
