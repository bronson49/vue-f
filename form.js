formsAll = [];


Vue.component('basket-item',{
    props:['orderitem'],
    template : `<div class="basket-item-wrapper">
         <div><img :src="orderitem.img" alt="img"></div>
         <p> {{ orderitem.descr }}  </p>
      </div>`
});

app = new Vue({
    el : '#main',
    data : {
        formList : 'form0',
        basketList : [],
    },
    computed : {
        isform0 : function () {
            if (this.formList === "form0") return  true ;
        },
        isform1 : function () {
            if (this.formList === "form1") return  true ;
        },
        isform2 : function () {
            if (this.formList === "form2") return  true ;
        },
    },
    methods : {
        order : function () {
            currentForm = document.forms[0];
            formsAll.push(new FormData(currentForm));
            this.basketList.push({
                img : currentForm.imgPath.value,
                descr : currentForm.nameId.value,
            });

            // for (i = 0; i < formsAll.length  ; i++) {
            //     console.log(formsAll[i].get('name'));
            // }
        },
    },
});

// for (i = 0; i < document.forms.length; i++) {
//     forms.push(new FormData(document.forms[i]));
//     console.log(forms[i].get('name'));
// }