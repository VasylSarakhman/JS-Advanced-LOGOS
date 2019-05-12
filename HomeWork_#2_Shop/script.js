const getId = x => document.getElementById(x);
let newShop = (function () {
    let balance = 1000;
    let products = {
        beer: {
            price: 30,
            count: 100
        },
        wine: {
            price: 150,
            count: 50
        },
        pepsi: {
            price: 20,
            count: 80
        }
    }
    return {
        buy: function (count, prod) {
            if (count > products[prod].count) {
                alert(`${prod} залишилось ${products[prod].count} штук`)
                return false;
            } else {
                products[prod].count -= count;
                balance += count * products[prod].price;
                return true;
            }
        },
        getBalance: () => `${balance}`,
        showProduct: (prod) => products[prod].count
    }
}());

(function (shop) {
    getId('beer').value = shop.showProduct('beer');
    getId('wine').value = shop.showProduct('wine');
    getId('pepsi').value = shop.showProduct('pepsi');
    getId('balance').value = shop.getBalance();
    getId('add').addEventListener('click', () => {
        let count = getId('count').value;
        let productName = document.querySelector('input[type="radio"]:checked').value;
        let name = document.querySelector('input[type="radio"]:checked').parentElement.innerText;
        if (shop.buy(count, productName)) {
            if (count != "" && count > 0) {
                getId('all').innerHTML += `${name}: ${count} шт. <br>`;
            }
        } else {
            getId('all').innerHTML += "";
        }
    })
    getId('buy').addEventListener('click', () => {
        if (getId('all').innerHTML != "") {
            getId('all').innerHTML = "";
            getId('count').value = "";
            getId('beer').value = shop.showProduct('beer');
            getId('wine').value = shop.showProduct('wine');
            getId('pepsi').value = shop.showProduct('pepsi');
            getId('balance').value = shop.getBalance();
        }
    })
}(newShop))