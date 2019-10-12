import React from "react";
import Anchor from "../_Styled/Anchor";
import Badge from "../_Styled/Badge";

const Tech = ({ img, title, url }) => {
  return (
    <Badge className="m-2 p-3">
      <Anchor target="_blank" rel="noopener noreferrer" href={url}>
        <img className="mb-3 p-1" src={img} width={75} />
      </Anchor>
      <br />
      <h6>{title}</h6>
    </Badge>
  );
};

export default Tech;
