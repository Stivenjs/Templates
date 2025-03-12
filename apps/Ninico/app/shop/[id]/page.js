import products from "@/data/products";
import ShopSingleDynamicV1 from "@/app/shop/[id]/ShopSingleDynamicV1"; 


export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(), 
  }));
}

const ShopPage = ({ params }) => {
  const product =
    products.find((item) => item.id.toString() === params.id) || null;

  if (!product) return <h1>Producto no encontrado</h1>; 

  return <ShopSingleDynamicV1 product={product} />; 
};

export default ShopPage;
