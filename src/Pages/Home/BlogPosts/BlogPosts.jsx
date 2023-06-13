
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { Link } from "react-router-dom";

const BlogPosts = () => {
  const blogPosts = [
    {
      title: "Deformed Fidget Spinner Chain Toys For Children Antistress Hand Spinner Vent Toys Adult Stress Relief Sensory",
      price:
        116,
      imageUrl:
        "https://static-01.daraz.com.bd/p/443eb29f087f50551412e3982a644611.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Pop It Push Pop Bubble Fidget Sensory Toy - Butterfly",
      price:
        96,
      imageUrl:
        "https://static-01.daraz.com.bd/p/7a7d36f9e930634ce8ddaa08c5623a42.jpg",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      title: "Clockwise Key Type Toy Chicken Toy 1Pieces/Baby Cute Cartoon Chick Wind Up Walking Chicken Toys",
      price:
        59,
      imageUrl:
        "https://static-01.daraz.com.bd/p/7b610d9dd350030e3eacfb54f10882c0.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Birthday party funny glasses for Children's & Adults Gift Travel glass",
      price:
        59,
      imageUrl:
        "https://static-01.daraz.com.bd/p/8a37c4e017048c7dc647918c31d5ab7b.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Premium quality 3.5 feet large Soft Teddy Bear - Toy",
      price:
        833,
      imageUrl:
        "https://static-01.daraz.com.bd/p/4225f1725cc34db63ba10f98bea907f8.jpg",
      rating: "⭐⭐⭐",
    },
    {
      title: "Kids Mini Motor Bikes for Kids Play 3 pcs Set",
      price:
        115,
      imageUrl:
        "https://static-01.daraz.com.bd/p/d91aecdfec3c1630889e2d183e3696fa.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Childrenworld Glowing Toy Rounded Edge Little Frog Musical Toy",
      price:
        804,
      imageUrl:
        "https://static-01.daraz.com.bd/p/ccaad3a9d92fa8b3d79acab92dce2139.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Orffworld Crocodile Wooden Castanet Baby Musical Instrument Cartoon Rattle Toy",
      price:
        396,
      imageUrl:
        "https://static-01.daraz.com.bd/p/8f18030ab739237dcc957ec80068b1dc.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "Musical Merry Go Round Toy Manual",
      price:
        150,
      imageUrl:
        "https://static-01.daraz.com.bd/p/721427c7a1daeb0c4bd9fc067e199906.jpg",
      rating: "⭐⭐⭐⭐",
    },
    {
      title: "7pcs/set Children Toys Hand Hold Shaking Bell Educational Rattles Colorful Toy",
      price:
        871,
      imageUrl:
        "https://static-01.daraz.com.bd/p/0006ab56f75523e2c19ac075ed8a811f.jpg",
      rating: "⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="container mx-auto" >
      
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.imageUrl}
                
                className="w-full h-auto object-fill" 
              />
              <div className="p-2">
                <p className="text-gray-500 mb-2">{post.title}</p>
                <p className="flex items-center text-orange-500 text-xl">
                 <HiCurrencyBangladeshi className="h-5 w-auto"/> {post.price}
                 
                </p>
                <p>{post.rating} </p>
                
              </div>
            </a>
          ))}
        </div>
  <div className="text-center">
    <Link to="/allToys">
            <button className="btn btn-secondary my-4">See More</button>
            </Link>
            </div>
    </section>
  );
};

export default BlogPosts;
