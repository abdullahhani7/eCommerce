import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetCategories,
  cleanUpCategoriesRecords,
} from "@store/categories/categoriesSlice";
import { useEffect } from "react";
import { GridList, Heading } from "@components/common";
import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import Loading from "@components/feedback/Loading/Loading";
import type { TCategory } from "@customTypes/category";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());

    return () => {
      dispatch(cleanUpCategoriesRecords());
    };
  }, [dispatch]);

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading loading={loading} error={error}>
        <GridList<TCategory>
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
