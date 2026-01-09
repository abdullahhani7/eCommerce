import Banner from "@components/Home/Banner";
import Blinder from "@components/Home/Blinder";
import Brand from "@components/Home/Brand";
import FollowUs from "@components/Home/FollowUs";
// import Deal from "@components/Home/Deal";
import NewArrival from "@components/Home/NewArrival";
import Newsletter from "@components/Home/Newsletter";
import Testimonial from "@components/Home/Testimonial";

const Home = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <Brand />
      </div>

      {/* <div>
        <NewArrival />
      </div> */}
      <div>
        <Blinder />
      </div>
      <div>
        <FollowUs />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Newsletter />
      </div>
    </div>
  );
};

export default Home;
