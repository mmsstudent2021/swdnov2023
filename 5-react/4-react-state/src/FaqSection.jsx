import React from "react";
import Faq from "./Faq";

const FaqSection = () => {
  const questions = [
    {
      id: 1,
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      id: 2,
      question: "What is a component in React?",
      answer: "A component in React is an independent, reusable piece of UI.",
    },
    {
      id: 3,
      question: "What is state in React?",
      answer:
        "State is an object that determines how that component renders and behaves.",
    },
    {
      id: 4,
      question: "What is a prop in React?",
      answer:
        "Props are inputs to components. They are data passed down from a parent component to a child component.",
    },
    {
      id: 5,
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe the UI.",
    },
    {
      id: 6,
      question: "What is the virtual DOM?",
      answer:
        "The virtual DOM is a lightweight representation of the real DOM that React uses to optimize updates and improve performance.",
    },
    {
      id: 7,
      question: "How do you handle events in React?",
      answer:
        "Events in React are handled using event handlers, which are functions that are called when an event occurs. These handlers are passed as props to the elements.",
    },
    {
      id: 8,
      question: "What is a hook in React?",
      answer:
        "Hooks are functions that let you use state and other React features in functional components.",
    },
    {
      id: 9,
      question: "What is the useEffect hook?",
      answer:
        "The useEffect hook allows you to perform side effects in your functional components, such as fetching data, directly interacting with the DOM, and setting up subscriptions.",
    },
  ];

  return (
    <div className=" p-10">
      <div className="text-4xl font-bold mb-3">
        React Frequently Asked Questions
      </div>

      <div className="flex flex-col">
        {questions.map((question) => (
          <Faq key={question.id} faq={question} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
