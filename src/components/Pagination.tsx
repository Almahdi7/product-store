type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

function Pagination({ page, totalPages, onPageChange }: PaginationProps) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mt-6">
      <button
        className="px-3 py-1 border rounded bg-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          key={number}
          className={
            number === page
              ? "px-3 py-1 border rounded bg-green-800 text-white cursor-pointer"
              : "px-3 py-1 border rounded bg-white cursor-pointer"
          }
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        className="px-3 py-1 border rounded bg-white cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
