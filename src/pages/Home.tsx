import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router";
import { useEffect } from "react";
import {
  actGetCategories,
  cleanUpCategoriesRecords,
} from "@store/categories/categoriesSlice";

const MoviesList = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const promise = dispatch(actGetCategories());

    return () => {
      dispatch(cleanUpCategoriesRecords());
      promise.abort();
    };
  }, [dispatch]);
  const { records } = useAppSelector((state) => state.categories);

  // useEffect(() => {
  //   getMovies();
  // }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const upcomingMoviesResponsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const images = [
    {
      image:
        "https://www.mavin-wear.com/cdn/shop/files/21_67089214-8049-4efc-84f5-d954e35cace0.jpg?v=1763497518&width=2160",
    },
    {
      image:
        "https://www.mavin-wear.com/cdn/shop/files/88.webp?v=1763294026&width=960",
    },
    {
      image:
        "https://www.nextdirect.com/cms/resource/blob/998114/c087b788cdabef39d18a6bb72c8bf4b1/date-hero-mens-mb-data.jpg",
    },
    {
      image:
        "https://xcdn.next.co.uk/common/items/default/default/itemimages/3_4Ratio/product/lge/F09678s.jpg?im=Resize,width=750",
    },
  ];

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "2rem", marginBottom:"8rem" }}>
        <Carousel
          autoPlay
          responsive={upcomingMoviesResponsive}
          infinite={true}
        >
          {images.map((images) => (
            <CardMedia
              component="img"
              sx={{ height: 500 }}
              image={images.image}
              alt={"image.title"}
              style={{
                margin: "0rem auto",
                borderRadius: "8px",
                maxWidth: "100%",
                objectFit: "cover",
                marginBottom: "4rem",
              }}
            />
          ))}
        </Carousel>

        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ mt: 5, mb: 3 }}
          gutterBottom
        >
          Explore Categories
        </Typography>

        <Carousel autoPlay responsive={responsive} infinite={true} >
          {records.map((record) => (
            <Link
              to={`/categories/products/${record.prefix}`}
              key={record.id}
              style={{ textDecoration: "none" }}
            >
              <Card key={record.id} sx={{ margin: "1rem" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 300 }}
                  image={record.img}
                  alt={record.title}
                />
                <CardContent>
                  <Typography
                    noWrap
                    variant="h6"
                    align="center"
                    fontWeight="bold"
                    component="div"
                  >
                    {record.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Carousel>
        {/* <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Link to={"/movies"}>
            <Button variant="outlined">view all</Button>
          </Link>
        </div> */}

        {/* <Typography variant="h4" gutterBottom>
          Featured Films
        </Typography>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
          {records.map((movie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ marginTop: "1rem" }}>
                <CardMedia
                  component="img"
                  sx={{ height: 300 }}
                  image={movie.img}
                />

                <CardContent>
                  <Typography variant="h6" component="div">
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Link to={"/featured"}>
            <Button variant="contained">view all</Button>
          </Link>
        </div> */}
      </Container>
    </>
  );
};

export default MoviesList;
