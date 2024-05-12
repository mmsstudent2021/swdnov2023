// selector
const root = document.querySelector("#root");
root.classList.add("p-5");

//<h1>I'm title</h1>
// create h1 element with js
const heading = document.createElement("h1");
heading.innerText = "I'm Heading";

// adding classes to heading
// heading.className = "font-bold text-3xl font-serif";
heading.classList.add("font-bold", "text-3xl", "font-serif", "mb-4");

// adding title attribute to heading
heading.title = "This is heading";
heading.id = "heading";
heading.setAttribute("hhz", "hein htet zan");
// console.log(heading);

const imgDiv = document.createElement("div");
imgDiv.classList.add("flex", "gap-3", "mb-4");

const poeImg = document.createElement("img");
poeImg.src = "./images/poe-mamhe-thar-6.jpg";
poeImg.classList.add("h-32");
// console.log(poeImg);

const poeImg2 = new Image(); // web api
poeImg2.src = "./images/poe-mamhe-thar-7.jpg";
poeImg2.classList.add("h-32");
imgDiv.append(poeImg);
imgDiv.append(poeImg2);

const para = document.createElement("p");
para.classList.add("mb-4");
para.innerText =
  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate similique nulla impedit consequatur corporis ea maiores quibusdam, voluptas odit ratione commodi provident totam natus minima quo, animi hic neque. Nihil.";

const listGroup = document.createElement("ul");

const createList = (text) => {
  const li = document.createElement("li");
  li.classList.add("border", "mb-2", "p-2");
  li.innerText = text;
  return li;
};

listGroup.prepend(createList("apple"));
listGroup.prepend(createList("orange"));
listGroup.prepend(createList("mango"));
listGroup.prepend(createList("banana"));

// console.log(listGroup);

// console.log(createList("apple"));
// console.log(createList("orange"));
// console.log(createList("mango"));

// add heading element to main
root.append(heading);
// heading.before(imgDiv);
// heading.after(para);
// imgDiv.after(para);
// para.after(listGroup);
root.append(imgDiv);
root.append(para);
root.append(listGroup);

// listGroup.removeChild(listGroup.children[2]);

// listGroup.remove();

// heading.remove();
// para.remove();
