const makePwmDriver = require('adafruit-i2c-pwm-driver')
const pwmDriver = makePwmDriver({address: 0x40, device: '/dev/i2c-1'})

//Constants
var xPosStart = 0;
var yPosStart = 2.75;
var l1 = 10.5;
var l2 = 9.9;
var l3 = 17.1;
var freq = 40;

var deltaTime = 250;

pwmDriver.setPWMFreq(freq);

//List positions
var positions = [];
//positions.push(Pos(x, y, deltaTime, draw));

positions.push(Pos(28,10,deltaTime,false));
positions.push(Pos(28,10,deltaTime*4,false));


positions.push(Pos(30,10,deltaTime,true));
positions.push(Pos(29.825,10.75,deltaTime,true));
positions.push(Pos(29.65,11.5,deltaTime,true));
positions.push(Pos(29.475,12.25,deltaTime,true));
positions.push(Pos(29.3,13,deltaTime,true));
positions.push(Pos(29.125,13.75,deltaTime,true));
positions.push(Pos(28.95,14.5,deltaTime,true));
positions.push(Pos(28.775,15.25,deltaTime,true));
positions.push(Pos(28.6,16,deltaTime,true));
positions.push(Pos(28.425,16.75,deltaTime,true));
positions.push(Pos(28.25,17.5,deltaTime,true));
positions.push(Pos(28.075,18.25,deltaTime,true));
positions.push(Pos(27.9,19,deltaTime,true));
positions.push(Pos(27.725,19.75,deltaTime,true));
positions.push(Pos(27.55,20.5,deltaTime,true));
positions.push(Pos(27.375,21.25,deltaTime,true));
positions.push(Pos(27.2,22,deltaTime,true));

positions.push(Pos(26.825,22,deltaTime,true));
positions.push(Pos(26.45,22,deltaTime,true));
positions.push(Pos(26.075,22,deltaTime,true));
positions.push(Pos(25.7,22,deltaTime,true));

positions.push(Pos(25.7,22,deltaTime,true));
positions.push(Pos(25.5719300972143,21.9885840942752,deltaTime,true));
positions.push(Pos(25.4501623063911,21.9544232590366,deltaTime,true));
positions.push(Pos(25.3356233539439,21.8977774788672,deltaTime,true));
positions.push(Pos(25.2291849504614,21.8190778623577,deltaTime,true));
positions.push(Pos(25.1316571564633,21.71892336111,deltaTime,true));
positions.push(Pos(25.0437822173509,21.5980762113533,deltaTime,true));
positions.push(Pos(24.9662289144711,21.457456132867,deltaTime,true));
positions.push(Pos(24.8995874752869,21.2981333293569,deltaTime,true));
positions.push(Pos(24.8443650813896,21.1213203435596,deltaTime,true));
positions.push(Pos(24.800982008541,20.9283628290596,deltaTime,true));
positions.push(Pos(24.7697684281208,20.7207293090531,deltaTime,true));
positions.push(Pos(24.7509618943233,20.5,deltaTime,true));
positions.push(Pos(24.7447055362265,20.2678547852221,deltaTime,true));
positions.push(Pos(24.7510469684932,20.026060429977,deltaTime,true));
positions.push(Pos(24.7699379289946,19.7764571353076,deltaTime,true));
positions.push(Pos(24.8012346461148,19.5209445330008,deltaTime,true));
positions.push(Pos(24.844698932939,19.261467228243,deltaTime,true));
positions.push(Pos(24.9,19,deltaTime,true));
positions.push(Pos(24.9667169727857,18.738532771757,deltaTime,true));
positions.push(Pos(25.0443420948485,18.4790554669992,deltaTime,true));
positions.push(Pos(25.1322845921382,18.2235428646924,deltaTime,true));
positions.push(Pos(25.2298751691491,17.973939570023,deltaTime,true));
positions.push(Pos(25.3363711026635,17.7321452147779,deltaTime,true));
positions.push(Pos(25.4509618943233,17.5,deltaTime,true));
positions.push(Pos(25.5727754390122,17.2792706909469,deltaTime,true));
positions.push(Pos(25.7008846621021,17.0716371709404,deltaTime,true));
positions.push(Pos(25.8343145750508,16.8786796564404,deltaTime,true));
positions.push(Pos(25.9720496956535,16.7018666706431,deltaTime,true));
positions.push(Pos(26.1130417764757,16.542543867133,deltaTime,true));
positions.push(Pos(26.2562177826491,16.4019237886467,deltaTime,true));
positions.push(Pos(26.4004880583146,16.2810766388901,deltaTime,true));
positions.push(Pos(26.5447546195616,16.1809221376423,deltaTime,true));
positions.push(Pos(26.6879195107486,16.1022225211328,deltaTime,true));
positions.push(Pos(26.8288931606082,16.0455767409634,deltaTime,true));
positions.push(Pos(26.9666026745427,16.0114159057248,deltaTime,true));
positions.push(Pos(27.1,16,deltaTime,true));

positions.push(Pos(27.475,16,deltaTime,true));
positions.push(Pos(27.85,16,deltaTime,true));
positions.push(Pos(28.225,16,deltaTime,true));
positions.push(Pos(28.6,16,deltaTime,true));
positions.push(Pos(28.6,16,deltaTime,false));

positions.push(Pos(25.5,10,deltaTime,false));
positions.push(Pos(25.5,10,deltaTime,true));
positions.push(Pos(25.325,10.75,deltaTime,true));
positions.push(Pos(25.15,11.5,deltaTime,true));
positions.push(Pos(24.975,12.25,deltaTime,true));
positions.push(Pos(24.8,13,deltaTime,true));
positions.push(Pos(24.625,13.75,deltaTime,true));
positions.push(Pos(24.45,14.5,deltaTime,true));
positions.push(Pos(24.275,15.25,deltaTime,true));
positions.push(Pos(24.1,16,deltaTime,true));
positions.push(Pos(23.925,16.75,deltaTime,true));
positions.push(Pos(23.75,17.5,deltaTime,true));
positions.push(Pos(23.575,18.25,deltaTime,true));
positions.push(Pos(23.4,19,deltaTime,true));
positions.push(Pos(23.225,19.75,deltaTime,true));
positions.push(Pos(23.05,20.5,deltaTime,true));
positions.push(Pos(22.875,21.25,deltaTime,true));
positions.push(Pos(22.7,22,deltaTime,true));

positions.push(Pos(22.325,22,deltaTime,true));
positions.push(Pos(21.95,22,deltaTime,true));
positions.push(Pos(21.575,22,deltaTime,true));
positions.push(Pos(21.2,22,deltaTime,true));

positions.push(Pos(21.2,22,deltaTime,true));
positions.push(Pos(21.0719300972143,21.9885840942752,deltaTime,true));
positions.push(Pos(20.9501623063911,21.9544232590366,deltaTime,true));
positions.push(Pos(20.8356233539439,21.8977774788672,deltaTime,true));
positions.push(Pos(20.7291849504614,21.8190778623577,deltaTime,true));
positions.push(Pos(20.6316571564633,21.71892336111,deltaTime,true));
positions.push(Pos(20.5437822173509,21.5980762113533,deltaTime,true));
positions.push(Pos(20.4662289144711,21.457456132867,deltaTime,true));
positions.push(Pos(20.3995874752869,21.2981333293569,deltaTime,true));
positions.push(Pos(20.3443650813896,21.1213203435596,deltaTime,true));
positions.push(Pos(20.300982008541,20.9283628290596,deltaTime,true));
positions.push(Pos(20.2697684281208,20.7207293090531,deltaTime,true));
positions.push(Pos(20.2509618943233,20.5,deltaTime,true));
positions.push(Pos(20.2447055362265,20.2678547852221,deltaTime,true));
positions.push(Pos(20.2510469684932,20.026060429977,deltaTime,true));
positions.push(Pos(20.2699379289946,19.7764571353076,deltaTime,true));
positions.push(Pos(20.3012346461148,19.5209445330008,deltaTime,true));
positions.push(Pos(20.344698932939,19.261467228243,deltaTime,true));
positions.push(Pos(20.4,19,deltaTime,true));
positions.push(Pos(20.4667169727857,18.738532771757,deltaTime,true));
positions.push(Pos(20.5443420948485,18.4790554669992,deltaTime,true));
positions.push(Pos(20.6322845921382,18.2235428646924,deltaTime,true));
positions.push(Pos(20.7298751691491,17.973939570023,deltaTime,true));
positions.push(Pos(20.8363711026635,17.7321452147779,deltaTime,true));
positions.push(Pos(20.9509618943233,17.5,deltaTime,true));
positions.push(Pos(21.0727754390122,17.2792706909469,deltaTime,true));
positions.push(Pos(21.2008846621021,17.0716371709404,deltaTime,true));
positions.push(Pos(21.3343145750508,16.8786796564404,deltaTime,true));
positions.push(Pos(21.4720496956535,16.7018666706431,deltaTime,true));
positions.push(Pos(21.6130417764757,16.542543867133,deltaTime,true));
positions.push(Pos(21.7562177826491,16.4019237886467,deltaTime,true));
positions.push(Pos(21.9004880583146,16.2810766388901,deltaTime,true));
positions.push(Pos(22.0447546195616,16.1809221376423,deltaTime,true));
positions.push(Pos(22.1879195107486,16.1022225211328,deltaTime,true));
positions.push(Pos(22.3288931606082,16.0455767409634,deltaTime,true));
positions.push(Pos(22.4666026745427,16.0114159057248,deltaTime,true));
positions.push(Pos(22.6,16,deltaTime,true));

positions.push(Pos(22.975,16,deltaTime,true));
positions.push(Pos(23.35,16,deltaTime,true));
positions.push(Pos(23.725,16,deltaTime,true));
positions.push(Pos(24.1,16,deltaTime,true));
positions.push(Pos(24.02,15.7,deltaTime,true));
positions.push(Pos(23.94,15.4,deltaTime,true));
positions.push(Pos(23.86,15.1,deltaTime,true));
positions.push(Pos(23.78,14.8,deltaTime,true));
positions.push(Pos(23.7,14.5,deltaTime,true));
positions.push(Pos(23.62,14.2,deltaTime,true));
positions.push(Pos(23.54,13.9,deltaTime,true));
positions.push(Pos(23.46,13.6,deltaTime,true));
positions.push(Pos(23.38,13.3,deltaTime,true));
positions.push(Pos(23.3,13,deltaTime,true));
positions.push(Pos(23.22,12.7,deltaTime,true));
positions.push(Pos(23.14,12.4,deltaTime,true));
positions.push(Pos(23.06,12.1,deltaTime,true));
positions.push(Pos(22.98,11.8,deltaTime,true));
positions.push(Pos(22.9,11.5,deltaTime,true));
positions.push(Pos(22.82,11.2,deltaTime,true));
positions.push(Pos(22.74,10.9,deltaTime,true));
positions.push(Pos(22.66,10.6,deltaTime,true));
positions.push(Pos(22.58,10.3,deltaTime,true));
positions.push(Pos(22.5,10,deltaTime,true));
positions.push(Pos(22.5,10,deltaTime,false));

positions.push(Pos(19.5,10,deltaTime,false));
positions.push(Pos(19.5,10,deltaTime,true));
positions.push(Pos(19.444698932939,10.261467228243,deltaTime,true));
positions.push(Pos(19.4012346461148,10.5209445330008,deltaTime,true));
positions.push(Pos(19.3699379289946,10.7764571353076,deltaTime,true));
positions.push(Pos(19.3510469684932,11.026060429977,deltaTime,true));
positions.push(Pos(19.3447055362265,11.2678547852221,deltaTime,true));
positions.push(Pos(19.3509618943233,11.5,deltaTime,true));
positions.push(Pos(19.3697684281208,11.7207293090531,deltaTime,true));
positions.push(Pos(19.400982008541,11.9283628290596,deltaTime,true));
positions.push(Pos(19.4443650813896,12.1213203435596,deltaTime,true));
positions.push(Pos(19.4995874752869,12.2981333293569,deltaTime,true));
positions.push(Pos(19.5662289144711,12.457456132867,deltaTime,true));
positions.push(Pos(19.6437822173509,12.5980762113533,deltaTime,true));
positions.push(Pos(19.7316571564633,12.71892336111,deltaTime,true));
positions.push(Pos(19.8291849504614,12.8190778623577,deltaTime,true));
positions.push(Pos(19.9356233539439,12.8977774788672,deltaTime,true));
positions.push(Pos(20.0501623063911,12.9544232590366,deltaTime,true));
positions.push(Pos(20.1719300972143,12.9885840942752,deltaTime,true));
positions.push(Pos(20.3,13,deltaTime,true));

positions.push(Pos(20.125,13.75,deltaTime,true));
positions.push(Pos(19.95,14.5,deltaTime,true));
positions.push(Pos(19.775,15.25,deltaTime,true));
positions.push(Pos(19.6,16,deltaTime,true));
positions.push(Pos(19.425,16.75,deltaTime,true));
positions.push(Pos(19.25,17.5,deltaTime,true));
positions.push(Pos(19.075,18.25,deltaTime,true));

positions.push(Pos(18.9,19,deltaTime,true));
positions.push(Pos(18.8332830272143,19.261467228243,deltaTime,true));
positions.push(Pos(18.7556579051515,19.5209445330008,deltaTime,true));
positions.push(Pos(18.6677154078618,19.7764571353076,deltaTime,true));
positions.push(Pos(18.5701248308509,20.026060429977,deltaTime,true));
positions.push(Pos(18.4636288973365,20.2678547852221,deltaTime,true));
positions.push(Pos(18.3490381056767,20.5,deltaTime,true));
positions.push(Pos(18.2272245609878,20.7207293090531,deltaTime,true));
positions.push(Pos(18.0991153378979,20.9283628290596,deltaTime,true));
positions.push(Pos(17.9656854249492,21.1213203435596,deltaTime,true));
positions.push(Pos(17.8279503043465,21.2981333293569,deltaTime,true));
positions.push(Pos(17.6869582235243,21.457456132867,deltaTime,true));
positions.push(Pos(17.5437822173509,21.5980762113533,deltaTime,true));
positions.push(Pos(17.3995119416854,21.71892336111,deltaTime,true));
positions.push(Pos(17.2552453804384,21.8190778623577,deltaTime,true));
positions.push(Pos(17.1120804892514,21.8977774788672,deltaTime,true));
positions.push(Pos(16.9711068393918,21.9544232590366,deltaTime,true));
positions.push(Pos(16.8333973254573,21.9885840942752,deltaTime,true));
positions.push(Pos(16.7,22,deltaTime,true));
positions.push(Pos(16.5719300972143,21.9885840942752,deltaTime,true));
positions.push(Pos(16.4501623063911,21.9544232590366,deltaTime,true));
positions.push(Pos(16.3356233539439,21.8977774788672,deltaTime,true));
positions.push(Pos(16.2291849504614,21.8190778623577,deltaTime,true));
positions.push(Pos(16.1316571564633,21.71892336111,deltaTime,true));
positions.push(Pos(16.0437822173509,21.5980762113533,deltaTime,true));
positions.push(Pos(15.9662289144711,21.457456132867,deltaTime,true));
positions.push(Pos(15.8995874752869,21.2981333293569,deltaTime,true));
positions.push(Pos(15.8443650813896,21.1213203435596,deltaTime,true));
positions.push(Pos(15.800982008541,20.9283628290596,deltaTime,true));
positions.push(Pos(15.7697684281208,20.7207293090531,deltaTime,true));
positions.push(Pos(15.7509618943233,20.5,deltaTime,true));
positions.push(Pos(15.7447055362265,20.2678547852221,deltaTime,true));
positions.push(Pos(15.7510469684932,20.026060429977,deltaTime,true));
positions.push(Pos(15.7699379289946,19.7764571353076,deltaTime,true));
positions.push(Pos(15.8012346461148,19.5209445330008,deltaTime,true));
positions.push(Pos(15.844698932939,19.261467228243,deltaTime,true));
positions.push(Pos(15.9,19,deltaTime,true));

positions.push(Pos(16.075,18.25,deltaTime,true));
positions.push(Pos(16.25,17.5,deltaTime,true));
positions.push(Pos(16.425,16.75,deltaTime,true));
positions.push(Pos(16.6,16,deltaTime,true));
positions.push(Pos(16.775,15.25,deltaTime,true));
positions.push(Pos(16.95,14.5,deltaTime,true));
positions.push(Pos(17.125,13.75,deltaTime,true));

positions.push(Pos(17.3,13,deltaTime,true));
positions.push(Pos(17.3667169727857,12.738532771757,deltaTime,true));
positions.push(Pos(17.4443420948485,12.4790554669992,deltaTime,true));
positions.push(Pos(17.5322845921382,12.2235428646924,deltaTime,true));
positions.push(Pos(17.6298751691491,11.973939570023,deltaTime,true));
positions.push(Pos(17.7363711026635,11.7321452147779,deltaTime,true));
positions.push(Pos(17.8509618943233,11.5,deltaTime,true));
positions.push(Pos(17.9727754390122,11.2792706909469,deltaTime,true));
positions.push(Pos(18.1008846621021,11.0716371709404,deltaTime,true));
positions.push(Pos(18.2343145750508,10.8786796564404,deltaTime,true));
positions.push(Pos(18.3720496956535,10.7018666706431,deltaTime,true));
positions.push(Pos(18.5130417764757,10.542543867133,deltaTime,true));
positions.push(Pos(18.6562177826491,10.4019237886467,deltaTime,true));
positions.push(Pos(18.8004880583146,10.28107663889,deltaTime,true));
positions.push(Pos(18.9447546195616,10.1809221376423,deltaTime,true));
positions.push(Pos(19.0879195107486,10.1022225211328,deltaTime,true));
positions.push(Pos(19.2288931606082,10.0455767409634,deltaTime,true));
positions.push(Pos(19.3666026745427,10.0114159057248,deltaTime,true));
positions.push(Pos(19.5,10,deltaTime,true));
positions.push(Pos(19.5,10,deltaTime,false));

positions.push(Pos(16.5,10,deltaTime,false));
positions.push(Pos(16.5,10,deltaTime,true));
positions.push(Pos(16.325,10.75,deltaTime,true));
positions.push(Pos(16.15,11.5,deltaTime,true));
positions.push(Pos(15.975,12.25,deltaTime,true));
positions.push(Pos(15.8,13,deltaTime,true));
positions.push(Pos(15.625,13.75,deltaTime,true));
positions.push(Pos(15.45,14.5,deltaTime,true));
positions.push(Pos(15.275,15.25,deltaTime,true));
positions.push(Pos(15.1,16,deltaTime,true));
positions.push(Pos(14.925,16.75,deltaTime,true));
positions.push(Pos(14.75,17.5,deltaTime,true));
positions.push(Pos(14.575,18.25,deltaTime,true));
positions.push(Pos(14.4,19,deltaTime,true));
positions.push(Pos(14.225,19.75,deltaTime,true));
positions.push(Pos(14.05,20.5,deltaTime,true));
positions.push(Pos(13.875,21.25,deltaTime,true));
positions.push(Pos(13.7,22,deltaTime,true));

positions.push(Pos(13.62,21.7,deltaTime,true));
positions.push(Pos(13.54,21.4,deltaTime,true));
positions.push(Pos(13.46,21.1,deltaTime,true));
positions.push(Pos(13.38,20.8,deltaTime,true));
positions.push(Pos(13.3,20.5,deltaTime,true));
positions.push(Pos(13.22,20.2,deltaTime,true));
positions.push(Pos(13.14,19.9,deltaTime,true));
positions.push(Pos(13.06,19.6,deltaTime,true));
positions.push(Pos(12.98,19.3,deltaTime,true));
positions.push(Pos(12.9,19.,deltaTime,true));
positions.push(Pos(12.68,19.3,deltaTime,true));
positions.push(Pos(12.46,19.6,deltaTime,true));
positions.push(Pos(12.24,19.9,deltaTime,true));
positions.push(Pos(12.02,20.2,deltaTime,true));
positions.push(Pos(11.8,20.4999999999999,deltaTime,true));
positions.push(Pos(11.58,20.7999999999999,deltaTime,true));
positions.push(Pos(11.36,21.0999999999999,deltaTime,true));
positions.push(Pos(11.14,21.3999999999999,deltaTime,true));
positions.push(Pos(10.92,21.6999999999999,deltaTime,true));
positions.push(Pos(10.7,22,deltaTime,true));

positions.push(Pos(10.875,21.25,deltaTime,true));
positions.push(Pos(11.05,20.5,deltaTime,true));
positions.push(Pos(11.225,19.75,deltaTime,true));
positions.push(Pos(11.4,19,deltaTime,true));
positions.push(Pos(11.575,18.25,deltaTime,true));
positions.push(Pos(11.75,17.5,deltaTime,true));
positions.push(Pos(11.925,16.75,deltaTime,true));
positions.push(Pos(12.1,16,deltaTime,true));
positions.push(Pos(12.275,15.25,deltaTime,true));
positions.push(Pos(12.45,14.5,deltaTime,true));
positions.push(Pos(12.625,13.75,deltaTime,true));
positions.push(Pos(12.8,13,deltaTime,true));
positions.push(Pos(12.975,12.25,deltaTime,true));
positions.push(Pos(13.15,11.5,deltaTime,true));
positions.push(Pos(13.325,10.75,deltaTime,true));
positions.push(Pos(13.5,10,deltaTime,true));
positions.push(Pos(13.5,10,deltaTime,false));

positions.push(Pos(9.9,19,deltaTime,false));
positions.push(Pos(9.9,19,deltaTime,true));
positions.push(Pos(9.83328302721426,19.261467228243,deltaTime,true));
positions.push(Pos(9.75565790515146,19.5209445330008,deltaTime,true));
positions.push(Pos(9.66771540786184,19.7764571353076,deltaTime,true));
positions.push(Pos(9.5701248308509,20.026060429977,deltaTime,true));
positions.push(Pos(9.46362889733648,20.2678547852221,deltaTime,true));
positions.push(Pos(9.34903810567666,20.5,deltaTime,true));
positions.push(Pos(9.22722456098776,20.7207293090531,deltaTime,true));
positions.push(Pos(9.09911533789789,20.9283628290596,deltaTime,true));
positions.push(Pos(8.96568542494924,21.1213203435596,deltaTime,true));
positions.push(Pos(8.82795030434653,21.2981333293569,deltaTime,true));
positions.push(Pos(8.68695822352428,21.457456132867,deltaTime,true));
positions.push(Pos(8.54378221735089,21.5980762113533,deltaTime,true));
positions.push(Pos(8.3995119416854,21.71892336111,deltaTime,true));
positions.push(Pos(8.25524538043837,21.8190778623577,deltaTime,true));
positions.push(Pos(8.11208048925143,21.8977774788672,deltaTime,true));
positions.push(Pos(7.97110683939185,21.9544232590366,deltaTime,true));
positions.push(Pos(7.83339732545727,21.9885840942752,deltaTime,true));
positions.push(Pos(7.7,22,deltaTime,true));
positions.push(Pos(7.57193009721429,21.9885840942752,deltaTime,true));
positions.push(Pos(7.45016230639106,21.9544232590366,deltaTime,true));
positions.push(Pos(7.33562335394387,21.8977774788672,deltaTime,true));
positions.push(Pos(7.22918495046136,21.8190778623577,deltaTime,true));
positions.push(Pos(7.1316571564633,21.71892336111,deltaTime,true));
positions.push(Pos(7.04378221735089,21.5980762113533,deltaTime,true));
positions.push(Pos(6.96622891447114,21.457456132867,deltaTime,true));
positions.push(Pos(6.8995874752869,21.2981333293569,deltaTime,true));
positions.push(Pos(6.84436508138959,21.1213203435596,deltaTime,true));
positions.push(Pos(6.80098200854096,20.9283628290596,deltaTime,true));
positions.push(Pos(6.76976842812078,20.7207293090531,deltaTime,true));
positions.push(Pos(6.75096189432334,20.5,deltaTime,true));
positions.push(Pos(6.74470553622654,20.2678547852221,deltaTime,true));
positions.push(Pos(6.75104696849317,20.026060429977,deltaTime,true));
positions.push(Pos(6.76993792899463,19.7764571353076,deltaTime,true));
positions.push(Pos(6.80123464611484,19.5209445330008,deltaTime,true));
positions.push(Pos(6.84469893293902,19.261467228243,deltaTime,true));
positions.push(Pos(6.9,19,deltaTime,true));

positions.push(Pos(6.9,19,deltaTime,true));
positions.push(Pos(6.96671697278574,18.738532771757,deltaTime,true));
positions.push(Pos(7.04434209484854,18.4790554669992,deltaTime,true));
positions.push(Pos(7.13228459213816,18.2235428646924,deltaTime,true));
positions.push(Pos(7.2298751691491,17.973939570023,deltaTime,true));
positions.push(Pos(7.33637110266352,17.7321452147779,deltaTime,true));
positions.push(Pos(7.45096189432334,17.5,deltaTime,true));
positions.push(Pos(7.57277543901225,17.2792706909469,deltaTime,true));
positions.push(Pos(7.70088466210211,17.0716371709404,deltaTime,true));
positions.push(Pos(7.83431457505076,16.8786796564404,deltaTime,true));
positions.push(Pos(7.97204969565347,16.7018666706431,deltaTime,true));
positions.push(Pos(8.11304177647572,16.542543867133,deltaTime,true));
positions.push(Pos(8.25621778264911,16.4019237886467,deltaTime,true));
positions.push(Pos(8.25618221735089,16.4020762113533,deltaTime,true));
positions.push(Pos(8.39935822352428,16.261456132867,deltaTime,true));
positions.push(Pos(8.54035030434653,16.1021333293569,deltaTime,true));
positions.push(Pos(8.67808542494924,15.9253203435596,deltaTime,true));
positions.push(Pos(8.81151533789789,15.7323628290596,deltaTime,true));
positions.push(Pos(8.93962456098776,15.5247293090531,deltaTime,true));
positions.push(Pos(9.06143810567666,15.304,deltaTime,true));
positions.push(Pos(9.17602889733648,15.0718547852221,deltaTime,true));
positions.push(Pos(9.2825248308509,14.830060429977,deltaTime,true));
positions.push(Pos(9.38011540786184,14.5804571353076,deltaTime,true));
positions.push(Pos(9.46805790515146,14.3249445330008,deltaTime,true));
positions.push(Pos(9.54568302721426,14.065467228243,deltaTime,true));
positions.push(Pos(9.6124,13.804,deltaTime,true));
positions.push(Pos(9.6124,13.804,deltaTime,false));
positions.push(Pos(10.15,11.5,deltaTime,false));
positions.push(Pos(10.15,11.5,deltaTime,true));
positions.push(Pos(10.15,11.5,deltaTime,false));


function Pos(x, y, dt, draw){
	newPos = {};
	newPos.x = x;
	newPos.y = y;
	newPos.dt = dt;
	newPos.draw = draw;
	return newPos;
}

//Servo Angles
var angle0 = 90; //Either xx or yy if line movement is a drawn line or not
var angle1 = 90; //Calculated by PositionToAngles
var angle2 = 135; //Calculated by PositionToAngles
var angle3 = 135; //Calculated by PositionToAngles
var angle4 = 20; //Constant if drawing
var angle5 = 115; //Constant if drawing

//Convert an angle to pwm off value
function AngleToOff(angle){
    var cycle = 1000/freq;
    var tickTime = 1000 * cycle / 4096;
    var ms = (angle * 100 / 9) + 500;
    return ms / tickTime;
}

//Convert an x, y position to a set of 3 angles for the arm
function PositionToAngles(xIn, yIn){
	var xPosEnd = xIn - xPosStart; //Convert global x to local x
	var yPosEnd = yIn - yPosStart; //Convert global y to local y

	var angle3Search = 0; //Value to search through angles around the final point to conect back from
	var xPos3 = -Math.sin(angle3Search/180*Math.PI)*l3 + xPosEnd; //The x based on angle3Search
	var yPos3 = Math.cos(angle3Search/180*Math.PI)*l3 + yPosEnd; //the y based on angle3Search
	var h = Math.sqrt((xPos3*xPos3)+(yPos3*yPos3)); //The distance from the x, y just calculated to the origin
	while(h>(l1+l2-3)){ //Keep searching for better angles until it is close enough to the origin
		angle3Search++; //incriment the searching angle
		xPos3 = -Math.sin(angle3Search/180*Math.PI)*l3 + xPosEnd; //recalculate
		yPos3 = Math.cos(angle3Search/180*Math.PI)*l3 + yPosEnd; //recalculate
		h = Math.sqrt((xPos3*xPos3)+(yPos3*yPos3)); //recalculate
		if(angle3Search > 360){ //if we have done a full circle STOP!!
			console.log("ERROR: Position unreachable");
			return;
		}
	}
	var angle3Global = angle3Search - 90; //Convert the search angle to the angle above the x axis of the other end of the joint
	var hangle = Math.atan2(yPos3, xPos3) * 180 / Math.PI; //The angle above the x axis that the line between the 3rd point and the origin make
	var a1 = Math.acos((l2*l2-l1*l1-h*h)/(-2*l1*h))  * 180 / Math.PI; //Internal angle next to point 1 of the triangle between joint 1, 2 and the line between the 3rd point and the origin
	var a2 = Math.acos((h*h-l1*l1-l2*l2)/(-2*l1*l2))  * 180 / Math.PI;//Internal angle next to point 2 angle of the triangle between joint 1, 2 and the line between the 3rd point and the origin
	angle1 = a1 + hangle; //Calculate the angle value of servo 1
	angle2 = a2 - 45; //Calculate the angle value of servo 2
	angle3 = angle3Global + 135 - (angle2 - 135 + angle1); //Calculate the angle value of servo 3
}

//Sets the timeout for all of the movements
function DrawPicture(){
	var t = 0;
	for(var i = 0; i < positions.length; i++){
		//console.log(positions[i].x, positions[i].y);
		setTimeout(MoveArm, t, positions[i].x, positions[i].y, positions[i].draw);
		t += positions[i].dt;
	}
}

//Uses PositionToAngles and AngleToOff to set the servos' position
function MoveArm(x, y, draw){
	PositionToAngles(x, y);
	if(draw){ angle0 = 82; }
	else{ angle0 = 100; }
	console.log(angle1, angle2, angle3);
	pwmDriver.setPWM(0, 0, AngleToOff(angle0));
	pwmDriver.setPWM(1, 0, AngleToOff(angle1));
	pwmDriver.setPWM(2, 0, AngleToOff(angle2));
	pwmDriver.setPWM(3, 0, AngleToOff(angle3));
	pwmDriver.setPWM(4, 0, AngleToOff(angle4));
	pwmDriver.setPWM(5, 0, AngleToOff(angle5));
}

//Begin drawing the picture
DrawPicture();