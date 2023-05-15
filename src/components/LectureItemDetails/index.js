import { BiTime } from "react-icons/bi";

import ReactPlayer from "react-player";

//styles components using react are imported below
import {
  CourseCardContainer,
  CourseTitleAndDurationContainer,
  CourseTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
  VideoPlayerContainer,
} from "./styledComponents";

const LectureItemDetails = (props) => {
  const { lectureDetails } = props;
  const { courseTitle, description, youtubeUrl, duration, playList } =
    lectureDetails;

  return (
    //returns Each course card in timeline series.
    <CourseCardContainer>
      {/* if it is a single lecture play video button will be rendered*/}
      {playList === youtubeUrl && (
        <VisitLink
          href={youtubeUrl}
          target="_blank"
          rel="noreferrer"
          className="youtube-link-button"
        >
          Play video
        </VisitLink>
      )}
      {/* if it is multiple lectures Play List button will be rendered*/}
      {playList !== youtubeUrl && (
        <VisitLink href={playList} target="_blank" rel="noreferrer">
          Play list
        </VisitLink>
      )}

      {/* React player used to play videos in browser.*/}
      <VideoPlayerContainer>
        <ReactPlayer
          width="100%"
          url={youtubeUrl}
          height="200px"
          controls
          config={{
            youtube: {
              playerVars: {
                origin: window.location.origin,
              },
            },
          }}
        />
      </VideoPlayerContainer>
      {/* container contains an overview about lecture and duration*/}
      <CourseTitleAndDurationContainer>
        <CourseTitle>{courseTitle}</CourseTitle>

        {/* wraps the icon and duration text*/}
        <DurationContainer>
          <BiTime className="duration-icon" />
          <Duration>{duration}</Duration>
        </DurationContainer>
      </CourseTitleAndDurationContainer>
      <ProjectDescription>{description}</ProjectDescription>
    </CourseCardContainer>
  );
};

export default LectureItemDetails;
