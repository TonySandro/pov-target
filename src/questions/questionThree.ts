import fs from "fs";
import path from "path";

type FaturamentoDiario = {
  dia: number;
  valor: number;
};

export function questionThree(relativePath: string) {
  const fullPath = path.resolve(__dirname, relativePath); // __dirname = pasta atual
  const rawData = fs.readFileSync(fullPath, "utf-8");
  const dados: FaturamentoDiario[] = JSON.parse(rawData);

  const diasValidos = dados.filter((d) => d.valor > 0);

  if (diasValidos.length === 0) {
    throw new Error("Nenhum dia com faturamento válido encontrado.");
  }

  const menor = Math.min(...diasValidos.map((d) => d.valor));
  const maior = Math.max(...diasValidos.map((d) => d.valor));
  const media =
    diasValidos.reduce((soma, d) => soma + d.valor, 0) / diasValidos.length;
  const diasAcimaMedia = diasValidos.filter((d) => d.valor > media).length;

  console.log("3) ");
  console.log({
    menorValor: menor,
    maiorValor: maior,
    diasAcimaDaMedia: diasAcimaMedia,
    mediaConsiderada: media,
  });
}
