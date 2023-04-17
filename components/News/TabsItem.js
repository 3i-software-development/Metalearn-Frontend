import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NewsItem from "./NewsItem";
import { useState } from "react";
import { useEffect } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabItem() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        padding:" 0px 24px",
        "& .MuiTabs-flexContainer": {
          borderBottom: "2px solid #e38705",
        },
      }}
    >
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Tin nổi bật" {...a11yProps(0)} />
          <Tab label="Sự kiện nóng" {...a11yProps(1)} />
          <Tab label="Kinh doanh" {...a11yProps(2)} />
          <Tab label="Sản xuất" {...a11yProps(3)} />
          <Tab label="Dự án & Đấu thầu" {...a11yProps(4)} />
          <Tab label="Tin tổng hợp" {...a11yProps(5)} />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        <NewsItem />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NewsItem />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NewsItem />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <NewsItem />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <NewsItem />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <NewsItem />
      </TabPanel>
    </Box>
  );
}
