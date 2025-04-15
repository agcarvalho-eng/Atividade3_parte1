fetch('./biblioteca.xml')
  .then(response => response.text())
  .then(xmlString => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");

    const livros = xmlDoc.getElementsByTagName("livro");
    const segundoLivro = livros[1];
    const titulo = segundoLivro.getElementsByTagName("titulo")[0];

    console.log("Título do segundo livro:", titulo.textContent);
  })
  .catch(error => {
    console.error("Erro ao carregar o XML:", error);
  });
