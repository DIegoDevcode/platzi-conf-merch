import React from 'react';
import '../Styles/components/Information.css'

const Information = () => {
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informacion de contacto</h2>
                </div>
                <div className="Information-form">
                    <form action="">
                        <input type="Text" placeholder='Nombre completo' name='name' />
                        <input type="Text" placeholder='Correo electronico' name='email' />
                        <input type="Text" placeholder='Direccion' name='addres' />
                        <input type="Text" placeholder='Apto' name='apto' />
                        <input type="Text" placeholder='Ciudad' name='city' />
                        <input type="text" placeholder="Pais" name="country" />
                        <input type="text" placeholder="Estado" name="state" />
                        <input type="text" placeholder="Codigo postal" name="cp" />
            <           input type="text" placeholder="Telefono" name="phone" />
                    </form>
                </div>
                <div className="information-buttons">
                    <div className='Information-back'>
                        Regresar 
                    </div>
                    <div className="information-next">
                        pagar
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <div className="Information-element">
                    <h4>ITEM Name </h4>
                    <span>$18</span>
                </div>
            </div>
        </div>
        );
}

export default Information;