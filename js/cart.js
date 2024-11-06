// Função para adicionar itens ao carrinho
function addToCart(itemName, itemPrice) {
    // Obter o carrinho do localStorage ou inicializar um carrinho vazio
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar se o item já está no carrinho
    let itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        // Se o item já está no carrinho, incrementa a quantidade
        cart[itemIndex].quantity += 1;
    } else {
        // Se o item não está no carrinho, adiciona um novo item
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Salvar o carrinho atualizado no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Mostrar uma mensagem de confirmação
    alert(itemName + " foi adicionado ao carrinho!");
}
