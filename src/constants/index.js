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
    review: ` The website’s design is visually appealing and aligns well with the company’s branding, featuring a cohesive color scheme and professional imagery.`,
  },
  {
    name: `AI-Safe Rider`,
    img: helmet,
    TagLine: `Moving Safely to your Destination`,
    githubUrl: `https://github.com/khadijatahira2001/AI-safe-Rider`,
    review: `Designed to enhance road safety by providing real-time monitoring and alerts for riders, ensuring they reach their destinations securely.`,
  },
  {
    name: `Face Mask Detection`,
    img: facemask,
    TagLine: `Empowering Public Health`,
    githubUrl: `https://github.com/khadijatahira2001/Face-Mask-Detection-CV-Project`,
    review: `Designed to enhance public safety by identifying individuals wearing or not wearing masks in real-time. Originally developed in response to the COVID-19 pandemic, this technology helps enforce health protocols in public spaces.`,
  },
  {
    name: `QR Code Generator`,
    img: qr,
    TagLine: `Unlock Content with a Simple Scan`,
    githubUrl: `https://github.com/khadijatahira2001/QR-Code-Generator`,
    review: `Quickly creating QR codes from various types of data, such as URLs, text, contact information. It's designed to be user-friendly and efficient, catering to both personal and professional needs.`,
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
    review: `Task management app designed to help you stay organized and productive. Whether you’re managing daily , work projects or personal goals. Task manager makes it easy to track your tasks and get things done.`,
    technologies: ["React.js", "CSS", "CRUD"],
  },
  {
    name: `Weather App`,
    img: weather,
    review: `Developed a Weather App that provides real-time weather updates and forecasts using data from open APIs. The app features a clean, user-friendly interface with dynamic backgrounds reflecting current weather conditions.`,
    technologies: ["React.js", "CSS", "API Integration"],
  },
];

export const CONTACT = {
  phoneNo: `+923154300359`,
  email: `khadija.tahira2001@gmail.com`,
  linkedIn: `https://www.linkedin.com/in/khadija-tahira-3379671b2/`,
};
