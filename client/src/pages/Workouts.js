import { useQuery } from "@apollo/client";
import {QUERY_CURRENT_USER} from '../utils/queries'

const Workouts = () => {
    const {loading,data} = useQuery(QUERY_CURRENT_USER);
    console.log(data);
    const user = (data?.currentUser)

    return (
        <>
        <h1>Workouts</h1>
        {
            loading ? 
            <>
            <h2>Loading...</h2>
            </>
            :
            <>
            <h2>{user.username}</h2>
            <h3>{user.workouts[0].name}</h3>
            
            </>
        }
        </>
    );
}

export default Workouts;