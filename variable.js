//変数
const log = document.getElementById('log-range');

const levelElm = document.getElementById('level');
const soldElm = document.getElementById('sold');
const levelUpElm = document.getElementById('level-up');

const table1_1_elm = document.getElementById('table1-1_elm');
const table1_2_elm = document.getElementById('table1-2_elm');
const table1_3_elm = document.getElementById('table1-3_elm');
const table1_4_elm = document.getElementById('table1-4_elm');
const table1_5_elm = document.getElementById('table1-5_elm');
const table1_6_elm = document.getElementById('table1-6_elm');
const table1_7_elm = document.getElementById('table1-7_elm');
const table1_8_elm = document.getElementById('table1-8_elm');
const table1_9_elm = document.getElementById('table1-9_elm');

const table1_1_name = document.getElementById('table1-1_name');
const table1_2_name = document.getElementById('table1-2_name');
const table1_3_name = document.getElementById('table1-3_name');
const table1_4_name = document.getElementById('table1-4_name');
const table1_5_name = document.getElementById('table1-5_name');
const table1_6_name = document.getElementById('table1-6_name');
const table1_7_name = document.getElementById('table1-7_name');
const table1_8_name = document.getElementById('table1-8_name');
const table1_9_name = document.getElementById('table1-9_name');

const table1_1_num = document.getElementById('table1-1_num');
const table1_2_num = document.getElementById('table1-2_num');
const table1_3_num = document.getElementById('table1-3_num');
const table1_4_num = document.getElementById('table1-4_num');
const table1_5_num = document.getElementById('table1-5_num');
const table1_6_num = document.getElementById('table1-6_num');
const table1_7_num = document.getElementById('table1-7_num');
const table1_8_num = document.getElementById('table1-8_num');
const table1_9_num = document.getElementById('table1-9_num');

const table2_1_elm = document.getElementById('table2-1_elm');
const table2_2_elm = document.getElementById('table2-2_elm');
const table2_3_elm = document.getElementById('table2-3_elm');
const table2_4_elm = document.getElementById('table2-4_elm');
const table2_5_elm = document.getElementById('table2-5_elm');
const table2_6_elm = document.getElementById('table2-6_elm');
const table2_7_elm = document.getElementById('table2-7_elm');
const table2_8_elm = document.getElementById('table2-8_elm');
const table2_9_elm = document.getElementById('table2-9_elm');

const table2_1_name = document.getElementById('table2-1_name');
const table2_2_name = document.getElementById('table2-2_name');
const table2_3_name = document.getElementById('table2-3_name');
const table2_4_name = document.getElementById('table2-4_name');
const table2_5_name = document.getElementById('table2-5_name');
const table2_6_name = document.getElementById('table2-6_name');
const table2_7_name = document.getElementById('table2-7_name');
const table2_8_name = document.getElementById('table2-8_name');
const table2_9_name = document.getElementById('table2-9_name');

const table2_1_num = document.getElementById('table2-1_num');
const table2_2_num = document.getElementById('table2-2_num');
const table2_3_num = document.getElementById('table2-3_num');
const table2_4_num = document.getElementById('table2-4_num');
const table2_5_num = document.getElementById('table2-5_num');
const table2_6_num = document.getElementById('table2-6_num');
const table2_7_num = document.getElementById('table2-7_num');
const table2_8_num = document.getElementById('table2-8_num');
const table2_9_num = document.getElementById('table2-9_num');


const buyOpen = document.getElementById('modal_open1');
const makeOpen = document.getElementById('modal_open2');

const buyToL = document.getElementById('buy-left');
const buyToR = document.getElementById('buy-right');
const buyName = document.getElementById('content1');
const buyImg = document.getElementById('img1');
const buyNedan = document.getElementById('nedan');
const buyHave = document.getElementById('buy-have');
const buyOpenLv = document.getElementById('buyOpenLv');
const buyOpenLvElm = document.getElementById('buyOpenLvElm');

const makeToL = document.getElementById('make-left');
const makeToR = document.getElementById('make-right');
const makeName = document.getElementById('content2');
const makeImg = document.getElementById('img2');
const income = document.getElementById('income');
const makeHave = document.getElementById('make-have');
const makeOpenLv = document.getElementById('makeOpenLv');
const makeOpenLvElm = document.getElementById('makeOpenLvElm');

const ing1 = document.getElementById('ing1');
const ing2 = document.getElementById('ing2');
const ing3 = document.getElementById('ing3');
const ing1_img = document.getElementById('ing1-img');
const ing2_img = document.getElementById('ing2-img');
const ing3_img = document.getElementById('ing3-img');
const ing1_have = document.getElementById('ing1-have');
const ing2_have = document.getElementById('ing2-have');
const ing3_have = document.getElementById('ing3-have');
const ing1_need = document.getElementById('ing1-need');
const ing2_need = document.getElementById('ing2-need');
const ing3_need = document.getElementById('ing3-need');

const buy1 = document.getElementById('buy1');
const buy10 = document.getElementById('buy10');
const buyAll = document.getElementById('buyAll');

const sell1 = document.getElementById('sell1');
const sell10 = document.getElementById('sell10');
const sellAll = document.getElementById('sellAll');

const make1 = document.getElementById('make1');
const make10 = document.getElementById('make10');
const makeAll = document.getElementById('makeAll');

const moneyElm1 = document.getElementById('money1');
const moneyElm2 = document.getElementById('money2');

let money = 115;
let level = 1;
let sold = 0;
let levelUp = 4;
let buyPage = 1;
let makePage = 1;

//配列
//buy = [材料名],[値段],[画像ファイル],[持っている数],[解放レベル]
let buyDisplay = [
    [null],
    [['小麦'],[30],['img/komugi.png'],[0],[1]],
    [['小豆'],[50],['img/azuki.png'],[0],[1]],
    [['チョコレート'],[80],['img/choko.png'],[0],[2]],
    [['卵'],[90],['img/tamago.png'],[0],[2]],
    [['牛乳'],[105],['img/gyunyu.png'],[0],[2]],
    [['砂糖'],[110],['img/satou.png'],[0],[3]],
    [['バター'],[120],['img/bata.png'],[0],[3]],
    [['塩'],[160],['img/sio.png'],[0],[4]],
    [['はちみつ'],[200],['img/hatimitu.png'],[0],[4]]
];

/*make =[名前],[[材料の種類],[材料の数]],[[材料の種類],[材料の数]],[[材料の種類],[材料の数]],
[収入],[画像ファイル],[所持数],[解放レベル]*/
let makeDisplay = [
    [null],
    [['パン'],[[1],[1]],[[0],[0]],[[0],[0]],[45],['img/pan.png'],[0],[1]],
    [['アンパン'],[[1],[2]],[[2],[1]],[[0],[0]],[130],['img/anpan.png'],[0],[1]],
    [['チョココロネ'],[[1],[1]],[[3],[1]],[[0],[0]],[270],['img/korone.png'],[0],[2]],
    [['クリームパン'],[[1],[1]],[[4],[1]],[[5],[1]],[440],['img/kurimu.png'],[0],[2]],
    [['ウシジマパン'],[[1],[3]],[[6],[2]],[[7],[1]],[760],['img/ushijima.png'],[0],[3]],
    [['塩パン'],[[1],[1]],[[7],[1]],[[8],[1]],[810],['img/siopan.png'],[0],[4]],
    [['ベーグル'],[[1],[2]],[[6],[2]],[[9],[1]],[1080],['img/beguru.png'],[0],[4]]
];
