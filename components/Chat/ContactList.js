import React from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

const cx = classNames.bind(styles);

function ContactList({ contacts, handleContactClick, contactSelected }) {
    return (
        <div className={cx("contact-list")}>
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    onClick={() => handleContactClick(contact)}
                    className={cx(
                        'contact', // Default class when the condition is not met
                        { 'selected-contact': contactSelected && contact.id === contactSelected.id }
                    )}                >
                    {contact.name}
                </div>
            ))}
        </div>
    );
}

export default ContactList;
