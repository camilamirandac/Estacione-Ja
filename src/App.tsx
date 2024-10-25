import { FC, useState } from 'react'
import './App.css'
//@ts-expect-error typing missing
import logoimg from './assets/logo.png'

// Embed map helper: https://embedmap.org

const parkingList = [
    { "name": "Estacionamento Central Park", "price": 12, "address": "Rua Haddock Lobo, 123 - Jardins, São Paulo, SP" },
    { "name": "Garagem do Pátio", "price": 18.50, "address": "Av. Paulista, 456 - Bela Vista, São Paulo, SP" },
    { "name": "Estacionamento Alpha", "price": 10, "address": "Rua Augusta, 789 - Consolação, São Paulo, SP" },
    { "name": "Estacionamento Rápido", "price": 11, "address": "Rua 25 de Março, 303 - Centro, São Paulo, SP" },
    { "name": "Garagem Econômica", "price": 8, "address": "Rua da Consolação, 404 - Higienópolis, São Paulo, SP" },
]

function App() {
  const initialAddress = 'Av Paulista, São Paulo';
  const [address, setAddress] = useState(initialAddress);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="row align-items-center shadow-sm p-3 mb-5" style={{backgroundColor:'#F7F7F7'}}>
            <div className="col d-inline-flex gap-3">
              <img src={logoimg} style={{width:50,height:50}}/>
              <h2 className='mt-1'>Estacione Já</h2>
            </div>
            <div className="col text-end">
              <a href='https://forms.gle/pLzC6oXsvQMSwThb6' target='_blank' className="btn btn-primary">Contribua</a>
            </div>
          </div>
          <h2>Lista de estacionamentos</h2>
          <ul className="list-group">
            {parkingList.map((parking) => {
              const bg = parking.address === address ? '#F7F7F7' : undefined;

              return (
                <li className="list-group-item" style={{backgroundColor: bg}}>
                  <div><h5>{parking.name}</h5></div>
                  <div>Preço: R$ {parking.price.toFixed(2)}</div>
                  <div>Endereço: <a onClick={() => setAddress(parking.address)} href='#'>{parking.address}</a></div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col-md-6 p-0 border-start border-3">
          <div>
            <ParkingMap
              address={address}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const ParkingMap: FC<{address: string}> = (props) => {
  return (
    <div className='iframe-container' style={{height: window.innerHeight}}>
      <iframe 
        className='responsive-iframe'
        src={`https://maps.google.com/maps?hl=en&q=${props.address}&t=&z=12&ie=UTF8&iwloc=B&output=embed`}
      />
      <script type='text/javascript' defer src="https://embedmaps.com/google-maps-authorization/script.js?id=05d9143c3ab1a3eb288cd935340fa2fb0256af19"></script>
    </div>
  );
}

export default App
