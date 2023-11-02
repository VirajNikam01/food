const InfoList = ({ data }) => {
  console.log(data);
  return (
    <div className="flex flex-wrap justify-between">
      {data.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between my-10 w-full"
        >
          <div className="lg:w-9/12">
            {item?.card?.info?.veg ? (
              <div>
                <b className="border-2 border-green-500 text-base">🟢</b>
              </div>
            ) : (
              <div>
                <b className="border-2 border-red-500 text-base">🔴</b>
              </div>
            )}

            <h1 className="my-2">
              <b>{item.card.info.name}</b>
            </h1>
            <p className="text-base text-slate-400">
              {item.card.info.description}
            </p>
          </div>
          <div>
            <img
              src={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                item.card.info.imageId
              }
              className="rounded-lg "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoList;
