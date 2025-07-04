import { Grid, Text, Badge, Group, Button } from "@mantine/core";
import React from "react";
import { TbTrain } from "react-icons/tb";
import { MdPendingActions, MdDoneAll } from "react-icons/md";

const DashBoardData = () => {
  return (
    <div className="dashBoardDataMainDiv">
      <Grid>
        {" "}
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <div
            style={{
              padding: "28px",
              borderRadius: "14px",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.09)",
              background: "white",
              transition: "transform 0.2s ease",
              cursor: "pointer",
              height: "100%",
              minHeight: "180px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <div>
                <Text size="lg" c="dimmed" fw={500}>
                  Total Coaches
                </Text>
                <Text fw={700} size="28px" mt="sm">
                  24
                </Text>
              </div>
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "12px",
                  backgroundColor: "#eaedff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#4263eb",
                }}
              >
                <TbTrain size={30} />
              </div>
            </div>
            <Group gap="xs">
              <Badge size="lg" color="blue" variant="light">
                +2.6%
              </Badge>
              <Text size="md" c="dimmed">
                from last month
              </Text>
            </Group>
          </div>
        </Grid.Col>{" "}
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <div
            style={{
              padding: "28px",
              borderRadius: "14px",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.09)",
              background: "white",
              transition: "transform 0.2s ease",
              cursor: "pointer",
              height: "100%",
              minHeight: "180px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <div>
                <Text size="lg" c="dimmed" fw={500}>
                  In Progress
                </Text>
                <Text fw={700} size="28px" mt="sm">
                  8
                </Text>
              </div>
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "12px",
                  backgroundColor: "#fff4e6",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#f76707",
                }}
              >
                <MdPendingActions size={30} />
              </div>
            </div>
            <Group gap="xs">
              <Badge size="lg" color="orange" variant="light">
                Active
              </Badge>
              <Text size="md" c="dimmed">
                currently in maintenance
              </Text>
            </Group>
          </div>
        </Grid.Col>{" "}
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <div
            style={{
              padding: "28px",
              borderRadius: "14px",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.09)",
              background: "white",
              transition: "transform 0.2s ease",
              cursor: "pointer",
              height: "100%",
              minHeight: "180px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <div>
                <Text size="lg" c="dimmed" fw={500}>
                  Completed
                </Text>
                <Text fw={700} size="28px" mt="sm">
                  16
                </Text>
              </div>
              <div
                style={{
                  width: "58px",
                  height: "58px",
                  borderRadius: "12px",
                  backgroundColor: "#e6fcf5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#0ca678",
                }}
              >
                <MdDoneAll size={30} />
              </div>
            </div>
            <Group gap="xs">
              <Badge size="lg" color="green" variant="light">
                +4.2%
              </Badge>
              <Text size="md" c="dimmed">
                completion rate improved
              </Text>
            </Group>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default React.memo(DashBoardData);
