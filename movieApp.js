
const film = (name, director, actors, genre, year, IMDb, img)=>({name, director, actors, genre, year, IMDb, img});
const films = [
    film ('Inception', 'Christopher Nolan', ['Leonardo DiCaprio' , 'john cena'], 'Adventure', 2010, 14, 'img/Inception.jpg'),
    film ('The Matrix', 'Lana Wachowski', ['Keanu Reeves'], 'Sci-Fi', 1999, 18, 'img/The Matrix.jpg'),
    film ('Interstellar', 'Christopher Nolan', ['Matthew McConaughey'], 'Sci-Fi', 2014, 31, 'img/Interstellar.jpg'),
    film ('The Departed', 'Martin Scorsese', ['Leonardo DiCaprio'], 'Crime', 2006, 41, 'img/The Departed.jpg'),
    film ('Spider-Man: Into the Spider-Verse', 'Bob Persichetti', ['Shameik Moore'], 'Animation', 2018, 32, 'img/spider.jpg'),
    film ('Sen to Chihiro no kamikakushi', 'Hayao Miyazaki', [' Daveigh Chase'], 'Animation', 2001, 25, 'img/spirited.jpg'),
    film ('Goodfellas', 'Martin Scorsese', ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'], 'Crime', 1990, 16, 'img/Goodfellas.jpg'),
];

Vue.component ('film-item',{
    props:['seefilm'],
    data: function () {
        return {
            showDetails : false,
        }
    },
    computed : {},
    // methods : {
    //     detailsTrigger : function (event) {
    //         event.currentTarget.classList.toggle('movDetails');
    //     },
    // },
    template: `<li
               class="movItem"
               :class="{movDetails : showDetails}"
               @click="showDetails = !showDetails"
         >
            <p>{{ seefilm.name }} - {{ seefilm.year }}</p>
            <div class="restDetails">
               <p> Director : {{ seefilm.director }} </p>
               <p > actor : <span v-for="actor in seefilm.actors">{{ actor }} , </span> </p>
               <p> genre : {{ seefilm.genre }} </p>
               <p> year : {{ seefilm.year }} </p>
               <p> IMDb position : {{ seefilm.IMDb }} </p>
            </div>

            <img  :src="seefilm.img" :alt="seefilm.name" :title="seefilm.name">
         </li>`
});


app = new Vue ({
   el: '#movieApp',
    data : {
       movie : films ,
    },
    computed : {

    },
    // methods : {
    //    detailsTrigger : function (event) {
    //        event.currentTarget.classList.toggle('movDetails');
    //        // elem = event.target;
    //        // while (!elem.classList.contains('movItem')){
    //        //     elem = elem.parentElement ;
    //        // }
    //        // elem.classList.toggle('movDetails');
    //    },
    // },
});
