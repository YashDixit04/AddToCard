
const resultsBox = document.querySelector(".result-box")
const inputBox = document.querySelector("#input-box")

const openShopping = document.querySelector(".shopping")
const closeShopping = document.querySelector(".closeShopping")
const list = document.querySelector(".list")
const listCard = document.querySelector('.listCard')
const total = document.querySelector(".total")
const body = document.querySelector("body")
const quantity = document.querySelector(".quantity")

const product = [
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

let productInfo =[]

function inputData(){
    return product.map(productName => productName.name);
}
console.log(inputData())


inputBox.onkeyup = function(){
    let result =[]
    let input = inputBox.value
    if (input.length){
        result = inputData().filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        })
        displayData(result);
        if(!result.length){
            resultsBox.innerHTML ="";
        }
    }
}

function displayData(result){
    const content = result.map((list)=>{
        return  "<li onclick=selectInput(this)>" + list + "</li>";
    })
     resultsBox.innerHTML = "<ul>" + content.join('') + " </ul>"
}

resultsBox.addEventListener("input", e=>{
    const value = e.target.value.toLowerCase();
    productInfo.forEach(productName =>{
        const isVisible = productName.name.toLowerCase().includes(value) || productName.price.includes(value)
        productName.element.classList.toggle("hide", !isVisible)
    })
})

// resultsBox.addEventListener("click", out =>{
//     list = 
// })