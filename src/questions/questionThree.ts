import fs from "fs";
import path from "path";

type dailyBilling = {
  dia: number;
  valor: number;
};

export function questionThree() {
  const fullPath = path.resolve(__dirname, "./faturamento.json");
  const rawData = fs.readFileSync(fullPath, "utf-8");
  const dados: dailyBilling[] = JSON.parse(rawData);

  const validDays = dados.filter((d) => d.valor > 0);

  if (validDays.length === 0) {
    throw new Error("Nenhum dia com faturamento válido encontrado.");
  }

  const small = Math.min(...validDays.map((d) => d.valor));
  const larger = Math.max(...validDays.map((d) => d.valor));
  const average =
    validDays.reduce((soma, d) => soma + d.valor, 0) / validDays.length;
  const daysAboveAverage = validDays.filter((d) => d.valor > average).length;

  console.log("3) ");
  console.log({
    menorValor: small,
    maiorValor: larger,
    diasAcimaDaMedia: daysAboveAverage,
    mediaConsiderada: average,
  });
}
