// Adicionar ao carrinho
function addToCart(itemName, itemPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: itemName, price: itemPrice });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item adicionado ao carrinho!');
}

// Exibir o carrinho
window.onload = function () {
    const cartContainer = document.getElementById('cart-container');
    if (cartContainer) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
        } else {
            let cartHTML = '<ul>';
            let total = 0;
            cart.forEach(item => {
                cartHTML += `<li>${item.name} - R$${item.price.toFixed(2)}</li>`;
                total += item.price;
            });
            cartHTML += `</ul><p>Total: R$${total.toFixed(2)}</p>`;
            cartContainer.innerHTML = cartHTML;
        }
    }
};

// Histórico de pedidos
function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (cart.length > 0) {
        orders.push(...cart);
        localStorage.setItem('orders', JSON.stringify(orders));
        localStorage.removeItem('cart');
        alert('Pedido finalizado!');
        window.location.href = 'pedidos.html';
    } else {
        alert('Seu carrinho está vazio.');
    }
}

// Exibir histórico de pedidos
window.onload = function () {
    const orderHistory = document.getElementById('order-history');
    if (orderHistory) {
        let orders = JSON.parse(localStorage.getItem('orders')) || [];
        if (orders.length === 0) {
            orderHistory.innerHTML = '<p>Você ainda não fez pedidos.</p>';
        } else {
            let ordersHTML = '<ul>';
            orders.forEach(item => {
                ordersHTML += `<li>${item.name} - R$${item.price.toFixed(2)}</li>`;
            });
            ordersHTML += '</ul>';
            orderHistory.innerHTML = ordersHTML;
        }
    }
};
