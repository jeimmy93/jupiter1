window.onload = function()
 {
 	inicio();
 }
 
 function inicio()
 {
 	/*
 	Tamaño/tomaño del sol = %
 	*/
 	function movimiento(path, obj, vel)
     {
        //console.log("Vel de: "  + obj + " es: " + vel);
        var pathLength = path.getTotalLength();
         var tween = new TWEEN.Tween({ length: 0  })
         .to({ length: pathLength }, vel)
         .onUpdate(function()
         {
             var point = path.getPointAtLength(this.length);
             obj.style.webkitTransform = 'translate('+ point.x + 'px,'+ point.y +'px)';
         }).repeat(999999999).start();
         animate = function()
         {
             requestAnimationFrame(animate)
             TWEEN.update()
        }
         animate();
     }
     var tamReal = false;
 	var creaPlanetas = function(objeto, planeta)
     {
         var tamanoPlaneta = planeta.tamano;
         //console.debug(objeto);
         if(tamReal)
         {
             //console.log("Ingresa");
             tamanoPlaneta = Math.round(eljupiter.tamano * (planeta.porcentaje / 100));
             //console.log(planeta.nombre + " = " + tamanoPlaneta);
         }
         objeto.style.width = tamanoPlaneta + "px";
         objeto.style.height = tamanoPlaneta + "px";
         objeto.style.backgroundImage = "url('jupiter/"+planeta.imagen+"')";
        objeto.style.backgroundSize = tamanoPlaneta + "px " + tamanoPlaneta + "px";
         var margen = (Math.round(tamanoPlaneta / 2)) * -1;
         objeto.style.marginTop = margen + "px";
         objeto.style.marginLeft = margen + "px";
        objeto.style.borderRadius = "50%";
         objeto.style.position = "absolute";
         //console.debug(objeto);
         //console.log("basePlaneta " + planeta.imagen);
         //objeto.style.border = "thick solid #FFF";
         //objeto.setAttribute("class", "basePlaneta " + planeta.imagen);
     }
 	var jupiter = [
                 {nombre: "io", 
                 imagen: "io.png",
                  porcentaje: 0.9,
                  tamano: 25 
                   },
                {nombre: "europa", 
                  imagen: "europa.png",
                  porcentaje: 0.9,
                  tamano: 20 
                 },
                 {nombre: "ganimedes", 
                  imagen: "ganimedes.png",
                  porcentaje: 0.9,
                  tamano: 20 
                 },
                 {nombre: "calisto", 
                  imagen: "calisto.png",
                  porcentaje: 0.5,
                  tamano: 15 
                 }];
    var objjupiter = nom_div('jupiter_svg');
     var eljupiter = {
         tamano: objjupiter.height.baseVal.value, 
         x : objjupiter.x.baseVal.value, 
         y : objjupiter.y.baseVal.value
     };
     var objeto = "";
     var ruta = "";
     var velInicia = 30000;
     for(var i = 1; i <= jupiter.length; i++)
     {
        objeto = nom_div("objeto_" + i);
        ruta = nom_div("ruta_" + i);
        creaPlanetas(objeto, jupiter[i - 1]);
        movimiento(ruta, objeto, velInicia);
        velInicia += 40000;
     }
     //console.log("Hola mundo");
     function nom_div(div)
     {
         return document.getElementById(div);
     }
 }