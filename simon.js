class Game {
    constructor() {
        this.initialize()
        this.generate_sequence()
        setTimeout(() => {
            this.next_level()
        }, 1000);
    }
    
    initialize() {
        this.select_color = this.select_color.bind(this)
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
        this.sequence = new Array(LAST_LEVEL)
                            .fill(0)
                            //Valor entre 0 y 
                            .map(n => Math.floor(Math.random() * 4))
    }

    next_level() {
        this.sub_level = 0
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
    transform_color_into_number(color){
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
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
    delete_click_events(){
        this.colors.celeste.removeEventListener('click', this.select_color)
        this.colors.verde.removeEventListener('click', this.select_color)
        this.colors.violeta.removeEventListener('click', this.select_color)
        this.colors.naranja.removeEventListener('click', this.select_color)
    }
    select_color(ev){
        const color_name = ev.target.dataset.color
        const color_number = this.transform_color_into_number(color_name)
        this.light_color(color_name)
        if(color_number === this.sequence[this.sub_level]){
            this.sub_level++
            if(this.sub_level === this.level){
                this.level++
                this.delete_click_events()
                if(this.level === (LAST_LEVEL + 1)){
                    //Ganó!

                }else{
                    setTimeout(() => {
                        this.next_level()
                    }, 1500);
                }
            }
        }else{
            //Perdió
            this.game_over()
        } 
    }

    game_over() {
        swal("BUUUUUUUUUUUUUU :( !", "Perdiste!", "error")
        .then(()=> {
            this.delete_click_events()
            this.toggleStartBtn()
            
        })
    }

    game_winner() {
        swal("GENIAAAAAAAAAAAAAAAAAL!", "Ganaste!", "success")
            .then(()=> {
                this.delete_click_events()
                this.toggleStartBtn()
            })
    }
    toggleStartBtn() {
        if(BTN_START.classList.contains('hide')){
            BTN_START.classList.remove('hide')
        }else{
            BTN_START.classList.add('hide')
        }
    }
}

function game_start(){

    var current_game = new Game()
    
    
}
