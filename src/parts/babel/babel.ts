import { parse } from "@babel/parser";
const ast = parse("代码", {
  sourceType: "unambiguous",
  plugins: ["jsx"],
  tokens: true,
});
console.log(ast);
