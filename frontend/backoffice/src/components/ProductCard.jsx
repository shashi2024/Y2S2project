import { useCallback } from "react";

function ProductCard({ product, onSelect }) {
  const handleClick = useCallback(() => {
    if (onSelect) {
      onSelect();
    }
  }, [onSelect]);

  return (
    <div
      className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
      onClick={handleClick}
    >
      <div className="md:flex">
        <div className="md:flex-shrink-0 p-8">
          <img
            className="h-48 w-full object-cover md:w-32"
            src={product.image}
            alt={product.name}
          />
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mt-4">
            {product.name}
          </div>
          <p className="mt-2 text-gray-500">${product.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
