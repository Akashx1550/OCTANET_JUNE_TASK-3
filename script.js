//DOM Elements

const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i')
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
let sun = document.getElementById('sun');
const buttonBox = document.querySelector('.button-box');

/********************************************************************************************************************************
 * *******************************************************************************/



//Main Page

const goToLoginPage = () =>{

    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';

};

middleContent.addEventListener('click',e=>{
    //console.log(e.target.classList);

    if(e.target.classList[1]==='main-btn'){
        goToLoginPage();
    }
});

btnTop.addEventListener('click', () =>{
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');

    if(inputUserInfo.value !=='' && inputPassword.value !==''){
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }else{
        goToLoginPage();
        loginModal.style.display='block';
    }
});

//Login Page

modalX.addEventListener('click', ()=>{
    loginModal.style.display = 'none';
});

loginFormBtn.addEventListener('click', ()=>{
    const loginUserInfo = document.querySelector('.login-user-info');
    const loginPassword = document.querySelector('.login-password');

    if(loginUserInfo.value !=='' && loginPassword.value !==''){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    }else{
        loginModal.style.display='block';
    }
});

//News feed page
//Post Modal

postBtn.addEventListener('click', ()=>{
    modal.style.display='block';
    modalWrapper.classList.add
    ('modal-wrapper-display');
    buttonBox.classList.add('button-box-display');

});

const changeOpacity = (x) =>{
    modalPostBtn.style.opacity=x;
    modalFooterPlus.style.opacity=x;
}

postModalX.addEventListener('click', ()=>{
    modal.style.display='none';
    modalWrapper.classList.remove('modal-wrapper-display');
    buttonBox.classList.remove('button-box-display');

    if(modalInput.value !==''){
        modalInput.value='';
        changeOpacity(0.5);
    }
});

modalInput.addEventListener('keypress', e =>{
    if(e.target.value!==''){
        changeOpacity(1);
    }
});

modalInput.addEventListener('blur', (e)=>{
    if(e.target.value){
        changeOpacity(0.5);
    }
});


// Dark Mode toggle button

const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

sun.addEventListener('click',()=>{
    sun.classList.toggle('night');

    Array.from(darkElements1).map(
        (darkEle1) =>{
            darkEle1.classList.toggle('dark-1')
        });
    Array.from(darkElements2).map(
        (darkEle2)=>{
            darkEle2.classList.toggle('dark-2')
        });
    Array.from(lightTexts).map(
        (lightText)=>{
            lightText.classList.toggle('light')
        });
    Array.from(borders).map(
        (Border)=>{
            Border.classList.toggle('border-color')
        });
})

//Toggle heart button

function toggleHeartBtn(postId){
    
    var heartBtn = document.getElementById('heart-btn-'+ postId);

    if(heartBtn.classList.contains('far')){
        heartBtn.classList.remove('far');
        heartBtn.classList.add('fa-solid');
        heartBtn.style.color = '#f50057';
    }else{
        heartBtn.classList.remove('fa-solid');
        heartBtn.classList.add('far');
        heartBtn.style.color = '';
    }
}
