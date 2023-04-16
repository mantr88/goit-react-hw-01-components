import PropTypes from 'prop-types';
import { Table, TableHead, TableBody } from './TransactionHistory.styled';

export const TransactionHistory = ({items}) => {
    return (
        <Table>
        <thead>
            <tr>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Currency</TableHead>
            </tr>
        </thead>

        <tbody>
            {items.map((item) => (
            <tr key={item.id}>
                <TableBody type={item.type}>{item.type}</TableBody>
                <TableBody type={item.type}>{item.amount}</TableBody>
                <TableBody type={item.type}>{item.currency}</TableBody>
            </tr> 
            ))
        }
        </tbody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired
    ).isRequired
};