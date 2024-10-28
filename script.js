let selected = false;
const links = document.createElement('link');
const btn = document.querySelector('button');
function cssTrigger() {
    selected = !selected;
    const heading = document.querySelector('h2');
    if (selected) {
        links.rel = 'stylesheet';
        links.type = 'text/css';
        links.href = 'style.css';
        document.head.appendChild(links);
        heading.innerText = "With In CSS";
        btn.innerText = "Remove CSS";
    } else {
        btn.innerText = "Add CSS";
        const links = document.head.getElementsByTagName('link');
        //cant remove one link elemets then i want get link elemet array
        for (let i = links.length - 1; i >= 0; i--) {
            if (links[i].href.includes('style.css')) {
                document.head.removeChild(links[i]); // Remove the matching link
            }
        }
        heading.innerText = "With Out CSS";
    }
}