import React from "react"
import Game from "./Game"
import ItemsType from "./types/ItemsType"
import { option } from "./types/GameType"
import TypeWriter from "./TypeWriter"

const App: React.FC = () => {
  const [nodeId, setNodeId] = React.useState(1)
  const [inventory, setInventory] = React.useState<Record<ItemsType, boolean>>({
    Gun: false,
    Knife: false
  });
  
  const node = Game[nodeId];

  const onOptionClick = (idx: number) => {
    const thisOption = node.options[idx];
    setInventory({...inventory, ...thisOption.newState})
    if (node.defaultNextNode) {
      setNodeId(node.defaultNextNode)
    } else if (thisOption.nextNodeId){
      setNodeId(thisOption.nextNodeId)
    }
  };

  const renderInventory = () => {
    let list = '';
    for (let key in inventory) {
      const k = key as keyof typeof inventory;
      if (inventory[k]){
        list += ` ${key}`
      }
    }

    return list;
  }

	const checkIsDisabled = (option: option) => {
		let isDisabled = false;
		if (option.required) {
			option.required.forEach((item) => {
				if (!inventory[item]) {
					isDisabled = true;
				}
			});
		}
		if (isDisabled) return "btn disabled";
		else return "btn";
	};

  const checkIsDisabled2 = (option: option) => {
		let isDisabled = false;
		if (option.required) {
			option.required.forEach((item) => {
				if (!inventory[item]) {
					isDisabled = true;
				}
			});
		}
		if (isDisabled) return true;
		else return false;
	};

  return (
    <>
    <svg
      width="100%"
      height="100%"
      className="mainBgStripes"
    >
      <defs>
        <pattern
          id="pattern_jyUjl"
          patternUnits="userSpaceOnUse"
          width="5"
          height="5"
          patternTransform="rotate(90)"
        >
          <line x1="0" y="0" x2="0" y2="5" stroke="#11693d" strokeWidth="2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pattern_jyUjl)" opacity="1" />
    </svg>
    <div className="app">
      <div className="terminal-output-wrap">
        <h1 className="term-out">» Terminal Output</h1>
        <div className="terminal-output">
        <TypeWriter text={node.title}/>
        </div>
      </div>
      <div className="user-input-wrap">
        <h1>» Choose Your Commands Here</h1>
        {node.options.map((option, index) => (
          <button
          key={index}
          disabled={checkIsDisabled2(option)}
          className={checkIsDisabled(option)}
          onClick={() => {onOptionClick(index)
          }}
          >
          {">"} {option.title}
          </button>
        ))}
      </div>
      <div className="inventory"><span>» Inventory</span> <br/>{renderInventory()}</div>
    </div>
    </>
  )
}

export default App
