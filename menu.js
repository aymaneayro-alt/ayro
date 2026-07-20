const menus={
  pizzas:{
    title:'Nos <em>pizzas</em>',image:'images/category-pizza.png',items:[
      {name:'Margherita',description:'Fromage et sauce tomate.',sizes:[['Personal','25×25 cm','10,20 €'],['Moyenne','30×30 cm','16,10 €'],['Family XL','40×40 cm','23,00 €'],['Family XXL','50×50 cm','36,20 €']]},
      {name:'BBQ Chicken',description:'Fromage, poivrons, poulet et sauce barbecue.',sizes:[['Personal','25×25 cm','12,60 €'],['Moyenne','30×30 cm','19,00 €'],['Family XL','40×40 cm','24,20 €'],['Family XXL','50×50 cm','39,70 €']]},
      {name:'Vegetable',description:'Fromage, sauce tomate, poivrons, oignons, champignons et olives.',sizes:[['Personal','25×25 cm','10,30 €'],['Moyenne','30×30 cm','16,10 €'],['Family XL','40×40 cm','23,00 €'],['Family XXL','50×50 cm','36,30 €']]},
      {name:'Pepperoni Beef',description:'Fromage, sauce tomate et pepperoni de bœuf.',sizes:[['Personal','25×25 cm','10,30 €'],['Moyenne','30×30 cm','16,10 €'],['Family XL','40×40 cm','23,00 €'],['Family XXL','50×50 cm','36,30 €']]},
      {name:'Buffalo Chicken',description:'Fromage, poulet, sauce buffalo et sauce ranch.',sizes:[['Personal','25×25 cm','12,60 €'],['Moyenne','30×30 cm','19,00 €'],['Family XL','40×40 cm','24,20 €'],['Family XXL','50×50 cm','39,70 €']]},
      {name:'Buffalo Blue Cheese',description:'Fromage, poulet, sauce buffalo et fromage bleu.',sizes:[['Personal','25×25 cm','12,60 €'],['Moyenne','30×30 cm','19,00 €'],['Family XL','40×40 cm','24,20 €'],['Family XXL','50×50 cm','39,70 €']]},
      {name:'The Boss',description:'Fromage, poulet et sauce ranch.',sizes:[['Personal','25×25 cm','12,60 €'],['Moyenne','30×30 cm','19,00 €'],['Family XL','40×40 cm','24,20 €'],['Family XXL','50×50 cm','39,70 €']]},
      {name:'Mr Mayor',description:'Fromage, poulet, poivron mariné et sauce ranch.',sizes:[['Personal','25×25 cm','12,60 €'],['Moyenne','30×30 cm','19,00 €'],['Family XL','40×40 cm','24,20 €'],['Family XXL','50×50 cm','39,70 €']]},
      {name:'Mr President',description:'Fromage, poulet, poivron mariné, jalapeño et sauce ranch.',sizes:[['Personal','25×25 cm','12,60 €'],['Moyenne','30×30 cm','19,00 €'],['Family XL','40×40 cm','24,20 €'],['Family XXL','50×50 cm','39,70 €']]},
      {name:'Fresh Mozzarella',description:'Mozzarella fraîche, huile d’olive, parmesan et sauce tomate.',sizes:[['Moyenne','30×30 cm','10,90 €']]}
    ]
  },
  burgers:{
    title:'Nos <em>burgers</em>',image:'images/category-burger-red.png',items:[
      ['Hamburger','Bœuf irlandais, salade iceberg, ketchup, oignons, tomate et cornichons.','10,00 €'],
      ['Cheeseburger','Bœuf irlandais, salade iceberg, ketchup, oignons, tomate, cornichons et cheddar.','10,50 €'],
      ['BBQ Cheeseburger','Bœuf irlandais, salade iceberg, sauce barbecue, oignons, tomate, cornichons et cheddar.','10,50 €'],
      ['Burger Yankee','Bœuf, salade iceberg, ketchup, onion rings, tomate, cornichons et cheddar.','11,50 €'],
      ['Burger Texas','Bœuf, salade iceberg, sauce barbecue, onion rings, tomate, cornichons, cheddar, jalapeño et frites gaufrées.','11,50 €'],
      ['Burger The Boss','Bœuf, gouda, sauce ranch, cornichons et frites.','13,80 €'],
      ['Goodfellas Royal','Double bœuf irlandais, sauce barbecue, double fromage, tomates et cornichons.','15,00 €'],
      ['El Toro','Double bœuf, ketchup, double cheddar, jalapeños et cornichons.','15,00 €'],
      ['Mozzarella Sticks Burger','Bœuf, salade iceberg, ranch, oignon, trois bâtonnets de mozzarella, cornichons et tomates.','11,50 €'],
      ['Samurai','Bœuf, fromage, sauce piquante Nick’s et coleslaw.','10,50 €'],
      ['The Butcher','Bœuf, ketchup, onion rings, tomate, cornichons, salade iceberg, bacon de bœuf et cheddar.','10,50 €']
    ]
  },
  tacos:{
    title:'Tacos & <em>wraps</em>',image:'images/category-tacos-wraps-red.png',items:[
      ['Tacos The Boss','Frites, poulet, fromage, gouda et sauce ranch.','12,30 €'],
      ['Tacos Buffalo','Frites, poulet, fromage, gouda, sauce buffalo et sauce ranch.','12,30 €'],
      ['Tacos Goodfellas','Frites, poulet, fromage, gouda, sauce ranch et dinde.','14,40 €'],
      ['Tacos Yankee','Frites, onion rings, fromage, gouda, ketchup et bœuf irlandais.','14,40 €'],
      ['Tacos Gambino','Frites, poulet croustillant, fromage, gouda, ranch, mozzarella sticks et cornichons.','15,40 €'],
      ['Tacos Vito’s','Frites, poulet, fromage et garniture Vito’s.','14,40 €'],
      ['Tacos Mr Mayor','Frites, poulet croustillant, fromage, ranch et poivrons marinés.','14,40 €'],
      ['Tacos Mr President','Poulet croustillant, frites, fromage, jalapeños, poivrons marinés et ranch.','14,40 €'],
      ['Tortilla Chicken Caesar','Poulet, salade, croûtons, parmesan et sauce Caesar.','14,40 €'],
      ['Tortilla Ranch','Poulet, salade, tomate, oignon rouge, concombre et ranch.','13,40 €'],
      ['Tortilla Cajun','Poulet, haricots, maïs, épices cajun, ranch et buffalo.','13,40 €'],
      ['Tortilla Buffalo Chicken','Poulet, salade, sauce buffalo et ranch.','13,40 €'],
      ['Chicken Spicy Wrapster','Poulet, frites, salade, tomates, jalapeños et sauce épicée.','8,20 €'],
      ['Buffalo Chicken Wrapster','Poulet, frites, salade, tomates, buffalo et ranch.','8,20 €'],
      ['Beef Spicy Wrapster','Bœuf, salade, tomates, oignons, jalapeños, frites et ranch.','15,40 €']
    ]
  },
  chicken:{
    title:'Notre <em>chicken</em>',image:'images/category-chicken.png',items:[
      ['Ranch Chicken Burger','Poulet frit, cheddar, salade iceberg, tomate, oignons, cornichons et ranch.','9,20 €'],
      ['Brooklyn Chicken Burger','Poulet frit, cheddar, ranch, cornichons et coleslaw.','9,20 €'],
      ['Mr Mayor Chicken Burger','Poulet frit, fromage, poivrons marinés et ranch.','9,20 €'],
      ['Caesar Chicken Burger','Poulet frit, salade, parmesan et sauce Caesar.','9,20 €'],
      ['Buffalo Chicken Burger','Poulet frit, sauce buffalo et ranch.','9,20 €'],
      ['BBQ Chicken Burger','Poulet frit, fromage et sauce barbecue.','9,20 €'],
      ['Chicken Wings Classic','Ailes de poulet classiques.','8,20 €'],
      ['Sweet Chilli BBQ Wings','Ailes de poulet, sweet chilli et barbecue.','9,20 €'],
      ['BBQ Wings','Ailes de poulet et sauce barbecue.','9,20 €'],
      ['Buffalo Wings','Ailes de poulet et sauce buffalo.','9,20 €'],
      ['Chicken Tenders','Filets de poulet croustillants.','6,00 €'],
      ['Mozzarella Sticks','Six bâtonnets de mozzarella croustillants.','4,10 €'],
      ['Buffalo Mozzarella Sticks','Bâtonnets de mozzarella et sauce buffalo.','6,20 €'],
      ['Snack Box Classic','Wings classiques, accompagnements et sauces.','20,20 €'],
      ['Snack Attack','Wings, mozzarella sticks, frites gaufrées et sauces.','23,60 €'],
      ['Sliders Box Chicken','Deux sliders de poulet, six mozzarella sticks, frites gaufrées, crudités et sauces.','19,20 €'],
      ['Sliders Box Beef','Deux sliders de bœuf, accompagnements et sauces.','22,20 €']
    ]
  },
  drinks:{
    title:'Boissons & <em>desserts</em>',image:'images/category-drinks-desserts.png',items:[
      ['Pepsi pression 47 cl','Boisson fraîche servie à la pression.','3,50 €'],
      ['Pepsi Max pression 47 cl','Boisson sans sucre servie à la pression.','3,50 €'],
      ['Mirinda pression 47 cl','Boisson gazeuse à l’orange.','3,50 €'],
      ['7Up pression 47 cl','Boisson gazeuse citron-citron vert.','3,50 €'],
      ['San Pellegrino 50 cl','Eau minérale pétillante.','2,50 €'],
      ['Aqua Panna 50 cl','Eau minérale plate.','2,50 €'],
      ['Pepsi 33 cl','Canette.','3,00 €'],
      ['Capri-Sun 20 cl','Boisson aux fruits.','2,00 €'],
      ['Milkshake Vanille','Milkshake gourmand à la vanille.','5,50 €'],
      ['Milkshake Chocolat','Milkshake gourmand au chocolat.','5,50 €'],
      ['Milkshake Fraise','Milkshake gourmand à la fraise.','5,50 €'],
      ['Milkshake Framboise','Milkshake gourmand à la framboise.','5,50 €'],
      ['Milkshake Tiramisu','Milkshake gourmand façon tiramisu.','5,50 €'],
      ['Milkshake Oreo','Milkshake gourmand aux biscuits Oreo.','5,50 €'],
      ['Milkshake Lotus','Milkshake gourmand au spéculoos Lotus.','5,50 €'],
      ['Sicilian Zeppole','Beignets siciliens, plusieurs versions disponibles.','7,00 €'],
      ['Cookie','Cookie gourmand.','3,00 €'],
      ['Brownie','Brownie au chocolat.','3,50 €']
    ]
  }
};

const key=new URLSearchParams(location.search).get('cat')||'pizzas';
const menu=menus[key]||menus.pizzas;
document.querySelector('#category-title').innerHTML=menu.title;
document.querySelector('#menu-hero').style.backgroundImage=`url('${menu.image}')`;
document.querySelector('#item-list').innerHTML=key==='pizzas'
  ?menu.items.map(item=>`<details class="menu-item"><summary><div class="menu-item-head"><h2>${item.name}</h2><strong class="menu-price">${item.sizes[0][2]}</strong></div><span class="size-hint">Voir les tailles et les prix</span></summary><p>${item.description}</p><div class="size-prices">${item.sizes.map(([label,size,price])=>`<div class="size-price"><span>${label}<small>${size}</small></span><strong>${price}</strong></div>`).join('')}</div></details>`).join('')
  :menu.items.map(([name,description,price])=>`<article class="menu-item"><div class="menu-item-head"><h2>${name}</h2><strong class="menu-price">${price}</strong></div><p>${description}</p></article>`).join('');
document.title=document.querySelector('#category-title').textContent+' | Goodfellas Vilvoorde';
document.querySelector('#year').textContent=new Date().getFullYear();
