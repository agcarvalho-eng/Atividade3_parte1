fetch('./biblioteca.xml')
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    // Acessar o nó raiz: <biblioteca>
    const raiz = xmlDoc.documentElement;
    console.log("Nó raiz:", raiz.nodeName); // Deve exibir: biblioteca

    // Iterar sobre os filhos do nó raiz
    const filhos = raiz.childNodes;
    console.log("Nós filhos do nó raiz:");
    for (let i = 0; i < filhos.length; i++) {
      const no = filhos[i];
      if (no.nodeType === 1) {
        console.log(" -", no.nodeName);
      }
    }
    // Buscar o título do segundo livro
    const livros = xmlDoc.getElementsByTagName("livro");
    const segundoLivro = livros[1];
    const titulo = segundoLivro.getElementsByTagName("titulo")[0];

    console.log("Título do segundo livro:", titulo.textContent);
  })
  .catch(error => {
    console.error("Erro ao carregar o XML:", error);
  });
