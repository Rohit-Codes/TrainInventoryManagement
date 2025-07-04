import { Table, Skeleton } from "@mantine/core";
import React from "react";

const TableLoader = () => {
  // Create an array with 10 elements for rows
  const rows = Array(10).fill(null);
  // Create an array with 7 elements for columns
  const columns = Array(7).fill(null);

  return (
    <Table
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Table.Thead>
        <Table.Tr>
          {columns.map((_, index) => (
            <Table.Th key={index} style={{ padding: "16px" }}>
              <Skeleton height={20} radius="sm" width="80%" />
            </Table.Th>
          ))}
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {rows.map((_, rowIndex) => (
          <Table.Tr key={rowIndex}>
            {columns.map((_, colIndex) => (
              <Table.Td key={colIndex} style={{ padding: "16px" }}>
                <Skeleton
                  height={16}
                  radius="sm"
                  width={colIndex === 0 ? "40%" : "70%"}
                />
              </Table.Td>
            ))}
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default TableLoader;
