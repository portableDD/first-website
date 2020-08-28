errorMessages = []


let data = [
    {
        name: 'TMI BROWN VIBRAM',
        category: 'slipper',
        price: '10,000',
        image: 'home pics/home1.jpg',
        desc: `This is a fine VIBRAM made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `
    },
    {
        name: 'TMI LEATHER SLIPPERS',
        category: 'slipper',
        price: '7000',
        image: 'home pics/home2.jpg',
        desc: `This is a fine TMI slippers made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'ENUGUIGA SIMPLE SLIPPERS',
        category: 'slipper',
        price: '5000',
        image: 'home pics/home3.jpg',
        desc: `This is a fine ENUGUIGA slippers made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'CHELSEA BOOT',
        category: 'shoe',
        price: '15,000',
        image: 'home pics/home4.jpg',
        desc: `This is a fine CHELSEA BOOT made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'TMI LEATHER SLIDES',
        category: 'slipper',
        price: '7000',
        image: 'home pics/home5.jpg',
        desc: `This is a fine LEATHER SLIDES made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'ENUGUIGA FEMALE SANDAL',
        category: 'sandal',
        price: '5,500',
        image: 'home pics/home6.jpg',
        desc: `This is a fine ENUGUIGA FEMALE SANDAL made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'ENUGUIGA UNISEX SLIDES',
        category: 'slipper',
        price: '4,500',
        image: 'home pics/home7.jpg',
        desc: `This is a fine ENUGUIGA UNISEX SLIDES made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'BLUE LOAFERS',
        category: 'shoe',
        price: '13,000',
        image: 'home pics/home8.jpg',
        desc: `This is a fine BLUE LOAFERS made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'BROWN LOAFERS',
        category: 'shoe',
        price: '13,500',
        image: 'home pics/home9.jpg',
        desc: `This is a fine BROWN LOAFERS made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'ENUGUIGA FEMALE SLIDES',
        category: 'slipper',
        price: '4,500',
        image: 'home pics/home10.jpg',
        desc: `This is a fine ENUGUIGA FEMALE SLIDES made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'FASHIONABLE LEATHER SLIPPERS',
        category: 'slipper',
        price: '7,000',
        image: 'home pics/home11.jpeg',
        desc: `This is a fine FASHIONABLE LEATHER SLIPPERS made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'FEMALE LEATHER SLIPPERS',
        category: 'slipper',
        price: '8,000',
        image: 'home pics/home12.jpg',
        desc: `This is a fine FEMALE LEATHER SLIPPERS made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'BROWN GLADIATOR SANDAL',
        category: 'sandal',
        price: '6,500',
        image: 'home pics/home13.jpeg',
        desc: `This is a fine BROWN GLADIATOR SANDAL made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'GLADIATOR SANDAL',
        category: 'sandal',
        price: '6,500',
        image: 'home pics/home14.jpeg',
        desc: `This is a fine GLADIATOR SANDAL made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'BLACK HONDMADE SANDAL',
        category: 'sandal',
        price: '7,000',
        image: 'home pics/home15.jpeg',
        desc: `This is a fine BLACK HONDMADE SANDAL made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'SINGLE MONK STRAP',
        category: 'shoe',
        price: '14,000',
        image: 'home pics/home16.jpeg',
        desc: `This is a fine SINGLE MONK STRAP made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'LEATHER BIRKENSTOCK',
        category: 'slipper',
        price: '6,500',
        image: 'home pics/home17.jpg',
        desc: `This is a fine LEATHER BIRKENSTOCK made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'MEN BLACK LEATHER SLIPPERS',
        category: 'slipper',
        price: '6,500',
        image: 'home pics/home18.jpeg',
        desc: `This is a fine MEN BLACK LEATHER slippers made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'SIMPLE LEATHER SANDAL',
        category: 'sandal',
        price: '7,000',
        image: 'home pics/home19.jpeg',
        desc: `This is a fine SIMPLE LEATHER SANDAL made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'BROWN BUSINESS SANDAL',
        category: 'sandal',
        price: '10,000',
        image: 'home pics/home20.jpeg',
        desc: `This is a fine BROWN BUSINESS SANDAL made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    {
        name: 'BROWN SUEDE CHELSEA BOOT',
        category: 'shoe',
        price: '14,500',
        image: 'shoes pics/shoes1.jpeg',
        desc: `This is a fine BROWN SUEDE CHELSEA BOOT made out of silk, and a well built sole. <br>
               we have various brand of this, in different color, size and pattern, <br>
               which you will love to check out.
                `

    },
    // {
    //     name: 'BLACK DOUBLE MONK STRAP',
    //     category: 'sales',
    //     price: '13,500',
    //     image: 'pics sales page pics/sales1.jpeg'

    // },
]




function formatItem() {
    let items = ""
    let fullPath = window.location.href
    let pos = fullPath.lastIndexOf('/') + 1
    let category = fullPath.substr(pos)
    category = category.substring(0, category.indexOf('.'));

    switch (category) {
        case 'index':
            
            break;
        case 'shoes':
            data = data.filter(item => {
                return item.category == 'shoe'
            })
            break;
        case 'sandal':
            data = data.filter(item => {
                return item.category == 'sandal'
            })
            break;
        case 'slipper':
            data = data.filter(item => {
                return item.category == 'slipper'
            })
            break;
        default:
            break;
    }
    
    
    for ( i = 0; i < data.length; i++) {
            items += `<div class ="items">
                            <a href= "product.html?name=${data[i].name}">
                                <div class= "featured-image">
                                    <img src= "${data[i].image}">
                                </div>
                                <div class = "info">
                                    <span>${data[i].name}</span>
                                    <span>&#8358 ${data[i].price}</span>
                                </div>
                            </a>
                        </div>`

                    
        } 
        return items;
    
}


document.querySelector('.product-wrapper').innerHTML = formatItem();


const urlParams = new URLSearchParams(window.location.search);
const param = urlParams.get('name');
let productItems = document.querySelector('.products-items')
let productSingle = document.createElement('div');
let featuredImage = document.createElement('div');
let content = document.createElement('div');
let contentInfo = document.createElement('div');
let productSingleImage = document.createElement('img')
let desc = document.createElement('p')
let link = document.createElement('a')

productSingle.className = 'product-single'
featuredImage.className = 'featured-image'
content.className = 'content'
contentInfo.className = 'info'
desc.className = 'desc'

let singleItem = data.filter(item => {
    if (item.name === param) {
        productSingleImage.setAttribute('src', item.image)
        link.setAttribute('href', 'payment.html?name='+item.name)
       /* if (window.location.href.includes('product')) {
            link.setAttribute('href', 'payment.html?name='+item.name)
        } else {
            link.setAttribute('href', '#')
            link.setAttribute('onclick', 'return '+payWithPaystack())
        }*/

        contentInfo.innerHTML = `
                <span>Product:${item.name} </span>
                        <br>
                        <span>vendor: Tetrax magnificent</span>
                        <br>
                        <span>price: <span id="price">${item.price}</span> </span>
                        <br>
                `
        link.innerHTML = window.location.href.includes('product')?
            `<button type="submit">purchase</button>` :
             link.style.visibility = "hidden"


        desc.innerHTML = switchContent(item.desc, link)
        content.appendChild(contentInfo)
        content.appendChild(desc)
        content.appendChild(link)
        featuredImage.appendChild(productSingleImage)
        productSingle.appendChild(featuredImage)
        productItems.appendChild(productSingle)
        productItems.appendChild(content)
    }
    return item
});

function switchContent(data) {
    if (window.location.href.includes('product')) {
        return data +
          `<p><b>Delivery is 5-7 days nationwide. <br/>
                      The sizes that are available include:42-45</b>
                   </p>
                `
    }
    return  paymentForm()
}

function paymentForm() {
    return `
        <div class="pay-bitch">
        <div class="error"></div>
                                <p class="name">
                                    <input oninput="clearError()" class="field" type="text"  placeholder="Full Name">
                                </p>
                                <p class="phone">
                                    <input oninput="clearError()" class="field" type="text"  placeholder="Phone Number">
                                </p>
                                <p class="email">
                                    <input oninput="clearError()" class="field" type="email"  placeholder="Email Address">
                                </p>
                                <p class="house">
                                    <input oninput="clearError()" class="field" type="text"  placeholder="Residential Address">
                                </p>
                                <p class="size">
                                    <input oninput="clearError()" class="field" type="text" placeholder="Shoes size">
                                </p>
                                <button onclick = "submitForm()" type="submit">pay</button>
                            </div>
    `
} 


function submitForm() {
    validateFields()
    if (!errorMessages.length) {
        const { email, phone, amount } = getUserDetails()

        payWithPaystack(email,amount,phone)
    }
}

function getUserDetails() {
    const name = document.querySelector('.name input').value
    const phone = document.querySelector('.phone input'). value
    const email = document.querySelector('.email input'). value
    const house = document.querySelector('.house input'). value
    const size = document.querySelector('.size input'). value
    const amount = document.querySelector('#price').innerText
    return {name, phone, email, house, size, amount}
}

function validateFields() {
    const {name, phone} = getUserDetails()

    if (name.length < 3){
        errorMessages.push('Incomplete name entererd')
    }
    if (isNaN(phone)){
        errorMessages.push('Invalid phone number entered')
    }

    if(errorMessages.length) {
        let el = ''
        errorMessages.forEach(err => {
            el += `<p>${err}</p>`
        })
        return document.querySelector('.error').innerHTML = el
    }
}


function clearError() {
    let elements = document.querySelectorAll('.field')
    elements.forEach(el => {
        if(errorMessages.length){
            errorMessages = []
            document.querySelector('.error').innerHTML = ''
        }
    })
}

function payWithPaystack(email,amount,phone) {
    const price = amount+'00'
    let handler = PaystackPop.setup ({
        key:"pk_test_82ce23694563611af6015b7bdfc1dd4a1f044acf",
        email,
        amount: price,
        metadata: {
            custom_fields:[
                {
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value:phone,
                }
            ]
        },
        callback: function(response){
            let message = 'Payment complete! Reference: ' + response.reference;
            alert(message);
          },
        onClose: function () {
            alert("Transaction cancelled");
        }
    });
       handler.openIframe();
}



