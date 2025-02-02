type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List = <T,>({ items, onClick }: ListProps<T>) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, i) => {
        return (
          <div key={i} onClick={() => onClick(item)}>
            {String(item)}
          </div>
        );
      })}
    </div>
  );
};

export default List;
