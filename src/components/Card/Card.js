import './Card.css'


const Card = ( {} ) => {


  return (
    <div className='card-ct'>

      <div className='card-img '>
        <img src="https://produits.bienmanger.com/38345-0w470h470_Organic_Navelate_Oranges.jpg" 
        alt="some img"
        height='150px'>
        
        </img>
      </div>

      <div className='card-section'>

        <div className='card-title'>
          <span>Card Title</span>
        </div>

        <div className='card-detail'>
          <p>Here is some detail about this card.</p>
        </div>

        <div className='card-button-ct'>
          <button>Go Somewhere</button>
        </div>
      </div>

    </div>
  )

}

export default Card;