import { useContext } from "react";
import { Link } from "react-router-dom";
import useRestronents from "../../utility/useRestronents";
import RestroCard from "./RestroCard";
import UserContext from "../../utility/UserContext";

const CardBody = () => {
  const restronentList = useRestronents();
  const {setNameVar, userName} = useContext(UserContext)

  if (restronentList === null) {
    return <h1>Loading</h1>;
  }


  const { restaurants } =
    restronentList?.cards[2]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="lg:mx-10 lg:mt-20">
      <input type="text"
      className="rounded-md px-3 py-1 outline-none border border-slate-950"
      value={userName}
      onChange={(e)=>(setNameVar(e.target.value))}
      />
      <h1 className="ml-10 text-xl font-bold font-sans">
        Top restaurant chains in Pune
      </h1>
      <div className=" flex flex-wrap items-center justify-center gap-5 ">
        {restaurants.map((restronent, i) => (
          <Link to={"restronent/" + restronent.info.id} key={i}>
            <RestroCard info={restronent?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CardBody;
