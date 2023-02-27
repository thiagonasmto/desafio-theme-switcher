const selector = document.querySelector('.seletor');

selector.addEventListener('click',()=>{
    const theme = document.querySelector('body');
    const sol = document.querySelector('.icone-sol');
    const lua = document.querySelector('.icone-lua');

    theme.classList.toggle('body--ligth');
    sol.classList.toggle('add-flex');
    lua.classList.toggle('add-flex');
    selector.classList.toggle('add-margin-r');
    selector.classList.toggle('add-margin-l');
    console.log('Boa!');
});