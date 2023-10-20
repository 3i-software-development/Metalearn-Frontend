import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import NewsItem from "./NewsItem";
import { useState } from "react";
import { useEffect } from "react";
import { GetListNews, GetListCmsItem } from "@/pages/api/CallAPI";

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
  const [listNews, setListNews] = useState([]);

  useEffect(() => {
    GetListNews().then((res) => {
      setListNews(res.Object);
    });

  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [isSSR, setIsSSR] = useState(true);
  useEffect(() => {
    setIsSSR(false);
  }, []);

  return (
    <Box
      sx={{
        padding: "0px 24px",
      }}
    >
      <Tabs
        TabIndicatorProps={{
          sx: {
            display: "block", // Initially show the indicator
          },
        }}
        sx={{
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
          // Media query for smaller screens
          "@media (max-width: 768px)": {
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
            },
            "& .MuiTabs-indicator": {
              display: "none", // Hide the indicator on smaller screens
            },
          },
        }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {listNews.map((item, index) => {
          return (
            <Tab key={index} label={item.name} {...a11yProps(index)} />
          );
        })}
      </Tabs>

      {listNews.map((item, index) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            <NewsItem item={item} cat_id={item.cat_id}/>
          </TabPanel>
        );
      })}
    </Box>
  );
}
