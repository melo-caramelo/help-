function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}


ready(() => {
  document.getElementById("sub").addEventListener("click", (ev) => {
      ev.preventDefault();
      document.getElementsByName("genero").forEach(
          (item, key) => { 
              //console.log(item.value, item.checked);
              if (item.checked) {
                  if (item.value == "feminino") {
                      document.location = "/pages/helped.html"
                  } else if (item.value == "masculino") {
                      document.location = "/pages/help.html"
                  } 
              }
          }
      );
  });
});