import { useEffect, useState } from "react";
import axios from "axios";

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // Ensure products is declared here

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data); // Update state with the fetched products
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map(
          (
            product // Use products from state here
          ) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ccc",
                padding: "16px",
                margin: "16px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
              <h2 style={{ fontSize: "16px" }}>{product.title}</h2>
              <p>${product.price}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
