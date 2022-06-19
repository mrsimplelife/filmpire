import {
  AccountCircle,
  Brightness4,
  Brightness7,
  Menu,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "..";
import useStyles from "./styles";

function NavBar() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 599px)");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          {isMobile && <MenuButton onClick={() => setMobileOpen(true)} />}
          <ThemeButton />
          {!isMobile && "Search..."}
          <LoginStatus isAuthenticated />
          {isMobile && "Search..."}
        </Toolbar>
      </AppBar>
      <MyDrawer mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </>
  );
}

export default NavBar;

interface MenuButtonProps {
  onClick: () => void;
}

function MenuButton({ onClick }: MenuButtonProps) {
  const classes = useStyles();
  return (
    <IconButton
      className={classes.menuButton}
      style={{ outline: "none" }}
      color="inherit"
      edge="start"
      onClick={onClick}
    >
      <Menu />
    </IconButton>
  );
}

function ThemeButton() {
  const theme = useTheme();
  return (
    <IconButton sx={{ ml: 1 }} color="inherit">
      {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
}
interface LoginStatusProps {
  isAuthenticated: boolean;
}
function LoginStatus({ isAuthenticated }: LoginStatusProps) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 599px)");
  return (
    <div>
      {!isAuthenticated ? (
        <Button color="inherit">
          Login &nbsp; <AccountCircle />
        </Button>
      ) : (
        <Button
          className={classes.linkButton}
          color="inherit"
          component={Link}
          to="/profile/:id"
        >
          {!isMobile && <>My Movies &nbsp;</>}
          <Avatar
            style={{ width: 30, height: 30 }}
            alt="Profile"
            src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg"
          />
        </Button>
      )}
    </div>
  );
}
interface MyDrawerProps {
  mobileOpen: boolean;
  setMobileOpen: (mobileOpen: boolean) => void;
}
function MyDrawer({ mobileOpen, setMobileOpen }: MyDrawerProps) {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width: 599px)");

  return (
    <div>
      <nav className={classes.drawer}>
        {isMobile ? (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="temporary"
            anchor="right"
            ModalProps={{ keepMounted: true }}
            open={mobileOpen}
            onClose={() => setMobileOpen(false)}
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        ) : (
          <Drawer
            classes={{ paper: classes.drawerPaper }}
            variant="permanent"
            open
          >
            <Sidebar setMobileOpen={setMobileOpen} />
          </Drawer>
        )}
      </nav>
    </div>
  );
}
