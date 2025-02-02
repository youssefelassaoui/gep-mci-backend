import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

export default function DrawerComponent({ left, toggleDrawerHandler }) {
  const listItems = ["Inbox", "Starred", "Send email", "Drafts"];

  return (
    <Drawer open={left} onClose={toggleDrawerHandler}>
      <List>
        {listItems.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
