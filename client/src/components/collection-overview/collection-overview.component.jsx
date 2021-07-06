import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import PreviewCollection from "../preview-collection/preview-collection.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop-selector";
import "./collection-overview.component.scss";

const CollectionOverview = ({ collection }) => {
  return (
    <div className="collections-overview">
      {collection.map((val) => {
        return (
          <PreviewCollection key={val.id} title={val.title} items={val.items} />
        );
      })}
    </div>
  );
};

const fun1 = createStructuredSelector({
  collection: selectCollectionsForPreview,
});

export default connect(fun1)(CollectionOverview);
