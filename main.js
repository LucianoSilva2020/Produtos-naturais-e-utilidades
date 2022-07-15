function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();

// Segunda opção
// const produtos = [
//   {
//     id: "1",
//     image: "imagem.png",
//     titulo: "Produto",
//     valor: "R$:230,00"
//   },
//   {
//     id: "2",
//     image: "imagem.png",
//     titulo: "Carro",
//     valor: "R$:300,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },
//   {
//     id: "3",
//     image: "imagem.png",
//     titulo: "Geladeira",
//     valor: "R$:200,00"
//   },

// ]

// criaProdutos()

// function criaProdutos() {
//   for(let i = 0; i < produtos.length; i++){  
//     const elmDiv = document.createElement('div')
//     const elmImage = document.createElement('img')
//     const elmProduto = document.createElement('p')
//     const elmPreco = document.createElement('p')
//     const elmDivContainer = document.getElementById('flex-container')

//     elmImage.setAttribute("src", `imagens/${produtos[i].image}`)
//     elmProduto.innerHTML = produtos[i].titulo
//     elmPreco.innerHTML = produtos[i].valor
//     elmDiv.appendChild(elmImage)
//     elmDiv.appendChild(elmProduto)
//     elmDiv.appendChild(elmPreco)
//     elmDivContainer.appendChild(elmDiv)
//     console.log('aqui')
//   }
// }
