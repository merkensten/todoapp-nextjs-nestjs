import React from 'react';
import { useRouter } from 'next/router';
import { HeaderModalItem } from './HeaderModalItem';
import { XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

import styles from '../../../../styles/components/navigation/HeaderModal.module.scss';

type NavbarItem = {
  name: string;
  link: string;
};

type Props = {
  onCloseModal: () => void;
  navbarItems: NavbarItem[];
};

function HeaderModal({ onCloseModal, navbarItems }: Props) {
  const router = useRouter();
  return (
    <div
      className={`${styles.header_modal_container}`}
      style={{ overflow: 'hidden' }}
    >
      <div className={`${styles.header_modal_wrapper}`}>
        <div className={`${styles.header_modal_top_section}`}>
          <Link href="/">
            <a className={styles.logo} onClick={onCloseModal}>
              Todo app.
            </a>
          </Link>
          <XCircleIcon onClick={onCloseModal} className={styles.closeIcon} />
        </div>
        <nav>
          <ul className={styles.list_container}>
            {navbarItems.map((item) => {
              return (
                <HeaderModalItem
                  key={item.link}
                  navItem={item}
                  onCloseModal={onCloseModal}
                />
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default HeaderModal;
