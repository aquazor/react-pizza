import './SectionHeading.scss';
import classNames from 'classnames';

const SectionHeading = ({ title, icon, className, children, ...rest }) => {
  const finalClassName = classNames(className, 'section__heading');

  return (
    <div className={finalClassName} {...rest}>
      <h2 className="flex__center">
        {icon}
        {title}
      </h2>
      {children}
    </div>
  );
};

export default SectionHeading;
