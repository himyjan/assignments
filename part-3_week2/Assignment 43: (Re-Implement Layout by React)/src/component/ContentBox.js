const ContentBox = () => {
  const contentData = [
    { name: "Content Box 1", id: 1 },
    { name: "Content Box 2", id: 2 },
    { name: "Content Box 3", id: 3 },
    { name: "Content Box 4", id: 4 },
  ];

  return (
    <div className="content-box">
      {contentData.map((item) => (
        <div className="box" id={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ContentBox;
