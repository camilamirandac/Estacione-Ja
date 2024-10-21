import { FC, useState } from 'react'
import './App.css'
import logoimg from './assets/logo.png'

// Embed map helper: https://embedmap.org

const parkingList = [
  {name: 'Ana', price:20, address:'Av. Paulista, 1927'},
  {name: 'Ana', price:20, address:'Av. Paulista, 222'},
  {name: 'Ana', price:20, address:'Av. Paulista, 145'},
  {name: 'Ana', price:20, address:'Av. Paulista, 2305'},
  {name: 'Ana', price:20, address:'Av. Paulista, 6545'},
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
              <a href='https://google.com/' target='_blank' className="btn btn-primary">Contribua</a>
            </div>
          </div>
          <h2>Lista de estacionamentos</h2>
          <ul className="list-group">
            {parkingList.map((parking) => {
              const bg = parking.address === address ? '#F7F7F7' : undefined;

              return (
                <li className="list-group-item" style={{backgroundColor: bg}}>
                  <div><h5>{parking.name}</h5></div>
                  <div>Preço: R$ {parking.price}</div>
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
