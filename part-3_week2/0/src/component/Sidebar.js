const Sidebar = () => {
  const listData = [
    { name: "Item1", id: 1 },
    { name: "Item2", id: 2 },
    { name: "Item3", id: 3 },
    { name: "Item4", id: 4 },
  ];

  return (
    <ul className="menu">
      {listData.map((item) => (
        <li>
          <a href="#" id={item.id}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Sidebar;
