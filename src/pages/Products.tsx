import Footer from "../sections/Footer";
import Navbar from "../sections/Navbar";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import usePagination from "../utils/usePagination";
import Pagination from "../components/Pagination";

interface Product {
  id: number;
  img: string;
  name: string;
  price: number;
  desc: string;
  testimonial: string;
}

export default function Products() {
  // dummy data
  const products: Product[] = [
    {
      id: 1,
      img: "/src/assets/locr_booster.png",
      name: "Limit Over Collection: The Rivals (Box)",
      price: 60,
      desc: "1 box of Yu-Gi-Oh!'s upcoming set, containing support for decks used by antagonists of the Yu-Gi-Oh! anime and extended-art cards.",
      testimonial: "Product arrived in mint condition!",
    },
    {
      id: 2,
      img: "/src/assets/loch_booster.png",
      name: "Limit Over Collection: The Heroes (Box)",
      price: 60,
      desc: "1 box of Yu-Gi-Oh!'s latest set, containing support for decks used by protagonists of the Yu-Gi-Oh! anime and extended-art cards.",
      testimonial: "Pulled a beautiful Grandmaster Rare!",
    },
    {
      id: 3,
      img: "/src/assets/deckbox_large_red.png",
      name: "Large Deckbox (Red)",
      price: 15,
      desc: "Large leather deckbox that stores up to 200 cards and comes with a dice container.",
      testimonial: "Perfect fit for my triple-sleeved Commander deck!",
    },
    {
      id: 4,
      img: "/src/assets/deckbox_plastic_green.webp",
      name: "Medium Deckbox (Green)",
      price: 8,
      desc: "Medium plastic deckbox that stores up to 100 cards.",
      testimonial: "Great deckbox for those starting out and don't want to spend too much on accessories.",
    },
    {
      id: 5,
      img: "/src/assets/multiplyingkuriboh_ur_ea.png",
      name: "LOCH-JP002 Multiplying Kuriboh (UR)",
      price: 12,
      desc: "Ultra Rare extended art version of Multiplying Kuriboh from Limit Over Collection: The Heroes.",
      testimonial: "Delivery was quick!",
    },
    {
      id: 6,
      img: "/src/assets/black_d6.jpg",
      name: "Futuristic Black d6 Dice Set",
      price: 10,
      desc: "A set of 6 d6 dice featuring a sleek, highly futuristic design.",
      testimonial: "They look fantastic!",
    },
    {
      id: 7,
      img: "/src/assets/die_tungsten.webp",
      name: "Ultra Large Tungsten d20 Dice",
      price: 2500,
      desc: "Premium 45mm d20 dice made of pure tungsten.",
      testimonial: "Great to throw for exercise too!",
    },
    {
      id: 8,
      img: "/src/assets/playmat_eeveelution.jpg",
      name: "Pokemon TCG Eeveelution Playmat",
      price: 5,
      desc: "Paper Pokemon TCG playmat depicting the various evolved forms of Eevee.",
      testimonial: "Eevee is my favorite Pokemon!",
    },
    {
      id: 9,
      img: "/src/assets/playmat_yugidm.jpg",
      name: "Yu-Gi-Oh! Shonen Jump Yugi Muto Playmat",
      price: 20,
      desc: "Rubber Yu-Gi-Oh playmat depicting the protagonist of the original Yu-Gi-Oh! anime Yugi Muto along with his ace monsters, Dark Magician and Dark Magician Girl.",
      testimonial: "I love Dark Magician! Dark Magical Attack!!",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const handleSearch = (search: string) => {
    const result: Product[] = products.filter((product) => {
      return product.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredProducts(result);
  };

  const { currentPage, currentData, totalPages, nextPage, prevPage } =
    usePagination({ data: filteredProducts, itemsPerPage: 4 });

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center font-pjs gap-8 mt-8">
        <h1 className="text-5xl font-extrabold tracking-wide">Products</h1>
        <SearchBar
          handleSearch={handleSearch}
          placeholder="Search products here..."
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mx-8 my-8 gap-4">
        {currentData.map((product) => {
          return (
            <ProductCard
              key={product.id}
              img={product.img}
              name={product.name}
              price={product.price}
              desc={product.desc}
              testimonial={product.testimonial}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
