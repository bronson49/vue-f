formsAll = [];
deleteMethod = (current, currentArray, key) =>{
    Array.isArray(currentArray) ? currentArray.splice(current, 1) : currentArray.removeItem(key);
};
addMethod = (currentArray, current, key) => {
    Array.isArray(currentArray) ? currentArray.push(current) : currentArray.setItem(key, JSON.stringify(current)) ;
};

Vue.component('basket-item',{
    props:['orderitem', 'number'],
    methods : {},

    template : `<div class="basket-item-wrapper">
         <div><img :src="orderitem.img" alt="img"></div>
         <div>
             <p> {{ orderitem.descr }}  </p>
             <p> item number - {{number}} </p>
             <button @click="$emit('delete-item', number)"> delete </button>
         </div>
      </div>`
});

app = new Vue({
    el : '#main',
    data : {
        formList : 'form0',
        basketList :  JSON.parse(localStorage.getItem("myBasket")) || [] ,
    },
    computed : {
        isform0 () { return this.formList === "form0" },
        isform1 () { return this.formList === "form1" },
        isform2 () { return this.formList === "form2" },

    },
    methods : {
        order () {
            let currentForm = document.forms[0];
            addMethod(formsAll, (new FormData(currentForm)));
            addMethod(this.basketList, {
                img : currentForm.imgPath.value,
                descr : currentForm.nameId.value
            });
            addMethod(localStorage, formsAll, 'myForms');
            addMethod(localStorage, this.basketList, 'myBasket');
        },
        deleteBasketItem (currentItem) {
            deleteMethod(currentItem, formsAll );
            deleteMethod(currentItem, this.basketList );
            addMethod(localStorage, formsAll, 'myForms');
            addMethod(localStorage, this.basketList, 'myBasket');
           // console.log(formsAll);
        },
    },
});

// for (i = 0; i < document.forms.length; i++) {
//     forms.push(new FormData(document.forms[i]));
//     console.log(forms[i].get('name'));
// }