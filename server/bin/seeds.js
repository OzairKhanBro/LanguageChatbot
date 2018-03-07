const mongoose = require('mongoose');
const Frases = require('../models/Brain');
const {dbURL} = require('../config');

mongoose.connect(dbURL);

const tags = [
    {
        tag:['welcome'],
        question:[
            {value:'how are you?, I\'m languinator I want help you to learn lenguages, \nif you want to train your vocabulary type play and \nI\'ll show you same picture and you have to guess the word',tag:'welcome'},
            {value:'hi, how are you?, I\'m languinator I want help you to learn lenguages, \nif you want to train your vocabulary type play and \nI\'ll show you same picture and you have to guess the word ?',tag:'welcome'},
            {value:'hello, how are you?, I\'m languinator I want help you to learn lenguages, \nif you want to train your vocabulary type play and \nI\'ll show you same picture and you have to guess the word ?',tag:'welcome'},
            {value:'hey!!, how are you?, I\'m languinator I want help you to learn lenguages, \nif you want to train your vocabulary type play and \nI\'ll show you same picture and you have to guess the word ?',tag:'welcome'},
            {value:'What\'s up?, how are you?, I\'m languinator I want help you to learn lenguages, \nif you want to train your vocabulary type play and \nI\'ll show you same picture and you have to guess the word ?',tag:'welcome'}
        ],
        answer:[
            {value:'hi',tag:'welcome'},
            {value:'hello',tag:'welcome'},
            {value:'hey',tag:'welcome'},
            {value:'wassup',tag:'welcome'}
        ],
        reply:[
            {value:'really good couse I\'m a bot, and you?',tag:'welcome'}
        ]
    },
    {
        tag:['greetings'],
        question:[{value:'Thanks but I\'m just a bot',tag:'greetings'}],
        answer:[
            {value:'you are amazing',tag:'greetings'},
            {value:'you are incredible',tag:'greetings'},
            {value:"i love you",tag:'positive'}
        ]
    },
    {
        tag:['negative'],
        question:[{value:'why?',tag:'feeling'}],
        answer:[
            {value:'bad',tag:'negative'},
            {value:'not so good',tag:'negative'},
            {value:'sad',tag:'negative'}
        ]
    },
    {
        tag:[ 'positive'],
        question:[{value:'alsome!!, Why?',tag:'feeling'}],
        answer:[
            {value:'I am amazing',tag:'positive'},
            {value:'I\'m amazing',tag:'positive'},
            {value:'I am great',tag:'positive'},
            {value:'I\'m great',tag:'positive'},
            {value:'I am good',tag:'positive'},
            {value:'I\'m good',tag:'positive'},
            {value:'I am fine',tag:'positive'},
            {value:'I\'m fine',tag:'positive'},
            {value:'good',tag:'positive'},
            {value:'great',tag:'positive'},
            {value:'amazing',tag:'positive'},
            {value:'fine',tag:'positive'}
        ]
    },
    {
        tag:['apologize'],
        question:[{value:'why are you asking sorry?',tag:'apologize'}],
        answer:[
            {value:'sorry',tag:'apologize'},
            {value:"i'm sorry",tag:'apologize'}
        ]
    },
    {
        tag:['because'],
        question:[{value:'I will see!!',tag:'deduction'}],
        answer:[
            {value:'because',tag:'because'},
            {value:'because I feel good',tag:'because'},
            {value:'because I am',tag:'because'},
            {value:'because yes',tag:'because'},
            {value:'because no',tag:'because'},
            {value:'because is the way I am',tag:'because'},
            {value:'because is the way I feel',tag:'because'},
            {value:'because I feel bad',tag:'because'}
        ],
        reply:[{value:'',tag:''}]
    },
    {
        tag:['qBotFeeling'],
        question:[{value:'Everythin Ok! you?',tag:''}],
        answer:[
            {value:'how are you',tag:'qBotFeeling'},
            {value:'how are you?',tag:'qBotFeeling'},
            {value:'how is going?',tag:'qBotFeeling'},
            {value:'how was your day?',tag:'qBotFeeling'},
            {value:'what\'s up?',tag:'qBotFeeling'},
            {value:'what you doing?',tag:'qBotFeeling'}]
    },
    {
        tag:['qBotName'],
        question:[{value:'Languinator :)',tag:'positive'}],
        answer:[
            {value:'What is your name?',tag:'qBotName'},
            {value:'What is your name',tag:'qBotName'},
            {value:'What\'s your name',tag:'qBotName'},
            {value:'What\'s your name?',tag:'qBotName'},
            {value:'your name',tag:'qBotName'},
            {value:'your name?',tag:'qBotName'}
        ]
    },
    {
        tag:['qBotHome'],
        question:[{value:'In Matadero',tag:'positive'}],
        answer:[
            {value:'Where do you live?',tag:'qBotHome'},
            {value:'Where you live?',tag:'qBotHome'},
            {value:'Where do you live',tag:'qBotHome'},
            {value:'Where you live',tag:'qBotHome'}
        ]
    },
    {
        tag:['game'],
        question:[{value:'we play?',tag:'game'}],
        answer:[{value:'yes',tag:'game'}],
        reply:[
        {value:'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb',tag:'house'},
        {value:'https://png.pngtree.com/element_pic/16/11/21/d74cad98c171360684fbd71ffb9d4dde.jpg',tag:'ball'},
        {value:'https://png.pngtree.com/element_pic/17/03/08/e7e497522e9e7dd6ac0a21910eb34759.jpg',tag:'plate'},
        {value:'https://vignette.wikia.nocookie.net/b__/images/3/35/Clock.png/revision/latest?cb=20130523115805&path-prefix=bloons',tag:'clock'},
        {value:'http://www.freepngimg.com/download/sun/4-2-sun-png-picture.png',tag:'sun'},
        {value:'https://cdn.shopify.com/s/files/1/1061/1924/products/Moon_emoji_icon_png_large.png?v=1480481021',tag:'moon'},
        {value:'http://www.pngmart.com/files/3/Knife-PNG-Free-Download.png',tag:'knife'}
    ]
    },{
        tag:['placesToBuy'],
        question:[{value:'Where do you usually go?',tag:'placesToBuy'},
                  {value:'What are you going to buy?',tag:''}],
        answer:[
            {value:'supermarket',tag:'placesToBuy'},
            {value:'mall',tag:'placesToBuy'}
        ]
    },{
        tag:['placesToEnjoy'],
        question:[{value:'Can I join to you?',tag:'positive'}],
        answer:[
            {value:'cinema',tag:'placesToEnjoy'},
            {value:'home',tag:'placesToEnjoy'}
        ]
    },{
        tag:['fruit'],
        question:[{value:'I love ***',tag:'positive'}],
        answer:[
            {value:'bananas',tag:'fruit'},
            {value:'oranges',tag:'fruit'}
        ]
    },{
        tag:['food'],
        question:[{value:'I like ***',tag:'positive'}],
        answer:[
            {value:'sushi',tag:'food'},
            {value:'paella',tag:'food'}
        ]
    },{
        tag:['emotion-joy-positive'],
        question:[{value:'I am so glad for you',tag:'positive'}],
        answer:[
            {value:'joy-positive',tag:'emotion-joy-positive'}
        ]

    },{
        tag:['emotion-joy-negative'],
        question:[{value:'That is cool! but relax time of coffe \n in Plaza Mayor',tag:'positive'}],
        answer:[
            {value:'joy-negative',tag:'emotion-joy-negative'}
        ]

    },{
        tag:['emotion-sadness-positive'],
        question:[{value:'Good for you!',tag:'positive'}],
        answer:[
            {value:'sadness-positive',tag:'emotion-sadness-positive'}
        ]

    },{
        tag:['emotion-sadness-negative'],
        question:[{value:'I am so sorry! :(',tag:'negative'}],
        answer:[
            {value:'sadness-negative',tag:'emotion-sadness-negative'}
        ]

    },{
        tag:['emotion-fear-positive'],
        question:[{value:'Oh my god! owwwwww!',tag:'positive'}],
        answer:[
            {value:'fear-positive',tag:'emotion-fear-positive'}
        ]

    },{
        tag:['emotion-fear-negative'],
        question:[{value:'Everything is going yo be ok!',tag:'positive'}],
        answer:[
            {value:'fear-negative',tag:'emotion-fear-negative'}
        ]

    },{
        tag:['emotion-disgust-positive'],
        question:[{value:'I am impressed!',tag:'positive'}],
        answer:[
            {value:'disgust-positive',tag:'emotion-disgust-positive'}
        ]

    },{
        tag:['emotion-disgust-negative'],
        question:[{value:'Grrrrgggggg!!',tag:'positive'}],
        answer:[
            {value:'disgust-negative',tag:'emotion-disgust-negative'}
        ]

    },{
        tag:['emotion-anger-positive'],
        question:[{value:'Relax time of coffe in Plaza Mayor ;)',tag:'positive'}],
        answer:[
            {value:'anger-positive',tag:'emotion-anger-positive'}
        ]

    },{
        tag:['emotion-anger-negative'],
        question:[{value:'I am so sorry! :(',tag:'positive'}],
        answer:[
            {value:'anger-negative',tag:'emotion-anger-negative'}
        ]

    },{
        tag:['emotion-neutral'],
        question:[{value:'What can I say, I am a robot!!!!',tag:'neutral'}],
        answer:[
            {value:'sadness-neutral',tag:'emotion-neutral'},
            {value:'joy-neutral',tag:'emotion-neutral'},
            {value:'fear-neutral',tag:'emotion-neutral'},
            {value:'disgust-neutral',tag:'emotion-neutral'},
            {value:'anger-neutral',tag:'emotion-neutral'}
        ]

    }
]

Frases.collection.drop();

Frases.create(tags, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${tags.length} tag`)
  });