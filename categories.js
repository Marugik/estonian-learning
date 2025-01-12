const CATEGORIES = {
    pronouns: {
        name: "Местоимения",
        questions: [
            // Существующие
            {
                estonian: "mina/ma",
                russian: "я",
                answers: {
                    toEstonian: ["mina/ma", "sina/sa", "tema/ta", "meie/me"],
                    toRussian: ["я", "ты", "он/она", "мы"]
                },
                correct: 0
            },
            // Новые
            {
                estonian: "meie/me",
                russian: "мы",
                answers: {
                    toEstonian: ["mina/ma", "sina/sa", "meie/me", "teie/te"],
                    toRussian: ["я", "ты", "мы", "вы"]
                },
                correct: 2
            },
            {
                estonian: "teie/te",
                russian: "вы",
                answers: {
                    toEstonian: ["tema/ta", "meie/me", "teie/te", "nemad/nad"],
                    toRussian: ["он/она", "мы", "вы", "они"]
                },
                correct: 2
            },
            {
                estonian: "nemad/nad",
                russian: "они",
                answers: {
                    toEstonian: ["meie/me", "teie/te", "tema/ta", "nemad/nad"],
                    toRussian: ["мы", "вы", "он/она", "они"]
                },
                correct: 3
            },
            {
                estonian: "see",
                russian: "это",
                answers: {
                    toEstonian: ["see", "need", "too", "nood"],
                    toRussian: ["это", "эти", "то", "те"]
                },
                correct: 0
            }
        ]
    },
    
 basic_verbs: {
        name: "Основные глаголы",
        questions: [
            {
                estonian: "olema",
                russian: "быть",
                answers: {
                    toEstonian: ["olema", "minema", "tulema", "tegema"],
                    toRussian: ["быть", "идти", "приходить", "делать"]
                },
                correct: 0
            },
 {
                estonian: "rääkima",
                russian: "говорить",
                answers: {
                    toEstonian: ["kuulama", "rääkima", "küsima", "vastama"],
                    toRussian: ["слушать", "говорить", "спрашивать", "отвечать"]
                },
                correct: 1
            },
            {
                estonian: "kirjutama",
                russian: "писать",
                answers: {
                    toEstonian: ["lugema", "kirjutama", "õppima", "joonistama"],
                    toRussian: ["читать", "писать", "учиться", "рисовать"]
                },
                correct: 1
            },
            {
                estonian: "helistama",
                russian: "звонить",
                answers: {
                    toEstonian: ["rääkima", "helistama", "kirjutama", "saatma"],
                    toRussian: ["говорить", "звонить", "писать", "отправлять"]
                },
                correct: 1
            },
            {
                estonian: "kuulama",
                russian: "слушать",
                answers: {
                    toEstonian: ["vaatama", "kuulama", "rääkima", "küsima"],
                    toRussian: ["смотреть", "слушать", "говорить", "спрашивать"]
                },
                correct: 1
            },
            {
                estonian: "küsima",
                russian: "спрашивать",
                answers: {
                    toEstonian: ["vastama", "küsima", "rääkima", "ütlema"],
                    toRussian: ["отвечать", "спрашивать", "говорить", "сказать"]
                },
                correct: 1
            },
            {
                estonian: "vastama",
                russian: "отвечать",
                answers: {
                    toEstonian: ["küsima", "vastama", "rääkima", "kuulama"],
                    toRussian: ["спрашивать", "отвечать", "говорить", "слушать"]
                },
                correct: 1
            },
            {
                estonian: "ütlema",
                russian: "сказать",
                answers: {
                    toEstonian: ["rääkima", "küsima", "ütlema", "vastama"],
                    toRussian: ["говорить", "спрашивать", "сказать", "отвечать"]
                },
                correct: 2
            },
 {
                estonian: "kõndima",
                russian: "ходить пешком",
                answers: {
                    toEstonian: ["jooksma", "kõndima", "ujuma", "sõitma"],
                    toRussian: ["бегать", "ходить пешком", "плавать", "ездить"]
                },
                correct: 1
            },
            {
                estonian: "jooksma",
                russian: "бегать",
                answers: {
                    toEstonian: ["kõndima", "jooksma", "hüppama", "seisma"],
                    toRussian: ["ходить", "бегать", "прыгать", "стоять"]
                },
                correct: 1
            },
            {
                estonian: "ujuma",
                russian: "плавать",
                answers: {
                    toEstonian: ["jooksma", "kõndima", "ujuma", "lendama"],
                    toRussian: ["бегать", "ходить", "плавать", "летать"]
                },
                correct: 2
            },
            {
                estonian: "sõitma",
                russian: "ездить",
                answers: {
                    toEstonian: ["kõndima", "jooksma", "sõitma", "lendama"],
                    toRussian: ["ходить", "бегать", "ездить", "летать"]
                },
                correct: 2
            },
            {
                estonian: "lendama",
                russian: "летать",
                answers: {
                    toEstonian: ["ujuma", "sõitma", "lendama", "kõndima"],
                    toRussian: ["плавать", "ездить", "летать", "ходить"]
                },
                correct: 2
            },
            {
                estonian: "hüppama",
                russian: "прыгать",
                answers: {
                    toEstonian: ["jooksma", "kõndima", "hüppama", "seisma"],
                    toRussian: ["бегать", "ходить", "прыгать", "стоять"]
                },
                correct: 2
            },
            {
                estonian: "seisma",
                russian: "стоять",
                answers: {
                    toEstonian: ["istuma", "seisma", "lamama", "kõndima"],
                    toRussian: ["сидеть", "стоять", "лежать", "ходить"]
                },
                correct: 1
            },
            {
                estonian: "minema",
                russian: "идти",
                answers: {
                    toEstonian: ["tulema", "minema", "olema", "tegema"],
                    toRussian: ["приходить", "идти", "быть", "делать"]
                },
                correct: 1
            },
            {
                estonian: "tulema",
                russian: "приходить",
                answers: {
                    toEstonian: ["minema", "tulema", "olema", "tegema"],
                    toRussian: ["идти", "приходить", "быть", "делать"]
                },
                correct: 1
            },
            {
                estonian: "tegema",
                russian: "делать",
                answers: {
                    toEstonian: ["olema", "minema", "tulema", "tegema"],
                    toRussian: ["быть", "идти", "приходить", "делать"]
                },
                correct: 3
            },
            {
                estonian: "õppima",
                russian: "учиться",
                answers: {
                    toEstonian: ["töötama", "õppima", "lugema", "kirjutama"],
                    toRussian: ["работать", "учиться", "читать", "писать"]
                },
                correct: 1
            },
            {
                estonian: "töötama",
                russian: "работать",
                answers: {
                    toEstonian: ["õppima", "töötama", "puhkama", "magama"],
                    toRussian: ["учиться", "работать", "отдыхать", "спать"]
                },
                correct: 1
            },
            {
                estonian: "sööma",
                russian: "есть (кушать)",
                answers: {
                    toEstonian: ["jooma", "sööma", "magama", "elama"],
                    toRussian: ["пить", "есть", "спать", "жить"]
                },
                correct: 1
            },
            {
                estonian: "jooma",
                russian: "пить",
                answers: {
                    toEstonian: ["sööma", "jooma", "magama", "elama"],
                    toRussian: ["есть", "пить", "спать", "жить"]
                },
                correct: 1
            },
            {
                estonian: "magama",
                russian: "спать",
                answers: {
                    toEstonian: ["elama", "sööma", "magama", "jooma"],
                    toRussian: ["жить", "есть", "спать", "пить"]
                },
                correct: 2
            },
            {
                estonian: "elama",
                russian: "жить",
                answers: {
                    toEstonian: ["magama", "jooma", "sööma", "elama"],
                    toRussian: ["спать", "пить", "есть", "жить"]
                },
                correct: 3
            },
 // Глаголы повседневных действий
            {
                estonian: "pesema",
                russian: "мыть",
                answers: {
                    toEstonian: ["pesema", "puhastama", "kuivatama", "triikima"],
                    toRussian: ["мыть", "чистить", "сушить", "гладить"]
                },
                correct: 0
            },
            {
                estonian: "riietuma",
                russian: "одеваться",
                answers: {
                    toEstonian: ["pesema", "riietuma", "magama", "ärkama"],
                    toRussian: ["мыться", "одеваться", "спать", "просыпаться"]
                },
                correct: 1
            },
            {
                estonian: "ärkama",
                russian: "просыпаться",
                answers: {
                    toEstonian: ["magama", "ärkama", "riietuma", "sööma"],
                    toRussian: ["спать", "просыпаться", "одеваться", "есть"]
                },
                correct: 1
            },
            {
                estonian: "puhkama",
                russian: "отдыхать",
                answers: {
                    toEstonian: ["töötama", "õppima", "puhkama", "magama"],
                    toRussian: ["работать", "учиться", "отдыхать", "спать"]
                },
                correct: 2
            },
            {
                estonian: "koristama",
                russian: "убирать",
                answers: {
                    toEstonian: ["pesema", "koristama", "puhastama", "triikima"],
                    toRussian: ["мыть", "убирать", "чистить", "гладить"]
                },
                correct: 1
            },

            // Модальные глаголы
            {
                estonian: "võima",
                russian: "мочь",
                answers: {
                    toEstonian: ["tahtma", "võima", "pidama", "saama"],
                    toRussian: ["хотеть", "мочь", "должен", "получать"]
                },
                correct: 1
            },
            {
                estonian: "pidama",
                russian: "должен",
                answers: {
                    toEstonian: ["võima", "pidama", "tahtma", "saama"],
                    toRussian: ["мочь", "должен", "хотеть", "получаться"]
                },
                correct: 1
            },
            {
                estonian: "tohtima",
                russian: "разрешается",
                answers: {
                    toEstonian: ["võima", "pidama", "tohtima", "saama"],
                    toRussian: ["мочь", "должен", "разрешается", "получаться"]
                },
                correct: 2
            },
            {
                estonian: "suutma",
                russian: "быть в состоянии",
                answers: {
                    toEstonian: ["võima", "pidama", "suutma", "oskama"],
                    toRussian: ["мочь", "должен", "быть в состоянии", "уметь"]
                },
                correct: 2
            },
            {
                estonian: "oskama",
                russian: "уметь",
                answers: {
                    toEstonian: ["võima", "pidama", "suutma", "oskama"],
                    toRussian: ["мочь", "должен", "быть в состоянии", "уметь"]
                },
                correct: 3
            },
            {
                estonian: "tahtma",
                russian: "хотеть",
                answers: {
                    toEstonian: ["saama", "tahtma", "võima", "pidama"],
                    toRussian: ["получать", "хотеть", "мочь", "должен"]
                },
                correct: 1
            }
        ]
    },
    numbers: {
        name: "Числа",
        questions: [
            // Существующие
            {
                estonian: "üks",
                russian: "один",
                answers: {
                    toEstonian: ["kaks", "kolm", "üks", "neli"],
                    toRussian: ["два", "три", "один", "четыре"]
                },
                correct: 2
            },
            // Новые
            {
                estonian: "viis",
                russian: "пять",
                answers: {
                    toEstonian: ["neli", "viis", "kuus", "seitse"],
                    toRussian: ["четыре", "пять", "шесть", "семь"]
                },
                correct: 1
            },
            {
                estonian: "kuus",
                russian: "шесть",
                answers: {
                    toEstonian: ["viis", "kuus", "seitse", "kaheksa"],
                    toRussian: ["пять", "шесть", "семь", "восемь"]
                },
                correct: 1
            },
            {
                estonian: "seitse",
                russian: "семь",
                answers: {
                    toEstonian: ["kuus", "seitse", "kaheksa", "üheksa"],
                    toRussian: ["шесть", "семь", "восемь", "девять"]
                },
                correct: 1
            },
            {
                estonian: "kaheksa",
                russian: "восемь",
                answers: {
                    toEstonian: ["seitse", "kaheksa", "üheksa", "kümme"],
                    toRussian: ["семь", "восемь", "девять", "десять"]
                },
                correct: 1
            },
            {
                estonian: "üheksa",
                russian: "девять",
                answers: {
                    toEstonian: ["kaheksa", "üheksa", "kümme", "üksteist"],
                    toRussian: ["восемь", "девять", "десять", "одиннадцать"]
                },
                correct: 1
            },
            {
                estonian: "kümme",
                russian: "десять",
                answers: {
                    toEstonian: ["üheksa", "kümme", "üksteist", "kaksteist"],
                    toRussian: ["девять", "десять", "одиннадцать", "двенадцать"]
                },
                correct: 1
            }
        ]
    },   
 time: {
        name: "Время",
        questions: [
            {
                estonian: "hommik",
                russian: "утро",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 0
            },
            {
                estonian: "päev",
                russian: "день",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 1
            },
            {
                estonian: "õhtu",
                russian: "вечер",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 2
            },
            {
                estonian: "öö",
                russian: "ночь",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 3
            },
            {
                estonian: "täna",
                russian: "сегодня",
                answers: {
                    toEstonian: ["täna", "homme", "eile", "ülehomme"],
                    toRussian: ["сегодня", "завтра", "вчера", "послезавтра"]
                },
                correct: 0
            }
        ]
    },
 weather: {
        name: "Погода",
        questions: [
            {
                estonian: "päike",
                russian: "солнце",
                answers: {
                    toEstonian: ["vihm", "päike", "tuul", "pilv"],
                    toRussian: ["дождь", "солнце", "ветер", "облако"]
                },
                correct: 1
            },
{
        estonian: "äike",
        russian: "гроза",
        answers: {
            toEstonian: ["vihm", "äike", "tuul", "pilv"],
            toRussian: ["дождь", "гроза", "ветер", "облако"]
        },
        correct: 1
    },
    {
        estonian: "udu",
        russian: "туман",
        answers: {
            toEstonian: ["pilv", "udu", "vihm", "lumi"],
            toRussian: ["облако", "туман", "дождь", "снег"]
        },
        correct: 1
    },
            {
                estonian: "vihm",
                russian: "дождь",
                answers: {
                    toEstonian: ["päike", "lumi", "vihm", "tuul"],
                    toRussian: ["солнце", "снег", "дождь", "ветер"]
                },
                correct: 2
            },
            {
                estonian: "lumi",
                russian: "снег",
                answers: {
                    toEstonian: ["vihm", "lumi", "tuul", "pilv"],
                    toRussian: ["дождь", "снег", "ветер", "облако"]
                },
                correct: 1
            },
            {
                estonian: "tuul",
                russian: "ветер",
                answers: {
                    toEstonian: ["päike", "vihm", "tuul", "äike"],
                    toRussian: ["солнце", "дождь", "ветер", "гроза"]
                },
                correct: 2
            },
            {
                estonian: "pilv",
                russian: "облако",
                answers: {
                    toEstonian: ["päike", "vihm", "tuul", "pilv"],
                    toRussian: ["солнце", "дождь", "ветер", "облако"]
                },
                correct: 3
            },
            {
                estonian: "soe",
                russian: "тепло",
                answers: {
                    toEstonian: ["külm", "soe", "kuum", "jahe"],
                    toRussian: ["холодно", "тепло", "жарко", "прохладно"]
                },
                correct: 1
            },
            {
                estonian: "külm",
                russian: "холодно",
                answers: {
                    toEstonian: ["soe", "kuum", "külm", "jahe"],
                    toRussian: ["тепло", "жарко", "холодно", "прохладно"]
                },
                correct: 2
            }
        ]
    },
animals: {
        name: "Животные",
        questions: [
            {
                estonian: "koer",
                russian: "собака",
                answers: {
                    toEstonian: ["kass", "koer", "hiir", "hobune"],
                    toRussian: ["кошка", "собака", "мышь", "лошадь"]
                },
                correct: 1
            },
            {
                estonian: "kass",
                russian: "кошка",
                answers: {
                    toEstonian: ["koer", "kass", "jänes", "rebane"],
                    toRussian: ["собака", "кошка", "заяц", "лиса"]
                },
                correct: 1
            },
            {
                estonian: "hiir",
                russian: "мышь",
                answers: {
                    toEstonian: ["kass", "koer", "hiir", "jänes"],
                    toRussian: ["кошка", "собака", "мышь", "заяц"]
                },
                correct: 2
            },
            {
                estonian: "hobune",
                russian: "лошадь",
                answers: {
                    toEstonian: ["lehm", "siga", "lammas", "hobune"],
                    toRussian: ["корова", "свинья", "овца", "лошадь"]
                },
                correct: 3
            },
            {
                estonian: "lehm",
                russian: "корова",
                answers: {
                    toEstonian: ["siga", "lehm", "lammas", "kana"],
                    toRussian: ["свинья", "корова", "овца", "курица"]
                },
                correct: 1
            },
            {
                estonian: "lind",
                russian: "птица",
                answers: {
                    toEstonian: ["kala", "lind", "hiir", "jänes"],
                    toRussian: ["рыба", "птица", "мышь", "заяц"]
                },
                correct: 1
            },
            {
                estonian: "kala",
                russian: "рыба",
                answers: {
                    toEstonian: ["lind", "kala", "konn", "uss"],
                    toRussian: ["птица", "рыба", "лягушка", "змея"]
                },
                correct: 1
            }
        ]
    },
professions: {
        name: "Профессии",
        questions: [
            {
                estonian: "õpetaja",
                russian: "учитель",
                answers: {
                    toEstonian: ["arst", "õpetaja", "müüja", "kokk"],
                    toRussian: ["врач", "учитель", "продавец", "повар"]
                },
                correct: 1
            },
            {
                estonian: "arst",
                russian: "врач",
                answers: {
                    toEstonian: ["õpetaja", "arst", "müüja", "juuksur"],
                    toRussian: ["учитель", "врач", "продавец", "парикмахер"]
                },
                correct: 1
            },
            {
                estonian: "müüja",
                russian: "продавец",
                answers: {
                    toEstonian: ["kokk", "juuksur", "müüja", "autojuht"],
                    toRussian: ["повар", "парикмахер", "продавец", "водитель"]
                },
                correct: 2
            },
            {
                estonian: "kokk",
                russian: "повар",
                answers: {
                    toEstonian: ["müüja", "juuksur", "kokk", "õpetaja"],
                    toRussian: ["продавец", "парикмахер", "повар", "учитель"]
                },
                correct: 2
            },
            {
                estonian: "juuksur",
                russian: "парикмахер",
                answers: {
                    toEstonian: ["arst", "müüja", "kokk", "juuksur"],
                    toRussian: ["врач", "продавец", "повар", "парикмахер"]
                },
                correct: 3
            },
            {
                estonian: "autojuht",
                russian: "водитель",
                answers: {
                    toEstonian: ["müüja", "kokk", "autojuht", "ehitaja"],
                    toRussian: ["продавец", "повар", "водитель", "строитель"]
                },
                correct: 2
            }
        ]
    },
clothes: {
        name: "Одежда",
        questions: [
            {
                estonian: "särk",
                russian: "рубашка",
                answers: {
                    toEstonian: ["püksid", "särk", "kleit", "seelik"],
                    toRussian: ["брюки", "рубашка", "платье", "юбка"]
                },
                correct: 1
            },
            {
                estonian: "püksid",
                russian: "брюки",
                answers: {
                    toEstonian: ["särk", "püksid", "kleit", "seelik"],
                    toRussian: ["рубашка", "брюки", "платье", "юбка"]
                },
                correct: 1
            },
            {
                estonian: "kleit",
                russian: "платье",
                answers: {
                    toEstonian: ["seelik", "püksid", "kleit", "mantel"],
                    toRussian: ["юбка", "брюки", "платье", "пальто"]
                },
                correct: 2
            },
            {
                estonian: "kingad",
                russian: "туфли",
                answers: {
                    toEstonian: ["saapad", "kingad", "sokid", "kindad"],
                    toRussian: ["сапоги", "туфли", "носки", "перчатки"]
                },
                correct: 1
            },
            {
                estonian: "saapad",
                russian: "сапоги",
                answers: {
                    toEstonian: ["kingad", "saapad", "sokid", "kindad"],
                    toRussian: ["туфли", "сапоги", "носки", "перчатки"]
                },
                correct: 1
            },
            {
                estonian: "müts",
                russian: "шапка",
                answers: {
                    toEstonian: ["sall", "müts", "kindad", "sokid"],
                    toRussian: ["шарф", "шапка", "перчатки", "носки"]
                },
                correct: 1
            },
            {
                estonian: "jope",
                russian: "куртка",
                answers: {
                    toEstonian: ["mantel", "jope", "kampsun", "vest"],
                    toRussian: ["пальто", "куртка", "свитер", "жилет"]
                },
                correct: 1
            }
        ]
    },

    transport: {
        name: "Транспорт",
        questions: [
            {
                estonian: "auto",
                russian: "машина",
                answers: {
                    toEstonian: ["auto", "buss", "rong", "lennuk"],
                    toRussian: ["машина", "автобус", "поезд", "самолёт"]
                },
                correct: 0
            },
            {
                estonian: "buss",
                russian: "автобус",
                answers: {
                    toEstonian: ["auto", "buss", "rong", "tramm"],
                    toRussian: ["машина", "автобус", "поезд", "трамвай"]
                },
                correct: 1
            },
            {
                estonian: "rong",
                russian: "поезд",
                answers: {
                    toEstonian: ["buss", "tramm", "rong", "lennuk"],
                    toRussian: ["автобус", "трамвай", "поезд", "самолёт"]
                },
                correct: 2
            },
            {
                estonian: "lennuk",
                russian: "самолёт",
                answers: {
                    toEstonian: ["laev", "lennuk", "rong", "tramm"],
                    toRussian: ["корабль", "самолёт", "поезд", "трамвай"]
                },
                correct: 1
            },
            {
                estonian: "jalgratas",
                russian: "велосипед",
                answers: {
                    toEstonian: ["mootorratas", "jalgratas", "auto", "buss"],
                    toRussian: ["мотоцикл", "велосипед", "машина", "автобус"]
                },
                correct: 1
            }
        ]
    },

    city: {
        name: "Места в городе",
        questions: [
            {
                estonian: "pood",
                russian: "магазин",
                answers: {
                    toEstonian: ["pood", "kool", "haigla", "restoran"],
                    toRussian: ["магазин", "школа", "больница", "ресторан"]
                },
                correct: 0
            },
{
        estonian: "pangaautomaat",
        russian: "банкомат",
        answers: {
            toEstonian: ["pank", "pangaautomaat", "postkontor", "apteek"],
            toRussian: ["банк", "банкомат", "почта", "аптека"]
        },
        correct: 1
    },
    {
        estonian: "bussipeatus",
        russian: "автобусная остановка",
        answers: {
            toEstonian: ["rongijaam", "bussipeatus", "lennujaam", "sadam"],
            toRussian: ["вокзал", "автобусная остановка", "аэропорт", "порт"]
        },
        correct: 1
    },
            {
                estonian: "kool",
                russian: "школа",
                answers: {
                    toEstonian: ["pood", "kool", "haigla", "raamatukogu"],
                    toRussian: ["магазин", "школа", "больница", "библиотека"]
                },
                correct: 1
            },
            {
                estonian: "haigla",
                russian: "больница",
                answers: {
                    toEstonian: ["kool", "apteek", "haigla", "restoran"],
                    toRussian: ["школа", "аптека", "больница", "ресторан"]
                },
                correct: 2
            },
            {
                estonian: "restoran",
                russian: "ресторан",
                answers: {
                    toEstonian: ["kohvik", "pood", "restoran", "kino"],
                    toRussian: ["кафе", "магазин", "ресторан", "кино"]
                },
                correct: 2
            },
            {
                estonian: "raamatukogu",
                russian: "библиотека",
                answers: {
                    toEstonian: ["kool", "muuseum", "raamatukogu", "teater"],
                    toRussian: ["школа", "музей", "библиотека", "театр"]
                },
                correct: 2
            },
            {
                estonian: "park",
                russian: "парк",
                answers: {
                    toEstonian: ["tänav", "park", "aed", "mets"],
                    toRussian: ["улица", "парк", "сад", "лес"]
                },
                correct: 1
            }
        ]
    },

    hobbies: {
        name: "Хобби и развлечения",
        questions: [
            {
                estonian: "sport",
                russian: "спорт",
                answers: {
                    toEstonian: ["sport", "muusika", "kunst", "tants"],
                    toRussian: ["спорт", "музыка", "искусство", "танец"]
                },
                correct: 0
            },
            {
                estonian: "ujumine",
                russian: "плавание",
                answers: {
                    toEstonian: ["jooksmine", "ujumine", "suusatamine", "jalgrattasõit"],
                    toRussian: ["бег", "плавание", "катание на лыжах", "езда на велосипеде"]
                },
                correct: 1
            },
            {
                estonian: "lugemine",
                russian: "чтение",
                answers: {
                    toEstonian: ["kirjutamine", "lugemine", "joonistamine", "laulmine"],
                    toRussian: ["письмо", "чтение", "рисование", "пение"]
                },
                correct: 1
            },
            {
                estonian: "tantsimine",
                russian: "танцы",
                answers: {
                    toEstonian: ["laulmine", "tantsimine", "joonistamine", "mängimine"],
                    toRussian: ["пение", "танцы", "рисование", "игра"]
                },
                correct: 1
            },
            {
                estonian: "mängimine",
                russian: "игра",
                answers: {
                    toEstonian: ["õppimine", "lugemine", "mängimine", "magamine"],
                    toRussian: ["учёба", "чтение", "игра", "сон"]
                },
                correct: 2
            }
        ]
    },

    food_extended: {
        name: "Еда и напитки (расширенный)",
        questions: [
            {
                estonian: "supp",
                russian: "суп",
                answers: {
                    toEstonian: ["salat", "supp", "praad", "magustoit"],
                    toRussian: ["салат", "суп", "жаркое", "десерт"]
                },
                correct: 1
            },
            {
                estonian: "kartul",
                russian: "картофель",
                answers: {
                    toEstonian: ["porgand", "kartul", "kapsas", "sibul"],
                    toRussian: ["морковь", "картофель", "капуста", "лук"]
                },
                correct: 1
            },
            {
                estonian: "liha",
                russian: "мясо",
                answers: {
                    toEstonian: ["kala", "liha", "juust", "muna"],
                    toRussian: ["рыба", "мясо", "сыр", "яйцо"]
                },
                correct: 1
            },
            {
                estonian: "õun",
                russian: "яблоко",
                answers: {
                    toEstonian: ["pirn", "õun", "banaan", "apelsin"],
                    toRussian: ["груша", "яблоко", "банан", "апельсин"]
                },
                correct: 1
            },
            {
                estonian: "sai",
                russian: "белый хлеб",
                answers: {
                    toEstonian: ["leib", "sai", "piim", "või"],
                    toRussian: ["чёрный хлеб", "белый хлеб", "молоко", "масло"]
                },
                correct: 1
            },
            {
                estonian: "mahl",
                russian: "сок",
                answers: {
                    toEstonian: ["vesi", "piim", "mahl", "tee"],
                    toRussian: ["вода", "молоко", "сок", "чай"]
                },
                correct: 2
            }
        ]
    },
    emotions: {
        name: "Эмоции и чувства",
        questions: [
            {
                estonian: "rõõm",
                russian: "радость",
                answers: {
                    toEstonian: ["rõõm", "kurbus", "viha", "hirm"],
                    toRussian: ["радость", "грусть", "злость", "страх"]
                },
                correct: 0
            },
{
        estonian: "üllatus",
        russian: "удивление",
        answers: {
            toEstonian: ["rõõm", "üllatus", "hirm", "viha"],
            toRussian: ["радость", "удивление", "страх", "злость"]
        },
        correct: 1
    },
    {
        estonian: "igavus",
        russian: "скука",
        answers: {
            toEstonian: ["väsimus", "igavus", "stress", "mure"],
            toRussian: ["усталость", "скука", "стресс", "беспокойство"]
        },
        correct: 1
    },
            {
                estonian: "kurbus",
                russian: "грусть",
                answers: {
                    toEstonian: ["rõõm", "kurbus", "viha", "hirm"],
                    toRussian: ["радость", "грусть", "злость", "страх"]
                },
                correct: 1
            },
            {
                estonian: "viha",
                russian: "злость",
                answers: {
                    toEstonian: ["armastus", "hirm", "viha", "õnn"],
                    toRussian: ["любовь", "страх", "злость", "счастье"]
                },
                correct: 2
            },
            {
                estonian: "hirm",
                russian: "страх",
                answers: {
                    toEstonian: ["rõõm", "kurbus", "viha", "hirm"],
                    toRussian: ["радость", "грусть", "злость", "страх"]
                },
                correct: 3
            },
            {
                estonian: "armastus",
                russian: "любовь",
                answers: {
                    toEstonian: ["armastus", "õnn", "rõõm", "kurbus"],
                    toRussian: ["любовь", "счастье", "радость", "грусть"]
                },
                correct: 0
            },
            {
                estonian: "väsimus",
                russian: "усталость",
                answers: {
                    toEstonian: ["väsimus", "igavus", "ärevus", "stress"],
                    toRussian: ["усталость", "скука", "тревога", "стресс"]
                },
                correct: 0
            },
            {
                estonian: "õnn",
                russian: "счастье",
                answers: {
                    toEstonian: ["rõõm", "armastus", "õnn", "rahulolu"],
                    toRussian: ["радость", "любовь", "счастье", "удовлетворение"]
                },
                correct: 2
            }
        ]
    },

    colors_extended: {
        name: "Цвета (расширенный список)",
        questions: [
            {
                estonian: "punane",
                russian: "красный",
                answers: {
                    toEstonian: ["sinine", "kollane", "punane", "roheline"],
                    toRussian: ["синий", "жёлтый", "красный", "зелёный"]
                },
                correct: 2
            },
{
        estonian: "oranž",
        russian: "оранжевый",
        answers: {
            toEstonian: ["kollane", "oranž", "punane", "roosa"],
            toRussian: ["жёлтый", "оранжевый", "красный", "розовый"]
        },
        correct: 1
    },
    {
        estonian: "beež",
        russian: "бежевый",
        answers: {
            toEstonian: ["hall", "pruun", "beež", "valge"],
            toRussian: ["серый", "коричневый", "бежевый", "белый"]
        },
        correct: 2
    },
            {
                estonian: "sinine",
                russian: "синий",
                answers: {
                    toEstonian: ["punane", "sinine", "kollane", "roheline"],
                    toRussian: ["красный", "синий", "жёлтый", "зелёный"]
                },
                correct: 1
            },
            {
                estonian: "kollane",
                russian: "жёлтый",
                answers: {
                    toEstonian: ["punane", "sinine", "kollane", "roheline"],
                    toRussian: ["красный", "синий", "жёлтый", "зелёный"]
                },
                correct: 2
            },
            {
                estonian: "roheline",
                russian: "зелёный",
                answers: {
                    toEstonian: ["sinine", "kollane", "punane", "roheline"],
                    toRussian: ["синий", "жёлтый", "красный", "зелёный"]
                },
                correct: 3
            },
            {
                estonian: "must",
                russian: "чёрный",
                answers: {
                    toEstonian: ["valge", "must", "hall", "pruun"],
                    toRussian: ["белый", "чёрный", "серый", "коричневый"]
                },
                correct: 1
            },
            {
                estonian: "valge",
                russian: "белый",
                answers: {
                    toEstonian: ["must", "hall", "valge", "pruun"],
                    toRussian: ["чёрный", "серый", "белый", "коричневый"]
                },
                correct: 2
            },
            {
                estonian: "hall",
                russian: "серый",
                answers: {
                    toEstonian: ["must", "valge", "hall", "pruun"],
                    toRussian: ["чёрный", "белый", "серый", "коричневый"]
                },
                correct: 2
            },
            {
                estonian: "pruun",
                russian: "коричневый",
                answers: {
                    toEstonian: ["must", "valge", "hall", "pruun"],
                    toRussian: ["чёрный", "белый", "серый", "коричневый"]
                },
                correct: 3
            },
            {
                estonian: "roosa",
                russian: "розовый",

                answers: {
                    toEstonian: ["lilla", "roosa", "oranž", "beež"],
                    toRussian: ["фиолетовый", "розовый", "оранжевый", "бежевый"]
                },
                correct: 1
            },
            {
                estonian: "lilla",
                russian: "фиолетовый",
                answers: {
                    toEstonian: ["roosa", "oranž", "lilla", "beež"],
                    toRussian: ["розовый", "оранжевый", "фиолетовый", "бежевый"]
                },
                correct: 2
            }
        ]
    },

    school_subjects: {
        name: "Школьные предметы",
        questions: [
            {
                estonian: "matemaatika",
                russian: "математика",
                answers: {
                    toEstonian: ["matemaatika", "füüsika", "keemia", "bioloogia"],
                    toRussian: ["математика", "физика", "химия", "биология"]
                },
                correct: 0
            },
            {
                estonian: "ajalugu",
                russian: "история",
                answers: {
                    toEstonian: ["geograafia", "ajalugu", "kirjandus", "kunst"],
                    toRussian: ["география", "история", "литература", "искусство"]
                },
                correct: 1
            },
            {
                estonian: "eesti keel",
                russian: "эстонский язык",
                answers: {
                    toEstonian: ["inglise keel", "eesti keel", "vene keel", "saksa keel"],
                    toRussian: ["английский язык", "эстонский язык", "русский язык", "немецкий язык"]
                },
                correct: 1
            },
            {
                estonian: "kehaline kasvatus",
                russian: "физкультура",
                answers: {
                    toEstonian: ["kunst", "muusika", "kehaline kasvatus", "tööõpetus"],
                    toRussian: ["искусство", "музыка", "физкультура", "труд"]
                },
                correct: 2
            },
            {
                estonian: "muusika",
                russian: "музыка",
                answers: {
                    toEstonian: ["kunst", "muusika", "kirjandus", "ajalugu"],
                    toRussian: ["искусство", "музыка", "литература", "история"]
                },
                correct: 1
            },
            {
                estonian: "geograafia",
                russian: "география",
                answers: {
                    toEstonian: ["bioloogia", "keemia", "geograafia", "füüsika"],
                    toRussian: ["биология", "химия", "география", "физика"]
                },
                correct: 2
            }
        ]
    },
    furniture: {
        name: "Мебель и предметы интерьера",
        questions: [
            {
                estonian: "laud",
                russian: "стол",
                answers: {
                    toEstonian: ["tool", "laud", "voodi", "kapp"],
                    toRussian: ["стул", "стол", "кровать", "шкаф"]
                },
                correct: 1
            },
            {
                estonian: "tool",
                russian: "стул",
                answers: {
                    toEstonian: ["laud", "tool", "diivan", "riiul"],
                    toRussian: ["стол", "стул", "диван", "полка"]
                },
                correct: 1
            },
            {
                estonian: "voodi",
                russian: "кровать",
                answers: {
                    toEstonian: ["diivan", "kapp", "voodi", "tool"],
                    toRussian: ["диван", "шкаф", "кровать", "стул"]
                },
                correct: 2
            },
            {
                estonian: "kapp",
                russian: "шкаф",
                answers: {
                    toEstonian: ["riiul", "peegel", "kapp", "laud"],
                    toRussian: ["полка", "зеркало", "шкаф", "стол"]
                },
                correct: 2
            },
            {
                estonian: "diivan",
                russian: "диван",
                answers: {
                    toEstonian: ["voodi", "tool", "diivan", "laud"],
                    toRussian: ["кровать", "стул", "диван", "стол"]
                },
                correct: 2
            },
            {
                estonian: "riiul",
                russian: "полка",
                answers: {
                    toEstonian: ["kapp", "riiul", "laud", "peegel"],
                    toRussian: ["шкаф", "полка", "стол", "зеркало"]
                },
                correct: 1
            },
            {
                estonian: "peegel",
                russian: "зеркало",
                answers: {
                    toEstonian: ["lamp", "vaip", "peegel", "kardin"],
                    toRussian: ["лампа", "ковёр", "зеркало", "штора"]
                },
                correct: 2
            },
            {
                estonian: "vaip",
                russian: "ковёр",
                answers: {
                    toEstonian: ["kardin", "vaip", "padi", "tekk"],
                    toRussian: ["штора", "ковёр", "подушка", "одеяло"]
                },
                correct: 1
            },
            {
                estonian: "kardin",
                russian: "штора",
                answers: {
                    toEstonian: ["vaip", "lamp", "kardin", "peegel"],
                    toRussian: ["ковёр", "лампа", "штора", "зеркало"]
                },
                correct: 2
            }
        ]
    },

    body_extended: {
        name: "Части тела (расширенный список)",
        questions: [
            {
                estonian: "pea",
                russian: "голова",
                answers: {
                    toEstonian: ["pea", "käsi", "jalg", "kael"],
                    toRussian: ["голова", "рука", "нога", "шея"]
                },
                correct: 0
            },
            {
                estonian: "nägu",
                russian: "лицо",
                answers: {
                    toEstonian: ["pea", "nägu", "kõrv", "nina"],
                    toRussian: ["голова", "лицо", "ухо", "нос"]
                },
                correct: 1
            },
            {
                estonian: "silm",
                russian: "глаз",
                answers: {
                    toEstonian: ["nina", "suu", "silm", "kõrv"],
                    toRussian: ["нос", "рот", "глаз", "ухо"]
                },
                correct: 2
            },
            {
                estonian: "nina",
                russian: "нос",
                answers: {
                    toEstonian: ["silm", "kõrv", "nina", "suu"],
                    toRussian: ["глаз", "ухо", "нос", "рот"]
                },
                correct: 2
            },
            {
                estonian: "suu",
                russian: "рот",
                answers: {
                    toEstonian: ["nina", "kõrv", "silm", "suu"],
                    toRussian: ["нос", "ухо", "глаз", "рот"]
                },
                correct: 3
            },
            {
                estonian: "kael",
                russian: "шея",
                answers: {
                    toEstonian: ["pea", "kael", "õlg", "selg"],
                    toRussian: ["голова", "шея", "плечо", "спина"]
                },
                correct: 1
            },
            {
                estonian: "käsi",
                russian: "рука",
                answers: {
                    toEstonian: ["jalg", "käsi", "sõrm", "küünarnukk"],
                    toRussian: ["нога", "рука", "палец", "локоть"]
                },
                correct: 1
            },
            {
                estonian: "jalg",
                russian: "нога",
                answers: {
                    toEstonian: ["käsi", "põlv", "jalg", "varvas"],
                    toRussian: ["рука", "колено", "нога", "палец ноги"]
                },
                correct: 2
            },
            {
                estonian: "selg",
                russian: "спина",
                answers: {
                    toEstonian: ["kõht", "rind", "selg", "õlg"],
                    toRussian: ["живот", "грудь", "спина", "плечо"]
                },
                correct: 2
            },
            {
                estonian: "süda",
                russian: "сердце",
                answers: {
                    toEstonian: ["kops", "süda", "maks", "neer"],
                    toRussian: ["лёгкое", "сердце", "печень", "почка"]
                },
                correct: 1
            }
        ]
    },

    nature: {
        name: "Природа и ландшафт",
        questions: [
            {
                estonian: "meri",
                russian: "море",
                answers: {
                    toEstonian: ["järv", "meri", "jõgi", "ookean"],
                    toRussian: ["озеро", "море", "река", "океан"]
                },
                correct: 1
            },
            {
                estonian: "mets",
                russian: "лес",
                answers: {
                    toEstonian: ["park", "aed", "mets", "põld"],
                    toRussian: ["парк", "сад", "лес", "поле"]
                },
                correct: 2
            },
            {
                estonian: "mägi",
                russian: "гора",
                answers: {
                    toEstonian: ["org", "mägi", "küngas", "nõlv"],
                    toRussian: ["долина", "гора", "холм", "склон"]
                },
                correct: 1
            },
            {
                estonian: "järv",
                russian: "озеро",
                answers: {
                    toEstonian: ["jõgi", "meri", "järv", "oja"],
                    toRussian: ["река", "море", "озеро", "ручей"]
                },
                correct: 2
            },
            {
                estonian: "rand",
                russian: "пляж",
                answers: {
                    toEstonian: ["meri", "rand", "sadam", "laht"],
                    toRussian: ["море", "пляж", "порт", "залив"]
                },
                correct: 1
            },
            {
                estonian: "saar",
                russian: "остров",
                answers: {
                    toEstonian: ["poolsaar", "saar", "rand", "laht"],
                    toRussian: ["полуостров", "остров", "пляж", "залив"]
                },
                correct: 1
            },
            {
                estonian: "jõgi",
                russian: "река",
                answers: {
                    toEstonian: ["oja", "järv", "jõgi", "meri"],
                    toRussian: ["ручей", "озеро", "река", "море"]
                },
                correct: 2
            },
            {
                estonian: "põld",
                russian: "поле",
                answers: {
                    toEstonian: ["aed", "mets", "põld", "niit"],
                    toRussian: ["сад", "лес", "поле", "луг"]
                },
                correct: 2
            },
            {
                estonian: "lill",
                russian: "цветок",
                answers: {
                    toEstonian: ["puu", "põõsas", "lill", "rohi"],
                    toRussian: ["дерево", "куст", "цветок", "трава"]
                },
                correct: 2
            },
            {
                estonian: "puu",
                russian: "дерево",
                answers: {
                    toEstonian: ["põõsas", "puu", "lill", "rohi"],
                    toRussian: ["куст", "дерево", "цветок", "трава"]
                },
                correct: 1
            }
        ]
    },
    food_products: {
        name: "Еда и продукты",
        questions: [
            {
                estonian: "sai",
                russian: "белый хлеб",
                answers: {
                    toEstonian: ["leib", "sai", "sepik", "kuklid"],
                    toRussian: ["чёрный хлеб", "белый хлеб", "серый хлеб", "булочки"]
                },
                correct: 1
            },
{
        estonian: "maasikad",
        russian: "клубника",
        answers: {
            toEstonian: ["vaarikad", "maasikad", "mustikad", "kirsid"],
            toRussian: ["малина", "клубника", "черника", "вишня"]
        },
        correct: 1
    },
    {
        estonian: "kohv",
        russian: "кофе",
        answers: {
            toEstonian: ["tee", "kohv", "mahl", "vesi"],
            toRussian: ["чай", "кофе", "сок", "вода"]
        },
        correct: 1
    },
    {
        estonian: "suhkur",
        russian: "сахар",
        answers: {
            toEstonian: ["sool", "suhkur", "pipar", "mesi"],
            toRussian: ["соль", "сахар", "перец", "мёд"]
        },
        correct: 1
    },
            {
                estonian: "juust",
                russian: "сыр",
                answers: {
                    toEstonian: ["või", "juust", "sink", "vorst"],
                    toRussian: ["масло", "сыр", "ветчина", "колбаса"]
                },
                correct: 1
            },
            {
                estonian: "või",
                russian: "масло",
                answers: {
                    toEstonian: ["juust", "või", "hapukoor", "jogurt"],
                    toRussian: ["сыр", "масло", "сметана", "йогурт"]
                },
                correct: 1
            },
            {
                estonian: "muna",
                russian: "яйцо",
                answers: {
                    toEstonian: ["sink", "muna", "vorst", "liha"],
                    toRussian: ["ветчина", "яйцо", "колбаса", "мясо"]
                },
                correct: 1
            },
            {
                estonian: "kartul",
                russian: "картофель",
                answers: {
                    toEstonian: ["porgand", "kartul", "kapsas", "sibul"],
                    toRussian: ["морковь", "картофель", "капуста", "лук"]
                },
                correct: 1
            },
            {
                estonian: "porgand",
                russian: "морковь",
                answers: {
                    toEstonian: ["kartul", "porgand", "kapsas", "sibul"],
                    toRussian: ["картофель", "морковь", "капуста", "лук"]
                },
                correct: 1
            },
            {
                estonian: "tomat",
                russian: "помидор",
                answers: {
                    toEstonian: ["kurk", "tomat", "paprika", "porgand"],
                    toRussian: ["огурец", "помидор", "перец", "морковь"]
                },
                correct: 1
            },
            {
                estonian: "kurk",
                russian: "огурец",
                answers: {
                    toEstonian: ["tomat", "kurk", "sibul", "kapsas"],
                    toRussian: ["помидор", "огурец", "лук", "капуста"]
                },
                correct: 1
            },
            {
                estonian: "õun",
                russian: "яблоко",
                answers: {
                    toEstonian: ["pirn", "õun", "banaan", "apelsin"],
                    toRussian: ["груша", "яблоко", "банан", "апельсин"]
                },
                correct: 1
            },
            {
                estonian: "banaan",
                russian: "банан",
                answers: {
                    toEstonian: ["õun", "pirn", "banaan", "apelsin"],
                    toRussian: ["яблоко", "груша", "банан", "апельсин"]
                },
                correct: 2
            }
        ]
    },

    time_dates: {
        name: "Время и даты",
        questions: [
            {
                estonian: "täna",
                russian: "сегодня",
                answers: {
                    toEstonian: ["täna", "homme", "eile", "ülehomme"],
                    toRussian: ["сегодня", "завтра", "вчера", "послезавтра"]
                },
                correct: 0
            },
{
        estonian: "veebruar",
        russian: "февраль",
        answers: {
            toEstonian: ["jaanuar", "veebruar", "märts", "aprill"],
            toRussian: ["январь", "февраль", "март", "апрель"]
        },
        correct: 1
    },
    {
        estonian: "märts",
        russian: "март",
        answers: {
            toEstonian: ["veebruar", "märts", "aprill", "mai"],
            toRussian: ["февраль", "март", "апрель", "май"]
        },
        correct: 1
    },
            {
                estonian: "homme",
                russian: "завтра",
                answers: {
                    toEstonian: ["täna", "homme", "eile", "ülehomme"],
                    toRussian: ["сегодня", "завтра", "вчера", "послезавтра"]
                },
                correct: 1
            },
            {
                estonian: "eile",
                russian: "вчера",
                answers: {
                    toEstonian: ["homme", "täna", "eile", "üleeile"],
                    toRussian: ["завтра", "сегодня", "вчера", "позавчера"]
                },
                correct: 2
            },
            {
                estonian: "nädal",
                russian: "неделя",
                answers: {
                    toEstonian: ["päev", "nädal", "kuu", "aasta"],
                    toRussian: ["день", "неделя", "месяц", "год"]
                },
                correct: 1
            },
            {
                estonian: "kuu",
                russian: "месяц",
                answers: {
                    toEstonian: ["nädal", "kuu", "aasta", "päev"],
                    toRussian: ["неделя", "месяц", "год", "день"]
                },
                correct: 1
            },
            {
                estonian: "jaanuar",
                russian: "январь",
                answers: {
                    toEstonian: ["jaanuar", "veebruar", "märts", "aprill"],
                    toRussian: ["январь", "февраль", "март", "апрель"]
                },
                correct: 0
            },
            {
                estonian: "kevad",
                russian: "весна",
                answers: {
                    toEstonian: ["talv", "kevad", "suvi", "sügis"],
                    toRussian: ["зима", "весна", "лето", "осень"]
                },
                correct: 1
            },
            {
                estonian: "hommik",
                russian: "утро",
                answers: {
                    toEstonian: ["hommik", "päev", "õhtu", "öö"],
                    toRussian: ["утро", "день", "вечер", "ночь"]
                },
                correct: 0
            },
            {
                estonian: "tund",
                russian: "час",
                answers: {
                    toEstonian: ["minut", "tund", "sekund", "päev"],
                    toRussian: ["минута", "час", "секунда", "день"]
                },
                correct: 1
            },
            {
                estonian: "nädalalõpp",
                russian: "выходные",
                answers: {
                    toEstonian: ["tööpäev", "nädalalõpp", "puhkus", "püha"],
                    toRussian: ["рабочий день", "выходные", "отпуск", "праздник"]
                },
                correct: 1
            }
        ]
    },

    family_relations: {
        name: "Семья и родственники",
        questions: [
            {
                estonian: "ema",
                russian: "мама",
                answers: {
                    toEstonian: ["isa", "ema", "õde", "vend"],
                    toRussian: ["папа", "мама", "сестра", "брат"]
                },
                correct: 1
            },
            {
                estonian: "isa",
                russian: "папа",
                answers: {
                    toEstonian: ["ema", "isa", "vanaema", "vanaisa"],
                    toRussian: ["мама", "папа", "бабушка", "дедушка"]
                },
                correct: 1
            },
            {
                estonian: "vanaema",
                russian: "бабушка",
                answers: {
                    toEstonian: ["ema", "tädi", "vanaema", "õde"],
                    toRussian: ["мама", "тётя", "бабушка", "сестра"]
                },
                correct: 2
            },
            {
                estonian: "vanaisa",
                russian: "дедушка",
                answers: {
                    toEstonian: ["isa", "onu", "vanaisa", "vend"],
                    toRussian: ["папа", "дядя", "дедушка", "брат"]
                },
                correct: 2
            },
            {
                estonian: "tädi",
                russian: "тётя",
                answers: {
                    toEstonian: ["onu", "õde", "tädi", "vanaema"],
                    toRussian: ["дядя", "сестра", "тётя", "бабушка"]
                },
                correct: 2
            },
            {
                estonian: "onu",
                russian: "дядя",
                answers: {
                    toEstonian: ["tädi", "vend", "onu", "vanaisa"],
                    toRussian: ["тётя", "брат", "дядя", "дедушка"]
                },
                correct: 2
            },
            {
                estonian: "naine",
                russian: "жена",
                answers: {
                    toEstonian: ["mees", "naine", "tütar", "ema"],
                    toRussian: ["муж", "жена", "дочь", "мама"]
                },
                correct: 1
            },
            {
                estonian: "mees",
                russian: "муж",
                answers: {
                    toEstonian: ["naine", "mees", "poeg", "isa"],
                    toRussian: ["жена", "муж", "сын", "папа"]
                },
                correct: 1
            },
            {
                estonian: "laps",
                russian: "ребёнок",
                answers: {
                    toEstonian: ["poeg", "tütar", "laps", "õde"],
                    toRussian: ["сын", "дочь", "ребёнок", "сестра"]
                },
                correct: 2
            },
            {
                estonian: "sugulane",
                russian: "родственник",
                answers: {
                    toEstonian: ["pere", "sugulane", "sõber", "naaber"],
                    toRussian: ["семья", "родственник", "друг", "сосед"]
                },
                correct: 1
            }
        ]
    },
    personal_items: {
        name: "Личные вещи и аксессуары",
        questions: [
            {
                estonian: "telefon",
                russian: "телефон",
                answers: {
                    toEstonian: ["telefon", "arvuti", "kell", "kaamera"],
                    toRussian: ["телефон", "компьютер", "часы", "камера"]
                },
                correct: 0
            },
            {
                estonian: "rahakott",
                russian: "кошелёк",
                answers: {
                    toEstonian: ["kott", "rahakott", "võtmed", "pass"],
                    toRussian: ["сумка", "кошелёк", "ключи", "паспорт"]
                },
                correct: 1
            },
            {
                estonian: "võtmed",
                russian: "ключи",
                answers: {
                    toEstonian: ["rahakott", "telefon", "võtmed", "prillid"],
                    toRussian: ["кошелёк", "телефон", "ключи", "очки"]
                },
                correct: 2
            },
            {
                estonian: "kott",
                russian: "сумка",
                answers: {
                    toEstonian: ["kott", "seljakott", "rahakott", "kohver"],
                    toRussian: ["сумка", "рюкзак", "кошелёк", "чемодан"]
                },
                correct: 0
            },
            {
                estonian: "prillid",
                russian: "очки",
                answers: {
                    toEstonian: ["kell", "prillid", "võtmed", "telefon"],
                    toRussian: ["часы", "очки", "ключи", "телефон"]
                },
                correct: 1
            },
            {
                estonian: "kell",
                russian: "часы",
                answers: {
                    toEstonian: ["telefon", "kell", "kaamera", "arvuti"],
                    toRussian: ["телефон", "часы", "камера", "компьютер"]
                },
                correct: 1
            },
            {
                estonian: "vihmavari",
                russian: "зонт",
                answers: {
                    toEstonian: ["müts", "sall", "vihmavari", "kindad"],
                    toRussian: ["шапка", "шарф", "зонт", "перчатки"]
                },
                correct: 2
            },
            {
                estonian: "pass",
                russian: "паспорт",
                answers: {
                    toEstonian: ["raha", "pass", "pilet", "kaart"],
                    toRussian: ["деньги", "паспорт", "билет", "карта"]
                },
                correct: 1
            }
        ]
    },

    health: {
        name: "Здоровье и самочувствие",
        questions: [
            {
                estonian: "haige",
                russian: "больной",
                answers: {
                    toEstonian: ["terve", "haige", "väsinud", "tugev"],
                    toRussian: ["здоровый", "больной", "уставший", "сильный"]
                },
                correct: 1
            },
            {
                estonian: "peavalu",
                russian: "головная боль",
                answers: {
                    toEstonian: ["peavalu", "kõhuvalu", "nohu", "köha"],
                    toRussian: ["головная боль", "боль в животе", "насморк", "кашель"]
                },
                correct: 0
            },
            {
                estonian: "palavik",
                russian: "температура",
                answers: {
                    toEstonian: ["nohu", "köha", "palavik", "valu"],
                    toRussian: ["насморк", "кашель", "температура", "боль"]
                },
                correct: 2
            },
            {
                estonian: "ravim",
                russian: "лекарство",
                answers: {
                    toEstonian: ["arst", "ravim", "haigla", "apteek"],
                    toRussian: ["врач", "лекарство", "больница", "аптека"]
                },
                correct: 1
            },
            {
                estonian: "terve",
                russian: "здоровый",
                answers: {
                    toEstonian: ["haige", "nõrk", "terve", "väsinud"],
                    toRussian: ["больной", "слабый", "здоровый", "уставший"]
                },
                correct: 2
            },
            {
                estonian: "väsinud",
                russian: "уставший",
                answers: {
                    toEstonian: ["terve", "haige", "väsinud", "tugev"],
                    toRussian: ["здоровый", "больной", "уставший", "сильный"]
                },
                correct: 2
            },
            {
                estonian: "hambavalu",
                russian: "зубная боль",
                answers: {
                    toEstonian: ["peavalu", "kõhuvalu", "hambavalu", "kurk valutab"],
                    toRussian: ["головная боль", "боль в животе", "зубная боль", "горло болит"]
                },
                correct: 2
            },
            {
                estonian: "kiirabi",
                russian: "скорая помощь",
                answers: {
                    toEstonian: ["arst", "haigla", "kiirabi", "apteek"],
                    toRussian: ["врач", "больница", "скорая помощь", "аптека"]
                },
                correct: 2
            }
        ]
    },

    shopping: {
        name: "Покупки и магазины",
        questions: [
            {
                estonian: "pood",
                russian: "магазин",
                answers: {
                    toEstonian: ["pood", "turg", "kauplus", "kaubamaja"],
                    toRussian: ["магазин", "рынок", "супермаркет", "торговый центр"]
                },
                correct: 0
            },
            {
                estonian: "raha",
                russian: "деньги",
                answers: {
                    toEstonian: ["hind", "raha", "kaart", "münt"],
                    toRussian: ["цена", "деньги", "карта", "монета"]
                },
                correct: 1
            },
            {
                estonian: "hind",
                russian: "цена",
                answers: {
                    toEstonian: ["raha", "hind", "allahindlus", "maksma"],
                    toRussian: ["деньги", "цена", "скидка", "платить"]
                },
                correct: 1
            },
            {
                estonian: "ostukorv",
                russian: "корзина",
                answers: {
                    toEstonian: ["kott", "ostukorv", "rahakott", "karp"],
                    toRussian: ["сумка", "корзина", "кошелёк", "коробка"]
                },
                correct: 1
            },
            {
                estonian: "müüja",
                russian: "продавец",
                answers: {
                    toEstonian: ["ostja", "müüja", "klient", "kassapidaja"],
                    toRussian: ["покупатель", "продавец", "клиент", "кассир"]
                },
                correct: 1
            },
            {
                estonian: "kviitung",
                russian: "чек",
                answers: {
                    toEstonian: ["raha", "kaart", "kviitung", "hind"],
                    toRussian: ["деньги", "карта", "чек", "цена"]
                },
                correct: 2
            },
            {
                estonian: "allahindlus",
                russian: "скидка",
                answers: {
                    toEstonian: ["hind", "kaup", "allahindlus", "pood"],
                    toRussian: ["цена", "товар", "скидка", "магазин"]
                },
                correct: 2
            },
            {
                estonian: "järjekord",
                russian: "очередь",
                answers: {
                    toEstonian: ["kassa", "järjekord", "pood", "müüja"],
                    toRussian: ["касса", "очередь", "магазин", "продавец"]
                },
                correct: 1
            },
            {
                estonian: "kaart",
                russian: "карта",
                answers: {
                    toEstonian: ["raha", "kaart", "münt", "kviitung"],
                    toRussian: ["деньги", "карта", "монета", "чек"]
                },
                correct: 1
            },
            {
                estonian: "avatud",
                russian: "открыто",
                answers: {
                    toEstonian: ["suletud", "avatud", "kinni", "lahti"],
                    toRussian: ["закрыто", "открыто", "закрыто", "открыто"]
                },
                correct: 1
            }
        ]
    },
    weekdays: {
        name: "Дни недели",
        questions: [
            {
                estonian: "esmaspäev",
                russian: "понедельник",
                answers: {
                    toEstonian: ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev"],
                    toRussian: ["понедельник", "вторник", "среда", "четверг"]
                },
                correct: 0
            },
            {
                estonian: "teisipäev",
                russian: "вторник",
                answers: {
                    toEstonian: ["esmaspäev", "teisipäev", "kolmapäev", "neljapäev"],
                    toRussian: ["понедельник", "вторник", "среда", "четверг"]
                },
                correct: 1
            },
            {
                estonian: "kolmapäev",
                russian: "среда",
                answers: {
                    toEstonian: ["teisipäev", "kolmapäev", "neljapäev", "reede"],
                    toRussian: ["вторник", "среда", "четверг", "пятница"]
                },
                correct: 1
            },
            {
                estonian: "neljapäev",
                russian: "четверг",
                answers: {
                    toEstonian: ["kolmapäev", "neljapäev", "reede", "laupäev"],
                    toRussian: ["среда", "четверг", "пятница", "суббота"]
                },
                correct: 1
            },
            {
                estonian: "reede",
                russian: "пятница",
                answers: {
                    toEstonian: ["neljapäev", "reede", "laupäev", "pühapäev"],
                    toRussian: ["четверг", "пятница", "суббота", "воскресенье"]
                },
                correct: 1
            }
        ]
    }
};