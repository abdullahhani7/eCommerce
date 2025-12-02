 
 

const NewArrival = ( ) => {
  const newArrivalsCategories = [
    {
      id: 1,
      name: "men's fashion",
      category: "mens_fashion",
    },
    {
      id: 2,
      name: "women's fashion",
      category: "womens_fashion",
    },
    {
      id: 3,
      name: "women accessories",
      category: "women_accessories",
    },
    {
      id: 4,
      name: "men accessories",
      category: "men_accessories",
    },
    {
      id: 4,
      name: "discount deals",
      category: "discount_deals",
    },
  ];

  return (
    <div className="w-full bg-white pt-[150px] pb-[150px]">
      <div className="lg:container mx-auto">
        {/* header title  */}
        <div className="text-center mb-10">
          <h3 className="text-3xl text-[#484848] font-normal capitalize mb-5">
            new arrivals
          </h3>
          <p className="text-base text-[#8a8a8a] font-poppins font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            necessitatibus.
          </p>
        </div>

        {/* categories  */}
        <div className="flex items-center justify-center gap-10 mb-10">
          {newArrivalsCategories.map((item, index) => (
            <button
              className={`text-base font-poppins font-normal capitalize cursor-pointer ${
                item.category
                  ? "px-6 py-2.5 bg-black rounded-sm text-white"
                  : "text-[#8a8a8a] "
              }`}
              key={index}
              onClick={() => {
                // setCategory(item?.category)
              }}
            >
              {item.name}
            </button>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default NewArrival;
