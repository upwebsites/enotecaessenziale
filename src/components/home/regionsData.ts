import { RegionData } from './RegionModal';

export const regions: RegionData[] = [
  {
    name: 'Trentino',
    slug: 'trentino',
    description: 'Il Trentino è una terra di montagne e valli che da secoli produce vini di grande eleganza. La viticoltura qui si svolge su terrazzamenti scolpiti nelle pareti rocciose, dove il clima alpino regala freschezza e mineralità uniche. Le tradizioni vinicole trentine affondano le radici nell\'epoca romana, ma è nel Novecento che la regione ha guadagnato fama mondiale, in particolare con i suoi spumanti metodo classico.',
    character: 'I vini trentini si distinguono per la loro finezza e freschezza. I bianchi sono minerali, con note di agrumi e fiori bianchi, mentre i rossi mostrano eleganza e tannini setosi. Il clima alpino con forti escursioni termiche favorisce l\'accumulo di aromi e mantiene una vivace acidità naturale che conferisce longevità ai vini.',
    grapevines: ['Nosiola', 'Teroldego', 'Pinot Grigio', 'Chardonnay', 'Cabernet Sauvignon', 'Merlot'],
  },
  {
    name: 'Piemonte',
    slug: 'piemonte',
    description: 'Il Piemonte è considerato uno dei più grandi territori vinicoli al mondo. Le colline del Langhe, del Roero e del Monferrato ospitano vigneti che producono alcune delle etichette più prestigiose e costose d\'Italia. La tradizione enologica piemontese è antichissima, con radici celtiche e romane, ma è stata la borghesia del XIX secolo a portare i vini piemontesi sulle tavole dei regnanti europei.',
    character: 'I vini piemontesi sono famosi per la loro complessità e longevità. I rossi, in particolare, sono strutturati ma eleganti, con tannini nobili e aromi di frutti rossi, terra, tabacco e cuoio. I bianchi sono più rari ma di grande pregio, con note di nocciola, salvia e miele. Il terroir collinare con suoli argillosi e calcarei contribuisce in modo decisivo alla personalità dei vini.',
    grapevines: ['Nebbiolo', 'Barbera', 'Dolcetto', 'Cortese', 'Arneis', 'Moscato'],
  },
  {
    name: 'Veneto',
    slug: 'veneto',
    description: 'Il Veneto è la regione più grande d\'Italia per produzione vinicola, un impero vitivinicolo che si estende dalle dolomiti alla pianura fino alle colline del Veronese. La tradizione è antichissima: già i Romani coltivavano le vigne venete, e nel Medioevo i vini della Repubblica Veneta erano esportati in tutta Europa. Oggi il Veneto è sinonimo di innovazione e qualità, con una grande varietà di stili che vanno dal classico al moderno.',
    character: 'I vini veneti spaziano dai rossi potenti e strutturati ai bianchi freschi e aromatici. La regione è famosa per i vini passiti di grande concentrazione, i rossi eleganti delle colline e le bollicine leggere della pianura. Il clima mite e la diversità di suoli consentono una produzione estremamente varia, dai vini da bere giovani a quelli capaci di evolvere per decenni.',
    grapevines: ['Garganega', 'Corvina', 'Rondinella', 'Prosecco', 'Pinot Grigio', 'Sangiovese'],
  },
  {
    name: 'Toscana',
    slug: 'toscana',
    description: 'La Toscana è il cuore pulsante della cultura enologica italiana. Dai colli del Chianti alle pendici di Montalcino, fino alla Maremma e all\'Elba, la regione incarna l\'essenza del vino italiano. La tradizione toscana è legata al Sangiovese, vitigno autoctono coltivato qui da oltre duemila anni. Oggi la Toscana è al tempo stesso custode di tradizioni antiche e laboratorio di innovazione enologica.',
    character: 'I vini toscani sono dominati dal Sangiovese, che regala rossi vivaci, con tannini energici, buona acidità e aromi di ciliegia, viola, erbe selvatiche e terra. I Supertuscan hanno rivoluzionato il panorama internazionale con blend bordolesi di grande potenza. I bianchi sono meno noti ma di grande qualità, freschi e minerali. In generale, i vini toscani sono vini di struttura e complessità.',
    grapevines: ['Sangiovese', 'Trebbiano', 'Vernaccia', 'Cabernet Sauvignon', 'Merlot', 'Syrah'],
  },
  {
    name: 'Abruzzo',
    slug: 'abruzzo',
    description: 'L\'Abruzzo è una regione di montagne e mare che nasconde un patrimonio enologico sorprendente. La viticoltura abruzzese ha radici antichissime, ma è stata a lungo sottovalutata rispetto ad altre regioni italiane. Negli ultimi decenni, la regione ha compiuto passi da gigante, guadagnandosi riconoscimenti internazionali grazie a vini di grande personalità e rapporto qualità-prezzo imbattibile.',
    character: 'I vini abruzzesi sono generosi e caratterizzati da una marcata territorialità. I rossi sono rotondi, con frutta matura, spezie dolci e una tannicità avvolgente. I bianchi sono freschi e sapidi, con note di frutta bianca e una mineralità che richiama il vicino Appennino. Anche i rosati abruzzesi sono di grande pregio, vivaci e fruttati.',
    grapevines: ['Montepulciano', 'Trebbiano d\'Abruzzo', 'Pecorino', 'Passerina', 'Cococciola'],
  },
  {
    name: 'Campania',
    slug: 'campania',
    description: 'La Campania è una terra di vulcani e mare che custodisce alcuni dei vitigni più antichi d\'Italia. La tradizione vinicola campana risale ai Greci, che portarono le prime vigne nella Magna Grecia. Vitigni come l\'Aglianico, il Fiano e il Greco sono tra i più antichi del Mediterraneo e continuano a dare vita a vini di grande prestigio, rivalutati pienamente solo a partire dagli anni \'80 del Novecento.',
    character: 'I vini campani sono caratterizzati da una forte personalità vulcanica. I rossi sono potenti e longevi, con tannini nobili e profondi sentori di frutta nera, grafite e spezie. I bianchi sono minerali, con una finezza e una complessità che li rendono tra i più interessanti d\'Italia. Il terroir vulcanico dei suoli di cenere e pomice conferisce una mineralezza inconfondibile.',
    grapevines: ['Aglianico', 'Fiano', 'Greco', 'Coda di Volpe', 'Piedirosso', 'Falanghina'],
  },
  {
    name: 'Puglia',
    slug: 'puglia',
    description: 'La Puglia è la regione del sole e del calore, dove la vite cresce rigogliosa tra ulivi secolari e il mare Adriatico. Per secoli è stata la cantina d\'Italia, producendo enormi quantità di vino da taglio per le regioni del nord. Oggi la Puglia ha riscoperto la qualità, producendo vini di grande intensità e personalità che raccontano un territorio unico al mondo.',
    character: 'I vini pugliesi sono caldi, generosi e ricchi di frutta. I rossi sono intensi, con note di frutti neri maturi, cioccolato, tabacco e una marcata sapidità mediterranea. I bianchi sono rari ma sorprendenti, con note di fiori bianchi, agrumi e una freschezza inaspettata vista la latitudine. Il calore del sole pugliese regala vini di grande concentrazione e alcolicità naturale.',
    grapevines: ['Primitivo', 'Negroamaro', 'Nero di Troia', 'Verdeca', 'Bombino Bianco', 'Malvasia Nera'],
  },
  {
    name: 'Sicilia',
    slug: 'sicilia',
    description: 'La Sicilia è un continente vinicolo a sé stante, dove tre millenni di storia si intrecciano con un terroir vulcanico unico al mondo. Dalle pendici dell\'Etna ai calanchi di Caltagirone, fino alle colline di Marsala, la vite siciliana è una delle più antiche del Mediterraneo. Oggi la Sicilia è il laboratorio enologico più dinamico d\'Italia, dove tradizione e innovazione si fondono in vini di straordinaria complessità.',
    character: 'I vini siciliani sono influenzati dal clima mediterraneo e dai terreni vulcanici. I rossi dell\'Etna sono eleganti e minerali, con note di frutti rossi, lavica e grafite. I bianchi sono aromatici e sapidi, con una grande varietà di stili che va dal fresco al passito. I vini liquorosi sono storici e prestigiosi. La diversità di altitudini e suoli crea una gamma di stili impressionante.',
    grapevines: ['Nerello Mascalese', 'Nero d\'Avola', 'Frappato', 'Inzolia', 'Grillo', 'Carricante'],
  },
];
