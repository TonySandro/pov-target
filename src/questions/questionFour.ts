type Faturamento = {
  [estado: string]: number;
};

export function questionFour(): void {
  const faturamento: Faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const total = Object.values(faturamento).reduce((acc, val) => acc + val, 0);
  console.log("4) ");

  console.log("Percentual de representação por estado:");
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / total) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
}
