const albedoObj = document.getElementById('albedo');
const amberObj = document.getElementById('amber');
const ayakaObj = document.getElementById('ayaka');
const beidouObj = document.getElementById('beidou');
const childeObj = document.getElementById('childe');
const ganyuObj = document.getElementById('ganyu');
const kazuhaObj = document.getElementById('kazuha');
const raidenObj = document.getElementById('raiden');
const thomaObj = document.getElementById('thoma');
const ventiObj = document.getElementById('venti');
const xiaoObj = document.getElementById('xiao');
const zhongliObj = document.getElementById('zhongli');

console.log("===================")
console.log(document.URL)
console.log("===================")
albedoObj.addEventListener('click', function(evt) {
    console.log('albedo button clicked ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

amberObj.addEventListener('click', function(evt) {
  console.log('amber button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});
 
ayakaObj.addEventListener('click', function(evt) {
  console.log('ayaka button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

beidouObj.addEventListener('click', function(evt) {
  console.log('beidou button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

childeObj.addEventListener('click', function(evt) {
    console.log('childe button clicked ' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

ganyuObj.addEventListener('click', function(evt) {
  console.log('ganyu button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

kazuhaObj.addEventListener('click', function(evt) {
  console.log('kazuha button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});
 
raidenObj.addEventListener('click', function(evt) {
  console.log('raiden button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

thomaObj.addEventListener('click', function(evt) {
  console.log('thoma button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

ventiObj.addEventListener('click', function(evt) {
  console.log('venti button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

xiaoObj.addEventListener('click', function(evt) {
  console.log('xiao button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

zhongliObj.addEventListener('click', function(evt) {
  console.log('zhongli button clicked ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

//CALENDAR//
const userSubmitObj = document.getElementById('userSubmit');
 
userSubmitObj.addEventListener('click', function(){
    console.log('User submit button clicked');
 
    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is ' + userBday);
 
    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);

    if (isNaN(whichMonth)) {
      console.log('badMonth');
      return
    }
 
    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth);
 
    let AstroSign = "";
    
    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "raiden";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "amber";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "kazuha";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "venti";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "ganyu";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "beidou";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "ayaka";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "childe";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "zhongli";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "thoma";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "albedoz";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "xiao";
      }
 
      console.log('AstroSign is: ' + AstroSign);
      userPicked(AstroSign);
});

//SYMBOLS//
const sndAlbedoObj=document.getElementById('sndAlbedo');
const sndAmberObj=document.getElementById('sndAmber');
const sndAyakaObj=document.getElementById('sndAyaka');
const sndBeidouObj=document.getElementById('sndBeidou');
const sndChildeObj=document.getElementById('sndChilde');
const sndGanyuObj=document.getElementById('sndGanyu');
const sndKazuhaObj=document.getElementById('sndKazuha');
const sndRaidenObj=document.getElementById('sndRaiden');
const sndThomaObj=document.getElementById('sndThoma');
const sndVentiObj=document.getElementById('sndVenti');
const sndXiaoObj=document.getElementById('sndXiao');
const sndZhongliObj=document.getElementById('sndZhongli');


function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'thoma':
      imgOutputObj.src = './gif/thoma.gif';
      titleOutputObj.innerHTML = 'Thoma';
      dateRangeObj.innerHTML = 'Mar. 21 ~ Apr. 19';
      infoOutputObj.innerHTML = '<p>Thoma is a passionate and determined person and much like the Aries excels in social situations. It is in the Aries nature to take action and do what they can to help those around them and getting any task done no matter what; which doesn’t sound like a far cry from Thoma being well known as a "fixer" around Inazuma.</p>';
      stopAllAudio();
      sndThomaObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'zhongli':
      imgOutputObj.src = './gif/zhongli.gif';
      titleOutputObj.innerHTML = 'Zhongli';
      dateRangeObj.innerHTML = 'Apr. 20 ~ May. 20';
      infoOutputObj.innerHTML = '<p>When it comes to the sign of the bull, no one is more fitting than the sophisticated Geo Archon, Zhongli. Tauruses are practical, responsible, patient, and devoted people; it’s clear that Zhongli fits the bill. Tauruses enjoy surrounding themselves with love and beauty, and Liyue provides both beautiful scenery and also great love for Rex Lapis.</p>';
      stopAllAudio();
      sndZhongliObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'childe':
      imgOutputObj.src = './gif/childe.gif';
      titleOutputObj.innerHTML = 'Childe';
      dateRangeObj.innerHTML = 'May. 21 ~ Jun. 21';
      infoOutputObj.innerHTML = '<p>Geminis are notorious for embodying two very different personalities, just as Childe does. On one hand, there is the fun-loving, gentle, and charming side of him when around his younger brother Teucer. On the other, there is a blood-thirsty, cruel Harbinger that vows his loyalty to the Fatui.</p>';
      stopAllAudio();
      sndChildeObj.play();
      symbol.hidden = !symbol.hidden;
      break;  

    case 'ayaka':
      imgOutputObj.src = './gif/ayaka.gif';
      titleOutputObj.innerHTML = 'Ayaka';
      dateRangeObj.innerHTML = 'Jun. 22 ~ Jul. 22';
      infoOutputObj.innerHTML = '<p>Miss Kamisato Ayaka is a gentle soul and is the embodiment of the loyal Cancer. Cancers are known to be deeply sentimental people that are incredibly loyal and emotional. The Cancer is a caring person and their whole world revolves around their family. This is perfectly mirrored in Ayaka’s sense of duty and honor with representing the Kamisato Clan.</p>';
      stopAllAudio();
      sndAyakaObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'beidou':
      imgOutputObj.src = './gif/beidou.gif';
      titleOutputObj.innerHTML = 'Beidou';
      dateRangeObj.innerHTML = 'Jul. 23 ~ Aug. 22';
      infoOutputObj.innerHTML = '<p> Leos and Captain Beidou often find themselves surrounded by a sea of friends as they tend to attract others with their leadership skills, cheerful humor, and attractive confidence. Beidou is a generous, caring person, always putting her crew and their needs first. With all her strengths and weaknesses, it’s clear that no one fits the sign of the lion’s fiery attitude better than Captain Beidou herself.</p>';
      stopAllAudio();
      sndBeidouObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'ganyu':
      imgOutputObj.src = './gif/ganyu.gif';
      titleOutputObj.innerHTML = 'Ganyu';
      dateRangeObj.innerHTML = 'Aug. 23 ~ Sept. 22';
      infoOutputObj.innerHTML = '<p>As the secretary for the Liyue Qixing, Ganyu is naturally a loyal, hardworking, yet shy person. Ganyu and Virgos are both very timid and often worrisome. Always busy with their work, Virgos are very practical and organized individuals.</p>';
      stopAllAudio();
      sndGanyuObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'venti':
      imgOutputObj.src = './gif/venti.gif';
      titleOutputObj.innerHTML = 'Venti';
      dateRangeObj.innerHTML = 'Sept. 23 ~ Oct. 22';
      infoOutputObj.innerHTML = '<p>Venti is a bard who is secretly the God of Anemo. He loves to walk around singing songs, socializing with the citizens of Mondstadt, and takes breaks to stop in and enjoy the local taverns. Venti is light-hearted, making him easy to get along with by the other characters.</p>';
      stopAllAudio();
      sndVentiObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'kazuha':
      imgOutputObj.src = './gif/Kazuha.gif';
      titleOutputObj.innerHTML = 'Kazuha';
      dateRangeObj.innerHTML = 'Oct. 23 ~ Nov. 21';
      infoOutputObj.innerHTML = '<p>Despite Kazuha’s normally quiet demeanor, he can be assertive at times when he needs to be; such as the time he confronted the Treasure Hoarder that attempted to steal his unawakened Vision and even the mighty Raiden Shogun herself. Kazuha, much like the Scorpio, is a loyal friend and will shake off their peaceful disposition the moment someone they care about is in danger.</p>';
      stopAllAudio();
      sndKazuhaObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'amber':
      imgOutputObj.src = './gif/amber.gif';
      titleOutputObj.innerHTML = 'Amber';
      dateRangeObj.innerHTML = 'Nov. 22 ~ Dec. 21';
      infoOutputObj.innerHTML = '<p>Amber is the outgoing Outrider who helps keep the area around Mondstadt safe. She loves going on small adventures and is great at performing scouting missions. She is blessed with a pyro vision that helps to compliment her skill with the bow.</p>';
      stopAllAudio();
      sndAmberObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'raiden':
      imgOutputObj.src = './gif/raiden.gif';
      titleOutputObj.innerHTML = 'Raiden';
      dateRangeObj.innerHTML = 'Dec. 22 ~ Jan. 19';
      infoOutputObj.innerHTML = '<p>The Raiden Shogun’s reign all surrounds the idea of eternity, keeping things the way they are, according to tradition. However, it is the Shogun’s softer side that reveals another facet of both her and the Capricorn. The Raiden’s tyranny is all fueled by the pain of losing those who were dear to her; her family.</p>';
      stopAllAudio();
      sndRaidenObj.play();
      symbol.hidden = !symbol.hidden;
      break;

    case 'xiao':
      imgOutputObj.src = './gif/xiao.gif';
      titleOutputObj.innerHTML = 'Xiao';
      dateRangeObj.innerHTML = 'Jan. 20 ~ Feb. 18';
      infoOutputObj.innerHTML = '<p>Xiao is an initially cold character. However, after some digging, the player discovers that he simply avoids emotional expression, thinking it to be a trivial human matter. Xiao also shares the need to have time away from others in order to heal and restore power.</p>';
      stopAllAudio();
      sndXiaoObj.play();
      symbol.hidden = !symbol.hidden;
      break;
      
    case 'albedo':
      imgOutputObj.src = './gif/albedo.gif';
      titleOutputObj.innerHTML = 'Albedo';
      dateRangeObj.innerHTML = 'Feb. 19 ~ Mar. 20';
      infoOutputObj.innerHTML = '<p>Albedo truly treasures the time he has on his own. He typically spends his alone time painting and taking in the scenery, enjoying and taking in both his love of arts and nature. While Albedo is a quiet person most of the time, he still finds himself in the company of many new people due to his friendly disposition, which is yet again typical of a Pisces. </p>';
      stopAllAudio();
      sndAlbedoObj.play();
      symbol.hidden = !symbol.hidden;
      break;
    default: 
    }
  }

function stopAllAudio() {
  sndAlbedoObj.pause();
  sndAlbedoObj.currentTime = 0;
  sndAmberObj.pause();
  sndAmberObj.currentTime = 0;
  sndAyakaObj.pause();
  sndAyakaObj.currentTime = 0;
  sndBeidouObj.pause();
  sndBeidouObj.currentTime = 0
  sndChildeObj.pause();
  sndChildeObj.currentTime = 0;
  sndGanyuObj.pause();
  sndGanyuObj.currentTime = 0;
  sndKazuhaObj.pause();
  sndKazuhaObj.currentTime = 0;
  sndRaidenObj.pause();
  sndRaidenObj.currentTime = 0;
  sndThomaObj.pause();
  sndThomaObj.currentTime = 0;
  sndVentiObj.pause();
  sndVentiObj.currentTime = 0;
  sndXiaoObj.pause();
  sndXiaoObj.currentTime = 0;
  sndZhongliObj.pause();
  sndZhongliObj.currentTime = 0;
}

//SYMBOLS//
const symbol = document.getElementById('symbol');
 
const closeSymbolObj = document.getElementById('btn-symbol-close');
closeSymbolObj.addEventListener('click', function(){
  symbol.hidden = !symbol.hidden;
  stopAllAudio();
});
 
const imgOutputObj = document.getElementById('imgOutput');
const titleOutputObj = document.getElementById('titleOutput');
const dateRangeObj = document.getElementById('dateRange');
const infoOutputObj = document.getElementById('infoOutput');

//HELP SYMBOL//
const help = document.getElementsByClassName('helpButtonClass').item(0);
console.log(help)
const helpSymbol = document.getElementsByClassName('helpSymbol').item(0);
console.log(helpSymbol)
help.addEventListener('click', function(){
  helpSymbol.hidden = !helpSymbol.hidden;
});

const closeHelpSymbolObj = document.getElementById('close-help-symbol');
closeHelpSymbolObj.addEventListener('click', function(){
  helpSymbol.hidden = !helpSymbol.hidden;
});