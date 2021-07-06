import React from "react";
import Collection from "../../components/collection/collection-component";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop-selector";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { FetchCollectionStart } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import { IsCollectionLoaded } from "../../redux/shop/shop-selector";

const S1 = WithSpinner(CollectionOverview);
const S2 = WithSpinner(Collection);

class Shop extends React.Component {
  componentDidMount() {
    const { FetchCollectionStart } = this.props;
    FetchCollectionStart();
  }

  render() {
    const { match, isFetching, IsCollectionLoaded } = this.props;
    console.log(isFetching);
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <S1 isLoading={isFetching} {...props} />}
        ></Route>

        <Route
          path={`${match.path}/:categoryId`}
          render={(props) => <S2 isLoading={!IsCollectionLoaded} {...props} />}
        ></Route>
      </div>
    );
  }
}

const fun1 = createStructuredSelector({
  isFetching: selectIsCollectionFetching,
  IsCollectionLoaded: IsCollectionLoaded,
});

const fun = (dispatch) => ({
  FetchCollectionStart: () => dispatch(FetchCollectionStart()),
});

export default connect(fun1, fun)(Shop);
