import showsData from "../shows-data"

function getShowByID(id) {
   return showsData.find( show => show.id == id )
}
export {getShowByID}