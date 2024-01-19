import classNames from 'classnames';

const Button = ({ className, disabled, children, ...rest }) => {
  const finalClassName = classNames(className, 'flex__center');

  return (
    <button className={finalClassName} disabled={disabled} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
