import classNames from 'classnames';

const Button = ({ className, children, ...rest }) => {
  const finalClassName = classNames(className, 'flex__center');

  return (
    <button className={finalClassName} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
