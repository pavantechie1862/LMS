import { Chrono } from "react-chrono";

import LectureItemDetails from "../LectureItemDetails";

//importing styles
import {
  LecturesContainer,
  ActualContainer,
  HeaderContainer,
  Heading,
  CourseTitle,
  CourseDescription,
} from "./styledComponents";

const TimelineView = (props) => {
  const { timelineItemsList } = props;

  //Tagname itself talks about tag
  return (
    <LecturesContainer>
      <ActualContainer>
        <HeaderContainer>
          <Heading>
            Course:
            <CourseTitle>Introduction to Computer Science</CourseTitle>
          </Heading>
        </HeaderContainer>
        <CourseDescription>
          in this course the student will go through comprehensive understanding
          of the fundamental concepts of computer science. The course covers a
          broad range of topics, including computer hardware, software,
          algorithms, data structures, programming languages, and computer
          networks.
          <br /> Overall, an introduction to computer science course provides
          students with a solid foundation for further study in the field, as
          well as valuable skills that can be applied in a wide range of
          careers.
        </CourseDescription>

        <Chrono
          theme={{
            primary: "#2b237c", //color of date.
            secondary: "white", //background colour
            titleColorActive: "#2b237c", //colour when a time line is active
            titleColor: "grey", //color when timeline is not active
          }}
          items={timelineItemsList}
          mode="VERTICAL"
        >
          {timelineItemsList.map((eachItem) => (
            <LectureItemDetails key={eachItem.id} lectureDetails={eachItem} />
          ))}
        </Chrono>
      </ActualContainer>
    </LecturesContainer>
  );
};

export default TimelineView;
