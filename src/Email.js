import React, { useCallback } from "react"
import { ButtonWrap } from "../styles/footerStyles"

const Email = () => {
  const email = useCallback(node => {
    if (node !== null) {
      const checkEmailClick = function() {
        console.log("Email copied to clipboard")
        node.innerHTML === "hello@notonlybutalso.org"
          ? (node.innerHTML = "Copied to clipboard 🎉")
          : (node.innerHTML = "hello@notonlybutalso.org")
      }
      node.addEventListener("click", checkEmailClick)
    }
  }, [])
  return (

    <button
      title="Click to copy to clipboard"
      ref={email}
      className="email"
      onClick={() => navigator.clipboard.writeText("hello@notonlybutalso.org")}
    >
      guymunday@gmail.com
    </button>
  )
}

export default Email
