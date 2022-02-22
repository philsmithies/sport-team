import {
  AppBar,
  Box,
  Toolbar,
  Button,
  ButtonGroup,
  Dialog,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import GroupsIcon from "@mui/icons-material/Groups";
import Link from "next/link";
import Image from "next/image";

const NavBar = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Box mr={10} sx={{ flexGrow: { xs: "none", sm: 1 } }}>
            <Link href="/" passHref>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
            <Link href="/favourites" passHref>
              <Button
                sx={{
                  flexDirection: "column",
                }}
              >
                <FavoriteIcon />
                Favourites
              </Button>
            </Link>
            <Link href="" passHref>
              <Button
                sx={{
                  flexDirection: "column",
                }}
                onClick={handleClickOpen}
              >
                <HelpOutlineIcon />
                Help
              </Button>
            </Link>
          </ButtonGroup>
          <Dialog onClose={handleClose} open={open} sx={{ borderRadius: 10 }}>
            <DialogTitle>
              A Project by Phil Smithies.
              <br />
              <Link href="https://www.github.com/philsmithies" passHref>
                https//www.github.com/philsmithies
              </Link>
            </DialogTitle>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
