
// deleteMethod = (current, currentArray, key) =>{
//     Array.isArray(currentArray) ? currentArray.splice(current, 1) : currentArray.removeItem(key);
// };
addMethod = (isAdd=true, delIndex ) => {
    let currentForm = document.forms.myForm;
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'form.php', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) return;
        if (xhr.status !== 200) {
            alert( 'ошибка: ' + (xhr.status ? xhr.statusText : 'запрос не удался') ); return
        }
        whatGet = JSON.parse(xhr.responseText);
        isAdd ? app.formsall.push(whatGet) : app.formsall.splice(delIndex, 1);
        localStorage.basket = JSON.stringify(app.formsall);
    };
    xhr.send(new FormData(currentForm));
};

Vue.component('basket-item',{
    props:['orderitem', 'number'],
    methods : {},

    template : `<div class="basket-item-wrapper">
         <div><img :src="orderitem.imgPath" alt="img"></div>
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
        formsall : JSON.parse(localStorage.getItem("basket")) || [],

    },
    computed : {
        isform0 () { return this.formList === "form0" },
        isform1 () { return this.formList === "form1" },
        isform2 () { return this.formList === "form2" },

    },
    methods : {
        order () {
            addMethod();
        },
        deleteBasketItem (number) {
            addMethod(false , number);
        },
    },
});

