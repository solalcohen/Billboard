window.onload = function () {


document.getElementById('add').onclick = function () {
    document.getElementById('toadd').style.display = 'block';
    document.getElementById('div_add').style.display = 'none';
    document.getElementById('drop_check').style.display = 'block';


}

document.getElementById('drop').onclick = function () {
    document.getElementById('toadd').style.display = 'none';
    document.getElementById('div_add').style.display = 'block';
    document.getElementById('drop_check').style.display = 'none';
}

};

// I tried to generate dynamically the form but it doesn't work because it tells me that the id didn't exist

// var billboard = {}
//
// window.onload = function () {
//     billboard.createDynamically();
//     billboard.buttonCheck();
//
// };
//
// billboard.createDynamically = function () {
//     var add_button = document.getElementById('add');
//
//     add_button.onclick = function () {
//         var addbox = document.createElement('div');
//         addbox.classList.add('box');
//         addbox.setAttribute('id', 'addbox');
//
//         var span_title = document.createElement('span');
//         span_title.classList.add('titre');
//
//         var input_title = document.createElement('input');
//         span_title.appendChild(input_title);
//         input_title.setAttribute('placeholder', 'title');
//
//         var div_text = document.createElement('div');
//         div_text.classList.add('text');
//         var input_text = document.createElement('textarea');
//         input_text.style.width = '750px';
//         input_text.style.height = '100px';
//         div_text.appendChild(input_text);
//         input_text.setAttribute('placeholder', 'Your message here');
//
//         var div_author = document.createElement('div');
//         div_author.classList.add('authortoadd');
//         var input_author = document.createElement('input')
//         div_author.appendChild(input_author);
//         input_author.setAttribute('placeholder', 'author');
//
//         var div_confirm = document.createElement('div');
//         div_confirm.classList.add('add');
//         var buttondrop = document.createElement('button');
//         buttondrop.setAttribute('id', 'drop');
//         var drop = document.createElement('i');
//         drop.classList.add("fas");
//         drop.classList.add("fa-times");
//         buttondrop.appendChild(drop);
//         buttondrop.style.background = 'red';
//
//         var buttoncheck = document.createElement('button');
//         buttoncheck.setAttribute('id', 'check');
//         var check = document.createElement('i');
//         check.classList.add('fas');
//         check.classList.add('fa-check');
//         buttoncheck.appendChild(check);
//         div_confirm.appendChild(buttondrop);
//         div_confirm.appendChild(buttoncheck);
//         addbox.appendChild(span_title);
//         addbox.appendChild(div_text);
//         addbox.appendChild(div_author);
//         document.getElementById('toadd').append(addbox);
//         document.getElementById('toadd').append(div_confirm);
//         document.getElementById('div_add').style.display = 'none';
//     }
// };
//
//
// billboard.buttonCheck = function () {
//     document.getElementById('check').onclick = function () {
//         prompt('salut');
//     }
// }
