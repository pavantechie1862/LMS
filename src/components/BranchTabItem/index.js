import "./index.css";

const BranchTabItem = (props) => {
  const { tabDetails, clickTabItem, isActive } = props;

  const changeActive = () => clickTabItem(tabDetails.tabId);

  const { displayText } = tabDetails;

  const stylingForActive = isActive ? "active-tab-btn" : null;

  return (
    //return each tab item( each tab = each course)
    <li className={` tab-item-container ${stylingForActive}`}>
      <button type="button" className="tab-btn" onClick={changeActive}>
        {displayText}
      </button>
    </li>
  );
};

export default BranchTabItem;
