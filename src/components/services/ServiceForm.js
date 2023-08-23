import styles from '../project/ProjectForm.module.css'

import { useState } from 'react';
import Input from '../form/Input';
import SubmitButton from '../form/SubmitButton';

function ServiceForm(handleSubmit, btnText, projectData) {
    function submit() {

    }

    function handleChange(e) {

    }

    return (

        <form onSubmit={submit} className={styles.form}>
            <Input
                type='text'
                text='Nome do serviço'
                name='name'
                placeholder='Insira o nome do Serviço'
                handleOnChange={handleChange} />
            <Input
                type='number'
                text='Valor do serviço'
                name='cost'
                placeholder='Insira o custo do serviço'
                handleOnChange={handleChange} />
            <Input
                type='text'
                text='Descrição do serviço'
                name='description'
                placeholder='Insira a descrição do Serviço'
                handleOnChange={handleChange}/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm;