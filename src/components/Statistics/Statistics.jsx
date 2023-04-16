import PropTypes from 'prop-types';
import { TitleStats, Container, StatsList, StatsListItem } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <Container>
    {title && <TitleStats>{title}</TitleStats>}
    <StatsList>{
      stats.map(stat => (
        <StatsListItem key={stat.id} number={stat.id}>
          <span>{stat.label}</span>
          <span>{stat.percentage}%</span>
        </StatsListItem>))
    }
    </StatsList>
  </Container>);
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired
  )
};