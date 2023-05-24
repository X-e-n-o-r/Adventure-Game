import React from "react"
import Game from "./Game"
import ItemsType from "./types/ItemsType"
import { option } from "./types/GameType"

const App: React.FC = () => {
  const [nodeId, setNodeId] = React.useState(1)
  const [inventory, setInventory] = React.useState<Record<ItemsType, boolean>>({
    Flashlight: false,
    Gun: false,
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
        list += `${key}`
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
		if (isDisabled) return "disabled";
		else return "";
	};

  return (
    <>
      <div className="terminal-output-wrap">
        <div className="terminal-output">{node.title}</div>
      </div>
      <div className="user-input-wrap">
        {node.options.map((option, index) => (
          <button
          className={checkIsDisabled(option)}
          onClick={() => {onOptionClick(index)
          }}
          >
            {option.title}
          </button>
        ))}
      </div>
      <div className="inventory">Inventory: {renderInventory()}</div>
    </>
  )
}

export default App
