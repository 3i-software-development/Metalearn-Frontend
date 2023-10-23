import React, { useState, useEffect } from 'react';
import classNames from "classnames/bind";

import styles from './ConfigGoogle.module.scss'

const cx = classNames.bind(styles);

function App() {
  const [accessLogs, setAccessLogs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://localhost:7102/api/Transaction/GetAllAccess');
      
      if (response.ok) {
        const data = await response.json();
        setAccessLogs(data);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Access Logs:</h1>
      <ul className={cx("flex")}>
        {accessLogs.map(log => (
          <li className={cx("hhh")} key={log.accessLogId}>
            <strong style={{color: "green"}} className={cx("hhhh")}>Action:</strong> {log.action}<br />
            <strong className={cx("hhhh")}>Description:</strong> {log.description}<br />
            <strong className={cx("hhhh")}>User ID:</strong> {log.userId}<br />
            <strong className={cx("hhhh")}>Application:</strong> {log.accessLogApplication}<br />
            <strong className={cx("hhhh")}>Access Date:</strong> {new Date(log.accessDate).toLocaleString()}<br />
            <strong className={cx("hhhh")}>IP Address:</strong> {log.ipAddress}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
