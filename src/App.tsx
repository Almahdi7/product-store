import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import Pagination from "./components/Pagination";

const LIMIT = 8;

function App() {
  const [products, setProducts] = useState<
    { id: number; title: string; price: number; rating: number; thumbnail: string }[]
  >([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const totalPages = Math.ceil(total / LIMIT);

  function handlePageChange(newPage: number) {
    setLoading(true);
    setError("");
    setPage(newPage);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    const skip = (page - 1) * LIMIT;

    fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Something went wrong");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data.products);
        setTotal(data.total);
      })
      .catch(() => {
        setProducts([]);
        setError("Failed to load products. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main id="products" className="flex-1 p-4 bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Our Products</h2>

        {loading && <p className="text-center">Loading products...</p>}

        {error && <p className="text-center text-red-600">{error}</p>}

        {!loading && !error && products.length === 0 && (
          <p className="text-center">No products found.</p>
        )}

        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {!loading && !error && totalPages > 0 && (
          <Pagination
            page={page}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
