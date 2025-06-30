import { Container, Divider, Grid, GridCol, SimpleGrid } from "@mantine/core";
import React, { useState, useEffect } from "react";
import RoomCards from "../components/RoomCard";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching rooms data
    setTimeout(() => {
      setRooms([
        {
          id: 1,
          name: "Deluxe Suite",
          image:
            "https://www.indianarrative.com/wp-content/uploads/2022/07/Deccan-Queen1.webp",
          price: 299,
          rating: 4.8,
          amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Mini Bar",
            "Flat-screen TV",
          ],
          available: true,
        },
        {
          id: 2,
          name: "Premium King Room",
          image:
            "https://www.indianarrative.com/wp-content/uploads/2022/07/Deccan-Queen1.webp",
          price: 199,
          rating: 4.5,
          amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV"],
          available: true,
        },
        {
          id: 3,
          name: "Executive Suite",
          image:
            "https://www.indianarrative.com/wp-content/uploads/2022/07/Deccan-Queen1.webp",
          price: 349,
          rating: 4.9,
          amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Mini Bar",
            "Flat-screen TV",
            "Jacuzzi",
          ],
          available: false,
        },
        {
          id: 4,
          name: "Standard Twin Room",
          image:
            "https://www.indianarrative.com/wp-content/uploads/2022/07/Deccan-Queen1.webp",
          price: 149,
          rating: 4.2,
          amenities: ["Free Wi-Fi", "Air Conditioning", "Flat-screen TV"],
          available: true,
        },
        {
          id: 5,
          name: "Family Suite",
          image:
            "https://www.indianarrative.com/wp-content/uploads/2022/07/Deccan-Queen1.webp",
          price: 399,
          rating: 4.7,
          amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Mini Bar",
            "Flat-screen TV",
            "Kitchenette",
          ],
          available: true,
        },
        {
          id: 6,
          name: "Ocean View Suite",
          image:
            "https://www.indianarrative.com/wp-content/uploads/2022/07/Deccan-Queen1.webp",
          price: 450,
          rating: 5.0,
          amenities: [
            "Free Wi-Fi",
            "Air Conditioning",
            "Mini Bar",
            "Flat-screen TV",
            "Balcony",
          ],
          available: true,
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="rooms-container">
      <div className="rooms-header">
        <h1>Our Coaches</h1>
        <p>Experience luxury and comfort in our premium accommodations</p>
        <div className="header-underline"></div>
        <Divider style={{ marginBottom: "10px" }} />
      </div>

      {isLoading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading available rooms...</p>
        </div>
      ) : (
        <Grid>
          {rooms &&
            rooms.length > 0 &&
            rooms.map((data) => <RoomCards data={data} key={data?.id} />)}
        </Grid>
      )}
    </div>
  );
};

export default React.memo(Rooms);
