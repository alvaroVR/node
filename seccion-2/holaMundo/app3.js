console.log('Inicio del programa');

setTimeout(function () {
  console.log('Primer timeout')
}, 3000)

setTimeout(function () {
  console.log('Segundo timeout')
}, 0)

setTimeout(function () {
  console.log('Tercer timeout')
}, 0)

console.log('Fin del programa')


/*
Ciclo de vida de Node
Node ejecuta primero el proceso main()

Main contiene todo el codigo del js
Registra las funciones/procesos del codigo

Una vez que este registrado todo, comienza a ejecutras los procesos
cuando termina el proceso, node termina el proceso

Cuando hay procesos pendientes se almacena en Node Apis, por ejemplo la respuesta de una promesa

Cuando el proceso ya este listo, node espera la ejecucion y los manteiene en la Cola del Callbacks

Una vez que esten terminados los primeros procesos, node ejecutara los procesos pendientes de la Cola e Callbacks

Primero se registra en CallStack (Inicio)
Despues lo Almacena en Node Apis hasta que termine la promesa
Despues lo deja en la lista de Cola de Callbacks
Una vez terminado los procesos anteriores, La lista de Cola de Callbacks pasaran a CallStacks

* */