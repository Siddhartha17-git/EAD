import React, { useState } from "react";

export default function TableWithPagination() {
  const data = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
  }));

  const pageSize = 5;
  const [page, setPage] = useState(1);

  const visible = data.slice((page - 1) * pageSize, page * pageSize);
  const pageCount = Math.ceil(data.length / pageSize);

  return (
    <div className="card" style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Table with Pagination</h3>
      <table border="1" cellPadding="10" style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {visible.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination buttons */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {page} of {pageCount}
        </span>
        <button onClick={() => setPage((p) => Math.min(p + 1, pageCount))} disabled={page === pageCount}>
          Next
        </button>
      </div>
    </div>
  );
}
