import FaqItem from "../FaqItem";

import "./index.css";

const Faqs = (props) => {
  const { faqsList } = props;

  return (
    <div className="faq-container">
      <div className="faqs-container">
        <p className="Title-text">FAQs</p>
        <ul className="faqs-list">
          {faqsList.map((eachFaq) => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faqs;
