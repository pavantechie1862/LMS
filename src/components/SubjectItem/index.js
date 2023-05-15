import { Link } from "react-router-dom";
import { BiTime } from "react-icons/bi";
import ReactPopUp from "../ReactPopup";

import "./index.css";

const SubjectItem = (props) => {
  const { courseDetails } = props;
  const {
    courseId,
    imageURL,
    description,
    title,
    courseDuration,

    haveAccess,
  } = courseDetails;
  return (
    <>
      <li className="subject-item-container">
        <img
          className="subject-item-image"
          src={imageURL}
          alt={`subject-item ${courseId}`}
        />
        <div className="subject-item-details-container">
          <div className="title-duration">
            <h1 className="subject-item-title">{title}</h1>
            <div className="duration-container">
              <BiTime className="duration-icon" />
              <span className="course-duration-text">{courseDuration}+Hrs</span>
            </div>
          </div>
          <p className="subject-item-description">{description}</p>
          {haveAccess && (
            <button className="start-resume-btn">
              <Link to={`/courses/${courseId}`} className="course-link">
                {haveAccess ? "Resume" : "Start"}
              </Link>
            </button>
          )}

          {!haveAccess && <ReactPopUp />}
        </div>
      </li>
    </>
  );
};

export default SubjectItem;
