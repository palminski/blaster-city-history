import { useQuery } from "@apollo/client";
import {QUERY_CURRENT_USER} from '../utils/queries';
import {useState} from 'react';

const Workouts = () => {
    const {loading,data} = useQuery(QUERY_CURRENT_USER);
    const user = (data?.currentUser)
    
    const [selectedWorkoutIndex, setSelectedWorkoutIndex] = useState("none")

    const handleSelectChange = (e) => {
        console.log(e.target.value);
    }

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
                        {user.workouts && 
                        <>
                        <h2>{user.workouts.length}</h2>
                        

                        <label htmlFor="workouts">Select a Workout: </label>
                        <select name="workouts" onChange={handleSelectChange}>
                            {user.workouts && user.workouts.map(workout => (
                                <option key={workout._id} value={workout._id}>{workout.name}</option>
                            ))}
                        </select>
                        {selectedWorkoutIndex !== "none" ?
                        <>
                        </>
                        :
                        <>
                        <h3>Select a workout above!</h3>
                        </>
                        }
                        </>
                        }

                    </>
            }
        </>
    );
}

export default Workouts;