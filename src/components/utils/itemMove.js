import { initialData } from "../../data";

export const INITIAL_SELECT_ITEMS = {
  left: [],
  right: [],
};

export const itemMoveActions = ({
  selectedItems,
  setSelectedItems,
  leftMenus,
  setLeftMenus,
  rightMenus,
  setRightMenus,
}) => {
  const handleClickLeft = (item) => {
    setSelectedItems({
      left: [item],
      right: [],
    });
  };

  const handleClickRight = (item) => {
    setSelectedItems({
      left: [],
      right: [item],
    });
  };

  const handleMoveRight = () => {
    setRightMenus([...rightMenus, ...selectedItems.left]);
    setLeftMenus([
      ...leftMenus.filter((menu) => selectedItems.left.indexOf(menu) < 0),
    ]);
    setSelectedItems(INITIAL_SELECT_ITEMS);
  };

  const handleMoveLeft = () => {
    setLeftMenus([...leftMenus, ...selectedItems.right]);
    setRightMenus([
      ...rightMenus.filter((menu) => selectedItems.right.indexOf(menu) < 0),
    ]);
    setSelectedItems(INITIAL_SELECT_ITEMS);
  };

  const handleAllMoveRight = () => {
    setRightMenus([...rightMenus, ...leftMenus]);
    setLeftMenus([]);
  };

  const handleAllMoveLeft = () => {
    setLeftMenus([...leftMenus, ...rightMenus]);
    setRightMenus([]);
  };

  const reset = () => {
    setLeftMenus(initialData);
    setRightMenus([]);
    setSelectedItems(INITIAL_SELECT_ITEMS);
  };
  return {
    handleClickLeft,
    handleClickRight,
    handleMoveRight,
    handleMoveLeft,
    handleAllMoveRight,
    handleAllMoveLeft,
    reset,
  };
};
