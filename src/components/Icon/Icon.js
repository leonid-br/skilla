import IconsSVG from './sprite.svg';

const Icon = ({ name, className }) => {
    return (
        <svg className={className}>
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    );
};

export default Icon;
