import React, { useState } from "react";
import styles from './style.module.scss'; // Import SCSS styles for classNames
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Pay = () => {
    const bankLogos = {
        bank1: 'https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-bank-icon-png-image_708538.jpg',
        bank2: 'https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-bank-icon-png-image_708538.jpg',
        bank3: 'https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-bank-icon-png-image_708538.jpg',
        bank4: 'https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-bank-icon-png-image_708538.jpg',
        bank5: 'https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-bank-icon-png-image_708538.jpg',
        bank6: 'https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-bank-icon-png-image_708538.jpg',
        // Add more banks as needed
    };
    // Define state variables for input values and payment method
    const [coin, setCoin] = useState("");
    const [numberOfCoins, setNumberOfCoins] = useState("");
    const [numberOfInternationalCoins, setNumberOfInternationalCoins] = useState("");

    return (
        <div className={cx("pay-page")}>
            
            <div className={cx("bank-selection")}>
                <label>Select Domestic Bank:</label>
                <div className={cx("bank-items")}>
                    {Object.keys(bankLogos).map((bankName, index) => (
                        <div key={index}>
                            <img src={bankLogos[bankName]} alt={bankName} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={cx("bank-selection")}>
                <label>Select International Bank:</label>
                <div className={cx("bank-items")}>
                    {Object.keys(bankLogos).map((bankName, index) => (
                        <div key={index}>
                            <img src={bankLogos[bankName]} alt={bankName} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Pay;