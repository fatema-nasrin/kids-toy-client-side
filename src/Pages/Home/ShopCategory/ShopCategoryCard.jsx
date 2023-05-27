import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ShopCategoryCard = () => {
  const tabsData = [
    {
      id: 1,
      title: "Groovy Guiro",
      cards: [
        {
          id: 1,
          picture:
            "https://cdn.shopify.com/s/files/1/0050/8644/5642/files/237_987_7431_1024x1024_2x_2b28f66c-5bd6-46e7-b47c-2fa07ad2e49f_large.jpg?v=1559077939",
          name: "Croaking frog",
          price: 9.99,
          rating: 4.5,
        },
        {
          id: 2,
          picture:
            "https://cdn.shopify.com/s/files/1/0050/8644/5642/products/handmade-wooden-cricket-guiro_480x480.jpg?v=1676492708",
          name: "Cricket",
          price: 14.99,
          rating: 3.7,
        },
      ],
    },
    {
      id: 2,
      title: "Funky Flute",
      cards: [
        {
          id: 3,
          picture:
            "https://ae01.alicdn.com/kf/H90e5e1eb156949dea3ca06f13eec9712S/Mideer-Colorful-Children-Vertical-Flute-Toy-Woden-Clarinet-Musical-Toy-Baby-Flute-Educational-Toy-Kids-18M.jpg",
          name: "Wooden Piccolo Flute",
          price: 12.99,
          rating: 4.2,
        },
        {
          id: 4,
          picture:
            "https://i.etsystatic.com/22166848/r/il/e975a5/4010491124/il_570xN.4010491124_anza.jpg",
          name: "Vintage Soviet Flute",
          price: 19.99,
          rating: 4.8,
        },
      ],
    },
    {
      id: 3,
      title: "Magical Maracas",
      cards: [
        {
          id: 3,
          picture:
            "https://m.media-amazon.com/images/I/71daqD+PiKL._AC_SL1500_.jpg",
          name: "PREMYO Baby Rattle Maracas",
          price: 12.99,
          rating: 4.2,
        },
        {
          id: 4,
          picture:
            "https://www.cchobby.com/media/catalog/product/v/1/v13425.jpg",
          name: "Painted Wooden Maracas decorated with Bells",
          price: 19.99,
          rating: 4.8,
        },
      ],
    },
  ];

  return (
      <Tabs>
        <TabList>
          {tabsData.map((tab) => (
            <Tab key={tab.id}>{tab.title}</Tab>
          ))}
        </TabList>
    

        {tabsData.map((tab) => (
          <TabPanel key={tab.id}>
            <div className="grid lg:grid-cols-2">
              {tab.cards.map((card) => (
                <div
                  key={card.id}
                  className="border border-gray-300 card w-96 shadow-xl"
                >
                  <figure>
                    <img
                      className="w-full"
                      src={card.picture}
                      alt={card.name}
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="text-2xl font-bold">{card.name}</h2>
                    <h2 className="text-xl"> Price: ${card.price}</h2>
                    <h2 className="text-xl">
                      Rating: {card.rating.toFixed(1)}
                    </h2>
                    <div className="card-actions justify-end">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            
            </div>
          </TabPanel>
        ))}
      </Tabs>
    
  );
};

export default ShopCategoryCard;
