import Notification from './dashboard_screens/notf'
import Message from './dashboard_screens/message'
import { Route, Routes } from 'react-router-dom'

export default function Dashboard(){
    return(
       <>
        <h1>Dashboard</h1>
        <div>
            
        </div>
        <Routes>
            <Route path='message' element={<Message/>} />
            <Route path='notification' element={<Notification/>} />
        </Routes>
        </>
    );
}