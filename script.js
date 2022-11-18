// DOM
const swiper = document.querySelector('swiper');

//constants
const urls = [ 
    'male/dami-adebayo-k6aQzmIbR1s-unsplash.jpg',
    'male/dami-adebayo-k6aQzmIbR1s-unsplash.jpg',
    'male/dami-adebayo-k6aQzmIbR1s-unsplash.jpg',
    'male/prince-akachi-icu-D9rYM4w-unsplash.jpg',
    'male/cassandra-hamer-rKV-LcPEVg4-unsplash.jpg'
]

// variables
let cardcount = 0;

// functions
function appendNewCard(){
    const card = new Card( {
        imageUrl:urls[ cardcount % 5]
    });

    swiper.append(card.element);
    cardcount++;
}

// first 5 cards
for (let i=0; i<5; i++){
    appendNewCard();
}