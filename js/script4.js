const xmlString = `
  <catalogo>
    <produto id="A45">
      <nome>Caneta Azul</nome>
      <preco>2.50</preco>
      <estoque>150</estoque>
    </produto>
  </catalogo>
`;

// Parsear com DOMParser
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "text/xml");

// Encontrar o <produto id="A45">
const produtos = xmlDoc.getElementsByTagName("produto");
let produtoA45 = null;

for (let i = 0; i < produtos.length; i++) {
  if (produtos[i].getAttribute("id") === "A45") {
    produtoA45 = produtos[i];
    break;
  }
}

if (produtoA45) {
  // Adicionar o novo atributo moeda="BRL"
  produtoA45.setAttribute("moeda", "BRL");

  // Exibir o valor do novo atributo
  const moeda = produtoA45.getAttribute("moeda");
  console.log("Atributo 'moeda' do produto A45:", moeda);
} else {
  console.error("Produto com id='A45' não encontrado.");
}
