'use client'
import { MENU } from "./menu.data";
import styles from "./dropdown.module.scss";
import Image from 'next/image.js';

interface DropdownProps {
  condition: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({ condition }) => {
  if (condition == true){
    var dropdownCondition = "";
  } else{
    var dropdownCondition = " is-hidden";
  }
  return (
    <div className={`${styles.dropdown} ${dropdownCondition}`}>
      <ul className={styles.list + ' list-reset'}>
        {MENU.map((item) => (
          <li className={styles.item} key={item.id}>
          <a href={item.url} className={styles.link}>
            <Image loading='lazy' src={item.icon} className='image' width={20} height={20} alt={item.text} />
            <span>{item.text}</span>
          </a>
        </li>
        ))}
      </ul>
    </div>
  );
}

export default Dropdown;