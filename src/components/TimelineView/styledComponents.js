import styled from "styled-components/macro";

export const LecturesContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 992px) {
    width: 100%;
  }
`;

export const ActualContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1110px;
  text-align: center;
  height: 88vh;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;

export const Heading = styled.h1`
  text-align: center;
  color: #171f46;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 18px;
  margin: 0px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const CourseTitle = styled.span`
  color: #2b237c;
  font-family: "Roboto";
  font-weight: 500;
  font-size: 24px;
  margin: 0px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;

export const CourseDescription = styled.p`
  color: #1e293b;
  font-size: 16px;
  line-height: 32px;

  margin-top: 0px;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
