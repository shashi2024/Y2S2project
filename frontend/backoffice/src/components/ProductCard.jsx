import { useCallback } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

function ProductCard({ product, onSelect, onDeselect }) {
  const handleSelect = useCallback(() => {
    if (onSelect) {
      onSelect();
    }
  }, [onSelect]);

  const handleDeselect = useCallback(() => {
    if (onDeselect) {
      onDeselect();
    }
  }, [onDeselect]);

  return (
    <div
      className="max-w-sm mx-auto bg-second_background rounded-xl shadow-md overflow-hidden md:max-w-2xl m-4"
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
          <div className="flex justify-between items-center mt-4">
            <FaMinusSquare onClick={handleDeselect} className="cursor-pointer text-button_color" size={24} />
            <FaPlusSquare onClick={handleSelect} className="cursor-pointer text-button_color" size={24} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;