import { Toaster, toast } from 'sonner'
import { useState } from 'react';
import { 
    SECRET_KEY,
    SITE_KEY,
    ENDPOINT,
    EMAIL
 } from 'astro:env/client';

export default function FormContact() {
    const [isSending, setIsSending] = useState(false);
    const resetForm = () => {
        document.getElementById('contactForm').reset();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const fields = Object.fromEntries(new FormData(event.target))
        
        fields.secret_key = SECRET_KEY;
        fields.addressee = EMAIL;
        fields.asunto = "Contacto desde la web - de: " + fields.name;
        if(!isSending){
            setIsSending(true);
            grecaptcha.ready(function() {
                grecaptcha.execute(SITE_KEY, { action: 'contacto' }).then(function(getToken) {
                    fields.token = getToken;
                    sendForm(fields);
                });
            });
        }
    }
    const sendForm = (fields) => {
        fetch (ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(fields),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            //console.log(response)
            if (!response.ok) {
                return response.json().then(err => {
                    throw err;
                });
            }
            return response.json()
        })
        .then(data => {
            //console.log(data)
            toast.success('Gracias por consultar, te responderemos a la brevedad')
            resetForm()
        })
        .catch(error => {
            //console.error(error)
            if (error.errors) {
                const formErrors = error.errors;
                for (let field in formErrors) {
                    if (formErrors.hasOwnProperty(field)) {
                        toast.warning(formErrors[field]);
                        break;
                    }
                }
            }else if(error.message){
                toast.error(error.message)
            }
            //toast.error('No se pudo enviar el mensaje vuelva a intentarlo más tarde.')
        })
        .finally(() => {
            setIsSending(false);
        })
    }
    return (
        <>
            <form
                data-aos="fade" data-aos-duration="1000" data-aos-delay="100"
                onSubmit={handleSubmit}
                method="post"
                id="contactForm"
                className="relative z-30 grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-light border border-primary shadow-sm lg:mb-28 sm:grid-cols-2 rounded-3xl"
            >
                <Toaster
                    richColors position="top-right" 
                    toastOptions={{
                        style: { marginTop: '100px' },
                    }}    
                />
                <div className="sm:col-span-2">
                    <label htmlFor="nombre" className="block mb-2 text-lg font-medium text-primary">Nombre *</label>
                    <input type="text" name="name"
                        className="rounded-xl block p-3 w-full text-lg text-primary placeholder:text-primary bg-gray-50 border border-primary shadow-sm focus:ring-2 focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Tu nombre"
                        required
                    />
                </div>
                <div>
                <label htmlFor="telefono" className="block mb-2 text-lg font-medium text-primary">Teléfono *</label>
                <input type="tel" name="phone"
                    className="rounded-xl block p-3 w-full text-lg text-primary placeholder:text-primary bg-gray-50 border border-primary shadow-sm focus:ring-2 focus:outline-none focus:ring-primary focus:border-primary"
                    placeholder="Tu teléfono"
                    required
                />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-lg font-medium text-primary">E-mail </label>
                    <input
                        type="email"
                        name="email"
                        className="rounded-xl shadow-sm bg-gray-50 border border-primary text-primary placeholder:text-primary text-lg focus:ring-2 focus:outline-none focus:ring-primary focus:border-primary block w-full p-2.5"
                        placeholder="Tu e-mail"
                    />
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="mensaje" className="block mb-2 text-lg font-medium text-primary">Mensaje *</label>
                    <textarea
                        name="message"
                        rows="6"
                        className="rounded-xl block p-2.5 w-full text-lg text-gray-950 placeholder:text-primary bg-gray-50 shadow-sm border border-primary focus:ring-2 focus:outline-none focus:ring-primary focus:border-primary"
                        placeholder="Tu mensaje"
                        required
                    ></textarea>
                </div>
                <div className="flex justify-center sm:col-span-2">
                    <button type="submit" disabled={isSending} className="shadow-md rounded-xl py-3 px-16 font-medium text-center text-primary border border-primary sm:w-fit hover:bg-primary hover:text-white focus:ring-2 focus:outline-none focus:ring-secondary">{isSending ? "Enviando..." : "Enviar" }</button>
                </div>
            </form>
        </>
    )
}