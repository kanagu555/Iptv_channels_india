import axios from "axios";
import React, { useEffect, useState } from "react";
import "./TvLinks.css";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircleIcon from "@mui/icons-material/Circle";
import { Link as RouteLink } from "react-router-dom";
import Header from "../HeaderNavigation/Header";

const TvLinks = () => {
  const [allLinks, setAllLinks] = useState([]);
  const [channels, setChannels] = useState([]);

  useEffect(() => {
    axios
      .get("https://iptv-org.github.io/api/streams.json")
      .then((res) => setAllLinks(res.data));
  }, []);

  useEffect(() => {
    axios
      .get("https://iptv-org.github.io/api/channels.json")
      .then((res) => setChannels(res.data));
  }, []);

  const indLinks = allLinks.filter((link) => {
    const countryMatch = channels.find(
      (channel) =>
        channel.id === link.channel &&
        channel.country === "IN" &&
        link.status === "online"
    );
    return countryMatch !== undefined;
  });

  console.log("indLinks:", indLinks);

  return (
    <>
      <Header />
      <Container>
        <Grid container my={2} spacing={3}>
          {indLinks.map(
            (link, index) =>
              link.channel && (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card elevation={3}>
                    <div className="center-box">
                      <Typography
                        my={2}
                        sx={{
                          fontWeight: "bold",
                          fontFamily: "Merriweather Sans",
                        }}
                      >
                        {link.channel}
                      </Typography>
                      <div className="online-logo">
                        <CircleIcon color="success" fontSize="small" />
                        <Typography variant="body2">{link.status}</Typography>
                      </div>
                      <CardContent>
                        <RouteLink
                          to={{
                            pathname: "/VideoPlayer",
                            state: { videoLink: link.url },
                          }}
                          // target="_blank"
                          rel="noopener"
                          underline="hover"
                        >
                          {link.channel}
                        </RouteLink>
                      </CardContent>
                    </div>
                  </Card>
                </Grid>
              )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default TvLinks;
