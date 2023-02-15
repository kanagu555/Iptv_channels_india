import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import "./TvLinks.css";
import { Grid, Box, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CircleIcon from '@mui/icons-material/Circle';

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

  console.log("allLinks:", allLinks);
  console.log("channels:", channels);

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
      <div>TvLinks</div>
      <div className="center-box"></div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Tv Channel</TableCell>
              <TableCell align="left">Live Link</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <Container>
        <Grid container my={5} spacing={3}>
          {indLinks.map(
            (link, index) =>
              link.channel && (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card elevation={3}>
                    <CardHeader title={link.channel}/>
                    <div className="online-logo">
                    <CircleIcon color="success" fontSize="small"/><Typography variant="body2">{link.status}</Typography>
                    </div>
                    <CardContent>
                    <Link href={link.url} target='_blank' rel="noopener" underline="hover">{link.channel}</Link>
                    </CardContent>
                  </Card>
                </Grid>
              )
          )}
        </Grid>
      </Container>

      {allLinks.map((link) => (
        <>
          {link.channel === "AsianetNewsTamil.in" ? (
            <>
              {console.log("link::", link)}
              <tr>{link.channel}</tr>
              <ReactHlsPlayer src={link.url} autoPlay={false} controls={true} />
            </>
          ) : null}
        </>
      ))}
    </>
  );
};

export default TvLinks;
