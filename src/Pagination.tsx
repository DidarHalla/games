import "./Pagination.css";

type PaginationProps = {
  totalCount: number;
  currentPage: number;
  onChangePage: (newPage: number) => void;
};

export function Pagination(props: PaginationProps) {
  const pagesCount = Math.floor(props.totalCount / 20);
  console.log(pagesCount);

  const buttons = [];

  if (!props.totalCount) {
    return null;
  }
  for (let i = 0; i <= pagesCount; i++) {
    buttons.push(
      <button
        style={{
          backgroundColor: i + 1 == props.currentPage ? "yellow" : "",
        }}
        onClick={() => {
          props.onChangePage(i + 1);
        }}
        key={i}
      >
        {i + 1}
      </button>
    );
  }
  if (buttons.length > 6) {
    buttons.splice(props.currentPage + 2, buttons.length - 4);
  }
  if (buttons.length > 6) {
    buttons.splice(
      2,
      buttons.length - 4,
      <span style={{ backgroundColor: "white" }} key="ellipsis">
        ...
      </span>
    );
  }
  return <div className="wrapper-pagination">{buttons}</div>;
}
