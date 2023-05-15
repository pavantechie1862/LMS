import { Component } from "react";
import { BsPlusCircle } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";

import "./index.css";

class FaqItem extends Component {
  state = {
    isActive: false,
  };

  renderAnswer = () => {
    const { faqDetails } = this.props;
    const { answerText } = faqDetails;
    const { isActive } = this.state;

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-line" />
          <p className="answer">{answerText}</p>
        </div>
      );
    }
    return null;
  };

  onToggleIsActive = () => {
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));
  };

  renderActiveImage = () => {
    const { isActive } = this.state;

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        {!isActive ? (
          <BsPlusCircle className="plus-minus-icon" />
        ) : (
          <BiMinusCircle className="plus-minus-icon" />
        )}
      </button>
    );
  };

  render() {
    const { faqDetails } = this.props;
    const { questionText } = faqDetails;

    return (
      //returns each frequenty asked question.
      <li className="faq-item">
        <div className="question-container">
          <p className="question">{questionText}</p>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    );
  }
}

export default FaqItem;
