import React from "react";

const ListItem = () => {
  const names = ["dinesh", "mahesh", "suresh", "kamlesh", "rakesh"];

  return (
    <div>
      <h2>List Item</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
