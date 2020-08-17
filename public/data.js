let data = [
    {
        name: 'First slippers',
        category: 'slipper',
        price: '2000',
        image: 'home pics/home1.jpg'
    },
    {
        name: 'First shoe',
        category: 'shoe',
        price: '3000',
        image: 'home pics/home1.jpg'

    },
    {
        name: 'First slippers',
        category: 'slipper',
        price: '3000',
        image: 'home pics/home1.jpg'

    },
    {
        name: 'First slippers',
        category: 'slipper',
        price: '3000',
        image: 'home pics/home1.jpg'

    },
    {
        name: 'First shoe',
        category: 'shoe',
        price: '3000',
        image: 'home pics/home1.jpg'

    },
    {
        name: 'First shoe',
        category: 'shoe',
        price: '3000',
        image: 'home pics/home1.jpg'

    },
]

// function getCategory() {
    
// }
// document.querySelector('.product-wrapper').innerHTML = getCategory();

function formatItem() {
    let items   = ""
    if (window.location.href.includes('index')) {
    for ( i = 0; i < data.length; i++) {
            items += `<div class ="items">
                            <a href= #>
                                <div class= "featured-image">
                                    <img src= "${data[i].image}">
                                </div>
                                <div class = "info">
                                    <span>${data[i].name}</span>
                                    <span>&#8358 ${data[i].price}</span>
                                </div>
                            </a>
                        </div>`

                    
        } return items;
    } else if ( window.location.href.includes('shoe')){
        let filitered = [];
        filitered = data.filter(item => {
            return item.category == 'shoe'
        })
            alert(JSON.stringify(filitered))  
    
        for ( i = 0; i < filitered.length; i++) {
            items += `<div class ="items">
                            <a href= #>
                                <div class= "featured-image">
                                    <img src= "${data[i].image}">
                                </div>
                                <div class = "info">
                                    <span>${data[i].name}</span>
                                    <span>&#8358 ${data[i].price}</span>
                                </div>
                            </a>
                        </div>`
    
                    
        } return items;
    }
}


document.querySelector('.product-wrapper').innerHTML = formatItem();


