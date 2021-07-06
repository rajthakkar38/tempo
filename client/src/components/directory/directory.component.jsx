import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.component.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySection } from "../../redux/directory/directory-selector";

const Directory = ({ section }) => {
  console.log(section);
  return (
    <div className="directory-menu">
      {section.map((val) => {
        return (
          <MenuItem
            key={val.id}
            head={val.title}
            imgUrl={val.imageUrl}
            size={val.size}
            linkUrl={val.linkUrl}
          ></MenuItem>
        );
      })}
    </div>
  );
};

const fun1 = createStructuredSelector({
  section: selectDirectorySection,
});

export default connect(fun1)(Directory);
