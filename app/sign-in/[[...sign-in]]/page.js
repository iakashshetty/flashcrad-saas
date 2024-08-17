import { SignIn } from "@clerk/nextjs";
import { AppBar, Container, Typography, Button, Box, Toolbar } from "@mui/material";
import Link from "next/link";

export default function SignUpPage() {
    return (
        <Container maxwidth="100vw">
            <AppBar position="static" sx={{ backgroundColor: "3f51b5" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Flashcards SaaS
                    </Typography>
                    <Link href="/sign-in" passHref>
                        <Button color="inherit">Sign in</Button>
                    </Link>
                    <Link href="/sign-up" passHref>
                        <Button color="inherit">Sign Up</Button>
                    </Link>
                </Toolbar>
            </AppBar>

            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Typography variant="h4">
                    Sign In
                </Typography>
                <SignIn/>
            </Box>
        </Container>
    );
}
