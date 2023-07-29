import { useState } from 'react';

import './Form.css'
import TextField from '../TextField'
import Dropdown from '../Dropdown';
import Button from '../Button';

const Form = () => {
    const items = ['Front-end', 'Back-end', 'Full-stack', 'DevOps', 'Designer', 'Data Scientist', 'Mobile']

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [image, setImage] = useState('')

    const onSave = (event) => {
        event.preventDefault()
        console.log('Salvou!', name, role, image)
    }

    return (
        <section className='form'>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    value={name}
                    setValue={setName}
                />
                <TextField 
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    setValue={setRole}    
                />
                <TextField
                    label="Imagem"
                    placeholder="Digite sua imagem"
                    value={image}
                    setValue={setImage}
                />
                <Dropdown required={true} label="Time" items={items}/>
                <Button> Enviar </Button>
            </form>
        </section>
    )
}

export default Form;