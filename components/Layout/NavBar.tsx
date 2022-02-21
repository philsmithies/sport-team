import { AppBar, Box, Toolbar, Button, ButtonGroup } from "@mui/material";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";
import Image from "next/image";

/***
 * !Make The Image Dynamic
 */

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "white",
          display: "flex",
          justifyContent: "center",
          height: 120,
        }}
      >
        <Toolbar>
          <Box mr={10} sx={{ flexGrow: 1 }}>
            <Link href="/" passHref>
              <Box sx={{ cursor: "pointer" }}>
                <Image
                  src="/images/logo.png"
                  alt="Sport Thieme Logo"
                  height={50}
                  width={220}
                  className="nav-logo"
                />
              </Box>
            </Link>
          </Box>
          <ButtonGroup size="large" aria-label="large button group">
            <Link href="/" passHref>
              <Button
                sx={{
                  flexDirection: "column",
                }}
              >
                <GroupsIcon />
                All Coaches
              </Button>
            </Link>
            <Link href="/create" passHref>
              <Button
                sx={{
                  flexDirection: "column",
                }}
              >
                <PersonAddAlt1Icon />
                Create a new Coach
              </Button>
            </Link>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
