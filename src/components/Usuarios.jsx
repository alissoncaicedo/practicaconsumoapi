import { useState, useEffect } from "react"

 const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([])
  const mostrarusuarios = async() => { 
    await fetch('https://jsonplaceholder.typicode.com/users')// es como una promesa el va a extraer informacion de un url
    .then((res) =>res.json())
    .then ((data)=>setUsuarios(data))
    .catch((err)=>{
      console.log (err)
    })
    console.log(usuarios);
  }
  useEffect (()=>{
    mostrarusuarios()
  }, [])

  
  return (
    <section>
      {
        usuarios.map((usuario)=>(
          <section key={usuario.id} className="contenedor">
            <h1 className="nombre">{usuario.name}</h1>
            <section className="caja1">
              <p>{usuario.username}</p>
              <p>{usuario.email}</p>
            </section>
            <section className="caja2">
              <p>{usuario.address.street}</p>
              <p>{usuario.address.suite}</p>
              <p>{usuario.address.city}</p>
              <p>{usuario.address.zipcode}</p>
            </section>
            <section className="caja3">
              <p>{usuario.address.geo.lat}</p>
              <p>{usuario.address.geo.lng}</p>
            </section>
            


          </section>

        ))
      }
    </section>
    
  )
}
export default Usuarios