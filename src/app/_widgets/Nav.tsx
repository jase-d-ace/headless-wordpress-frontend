export default function Nav () {
    const routes = ["home", "about", "location", "contact", "menu", "blog"];
    return (
        <ul>
            <li>
                {routes.map(route => <a href={route == "home" ? "/" : route}>{route} | </a>)}
            </li>
        </ul>
    )
}