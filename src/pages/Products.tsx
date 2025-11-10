import useProducts from "@hooks/useProducts";
import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import Loading from "@components/feedback/Loading/Loading";
import { GridList, Heading } from "@components/common";
import type { TProduct } from "@customTypes/product";

const Products = () => {
  const { loading, error, productsFullInfo, productPrefix } = useProducts();

  return (
    <Container>
      <Heading title={` ${productPrefix?.toUpperCase()} Products`}></Heading>
      <Loading loading={loading} error={error} type="product">
        <GridList<TProduct>
          emptyMessage="There are no products"
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
