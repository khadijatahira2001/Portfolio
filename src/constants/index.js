import main_background from "../assets/main_background.png";
import facemask from "../assets/facemask.jpg";
import helmet from "../assets/helmet.png";
import qr from "../assets/qr.jpg";
import weather from "../assets/weather.avif";
import task from "../assets/task.png";
import howmuch from "../assets/howmuch.jpeg";

export const ABOUT_TEXT = `I'm Khadija Tahira, a passionate Frontend Developer with a strong foundation in computer science, honed through my Bachelor's degree and practical experience as an intern at Arkhitech. My expertise lies in crafting visually stunning and highly responsive web applications using modern technologies like React, Tailwind CSS, and Material-UI.

During my internship, I played a key role in optimizing application performance by implementing Redux Toolkit and I have a knack for solving complex problems with innovative solutions, such as applying backtracking algorithms. I'm also well-versed in integrating APIs to connect and retrieve data seamlessly within applications.
`;

export const ABOUT_TEXT1 = `Beyond frontend development, I have a deep interest in AI and machine learning, demonstrated by my work on projects like AI Safe Rider, which uses YOLOv8 for object detection, and a Face Mask Detection system built with Convolutional Neural Networks. My commitment to continuous learning keeps me at the forefront of emerging technologies, ensuring that I deliver cutting-edge solutions in every project I undertake.

I'm excited to bring my skills to new challenges and I look forward to contributing to innovative projects that make a difference.`;

export const data = [
  {
    name: `GM-GLOBAL`,
    img: main_background,
    TagLine: `Construction Site Website`,
    githubUrl: `https://github.com/khadijatahira2001/GM-Global-`,
    review: `Developed a dynamic GM global React app integrating Browser Router for seamless navigation, with MUI and Tailwind CSS to create a responsive, modern user interface.`,
  },
  {
    name: `AI-Safe Rider`,
    img: helmet,
    TagLine: `Moving Safely to your Destination`,
    githubUrl: `https://github.com/khadijatahira2001/AI-safe-Rider`,
    review: `Trained a AI Model Safe Bike Rider system using YOLOv8 for real-time object detection, enhancing road safety with advanced machine learning capabilities.`,
  },
  {
    name: `Face Mask Detection`,
    img: facemask,
    TagLine: `Empowering Public Health`,
    githubUrl: `https://github.com/khadijatahira2001/Face-Mask-Detection-CV-Project`,
    review: `Developed a Face Mask Detection system using Convolutional Neural Networks (CNN) to ensure safety and compliance during COVID-19 through real-time image analysis.`,
  },
  {
    name: `QR Code Generator`,
    img: qr,
    TagLine: `Unlock Content with a Simple Scan`,
    githubUrl: `https://github.com/khadijatahira2001/QR-Code-Generator`,
    review: `Developed a QR Code Generator using Python libraries like qrcode and Pillow, enabling quick and easy creation of customizable QR codes.`,
  },
];

export const Experiences = [
  {
    year: "April 2024- June 2024",
    role: "Intern as a Software Engineer",
    company: "Arkhitech",
    technologies: ["Javascript", "React.Js", "Redux", "MUI"],
  },
];

export const work = [
  {
    name: `HowMuch POS`,
    img: howmuch,
    review: `Howmuch POS is filled with all the features that an ideal POS system offers. It is a straightforward yet powerful software that will revolutionize your store in the digital marketing age. Our cloud-based POS software is equipped with advanced features to help you enhance sales, manage inventory, satisfy existing customers, attract new consumers, and increase revenue by a greater margin.`,
    technologies: ["CSS", "React", "Redux Toolkit", "Restful APIs", "MUI"],
  },
  {
    name: `Task Management`,
    img: task,
    review: `Built a Task Management System in React, implementing robust CRUD operations for efficient task creation, editing, deletion, and real-time updates.`,
    technologies: ["React.js", "CSS", "CRUD"],
  },
  {
    name: `Weather App`,
    img: weather,
    review: `Built a Weather App in React utilizing the Weather API and Axios for dynamic data retrieval, with Postman used for thorough API testing and validation.`,
    technologies: ["React.js", "CSS", "API Integration", "PostMan"],
  },
];

export const CONTACT = {
  phoneNo: `+923154300359`,
  email: `khadija.tahira2001@gmail.com`,
  linkedIn: `https://www.linkedin.com/in/khadija-tahira-3379671b2/`,
};
