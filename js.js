let keyPress = document.querySelector('.inputKey')
keyPress.addEventListener('keydown',function(){
    console.log('keydown')
})
keyPress.addEventListener('keypress', function(){
    console.log('keypress')
})
keyPress.addEventListener('keyup',function(){
    console.log('keyup')
})