import React from 'react'
interface Props{
    children: string;
        color?: 'primary' | 'secondary'|'danger'| 'warning'|'success' | 'light'|'dark'|'link';
    onClick: () => void;

}

const BootstrapButton = ({children,onClick,color='primary'}: Props) => {
  return (
    <button type="button" onClick={onClick} className={'btn btn-' + color}>{children}</button>
  )
}

export default BootstrapButton