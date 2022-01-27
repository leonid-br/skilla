import Icon from '../Icon';
import st from './Button.module.css';

const Button = ({ text, logoName }) => {
    const addStyle =
        logoName === 'exclamation-poin' ? st.poin : st.plus;

    const addStyleBtn =
        logoName === 'exclamation-poin'
            ? st.poinBtn
            : st.plusBtn;
    return (
        <>
            <button
                type="button"
                className={[st.btn, addStyleBtn].join(' ')}
            >
                {text}
                <Icon
                    name={logoName}
                    className={[st.icon, addStyle].join(' ')}
                />
            </button>
        </>
    );
};

export default Button;
