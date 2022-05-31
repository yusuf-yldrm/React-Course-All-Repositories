import { useCallback, useState } from "react";
import Button from "./Button";
import DemoOutput from "./DemoOutput";

function App() {

  console.log("APP FUNCTION")

  const [showParagraph, setShowParagraph] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)



  const showParagraphHandler = useCallback(() => {
    if(allowToggle) {
      console.log("worked")
      setShowParagraph(prevValue => !prevValue)
    }
  }, [])

  const allowToggleHandler = () => {
    setAllowToggle(true)
  }

  return (
    <div>
        <h1>click the button to see paragraph</h1>
        <DemoOutput show={showParagraph}>Hello my friend im just looking here</DemoOutput>
        <br />

        <Button onClick={showParagraphHandler}>This Button</Button>
        <br /><br /><br />

        <Button onClick={allowToggleHandler}>Allow Toggle Paragraph</Button>
    </div>
  );
}

export default App;
