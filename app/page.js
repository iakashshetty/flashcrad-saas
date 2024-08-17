import Image from "next/image";
import getStripe from "@/utils/get_stripe";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Container, Typography, Toolbar, Box, Grid } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <container maxwidth="100vw">

     <Head>
      <title>Flashcard SaaS</title>
      <meta name="description" content="Create flascard from text" />
      </Head>

      <AppBar position="static">
        <toolbar>
          <Typography variant="h6" style ={{flexGrow: 1}} >Flashcard SaaS</Typography>
          <SignedOut>
            <Link href="/sign-in"><button color="inherit"  > Login</button></Link>
            <Link href="/sign-up"><button color="inherit"  > Sign Up</button></Link>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </toolbar>
      </AppBar>

      <Box sx={{textAlign: "center", my: 4}}>
        <Typography variant="h2" gutterBottom>Welcome to my Flashcard SaaS</Typography>
        <Typography variant="h5" gutterBottom>Easiest way to make Flashcard from your text
        </Typography>
        <button variant="container" color="primary" sx={{mt:2}}>Get started</button>
      </Box>
      <Box sx={{my: 6}}>
        <Typography variant="h4" components="h2" textAlign={"center"} gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6" gutterBottom>Easy Text Input</Typography>
            <Typography>Simply input  your text and let our software do the  rest. Creating Flashcard has never been easier.</Typography>
          </Grid>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6" gutterBottom>Smart Features</Typography>
            <Typography>Our AI intelligently breaks down your text into cincise Flashcard, perfect for studying.</Typography>
          </Grid>
          <Grid item xs = {12} md={4}>
            <Typography variant="h6" gutterBottom>Accessible anywhere</Typography>
            <Typography>Access your Flashcard from any device, at any time. Study on the go with ease.</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my: 6, textAlign: "center"}}>
      <Typography variant="h4" components="h2" gutterBottom>
          Pricing
        </Typography>  
         <Grid container spacing={4}>
          <Grid item xs = {12} md={6}>
            <Box sx = {{
              p: 3,
              border : "1px solid",
              borderColor: "grey.300",
              borderRadius: 2,
            }}>
            <Typography variant="h5" gutterBottom>Basic</Typography>
            <Typography variant="h6" gutterBottom >$5/Month</Typography>
            <Typography>Access to basic Flashcards Feature sand limited storage.</Typography>
            <button variant = "contained" color="primary" sx={{mt: 4}}>Choose basic</button>
          </Box>
          </Grid>
          <Grid item xs = {12} md={6}>
            <Box sx = {{
              p: 3,
              border : "1px solid",
              borderColor: "grey.300",
              borderRadius: 2,
            }}>
            <Typography variant="h5" gutterBottom>Pro</Typography>
            <Typography variant="h6" gutterBottom >$10/Month</Typography>
            <Typography>Unlimited Flashcards and storage, with priority support.</Typography>
            <button variant = "contained" color="primary" sx={{mt: 4}}>Choose pro</button>
          </Box>
          </Grid>
        </Grid>
        
      </Box>
  
  
  </container>

  );
}
