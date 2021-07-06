import React from "react";
import { selectCollection } from "../../redux/shop/shop-selector";
import "./collection-component.scss";
import { connect } from "react-redux";
import CollectionItems from "../collection-items/collection-items.component";

const Collection = ({ match, collections }) => {
  const { title, items } = collections;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((val) => {
          return <CollectionItems key={val.id} item={val}></CollectionItems>;
        })}
      </div>
    </div>
  );
};

const fun1 = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.categoryId)(state),
});

export default connect(fun1)(Collection);
