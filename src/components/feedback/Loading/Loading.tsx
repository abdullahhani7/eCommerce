import CategorySkeleton from "../skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../skeletons/CartSkeleton/CartSkeleton";
import TableSkeleton from "../skeletons/TableSkeleton/TableSkeleton";

import LottieHandler from "../LottieHandler/LottieHandler";
import type { TLoading } from "@customTypes/shared";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  table: TableSkeleton,
};

type TLoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
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
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }

  return <div>{children}</div>;
};

export default Loading;
