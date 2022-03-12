import { ReplyIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { ChevronDoubleRightIcon } from "@heroicons/react/outline";
import { ChevronDoubleLeftIcon } from "@heroicons/react/outline";
import { useState } from "react";
import Button from "./components/Button";
import Popover from "./components/Popover";
import Selector from "./components/Selector";
import {
  INITIAL_SELECT_ITEMS,
  itemMoveActions,
} from "./components/utils/itemMove";
import { initialData } from "./data";

function App() {
  const [leftTitle, setLeftTitle] = useState("avilable options");
  const [rightTitle, setRightTitle] = useState("selected options");

  const [leftMenus, setLeftMenus] = useState(initialData);
  const [rightMenus, setRightMenus] = useState([]);

  const [selectedItems, setSelectedItems] = useState(INITIAL_SELECT_ITEMS);

  const {
    handleClickLeft,
    handleClickRight,
    handleMoveRight,
    handleMoveLeft,
    handleAllMoveRight,
    handleAllMoveLeft,
    reset,
  } = itemMoveActions({
    selectedItems,
    setSelectedItems,
    leftMenus,
    setLeftMenus,
    rightMenus,
    setRightMenus,
  });

  return (
    <div className="App">
      <div className="border m-20 flex justify-center">
        <div className="m-2">
          <input
            className="w-64 border rounded-md p-2 m-1"
            type="text"
            placeholder="search"
          />
          <Selector
            title={leftTitle}
            items={leftMenus}
            setItems={setLeftMenus}
            selectedItems={selectedItems.left}
            handleClick={handleClickLeft}
          />
        </div>
        <div className="flex flex-col m-2 justify-center">
          {/* 버튼모음 */}
          <Button
            onClick={reset}
            className="border rounded-md m-1 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
          >
            <ReplyIcon className="w-6" />
          </Button>
          <Button
            onClick={handleMoveRight}
            className="border rounded-md m-1 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronRightIcon className="w-6" />
          </Button>
          <Button
            onClick={handleMoveLeft}
            className="border rounded-md m-1 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronLeftIcon className="w-6" />
          </Button>
          <Button
            onClick={handleAllMoveRight}
            className="border rounded-md m-1 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronDoubleRightIcon className="w-6" />
          </Button>
          <Button
            onClick={handleAllMoveLeft}
            className="border rounded-md m-1 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
          >
            <ChevronDoubleLeftIcon className="w-6" />
          </Button>
        </div>
        <div className="m-2">
          <input
            className="w-64 border rounded-md p-2 m-1"
            type="text"
            placeholder="search"
          />
          <Selector
            title={rightTitle}
            items={rightMenus}
            setItems={setRightMenus}
            selectedItems={selectedItems.right}
            handleClick={handleClickRight}
          />
        </div>
        <Popover />
      </div>
    </div>
  );
}

export default App;
