import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (<section class="statistics">
    {title && <h2 class="title">{title}</h2>}
    <ul class="stat-list">{
      stats.map((stat) => (
        <li class="stat" key={stat.id}>
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>))
    }
    </ul>
  </section>);
};

Statistics.propTypes = PropTypes.shape({
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
}); 