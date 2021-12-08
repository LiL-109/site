var ws = new WebSocket("ws://localhost:9999");
				
ws.onopen = function() {
   
   // Web Socket is connected, send data using send()
   ws.send("Message to send");
};

ws.onmessage = function (event) {
  console.log(event.data);
};

window.catalog = [ {
    id: '07cf6ce2-6eee-4e78-a441-f257fdea7ed6',
    dateAdded: '2021-11-15T15:35:13.000Z',
    title: 'Джампер',
    description: '',
    placeholder: null,
    discountedPrice: 76.25,
    price: 76.25,
    hasNew: false,
    category: 'women',
    fashion: 'Casual style',
    colors: ['Black', 'Blue'],
    sizes: ['UK 50', 'UK 52', 'UK 54'],
    thumbnail: 'images/2.png',
    preview: ['images/2.png', 'images/1.png', 'images/3.png']
}, {
    id: '014c271a-2811-47fc-b63f-ba279a4ec830',
    dateAdded: '2021-11-15T16:58:40.000Z',
    title: 'Синій топ',
    description: 'Zara є дизайнерським підходом за збереження демократичних цін. Цей бренд належить до найпопулярніших у всьому світі.',
    placeholder: null,
    discountedPrice: 65.5,
    price: 70,
    hasNew: false,
    category: 'women',
    fashion: 'Casual style',
    colors: ['Black', 'Blue'],
    sizes: ['Довільний'],
    thumbnail: 'images/blue1.png',
    preview: ['images/blue1.png', 'images/blue2.png','images/blue3.png']
}, {
    id: '8b300772-eee3-4ff1-b091-e89f17e0e469',
    dateAdded: '2021-11-15T15:35:13.000Z',
    title: 'Джампер',
    description: '',
    placeholder: null,
    discountedPrice: 76.25,
    price: 76.25,
    hasNew: false,
    category: 'women',
    fashion: 'Casual style',
    colors: ['Black', 'Blue'],
    sizes: ['UK 50', 'UK 52', 'UK 54'],
    thumbnail: 'images/8.png', 
    preview: ['images/8.png', 'images/8.png', 'images/8.png'] 
}, {
    id: '8c061815-6a7d-4465-bb78-1bdc6c5adebf',
    dateAdded: '2021-11-15T16:58:40.000Z',
    title: 'Синій топ',
    description: 'Zara є дизайнерським підходом за збереження демократичних цін. Цей бренд належить до найпопулярніших у всьому світі.',
    placeholder: null,
    discountedPrice: 65.5,
    price: 70,
    hasNew: false,
    category: 'women',
    fashion: 'Casual style',
    colors: ['Black', 'Blue'],
    sizes: ['Довільний'],
    thumbnail: 'images/blue1.png',
    preview: ['images/blue1.png', 'images/blue2.png','images/blue3.png']
}];