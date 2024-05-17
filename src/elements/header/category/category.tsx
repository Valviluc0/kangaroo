import styles from "./category.module.scss";
export default function Category() {
  return (
    <button className={styles.button + ' ' + 'btn-reset'} type='button'>
      <svg
        width={20}
        height={20}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#a)' stroke='#fff' strokeWidth='1.5'>
          <path d='m15.625 13.125 2.5 2.5M0 4.375h5m-5 5h3.75m-3.75 5h5' />
          <circle cx='11.875' cy='9.375' r='4.875' />
        </g>
        <defs>
          <clipPath id='a'>
            <path fill='#fff' d='M0 0h18.75v17.5H0z' />
          </clipPath>
        </defs>
      </svg>
      <span>Все категории</span>
    </button>
  );
}
