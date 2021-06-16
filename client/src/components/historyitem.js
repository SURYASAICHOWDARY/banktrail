import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({
    history:{
        sender,
        receiver,
        amount
    }
}) => {
    return (
        <tbody>
        <tr>
        <td>{sender}</td>
        <td>{receiver} </td>
        <td>{amount} </td>
        </tr>
        </tbody>
    )
}

HistoryItem.propTypes = {
    history: PropTypes.object.isRequired
};


export default HistoryItem;
