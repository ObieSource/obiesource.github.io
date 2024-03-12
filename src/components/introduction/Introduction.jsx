import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./introduction.css";

export const Typewriter = ({
  text,
  showIf = true,
  sequenceBefore = [],
  sequenceAfter = [],
  hideCursorAfter = true,
  speed = 40,
  deletionSpeed = 80,
}) => {
  const [isDone, setIsDone] = useState(false);
  const shouldHideCursor = hideCursorAfter && isDone;
  return (
    <span style={{ whiteSpace: "pre-wrap" }}>
      <span style={{ position: "absolute" }}>
        {showIf && !shouldHideCursor && (
          <TypeAnimation
            sequence={[
              ...sequenceBefore,
              text,
              ...sequenceAfter,
              () => setIsDone(true),
            ]}
            speed={speed}
            deletionSpeed={deletionSpeed}
          />
        )}
      </span>
      <span style={{ visibility: shouldHideCursor ? "initial" : "hidden" }}>
        {text}
      </span>
    </span>
  );
};

const Introduction = () => {
  const [animationState, setAnimationState] = useState(0);

  const isSmallerScreen = window.innerWidth < 1053;

  return (
    <div className="obs__introduction">
      <div className="obs__introduction-terminal">
        <div className="obs__introduction-terminal-buttons__container">
          <div className="obs__introduction-terminal-buttons red"></div>
          <div className="obs__introduction-terminal-buttons amber"></div>
          <div className="obs__introduction-terminal-buttons green"></div>
        </div>
        <div
          className="obs__introduction-terminal-body"
          style={{ overflowWrap: "break-word" }}
        >
          <h1 className="obs__introduction-heading">
            <Typewriter
              text={
                isSmallerScreen
                  ? "WHERE\nDEVELOPERS\nBUILD\nTOGETHER"
                  : "WHERE DEVELOPERS\nBUILD TOGETHER"
              }
              sequenceAfter={[1000, () => setAnimationState(1)]}
            />
          </h1>
          <div className="obs__introduction-description__container">
            <div className="obs__introduction-description-buls">
              <div className="obs__introduction-description animate">
                <h3>
                  {animationState <= 2 ? (
                    <Typewriter
                      showIf={animationState >= 1}
                      text={"Find your people"}
                      sequenceAfter={[
                        1000,
                        () => {
                          if (animationState === 1) setAnimationState(2);
                        },
                      ]}
                    />
                  ) : animationState <= 3 ? (
                    <Typewriter
                      text={"Develop your skills"}
                      sequenceAfter={[1000, ""]}
                    />
                  ) : (
                    <Typewriter
                      text={"Contribute to projects"}
                      sequenceAfter={[1000, ""]}
                    />
                  )}
                </h3>
                <p>
                  {animationState <= 2 ? (
                    <Typewriter
                      key={animationState}
                      showIf={animationState >= 2}
                      text={
                        isSmallerScreen
                          ? "() => {\n  Members can present about\n  their projects and find\n  teammates.\n}"
                          : "() => { Members can present about their projects and find teammates. }"
                      }
                      sequenceAfter={[
                        3000,
                        () => setAnimationState(2),
                        "",
                        () => setAnimationState(3),
                      ]}
                      sequenceBefore={[500]}
                      hideCursorAfter={true}
                      speed={60}
                    />
                  ) : animationState <= 3 ? (
                    <Typewriter
                      key={animationState}
                      text={
                        isSmallerScreen
                          ? "() => {\n  Hone your collaboration\n  skills and learn new \n  technologies.\n}"
                          : "() => { Hone your collaboration skills and learn new technologies. }"
                      }
                      sequenceBefore={[500]}
                      sequenceAfter={[3000, "", () => setAnimationState(4)]}
                      hideCursorAfter={true}
                      speed={60}
                    />
                  ) : (
                    <Typewriter
                      key={animationState}
                      text={
                        isSmallerScreen
                          ? "() => {\n  Hop in the development of\n  an in-progress project.\n}"
                          : "() => { Hop in the development of an in-progress project. }"
                      }
                      sequenceBefore={[500]}
                      sequenceAfter={[3000, "", () => setAnimationState(2)]}
                      hideCursorAfter={true}
                      speed={60}
                    />
                  )}
                </p>
              </div>
              {/* <div className="obs__introduction-description animate">
                <h3>Develop your skills</h3>
                <p>
                () =&gt; &#123;Hone your collaboration skills, as well as learn new technologies.&#125;
                </p>
              </div>
              <div className="obs__introduction-description animate">
                <h3>Contribute to projects</h3>
                <p>() =&gt; &#123;Hop in the development of an in-progress project.&#125;</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
