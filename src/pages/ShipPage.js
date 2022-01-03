import { useParams } from "react-router";
import ShipProfile from '../components/shipProfile/ShipProfile';


const ShipPage = ({ list }) => {

    let { id } = useParams();

    return (
        <ShipProfile id={id} list={list}>{id}</ShipProfile>
    )
}

export default ShipPage;