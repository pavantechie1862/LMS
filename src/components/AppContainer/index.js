import { Component } from "react";
//import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import SubjectItem from "../SubjectItem";
import BranchTabItem from "../BranchTabItem";
import "./index.css";

const branchTabsList = [
  { tabId: "CSE", displayText: "Computers" },
  { tabId: "ECE", displayText: "Electronics" },
  { tabId: "CIVIL", displayText: "Civil Engg" },
];

const coursesList = [
  {
    courseId: uuidv4(),
    category: "CSE",
    imageURL: "http://surl.li/gjdip",
    title: "Introduction to CS",
    courseDuration: 40,

    description:
      "Computer Science studies computers and computational systems, including their theory and practice. It involves designing, analyzing algorithms, software, hardware, and explores AI, networking, databases, and more. Computer Science revolutionizes fields and is a high demand career.",
    haveAccess: true,
  },
  {
    courseId: uuidv4(),
    category: "CSE",
    imageURL: "http://surl.li/gjclu",
    title: "React JS",
    courseDuration: 40,

    haveAccess: false,
    description:
      "React is a JS library for building UIs. It uses a declarative approach, has a virtual DOM, and can build web, mobile, and desktop apps. Its popular and has a vast ecosystem, with regular updates and React is continually evolving as it is an open sourse framework and many more functionalities",
  },

  {
    courseId: uuidv4(),
    category: "CSE",
    imageURL: "http://surl.li/gjdjq",
    title: "Angular",
    courseDuration: 40,
    haveAccess: false,

    description:
      "Angular is an open-source web app framework by Google for building dynamic apps. It uses TypeScript, HTML, and directives, follows MVC architecture, and offers two-way data binding, dependency injection, and a powerful router. Angular has a modular design and regular updates.",
  },

  {
    courseId: uuidv4(),
    category: "CSE",
    imageURL: "http://surl.li/gjdkc",
    title: "React Native",
    courseDuration: 40,

    haveAccess: false,
    description:
      "React Native is an open-source framework for building  mobile apps using JavaScript and React. Its cross-platform, uses a declarative programming model, provides access to native features and APIs,widely used by developers and companies. It has a large community and regular updates.",
  },

  {
    courseId: uuidv4(),
    category: "CSE",
    imageURL: "http://surl.li/gjdlm",
    title: "JavaScript",
    courseDuration: 78,

    haveAccess: false,
    description:
      "JavaScript is a high-level, interpreted programming language used for creating dynamic and interactive web applications. It is supported by all major web browsers and is widely used for front-end and back-end web development. and many more can be done with JS also called as language of internet",
  },

  {
    courseId: uuidv4(),
    category: "CSE",
    imageURL: "http://surl.li/gjclu",
    title: "Random Course",
    courseDuration: 40,

    haveAccess: false,
    description:
      "React is a JS library for building UIs. It uses a declarative approach, has a virtual DOM, and can build web, mobile, and desktop apps. Its popular and has a vast ecosystem, with regular updates and React is continually evolving as it is an open sourse framework and many more functionalities",
  },

  {
    courseId: uuidv4(),
    category: "ECE",
    imageURL:
      "https://www.eletimes.com/wp-content/uploads/2022/11/electronics-956x420.jpg",
    title: "Course-1",
    courseDuration: 40,

    haveAccess: false,
    description:
      "Digital electronics are a fundamental aspect of electronic and communication engineering (ECE). In ECE, a signal is a physical quantity that represents information, such as a voltage, current, or electromagnetic wave. A system, on the other hand, is a device or process that modifies or processes a signal.",
  },

  {
    courseId: uuidv4(),
    category: "ECE",
    imageURL:
      "https://esgrounding.com/hubfs/Imported_Blog_Media/image_750x500_5f2c4c22e6916-1.jpg",
    title: "Course-2",
    courseDuration: 78,

    haveAccess: false,
    description:
      "Signals and systems are a fundamental aspect of electronic and communication engineering (ECE). In ECE, a signal is a physical quantity that represents information, such as a voltage, current, or electromagnetic wave. A system, on the other hand, is a device or process that modifies or processes a signal.",
  },

  {
    courseId: uuidv4(),
    category: "ECE",
    imageURL:
      "https://www.eletimes.com/wp-content/uploads/2022/11/electronics-956x420.jpg",
    title: "Course-3",
    courseDuration: 40,

    haveAccess: false,
    description:
      "Analog Electronics are a fundamental aspect of electronic and communication engineering (ECE). In ECE, a signal is a physical quantity that represents information, such as a voltage, current, or electromagnetic wave. A system, on the other hand, is a device or process that modifies or processes a signal.",
  },

  {
    courseId: uuidv4(),
    category: "CIVIL",
    imageURL:
      "https://www.letsbuild.com/wp-content/uploads/gb/Depositphotos_6301594_s-2019.jpg",
    title: "Construction",
    courseDuration: 40,

    haveAccess: false,
    description:
      "Surveying is an important subject in civil engineering that involves measuring and mapping the physical features of the earth's surface. It is a crucial part of any construction project as accurate surveying ensures that structures are built in the right place, at the right level, and to the correct dimensions....",
  },

  {
    courseId: uuidv4(),
    category: "CIVIL",
    imageURL:
      "https://www.letsbuild.com/wp-content/uploads/2019/05/Depositphotos_89120612_s-2019.jpg",
    title: "Geotechnical",
    courseDuration: 78,

    haveAccess: false,
    description:
      "Geotechnical engineering is a branch of civil engineering that focuses on the study of soil, rock, and groundwater and their interactions with structures such as buildings, bridges, and roads. Geotechnical engineers analyze the physical and mechanical properties of these materials to design and construct safe and .....",
  },

  {
    courseId: uuidv4(),
    category: "CIVIL",
    imageURL:
      "https://www.letsbuild.com/wp-content/uploads/gb/Depositphotos_2473581_s-2019.jpg",
    title: "Surveying",
    courseDuration: 40,

    haveAccess: false,
    description:
      "Structural engineering is a branch of civil engineering that deals with the design, construction, and maintenance of structures such as buildings, bridges, dams, and towers. Structural engineers apply their knowledge of physics, mathematics, and materials science to ensure that structures are safe, stable, and durable.",
  },
];

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class AppContainer extends Component {
  state = {
    activeTabId: branchTabsList[0].tabId,
    apiStatus: apiStatusConstants.initial,
    courseList: coursesList,
  };

  componentDidMount() {
    this.getCourses();
  }

  getCourses = () => {
    //make the function as async function
    /*
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    const jwtToken = Cookies.get("jwt_token");
    const { activeOptionId } = this.state;
    const apiUrl = `https://domain/courses?category=${activeOptionId}`;
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    console.log("isjdsfsf");
    if (response.ok) {
      const fetchedData = await response.json();
      const formattedData = fetchedData.map((course) => ({
        courseId: course.course_id,
        category: course.category,
        courseDuration: course.course_duration,
        imageURL: course.image_url,
        courseStarted: course.course_started,
        title: course.title,
        description: course.description,
      }));

      this.setState({
        courseList: formattedData,
        apiStatus: apiStatusConstants.success,
      });
    } else {
      console.log("in else case");
      this.setState({
        apiStatus: apiStatusConstants.failure,
      });
    }*/

    //uncomment below line to view a view when the status of api is in progress
    //this.setState({ apiStatus: apiStatusConstants.inProgress });
    //uncomment this section  to see the failue view
    //this.setState({ apiStatus: apiStatusConstants.failure });

    const { activeTabId } = this.state;
    const filteredCourses = coursesList.filter(
      (each) => each.category === activeTabId
    );

    this.setState({
      apiStatus: apiStatusConstants.success,
      courseList: filteredCourses,
    });
  };

  renderSuccessView = () => {
    const { courseList } = this.state;

    return (
      <ul className="courses-list-container">
        {courseList.map((courseDetails) => (
          <SubjectItem
            key={courseDetails.courseId}
            courseDetails={courseDetails}
          />
        ))}
      </ul>
    );
  };

  renderLoadingView = () => (
    <div className="courses-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  );

  renderFailureView = () => (
    <div className="courses-error-view-container">
      <img
        src="https://qeiicentre.london/wp-content/uploads/2020/05/SSID-and-wireless-picture.png"
        alt="all-courses-error"
        className="courses-failure-img"
      />
      <h1 className="product-failure-heading-text">
        Oops! Something Went Wrong
      </h1>
      <p className="courses-failure-description">
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  );

  renderView = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  clickTabItem = (tabValue) =>
    this.setState({ activeTabId: tabValue }, this.getCourses);

  render() {
    const { activeTabId } = this.state;

    return (
      <div className="app-container">
        <Header />
        <h1 className="title">
          Empower Your Mind: Learn Anytime, Anywhere with Our Platform
        </h1>
        <p className="description">
          Whether you're a student, a professional, or simply someone who loves
          to learn, our platform is the perfect place for you to explore new
          subjects, acquire new skills, and connect with a global community of
          learners. So, what are you waiting for? Pick up a course and dive into
          the world of learning today!.You never know where it might take you!
        </p>

        <ul className="tabs-container">
          {branchTabsList.map((tabDetails) => (
            <BranchTabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              clickTabItem={this.clickTabItem}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        {this.renderView()}
      </div>
    );
  }
}

export default AppContainer;
