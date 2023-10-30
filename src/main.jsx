import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const datas = {
  blogs: [
    {
      id: 1,
      title: "Best Cloud Computing Books That You Shouldn’t ",
      description:
        "No matter how much technology evolves or how digital the world gets, reading books can",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-cloud-computing.webp",
      date: "26 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 2,
      title: "7 Best Digital Marketing Books 2023",
      description:
        "In today’s digital age, where online presence and marketing are very important, gaining ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-digital-marketing.webp",
      date: "26 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 3,
      title: "7 Real-World Cloud Computing Engineering ",
      description:
        "Think about your smartphone, the apps you use, and even the movies you stream online",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Real-World-Cloud-Computing-Engineering-Applications.webp",
      date: "26 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 4,
      title: "How Long It Would Take to Master Cloud  ",
      description:
        "In our modern world, technology is everywhere, making our lives more convenient and ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-How-Long-It-Would-Take-to-Master-Cloud-Computing-Engineering.webp",
      date: "26 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 5,
      title: "Top Product-Based Companies for Digital ",
      description:
        "Selecting the right launchpad for a successful career in digital marketing isn’t just g",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-How-Long-It-Would-Take-to-Master-Cloud-Computing-Engineering.webp",
      date: "12 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 6,
      title: "Top Product-Based Companies for Digital ",
      description:
        "Selecting the right launchpad for a successful career in digital marketing isn’t just about ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-books-to-learn-cloud-computing.webp",
      date: "2 October 2023 ",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 7,
      title: "Best Product-based Companies for Motion  ",
      description:
        "Motion graphic designers are the unsung heroes of any company as their designs, and animations",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Cloud-Computing-vs-Edge-Computing-Which-One-is-Better.webp",
      date: "12 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 8,
      title: "8 Excellent Product-based Companies for ",
      description:
        "In today’s tech-driven world, the demand for exceptional user experiences has never ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Excellent-Product-based-Companies-for-UI_UX-Designing.webp",
      date: "12 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 9,
      title: "Top 5 Product-Based Companies for Mach  ",
      description:
        "Machine learning is what’s currently backing up most of our daily tech today,",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Machine-Learning-Engineers.webp",
      date: "11 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 10,
      title: "Roles and Responsibilities of a Cloud",
      description:
        "Why have As companies increasingly rely on cloud-based solutions, the demand for skilled ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-based-Companies-for-Motion-Graphic-Designing-2.webp",
      date: "11 October 2023",
      comments: "No Comments",
      type: "FSD",
    },
    {
      id: 11,
      title: "Top Product-Based Companies for Data Sci",
      description:
        "We all know about the kind of buzz surrounding data science right now, it is",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Excellent-Product-based-Companies-for-UI_UX-Designing.webp",
      date: "5 October 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 12,
      title: "Useful Python Libraries & Tools for Data  ",
      description:
        "In a world filled with information, knowing how to understand and use data is super",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Machine-Learning-Engineers.webp",
      date: "29 September 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 13,
      title: "Extraordinary Data Science Projects for",
      description:
        "As the demand for data and the people that can conquer it, i.e. Data Scientists",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      date: "28 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 14,
      title: "Future of Data Science and How You Can Thr ",
      description:
        "‍ Data Science has emerged as a revolutionary field in the technology world, transforming the",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "28 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 15,
      title: "10 Best Data Science Online Courses for B",
      description:
        "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Machine-Learning-Engineers.webp",
      date: "14 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 16,
      title: "10 Best Data Science Frameworks in 2023",
      description:
        "Does data scientists fascinate you? If yes, you must definitely know about data science.",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      date: "5 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 17,
      title: "7 Must-Watch Data Science Focused You",
      description:
        "‍Data science has become one of the most sought-after skills in the current job market.",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Machine-Learning-Engineers.webp",
      date: "5 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 18,
      title: "Everything about Data Scientist Salary ",
      description:
        "Are you curious about the highly sought-after field of data science and the potential ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Data-Science-project-showcase.webp",
      date: "5 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 19,
      title: "How Long Would It Take to Learn Data Science?",
      description:
        "Have you ever wondered how much time it takes to learn data science? ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "5 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 20,
      title: "Exploring Lucrative Data Science Career Opportunities",
      description:
        "The world of data science is abuzz with exciting career opportunities that offer both   ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-Based-Companies-for-Cloud-Engineers.webp",
      date: "4 August 2023",
      comments: "No Comments",
      type: "DS",
    },
    {
      id: 21,
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Diff",
      description:
        "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Product-Based-Companies-for-Data-Scientists.webp",
      date: "27 December 2022",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 22,
      title: "What is Cybersecurity? Importance and its uses",
      description:
        "Look around today, you will witness that we are more reliant on technology and devices",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "20 December 2022",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 23,
      title: "Top 10 Ethical Hacking Books for Beginner",
      description:
        "Did you know that according to the University of Maryland hackers attack every",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Cloud-Computing-Tools.webp",
      date: "21 November 2022",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 24,
      title: "8 Different Types of Cybersecurity and Thr",
      description:
        "Cybersecurity refers to the protection of devices, processes, infrastructure, and as",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-Strategies-for-Effective-Tech-Talent-Sourcing.webp",
      date: "9 November 2022",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 25,
      title: "Is coding required for cybersecurity?",
      description:
        "Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Top-Cloud-Computing-Tools.webp",
      date: "9 November 2022",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 26,
      title: "Top 7 Cyber Security Attacks in Real ",
      description:
        "Cyber security attacks are the type of actions that are designed to destroy, ste,",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "9 November 2022",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 27,
      title: "The Cybersecurity Surge: 5 Must-Have ",
      description:
        "There is something fascinating about a lone hacker in black hoodies using a single ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-Strategies-for-Effective-Tech-Talent-Sourcing.webp",
      date: "1 March 2021",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 28,
      title: "Cybersecurity Jobs: Ultimate Cybersec",
      description:
        "According to the job statistics of 2020, cybersecurity jobs were among the top 15",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-How-to-Hire-a-Full-Stack-Developer.webp",
      date: "1 March 2021",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 29,
      title: "How Is Cyber Security Important To Our?",
      description:
        "Cybersecurity is an exact solution that is sought either by a billionaire with a massive",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-Unique-Ways-Companies-Are-Attracting-Tech-Talent.webp",
      date: "10 November 2020",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 30,
      title: "What Is Hacking? Types of Hackin",
      description:
        "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Best-Career-Opportunities-in-Cloud-Computing-Engineering.webp",
      date: "25 September 2023",
      comments: "No Comments",
      type: "CS",
    },
    {
      id: 31,
      title: "Fascinating Career Opportunities ",
      description:
        "In recent decades, technological growth has been tremendous such that every kid",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Civil-Engineering-Tools-.webp",
      date: "27 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 32,
      title: "The Promising Scope of Civil Eng",
      description:
        "There’s a famous quote “The best creators after God are Civil Engineers”. ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Civil-Engineering-Project-Ideas.webp",
      date: "27 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 33,
      title: "Python Job Opportunities 2023: ",
      description:
        "Interested in Python job opportunities? Good call. To say that the Python job ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Eye-Opening-Websites-to-Learn-Civil-Engineering.webp",
      date: "14 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 34,
      title: "Top 10 Steps to Kickstart Your Career",
      description:
        "As businesses increasingly rely on data-driven insights to make informed deci",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Impressive-Real-world-Applications-of-Civil-Engineering.webp",
      date: "12 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 35,
      title: "Proven Mechanical Engineering Care",
      description:
        "In this age and time, where computer science and engineering are reining all ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "11 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 36,
      title: "How to Become an Automation Test ",
      description:
        "Have you ever wondered how your favorite apps work so smoothly? That’s where ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Real-World-Web-Development-Applications.webp",
      date: "7 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 37,
      title: "Roles and Responsibilities of Digital ",
      description:
        "We live in a time when our mobile screens have become the shopping windows. ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Is-Choosing-Automation-Testing-a-Good-Career-Opportunity.webp",
      date: "5 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 38,
      title: "Top 7 Career Opportunities for Mechanical",
      description:
        "Have you ever felt confused when you decided to set up your career path as",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Everything-You-Should-Know-About-ChatGPT-and-Why-It-Matters.webp",
      date: "1 September 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 39,
      title: "Top 8 Opportunities for Data Engineers",
      description:
        "Have you ever felt confused when you decided to set up your career path as",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Real-World-Web-Development-Applications.webp",
      date: "29 August 2023",
      comments: "No Comments",
      type: "CAR",
    },
    {
      id: 40,
      title: "How Long Would it Take to Learn Motion Graphics?",
      description:
        "Motion graphics is like creating moving pictures with design and animation. ",
      imageUrl:
        "https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp",
      date: "20 August 2023",
      comments: "No Comments",
      type: "CAR",
    },
  ],
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <App datas={datas.blogs} />
);
