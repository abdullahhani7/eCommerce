import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";

import type { TLoading } from "@customTypes/shared";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
};

type TLoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
  type: "cart" | "category" | "product";
};

const Loading = ({
  loading,
  error,
  children,
  type = "category",
}: TLoadingProps) => {
  const Component = skeletonsTypes[type];

  if (loading === "pending") {
    return <Component />;
  }
  if (loading === "failed") {
    return <p>{error}</p>;
  }

  return <div>{children}</div>;
};

export default Loading;
