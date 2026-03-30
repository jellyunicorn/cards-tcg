import ProductTestimonials from "./ProductTestimonials";

interface ProductProps {
  img: string;
  name: string;
  price: number;
  desc: string;
  testimonial: string;
}

export default function ProductCard(props: ProductProps) {
  return (
    <div className="shadow-md p-1 rounded-md font-pjs h-80">
      <div className="grid grid-cols-[1fr_2fr] gap-3 p-3 h-full">
        <div className="h-full w-full overflow-hidden">
          <img
            src={props.img}
            alt="Product image"
            className="object-scale-down h-full w-full overflow-hidden"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col">
            <h1 className="font-bold text-xl">{props.name}</h1>
            <p className="text-gray-600 text-[14px]">${props.price}</p>
            <p className="mt-2 text-[12px]">{props.desc}</p>
            <div className="mt-3">
              <ProductTestimonials testimonial={props.testimonial} />
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#5540dd] hover:bg-[#6377fc] px-3 py-2 rounded-md font-semibold text-white cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
