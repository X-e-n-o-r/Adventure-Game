import TextOutput from "./components/TextOutput"


function App() {

  return (
    <>
      <div>
        <div className="terminal-output-wrap">
          <h2>» Terminal Output</h2>
          <div className="terminal-output">
            <TextOutput />
          </div>
        </div>
        <div className="user-input-wrap">
          <h2>» Choose Your Commands Here</h2>
          <div className="option-input">
            <button className="btn">option 1</button>
            <button className="btn">option 2</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
