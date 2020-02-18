import React from "react";
import "./ItemList.css";
import PropTypes from "prop-types";

const ItemList = props => {
  const { data, selectedItemInfo, children: renderLabel } = props;
  const items = data.map(el => {
    const { id } = el;
    const label = renderLabel(el);
    return (
      <li
        className="list-group-item list-item-hov"
        key={id}
        onClick={() => selectedItemInfo(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className="item-list list-group list">{items}</ul>;
};

ItemList.defaultProps = {
  selectedItemInfo: () => {}
};

ItemList.propTypes = {
  selectedItemInfo: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
