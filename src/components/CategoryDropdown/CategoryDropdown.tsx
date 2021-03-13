import React from "react";
import Collapse, { Panel } from "rc-collapse";
import "rc-collapse/assets/index.css";
import CategoryDropdownWrapper from "./CategoryDropdown.style";

type CategoryDropdownProps = {
  router?: any;
  className?: string;
  items: any[];
  id?: number;
  handleCategorySelection?: any;
};

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  className,
  items = [],
  handleCategorySelection
}) => {
  const addAllClasses: string[] = ["category-dropdown"];

  if (className) {
    addAllClasses.push(className);
  }
  return (
    <CategoryDropdownWrapper>
      <Collapse
        accordion={true}
        className={addAllClasses.join(" ")}
        defaultActiveKey="active"
      >
        {items.length !== 0 &&
          items.map(dropdown => {
            return (
              <Panel
                header={
                  <li onClick={() => handleCategorySelection(dropdown.slug)}>
                    {dropdown.title}
                  </li>
                }
                headerClass="dropdown-title"
                key={dropdown.slug}
                showArrow={false}
              >
                {dropdown.children.map((item: any) => {
                  return (
                    <li
                      className="dropdown-link"
                      key={item.id}
                      onClick={() => handleCategorySelection(item.slug)}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </Panel>
            );
          })}
      </Collapse>
    </CategoryDropdownWrapper>
  );
};

export default CategoryDropdown;
