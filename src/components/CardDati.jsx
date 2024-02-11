import { useState } from 'react'

function CardDati({addDati}) {
    
    const [formData, setFormData] = useState({
        nome: "",
        cognome: "",
        codiceFiscale: "",
        città: "",
        stato: "",
        via: "",
        isVisited: false,
    })

    const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
        const inputValue = type == "checkbox" ? checked : value
        setFormData({
            ...formData,
            [name]: inputValue})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const dato = {
            id: Math.floor(Math.random()),
            nome: formData.nome,
            cognome: formData.cognome,
            codiceFiscale: formData.codiceFiscale,
            città: formData.città,
            stato: formData.stato,
            via: formData.via,
            isVisited: formData.isVisited,
        }
        addDati(dato);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg">
            <div className='flex flex-col'>
                <label>Nome</label>
                <input type="text" name='nome'
                value={formData.name} 
                onChange={handleInputChange}></input>
            </div>
            <div className='flex flex-col'>
                <label>Cognome</label>
                <input type="text" name='cognome'
                value={formData.cognome} 
                onChange={handleInputChange}></input>
            </div>
            <div className='flex flex-col'>
                <label>Codice Fiscale</label>
                <input type="text" name='codiceFiscale'
                value={formData.codiceFiscale} 
                onChange={handleInputChange}></input>
            </div>
            <div className='flex flex-col'>
                <label>Città</label>
                <input type="text" name='città'
                value={formData.città} 
                onChange={handleInputChange}></input>
            </div>
            <div className='flex flex-col'>
                <label>Stato</label>
                <input type="text" name='stato'
                value={formData.stato} 
                onChange={handleInputChange}></input>
            </div>
            <div className='flex flex-col'>
                <label>via</label>
                <input type="text" name='via'
                value={formData.via} 
                onChange={handleInputChange}></input>
            </div>
            <div className='flex flex-col'>
                <label>Il Paziente è stato mai visitato?</label>
                <input type="checkbox" name='isVisited'
                checked={formData.isVisited} 
                onChange={handleInputChange}></input>
            </div>
            <button className="bg-slate-600" type='submit'>Aggiungi Paziente al database</button>
        </form>
    )
}

export default CardDati;