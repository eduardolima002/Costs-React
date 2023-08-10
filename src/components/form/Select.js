import styles from './Select.module.css'
import Option from './Option'

function Select({ name, text, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção:</option>
                {options.map((el) => (
                    <Option key={el.id} value={el.id} name={el.name}/>
                ))}
            </select>
        </div>
    )
}

export default Select;