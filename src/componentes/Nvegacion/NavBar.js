

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Pagina de Prueba</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Contacto">Contacto</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/Nosotros">Nosotros</a>
          </li>
        </ul>
        <span class="navbar-text">
          Texto con un elemento en línea
        </span>
      </div>
    </div>
  </nav>

  )
}

export default NavBar