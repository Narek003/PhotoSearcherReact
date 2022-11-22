import { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';
import ShowResults from './components/ShowResults';

function App() {
  const [data, setData] = useState([])

  const getData = text => {
    if(text){
      const url = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=${text}&per_page=24&format=json&nojsoncallback=1`
      
      fetch(url)
      .then(data => data.json())
      .then(result => {
        const photos = result.photos.photo
        if(photos.length){
          setData(photos.map(photo => {
            return (
              <div className='item' key={photo.id}>
                <img src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} alt='JustPhoto'/>
              </div>
              )
          }))
        }else{
          setData([<h1 key={Math.random()}>No results</h1>])
        }
      })
    }
  }

  return(
    <div className='App'>
      <SearchForm gotToSearch={getData}/>
      {data.length?<ShowResults data={data}/>:null}
    </div>
  )
}

export default App;
