let Timeplay = 8
let score = 0
let isPlaying;

const scoredisplay = document.getElementById('Score')
const TimeDisplay = document.getElementById('Time')
const wordinput = document.getElementById('word-input')
const massage = document.getElementById('massage')
const currentWord = document.getElementById('Current-Word')
const seconds = document.getElementById('seconds')
const title = document.getElementById('title')
const bodyBg = document.getElementById('bg')

const words = [
    'consider',
    'minute',
    'accord',
    'evident',
    'practice',
    'intend',
    'concern',
    'commit',
    'issue',
    'approch',
    'establish',
    'utter',
    'conduct',
    'engage',
    'obtain',
    'scarce',
    'policy',
    'stright',
    'stock',
    'apprent',
    'property',
    'fancy',
    'concept',
    'court',
    'appoint',
    'passage',
    'vain',
    'instance',
    'coast',
    'project',
    'commission',
    'constant',
    'circimatances',
    'constitute',
    'level',
    'affect',
    'institue',
    'render',
    'appeal',
    'generate',
    'theory',
    'range',
    'campaign',
    'league',
    'labor',
    'grant',
    'dwell',
    'entertain',
    'contract',
    'earnest',
    'yield',
    'wander',
    'insist',
    'knight',
    'convice',
    'inspire',
    'converstion',
    'skill',
    'harry',
    'finacial',
    'reflect',
    'novel',
    'furnish',
    'compel',
    'venture',
    'territory',
    'temper',
    'bent',
    'intimate',
    'undertake',
    'majority',
    'assert',
    'crew',
    'chamber',
    'humble',
    'scheme',
    'keen',
    'liberl',
    'despair',
    'tide',
    'attiude',
    'justify',
    'flag',
    'merit',
    'manifest',
    'notion',
    'scale',
    'formal',
    'resource',
    'persist',
    'contempt',
    'tour',
    'plead',
    'weigh',
    'mode',
    'distination',
    'inclined',
    'attribute',
    'expert',
    'oppress',
    'content',
    'stack',
    'toil',
    'perish',
    'disposition',
    'rail',
    'allege',
    'notwithstanding',
    'lofty',
    'multitude',
    'steep',
    'heed',
    'modest',
    'partial',
    'apt',
    'esteem',
    'credible',
    'provoke',
    'tread',
    'ascertain',
    'fare',
    'perpetual',
    'decree',
    'contrive',
    'derived',
    'elaborate',
    'substaintial',
    'frontier',
    'facile',
    'cite',
    'sob',
    'warrant',
    'rider',
    'dence',
    'flourish',
    'ordain',
    'pious',
    'vex',
    'gravity',
    'suspended',
    'consicuous',
    'retort',
    'jet',
    'bolt',
    'assest',
    'purse',
    'plus',
    'sanction',
    'exalt'
]
window.addEventListener('load', () => {
    showWords(words);
    wordinput.addEventListener('input', startGame)
    setInterval(countDown, 1000)
    setInterval(checkStatus, 50)
})


function showWords(words) {
    const randomindex = Math.floor(Math.random() * words.length)
    currentWord.innerHTML = words[randomindex]
}

function countDown() {
    if (Timeplay > 0) {
        Timeplay--
    } else if (Timeplay === 0) {
        isPlaying = false
    }
    TimeDisplay.innerHTML = Timeplay
}

function checkStatus() {
    if (!isPlaying && Timeplay === 0) {
        wordinput.value = ''
        bg.style.backgroundColor = 'rgb(206, 24, 24)'

        title.innerHTML = 'Game Over!!! Your Score Is ' + score
    }

}

function startGame() {
    if (matchWord()) {
        isPlaying = true
        Timeplay = 9
        showWords(words)
        wordinput.value = ''
        score++

    }

    scoredisplay.innerHTML = score
}

function matchWord() {
    if (wordinput.value === currentWord.innerHTML) {
        massage.innerHTML = 'correct!!!'
        return true
    } else {
        massage.innerHTML = ''
        return false
    }
}