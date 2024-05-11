const toggleTheme = document.getElementById("toggleTheme"); /*Chamando a ID toggleTheme no HTML e atribuindo a uma constante*/
const rootHtml = document.documentElement; 
const accordionHeaders = document.querySelectorAll(".accordion-header"); /*Chamando a classe .accordion-header e atribuindo a uma constante*/
const menuLinks = document.querySelectorAll(".menu-link"); /*Chamando a classe menu-link e atribuindo a uma constante*/

function changeTheme(){ /*Criando uma função para mudar o tema*/
    const currentTheme = rootHtml.getAttribute("data-theme"); /*Atribuindo a classe data-theme e atribuindo a constante currentTheme*/
    
    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark"); /*Condição se, se o tema atual é dark então mudará para light e vice-versa*/

    toggleTheme.classList.toggle("bi-sun"); /*Chamando o ícone do sol*/
    toggleTheme.classList.toggle("bi-moon-stars"); /*Chamando o ícone de lua*/
}

toggleTheme.addEventListener("click", changeTheme);

