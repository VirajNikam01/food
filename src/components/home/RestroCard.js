import { CARD_IMG_URL } from "../../utility/constants";

const RestroCard = ({info}) => {
    const {name, cloudinaryImageId, sla, avgRating, cuisines, areaName, isOpen, feeDetails} = info


  return (
    <div className="mt-5 relative w-[250px] h-[320px]  shadow-lg px-2 py-1 rounded-lg cursor-pointer transition-all duration-1000 hover:scale-105">
      <img
        src={CARD_IMG_URL + cloudinaryImageId}
        alt="cardImage"
        className="h-1/2 w-full rounded-lg"
      />
      <div className="flex justify-between px-2 py-5 overflow-hidden">
        <div>
          <p>{name}</p>
          <p className="text-base text-slate-600">{cuisines[0,1]}</p>
          <p className={avgRating>=4? "bg-green-400 w-fit px-3 py-1 rounded-md text-white mt-2": "bg-red-500 w-fit px-3 py-1 rounded-md text-white mt-2"}>{avgRating}</p>
        </div>
        <div className="text-right">
            <p>{sla.deliveryTime} min</p>
            <p className="text-base text-slate-700">{areaName}</p>
            <p className="my-1"><b>{feeDetails.totalFee/10} rs</b></p>
            <p className="my-1">{isOpen?<b className="text-green-700">Open</b> : <b className="text-red-700">Close</b>}</p>
        </div>
      </div>
    </div>
  );
};


export default RestroCard;
