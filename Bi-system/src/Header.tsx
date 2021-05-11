import React from "react";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { RouteComponentProps, withRouter } from "react-router-dom";
import logo from "./logo.png";
import { Button, useMediaQuery } from "@material-ui/core";
import Dashboard from "./Pages/Dashboard";

/* Inline CSS styles for the header */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      backgroundColor: "#000000",
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: "center"
    },
    logo: {
      maxWidth: 140,
      marginRight: '10px'
    },
    pcButtons: {
      color: "white",
      backgroundColor: "black",
    },
    buttonGrid: {
      display: "flex",
      flex: 1,
    }
  })
);

interface Props extends RouteComponentProps {}

const Header: React.FC<Props> = ({ history }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  /* Swaps theme based on the breakpoint below*/
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }

  const handleMenuClick = (pageURL: string) => {
      history.push(pageURL);
      setAnchorEl(null); 
  };
  /**
   * A list of urls and their titles for the Header, 
   * making it easier to add more pages to the website.
   * Adding a new element into this list will automatically 
   * display it in the header menu or as buttons depending on screensize
   */

  const pageLinks = [
 
    {
      pageTitle: "Dashboard",
      pageURL: "/Dashboard",
    },
    {
      pageTitle: "Legg Til Bruker",
      pageURL: "/AddUser",
    },
    {
      pageTitle: "Logg ut",
      pageURL: "/logout",
    },
  ];

  return (
    /* 
    * Logo and title, same for all screens.
    */
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
        <a href = {"/Dashboard"}>
          <img className={classes.logo} src={logo} alt="logo" />
          </a>
          <Typography className={classes.title}></Typography>
          <div>
            {isMobile ? (
              <>
              {/*  
              * The Icon and menu if the screensize is below
              */}
                <IconButton
                  edge="end"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {pageLinks.map((pageLink) => {
                    const { pageTitle, pageURL } = pageLink;
                    return (
                      <MenuItem onClick={() => handleMenuClick(pageURL)}>
                        {pageTitle}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              /* 
              * If the screen si more than 600px, shows the additional pages
              * as singular buttons.
              */
              <div className={classes.pcButtons}>
                {pageLinks.map((pageLink) => {
                  const { pageTitle, pageURL } = pageLink;
                  return (
                    <Button variant="contained" onClick={() => handleMenuClick(pageURL)} className={classes.pcButtons}>
                      {pageTitle}
                    </Button>
                  );
                })}
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
