import styles from './ContactMe.module.scss';
import { IconAddressBook } from '@tabler/icons-react';
import Button from '../Button';

const ContactMe = () => {
  return (
    <Button type="filled" className={styles.contactMe}>
      <IconAddressBook />
      Contact Me
    </Button>
  );
};

export default ContactMe;
