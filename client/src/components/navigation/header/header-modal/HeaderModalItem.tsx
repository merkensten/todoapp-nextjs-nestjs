import Link from 'next/link';

// styles
import styles from '../../../../styles/components/navigation/Header.module.scss';

type NavbarItem = {
  name: string;
  link: string;
};

type Props = {
  navItem: NavbarItem;
  onCloseModal: () => void;
};

export const HeaderModalItem = ({ navItem, onCloseModal }: Props) => {
  const { link, name } = navItem;
  return (
    <li className={styles.list_item}>
      <Link href={link}>
        <a onClick={onCloseModal}>{name}</a>
      </Link>
    </li>
  );
};
