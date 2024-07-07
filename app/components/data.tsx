import { Category } from "./types";
import { FAQ } from "./types";

export const categories: Category[] = [
  {
    title: "Cook Books",
    books: [
      {
        title: "SQL Cook Book",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CWVK8B9R",
        gumroad: "https://gumroad.com/l/sql-cookbook",
        image: "/sql-cookbook.jpg",
      },
      {
        title: "JavaScript Cook Book",
        link: "https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL",
        gumroad: "https://gumroad.com/l/js-cookbook",
        image: "/js-cookbook.jpg",
      },
      {
        title: "Python Cook Book",
        link: "https://www.amazon.com/Hernando-Abella/dp/B0CPDSXDGL",
        gumroad: "https://gumroad.com/l/python-cookbook",
        image: "/python-cookbook.png",
      },
    ],
  },
  {
    title: "250+ Killer One-Liners",
    books: [
      {
        title: "250+ Killer JavaScript One-Liners",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CN58RHGF",
        gumroad: "https://gumroad.com/l/python-cookbook",
        image: "/250-killer-js.jpg",
      },
      {
        title: "250+ Killer TypeScript One-Liners",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CYHZ5QKJ",
        gumroad: "https://gumroad.com/l/python-cookbook",
        image: "/250-killer-ts.jpg",
      },
      {
        title: "250+ Killer C# One-Liners",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0D31DMBFY",
        gumroad: "https://gumroad.com/l/python-cookbook",
        image: "/250-killer-csharp.jpg",
      },
      {
        title: "250+ Killer Ruby One-Liners",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CXF57XT9",
        gumroad: "https://gumroad.com/l/python-cookbook",
        image: "/250-killer-ruby.jpg",
      },
    ],
  },
  {
    title: "Data Structures and Algorithms",
    books: [
      {
        title: "Data Structures and Algorithms in Python",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CVTLX8GS",
        image: "/python-algorithms.jpg",
        gumroad: "https://gumroad.com/l/python-cookbook",
      },
    ],
  },
  {
    title: "Advanced Interview Questions",
    books: [
      {
        title: "120 Advanced JavaScript Interview Questions",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CL9ZKTLV",
        image: "/js-interview.jpg",
        gumroad: "https://gumroad.com/l/python-cookbook",
      },
      {
        title: "120 Advanced Python Interview Questions",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CLL3FKKQ",
        image: "/python-interview.jpg",
        gumroad: "https://gumroad.com/l/python-cookbook",
      },
    ],
  },
  {
    title: "Advanced Design Patterns",
    books: [
      {
        title: "Advanced JavaScript Design Patterns",
        link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CNWGV8W5",
        image: "/js-design-pattern.jpg",
        gumroad: "https://gumroad.com/l/python-cookbook",
      },
    ],
  },
  {
    title: "For Beginners",
    books: [
      {
        title: "JavaScript for Beginners",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CRF2QG7Z",
        image: "/js-for-beginners.jpg",
        gumroad: "https://gumroad.com/l/python-cookbook",
      },
      {
        title: "Rust for Beginners",
        link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CT365MMD",
        image: "/rust-for-beginners.jpg",
        gumroad: "https://gumroad.com/l/python-cookbook",
      },
    ],
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is your return policy?",
    answer: "You can return any item within 30 days of purchase.",
  },
  {
    question: "Do you offer technical support?",
    answer: "Yes, we offer 24/7 technical support for all our products.",
  },
  {
    question: "Where are you located?",
    answer: "We are located in San Francisco, CA.",
  },
  {
    question: "How can I contact customer service?",
    answer: "You can reach our customer service at support@example.com.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and Apple Pay.",
  },
];
