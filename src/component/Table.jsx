
import React from "react";

// Root table wrapper
export function Table({ children, className }) {
  return (
    <table className={`table-auto border-collapse border border-gray-300 w-full ${className || ""}`}>
      {children}
    </table>
  );
}

// Table header wrapper
export function TableHeader({ children, className }) {
  return <thead className={className}>{children}</thead>;
}

// Table row wrapper
export function TableRow({ children, className }) {
  return <tr className={className}>{children}</tr>;
}

// Table head cell (th)
export function TableHead({ children, className }) {
  return (
    <th className={`border px-4 py-2 text-left font-semibold ${className || ""}`}>
      {children}
    </th>
  );
}

// Table body wrapper
export function TableBody({ children, className }) {
  return <tbody className={className}>{children}</tbody>;
}

// Table cell (td)
export function TableCell({ children, className }) {
  return (
    <td className={`border px-4 py-2 ${className || ""}`}>
      {children}
    </td>
  );
}