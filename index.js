let num1Butt=document.getElementById('1');
let num2Butt=document.getElementById('2');
let num3Butt=document.getElementById('3');
let num4Butt=document.getElementById('4');
let num5Butt=document.getElementById('5');
let num6Butt=document.getElementById('6');
let num7Butt=document.getElementById('7');
let num8Butt=document.getElementById('8');
let num9Butt=document.getElementById('9');
let num0Butt=document.getElementById('0');
let acButton=document.getElementsByClassName('button calc__keyboard__ac')[0];
let plusButt=document.getElementById('+');
let minusButt=document.getElementById('-');
let multiplyButt=document.getElementById('x');
let divideButt=document.getElementById('/');
let equalButton=document.getElementsByClassName('operator button button--pink')[0];

let prevNum='';
let currNum='';
let i=0;//prevNum 자릿수
let j=0;
let operation='';
let result=0;
let prev;
let curr;
let display='';

num1Butt.onclick=function()
{
  numButtClicked(1);
}
num2Butt.onclick=function()
{
  numButtClicked(2);
}
num3Butt.onclick=function()
{
  numButtClicked(3);
}
num4Butt.onclick=function()
{
  numButtClicked(4);
}
num5Butt.onclick=function()
{
  numButtClicked(5);
}
num6Butt.onclick=function()
{
  numButtClicked(6);
}
num7Butt.onclick=function()
{
  numButtClicked(7);
}
num8Butt.onclick=function()
{
  numButtClicked(8);
}
num9Butt.onclick=function()
{
    numButtClicked(9);
}

function numButtClicked(num){
  if (operation=='')
  {
    prevNum+=num;
    i++;
  }
  else
  {
    currNum+=num;
    j++;
  }
  updateDisplay(num);
}

num0Butt.onclick = function()
{
  if(operation=='')
  {
    if(prevNum=='')
    {return;}
    else {
    prevNum+='0';
    i++;
    }
  }
  else {
    if(j==0)
    {return;}
    else {
    currNum+='0';
    i++;
    }
  }
  updateDisplay('0');
}

plusButt.onclick=function(){
  operButtClicked('+');
}
minusButt.onclick=function(){
  operButtClicked('-');
}
multiplyButt.onclick=function(){
  operButtClicked('x');
}
divideButt.onclick=function(){
  operButtClicked('/');
}

function operButtClicked(operButt)
{
  compute();
  operation=operButt;
  updateDisplay(operButt);
}

equalButton.onclick=function()
{
  compute();
    updateHistory();
  document.getElementsByClassName('calc__display')[0].innerHTML=String(result);
}

acButton.onclick=function()
{
  clear();
}

function updateDisplay(k)
{
  let temp=k;
  document.getElementsByClassName('calc__display')[0].innerHTML+=temp;
}

function compute()
{
  if(currNum==''){return;}
  prev=Number(prevNum);
  curr=Number(currNum);

  switch(operation)
  {
    case '+':
    result=prev+curr;
    break;

    case '-':
    result=prev-curr;
    break;

    case 'x':
    result=prev*curr;
    break;

    case '/':
    result=prev/curr
    break;
  }
  prevNum=String(result);
  i=j;
  j=0;
  operation='';
  currNum='';
}

function clear()
{
  prevNum=''
  currNum=''
  operation=''
  document.getElementsByClassName('calc__display')[0].innerHTML='';

}

function updateHistory()
{
document.getElementsByClassName('history__table')[0].innerHTML+=document.getElementsByClassName('calc__display')[0].innerHTML+'='+String(result);
}
