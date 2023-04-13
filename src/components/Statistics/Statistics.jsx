import PropTypes from 'prop-types';
import { TitleStats, Container, StatsList } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <Container>
    {title && <TitleStats>{title}</TitleStats>}
    <StatsList>{
      stats.map((stat) => (
        <li key={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </li>))
    }
    </StatsList>
  </Container>);
};

// Statistics.propTypes = PropTypes.shape({
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(PropTypes.shape({
//     label: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//   }))
// }); 