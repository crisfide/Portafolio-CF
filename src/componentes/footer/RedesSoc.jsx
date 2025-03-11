
const RedesSoc = ({items}) => {
  //console.log(items)
  return (
    <ul>
      {
        items.map( ({txt, ruta}) => (
          <RedSocialItem txt={txt} ruta={ruta} key={ruta} />)
        )
      }
    </ul>
  )
}


const RedSocialItem = ({txt, ruta}) => {
  return (
    <li>
      <a href={ruta} target="_blank" rel="noopener noreferrer" title={txt}>{txt}</a>
    </li>
  )
}



export default RedesSoc
