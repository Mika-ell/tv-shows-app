import Show from './Show'

function ShowList(props) {

return(

props.shows.map( x=> <Show key={x.id} showObject={x} /> )

)
}

export default ShowList