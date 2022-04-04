console.log("Script running...");
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline';
        document.querySelector('.cross').style.display = 'none';

    }
    else{
        document.querySelector('.ham').style.display = 'none';
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline';
        }, 400);
    }
})


// a[100] = 'fox';
// console.log(a.length);

let x = 6+3+"3";
console.log(x);

const animals = ["rabnnolb", "gvujhmvu", "uyfjh"];
animals.unshift("Lizard");