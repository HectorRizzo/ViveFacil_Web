

export default class State{
    constructor(titulo){
        this.titulo = titulo;
        
    }
    setTitulo(titulo){
        this.titulo = titulo;
    }
    getTitulo(){
        return this.titulo;
    }
    
}