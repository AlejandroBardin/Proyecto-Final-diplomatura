import "../styles/ContactoPage.css"
import {useState} from 'react';
import axios from 'axios';

const ContactoPage =(props) => {

    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:'',
    }

     const [sending,setSending] = useState(false);
     const [msg, setMsg] = useState('');
     const [formData, setFormData] = useState(initialForm);

     const handleChange = e => {
        const { name, value} =e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinam

        }));
     }

     const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
     }
    





    return (
         <div>
            <div>
        <h2>Contacto Rápido</h2>
        <form action="/contacto" method="post" class="formulario" onSubmit={handleSubmit} >
            <p>
                <label for="nombre">Nombre </label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/> 
            </p>

            <p>
                <label for="email">Email </label>
                <input type="text" name="email" value={formData.email} onChange={handleChange}/> 
            </p>

            <p>
                <label for="teléfono">Teléfono </label>
                <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/> 
            </p>

            <p>
                <label for="mensaje">Mensaje </label>
                <input type="text" name="mensaje" value={formData.mensaje} onChange={handleChange}/> 
            </p>

            {sending ? <p>Enviando...</p> : null}
            {msg ? <p>{msg}</p> : null}

            <p>
                <input type="Submit" value="Enviar"/>
            </p>

        </form>
    </div>


    <div class="datos">
        <h2>Otras vias de comunicación</h2>
        <p>También puede contartarse con nosotros usando los siguientes medios</p>
            <ul>
                <li> Teléfono: 43243288</li>
                <li> Email: Contacto@xd.com</li>
                <li> Face</li>
                <li> Twitter</li>

            </ul>
    </div>






         </div>
    );
}

export default ContactoPage;