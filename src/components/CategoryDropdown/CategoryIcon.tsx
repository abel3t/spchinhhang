import React from "react";

type IconProps = {
  name?: any;
  iconArray?: any;
};

let iconTypes = {};

const CategoryIcon: React.FC<IconProps> = ({ name, iconArray, ...props }) => {
  const hasIcon = iconArray
    ? iconArray.hasOwnProperty(name)
    : iconTypes.hasOwnProperty(name);

  let Icon = hasIcon ? iconArray[name] : "span";

  return <Icon {...props} />;
};

export default CategoryIcon;
