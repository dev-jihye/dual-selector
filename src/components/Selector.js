import {
  arrayMove,
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";

export default function Selector({
  title,
  items,
  handleClick,
  selectedItems,
  setItems,
}) {
  console.log(items);

  const SortableItem = SortableElement(({ item }) => {
    return (
      <div
        onClick={() => {
          if (handleClick) {
            handleClick(item);
          }
        }}
        className={`${
          selectedItems.indexOf(item) >= 0
            ? "bg-indigo-100 shadow-sm p-2"
            : "block hover:bg-gray-50 shadow-md p-2 bg-white"
        }`}
      >
        <div className="cursor-pointer">
          <span>{item.emoji}</span>&nbsp;&nbsp;
          <span>{item.name}</span>
        </div>
      </div>
    );
  });

  const SortableList = SortableContainer(({ items }) => {
    console.log(items, "items");
    return (
      <div className="flex-1 overflow-y-auto divide-y">
        {items.map((item, index) => {
          return <SortableItem item={item} index={index} key={item.id} />;
        })}
      </div>
    );
  });

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return (
    <div className="flex flex-col border w-64 h-[500px] m-1 rounded-md">
      <div className="border-b text-2xl p-2 shadow-sm">{title}</div>
      <SortableList items={items} onSortEnd={onSortEnd} pressDelay={100} />
      <div className="border-t text-center">
        {" "}
        {selectedItems.length} / {items.length}
      </div>
    </div>
  );
}
