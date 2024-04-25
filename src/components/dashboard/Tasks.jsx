import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Tasks({ tasks }) {
  return (
    <div>
      <h3>Tasks</h3>
      <h6>Complete tasks to earn more $PLT</h6>

      <div className="social-activities">
        <div className="activities">
          {tasks.map((task, i) => (
            <div key={i++} className="activity-card mt-4">
              <div className="activity-point">
                <h3>{task.reward}</h3>
                <h6>$PLT</h6>
              </div>
              <div className="activity-content">
                <div>
                  <h3>{task.title}</h3>
                  <p>{task.info}</p>
                </div>
                <div className="airdrop-link">
                  <Link
                    className="dashboard-btn airdrop-btn"
                    target="_blank"
                    to={task.link}
                  >
                    Go
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      reward: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Tasks;
