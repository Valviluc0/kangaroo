import { useState } from 'react';
import Link from '../link/link';
import { MENU } from './menu.data';
import styles from './menu.module.scss'

export default function Menu() {
  const [condition, setCondition] = useState(false);

  const handleClick = () => {
    setCondition(!condition);
  };

  const linkSvg = (
    <svg width={14} height={14} fill='currentColor' viewBox='0 0 24 24'>
      <path d='M12 10.4142L16.2929 14.7071C16.6834 15.0976 17.3166 15.0976 17.7071 14.7071C18.0976 14.3166 18.0976 13.6834 17.7071 13.2929L12.7071 8.29289C12.3166 7.90237 11.6834 7.90237 11.2929 8.29289L6.29289 13.2929C5.90237 13.6834 5.90237 14.3166 6.29289 14.7071C6.68342 15.0976 7.31658 15.0976 7.70711 14.7071L12 10.4142Z' />
    </svg>
  );

  return (
    <nav className={styles.menu}>
      <ul className={styles.list + ' list-reset'}>
        {MENU.map((item) => (
            <li className={styles.item} key={item.id}>
                <Link linkText={item.text} linkUrl={item.url} />
            </li>
        ))}
        <li className={styles.menu + ' dropdown-item'} onClick={handleClick}>
          <Link linkText='Каталоги' linkUrl='#' after={linkSvg} />
          <div className={`dropdown ${condition ? 'is-visible' : ''}`}>
            <Link linkText='Каталог автомобилей' linkUrl='#' />
          </div>
        </li>
        <li className={styles.item}>
          <Link linkText='Польза' linkUrl='#' />
        </li>
      </ul>
      <ul className={styles.list + ' list-reset header-special-list'}>
        <li className={styles.item}>
          <a href='#' className={styles.link}>
            <svg
              width={24}
              height={24}
              fill='currentColor'
              role='img'
              aria-hidden='true'
              data-icon='favorites-filled'
              viewBox='0 0 24 24'
            >
              <path d='M7.71 3c1.78 0 3.34.87 4.29 2.21A5.22 5.22 0 0 1 16.29 3a5.73 5.73 0 0 1 4.1 9.73l-7.72 7.61a.95.95 0 0 1-1.34 0l-7.72-7.62A5.73 5.73 0 0 1 7.71 3Z' />
            </svg>
          </a>
          <a href='#' className={styles.link}>
            <svg
              fill='currentColor'
              width={24}
              height={24}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M12 3a6.63 6.63 0 0 0-6.63 6.63v6.63L3 17.21v.95c0 1.04.85 1.9 1.9 1.9h4.73a2.37 2.37 0 1 0 4.74 0h4.74a1.9 1.9 0 0 0 1.89-1.9v-.95l-2.37-.95V9.63A6.63 6.63 0 0 0 12 3Z' />
            </svg>
          </a>
          <a href='#' className={styles.link}>
            <svg
              fill='currentColor'
              width={24}
              height={24}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <path d='M2.5 8v6a4 4 0 0 0 4 4h.19l-.42 2.54a.95.95 0 0 0 1.52.91L11.87 18h5.63a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4h-11a4 4 0 0 0-4 4Z' />
            </svg>
          </a>
          <a href='#' className={styles.link}>
            <svg
              width={24}
              height={24}
              fill='currentColor'
              role='img'
              aria-hidden='true'
              data-icon='cart'
              viewBox='0 0 24 24'
              name='cart'
              className='desktop-1gzlbya'
            >
              <path d='M1.69 1.55a1 1 0 0 1 1.26.64l.948 2.91H20.5a1 1 0 0 1 .973 1.23l-2.167 9.139a1 1 0 0 1-.882.765L6.591 17.317a1 1 0 0 1-1.042-.686L1.05 2.81a1 1 0 0 1 .641-1.26ZM8 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM19 21a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z' />
            </svg>
          </a>
        </li>
        <li className={styles.item}>
          <Link linkText='Вход и регистрация' linkUrl='#' />
        </li>
        <li className={styles.item}>
          <a href='#' className={styles.link + ' special-link'}>
            Разместить объявление
          </a>
        </li>
      </ul>
    </nav>
  );
}
