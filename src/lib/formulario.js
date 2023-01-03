//para leer datos
export const Formulario = ()=>{ 
const writePublic = document.createElement('form');
writePublic.innerHTML= `<form id ="WritePubli">
<div class="col-75">
  <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>
</div>

<div class="row">
<input type="submit" value="Submit" id = "submit">
</div>
</form>`;
 
Formulario.append(writePublic, ContenPubli);
return Formulario;
}

export const Contenedor =()=>{
  const contenPublic = document.createElement('div');

contenPublic.innerHTML= `<div class="container" id="contenPost"></div>`;
Contenedor.append(contenPublic);
return Contenedor
}
