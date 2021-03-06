import React, { VFC } from "react";
import { Box, Typography } from "@mui/material";
import SidebarOption from "./SidebarOption";
import Home from "@mui/icons-material/Home";
import Search from "@mui/icons-material/Search";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import BookmarkBorder from "@mui/icons-material/BookmarkBorder";
import ListAlt from "@mui/icons-material/ListAlt";
import PermIdentity from "@mui/icons-material/PermIdentity";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import AuthBtn from "./AuthBtn";

const Sidebar: VFC = () => {
  return (
    <Box
      sx={{
        flex: 1,
        mt: 8,
        pl: 10,
        pr: 20,
        borderRight: 1,
        borderColor: "secondary.main",
      }}
    >
      <Typography
        color="primary"
        fontSize={28}
        fontWeight="bold"
        sx={{ ml: 5 }}
      >
        HITOKOTO
      </Typography>
      <SidebarOption Icon={Home} active={true} text="Home" />
      <SidebarOption Icon={Search} text="Explone" />
      <SidebarOption Icon={NotificationsNone} text="Notifications" />
      <SidebarOption Icon={BookmarkBorder} text="Bookmarks" />
      <SidebarOption Icon={ListAlt} text="Lists" />
      <SidebarOption Icon={PermIdentity} text="Profile" />
      <SidebarOption Icon={MoreHoriz} text="More" />

      {/* login btn */}
      <Box sx={{ pt: 10 }}>
        <AuthBtn />
      </Box>
    </Box>
  );
};

export default Sidebar;
