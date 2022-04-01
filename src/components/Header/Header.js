

const Header = ( {hSelection, content} ) => {

  let result;

switch (hSelection) {
  case 'h1':
    result = <h1>{content}</h1>
    break;
  case 'h2':
    result = <h2>{content}</h2>
    break;
  case 'h3':
    result = <h3>{content}</h3>
    break;
  case 'h4':
    result = <h4>{content}</h4>
    break;
  case 'h5':
    result = <h5>{content}</h5>
    break;
  case 'h6':
    result = <h6>{content}</h6>
    break;

  default:
    result = <h1>{content}</h1>
    break;
}

  return result;
}

export default Header;

