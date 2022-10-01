const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);

async function getRandomCat() {
	let res = await fetch("https://aws.random.cat/meow");
	let data = await res.json();
	cat_result.innerHTML = `<img src=${data.file} alt="cat" />`

}

async function getRandomDog() {
	let res = await fetch("https://random.dog/woof.json");
	let data = await res.json();
	if (data.url.includes('.mp4')) {
		getRandomDog();
	} else {
		dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
	}

}
