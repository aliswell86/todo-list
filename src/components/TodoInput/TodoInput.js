import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {
  return (
    <div className={cx('todo-input')}>
      <input value={value} onChange={onChange} />
      <div className={cx('add-button')} onClick={onInsert}>추가</div>
    </div>
  )
}

export default TodoInput;
