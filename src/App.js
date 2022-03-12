import { ReplyIcon } from "@heroicons/react/solid";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/solid";
import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import { ChevronDoubleLeftIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div className="App">
      <div className="border m-20 flex justify-center items-center">
        <div>
          <input
            className="w-64 border rounded-md p-2"
            type="text"
            placeholder="search"
          />
          <div className="border w-64 mt-4 rounded-md">
            <div className="border-b text-2xl p-2">available</div>
            <div>
              <div className="border-b p-2">정규화</div>
              <div className="border-b p-2">대시보드</div>
            </div>
            <div className="border-t text-center"> 1 / 8</div>
          </div>
        </div>
        <div className="flex flex-col m-2">
          {/* 버튼모음 */}
          <button className="border rounded-md m-1">
            <ReplyIcon className="w-8 flex items-center justify-center m-1" />
          </button>
          <button className="border rounded-md m-1">
            <ChevronRightIcon className="w-10" />
          </button>
          <button className="border rounded-md m-1">
            <ChevronLeftIcon className="w-10" />
          </button>
          <button className="border rounded-md flex items-center justify-center m-1">
            <ChevronDoubleRightIcon className="w-8" />
          </button>
          <button className="border rounded-md flex items-center justify-center m-1">
            <ChevronDoubleLeftIcon className="w-8" />
          </button>
        </div>
        <div>
          <div>
            <input
              className="w-64 border rounded-md p-2"
              type="text"
              placeholder="search"
            />
            <div className="border w-64 mt-4 rounded-md">
              <div className="border-b text-2xl p-2">available</div>
              <div>
                <div className="border-b p-2">정규화</div>
                <div className="border-b p-2">대시보드</div>
              </div>
              <div className="border-t text-center"> 1 / 8</div>
            </div>
          </div>
        </div>
        <div>{/* setting버튼 */}</div>
      </div>
    </div>
  );
}

export default App;
