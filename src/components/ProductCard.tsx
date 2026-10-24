function ProductCard({
  product,
}: {
  product: {
    id: number;
    title: string;
    price: number;
    rating: number;
    thumbnail: string;
  };
}) {
  return (
    <div className="bg-white border rounded p-4 flex flex-col gap-2 hover:shadow-lg">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain"
      />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-green-800 font-bold">${product.price}</p>
      <p className="text-gray-600">⭐ {product.rating}</p>
    </div>
  );
}

export default ProductCard;
