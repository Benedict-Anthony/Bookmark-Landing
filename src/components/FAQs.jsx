import React, { useState } from "react";
import "../UI/faqs.css";

import HeaderTitles from "../shared/HeaderTitles";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../shared/Button";

function FAQs() {
  const [faqs, setFaqs] = useState([
    {
      id: 1,
      opened: false,
      title: "What is Bookmark?",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      id: 2,
      opened: false,
      title: "How can I request a new browser?",
      value:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet..",
    },
    {
      id: 3,
      opened: false,
      title: "Is there a mobile app?",
      value:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      id: 4,
      opened: false,
      title: "What about other Chromium browsers? ",
      value:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit. More",
    },
  ]);

  const toggleFaq = (id) => {
    setFaqs(
      faqs.map((faq) =>
        faq.id === id
          ? { ...faq, opened: !faq.opened }
          : { ...faq, opened: false }
      )
    );
  };

  return (
    <>
      <HeaderTitles
        heading={"Extension Frequently Asked Questions"}
        text={
          "Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us"
        }
      />
      <AnimatePresence>
        <motion.section
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="container faqs grid"
        >
          <div className="line"></div>
          {faqs.map((faq) => (
            <div className="faq" key={faq.id}>
              <div className="flex faq-flex">
                <h3>{faq.title}</h3>

                {faq.opened ? (
                  <FaChevronUp onClick={() => toggleFaq(faq.id)} />
                ) : (
                  <FaChevronDown onClick={() => toggleFaq(faq.id)} />
                )}
              </div>
              <div className={`faq__content ${faq.opened && "open"}`}>
                <p>{faq.value}</p>
              </div>
            </div>
          ))}

          <Button
            bgColor={"hsl(231, 69%, 60%)"}
            textColor={"#fff"}
            border={"1px solid hsl(231, 69%, 60%)"}
            width={"30%"}
          >
            {"More"}
          </Button>
        </motion.section>
      </AnimatePresence>
    </>
  );
}

export default FAQs;
