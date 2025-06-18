import React from 'react';
import styles from './ActivityCard.module.css';

const ActivityCard = ({ activity }) => {
  return (
    <div className={styles.card}>
      {/* ...existing card content... */}
      {activity.participants && activity.participants.length > 0 && (
        <div className={styles.participantsSection}>
          <h4 className={styles.participantsTitle}>Participants</h4>
          <ul className={styles.participantsList}>
            {activity.participants.map((p, idx) => (
              <li key={idx} className={styles.participantItem}>
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* ...existing code... */}
    </div>
  );
};

export default ActivityCard;