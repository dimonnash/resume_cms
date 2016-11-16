var component = new Vue({
    el: '.container',
    data:{
        input:{
            name:'Папава Дмитрий',
            proff:'Front-end Developer'
        },
        contackt:{
            home:'st. BadBoy',
            phone:'+380954241351',
            email:'midtofeed@gmail.com',
            vk:'vk.com/dimonpapawa',
            tw:'twitter.com/novokamenka',
            fb:'www.facebook.com'

        },
        block:[
            {nameblock : 'О себе', contentblock : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos suscipit laudantium tempore, quos repudiandae aspernatur qui non labore a voluptatem similique magnam nostrum aliquam eum itaque beatae id, necessitatibus quod.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos suscipit laudantium tempore, quos repudiandae aspernatur qui non labore a voluptatem similique magnam nostrum aliquam eum itaque beatae id, necessitatibus quod.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos suscipit laudantium tempore, quos repudiandae aspernatur qui non labore a voluptatem similique magnam nostrum aliquam eum itaque beatae id, necessitatibus quod.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos suscipit laudantium tempore, quos repudiandae aspernatur qui non labore a voluptatem similique magnam nostrum aliquam eum itaque beatae id, necessitatibus quod.'}
        ],
        newnameblock:'',
        newcontentblock:'',



        prskils:[
            {naz :'Работа в команде', pbar:'50'},
            {naz :'Работа в команде2', pbar:'70'},
            {naz :'Работа в команде3', pbar:'25'}
        ],
        newPS:'',
        newPB:'',

        items: [
            { message : 'HTML5', bar:'80'},
            { message : 'CSS3', bar:'80'},
            { message : 'JavaScript', bar:'50'}
        ],
        newSkills: '',
        newBar:''

    },

    methods: {
        addSkills: function(e){
            e.preventDefault();
            this.items.push({message: this.newSkills, bar: this.newBar});

            this.newSkills = '';
            this.newBar = '';

        },
        addPskills: function(z){
            z.preventDefault();
            this.prskils.push({naz : this.newPS, pbar: this.newPB});

            this.newPB = '';
            this.newPS = '';
        },
        addcontent: function(q){
            q.preventDefault();
            this.block.push({nameblock: this.newnameblock, contentblock : this.newcontentblock});
            this.newnameblock = '';
            this.newcontentblock = '';

        }
    }
});
