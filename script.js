
const resultsBox = document.querySelector(".result-box")
const inputBox = document.querySelector("#input-box")

const openShopping = document.querySelector(".shopping")
const closeShopping = document.querySelector(".closeShopping")
const list = document.querySelector(".list")
const listCard = document.querySelector('.listCard')
const total = document.querySelector(".total")
const body = document.querySelector("body")
const quantity = document.querySelector(".quantity")

let product = [
    {
        id: 0,
        image: '1.png',
        name: 'Nike',
        price: 2000
    },
    {
        id: 1,
        image: '2.png',
        name: 'Sky',
        price: 1000
    },
    {
        id: 2,
        image: '1.png',
        name: 'Neon',
        price: 200
    },
    {
        id: 3,
        image: '3.png',
        name: 'Puma',
        price: 2300
    },
    {
        id: 4,
        image: '4.png',
        name: 'Astr',
        price: 2400
    }
]
openShopping.addEventListener("click", () => {
    body.classList.add("active")
})

closeShopping.addEventListener("click", () => {
    body.classList.remove("active")
})






const productName = [
    "Nike", "Sky", "Neon", "Puma", "Astr"
]

let result = []

inputBox.onkeyup = function () {

    let input = inputBox.value;
    if (input.length) {
        result = productName.filter((keyword) => {
            return keyword.toLowerCase().includes(input.toLowerCase());

        });
        display(result);
       
        if (!result.length) {
            resultsBox.innerHTML = '';
        }
    }
}
function display(result) {
    const content = result.map((list) => {
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });
    resultsBox.innerHTML = "<ul>" + content.join('') + " </ul>"
}


function selectInput(list) {
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = "";
}






const categories = [...new Set(product.map((item) => {
    return item
}))]

resultsBox.addEventListener('keyup', (e) => {
    const searchData = e.target.value.toLoweCase()
    const filterData = categories.filter((item) => {
        return (
            item.title.toLocalLowerCase().includes(searchData)
        )
    })
    displayItem(filterData)
})


const initApp = () => {
    product.map((value, key) => {
        let newDiv = document.createElement("div")
        newDiv.classList.add("item")
        var { image, name, price } = resultsBox;

        return (newDiv.innerHTML =
            `
                <img src ="images/${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})"Add To Card </button>
            `
        )
    }).join('')
}

initApp()