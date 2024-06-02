const recipes = [
    {
        id: 0,
        source: "fried_rice.html",
        image: "img/Foods/friedrice.png",
        title: "Fried Rice",
        country: "Indonesia's Food"
    },
    {
        id: 1,
        source: "penang_asam_laksa.html",
        image: "img/Foods/penangassamlaksa.jpg",
        title: "Penang Asam Laksa",
        country: "Malaysia's Food"
    },
    {
        id: 3,
        source: "rendang.html",
        image: "img/Foods/rendang.jpg",
        title: "Rendang",
        country: "Indonesia's Food"
    },
    {
        id: 4,
        source: "beef_massaman_curry.html",
        image: "img/Foods/BeefMassamanCurry.jpeg",
        title: "Beef Massaman Curry",
        country: "Thailand's Food"
    },
    {
        id: 5,
        source: "chili_crab.html",
        image: "img/Foods/ChiliCrab.webp",
        title: "Chili Crab",
        country: "Singapore's Food"
    },
    {
        id: 6,
        source: "Tom_Yum_Goong.html",
        image: "img/Foods/tomyumgoong.jpg",
        title: "Tom Yum Goong",
        country: "Thailand's Food"
    },
    {
        id: 7,
        source: "taco.html",
        image: "img/Foods/taco.jpg",
        title: "Taco",
        country: "Mexico's Food"
    },
    {
        id: 8,
        source: "lasagna.html",
        image: "img/Foods/Lasagna.jpg",
        title: "Lasagna",
        country: "Italy's Food"
    },
    {
        id: 9,
        source: "pierogi.html",
        image: "img/Foods/Pierogies.jpg",
        title: "Pierogi",
        country: "Poland's Food"
    },
    {
        id: 10,
        source: "pastel_de_nata.html",
        image: "img/Foods/Pasteldenata.webp",
        title: "Pastel de Nata",
        country: "Portugal's Food"
    },
    {
        id: 11,
        source: "bunny_chow.html",
        image: "img/Foods/BunnyChow.jpg",
        title: "Bunny Chow",
        country: "South Africa's Food"
    },
    {
        id: 12,
        source: "hummus.html",
        image: "img/Foods/hummus.jpg",
        title: "Hummus",
        country: "Middle's East Food"
    },
    {
        id: 13,
        source: "croissant.html",
        image: "img/Foods/Croissant.jpg",
        title: "Croissant",
        country: "French's Food"
    },
    {
        id: 14,
        source: "stinky_tofu.html",
        image: "img/Foods/Stinkytofu.jpg",
        title: "Stinky Tofu",
        country: "Southeast Asia's Food"
    },
    {
        id: 15,
        source: "som_tam.html",
        image: "img/Foods/Somtam.jpg",
        title: "Som Tam",
        country: "Thailand's Food"
    }
];

const categories = [...new Set(recipes.map((item) => {return item}))];

document.getElementById("searchBar").addEventListener("keyup", (e) => {
    const searchData = e.target.value.toLowerCase();
    const filterData = categories.filter((item) => {
        return (
            item.title.toLocaleLowerCase().includes(searchData)
        )
    })

    if(filterData.length === 0) {
        document.querySelector(".error").style.display = "block";
    } else {
        document.querySelector(".error").style.display = "none";
    }

    displayItem(filterData)
});

const displayItem = (items) => {
    document.getElementById("result-recipe").innerHTML = items.map((item) => {
        var {source, image, title, country} = item;
        return (
            `<div class="result">
                <a class="card" href="${source}">
                    <div>
                        <img src=${image}></img>
                        <h5>${title}</h5>
                        <p>${country}</p>
                    </div>
                </a>
            </div>`
        )
    }).join("")
};

displayItem(categories);