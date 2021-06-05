document.getElementById('heading').addEventListener('click', function (e){
    let variable;
    console.log('You have clicked the heading');
    variable= e.target;
    variable= e.target.className
    console.log(variable);
})