**Situace**
Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

**Cíl**
Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

**Úkol**
Vytvoř funkční web, který bude obsahovat:
•	Strukturovaný komentovaný HTML5 kód s validní sémantikou
•	Responzivní design (mobile-first přístup)
•	CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
•	Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
•	CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp 
•	Základní JavaScript pro interaktivitu (na jemné oživení stránek)
•	Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
•	Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

**Znalosti**
•	Zajisti rychlé načítání a optimalizovaný výkon
•	Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
•	Vlož favicon ve formát svg (pokud ho nemáš dodaný, vytvoř ho)
•	Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu


**Základní SEO**
•	Strukturuj nadpisy H1-H6
•	Přidej meta title a description na každé stránce
•	Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
•	Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
•	Urči kanonickou url
•	Obrázkům dej alt popisky
•	Propoj stránky vnitřními odkazy
•	Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)


**Optimalizace obrázků**
•	Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
•	Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.
**Vizuální hierarchie a čitelnost**
•	Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
•	Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
•	Čitelné fonty s českou diakritikou, minimální velikost 16px
•	Správné řádkování (line-height 1.5-1.8 pro odstavce)
•	Nikdy nezarovnávej text do bloku
•	Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

**Layout**
•	Šířku celého webu dej na 85% obrazovky
•	Jasné oddělení sekcí a obsahových celků
•	Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
•	Vyvážené použití bílého prostoru (white space)
•	Intuitivní navigace - logo vlevo, hamburger menu na mobilu pravo
•	Dej si záležet na patičce webu
•	U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
•	Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
•	Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
•	Datum piš ve formátu 1. 1. 2026 a mezery dej nedělitelné

**Obsah**
•	Stručné a srozumitelné texty
•	Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
•	Vizuální prvky podporující obsah (ikony, obrázky, grafika)
•	Logické uspořádání informací (nejdůležitější nahoře)
•	Chybová stránka (místo „404“ dej ikonu <wa-icon name="face-frown" variant="regular"></wa-icon>) a přidej ji na web pomocí příkazu v souboru .htaccess: ErrorDocument 404 /404.html
•	Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

**Konzistence**
•	Jednotný styl tlačítek, karet a komponent
•	Stejný padding/margin napříč podobnými elementy
•	Stejné zaoblení prvků
•	Konzistentní ikonografie (používej font awesome, ne emotikony)
•	Stíny karet pouze velmi jemné
•	Jednotný projev značky (brand voice)
•	Konzistentní použití barev napříč celým webem
•	Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

**Barevná paleta**
•	Omezený počet barev (2-3 hlavní + neutrální)
•	Primární barva pro CTA (call-to-action) tlačítka
•	Neutrální jemné barvy pro pozadí 
•	
•	Barvy webu
•	Zlatá (primární akcent)
•	#C9A84C  ·  Gradient: #C9A84C → #E8CC7A → #C9A84C (135°)
•	Tmavá zlatá (text na zlatém pozadí)
•	#9A7230
•	Světlá zlatá (pozadí karet, zvýraznění)
•	#F5EDD6
•	Modrá (sekundární barva, důvěra)
•	#3B6FA0
•	Tmavá modrá (CTA sekce, tmavé pozadí)
•	#1C2B3A
•	Růžová (jemný akcent)
•	#E8A0B0
•	Krémová (pozadí stránky)
•	#FDFAF5
•	Tmavá (text, nadpisy)
•	#1C1C22

**Fonty**
•	Cormorant Garamond — nadpisy Elegantní serif s krásnou kurzívou. Přidává osobnost, teplo a prémium dojem. → fonts.google.com/specimen/Cormorant+Garamond
•	Jost — texty, menu, popisky Moderní geometrický sans-serif. Čitelný, lehký, vzdušný. → fonts.google.com/specimen/Jost

**Struktura**
•	Položky menu


**Design**
Design hero sekce (celého webu) vytvoř podle vzoru, který ti dám před začátkem tvorby ve formátu jpg 
nebo
Vytvoř moderní mobile-first web: použít můžeš trendy jako souměrný bento grid layout se zaoblenými rohy, velká typografie, barevné gradienty, glass efekt, micro-animace na hover a scroll efekty či 3D prvky.
**Moderní design**
•	Layout: používej souměrný Bento grid 
•	Barvy: Jemné gradienty, plynulé přechody
•	Prvky: Zaoblené rohy (border-radius 16-24px), jemné stíny, 3D prvky
•	Glass efekt: Skleněný efekt v pozadí karet (glassmorphism)
•	Animace: Mikro interakce na hover, jemné scroll animace 
**obrázky**
Na webu použij fotky (př. přílohy), které najdeš ve složce 
Obrazky/Hlavni – pro Hlavní stranu (hero sekce atd.)
Obrazky/Sluzby – pro Služby
Obrazky/Omne – pro stránku O mně a Patičku
Obrazky/Ikony – vlastní ikony pro web
Prilohy/Menu – polední menu v pdf

**texty**
Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky. 
NAVIGACE — MENU
Co nabízím  ·  Jak to probíhá  ·  Ceník  ·  O mně  ·  Spojme se
Spojme se = zlaté CTA tlačítko vpravo. Logo vlevo = odkaz domů.

01 · HERO SEKCE
Web, který budete chtít ukázat světu
Tvořím weby na míru, s péčí o každý detail.
CTA tlačítko: Poptat web

02 · CO NABÍZÍM — POZNÁVÁTE SE?
Tohle možná znáte moc dobře
◆  Říkáte si už dlouho "ten web si musím udělat", ale pořád to odkládáte?
◆  Zákazníci vás hledají na internetu, ale nenajdou vás?
◆  Posíláte každému zákazníkovi znovu a znovu stejné informace o sobě a svých službách?
◆  Máte web, ale stydíte se na něj poslat odkaz?
◆  Platíte za reklamu, ale nemáte kam zákazníky poslat?
◆  Spoléháte jen na doporučení od známých, ale chcete oslovit i nové zákazníky?
◆  Máte skvělé reference, ale nikde nejsou vidět?
◆  Chcete rozšířit podnikání, ale nevíte, jak oslovit lidi, kteří vás ještě neznají?
Pokud jste přikývli alespoň u jedné otázky, jste na správné adrese.

02 · CO NABÍZÍM — PROČ WEBY S RADOSTÍ
Co pro vás znamená spolupráce se mnou
✨  Autenticita
Každý web tvořím tak, aby vystihoval vaši identitu, kdo jste, co děláte a jak chcete působit. Výsledkem je web, který je opravdu váš.
🤝  Lidský přístup
Mluvím jazykem, kterému rozumíte. Žádné technické výrazy, žádné zkratky. Vše vysvětlím srozumitelně od první schůzky po spuštění.
⚡  Rychlost
Web do týdne, ne za měsíce. Můžete začít získávat zákazníky rychle, bez zbytečného čekání.
🔍  Detail rozhoduje
Mám cit pro estetiku a přehlednost, věci musí ladit vizuálně i obsahově. Dobrý první dojem vzniká ještě předtím, než si zákazník přečte první větu.
💬  Jsem tu i po spuštění
Nezmizím po předání webu. Potřebujete něco upravit, přidat nebo poradit? Stačí napsat — jsem tu stále pro vás.
 


03 · JAK TO PROBÍHÁ
Od první zprávy po spuštění webu
Celý proces jsem navrhla tak, aby byl pro vás co nejjednodušší.
Krok 1 — Sejdeme se a popovídáme
Ráda se s vámi potkám osobně, působím především v Libereckém kraji. Pokud jste dál, domluvíme se online. Ještě před naší schůzkou vám pošlu pár otázek, ať máte čas se nad nimi v klidu zamyslet. Naše setkání pak bude efektivnější a budeme se mít od čeho odrazit.
Krok 2 — Připravím vám nabídku zdarma
Na základě našeho rozhovoru připravím cenovou nabídku, jasně a srozumitelně. Pokud v průběhu tvorby vzniknou nové požadavky nebo změny nad rámec domluvy, vždy vás předem informuji o případné úpravě ceny.
Krok 3 — Záloha a tvorba
Jakmile si plácneme, pošlete mi zálohu 30 % a já se pustím do práce. Web mám hotový do 5–10 pracovních dní od chvíle, kdy mi dodáte potřebné podklady — texty o službách a cenách, fotografie, logo, představu o barvách a stylu, případně reference od zákazníků.
Krok 4 — Společně web zkontrolujeme a spustíme
Hotový web vám ukážu, projdeme ho společně a zapracuji vaše připomínky. Až budete spokojeni, zaplatíte zbývající částku a jdeme online. Od té chvíle váš web pracuje za vás.

03 · JAK TO PROBÍHÁ — ČASTÉ OTÁZKY
Máte otázky? Ráda odpovím
Nenašli jste, co hledáte? Napište mi, ráda vám odpovím osobně.
Jak dlouho trvá vytvoření webu?
Jednostránkový web zvládnu zpravidla do 5 pracovních dní, vícestránkový do 10 dní, a to od chvíle, kdy mi dodáte všechny potřebné podklady. Vždy vás předem informuji o přesném termínu.
Jaké podklady od vás potřebuji?
Texty píšete vy, vy svoji práci znáte nejlépe. Nemusí být dokonalé, stačí je napsat tak, jako byste to říkali kamarádovi. Já pak upravím jejich strukturu tak, aby byly na webu přehledné a srozumitelné. Pokud si s texty nevíte rady, mohu vás propojit s copywriterkou, se kterou dlouhodobě spolupracuji.
Dále budu potřebovat: fotografie, logo, představu o barvách a stylu, texty o službách a cenách a případně reference od zákazníků.
S fotkami pomohu, pokud nemáte vlastní, použijeme kvalitní profesionální fotografie zdarma.
💡 Před naší schůzkou vám pošlu pár otázek, ať máte čas se nad nimi v klidu zamyslet. Budeme se mít od čeho odrazit.
Mohu mít web ve více jazycích?
Ano, vícejazyčný web je možný. Překlad textů zařídím za vás, technické nastavení vícejazyčné verze také. Vícejazyčný web je součástí individuální nabídky, napište mi a probereme detaily.
Co je to doména a hosting?
Doména je vaše adresa na internetu, např. vasefirma.cz. Hosting je "místo", kde web fyzicky sídlí. Registraci a nastavení obojího zařídím za vás, roční poplatek za provoz pak hradíte vy přímo poskytovateli.
Co je SEO a proč je důležité?
SEO je způsob, jak nastavit web tak, aby ho Google snáze zobrazoval lidem, kteří hledají vaše služby. Bez správného SEO by váš web jednoduše nikdo nenašel, je to jako mít obchod bez cedule nade dveřmi. Základní SEO nastavení je součástí každého webu.
Věděli jste, že vás zákazníci hledají i přes ChatGPT a AI?
Lidé dnes stále častěji hledají služby a firmy nejen přes Google, ale přímo v AI nástrojích jako ChatGPT, Gemini nebo Google AI. Ptají se Doporuč mi dobrou kadeřnici v Liberci, a AI jim odpoví na základě toho, co najde na webu.
Proto každý web nastavím tak, aby byl správně čitelný nejen pro Google, ale i pro tyto moderní nástroje. Váš web bude připravený na způsob, jakým lidé hledají dnes i zítra.
Budu moct web sám upravovat?
Weby tvořím moderním způsobem, který zákazníkům neumožňuje přímé úpravy. Kdykoliv budete potřebovat něco změnit, stačí mi napsat. Drobné úpravy vyřídím rychle za malý poplatek, větší změny nacením individuálně.
Výhodou je, že se nemusíte učit žádný systém — prostě mi napíšete, co chcete, a já to zařídím.
Co se stane po roce, musím něco platit?
Doména a hosting se každý rok obnovují, roční poplatek hradíte přímo vy poskytovateli. 
K čemu je profil na Googlu a Seznamu?
Když někdo hledá vaši službu "v okolí", zobrazí se mu váš profil s adresou, telefonem a hodnocením. Je to zcela zdarma a přivádí to zákazníky bez placené reklamy.
💡 Profily na Googlu a Seznamu jsou jednou z nejefektivnějších věcí, které pro svůj byznys můžete udělat zdarma.
Co když nebudu s výsledkem spokojený/á?
Web odevzdám až tehdy, kdy budete spokojeni. Součástí každé zakázky jsou revize, nikdy nespustíme nic, s čím nebudete stoprocentně spokojeni. Doplatek hradíte až po předání hotového webu.
Nestačí mi jen sociální sítě?
◆  Google vás na sítích nenajde, zákazníci hledající přes Google se na Instagram nebo Facebook nedostanou.
◆  Web budí důvěru, vlastní web působí profesionálněji než odkaz na Facebook.
◆  Web pracuje 24/7, na sítích musíte neustále přidávat obsah, web funguje i bez toho.
Nemůžu si web udělat sám pomocí AI nebo Wixu?
◆  Výsledek vypadá genericky, zákazník pozná šablonu, důvěryhodnost trpí.
◆  SEO nenastavíte správně, web, který nikdo nenajde, vám nepřivede zákazníky.
◆  Čas jsou peníze, hodiny s návody jsou hodiny, kdy jste nedělali svoji práci.
◆  Výsledek sami neuvidíte objektivně, zkušený webař ví, co zákazníka přesvědčí.
Já za vás vyřídím vše a vy dostanete web, který funguje a přivádí zákazníky. Bez stresu.
 


04 · CENÍK
Cena je jednorázová. Po spuštění webu už za nic navíc neplatíte. Jediné, co vás čeká každý rok, je poplatek za doménu a hosting, který hradíte přímo poskytovateli. 
Co je zahrnuto u každého webu:
◆  Design na míru
◆  Nastavení domény + hostingu
◆  Firemní e-mail
◆  SEO základ
◆  Responzivní web, vypadá skvěle na telefonu, tabletu i počítači
◆  Kontaktní formulář
◆  Zabezpečený web (SSL), zelený zámek, zákazníci vám důvěřují
◆  Optimalizace rychlosti, web se načte rychle, Google vás hodnotí lépe
◆  Revize do schválení, web odevzdám, až když jste spokojeni
◆  Propojení s rezervačním systémem (pokud jej využíváte)
One page, od 10 000 Kč
Jednorázově · hotovo do 5 dní
Skvělá volba, pokud chcete být online vidět, ale nepotřebujete nic složitého. Základní informace o vás a vašich službách přehledně na jednom místě, vaše online vizitka, která pracuje za vás.
Vícestránkový web, od 15 000 Kč
Jednorázově · hotovo do 10 dní
Ideální, pokud chcete své podnikání nebo projekt představit ve více detailech, rozepsat jednotlivé služby, sdílet reference a recenze zákazníků, přidat blog nebo portfolio. Více prostoru pro váš příběh, lepší výsledky v Googlu.
Konečná cena závisí na rozsahu a požadavcích vašeho projektu, vždy nacením individuálně.
Líbí se vám spolupráce, ale bojíte se, že na to nemáte rozpočet? Napište mi i tak, ráda se s vámi pobavím o tom, co by bylo možné. Možná společně něco vymyslíme.

Jak probíhá platba?
Platba probíhá bankovním převodem ve dvou částech:
◆  30 % záloha, po odsouhlasení nabídky, před zahájením práce
◆  70 % doplatek, po předání hotového webu, až budete spokojeni
Záloha chrání obě strany, vy víte, že práci dokončím, já vím, že projekt myslíte vážně.

05 · O MNĚ
Iveta Flaisnerová
Tvůrkyně webů · Weby s radostí
Moje cesta k webům
V roce 2019 jsem začala pracovat v online prostředí, především to byly e-shopy zaměřené na ženské zdraví. Jednou jsem dostala příležitost postarat se o celý web, a to byl moment, kdy jsem si řekla: TOHLE JE ONO. Hledala jsem práci, která mi dá svobodu a smysl zároveň. A našla jsem ji.
Záleží mi na detailech
Jsem člověk, kterému záleží na detailech. Jsem estét,ráda věci ladím do posledního prvku a nedám pokoj, dokud to nevypadá přesně tak, jak má. Zároveň mi záleží na přehlednosti, web musí být krásný, ale hlavně musí zákazníkům dávat smysl na první pohled.
Váš web, vaše identita
Pracuji moderním způsobem, který mi umožňuje soustředit se na to, co mě skutečně baví — aby každý web co nejvíce vystihoval identitu mého klienta. Věřím, že dobrý web není o tom, aby vypadal jako všechny ostatní. Je o tom vystihnout vaši podstatu a vaši jedinečnost.
Kdo jsem mimo práci
Mimo práci energii čerpám v přírodě, dlouhé procházky jsou moje reset tlačítko. Miluju hudbu, zpěv a tanec. A zajímám se o to, jak funguje lidská mysl, co nás pohání, co nás blokuje a jak najít klid sami v sobě. Říkám si, že kdo rozumí lidem, rozumí i tomu, co potřebují vidět na webu. A to je přesně to, o co se snažím.

06 · SPOJME SE
Váš web může být online do týdne.
Napište mi, zavolejte nebo vyplňte formulář níže. Nabídka je vždy zdarma a nezávazná. Odpovídám zpravidla do 24 hodin.
Těším se na váš projekt! 
CTA tlačítko: Napište mi
Nejste si jistí, jestli web teď potřebujete? Napište mi klidně jen s otázkou, ráda poradím, i když nakonec nic neobjednáte. Žádný tlak, žádný závazek.
📞  603 748 003
✉️  iveta@webysradosti.cz
