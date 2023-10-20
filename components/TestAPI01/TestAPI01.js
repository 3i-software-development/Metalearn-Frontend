import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./ConfigGoogle.module.scss";


const cx = classNames.bind(styles);


const TestAPI01 = () => {

  const [data, setData] = useState([]);

  //fetch data

  useEffect(() => {

    const fetchData = async () => {

      const response = await fetch('https://localhost:7102/api/AssetActivity/WalletDepositTransaction');
      const data = await response.json();
      setData(data);

    }
    fetchData();

  }, []);

  console.log(data);

  return (
    <div>
    </div>


  )
}

export default TestAPI01;




