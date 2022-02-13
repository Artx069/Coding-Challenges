public class SimplePrimeStreaming {
    public static String solve(int a, int b) {
        StringBuilder s = new StringBuilder("2357111317192329313741434753596167717379838997101103107109113127131137139149151157163167173179181191193197199211223227229233239241251257263269271277281283293307311313317331337347349353359367373379383389397401409419421431433439443449457461463467479487491499503509521523541547557563569571577587593599601607613617619631641643647653659661673677683691701709719727733739743751757761769773787797809811821823827829839853857859863877881883887907911919929937941947953967971977983991997100910131019102110311033103910491051106110631069108710911093109711031109111711231129115111531163117111811187119312011213121712231229123112371249125912771279128312891291129713011303130713191321132713611367137313811399140914231427142914331439144714511453145914711481148314871489149314991511152315311543154915531559156715711579158315971601160716091613161916211627163716571663166716691693169716991709172117231733174117471753175917771783178717891801181118231831184718611867187118731877187918891901190719131931193319491951197319791987199319971999200320112017202720292039205320632069208120832087208920992111211321292131213721412143215321612179220322072213222122372239224322512267226922732281228722932297230923112333233923412347235123572371237723812383238923932399241124172423243724412447245924672473247725032521253125392543254925512557257925912593260926172621263326472657265926632671267726832687268926932699270727112713271927292731274127492753276727772789279127972801280328192833283728432851285728612879288728972903290929172927293929532957296329692971299930013011301930233037304130493061306730793083308931093119312131373163316731693181318731913203320932173221322932513253325732593271329933013307331333193323332933313343334733593361337133733389339134073413343334493457346134633467346934913499351135173527352935333539354135473557355935713581358335933607361336173623363136373643365936713673367736913697370137093719372737333739376137673769377937933797380338213823383338473851385338633877388138893907391139173919392339293931394339473967398940014003400740134019402140274049405140574073407940914093409941114127412941334139415341574159417742014211421742194229423142414243425342594261427142734283428942974327433743394349435743634373439143974409442144234441444744514457446344814483449345074513451745194523454745494561456745834591459746034621463746394643464946514657466346734679469147034721472347294733475147594783478747894793479948014813481748314861487148774889490349094919493149334937494349514957496749694973498749934999500350095011502150235039505150595077508150875099510151075113511951475153516751715179518951975209522752315233523752615273527952815297530353095323533353475351538153875393539954075413541754195431543754415443544954715477547954835501550355075519552155275531555755635569557355815591562356395641564756515653565756595669568356895693570157115717573757415743574957795783579158015807581358215827583958435849585158575861586758695879588158975903592359275939595359815987600760116029603760436047605360676073607960896091610161136121613161336143615161636173619761996203621162176221622962476257626362696271627762876299630163116317632363296337634363536359636163676373637963896397642164276449645164696473648164916521652965476551655365636569657165776581659966076619663766536659666166736679668966916701670367096719673367376761676367796781679167936803682368276829683368416857686368696871688368996907691169176947694969596961696769716977698369916997700170137019702770397043705770697079710371097121712771297151715971777187719372077211721372197229723772437247725372837297730773097321733173337349735173697393741174177433745174577459747774817487748974997507751775237529753775417547754975597561757375777583758975917603760776217639764376497669767376817687769176997703771777237727774177537757775977897793781778237829784178537867787378777879788379017907791979277933793779497951796379938009801180178039805380598069808180878089809381018111811781238147816181678171817981918209821982218231823382378243826382698273828782918293829783118317832983538363836983778387838984198423842984318443844784618467850185138521852785378539854385638573858185978599860986238627862986418647866386698677868186898693869987078713871987318737874187478753876187798783880388078819882188318837883988498861886388678887889389238929893389418951896389698971899990019007901190139029904190439049905990679091910391099127913391379151915791619173918191879199920392099221922792399241925792779281928392939311931993239337934193439349937193779391939794039413941994219431943394379439946194639467947394799491949795119521953395399547955195879601961396199623962996319643964996619677967996899697971997219733973997439749976797699781978797919803981198179829983398399851985798599871988398879901990799239929993199419949996799731000710009100371003910061100671006910079100911009310099101031011110133101391014110151101591016310169101771018110193102111022310243102471025310259102671027110273102891030110303103131032110331103331033710343103571036910391103991042710429104331045310457104591046310477104871049910501105131052910531105591056710589105971060110607106131062710631106391065110657106631066710687106911070910711107231072910733107391075310771107811078910799108311083710847108531085910861108671088310889108911090310909109371093910949109571097310979109871099311003110271104711057110591106911071110831108711093111131111711119111311114911159111611117111173111771119711213112391124311251112571126111273112791128711299113111131711321113291135111353113691138311393113991141111423114371144311447114671147111483114891149111497115031151911527115491155111579115871159311597116171162111633116571167711681116891169911701117171171911731117431177711779117831178911801118071181311821118271183111833118391186311867118871189711903119091192311927119331193911941119531195911969119711198111987120071201112037120411204312049120711207312097121011210712109121131211912143121491215712161121631219712203122111222712239122411225112253122631226912277122811228912301123231232912343123471237312377123791239112401124091241312421124331243712451124571247312479124871249112497125031251112517125271253912541125471255312569125771258312589126011261112613126191263712641126471265312659126711268912697127031271312721127391274312757127631278112791127991280912821128231282912841128531288912893128991290712911129171291912923129411295312959129671297312979129831300113003130071300913033130371304313049130631309313099131031310913121131271314713151131591316313171131771318313187132171321913229132411324913259132671329113297133091331313327133311333713339133671338113397133991341113417134211344113451134571346313469134771348713499135131352313537135531356713577135911359713613136191362713633136491366913679136811368713691136931369713709137111372113723137291375113757137591376313781137891379913807138291383113841138591387313877138791388313901139031390713913139211393113933139631396713997139991400914011140291403314051140571407114081140831408714107141431414914153141591417314177141971420714221142431424914251142811429314303143211432314327143411434714369143871438914401144071441114419144231443114437144471444914461144791448914503145191453314537145431454914551145571456114563145911459314621146271462914633146391465314657146691468314699147131471714723147311473714741147471475314759147671477114779147831479714813148211482714831148431485114867148691487914887148911489714923149291493914947149511495714969149831501315017150311505315061150731507715083150911510115107151211513115137151391514915161151731518715193151991521715227152331524115259152631526915271152771528715289152991530715313153191532915331153491535915361153731537715383153911540115413154271543915443154511546115467154731549315497155111552715541155511555915569155811558315601156071561915629156411564315647156491566115667156711567915683157271573115733157371573915749157611576715773157871579115797158031580915817158231585915877158811588715889159011590715913159191592315937159591597115973159911600116007160331605716061160631606716069160731608716091160971610316111161271613916141161831618716189161931621716223162291623116249162531626716273163011631916333163391634916361163631636916381164111641716421164271643316447164511645316477164811648716493165191652916547165531656116567165731660316607166191663116633166491665116657166611667316691166931669916703167291674116747167591676316787168111682316829168311684316871168791688316889169011690316921169271693116937169431696316979169811698716993170111702117027170291703317041170471705317077170931709917107171171712317137171591716717183171891719117203172071720917231172391725717291172931729917317173211732717333173411735117359173771738317387173891739317401174171741917431174431744917467174711747717483174891749117497175091751917539175511756917573175791758117597175991760917623176271765717659176691768117683177071771317729177371774717749177611778317789177911780717827178371783917851178631788117891179031790917911179211792317929179391795717959179711797717981179871798918013180411804318047180491805918061180771808918097181191812118127181311813318143181491816918181181911819918211182171822318229182331825118253182571826918287182891830118307183111831318329183411835318367183711837918397184011841318427184331843918443184511845718461184811849318503185171852118523185391854118553185831858718593186171863718661186711867918691187011871318719187311874318749187571877318787187931879718803188391885918869188991891118913189171891918947189591897318979190011900919013190311903719051190691907319079190811908719121191391914119157191631918119183192071921119213192191923119237192491925919267192731928919301193091931919333193731937919381193871939119403194171942119423194271942919433194411944719457194631946919471194771948319489195011950719531195411954319553195591957119577195831959719603196091966119681196871969719699197091971719727197391975119753197591976319777197931980119813198191984119843198531986119867198891989119913199191992719937199491996119963199731997919991199931999720011200212002320029200472005120063200712008920101201072011320117201232012920143201472014920161201732017720183202012021920231202332024920261202692028720297203232032720333203412034720353203572035920369203892039320399204072041120431204412044320477204792048320507205092052120533205432054920551205632059320599206112062720639206412066320681206932070720717207192073120743207472074920753207592077120773207892080720809208492085720873208792088720897208992090320921209292093920947209592096320981209832100121011210132101721019210232103121059210612106721089211012110721121211392114321149211572116321169211792118721191211932121121221212272124721269212772128321313213172131921323213412134721377213792138321391213972140121407214192143321467214812148721491214932149921503215172152121523215292155721559215632156921577215872158921599216012161121613216172164721649216612167321683217012171321727217372173921751217572176721773217872179921803218172182121839218412185121859218632187121881218932191121929219372194321961219772199121997220032201322027220312203722039220512206322067220732207922091220932210922111221232212922133221472215322157221592217122189221932222922247222592227122273222772227922283222912230322307223432234922367223692238122391223972240922433224412244722453224692248122483225012251122531225412254322549225672257122573226132261922621226372263922643226512266922679226912269722699227092271722721227272273922741227512276922777227832278722807228112281722853228592286122871228772290122907229212293722943229612296322973229932300323011230172302123027230292303923041230532305723059230632307123081230872309923117231312314323159231672317323189231972320123203232092322723251232692327923291232932329723311233212332723333233392335723369233712339923417234312344723459234732349723509235312353723539235492355723561235632356723581235932359923603236092362323627236292363323663236692367123677236872368923719237412374323747237532376123767237732378923801238132381923827238312383323857238692387323879238872389323899239092391123917239292395723971239772398123993240012400724019240232402924043240492406124071240772408324091240972410324107241092411324121241332413724151241692417924181241972420324223242292423924247242512428124317243292433724359243712437324379243912440724413244192442124439244432446924473244812449924509245172452724533245472455124571245932461124623246312465924671246772468324691246972470924733247492476324767247812479324799248092482124841248472485124859248772488924907249172491924923249432495324967249712497724979249892501325031250332503725057250732508725097251112511725121251272514725153251632516925171251832518925219252292523725243252472525325261253012530325307253092532125339253432534925357253672537325391254092541125423254392544725453254572546325469254712552325537255412556125577255792558325589256012560325609256212563325639256432565725667256732567925693257032571725733257412574725759257632577125793257992580125819258412584725849258672587325889259032591325919259312593325939259432595125969259812599725999260032601726021260292604126053260832609926107261112611326119261412615326161261712617726183261892620326209262272623726249262512626126263262672629326297263092631726321263392634726357263712638726393263992640726417264232643126437264492645926479264892649726501265132653926557265612657326591265972662726633266412664726669266812668326687266932669926701267112671326717267232672926731267372675926777267832680126813268212683326839268492686126863268792688126891268932690326921269272694726951269532695926981269872699327011270172703127043270592706127067270732707727091271032710727109271272714327179271912719727211272392724127253272592727127277272812728327299273292733727361273672739727407274092742727431274372744927457274792748127487275092752727529275392754127551275812758327611276172763127647276532767327689276912769727701277332773727739277432774927751277632776727773277792779127793277992780327809278172782327827278472785127883278932790127917279192794127943279472795327961279672798327997280012801928027280312805128057280692808128087280972809928109281112812328151281632818128183282012821128219282292827728279282832828928297283072830928319283492835128387283932840328409284112842928433284392844728463284772849328499285132851728537285412854728549285592857128573285792859128597286032860728619286212862728631286432864928657286612866328669286872869728703287112872328729287512875328759287712878928793288072881328817288372884328859288672887128879289012890928921289272893328949289612897929009290172902129023290272903329059290632907729101291232912929131291372914729153291672917329179291912920129207292092922129231292432925129269292872929729303293112932729333293392934729363293832938729389293992940129411294232942929437294432945329473294832950129527295312953729567295692957329581295872959929611296292963329641296632966929671296832971729723297412975329759297612978929803298192983329837298512986329867298732987929881299172992129927299472995929983299893001130013300293004730059300713008930091300973010330109301133011930133301373013930161301693018130187301973020330211302233024130253302593026930271302933030730313303193032330341303473036730389303913040330427304313044930467304693049130493304973050930517305293053930553305573055930577305933063130637306433064930661306713067730689306973070330707307133072730757307633077330781308033080930817308293083930841308513085330859308693087130881308933091130931309373094130949309713097730983310133101931033310393105131063310693107931081310913112131123311393114731151311533115931177311813118331189311933121931223312313123731247312493125331259312673127131277313073131931321313273133331337313573137931387313913139331397314693147731481314893151131513315173153131541315433154731567315733158331601316073162731643316493165731663316673168731699317213172331727317293174131751317693177131793317993181731847318493185931873318833189131907319573196331973319813199132003320093202732029320513205732059320633206932077320833208932099321173211932141321433215932173321833218932191322033221332233322373225132257322613229732299323033230932321323233232732341323533235932363323693237132377323813240132411324133242332429324413244332467324793249132497325033250732531325333253732561325633256932573325793258732603326093261132621326333264732653326873269332707327133271732719327493277132779327833278932797328013280332831328333283932843328693288732909329113291732933329393294132957329693297132983329873299332999330133302333029330373304933053330713307333083330913310733113331193314933151331613317933181331913319933203332113322333247332873328933301333113331733329333313334333347333493335333359333773339133403334093341333427334573346133469334793348733493335033352133529335333354733563335693357733581335873358933599336013361333617336193362333629336373364133647336793370333713337213373933749337513375733767337693377333791337973380933811338273382933851338573386333871338893389333911339233393133937339413396133967339973401934031340333403934057340613412334127341293414134147341573415934171341833421134213342173423134253342593426134267342733428334297343013430334313343193432734337343513436134367343693438134403344213442934439344573446934471344833448734499345013451134513345193453734543345493458334589345913460334607346133463134649346513466734673346793468734693347033472134729347393474734757347593476334781348073481934841348433484734849348713487734883348973491334919349393494934961349633498135023350273505135053350593506935081350833508935099351073511135117351293514135149351533515935171352013522135227352513525735267352793528135291353113531735323353273533935353353633538135393354013540735419354233543735447354493546135491355073550935521355273553135533355373554335569355733559135593355973560335617356713567735729357313574735753357593577135797358013580335809358313583735839358513586335869358793589735899359113592335933359513596335969359773598335993359993600736011360133601736037360613606736073360833609736107361093613136137361513616136187361913620936217362293624136251362633626936277362933629936307363133631936341363433635336373363833638936433364513645736467364693647336479364933649736523365273652936541365513655936563365713658336587365993660736629366373664336653366713667736683366913669736709367133672136739367493676136767367793678136787367913679336809368213683336847368573687136877368873689936901369133691936923369293693136943369473697336979369973700337013370193702137039370493705737061370873709737117371233713937159371713718137189371993720137217372233724337253372733727737307373093731337321373373733937357373613736337369373793739737409374233744137447374633748337489374933750137507375113751737529375373754737549375613756737571375733757937589375913760737619376333764337649376573766337691376933769937717377473778137783377993781137813378313784737853378613787137879378893789737907379513795737963379673798737991379933799738011380393804738053380693808338113381193814938153381673817738183381893819738201382193823138237382393826138273382813828738299383033831738321383273832938333383513837138377383933843138447384493845338459384613850138543385573856138567385693859338603386093861138629386393865138653386693867138677386933869938707387113871338723387293873738747387493876738783387913880338821388333883938851388613886738873388913890338917389213892338933389533895938971389773899339019390233904139043390473907939089390973910339107391133911939133391393915739161391633918139191391993920939217392273922939233392393924139251392933930139313393173932339341393433935939367393713937339383393973940939419394393944339451394613949939503395093951139521395413955139563395693958139607396193962339631396593966739671396793970339709397193972739733397493976139769397793979139799398213982739829398393984139847398573986339869398773988339887399013992939937399533997139979399833998940009400134003140037400394006340087400934009940111401234012740129401514015340163401694017740189401934021340231402374024140253402774028340289403434035140357403614038740423404274042940433404594047140483404874049340499405074051940529405314054340559405774058340591405974060940627406374063940693406974069940709407394075140759407634077140787408014081340819408234082940841408474084940853408674087940883408974090340927409334093940949409614097340993410114101741023410394104741051410574107741081411134111741131411414114341149");
        return s.subSequence(a, a+b).toString();
    }
}