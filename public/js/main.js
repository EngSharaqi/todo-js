let handleForm = (event) => {
    event.preventDefault();
}
var input = document.getElementById('input');
var submit = document.getElementById('submit');
var li = document.getElementById('li');
var card = document.getElementById('card');

var notes = [];
var titles = [];

var del = (event) => {
    var x = event.target.id;
    var element = document.getElementById(x);
    element.innerHTML = '';
    element.style.display = 'none';
}

var txt = (event) => {

    if (event.target.value === ' ' || event.target.value === '') {

    } else {

        notes.push(event.target.value);
        var el = notes.pop();
        card.innerHTML += `
            <div class="card" id=${el}>
                    <div class="card-body">
                        <div class="row">
                                <div class="chk">
                                    <input type='checkbox' id='_${el}' onchange='test(event)' class='chk-s' />
                                </div>
                                    <h6 id='__${el}'>${el}</h6>
                                <div class="right chk"><i onclick='del(event)' id=${el} class="far fa-trash-alt chk-s"></i></div>        
                        </div>
                    </div>
            </div>
        `;

    }
    test = (event) => {
        var __id = event.target.id;
        if (event.target.checked == true) {
            document.getElementById(`_${__id}`).classList.add('del');
        } else {
            document.getElementById(`_${__id}`).classList.remove('del');
        }
    }

}