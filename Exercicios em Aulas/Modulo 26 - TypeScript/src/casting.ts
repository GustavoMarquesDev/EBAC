namespace casting {
  let idade: any = 25.32345;
  (idade as number).toFixed(2);
  (idade as string).length;
  (idade as string[]).forEach((x) => {
    console.log(x);
  });

  let nome: string = 35 as unknown as string;
}
