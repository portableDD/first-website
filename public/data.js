let data = [
    {
        name: 'First slippers',
        category: 'slippers',
        price: '2000',
        image: 'home pics/home1.jpg'
    },
    {
        name: 'First shoe',
        category: 'shoe',
        price: '3000',
        image: 'slippers.jpg'
    },
    {
        name: 'First shoe',
        category: 'slipper',
        price: '3000',
        image: 'slippers.jpg'
    },
    {
        name: 'First shoe',
        category: 'slippers',
        price: '3000',
        image: 'slippers.jpg'
    },
    {
        name: 'First shoe',
        category: 'shoe',
        price: '3000',
        image: 'slippers.jpg'
    },
    {
        name: 'First shoe',
        category: 'shoe',
        price: '3000',
        image: 'slippers.jpg'
    },
]

function getCategory() {
    let filitered = [];
    if (window.location.href.includes('shoe')) {
        filitered = data.filter(item => {
           return item.category == 'shoe'
        })
    }
    return alert(JSON.stringify(filitered))
}

getCategory();


function formatItem() {
    let items   = ""
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
        
    

    }
    return items
}

document.querySelector('#test').innerHTML = formatItem()