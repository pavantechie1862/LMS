import Faqs from "../Faqs";
import Header from "../Header";
import { v4 as uuidv4 } from "uuid";

const faqsList = [
  {
    id: uuidv4(),
    questionText: "How will my doubts be cleared? What is the mechanism?",
    answerText:
      "You can raise your doubt by clicking on doubt? (Button) and get clarified,if still you doubt doesnot resolved please feel free to reach us by dropping a mail",
  },
  {
    id: uuidv4(),
    questionText:
      "Where can I learn competitive Programming or Data Structures & Algorithms(DSA)?",
    answerText:
      "Once you finish the courses i.e, Understanding Basic Programming Concepts and  Learning a Programming Language  prior to Compitative Programming & Algorithms, then DSA will be unlocked",
  },

  {
    id: uuidv4(),
    questionText: "What will be the duration of course ?",
    answerText: "The duration of the course is 90days",
  },
  {
    id: uuidv4(),
    questionText: "Can i pause my course during exams time",
    answerText:
      "Yes, you can pause the course upto 15 days by dropping a mail to us",
  },
  {
    id: uuidv4(),
    questionText: "Can a beginner understand the course",
    answerText:
      "Yes, the course structure is designed in that way.Everybody who are willing to be an expert can learn this course.24/7 tech support is available.if you have any queries please reach out to us",
  },
];

const FaqRoute = () => (
  <>
    <Header />
    <Faqs faqsList={faqsList} />
  </>
);

export default FaqRoute;
