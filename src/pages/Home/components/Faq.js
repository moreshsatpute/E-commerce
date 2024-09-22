import React, { useState } from 'react'

export const Faq = () => {
  // Create an array of FAQ data
  const faqData = [
    {
      question: 'What does "lifetime access" exactly mean?',
      answer: 'Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.',
    },
    {
      question: 'How does support work?',
      answer: 'Support is provided by the authors who worked on the project. Feel free to contact us for assistance.',
    },
    {
      question: 'I want to build more than one project. Is that allowed?',
      answer: 'You can use Windster for unlimited projects, except for competing with Windster as a UI kit, theme, or template.',
    },
    {
      question: 'What does "free updates" include?',
      answer: 'Free updates will be provided based on the project roadmap and possibly additional updates.',
    },
    {
      question: 'What is the difference between Windster and Tailwind UI?',
      answer: 'Windster and Tailwind UI both integrate with Tailwind CSS, but Windster offers extra components and is still in development.',
    },
    {
      question: 'Do I need any prior knowledge to use this product?',
      answer: 'Basic knowledge of Tailwind CSS and web development is recommended for best results when using this product.',
    },
  ];

  // State to keep track of open FAQ
  const [openIndex, setOpenIndex] = useState(null);

  // Function to handle the click event
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3
                className="flex justify-between items-center mb-4 text-lg font-medium text-gray-900 dark:text-white cursor-pointer"
                onClick={() => handleToggle(index)}
              >
                <span className="flex items-center">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </h3>
              {openIndex === index && (
                <p className="text-gray-500 dark:text-gray-400">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
