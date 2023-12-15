'use strict';

const preeencherversiculo = (versiculopesq) => {

document.getElementById('livro').value = versiculopesq.book.name;
document.getElementById('texto').value = versiculopesq.book.author;

let texto = "";
versiculopesq.verses.forEach(verse => {
  texto += verse.text + "\n";
});

document.getElementById('tex').value = texto;



console.log(versiculopesq);



console.log(versiculopesq);
}

const pesquisarVersiculo = async() => {
	const versiculo = document.getElementById('versiculo').value;
	const url= `https://www.abibliadigital.com.br/api/verses/nvi/${versiculo}`;
	const dados = await fetch(url);
	const versiculopesq = await dados.json();
	
	preeencherversiculo(versiculopesq);
}



document.getElementById('versiculo').addEventListener('focusout',pesquisarVersiculo);