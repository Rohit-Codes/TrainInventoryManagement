import {
  Button,
  Container,
  Divider,
  Grid,
  GridCol,
  SimpleGrid,
} from "@mantine/core";
import React, { useState, useEffect } from "react";
import RoomCards from "../components/RoomCard";
import axios from "axios";
import TableLoader from "../components/TableLoader";
import DataTable from "../components/DataTable";


const Rooms = () => {
  const [isLoading, setIsLoading] = useState(true);





  return (
    <div className="rooms-container">
      <div className="rooms-header">
        <h1>Our Coaches</h1>
        <p>Experience luxury and comfort in our premium accommodations</p>
        <div className="header-underline"></div>
        <Divider style={{ marginBottom: "10px" }} />
      </div>
      {/* <TableLoader /> */}
      <DataTable />
      {/* <Button onClick={handleCoachData}>Get Coaches</Button> */}
    </div>
  );
};

export default React.memo(Rooms);
