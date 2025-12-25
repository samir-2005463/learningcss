
let scope={

    userwin:0,
    comwin:0,
    tie:0,
    displayshow:function()
    {
      return`Total Score:- userwin  ${scope.userwin} computerwin ${scope.comwin} tie ${scope.tie}`
    }
  };
function samir()
{
    let variable;
    variable=Math.random()*3;
if(variable>0&&variable<=1)
{
  
  return 'bat';
}
else if(variable>1&&variable<=2)
{
   
    return 'ball';
}
else
{
   
    return 'stump';
}

}
function getresult( userchoice, computerchoice)
{
if(userchoice==='bat')
   {

  if(computerchoice==='ball')
{
  scope.userwin++;
  return'user winner';
}
else if(computerchoice==='bat')
{
  scope.tie++;
  return`it's a tie`;
}
else
{
  scope.comwin++;
  return'computer has won';
}
 }
   
else if(userchoice==='ball')
   {
if(computerchoice==='ball')
{
  scope.tie++;
  return`it's a tie`;
}
else if(computerchoice==='bat')
{
    scope.comwin++;
  return'computer has won';
}
else
{
   scope.userwin++;
  return'user has won';
}

   }
   else
    {
    if(computerchoice==='ball')
{
    scope.comwin++;
 return'computer has won';
}
else if(computerchoice==='bat')
{
   scope.userwin++;
 return'user has won'; 
}
else
{
  scope.tie++;
   return`it's a tie`;
}

}
}






