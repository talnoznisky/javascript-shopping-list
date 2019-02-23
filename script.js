(function () {
    "use strict";
    window.onload = function () {

        var button = document.querySelector('#btn');
        button.addEventListener('click', AddRow);


        function CreateRow(_name, _price){
          var list = document.querySelector("#list");

          var row = document.createElement("tr")

          var blankcell = document.createElement("td")
          var namecell = document.createElement("td")
          var pricecell = document.createElement("td")

          pricecell.setAttribute('class','price')

          namecell.innerText = _name
          pricecell.innerText = _price

          row.appendChild(blankcell)
          row.appendChild(namecell)
          row.appendChild(pricecell)

          list.appendChild(row)
        }

        function TotalPrice(prices){
          var total = 0;
          prices = document.querySelectorAll(".price")
          for(var i = 0; i < prices.length; i++){
            total = total + parseFloat(prices[i].innerText)
          }
          document.querySelector('#totalPrice').innerText = total
        }

        function AddRow(){
          var name  = document.querySelector("#name").value
          var price  = document.querySelector("#price").value
          CreateRow(name,price)
          TotalPrice()
        }
	};
}());
