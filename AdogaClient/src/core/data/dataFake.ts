export const amenities = [
  { id: "1", name: "Bathrobes", icon: "icon-podcast" },
  { id: "2", name: "Hair dryer", icon: "icon-cctv" },
  { id: "3", name: "Toiletries", icon: "icon-cctv" },
  { id: "4", name: "Bathroom phone", icon: "icon-podcast" },
  { id: "5", name: "Mirror", icon: "icon-podcast" },
  { id: "6", name: "Towels", icon: "icon-cctv" },
  { id: "7", name: "City view", icon: "icon-cctv", important: true },
  { id: "8", name: "Balcony/terrace", icon: "icon-cctv", important: true },
  { id: "9", name: "Non-smoking", icon: "icon-cctv", important: true },
  { id: "10", name: "Shower", icon: "icon-cctv", important: true },
];
export const benefitsRoom = [
  { id: "1", name: "Free breakfast for 2" },
  { id: "2", name: "Pay nothing until January 28, 2021" },
  { id: "3", name: "Free Wi-Fi" },
  { id: "4", name: "Free cancellation before January 30, 2021" },
  { id: "5", name: "Pay at the hotel" },
  { id: "6", name: "Book without credit card" },
  { id: "7", name: "Free breakfast for 4" },
];

export const productRatingDetail = [
  { ratingId: "1", ratingName: "Cleanliness", ratingNumber: 9.5 },
  { ratingId: "2", ratingName: "Facilities", ratingNumber: 8.0 },
  { ratingId: "3", ratingName: "Location", ratingNumber: 9.3 },
  { ratingId: "4", ratingName: "Room comfort and quality", ratingNumber: 9.0 },
  { ratingId: "5", ratingName: "Service", ratingNumber: 9.2 },
  { ratingId: "6", ratingName: "Value for money", ratingNumber: 9.1 },
];

export const about =
  "<p class='sc-fznzOf jIYGxL'>Situated in the District 1 area, <b>The Chill Suites- City Center </b>is the perfect place to experience Ho Chi Minh City and its surroundings. From here, guests can make the most of all that the lively city has to offer. With its convenient location, the property offers easy access to the city's must-see destinations.<br><br> Offering guests superior services and a broad range of amenities, <b>The Chill Suites- City Center </b>is committed to ensuring that your stay is as comfortable as possible. While lodging at this wonderful property, guests can enjoy free Wi-Fi in all rooms, 24-hour room service, 24-hour security, convenience store, daily housekeeping.<br><br> 47 rooms spread over floors provide a warm and pleasant home away from home. Comforts such as locker, closet, complimentary tea, towels, wooden/parqueted flooring can be found in selected rooms. The property's host of recreational offerings ensures you have plenty to do during your stay. Whatever your purpose of visit, <b>The Chill Suites- City Center </b>is an excellent choice for your stay in Ho Chi Minh City.</p>";

export const dataRoom = {
  id: "1234",
  name: "Superior Double Room",
  price: 2230103,
  discount: 75,
  people: 3,
  images: [
    {
      linkImage:
        "https://pix6.agoda.net/hotelImages/263080/-1/1979dbbc66db5a565cad452a52ba0ee2.jpg?s=1024x768",
      title: "Room",
    },
    {
      linkImage:
        "https://pix6.agoda.net/hotelImages/263080/-1/304d90dce5ba6a14cd05c9169d998a00.jpg?s=1024x768",
      title: "Room",
    },
    {
      linkImage:
        "https://pix6.agoda.net/hotelImages/263080/-1/f790755d6926c4ce998dcccedac1d33b.jpg?s=1024x768",
      title: "Room",
    },
  ],
  only: 10,
  facilities: [
    { id: "1", name: "Bathroom and toiletries", amenities: amenities },
    { id: "2", name: "Entertainment", amenities: amenities },
    { id: "3", name: "Comforts", amenities: amenities },
    { id: "4", name: "Dinging, drink", amenities: amenities },
    { id: "5", name: "Layout", amenities: amenities },
    { id: "6", name: "Clothing", amenities: amenities },
  ],
  rating: 8.5,
  size: "28 m²/301 ft²",
  beds: 2,
  benefitsRoom,
};

export const dataRoom1 = {
  id: "12345",
  name: "Kings Hotel Dalat",
  price: 1690192,
  discount: 60,
  people: 4,
  images: [
    {
      linkImage:
        "https://pix6.agoda.net/hotelImages/1203694/-1/01804829b90dde86130a87f386d7fd32.jpg?s=1024x768",
      title: "Room",
    },
    {
      linkImage:
        "https://pix6.agoda.net/hotelImages/1203694/-1/a5e13d98c3d6c991f7a05e9255c7916a.jpg?s=1024x768",
      title: "Room",
    },
    {
      linkImage:
        "https://pix6.agoda.net/hotelImages/1203694/-1/868fd4e574275d54d0ef442184f00563.jpg?s=1024x768",
      title: "Room",
    },
  ],
  only: 10,
  facilities: [
    { id: "1", name: "Bathroom and toiletries", amenities: amenities },
    { id: "2", name: "Entertainment", amenities: amenities },
    { id: "3", name: "Comforts", amenities: amenities },
    { id: "4", name: "Dinging, drink", amenities: amenities },
    { id: "5", name: "Layout", amenities: amenities },
    { id: "6", name: "Clothing", amenities: amenities },
  ],
  rating: 7.5,
  size: "28 m²/301 ft²",
  beds: 5,
  benefitsRoom,
};

export const dataProductFake = [
  {
    id: "1",
    name: "Cozrum Homes Premier Residences",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/941/9411958/9411958_19082615140080010014.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "2",
    name: "Mayfair Suites - WMC Tower",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://q-xx.bstatic.com/xdata/images/hotel/840x460/230635211.jpg?k=c13a417048547e7a22086948871aa0e4d3113932ab326078285160a720fd1a3f&o=",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/230635211.jpg?k=c13a417048547e7a22086948871aa0e4d3113932ab326078285160a720fd1a3f&o=",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "6",
    name: "Cozrum Homes Dragon House",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://q-xx.bstatic.com/xdata/images/hotel/840x460/230635458.jpg?k=94c3394eb931adf48716243a752746c11a5d40749408c1720e15e15416699b2c&o=",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/230635458.jpg?k=94c3394eb931adf48716243a752746c11a5d40749408c1720e15e15416699b2c&o=",
        title: "Main",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/230635462.jpg?k=197eb8f7cd3cacbbce22df358cfa564652933bc2ccf755738f1e6d9ecb82ff9b&o=",
        title: "Lobby",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/193711037.jpg?k=30ec3d68f87513518a3c66586291cb7ed2dc5f6e44057b2f49602e4a8b2faa61&o=",
        title: "Bed",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/230635451.jpg?k=a566fa65cdb61d9cb4cfe8361905d8ba279501db7c5ff0e2b784db9e8c5d0cdc&o=",
        title: "Out door",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/230635454.jpg?k=67402d650c76090fa4fec37ab474b6be1da511889b950a8cfa33484f6a16b318&o=",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/224044108.jpg?k=3f8bade7b1a22ded90439353ab611e886cdfd69335f3690462f05d77fbed4abd&o=",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/224044098.jpg?k=5490606337c516b89da5eac8d93226a7fe5bdfc650cfe2bf04347e6a65c08cdd&o=",
        title: "Spa",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/224044100.jpg?k=f4af9f4919cecb78aac470daafaf29668a8b7ed777890ca7a3f3d23bf2cc1b3d&o=",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/224044103.jpg?k=8b86e110ad2ac4478e9c9689042f0f9db3ea6e116d5089262ef1642f013bb9db&o=",
        title: "Spa",
      },
      {
        linkImage:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/222155917.jpg?k=7bea2f7580292fb6c14305ca3f773ec927dda92683e2eb321a3de8a4171c3ede&o=",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "3",
    name: "Cozrum Homes Rivera Corner",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/110/11088582/11088582_19121114480085583809.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "4",
    name: "Lavis 18 Residence",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/1517561/-1/c8d7f0bb4cf45c2493dfaf257b0b1750.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "5",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/941/9411958/9411958_19082615140080010014.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "13",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/1517561/-1/c8d7f0bb4cf45c2493dfaf257b0b1750.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "7",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/941/9411958/9411958_19082615140080010014.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "8",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/941/9411958/9411958_19082615140080010014.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
    discount: 50,
  },
  {
    id: "9",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5462641/-1/aebe6ddf0d5731c036a54e3a46418a28.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "10",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5435458/-1/5c31af4969b44f65b5168692b5ce7bb7.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "11",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5462641/-1/aebe6ddf0d5731c036a54e3a46418a28.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "12",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "14",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "15",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "16",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "17",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    productType: "1",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "18",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "19",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "20",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "2",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "21",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "3",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "22",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "3",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "23",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "3",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "24",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "3",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "25",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "4",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "26",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "4",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "27",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "4",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "28",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "4",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "29",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "4",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "30",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "31",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "32",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "33",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "34",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "35",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "36",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "37",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
];

export const dataProductRecommended = [
  {
    id: "1",
    name: "Cozrum Homes Premier Residences",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "1",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/941/9411958/9411958_19082615140080010014.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 50,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "12",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 49,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
  {
    id: "7",
    name: "Cozrum Homes Truong Dinh",
    star: 4,
    street: "Binh Thanh, Ho Chi Minh City",
    price: 1670230,
    locationId: "5",
    imageThumbnail:
      "https://pix6.agoda.net/hotelImages/5638299/-1/cfdc49590cc000480e5abd69f1ccf9f3.jpg",
    rating: 9.7,
    benefits: [
      { id: "1", name: "Breakfast" },
      { id: "2", name: "Free cancellation" },
      { id: "3", name: "Pay at the hotel" },
      { id: "4", name: "Free mini bar" },
      { id: "5", name: "Free saune accsess" },
      { id: "6", name: "Free fitness center access" },
      { id: "7", name: "Breakfast for 1 person" },
      { id: "8", name: "Free pool accsess" },
    ],
    images: [
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/dda69105b36792ae769230297d80c6ef.jpg?s=450x450",
        title: "Main",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/1014e6ac69fbd81ee88238e053dd453d.jpg?s=1024x768",
        title: "Lobby",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/564/5646737/5646737_18102311260068629495.jpg?s=1024x768",
        title: "Bed",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/8ac4ace1fdb894e193737e123b1dc27b.jpg?s=1024x768",
        title: "Out door",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/b9fd9f23603ec4444729a7858990557c.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/94c7ca2a6e715887bc6cf58a2106e9e6.jpg?s=1024x768",
        title: "Ballroom",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/c2fbb639f2374bb1d18d7be7315a07c1.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/ff1e2a471e7071ca9dc4bdd38920868a.jpg?s=1024x768",
        title: "Restaurant",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/bb3d697b703450cb1a76f583ade439c5.jpg?s=1024x768",
        title: "Spa",
      },
      {
        linkImage:
          "https://pix6.agoda.net/hotelImages/5646737/-1/a185b06e8fa30832ea0afc930e7f717c.jpg?s=1024x768",
        title: "",
      },
    ],
    only: 4,
    discount: 68,
    productType: "2",
    rooms: [dataRoom, dataRoom1, dataRoom, dataRoom1, dataRoom],
    productAbout: about,
    productRatingDetail,
  },
];

export const dataLocationFake = [
  {
    id: "1",
    name: "Ho Chi Minh City",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "2",
    name: "Hanoi",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/2758/1_2758_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "3",
    name: "Dalat",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "4",
    name: "VungTau",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "5",
    name: "Phu Quoc Island",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/17188/1_17188_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "6",
    name: "Da Nang",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "7",
    name: "Nha Trang",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/2679/1_2679_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "8",
    name: "Phan Thiet",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/16264/1_16264_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "9",
    name: "Sapa",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "10",
    name: "Can Tho",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "11",
    name: "Hue",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "12",
    name: "Hoi An",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "13",
    name: "Ca Mau",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
  {
    id: "14",
    name: "Phu Yen",
    isTop: true,
    image:
      "https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?s=345x345&ar=1x1",
    accommodations: 8886,
  },
];
