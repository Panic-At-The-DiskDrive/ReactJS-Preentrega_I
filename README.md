# React JS - Preentrega 1

## Crea los primeros componentes de React, que funcionarán como piezas base en la construcción de tu e-commerce. Desarrolla una barra de navegación, debe contener los enlaces de navegación, logo de tu tienda y el widget del carrito de compras. También, crea el componente Contenedor que a futuro mostrará el catálogo de productos, utilizando "props" para personalizarlo y enviar un mensaje de bienvenida 

1. **Clonar el repositorio**  
   ```bash
   git clone https://github.com/Panic-At-The-DiskDrive/ReactJS-Preentrega_I
   ```

2. **Entrar a la carpeta del proyecto**  
   ```bash
   cd ReactJS-Preentrega_I
   ```

## Objetivos
+ Comprender los conceptos básicos de React y su estructura de componentes.

+ Crear las bases para la homepage del ecommerce.

## Requisitos
+ Archivos para los componentes NavBar, CartWidget, e
ItemListContainer, dentro de la carpeta components.

+ Organización correcta de los mismos: NavBar e ItemListContainer
serán renderizados en App, mientras que CartWidget será
renderizado en NavBar.

+ Uso de props para enviar un string con un mensaje hacia el
componente ItemListContainer.

## Recomendaciones
+ Asegúrate de hacer el "commit" y "push" de tu proyecto a GitHub
para reflejar tus últimos avances en la entrega.

+ Si no quieres escribir tu propio CSS, puedes utilizar Bootstrap o
librerías de UI de React para los estilos (opcional).

+ ¡Las Props son importantes! No olvides utilizar una en
ItemListContainer, es nuestra primera Prop y vamos a utilizarlas
en todas las clases.

## Contenidos adicionales  

### Criterios de evaluación
+ Convenciones: Respeta las consignas asignadas

+ Componete Navbar: 
1) Muestra el brandname de la tienda en NavBar 
2) Muestra las categorías de los productos. 
3) Muestra el CartWidget.

+ Componente CartWidget: Muestra el ícono de carrito y una burbuja de ¡Felicitaciones! estás haciendo un gran trabajo. ¡Sigue así! notificación con un valor estático

+ Componente ItemListContainer: Se renderiza debajo de NavBar y como hijo de App. Renderiza un texto que se le es asignado como props

---

## Tecnologías utilizadas

- **React**
- **Bootstrap**   

---