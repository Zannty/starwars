import React from "react";
import "./ItemDetails.css";

import LoadIcon from "../LoadIcon/LoadIcon";
import ErrorButton from "../ErrorButton/ErrorButton";

export const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="item-group">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

class ItemDetails extends React.Component {
  state = {
    item: null,
    itemImage: null
  };
  componentDidMount() {
    this.updateItem();
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.itemId !== prevProps.itemId ||
      this.props.getData !== prevProps.getData ||
      this.props.getImageUrl !== prevProps.getImageUrl
    ) {
      this.setState({ item: "load" });
      this.updateItem();
    }
  }

  updateItem = () => {
    const { itemId, getData, getImage } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({ item, itemImage: getImage(item) });
    });
  };

  render() {
    const { item, itemImage } = this.state;
    if (!item) {
      return <span>select from the list to view details</span>;
    }
    const content =
      item === "load" ? (
        <LoadIcon />
      ) : (
        <React.Fragment>
          <img className="person-image" src={itemImage} alt="Error img" />

          <div>
            <h4>{item.name}</h4>
            <ul className="list-group list-group-flush">
              {React.Children.map(this.props.children, child => {
                return React.cloneElement(child, { item });
              })}
            </ul>
          </div>
        </React.Fragment>
      );
    return (
      <div className="person-details card">
        {content}
        <ErrorButton />
      </div>
    );
  }
}

export default ItemDetails;
