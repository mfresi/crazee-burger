import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div>
        <div>ErrorPage</div>
        <Link to="/">
            <button>Retournez vers la page d'accueil</button>
        </Link>
    </div>
  )
}
