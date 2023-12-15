import { useEffect, useState } from "react";

interface PrintTableProps {
  calculateTable: (argument: number) => number[];
}

export default function PrintTable({ calculateTable }: PrintTableProps) {
  const [rows, setRows] = useState<number[]>([]);

  useEffect(() => {
    console.log("Print Table Run!");
    setRows(calculateTable(1));
  }, [calculateTable]);

  return rows.map((row, index) => <p key={index}>{row}</p>);
}
