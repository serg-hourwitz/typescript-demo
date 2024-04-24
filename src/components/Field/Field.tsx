import React, { ChangeEvent } from 'react';

type TProps = {
  title: string;
  type?: string;
  name: string;
  value: string;
  placeholder?: string;
  error?: any;
  onChange: (e: ChangeEvent<any>) => void;
  onBlur: (e: ChangeEvent<any>) => void;
};

const Field: React.FC<TProps> = ({
  title,
  type = 'text',
  name,
  value,
  placeholder,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <label className='block'>
        {title && <div className='mb-5'>{title}</div>}
        <input
          className='h-4 pr-1 pl-1'
          type={type}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
        <div className='text-red-900 pt-0.5 h-25'>{error || ''}</div>
      </label>
    </>
  );
};

export default Field;


