import {useParams} from 'react-router-dom'

export default function Member() {   
    const {name}  = useParams()

    return <div className="container">
        wellcome  {name} 
    </div>
}