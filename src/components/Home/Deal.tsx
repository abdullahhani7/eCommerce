import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds?: number;
} | null;

const getRemainingTime = (dealsEndDate: string | Date): Remaining => {
  const endTime = new Date(dealsEndDate).getTime();
  const now = Date.now();

  let timeLeft = endTime - now;
  if (timeLeft <= 0) return null;

  const days = Math.floor(timeLeft / (24 * 60 * 60 * 1000));
  timeLeft %= 24 * 60 * 60 * 1000;

  const hours = Math.floor(timeLeft / (60 * 60 * 1000));
  timeLeft %= 60 * 60 * 1000;

  const minutes = Math.floor(timeLeft / (60 * 1000));
  timeLeft %= 60 * 1000;

  const seconds = Math.floor(timeLeft / 1000);
  const milliseconds = timeLeft % 1000;

  return { days, hours, minutes, seconds, milliseconds };
};

type DealProps = {
  deal: string | Date;
  shop_id?: string;
};

const Deal: React.FC<DealProps> = ({ deal, shop_id }) => {
  const [timeLeft, setTimeLeft] = useState<Remaining>(() =>
    getRemainingTime(deal)
  );

  useEffect(() => {
    // update immediately then every second
    setTimeLeft(getRemainingTime(deal));
    const interval = setInterval(() => {
      setTimeLeft(getRemainingTime(deal));
    }, 1000);

    return () => clearInterval(interval);
  }, [deal]);

  const safe = (v: number | undefined | null) => (v == null ? 0 : v);

  return (
    <div className="deals_wrapper">
      <h3 className="text-5xl text-[#484848] font-normal capitalize mb-5">
        deals of the month
      </h3>
      <p className="text-base tex-[#8a8a8a] font-poppins font-normal mb-10 max-w-[444px] w-full h-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        deserunt adipisci consectetur perspiciatis facilis veritatis, pariatur
        exercitationem quo amet sunt.
      </p>
      {shop_id ? (
        <Link
          to={`/products/${shop_id}`}
          className="text-base text-white font-poppins font-normal capitalize px-8 py-2.5 bg-black rounded-lg"
        >
          buy now
        </Link>
      ) : (
        <button className="text-base text-white font-poppins font-normal capitalize px-8 py-2.5 bg-black rounded-lg">
          buy now
        </button>
      )}

      <div className="mt-10">
        <h5 className="text-[27px] text-[#484848] font-poppins font-medium capitalize mb-4">
          hurry, before it's too late!
        </h5>
        <div className="flex items-center gap-8 cursor-pointer">
          <div className="days flex flex-col gap-2.5 items-center justify-center">
            <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">
              {safe(timeLeft?.days)}
            </h5>
            <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">
              days
            </p>
          </div>

          <div className="hr flex flex-col gap-2.5 items-center justify-center">
            <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">
              {safe(timeLeft?.hours)}
            </h5>
            <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">
              hr
            </p>
          </div>

          <div className="mins flex flex-col gap-2.5 items-center justify-center">
            <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">
              {safe(timeLeft?.minutes)}
            </h5>
            <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">
              mins
            </p>
          </div>

          <div className="secs flex flex-col gap-2.5 items-center justify-center">
            <h5 className="w-[76px] h-[76px] rounded-sm bg-white shadow text-[#484848] text-3xl font-normal flex items-center justify-center">
              {safe(timeLeft?.seconds)}
            </h5>
            <p className="text-[22px] text-[#484848] font-poppins font-normal capitalize">
              sec
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deal;
