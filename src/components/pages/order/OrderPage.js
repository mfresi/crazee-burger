import { Link, useParams } from "react-router-dom"

export default function OrderPage() {

  const {user} = useParams()
  
  return (
    <div>
    <div>Bienvenue {user} !</div>
    <Link to="/">
        <button>Déconnexion</button>
    </Link>
    </div>
  )
}
