//exercicio

const produtos = [
  { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
  { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
  { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 },
  { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 },
  { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
  { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
  { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
  { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 }
];

const filtrarProdutosPorCategoria = (produto, categoria) => {
  return produto.filter((produto) => produto.categoria === categoria);
};

console.log("======exercicio 01==========");
const eletrônicos=filtrarProdutosPorCategoria(produtos,"eletrônicos");
console.log(`Eletrônicos encontrados: ${eletrônicos.length}`);
console.log(eletrônicos.map(p => p.nome));

console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");





//exercico 02


// Sua solução aqui:

const produtosDisponiveis = (produtos) => {
  return produtos.filter((produto)=> produto.estoque > 0);
};



// Testes:



console.log("\n=== EXERCÍCIO 2 ===");

const emFalta = produtos.filter(p => p.estoque === 0);
console.log(emFalta.map(p => p.nome));// EXERCÍCIO 3: CALCULAR VALOR TOTAL DO ESTOQUE
console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");


// EXERCÍCIO 3: CALCULAR VALOR TOTAL DO ESTOQUE

// Sua solução aqui:

   const calcularValorTotalEstoque = (produtos) => {
     return produtos.reduce((total, produto) => total + (produto.preco * produto.estoque), 0);
   };


// Testes:
console.log("\n=== EXERCÍCIO 3 ===");
const totalEstoque = calcularValorTotalEstoque(produtos);
console.log(`Valor total do estoque: R$ ${totalEstoque.toFixed(2)}`);




console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");


// EXERCÍCIO 4: APLICAR DESCONTO

function aplicarDescontos(produtos) {
  return produtos.map(produto => {
    const precoFinal = produto.preco - (produto.preco * produto.desconto / 100);
    return {
      ...produto,
      precoFinal
    };
  });
}

// Testes:
console.log("\n=== EXERCÍCIO 4 ===");
const comDescontos = aplicarDescontos(produtos);
console.log("Produtos com desconto:");
comDescontos
  .filter(p => p.desconto > 0)
  .forEach(p => {
    console.log(`${p.nome}: R$ ${p.preco} → R$ ${p.precoFinal.toFixed(2)} (${p.desconto}% off)`);
  });
  
  
  
  
console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");


  
  
// EXERCÍCIO 5: ENCONTRAR PRODUTO MAIS CARO

function produtoMaisCaro(produtos) {
  return produtos.reduce((maisCaro, produto) => {
    return produto.preco > maisCaro.preco ? produto : maisCaro;
  });
}

// Testes:
console.log("\n=== EXERCÍCIO 5 ===");
const maisCaro = produtoMaisCaro(produtos);
console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);


console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");




// EXERCÍCIO 6: LISTAR NOMES DOS PRODUTOS

function listarNomes(produtos) {
  return produtos.map(produto => produto.nome);
}

// Testes:
console.log("\n=== EXERCÍCIO 6 ===");
const nomes = listarNomes(produtos);
console.log("Lista de produtos:");
nomes.forEach((nome, i) => console.log(`${i + 1}. ${nome}`));


console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");




// EXERCÍCIO 7: PRODUTOS CAROS EM ESTOQUE

function produtosCarosDisponiveis(produtos) {
  return produtos.filter(produto => produto.preco > 300 && produto.estoque > 0);
}

// Testes:
console.log("\n=== EXERCÍCIO 7 ===");
const carosDisponiveis = produtosCarosDisponiveis(produtos);
console.log(`Produtos acima de R$ 300 em estoque: ${carosDisponiveis.length}`);
console.log(carosDisponiveis.map(p => `${p.nome} (R$ ${p.preco})`));


console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");



// EXERCÍCIO 9: TOP 3 PRODUTOS MAIS CAROS

function top3MaisCaros(produtos) {
  return produtos
    .slice() // copia o array original
    .sort((a, b) => b.preco - a.preco) // ordena do maior para o menor
    .slice(0, 3); // pega os 3 primeiros
}

// Testes:
console.log("\n=== EXERCÍCIO 9 ===");
const top3 = top3MaisCaros(produtos);
console.log("Top 3 produtos mais caros:");
top3.forEach((p, i) => {
  console.log(`${i + 1}º - ${p.nome}: R$ ${p.preco}`);
});



console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");



// EXERCÍCIO 10: ESTATÍSTICAS DO ESTOQUE (DESAFIO)

function estatisticasEstoque(produtos) {
  const totalProdutos = produtos.length;

  const totalEmEstoque = produtos.filter(p => p.estoque > 0).length;
  const totalEmFalta = produtos.filter(p => p.estoque === 0).length;

  const valorTotal = produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0);
  const precoMedio = produtos.reduce((acc, p) => acc + p.preco, 0) / totalProdutos;

  const produtoMaisCaro = produtos.reduce((a, b) => a.preco > b.preco ? a : b);
  const produtoMaisBarato = produtos.reduce((a, b) => a.preco < b.preco ? a : b);

  const categorias = [...new Set(produtos.map(p => p.categoria))];

  return {
    totalProdutos,
    totalEmEstoque,
    totalEmFalta,
    valorTotal,
    precoMedio,
    produtoMaisCaro,
    produtoMaisBarato,
    categorias
  };
}

// Testes:
console.log("\n=== EXERCÍCIO 10 (DESAFIO) ===");
const stats = estatisticasEstoque(produtos);
console.log("Estatísticas do Estoque:");
console.log(`Total de produtos: ${stats.totalProdutos}`);
console.log(`Produtos em estoque: ${stats.totalEmEstoque}`);
console.log(`Produtos em falta: ${stats.totalEmFalta}`);
console.log(`Valor total: R$ ${stats.valorTotal.toFixed(2)}`);
console.log(`Preço médio: R$ ${stats.precoMedio.toFixed(2)}`);
console.log(`Mais caro: ${stats.produtoMaisCaro.nome} (R$ ${stats.produtoMaisCaro.preco})`);
console.log(`Mais barato: ${stats.produtoMaisBarato.nome} (R$ ${stats.produtoMaisBarato.preco})`);
console.log(`Categorias: ${stats.categorias.join(", ")}`);






console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");


// EXERCÍCIO 11: BUSCAR PRODUTO POR NOME (BÔNUS)

// Sua solução aqui



(function() {
  // Lista de produtos (declarada uma única vez com const)
  const produtos = [
    { nome: "Cadeira Gamer", preco: 1200 },
    { nome: "Headset Gamer", preco: 350 },
    { nome: "Monitor Full HD", preco: 800 },
    { nome: "Teclado Mecânico", preco: 450 },
    { nome: "Mouse sem fio", preco: 200 }
  ];

  // Função de busca por nome (case-insensitive)
  function buscarProduto(lista, termo) {
    const termoNormalizado = termo.toLowerCase();
    return lista.filter(p => p.nome.toLowerCase().includes(termoNormalizado));
  }

  // Testes:
  console.log("\n=== EXERCÍCIO 11 (BÔNUS) ===");

  console.log("Buscar 'gamer':");
  console.log(buscarProduto(produtos, "gamer").map(p => p.nome));
  // Esperado: ["Cadeira Gamer", "Headset Gamer"]

  console.log("\nBuscar 'monitor':");
  console.log(buscarProduto(produtos, "monitor").map(p => p.nome));
  // Esperado: ["Monitor Full HD"]
})();


console.log("\n ::::::::::::::::::::::::::::::::::::::::::::");


// EXERCÍCIO 12: AGRUPAR POR CATEGORIA (BÔNUS)

// Lista de produtos com categorias
const produtosCategoria = [
  { nome: "Cadeira Gamer", preco: 1200, categoria: "móveis" },
  { nome: "Headset Gamer", preco: 350, categoria: "eletrônicos" },
  { nome: "Monitor Full HD", preco: 800, categoria: "eletrônicos" },
  { nome: "Teclado Mecânico", preco: 450, categoria: "eletrônicos" },
  { nome: "Mouse sem fio", preco: 200, categoria: "eletrônicos" },
  { nome: "Mesa de Escritório", preco: 650, categoria: "móveis" },
  { nome: "Luminária LED", preco: 150, categoria: "eletrônicos" },
  { nome: "Estante de Livros", preco: 400, categoria: "móveis" },
  { nome: "Webcam HD", preco: 300, categoria: "eletrônicos" },
  { nome: "Caixa de Som Bluetooth", preco: 500, categoria: "eletrônicos" }
];

// Função usando reduce para agrupar por categoria
function agruparPorCategoria(produtos) {
  return produtos.reduce((resultado, produto) => {
    const categoria = produto.categoria;
    if (!resultado[categoria]) {
      resultado[categoria] = [];
    }
    resultado[categoria].push(produto);
    return resultado;
  }, {});
}

// Testes:
console.log("\n=== EXERCÍCIO 12 (BÔNUS) ===");
const agrupados = agruparPorCategoria(produtosCategoria);
Object.entries(agrupados).forEach(([categoria, prods]) => {
  console.log(`\n${categoria.toUpperCase()} (${prods.length} produtos):`);
  prods.forEach(p => console.log(`  - ${p.nome}`));
});



console.log("\n :::::::::::::::::::::::::::::::::::::::::::: \n");




console.log("Desafio extra \n");


(function() {
  const carrinho = {
    itens: [],

    adicionar(produto, quantidade = 1) {
      const existente = this.itens.find(item => item.produto.id === produto.id);
      if (existente) {
        existente.quantidade += quantidade;
      } else {
        this.itens.push({ produto, quantidade });
      }
    },

    remover(produtoId) {
      this.itens = this.itens.filter(item => item.produto.id !== produtoId);
    },

    calcularTotal() {
      return this.itens.reduce((total, item) => {
        return total + item.produto.preco * item.quantidade;
      }, 0);
    },

    listarItens() {
      if (this.itens.length === 0) {
        console.log("Carrinho vazio.");
        return;
      }
      console.log("Itens no carrinho:");
      this.itens.forEach(item => {
        const { nome, preco } = item.produto;
        console.log(`- ${nome} (x${item.quantidade}) - R$ ${preco * item.quantidade}`);
      });
    },

    limpar() {
      this.itens = [];
      console.log("Carrinho limpo.");
    }
  };

  // Testes
  const produtos = [
    { id: 1, nome: "Cadeira Gamer", preco: 1200 },
    { id: 2, nome: "Headset Gamer", preco: 350 },
    { id: 3, nome: "Monitor Full HD", preco: 800 }
  ];

  carrinho.adicionar(produtos[0], 2);
  carrinho.adicionar(produtos[1]);
  carrinho.adicionar(produtos[2], 3);
  carrinho.listarItens();

  console.log(`\nTotal: R$ ${carrinho.calcularTotal()}`);

  carrinho.remover(2);
  console.log("\nApós remover Headset:");
  carrinho.listarItens();

  carrinho.limpar();
})();