import type { TCategory } from "@customTypes/category";
import { Row, Col } from "react-bootstrap";

type TGridListProps = {
  records: TCategory[];
  renderItem: (record: TCategory) => React.ReactNode;
};

const GridList = ({ records, renderItem }: TGridListProps) => {
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      : "there are no categories to show";
  return <Row>{categoriesList}</Row>;
};

export default GridList;
