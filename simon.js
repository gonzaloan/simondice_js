class Game {
    constructor() {
        this.initialize()
        this.generate_sequence()
        this.next_level()
    }
    
    initialize() {
        BTN_START.classList.add('hide')
        this.level = 1
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    generate_sequence() {
        //Llenamos un array con valores 0
        this.sequence = new Array(10)
                            .fill(0)
                            //Valor entre 0 y 
                            .map(n => Math.floor(Math.random() * 4))
    }

    next_level() {
        this.light_sequence()
        this.add_click_events()
    }

    transform_number_into_color(number){
        switch (number) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    light_sequence() {
        for (let i = 0; i< this.level; i++){
            const color = this.transform_number_into_color(this.sequence[i])
            setTimeout(() => this.light_color(color), 1000 * i)
        }
    }
    light_color(color){
        this.colors[color].classList.add('light')
        setTimeout(() =>  this.shutdown_color(color), 350);
    }

    shutdown_color(color){
        this.colors[color].classList.remove('light')
    }
    add_click_events(){
        this.colors.celeste.addEventListener('click', this.select_color)
        this.colors.verde.addEventListener('click', this.select_color)
        this.colors.violeta.addEventListener('click', this.select_color)
        this.colors.naranja.addEventListener('click', this.select_color)
    }
    select_color(ev){
        console.log(ev)
    }

}

function game_start(){

    var current_game = new Game()
    
    
}
