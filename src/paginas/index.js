
import { ItemController } from "../ItemController.js";
import { Item } from "../Item.js";
import { addCartas } from "../CrearCartasProducto.js";


new ItemController().saveItem(
    new Item("Gráfica RTX 5080", "Tarjeta gráfica de última generación", 800000, 5, 1.0, "https://gsmpro.cl/cdn/shop/files/pny-geforce-rtx-5080-16gb-argb-overclocked-triple-fan.webp?v=1747339989&width=800")
);
new ItemController().saveItem(
    new Item("tula", "Tarjeta gráfica de última generación", 800000, 5, 1.0, "https://gsmpro.cl/cdn/shop/files/pny-geforce-rtx-5080-16gb-argb-overclocked-triple-fan.webp?v=1747339989&width=800")
);
let maxCartas = 12
addCartas(document.getElementById("product-container"),maxCartas);

/*.addEventListener('click', );*/