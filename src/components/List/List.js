import './List.css';

//classList: ['']
const List = ( {classList} ) => {

  return (
    <div>
      <ul className={classList.join(' ')} >
        <li>Eggs</li>
        <li>Tomatoes</li>
        <li>Avacado</li>
      </ul>
    </div> 
  );
}



export default List;