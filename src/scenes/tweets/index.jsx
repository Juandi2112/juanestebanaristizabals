import { Box, Grid, Paper } from "@mui/material";
import imag from "../../assets/imga";
import CoverImage from "../../components/CoverImage";
import Footer from "../../components/Footer";
import { TwitterTweetEmbed } from "react-twitter-embed";

const tweets = [
  "1629133258893012993",
  "1629884212395270145",
  "1633282770960089088",
  "1512075344269832196",
  "1633253625517441027"
];

const Tweet = () => {
  return (
    <Box>
      <CoverImage title="Consignas" image={imag.img6} opa="0.3"/>
      <Grid container spacing={2} justifyContent="center" mt="2rem">
        {tweets.map((tweetId) => (
          <Grid key={tweetId} item xs={12} sm={6} md={4}>
            <Paper sx={{ p: 2 }}>
              <TwitterTweetEmbed tweetId={tweetId} placeholder="Loading Tweet..." options={{theme: 'dark' }} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Footer />
    </Box>
  );
};

export default Tweet;
