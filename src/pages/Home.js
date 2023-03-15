
import showsData from  '../shows-data'
import ShowList from '../components/ShowList';

function Home() {
return (
    <div className="HomePage">
        <h1>The Best TV Shows App by me</h1>
        <ShowList shows={showsData} />
    </div>
  
)



}
export default Home