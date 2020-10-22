var score1=[],score2=[], total1=0,total2=0; n=20;
function getRun()
{
    var run;
    run=Math.random();
    run=run*10;
    run=parseInt(run);
    return run;
}
    for(var i=0;i<=n;i++)
    {
        score1=getRun();
        if(score1<=6 &&score1!=5)
{
    total1=total1+score1;
}
else{
    getRun();
}
}
console.log(total1);
for(var i=0;i<=n;i++)
    {
        score2=getRun();
        if(score2<=6 &&score2!=5)
{
    total2=total2+score2;
}
else{
    getRun();
}
}
console.log(total2);
if(total1>total2)
{
    console.log('teamA win')
}
else{
    console.log('teamB win')
}

/*i=Math.random();
s=parseInt(5.77);
console.log(i);
console.log(s);*/