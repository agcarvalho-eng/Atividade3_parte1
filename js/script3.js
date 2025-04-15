
const xmlString = `
  <catalogo>
    <produto id="A45">
      <nome>Caneta Azul</nome>
      <preco>2.50</preco>
      <estoque>150</estoque>
    </produto>
  </catalogo>
`;

// Parseando a string XML com DOMParser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Encontrando o <produto id="A45">
const produtos = xmlDoc.getElementsByTagName("produto");
let produtoA45 = null;

// Procurar o produto com id="A45"
for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].getAttribute("id") === "A45") {
    produtoA45 = produtos[i];
    break;
  }
}

if (produtoA45) {
  // Acessar o elemento <preco> dentro do produto
  const preco = produtoA45.getElementsByTagName("preco")[0];

  // Alterar o valor do texto de <preco> para "3.00"
  preco.firstChild.nodeValue = "3.00";

  // Exibir o novo valor no console
  console.log("Novo preço do produto A45:", preco.textContent);
} else {
  console.error("Produto com id='A45' não encontrado.");
}
