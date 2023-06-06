import React, { type ChangeEvent } from 'react'
import styles from './CustomInput.module.scss';

interface ICustomInputProps {
  type: string;
  value?: string;
  placeholder?: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CustomInput = ({ type, value, placeholder, onChange, name }: ICustomInputProps) => {
  return (
    <>
      <input
        className={styles['popup-ticket__input']}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange} />
    </>
  )
}
