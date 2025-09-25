import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import { GridList } from "@components/common";
import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import Loading from "@components/feedback/Loading/Loading";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
