import {
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import { useTheme } from "@mui/styles";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const blueLogo =
  "https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png";
const redLogo =
  "https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png";

const categories = [
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
];

interface SidebarProps {
  setMobileOpen: (isOpen: boolean) => void;
}
function Sidebar({ setMobileOpen }: SidebarProps) {
  const theme = useTheme();
  const classes = useStyles();

  useEffect(() => {
    setMobileOpen(false);
  }, [setMobileOpen]);

  return (
    <>
      <Link to="/" className={classes.imageLink}>
        <img
          className={classes.image}
          src={theme.palette.mode === "light" ? blueLogo : redLogo}
          alt="Filmpire logo"
        />
      </Link>
      <Divider />
      <List>
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem button>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        <ListSubheader>Genres</ListSubheader>
        {categories.map(({ label, value }) => (
          <Link key={value} className={classes.links} to="/">
            <ListItem button>
              {/* <ListItemIcon>
                <img
                  src={blueLogo}
                  className={classes.genreImage}
                  height={30}
                />
              </ListItemIcon> */}
              <ListItemText primary={label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default Sidebar;
