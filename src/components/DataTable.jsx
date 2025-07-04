import { Table, Badge, Text, ActionIcon, Group } from "@mantine/core";
import React from "react";
import { MdEdit, MdDelete, MdVisibility } from "react-icons/md";

const DataTable = () => {
  // Dummy data for the table
  const dummyData = [
    {
      id: 1,
      name: "Mumbai Express",
      coach: "A1",
      status: "Active",
      type: "AC",
      capacity: 72,
      lastMaintenance: "2024-12-15",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 2,
      name: "Delhi Rajdhani",
      coach: "B2",
      status: "Maintenance",
      type: "Sleeper",
      capacity: 64,
      lastMaintenance: "2024-12-10",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 3,
      name: "Chennai Express",
      coach: "C3",
      status: "Active",
      type: "AC",
      capacity: 72,
      lastMaintenance: "2024-12-20",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 4,
      name: "Kolkata Mail",
      coach: "D4",
      status: "Inactive",
      type: "General",
      capacity: 80,
      lastMaintenance: "2024-12-05",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 5,
      name: "Bangalore Express",
      coach: "E5",
      status: "Active",
      type: "AC",
      capacity: 72,
      lastMaintenance: "2024-12-18",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 6,
      name: "Hyderabad Express",
      coach: "F6",
      status: "Maintenance",
      type: "Sleeper",
      capacity: 64,
      lastMaintenance: "2024-12-12",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 7,
      name: "Pune Express",
      coach: "G7",
      status: "Active",
      type: "AC",
      capacity: 72,
      lastMaintenance: "2024-12-22",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 8,
      name: "Ahmedabad Express",
      coach: "H8",
      status: "Active",
      type: "General",
      capacity: 80,
      lastMaintenance: "2024-12-19",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 9,
      name: "Jaipur Express",
      coach: "I9",
      status: "Inactive",
      type: "Sleeper",
      capacity: 64,
      lastMaintenance: "2024-12-08",
      actions: ["edit", "delete", "view"],
    },
    {
      id: 10,
      name: "Lucknow Express",
      coach: "J10",
      status: "Active",
      type: "AC",
      capacity: 72,
      lastMaintenance: "2024-12-25",
      actions: ["edit", "delete", "view"],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "green";
      case "Maintenance":
        return "orange";
      case "Inactive":
        return "red";
      default:
        return "gray";
    }
  };

  return (
    <div style={{ height: "450px", overflow: "auto" }}>
      <Table
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
        }}
        withColumnBorders
        stickyHeader
      >
        <Table.Thead>
          <Table.Tr style={{ backgroundColor: "rgb(16 97 162)" }}>
            <Table.Th
              style={{
                padding: "16px",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(16 97 162)",
                zIndex: 1,
              }}
            >
              <Text fw={600} c="white">
                Train Name
              </Text>
            </Table.Th>
            <Table.Th
              style={{
                padding: "16px",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(16 97 162)",
                zIndex: 1,
              }}
            >
              <Text fw={600} c="white">
                Coach
              </Text>
            </Table.Th>
            <Table.Th
              style={{
                padding: "16px",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(16 97 162)",
                zIndex: 1,
              }}
            >
              <Text fw={600} c="white">
                Status
              </Text>
            </Table.Th>
            <Table.Th
              style={{
                padding: "16px",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(16 97 162)",
                zIndex: 1,
              }}
            >
              <Text fw={600} c="white">
                Type
              </Text>
            </Table.Th>
            <Table.Th
              style={{
                padding: "16px",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(16 97 162)",
                zIndex: 1,
              }}
            >
              <Text fw={600} c="white">
                Capacity
              </Text>
            </Table.Th>
            <Table.Th
              style={{
                padding: "16px",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(16 97 162)",
                zIndex: 1,
              }}
            >
              <Text fw={600} c="white">
                Last Maintenance
              </Text>
            </Table.Th>
            <Table.Th
              style={{
                padding: "16px",
                position: "sticky",
                top: 0,
                backgroundColor: "rgb(16 97 162)",
                zIndex: 1,
              }}
            >
              <Text fw={600} c="white">
                Actions
              </Text>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dummyData.map((row) => (
            <Table.Tr key={row.id}>
              <Table.Td style={{ padding: "16px" }}>
                <Text fw={500}>{row.name}</Text>
              </Table.Td>
              <Table.Td style={{ padding: "16px" }}>
                <Text>{row.coach}</Text>
              </Table.Td>
              <Table.Td style={{ padding: "16px" }}>
                <Badge color={getStatusColor(row.status)} variant="light">
                  {row.status}
                </Badge>
              </Table.Td>
              <Table.Td style={{ padding: "16px" }}>
                <Text>{row.type}</Text>
              </Table.Td>
              <Table.Td style={{ padding: "16px" }}>
                <Text>{row.capacity}</Text>
              </Table.Td>
              <Table.Td style={{ padding: "16px" }}>
                <Text>{row.lastMaintenance}</Text>
              </Table.Td>
              <Table.Td style={{ padding: "16px" }}>
                <Group gap="xs">
                  <ActionIcon variant="light" color="blue" size="sm">
                    <MdVisibility size={16} />
                  </ActionIcon>
                  <ActionIcon variant="light" color="yellow" size="sm">
                    <MdEdit size={16} />
                  </ActionIcon>
                  <ActionIcon variant="light" color="red" size="sm">
                    <MdDelete size={16} />
                  </ActionIcon>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default DataTable;
