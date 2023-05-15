import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./index.css";

const ReactPopUp = () => (
  <div className="popup-container">
    <Popup
      trigger={
        <button type="button" className="start-resume-btn">
          Start
        </button>
      }
      position="bottom left"
    >
      <p className="popup-display-message">
        You don't have access to this track
      </p>
    </Popup>
  </div>
);
export default ReactPopUp;
