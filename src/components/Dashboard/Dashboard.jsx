import { Link } from "react-router-dom"

const Dashboard = () => {
    return (
        <div>
            <Link to='/dashboard/profile'>Profile</Link>
            <Link to='/dashboard/create-donation-request'>Create donation</Link>
        </div>
    )
}
export default Dashboard