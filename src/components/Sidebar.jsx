import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, ShoppingBag, LocalOffer, PlayCircle } from "@mui/icons-material";

const Sidebar = () => (
  <Drawer
    variant="permanent"
    sx={{
      width: 220,
      flexShrink: 0,
      "& .MuiDrawer-paper": {
        width: 220,
        boxSizing: "border-box",
        backgroundColor: "#e50914", // qizil
        color: "white",
      },
    }}
  >
    <h1 className="text-2xl font-extrabold text-center mt-6 mb-8 tracking-widest">NIKE</h1>
    <List>
      {[
        { text: "Bosh sahifa", icon: <Home /> },
        { text: "Mahsulotlar", icon: <ShoppingBag /> },
        { text: "Chegirmalar", icon: <LocalOffer /> },
        { text: "Video", icon: <PlayCircle /> },
      ].map((item, index) => (
        <ListItem
          key={index}
          button
          sx={{
            "&:hover": {
              backgroundColor: "#b00610",
            },
          }}
        >
          <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar;
