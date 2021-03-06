import React, { useCallback, useState } from "react";
import styled from "@emotion/styled";
import { motion, AnimatePresence } from "framer-motion";
import useEventListener from "../hooks/useEventListener";

const EmailButton = styled(motion.button)`
  padding: 5px;
  border-radius: 6px;
  /* box-shadow: var(--shadow); */
  outline: none;
  border: 2px solid var(--secondary);
  background: var(--bg);
  font-weight: 600;
  color: var(--copy);
  text-align: center;
  transition: color 0.2s ease;
  font-size: 1rem;
  cursor: pointer;

  :hover {
    color: var(--primary);
  }
`;

const EmailContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const EmailPopup = styled(motion.div)`
  position: fixed;
  padding: 5px;
  border-radius: 6px;
  width: 150px;
  font-size: 0.9rem;
  font-weight: 600;
  border: 2px solid var(--secondary);
  background: var(--bg);
  box-shadow: var(--shadow);
  text-align: center;
`;

const Email = () => {
  const [emailHover, setEmailHover] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const email = useCallback((node) => {
    if (node !== null) {
      const checkEmailClick = function () {
        console.log("Email copied to clipboard");
        node.innerHTML === "hello@notonlybutalso.org"
          ? (node.innerHTML = "Copied to clipboard 🎉")
          : (node.innerHTML = "hello@notonlybutalso.org");
      };
      node.addEventListener("click", checkEmailClick);
    }
  }, []);

  const emailFloat = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener("mousemove", emailFloat);

  return (
    <EmailContainer>
      <AnimatePresence>
        {emailHover && (
          <EmailPopup
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              top: `calc(${coords.y}px)`,
              left: `calc(${coords.x}px + 50px)`,
            }}
          >
            Click to copy to clipboard
          </EmailPopup>
        )}
      </AnimatePresence>
      <EmailButton
        ref={email}
        className="email"
        onClick={() =>
          navigator.clipboard.writeText("hello@notonlybutalso.org")
        }
        onMouseEnter={() => setEmailHover(true)}
        onMouseLeave={() => setEmailHover(false)}
        whileTap={{ scale: 0.95 }}
      >
        hello@notonlybutalso.org
      </EmailButton>
    </EmailContainer>
  );
};

export default Email;
