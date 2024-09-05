import { ProductCard } from "../../../components/Elements/ProductCard";

export const FeaturedProducts = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};
