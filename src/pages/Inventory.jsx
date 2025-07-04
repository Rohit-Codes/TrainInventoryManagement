import React from "react";
import { Container, Divider, Grid, GridCol, SimpleGrid } from "@mantine/core";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { TextInput } from "@mantine/core";
import { Button } from "@mantine/core";
import { Checkbox } from "@mantine/core";
import { Textarea } from "@mantine/core";

import { Table } from "@mantine/core";

function FormTable() {
  return (
    <Table
      withborder="true"
      withColumnBorders
      style={{ border: "1px solid #d1d5db", borderRadius: 6 }}
    >
      <Table.Thead>
        <Table.Tr style={{ background: "#f0f4fa" }}>
          <Table.Th style={{ border: "1px solid #d1d5db" }}>Title</Table.Th>
          <Table.Th style={{ border: "1px solid #d1d5db" }}>Yes</Table.Th>
          <Table.Th style={{ border: "1px solid #d1d5db" }}>No</Table.Th>
          <Table.Th style={{ border: "1px solid #d1d5db" }}>Comment</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            Is this bulb fix or not?
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox defaultChecked />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Textarea placeholder="Your Comment" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            Is this bulb fix or not?
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox defaultChecked />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Textarea placeholder="Your Comment" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            Is this bulb fix or not?
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox defaultChecked />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Textarea placeholder="Your Comment" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            Is this bulb fix or not?
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox defaultChecked />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Textarea placeholder="Your Comment" />
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            Is this bulb fix or not?
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox defaultChecked />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Checkbox />
          </Table.Td>
          <Table.Td style={{ border: "1px solid #d1d5db" }}>
            <Textarea placeholder="Your Comment" />
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}

const Inventory = () => {
  return (
    <div>
      <div className="rooms-header">
        <h1>Check Inventory</h1>

        <div className="header-underline"></div>
        <Divider style={{ marginBottom: "10px" }} />
      </div>
      <div className="roomDetailsHeader">
        <h3 className="commonHeading">Room Details</h3>
        <div className="roomDataDiv">
          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <div className="roomDetailsUpperDiv">
                <TextInput
                  disabled
                  label="Train Name"
                  placeholder="Mumbai Express"
                />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <div className="roomDetailsUpperDiv">
                <TextInput disabled label="Coach" placeholder="C-3" />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <div className="roomDetailsUpperDiv">
                <TextInput disabled label="Seats" placeholder="25" />
              </div>
            </Grid.Col>
          </Grid>
          <Grid>
            <h3 className="commonHeading inventoryHeading">
              Inventory Details
            </h3>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <div className="inverntoryCheckMainCard">
                <div className=" inverntoryCheckFormCard">
                  <div className="inverntoryCheckFormCardHeader">
                    <div className="roomDetailsCardIcon ">
                      <MdOutlineInventory />
                    </div>
                    <div className="roomDetailsCardContent">WashRoom</div>
                  </div>
                </div>
                <Divider my="md" />
                <FormTable />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <div className="inverntoryCheckMainCard">
                <div className=" inverntoryCheckFormCard">
                  <div className="inverntoryCheckFormCardHeader">
                    <div className="roomDetailsCardIcon ">
                      <MdOutlineInventory />
                    </div>
                    <div className="roomDetailsCardContent">WashRoom</div>
                  </div>
                </div>
                <Divider my="md" />
                <FormTable />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <div className="inverntoryCheckMainCard">
                <div className=" inverntoryCheckFormCard">
                  <div className="inverntoryCheckFormCardHeader">
                    <div className="roomDetailsCardIcon ">
                      <MdOutlineInventory />
                    </div>
                    <div className="roomDetailsCardContent">WashRoom</div>
                  </div>
                </div>
                <Divider my="md" />
                <FormTable />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
              <div className="inverntoryCheckMainCard">
                <div className=" inverntoryCheckFormCard">
                  <div className="inverntoryCheckFormCardHeader">
                    <div className="roomDetailsCardIcon ">
                      <MdOutlineInventory />
                    </div>
                    <div className="roomDetailsCardContent">WashRoom</div>
                  </div>
                </div>
                <Divider my="md" />
                <FormTable />
              </div>
            </Grid.Col>
          </Grid>
          <div className="submitBtnDiv">
            <Button variant="filled" fullWidth size="md">
              Update Inventory
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Inventory);
