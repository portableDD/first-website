let data = [
    {
        name: 'TMI BROWN VIBRAM',
        category: 'slipper',
        price: '10,000',
        image: 'home pics/home1.jpg'
    },
    {
        name: 'TMI LEATHER SLIPPERS',
        category: 'slipper',
        price: '7000',
        image: 'home pics/home2.jpg'

    },
    {
        name: 'ENUGUIGA SIMPLE SLIPPERS',
        category: 'slipper',
        price: '5000',
        image: 'home pics/home3.jpg'

    },
    {
        name: 'CHELSEA BOOT',
        category: 'shoe',
        price: '15,000',
        image: 'home pics/home4.jpg'

    },
    {
        name: 'TMI LEATHER SLIDES',
        category: 'slipper',
        price: '7000',
        image: 'home pics/home5.jpg'

    },
    {
        name: 'ENUGUIGA FEMALE SANDAL',
        category: 'sandal',
        price: '5,500',
        image: 'home pics/home6.jpg'

    },
    {
        name: 'ENUGUIGA UNISEX SLIDES',
        category: 'slipper',
        price: '4,500',
        image: 'home pics/home7.jpg'

    },
    {
        name: 'BLUE LOAFERS',
        category: 'shoe',
        price: '13,000',
        image: 'home pics/home8.jpg'

    },
    {
        name: 'BROWN LOAFERS',
        category: 'shoe',
        price: '13,500',
        image: 'home pics/home9.jpg'

    },
    {
        name: 'ENUGUIGA FEMALE SLIDES',
        category: 'slipper',
        price: '4,500',
        image: 'home pics/home10.jpg'

    },
    {
        name: 'FASHIONABLE LEATHER SLIPPERS',
        category: 'slipper',
        price: '7,000',
        image: 'home pics/home11.jpeg'

    },
    {
        name: 'FEMALE LEATHER SLIPPERS',
        category: 'slipper',
        price: '8,000',
        image: 'home pics/home12.jpg'

    },
    {
        name: 'BROWN GLADIATOR SANDAL',
        category: 'sandal',
        price: '6,500',
        image: 'home pics/home13.jpeg'

    },
    {
        name: 'GLADIATOR SANDAL',
        category: 'sandal',
        price: '6,500',
        image: 'home pics/home14.jpeg'

    },
    {
        name: 'BLACK HONDMADE SANDAL',
        category: 'sandal',
        price: '7,000',
        image: 'home pics/home15.jpeg'

    },
    {
        name: 'SINGLE MONK STRAP',
        category: 'shoe',
        price: '14,000',
        image: 'home pics/home16.jpeg'

    },
    {
        name: 'LEATHER BIRKENSTOCK',
        category: 'slipper',
        price: '6,500',
        image: 'home pics/home17.jpg'

    },
    {
        name: 'MEN BLACK LEATHER SLIPPERS',
        category: 'slipper',
        price: '6,500',
        image: 'home pics/home18.jpeg'

    },
    {
        name: 'SIMPLE LEATHER SANDAL',
        category: 'sandal',
        price: '7,000',
        image: 'home pics/home19.jpeg'

    },
    {
        name: 'BROWN BUSINESS SANDAL',
        category: 'sandal',
        price: '10,000',
        image: 'home pics/home20.jpeg'

    },
    {
        name: 'BROWN SUEDE CHELSEA BOOT',
        category: 'shoe',
        price: '14,500',
        image: 'shoes pics/shoes1.jpeg'

    },
    // {
    //     name: 'BLACK DOUBLE MONK STRAP',
    //     category: 'sales',
    //     price: '13,500',
    //     image: 'pics sales page pics/sales1.jpeg'

    // },
]


function formatItem() {
    let items   = ""
    if (window.location.href.includes('index')) {
    for ( i = 0; i < data.length; i++) {
            items += `<div class ="items">
                            <a href= "product1.html">
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
            return item.category === 'shoe'
        })
            // alert(JSON.stringify(filitered))  
    
        for ( i = 0; i < filitered.length; i++) {
            items += `<div class ="items">
                            <a href= #>
                                <div class= "featured-image">
                                    <img src= "${filitered[i].image}">
                                </div>
                                <div class = "info">
                                    <span>${filitered[i].name}</span>
                                    <span>&#8358 ${filitered[i].price}</span>
                                </div>
                            </a>
                        </div>`
    
                    
        } 
        return items;
    } else if ( window.location.href.includes('sandal')) {
        let filiter = [];
        filiter = data.filter(item => {
            return item.category === 'sandal'
        })
            // alert(JSON.stringify(filiter))  
    
        for ( i = 0; i < filiter.length; i++) {
            items += `<div class ="items">
                            <a href= #>
                                <div class= "featured-image">
                                    <img src= "${filiter[i].image}">
                                </div>
                                <div class = "info">
                                    <span>${filiter[i].name}</span>
                                    <span>&#8358 ${filiter[i].price}</span>
                                </div>
                            </a>
                        </div>`
    
                    
        } 
        return items;
    }  else if ( window.location.href.includes('slipper')) {
        let filit = [];
        filit = data.filter(item => {
            return item.category === 'slipper'
        })
            // alert(JSON.stringify(filit))  
    
        for ( i = 0; i < filit.length; i++) {
            items += `<div class ="items">
                            <a href= #>
                                <div class= "featured-image">
                                    <img src= "${filit[i].image}">
                                </div>
                                <div class = "info">
                                    <span>${filit[i].name}</span>
                                    <span>&#8358 ${filit[i].price}</span>
                                </div>
                            </a>
                        </div>`
    
                    
        } 
        return items;
    }

}


document.querySelector('.product-wrapper').innerHTML = formatItem();


