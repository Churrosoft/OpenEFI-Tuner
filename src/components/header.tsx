import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        display: 'flex',
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1,
      marginRight: theme.spacing(2)
    },
    appbar: {
      background: "linear-gradient(45deg, #FE5B8B 30%, #FF8E53 90%)",
      zIndex: theme.zIndex.drawer + 1
    },
    connect: {
      marginLeft: theme.spacing(10)
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3)
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    }
  })
);



export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            OpenEFI || Tunner
          </Typography>

          <Typography color="inherit">OpenEFI v1.0.13 on COM 4</Typography>
          <Button className={classes.connect}>Desconectar</Button>
        </Toolbar>
      </AppBar>

      <Drawer
    className={classes.drawer}
    variant="permanent"
    classes={{
      paper: classes.drawerPaper
    }}
    anchor="left"
  >
    
    <Divider />
    <List>
      {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {["All mail", "Trash", "Spam"].map((text, index) => (
        <ListItem button key={text}>
          <ListItemIcon>
            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
    </div>
  );
}
