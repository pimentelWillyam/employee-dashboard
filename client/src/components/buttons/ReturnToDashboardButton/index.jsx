import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default function ReturnToDashboardButton(){
    return (
        <Link to ='/'><Button variant="warning">Return</Button></Link>
    )
}