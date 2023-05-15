import styled from "styled-components/macro";

export const CourseCardContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
`;

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const VideoPlayerContainer = styled.div`
  margin-top: 10px;
`;

export const CourseTitle = styled.p`
  color: #2b237c;
  font-size: 18px;
  font-family: "Roboto";
  line-height: 32px;
  margin: 0px;
  color: @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 32px;
  }
`;

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Duration = styled.p`
  color: #171f46;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.2;
  margin-left: 4px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ProjectDescription = styled.p`
  color: #1e293b;
  font-size: 16px;
  line-height: 1.5;
  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const VisitLink = styled.a`
  text-align: center;
  color: #171f46;
  font-family: "Roboto";
  font-size: 14px;
  line-height: 1.2;
  text-decoration: none;
  margin: 5px 0px;
  border: 1px solid #171f46;
  padding: 5px 10px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;
