//Very Tricky :

const b1: string[] = ["ar", "ar", "no"];

const b2: string[] = ["ton", "mo", "oy"];

b1.push(...b2);

const newel = {
  type: "Me",
  redux: "redux",
  dbms: "mongo",
};

const newel2 = {
  prisma: "fire",
  next: "vercel",
  cloud: "aws",
};

const list = {
  ...newel,
  ...newel2,
};

console.log(list);
