import useCategories from "@hooks/useCategories";
import { GridList, Heading } from "@components/common";
import { Container } from "react-bootstrap";
import { Category } from "@components/eCommerce";
import Loading from "@components/feedback/Loading/Loading";
import type { TCategory } from "@customTypes/category";

const Categories = () => {
  const { records, loading, error } = useCategories();

  return (
    <Container>
      <Heading title="Categories" />
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
