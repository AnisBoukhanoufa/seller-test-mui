import { t } from 'i18next';

const StatusCell = ({ status, language = 'en' }) => {
  return (
    <span className={`cellWithStatus ${t(status, { lng: language })}`}>
      {t(status)}
    </span>
  );
};

export default StatusCell;