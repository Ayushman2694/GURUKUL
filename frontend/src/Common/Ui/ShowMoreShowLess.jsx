/* eslint-disable react/prop-types */

export default function ShowMoreShowLess({ descriptionDetail = "", charNo }) {
  const description = `${descriptionDetail.substring(0, `${charNo}`)}`;
  // function readMoreHandler() {
  //   setReadmore(!readmore);
  // }

  return (
    <div className="text-testColor1">
      {descriptionDetail.length < charNo ? (
        descriptionDetail
      ) : (
        <div>
          <div className="group ">
            <div className="flex  text-testColor1 group-hover:hidden">
              {description}...
            </div>
            <div className="hidden  text-testColor1 group-hover:block">
              {descriptionDetail}
            </div>
          </div>
          {/* {readmore ? descriptionDetail : description}
          <span className="cursor-pointer font-bold " onClick={readMoreHandler}>
            {readmore ? " ...Show Less" : " ...Read More"}
          </span> */}
        </div>
      )}
    </div>
  );
}
