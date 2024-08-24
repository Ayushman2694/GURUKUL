/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ShowMoreShowLess({ descriptionDetail = "", charNo }) {
  const [readmore, setReadmore] = useState(false);
  const description = `${descriptionDetail.substring(0, `${charNo}`)}`;
  function readMoreHandler() {
    setReadmore(!readmore);
  }

  return (
    <div className="">
      {descriptionDetail.length < charNo ? (
        descriptionDetail
      ) : (
        <div>
          {readmore ? descriptionDetail : description}
          <span className="cursor-pointer font-bold " onClick={readMoreHandler}>
            {readmore ? " ...Show Less" : " ...Read More"}
          </span>
        </div>
      )}
    </div>
  );
}
