// import React, { useState } from "react";
import HeaderTitles from "../shared/HeaderTitles";
import Tags from "../shared/Tags";
import tab1 from "../images/tab1.svg";
import tab2 from "../images/tab2.svg";
import tab3 from "../images/tab3.svg";
import { useState } from "react";

function Features() {
  const [showTag, setShowTag] = useState("Simple BookMarking");

  const speedySearching = () => {
    setShowTag("Speedy Searching");
  };

  const easySharing = () => {
    setShowTag("Easy Sharing");
  };
  const SimpleBookmarking = () => {
    setShowTag("Simple BookMarking");
  };
  return (
    <>
      <HeaderTitles
        heading={"Features"}
        text={
          "Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go"
        }
      />

      <section className="container flex features" id="tags">
        <div
          className={`feature ${showTag === "Simple BookMarking" && "active"}`}
          onClick={SimpleBookmarking}
        >
          Simple Bookmarking
        </div>
        <div
          className={`feature ${showTag === "Speedy Searching" && "active"}`}
          onClick={speedySearching}
        >
          Speedy Searching
        </div>
        <div
          className={`feature ${showTag === "Easy Sharing" && "active"}`}
          onClick={easySharing}
        >
          Easy Sharing
        </div>
        <div className="line"></div>
      </section>

      {showTag === "Simple BookMarking" ? (
        <Tags
          text={
            "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites "
          }
          headingTitle={"Bookmark in one click "}
          image={tab1}
        />
      ) : showTag === "Speedy Searching" ? (
        <Tags
          headingTitle={"Intelligent search "}
          text={
            " Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks. "
          }
          image={tab2}
        />
      ) : (
        showTag === "Easy Sharing" && (
          <Tags
            headingTitle={"Share your bookmarks"}
            text={
              "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button. "
            }
            image={tab3}
          />
        )
      )}
    </>
  );
}

export default Features;
