import { NotificationManager } from 'react-notifications';

const CreateNotifications = (types, message) => {
  switch (types) {
    case 'info':
      NotificationManager.info(message, 'Info', 3000);
      break;
    case 'success':
      NotificationManager.success(message, 'Success', 3000);
      break;
    case 'warning':
      NotificationManager.warning(message, 'Warning', 3000);
      break;
    case 'error':
      NotificationManager.error(message, 'Error!', 3000);
      break;
    default:
      NotificationManager.info('System error');
      break;
  }
};
export default CreateNotifications;
