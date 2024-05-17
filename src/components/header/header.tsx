'use client';
import React, { useState } from 'react';
import './header.scss';
import Link from '../../elements/header/link/link';
import Logo from '@/elements/logo/logo';
import Category from '@/elements/header/category/category';
import Dropdown from '@/elements/header/dropdown/dropdown';
import Menu from '@/elements/header/menu/menu';

export default function Header() {
  const [condition, setCondition] = useState(false);

  const handleClick = () => {
    setCondition(!condition);
  };
  const props = {
    xlinkHref: '#someId',
  };

  return (
    <header className='header'>
      <div className='header__wrapper'>
        <div className='header__top'>
          <div className='container header__top-inner'>
            <Menu />
          </div>
        </div>
        <div className='header__bottom'>
          <div className='container header__bottom-inner'>
            <Logo />
            <div className='header__search'>
              <Category />
              <div className='header__search-content'>
                <input
                  className='input-reset header__search-input'
                  type='search'
                  name='search'
                  id='search'
                  placeholder='Поиск по объявлениям'
                  onClick={handleClick}
                />
                <button className='btn-reset header__search-btn' type='button'>
                  Найти
                </button>
                <Dropdown condition={condition ? true : false} />
              </div>
            </div>
            <button className='header__region btn-reset' type='button'>
              <svg width={16} height={16} fill='none' xmlns='http://www.w3.org/2000/svg'>
                <circle
                  cx='7.999'
                  cy='6.8'
                  stroke='currentColor'
                  strokeWidth='1.2'
                  r='1.8'
                />
                <path
                  d='m8.002 14.998-.452.395a.6.6 0 0 0 .903 0l-.451-.395Zm-4.196-4.8-.466.378.014.017.452-.395Zm8.396 0 .451.396a.587.587 0 0 0 .014-.018l-.465-.378Zm-9-3.4a4.8 4.8 0 0 1 4.8-4.8v-1.2a6 6 0 0 0-6 6h1.2Zm4.8-4.8a4.8 4.8 0 0 1 4.8 4.8h1.2a6 6 0 0 0-6-6v1.2Zm.451 12.606-4.195-4.8-.904.79 4.196 4.8.903-.79Zm3.297-4.8-4.2 4.8.903.79 4.2-4.8-.903-.79Zm1.052-3.006a4.774 4.774 0 0 1-1.066 3.022l.931.756a5.974 5.974 0 0 0 1.335-3.778h-1.2ZM4.272 9.82a4.778 4.778 0 0 1-1.07-3.022h-1.2c0 1.432.501 2.747 1.338 3.778l.932-.756Z'
                  fill='currentColor'
                />
              </svg>
              <span>Во всех регионах</span>
            </button>
          </div>
        </div>
      </div>
      <div
        onClick={handleClick}
        className={`header__dropdown-wrapper ${condition ? '' : 'is-hidden'}`}
      />
    </header>
  );
}
