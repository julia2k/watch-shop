//burger icon transformation
$("#burgerToggle").click(function() {
    $(this).toggleClass("active");
    $(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    $("body").toggleClass("locked"); 
});

//changing photo product onmouse on and out
$(".foto img").hover(function(){
	var idx=$(this).attr("src");
	var arr=idx.split(".");
	var arr2=[];
	 arr2.push(arr[0],"-2.",arr[1]);
	$(this).attr("src", arr2.join(""));
	$(this).mouseleave(function(){
		$(this).attr("src", idx);
	});
});
var buttons=document.querySelectorAll('.promo20 button');

for( var i=0; i<buttons.length; i++){
	buttons[i].onclick=addProductToCart;
}

//Login Form
function openLoginForm(){
	var login = document.getElementById('login');
	login.style.display ='block';
	dark.style.display ='block';
}
function closeLoginForm(){
	var login = document.getElementById('login');
	login.style.display ='none';
	dark.style.display ='none';
}


//Cart form
function openCart(){
	var cart = document.getElementById('cart');
	cart.style.display ='block';
	dark.style.display ='block';
}
function closeCart(){
	var cart = document.getElementById('cart');
	cart.style.display ='none';
	dark.style.display ='none';
}
var index=1;
function addProductToCart()
{
	var productId = this.dataset.id;

	var price = this.previousElementSibling.innerText;

	var productInputAmount = document.querySelector('input#productId-' + productId);
	if(productInputAmount){
		productInputAmount.value++;
		var amount = productInputAmount.value;
		price = price.substr(1); 
		var sum = amount * price;
		productInputAmount.parentElement.nextElementSibling.innerText = '$'+sum;
	}
	else
	{
		var table = document.querySelector('#cart table tbody');

		var name = this.previousElementSibling.previousElementSibling.previousElementSibling.innerText;

		var image = this.closest('.promo20').firstElementChild.firstElementChild;


		console.log(image);

		var row = document.createElement('tr');

		var td1 = document.createElement('td');
		td1.classList.add("d-xs-none");
		td1.innerText = index++;
		row.appendChild(td1);

		var td2 = document.createElement('td');
		td2.appendChild(image.cloneNode(true));
		row.appendChild(td2);

		var td3 = document.createElement('td');
		td3.classList.add("d-xs-none");
		td3.innerText = name;
		row.appendChild(td3);

		var td4 = document.createElement('td');
		td4.innerText = price;
		row.appendChild(td4);

		var td5 = document.createElement('td');

		var input = document.createElement('input');
		input.type = 'number';
		input.value = 1;
		input.min = 1;
		input.id = 'productId-' + productId;
		input.onchange = setProductSum;
		td5.appendChild(input);
		row.appendChild(td5);

		row.appendChild(td4.cloneNode(true));

		var td7 = document.createElement('td');
		var button = document.createElement('button');
		button.innerText = "\u2717";
		button.onclick = deleteProductFromCart;
		td7.appendChild(button);
		row.appendChild(td7);

		table.insertBefore(row, table.lastElementChild);
	}

	reCulc();
	openCart();
}
function deleteProductFromCart(){
	var tr = this.closest('tr');
	var table = this.closest('tbody');
	table.removeChild(tr);
	index--;

	var td = document.querySelectorAll('#cart table tr td:first-child');
	for (var i = 0; i < (td.length -1);){
		td[i].innerText = ++i;

	}


	reCulc();
}
function setProductSum(){
	var amount = this.value;
	var price = this.parentElement.previousElementSibling.innerText;
	price = price.substr(1);
	var sum = amount * price;
	this.parentElement.nextElementSibling.innerText='$'+sum;

	reCulc();
}
function reCulc (){
	var sum = 0;
	var td = document.querySelectorAll('#cart table tr td:nth-child(6)');
	for (var i=0; i < td.length; i++){
		var price = td[i].innerText;
		price = price.substr(1);
		price= parseInt(price);
		sum+=price;
	}
	var all= document.querySelector('#cart table tr:last-child td strong');
	all.innerText = '$'+ sum;
}


//Register form

function openRegisterForm(){
	var register = document.getElementById('register');
	register.style.display ='block';
	dark.style.display ='block';
}
function closeRegisterForm(){
	var register = document.getElementById('register');
	register.style.display ='none';
	dark.style.display ='none';
}