const furn = [{"name":"BLÅHAJ","index":0,"summary":"Soft toy, shark, 100 cm (39 ¼ \")","image":"https://www.ikea.com/ca/en/images/products/blahaj-soft-toy-shark__0710175_pe727378_s5.jpg?f=xl","link":"https://www.ikea.com/ca/en/p/blahaj-soft-toy-shark-90373590/"},{"name":"ELDBERGET / MALSKÄR","index":1,"summary":"Swivel chair,Plastic,dark gray/black","image":"https://www.ikea.com/ca/en/images/products/eldberget-malskaer-swivel-chair-dark-gray-black__0814559_pe772629_s5.jpg?f=xl","link":"https://www.ikea.com/ca/en/p/eldberget-malskaer-swivel-chair-dark-gray-black-s59331847/"},{"name":"JOKKMOKK","summary":"Chair, antique stain","image":"https://www.ikea.com/ca/en/images/products/jokkmokk-chair-antique-stain__0475400_pe615581_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/jokkmokk-chair-antique-stain-90342688/"},{"name":"JÄTTESTA","index":3,"summary":"Shelf unit, black, 120x85 cm (47 1/4x33 1/2 \")","image":"https://www.ikea.com/ca/en/images/products/jaettesta-shelf-unit-black__1154341_pe885998_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/jaettesta-shelf-unit-black-00521905/"},{"name":"KALLAX","index":4,"summary":"Shelving unit with underframe, oak effect/black, 147x94 cm (57 7/8x37 \")","image":"https://www.ikea.com/ca/en/images/products/kallax-shelving-unit-with-underframe-oak-effect-black__1041423_pe841008_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/kallax-shelving-unit-with-underframe-oak-effect-black-s49442681/"},{"name":"MALM","index":5,"summary":"4-drawer chest, white, 80x100 cm (31 1/2x39 3/8 \")","image":"https://www.ikea.com/ca/en/images/products/malm-4-drawer-chest-white__0484879_pe621344_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/malm-4-drawer-chest-white-30473154/"},{"name":"TARVA","index":6,"summary":"6-drawer chest, pine, 151x92 cm (59 1/2x36 1/4 \")","image":"https://www.ikea.com/ca/en/images/products/tarva-6-drawer-chest-pine__0496978_pe628891_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/tarva-6-drawer-chest-pine-80360705/"},{"name":"LURVIG","index":7,"summary":"Pouffe , light gray, 53x15 cm (20 ¾x6 \")","image":"https://www.ikea.com/ca/en/images/products/lurvig-pouffe-light-gray__0782460_pe761333_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/lurvig-pouffe-light-gray-00467753/"},{"name":"TÅGARP","index":8,"summary":"Floor uplighter/reading lamp, black/white","image":"https://www.ikea.com/ca/en/images/products/tagarp-floor-uplighter-reading-lamp-black-white__0965083_pe809330_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/tagarp-floor-uplighter-reading-lamp-black-white-70486395/"},{"name":"TVÄRHAND","index":9,"summary":"Table lamp, black/bamboo","image":"https://www.ikea.com/ca/en/images/products/tvaerhand-table-lamp-black-bamboo__1013660_pe829291_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/tvaerhand-table-lamp-black-bamboo-60518410/"},{"name":"KIVIK","index":10,"summary":"Sofa, Tresund anthracite","image":"https://www.ikea.com/ca/en/images/products/kivik-sofa-tresund-anthracite__1124113_pe875022_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/kivik-sofa-tresund-anthracite-s09482834/"},{"name":"ÄPPLARÖ","index":11,"summary":"Reclining chair, outdoor, foldable brown stained","image":"https://www.ikea.com/ca/en/images/products/aepplaroe-reclining-chair-outdoor-foldable-brown-stained__0835747_pe778491_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/aepplaroe-reclining-chair-outdoor-foldable-brown-stained-70208539/"},{"name":"MOLNIGHET","index":12,"summary":"3-blade ceiling fan, plastic white","image":"https://www.ikea.com/ca/en/images/products/molnighet-3-blade-ceiling-fan-plastic-white__0742633_pe742745_s5.jpg?f=xl","link":"https://www.ikea.com/ca/en/p/molnighet-3-blade-ceiling-fan-plastic-white-90424274/"},{"name":"HAVSTEN / LÅGASKÄR","index":13,"summary":"4-seat conversation set, outdoor, beige/beige","image":"https://www.ikea.com/ca/en/images/products/havsten-lagaskaer-4-seat-conversation-set-outdoor-beige-beige__1146794_pe883114_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/havsten-lagaskaer-4-seat-conversation-set-outdoor-beige-beige-s39500997/"},{"name":"TIPHEDE","index":14,"summary":"Rug, flatwoven, natural/black, 120x180 cm (3 ' 11 \"x5 ' 11 \")","image":"https://www.ikea.com/ca/en/images/products/tiphede-rug-flatwoven-natural-black__0772066_pe755879_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/tiphede-rug-flatwoven-natural-black-40456757/"},{"name":"LACK","index":15,"summary":"Coffee table, black-brown, 118x78 cm (46 1/2x30 3/4 \")","image":"https://www.ikea.com/ca/en/images/products/lack-coffee-table-black-brown__57537_pe163119_s5.jpg?f=xs","link":"https://www.ikea.com/ca/en/p/lack-coffee-table-black-brown-00104291/"}];

function getReccomendations(param){
  const url = 'https://api.cohere.ai/v1/rerank';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: auth_value
    },
    body: JSON.stringify({
      return_documents: true,
      top_n:3,
      model: 'rerank-english-v2.0',
      query: 'Use the products name, descpription and materials to answer the next question. What pieces of furniture best fits the following prompt: ' + param,
      documents: ["BLÅHAJ,Soft toy, shark, 100 cm (39 ¼ \")","ELDBERGET / MALSKÄR, Plastic,Swivel chair, dark gray/black","JOKKMOKK,Chair, antique stain","JÄTTESTA,Shelf unit, black, 120x85 cm (47 1/4x33 1/2 \")","KALLAX,Shelving unit with underframe, oak effect/black, 147x94 cm (57 7/8x37 \")","MALM,4-drawer chest, white, 80x100 cm (31 1/2x39 3/8 \")","TARVA,6-drawer chest, pine, 151x92 cm (59 1/2x36 1/4 \")","LURVIG,Pouffe , light gray, 53x15 cm (20 ¾x6 \")","TÅGARP,Floor uplighter/reading lamp, black/white","TVÄRHAND,Table lamp, black/bamboo","KIVIK,Sofa, Tresund anthracite","ÄPPLARÖ,Reclining chair, outdoor, foldable brown stained","MOLNIGHET,3-blade ceiling fan, plastic white","HAVSTEN / LÅGASKÄR,4-seat conversation set, outdoor, beige/beige","TIPHEDE,Rug, flatwoven, natural/black, 120x180 cm (3 ' 11 \"x5 ' 11 \")","LACK,Coffee table, black-brown, 118x78 cm (46 1/2x30 3/4 \")"]
    })
  };
  const data = fetch(url, options)
    .then(res => res.json())
    .then(json => updateHTML(json))
    .catch(err => console.error('error:' + err));

}

function secretfunc(){
  const val = document.getElementById("inp").value;
  getReccomendations(val);
}

function updateHTML(json){
  updatea1(furn[json['results'][0]['index']]);
  updatea2(furn[json['results'][1]['index']]);
  updatea3(furn[json['results'][2]['index']]);
}

function updatea1(param){
  const geta = document.getElementById("t1a");
  geta.href = param["link"];
  document.getElementById("d1").innerHTML = param['name'];
  document.getElementById("img1").src = param['image'];
}
function updatea2(param){
  const geta = document.getElementById("t2a");
  geta.href = param.link;
  document.getElementById("d2").innerHTML = param['name'];
  document.getElementById("img2").src = param['image'];
}
function updatea3(param){
  const geta = document.getElementById("t3a");
  geta.href = param.link;
  document.getElementById("d3").innerHTML = param['name'];
  document.getElementById("img3").src = param['image'];
}

updatea1(furn[0]);
updatea2(furn[1]);
updatea3(furn[2]);