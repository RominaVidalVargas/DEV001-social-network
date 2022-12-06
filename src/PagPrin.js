export function pagPrincipal() {
  const $h1 = document.createElement('h1');
  $h1.innerHTML = `
<header class="encabezadoPag">
<img src="imagenes/logo.png" class="logo">
<p class="frase">El mundo de tu Mascota</p>
</div>
</header>`;
  return $h1;
}

/* <section class="pagPrincipal" id="pagPrincipal">
  <header class="encabezadoPag">
    <img src="imagenes/logo.png" class="logo">
    <p class="frase">El mundo de tu Mascota</p>
    </div>
  </header>
  <nav class="menuNav">
    <input type="button" class="home" id="home" value="Home">
    <input type="button" class="adopcion" id="adopcion" value="Adopción">
    <input type="button" class="perfil" id="perfil" value="Perfil">
    </div>
  </nav>
  <main class="cuerpo" id="cuerpo">
    <button type="button" class="publicar" id="publicar"> Publicar</button>
    <div class="modalPublicar" id="modalPublicar">
      <input type="text" class="publicacion" placeholder="Escribe aquí" />
      <div><button type="button" class="publicar2" id="publicar2"> Publicar</button></div>
    </div>
    <div class="modalCierre" id="modalCierre">
      <img src="imagenes/descarga-removebg-preview (1).png" class="cierre"/><br>
      <button type="button" class="editar" id="editar"> Editar Perfil</button><br>
      <button type="button" class="cerrar" id="cerrar"> Cerrar Sesión</button>
    </div>
*/
