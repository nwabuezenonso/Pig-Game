var scores, roundScore, activePlayer,dice,gameplaying

init()

//CHANGING THE DICE
document.querySelector('.btn-roll').addEventListener('click',function(){
   
   if(gameplaying){
      dice = Math.floor(Math.random() *6 + 1)

      var diceDom = document.querySelector('.dice');
      diceDom.style.display = 'block'
      diceDom.src = 'dice-' + dice + '.png';
   
      if(dice !== 1){
         roundScore += dice;
         document.querySelector('#current-' + activePlayer).textContent = roundScore
      }else{
        nextplayer()
      }
   
   }


});

//HOLDING THE SCORE IN THE PANEL
document.querySelector('.btn-hold').addEventListener('click',function(){
   if(gameplaying){
      scores[activePlayer] += roundScore
      document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
      
      var finalScore = document.querySelector('.final-score').value
      var winningscore;

      if(finalScore){
         winningscore = finalScore
      }else{
         winningscore = 100
      }

      if(scores[activePlayer] >= winningscore){
         document.querySelector('#name-' + activePlayer).textContent = 'Winner';
         document.querySelector('.dice').style.display = 'none';
         document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner')
         document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
         gameplaying = false
      }else{
         nextplayer()
      }
   }
});


// FUNCTION FOR THE NEXT PLAYER
function nextplayer(){
   activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
   roundScore = 0;
      
   document.getElementById('current-0').textContent = 0;
   document.getElementById('current-1').textContent = 0;
   document.querySelector('.player-0-panel').classList.toggle('active');
   document.querySelector('.player-1-panel').classList.toggle('active');

   document.querySelector('.dice').style.display = 'none';
}

//CLICKING ON THE NEW BUTTON
document.querySelector('.btn-new').addEventListener('click', init);


//INIT FUNCTION
function init(){
   scores = [0, 0 ];
   activePlayer = 0;
   roundScore = 0;
   gameplaying = true
   document.querySelector('.dice').style.display = 'none'
   document.getElementById('score-0').textContent = 0;
   document.getElementById('score-1').textContent = 0;
   document.getElementById('current-0').textContent = 0;
   document.getElementById('current-1').textContent = 0;
   document.getElementById('name-0').textContent = 'Player 1';
   document.getElementById('name-1').textContent = 'Player 2';
   document.querySelector('.player-0-panel').classList.remove('winner');
   document.querySelector('.player-1-panel').classList.remove('winner');
   document.querySelector('.player-0-panel').classList.add('active');
   document.querySelector('.player-1-panel').classList.remove('active');
}