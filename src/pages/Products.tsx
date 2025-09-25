import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import Loading from "@components/feedback/Loading/Loading";
import { GridList } from "@components/common";
const Products = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
