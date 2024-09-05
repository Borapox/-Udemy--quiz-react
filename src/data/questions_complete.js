const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria um parágrafo?",
        options: ["<p>", "<h1>", "<text>", "<ul>"],
        answer: "<p>",
        tip: "É uma tag de uma letra apenas",
      },
      {
        question: "Qual atributo adiciona um link para a tag a?",
        options: ["alt", "href", "src", "link"],
        answer: "href",
        tip: "Hyperlink Reference",
      },
      {
        question: "As listas não ordenadas tem a tag de:",
        options: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ul>",
      },
      {
        question: "Qual atributo deixa o input obrigatório?",
        options: ["placeholder", "value", "required", "maxlength"],
        answer: "required",
      },
      {
        question: "A tag semântica indicada para rodapés é a:",
        options: ["div", "main", "section", "footer"],
        answer: "footer",
      },
      {
        question: "Qual tag HTML é usada para adicionar uma imagem?",
        options: ["<img>", "<image>", "<pic>", "<src>"],
        answer: "<img>",
      },
      {
        question: "Qual elemento HTML é usado para títulos de nível mais alto?",
        options: ["<h1>", "<header>", "<title>", "<h6>"],
        answer: "<h1>",
      },
      {
        question: "Qual atributo HTML é usado para definir o valor inicial de um input?",
        options: ["value", "placeholder", "type", "name"],
        answer: "value",
      },
      {
        question: "Qual tag HTML é usada para criar uma tabela?",
        options: ["<table>", "<tab>", "<grid>", "<tabela>"],
        answer: "<table>",
      },
      {
        question: "Qual tag HTML é usada para criar um formulário?",
        options: ["<form>", "<input>", "<submit>", "<fieldset>"],
        answer: "<form>",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual regra altera a cor de um elemento?",
        options: ["color", "background-color", "font-size", "transition"],
        answer: "color",
        tip: "Cor em inglês",
      },
      {
        question: "Para aumentar a fonte de um elemento utilizamos:",
        options: ["font", "text-transform", "font-size", "hover"],
        answer: "font-size",
      },
      {
        question: "A posição que deixa um elemento fixo é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "fixed",
      },
      {
        question: "Qual unidade de medida é relativa ao tamanho da fonte do elemento pai?",
        options: ["px", "em", "rem", "%"],
        answer: "em",
      },
      {
        question: "Qual propriedade CSS é usada para definir o espaçamento interno de um elemento?",
        options: ["margin", "padding", "border", "outline"],
        answer: "padding",
      },
      {
        question: "Como se chama a técnica para aplicar várias fontes?",
        options: ["font-stack", "font-group", "multi-font", "font-family"],
        answer: "font-stack",
      },
      {
        question: "Qual propriedade define o espaçamento entre as bordas de um elemento?",
        options: ["padding", "margin", "border-spacing", "space"],
        answer: "margin",
      },
      {
        question: "Qual é o valor padrão da propriedade 'position' em CSS?",
        options: ["relative", "absolute", "static", "fixed"],
        answer: "static",
      },
      {
        question: "Qual propriedade é usada para alterar o tipo de cursor do mouse?",
        options: ["pointer-events", "cursor", "hover", "mouse"],
        answer: "cursor",
      },
      {
        question: "Qual regra CSS é usada para aplicar estilos em dispositivos móveis?",
        options: ["@media", "@mobile", "@device", "@screen"],
        answer: "@media",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é Vanilla JavaScript?",
        options: [
          "JavaScript puro",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Um compilador de JavaScript",
        ],
        answer: "JavaScript puro",
      },
      {
        question: "Com qual instrução declaramos uma constante em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual dos métodos a seguir seleciona um elemento?",
        options: ["querySelector", "parseInt", "sort", "reduce"],
        answer: "querySelector",
      },
      {
        question:
          "Qual destas propriedades da a quantidade de elementos de um array?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
      {
        question: "Qual método é usado para adicionar um item ao final de um array?",
        options: ["push", "pop", "shift", "unshift"],
        answer: "push",
      },
      {
        question: "Qual método converte uma string em um número?",
        options: ["parseInt", "toString", "concat", "toFixed"],
        answer: "parseInt",
      },
      {
        question: "Qual operador é usado para comparar valores e tipos?",
        options: ["==", "===", "=", "!="],
        answer: "===",
      },
      {
        question: "Como podemos criar uma função anônima?",
        options: ["function() {}", "anonymous() {}", "() => {}", "none of the above"],
        answer: "() => {}",
      },
      {
        question: "Qual método é usado para filtrar elementos de um array?",
        options: ["map", "filter", "reduce", "forEach"],
        answer: "filter",
      },
    ],
  },
];

export default data;
