function scuberGreetingForFeet(ride){
  // Write your code here!
  let sample1;
  let sample2;
  let sample3;

  if (ride <= 400) {
    sample1 = 'This one is on me!';
    return sample1;
  } 
  else if (ride > 2000 && ride < 2500) {
    sample2 = 'I will gladly take your thirty bucks.';
    return sample2;
  } 
  else if (ride > 2500) { 
    sample3 = 'No can do.';
    return sample3;
  }
}
scuberGreetingForFeet(199);
scuberGreetingForFeet(2001);
scuberGreetingForFeet(2501);

function ternaryCheckCity(city){
  // Write your code here!
  const destination = (city === 'NYC') ? ("Ok, sounds good.") : ("No go.");
  return destination;
}
ternaryCheckCity('NYC');
ternaryCheckCity('Pittsburgh');

function switchOnCharmFromTip(tip){
  // Write your code here!
  let charmFromTip;
  switch (tip) {
    case 'generous':
      charmFromTip = "Thank you so much.";
      return charmFromTip; 
      break;

    case 'not as generous':
      charmFromTip = "Thank you.";
      return charmFromTip; 
      break;
  
    default:
      charmFromTip = "Bye.";
      return charmFromTip;
      break;
  }

}
switchOnCharmFromTip('generous');
switchOnCharmFromTip('not as generous');
switchOnCharmFromTip('thanks for everything');