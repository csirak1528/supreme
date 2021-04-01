//  products_and_categories
// Accessories
// Pants
// Bags
// Tops/Sweaters
// Skate 
// Shoes 
// Shirts 
// Jackets 
// Hats
// T-Shirts 
// Sweatshirts 
// Shorts 
//                 new
//                 name
//                 id
//                 image_url 
//                 image_url_hi
//                 price
//                 sale_price 
//                 new_item
//                 category_name

const getData = async () => {
    var data = await fetch("https://www.supremenewyork.com/mobile_stock.json")
    return data.json()
}

getData().then((data) => {
    var choices = []
    var keywords = []
    var categories = []
    var pC = data.products_and_categories
    //changed to search through categories rather than all of api
    for (var pos in categories) {
        var products = pC[categories[pos]]
        for (var posProd in products) {
            var product = products[posProd]
            for (var namePos in keywords) {
                if (product.name.toLowerCase().includes(keywords[namePos])) {
                    choices.push(
                        {
                            name: product.name,
                            category_name: product.category_name
                        }
                    )
                }
            }
        }
    }


    const setLocation = (choice) => {
        chrome.storage.sync.get('category', (data) => {
            var redirect = "https://www.supremenewyork.com/shop/all/" + choice.category_name
            chrome.runtime.sendMessage({ redirect: redirect })

        })

    }

    const setItem = (item) => {
        chrome.storage.sync.get('item_name', (data) => {
            var items = document.getElementsByClassName('name-link')
            if (items) {
                for (var pos in items) {
                    var curItem = items[pos]
                    if (curItem != undefined) {
                        if ((curItem.innerHTML).toLowerCase() == item.toLowerCase()) {
                            chrome.runtime.sendMessage({ redirect: items[pos].href })
                            break;
                        }
                    }
                }
            }
        })

    }

    var user = {
        name: "Jeff Barnum",
        email: "jeffbarnum96@yahoo.com",
        tel: 2022534845,
        address: "1234 Who street",
        zip: "28104",
        city: "New York",
        state: "NY",
        ccnum: "4767718398576118",
        month: "03",
        year: "2027",
        cvv: "847",

    }

    var start = Date.now()
    var curlink = window.location.href;
    var core = "https://www.supremenewyork.com/shop/"
    var timeDelay = 4000;


    function sleeper(millis) {
        var date = new Date();
        var curDate = null;
        do { curDate = new Date(); }
        while (curDate - date < millis);
    }
    if (!choices) {
        chrome.runtime.sendMessage({ redirect: "https://www.supremenewyork.com/shop/" })
    }

    sleeper(timeDelay);
    if (curlink === core) {
        setLocation(choices[0])
    }
    if (curlink === "https://www.supremenewyork.com/shop") {
        var count = parseInt(document.getElementById("items-count").innerHTML[0])
        if (count) {
            document.querySelector("#cart > a.button.checkout").click()
        }
        else setItem(choices[0].name);


    }
    if (curlink.includes("all")) {
        setItem(choices[0].name)

    }
    if (!(curlink.includes("all")) && curlink.includes('shop')) {
        document.querySelector("#add-remove-buttons > input").click()
        sleeper(1000)
        document.querySelector("#cart > a.button.checkout").click()
    }

    if (curlink.includes("checkout")) {
        document.querySelector("#cart-cc > fieldset > p > label > div").click();
        sleeper(timeDelay / 2);
        document.getElementById("order_billing_name").value = user.name;
        sleeper(timeDelay / 2);
        document.getElementById("order_email").value = user.email;
        sleeper(timeDelay / 2);
        document.getElementById("order_tel").value = user.tel;
        sleeper(timeDelay / 2);
        document.getElementById("bo").value = user.address;
        sleeper(timeDelay / 2);
        document.getElementById("order_billing_zip").value = user.zip;
        sleeper(timeDelay / 2);
        document.getElementById("order_billing_city").value = user.city;
        sleeper(timeDelay / 2);
        var selected = document.getElementById('order_billing_state').getElementsByTagName('option');
        sleeper(timeDelay / 2);
        for (var pos in selected) {
            if (selected[pos].value == user.state) {
                selected[pos].selected = 'selected'
            }
        }
        sleeper(timeDelay / 2);

        document.getElementById("rnsnckrn").value = user.ccnum;
        sleeper(timeDelay / 2);
        var selected = document.getElementById("credit_card_month").getElementsByTagName('option')
        sleeper(timeDelay / 2);
        for (var pos in selected) {
            if (selected[pos].value == user.month) {
                selected[pos].selected = 'selected'
            }
        }

        var selected = document.getElementById("credit_card_year").getElementsByTagName('option')
        sleeper(timeDelay / 2);
        for (var pos in selected) {
            if (selected[pos].value == user.year) {
                selected[pos].selected = 'selected'
            }
        }
        document.getElementById("orcer").value = user.cvv;
        sleeper(timeDelay / 2);

        document.querySelector("#pay > input").click()

    }

    var end = Date.now()

    console.log(end - start)
})