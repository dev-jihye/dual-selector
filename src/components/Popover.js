import { CogIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Button from "./Button";

export default function Popover() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="m-2 relative">
      {/* setting버튼 */}
      <Button
        onClick={() => {
          setIsModalOpen(!isModalOpen);
        }}
        className="border rounded-md m-1 w-10 h-10 flex items-center justify-center hover:bg-gray-50"
      >
        <CogIcon className="w-6" />
      </Button>
      {isModalOpen ? (
        <div className="border m-1 w-56 rounded-md absolute right-0 bg-white shadow-md">
          <div className="flex justify-between p-2 border-b">
            <span>타이틀</span>
            <label className="flex items-center">
              <input type="checkbox" className="hidden" />
              <span className="bg-red-500 w-3 h-3 rounded-full cursor-pointer"></span>
            </label>
          </div>
          <div className="border-b p-2">
            <input
              type="text"
              placeholder="가로"
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="세로"
              className="border rounded-md p-2 w-full mt-2"
            />
          </div>
          <div className="flex justify-between p-2 border-b">
            <span>검색</span>
            <label className="flex items-center">
              <input type="checkbox" className="hidden" />
              <span className="bg-red-500 w-3 h-3 rounded-full cursor-pointer"></span>
            </label>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span>하나씩만 옮기기</span>
            <label className="flex items-center">
              <input type="checkbox" className="hidden" />
              <span className="bg-red-500 w-3 h-3 rounded-full cursor-pointer"></span>
            </label>
          </div>
          <div className="flex justify-between p-2 border-b">
            <span>선택된 아이템 갯수 표시</span>
            <label className="flex items-center">
              <input type="checkbox" className="hidden" />
              <span className="bg-red-500 w-3 h-3 rounded-full cursor-pointer"></span>
            </label>
          </div>
          <div className="flex items-center justify-between p-2 border-b">
            <span>아이템 크기</span>
            <div className="flex">
              <label className="flex flex-col px-2 items-center">
                <input type="radio" name="size" />
                <span>xs</span>
              </label>
              <label className="flex flex-col px-2 items-center">
                <input type="radio" name="size" defaultChecked />
                <span>s</span>
              </label>
              <label className="flex flex-col px-2 items-center">
                <input type="radio" name="size" />
                <span>m</span>
              </label>
            </div>
          </div>
          <div className="p-2">
            <input
              type="text"
              placeholder="가로"
              className="border rounded-md p-2 w-full"
            />
            <input
              type="text"
              placeholder="세로"
              className="border rounded-md p-2 w-full mt-2"
            />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
