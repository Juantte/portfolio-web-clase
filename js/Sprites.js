/**********************************/
/* Juan Gabriel Rodr�guez Carri�n */
/*    jlabstudio.com       2011   */
/**********************************/

/**
 * Esta clase es el almac�n de im�genes de nuestro juego.
 * Seguiremos una simulaci�n de patr�n singleton muy simplificado
 */

function SpritesClase() {
    //La lista de objetos Image
    this.lista = [];

    /**
     * Este m�todo devolver� un puntero a la imagen cuya SRC coincida con
     * la ruta que nos solicitan.
     *
     * ruta es la SRC de la imagen solicitada
     */
    this.get = function(ruta) {
        var img;
        for (var i = 0; i < this.lista.lenght; i++) {
            img = this.lista[i];
            if (img.src == ruta) {
                return img;
            }
        }
        img = new Image();
        img.src = ruta;
        this.lista.push(img);
        return img;
    };
}
//Creamos una instancia de la clase Sprite, que ser� global a todo el programa
//No es exactamente un Singleton, pero la idea y la forma de uso es la misma.
var Sprites = new SpritesClase();
