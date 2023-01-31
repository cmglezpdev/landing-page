
import './contact.scss';


export const Contact = () => {

  return (
    <section className="contact" id='contact'>
      <h1 className="contact__title">Contacto</h1>
    
      <div className="contact__data">
        <p className="contact__data-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam dignissimos minima totam iure, corrupti officiis quam, saepe culpa obcaecati delectus placeat fuga et reiciendis, <a href='maito:example@email.com'>example@email.com</a> soluta quia eveniet! Aliquam, labore.
        </p>
        <form className='contact__data-inputs'>
          <div>
            <label htmlFor="name">Nombre completo</label>
            <input type="text" id="name" placeholder='Jhon Doe' />
          </div>

          <div>
            <label htmlFor="email">Correo Electrónico</label>
            <input type="email" name="email" placeholder='email@example.com' />
          </div>
          
          <div>
            <label htmlFor="text">Mensage</label>
            <textarea name="text" id="text" placeholder='Write your message here'></textarea>
          </div>
        </form>
      </div>
    </section>
  )
}
	