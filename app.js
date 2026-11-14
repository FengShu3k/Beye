/* =============================================================
   荒野求生 · 贝爷食谱图鉴
   vanilla JS，无框架、无外部依赖。图片来自 assets/scenes.css 的 data URI。
   ============================================================= */
(() => {
  'use strict';

  const FOOD_DATA = [{"id":"1","name":"巨型幼虫 (Giant Larva)","category":"昆虫","calories":120,"riskLevel":"低","riskDescription":"可能有寄生虫。","precautions":["去除头部","建议挤出内脏或整只生吞"],"bearQuote":"“它们含有丰富的蛋白质，虽然口感像过期的奶油冻，但你需要这股能量。”","audienceReaction":"🤢 “救命，我隔着屏幕都能听到爆浆的声音！”","region":"东南亚","environment":"热带雨林","eatingMethod":"生吃/去头","imageUrl":"https://picsum.photos/seed/larva/400/300","description":"这种巨大的甲虫幼虫是极佳的蛋白质来源，在腐烂的树干中经常可以找到。"},{"id":"2","name":"响尾蛇 (Rattlesnake)","category":"爬行动物","calories":450,"riskLevel":"高","riskDescription":"剧毒蛇类，捕杀风险极大。","precautions":["斩首并深埋头部","去除剥皮后彻底烤熟"],"bearQuote":"“鸡肉的味道，但更有嚼劲。记住，一定要把头埋得深一点，它的神经反应可能还会咬你一口。”","audienceReaction":"🔥 “这大概是整季最豪华的一顿饭了。”","region":"北美洲","environment":"荒漠/峡谷","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/snake/400/300","description":"沙漠中的顶级猎食者，其肉质坚实，能提供充足的热量。"},{"id":"3","name":"象粪水 (Elephant Dung Fluid)","category":"排泄物/液体","calories":5,"riskLevel":"高","riskDescription":"大量细菌和寄生虫。","precautions":["最后时刻的生存选择","不要喝固态部分"],"bearQuote":"“如果你快渴死了，这绝对能救你的命。它喝起来……就像是陈年沼泽地的味道。”","audienceReaction":"🤮 “我看这段的时候正在吃饭，现在我没法直视我的汤了。”","region":"非洲","environment":"萨瓦纳草原","eatingMethod":"挤出汁液饮用","imageUrl":"https://picsum.photos/seed/dung/400/300","description":"在极度干旱的非洲荒野，象粪中挤出的液体是绝望中的水分来源。"},{"id":"4","name":"牦牛眼珠 (Yak Eyeball)","category":"内脏","calories":80,"riskLevel":"中","riskDescription":"可能有未知的动物传染病。","precautions":["直接吞服","注意眼角膜的韧性"],"bearQuote":"“像一颗巨大的、黏糊糊的爆珠。里面的液体充满了维生素。”","audienceReaction":"😱 “那个眼神……它在看着你吃它！”","region":"亚洲","environment":"高海拔荒原","eatingMethod":"生吃/爆浆","imageUrl":"https://picsum.photos/seed/eyeball/400/300","description":"西藏荒原上珍贵的补给。"},{"id":"5","name":"蝎子 (Scorpion)","category":"蛛形纲","calories":40,"riskLevel":"中","riskDescription":"尾端带有毒刺。","precautions":["务必去除毒刺和毒囊","咬掉头部后进食"],"bearQuote":"“如果你把它弄死，咬掉尾巴，它就是荒野中的松脆小零食。”","audienceReaction":"🦂 “嘎嘣脆，鸡肉味？”","region":"北美/非洲","environment":"沙漠","eatingMethod":"生吃/烤制","imageUrl":"https://picsum.photos/seed/scorpion/400/300","description":"富含蛋白质和矿物质。"},{"id":"6","name":"羊睾丸 (Goat Testicle)","category":"内脏","calories":150,"riskLevel":"中","riskDescription":"口感极差，可能导致心理不适。","precautions":["快速咀嚼","不要回味"],"bearQuote":"“这需要极大的意志力。非常富有韧性，而且有一股……特殊的膻味。”","audienceReaction":"😂 “真男人贝尔，什么都敢挑战。”","region":"中东","environment":"荒漠山地","eatingMethod":"生吃","imageUrl":"https://picsum.photos/seed/testicle/400/300","description":"在贝都因人的荒野中，这是“慷慨”的赠礼。"},{"id":"7","name":"腐烂的驯鹿 (Rotten Reindeer)","category":"肉类","calories":800,"riskLevel":"极高","riskDescription":"严重的细菌感染和肉毒杆菌风险。","precautions":["避开最腐烂的部分","尽可能加热"],"bearQuote":"“闻起来像地狱，但这是几千大卡的热量。在极地，你不能挑食。”","audienceReaction":"😨 “那种苍蝇乱飞的画面我永生难忘。”","region":"北极","environment":"极寒地带","eatingMethod":"生吃/割取腐肉","imageUrl":"https://picsum.photos/seed/reindeer/400/300","description":"在冰天雪地中发现的被捕食者剩下的残骸。"},{"id":"8","name":"巨型蜈蚣 (Giant Centipede)","category":"多足类","calories":30,"riskLevel":"高","riskDescription":"剧毒且会咬人。","precautions":["在它咬你之前掐断头部","去除足部"],"bearQuote":"“你需要极快的手速。咬下去的时候，它还在你嘴里动。”","audienceReaction":"💀 “噩梦素材，绝对是噩梦素材。”","region":"东南亚","environment":"热带雨林","eatingMethod":"生吃/去头","imageUrl":"https://picsum.photos/seed/centipede/400/300","description":"这种节肢动物在潮湿环境中极其危险。"},{"id":"9","name":"树皮 (Outer Bark)","category":"植物","calories":10,"riskLevel":"低","riskDescription":"极难消化，可能导致便秘。","precautions":["只吃韧皮部（内部白色部分）","细嚼慢咽"],"bearQuote":"“这不是为了味道，这是为了纤维。让你的肠胃保持运作。”","audienceReaction":"🪓 “这看着比虫子还难以下咽。”","region":"全球","environment":"森林","eatingMethod":"咀嚼/烹煮","imageUrl":"https://picsum.photos/seed/bark/400/300","description":"冬季生存时的最后选择。"},{"id":"10","name":"蝙蝠 (Bat)","category":"哺乳动物","calories":200,"riskLevel":"极高","riskDescription":"多种病毒（狂犬病、埃博拉等）的天然宿主。","precautions":["彻底煮熟","避免接触血液"],"bearQuote":"“洞穴里的‘空中小鸡’。一定要用火彻底烤焦。”","audienceReaction":"🦇 “贝尔，三思啊！这个风险太大了！”","region":"亚洲/澳洲","environment":"洞穴","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/bat/400/300","description":"捕捉洞穴中悬挂的蝙蝠。"},{"id":"11","name":"斑马肉 (Zebra Carcass)","category":"肉类","calories":1200,"riskLevel":"高","riskDescription":"如果是狮子剩下的，可能带有唾液细菌。","precautions":["观察周围是否有捕食者","取肉后立刻撤离"],"bearQuote":"“狮子吃剩下的就是我的晚餐。这种野味非常强壮。”","audienceReaction":"🦁 “从狮子口中夺食，不愧是贝爷。”","region":"非洲","environment":"草原","eatingMethod":"生吃/烤制","imageUrl":"https://picsum.photos/seed/zebra/400/300","description":"在萨瓦纳草原寻找大型猫科动物的残餐。"},{"id":"12","name":"巨型蚯蚓 (Giant Earthworm)","category":"环节动物","calories":50,"riskLevel":"低","riskDescription":"满口泥沙，口感糟糕。","precautions":["挤出中间的泥土","整根吞下"],"bearQuote":"“就像吃一根充满泥巴的面条，但蛋白质含量很高。”","audienceReaction":"🪱 “我宁愿饿着，真的。”","region":"全球","environment":"潮湿森林","eatingMethod":"生吃/挤出泥土","imageUrl":"https://picsum.photos/seed/worm/400/300","description":"雨后极易获取。"},{"id":"13","name":"蜘蛛 (Large Spider)","category":"蛛形纲","calories":25,"riskLevel":"中","riskDescription":"部分有毒，毛刺会刺伤口腔。","precautions":["咬掉头部","去除带毛的腿"],"bearQuote":"“有点苦，像苦涩的坚果。一定要快点嚼。”","audienceReaction":"🕷️ “蜘蛛侠看了会流泪。”","region":"东南亚","environment":"雨林","eatingMethod":"生吃","imageUrl":"https://picsum.photos/seed/spider/400/300","description":"富含脂肪和蛋白质。"},{"id":"14","name":"驼鹿心脏 (Moose Heart)","category":"内脏","calories":600,"riskLevel":"低","riskDescription":"相对安全，主要是心理压力。","precautions":["如果是新鲜的，趁热吃"],"bearQuote":"“这是对猎物的尊重，也是能量的极致补充。温热的心脏含有盐分。”","audienceReaction":"❤️ “非常有冲击力的画面，充满了野性。”","region":"北美","environment":"针叶林","eatingMethod":"生吃","imageUrl":"https://picsum.photos/seed/heart/400/300","description":"极其高效的蛋白质和矿物质补给。"},{"id":"15","name":"蜣螂 (Dung Beetle)","category":"昆虫","calories":15,"riskLevel":"中","riskDescription":"携带粪便细菌。","precautions":["剥掉坚硬的外壳","只吃中间的肌肉部分"],"bearQuote":"“你需要忽略它的背景，专注于那一点点蛋白质。”","audienceReaction":"💩 “屎壳郎也能吃？贝尔你赢了。”","region":"非洲","environment":"草原","eatingMethod":"生吃/剥壳","imageUrl":"https://picsum.photos/seed/beetle/400/300","description":"在粪堆旁活跃的勤劳昆虫。"},{"id":"16","name":"蝉 (Cicada)","category":"昆虫","calories":10,"riskLevel":"低","riskDescription":"外壳坚硬，口感一般。","precautions":["去掉翅膀"],"bearQuote":"“它们就像长了翅膀的小香肠。”","audienceReaction":"🦗 “这个我也吃过，油炸很好吃。”","region":"亚洲/北美","environment":"森林","eatingMethod":"生吃/烤制","imageUrl":"https://picsum.photos/seed/cicada/400/300","description":"夏季常见的林间补给。"},{"id":"17","name":"蚂蚁 (Ants)","category":"昆虫","calories":5,"riskLevel":"低","riskDescription":"酸性较强（蚁酸）。","precautions":["最好一次抓一大把吃"],"bearQuote":"“它们吃起来像柠檬，酸酸的，能刺激唾液分泌。”","audienceReaction":"🐜 “贝尔的随身柠檬片。”","region":"全球","environment":"各异","eatingMethod":"生吃","imageUrl":"https://picsum.photos/seed/ants/400/300","description":"微型能量炸弹。"},{"id":"18","name":"豪猪 (Porcupine)","category":"哺乳动物","calories":500,"riskLevel":"中","riskDescription":"背后的尖刺极具威胁。","precautions":["用粗木棍敲打头部","小心处理刺毛"],"bearQuote":"“如果你能搞定那些刺，它的肉真的很香。”","audienceReaction":"🦔 “看着都疼，贝尔是怎么抓住它的？”","region":"非洲/亚洲","environment":"林地/灌木","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/porcupine/400/300","description":"防御力极强但行动相对缓慢的猎物。"},{"id":"19","name":"蜥蜴 (Lizard)","category":"爬行动物","calories":100,"riskLevel":"中","riskDescription":"可能有寄生虫和沙门氏菌。","precautions":["剥掉皮","彻底煮熟"],"bearQuote":"“荒野里的快餐。口感像有点老的鱼。”","audienceReaction":"🦎 “可怜的小蜥蜴，变成了贝爷的加餐。”","region":"全球","environment":"干燥地区","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/lizard/400/300","description":"极易在石头缝中发现。"},{"id":"20","name":"生鱼 (Raw Fish)","category":"鱼类","calories":300,"riskLevel":"中","riskDescription":"淡水鱼易有寄生虫。","precautions":["如果是淡水鱼尽量煮熟","避开内脏"],"bearQuote":"“在大自然中，寿司就是这么新鲜。一定要咬住背部防止它滑走。”","audienceReaction":"🐟 “这吃相，真的像一头熊。”","region":"全球","environment":"河流/海洋","eatingMethod":"生吃/咬碎","imageUrl":"https://picsum.photos/seed/fish/400/300","description":"水中最直接的蛋白质来源。"},{"id":"21","name":"蜂蛹 (Bee Larvae)","category":"昆虫","calories":180,"riskLevel":"高","riskDescription":"获取时极易被成蜂蜇伤。","precautions":["用烟熏走成蜂","保护面部"],"bearQuote":"“这是荒野里的糖果。高脂肪、高热量，口感丝滑。”","audienceReaction":"🐝 “冒着被蜇成猪头的风险去吃糖果，值得吗？”","region":"全球","environment":"森林","eatingMethod":"生吃/整窝吞","imageUrl":"https://picsum.photos/seed/bee/400/300","description":"由于含有蜂蜜，是罕见的甜味补给。"},{"id":"22","name":"蚱蜢 (Grasshopper)","category":"昆虫","calories":15,"riskLevel":"低","riskDescription":"后腿带刺，可能划伤喉咙。","precautions":["掐掉头部和后腿"],"bearQuote":"“掐掉头，拽出内脏，它们就是高蛋白的小吃。”","audienceReaction":"🦗 “贝尔吃这些就像我们在吃薯片。”","region":"全球","environment":"草地","eatingMethod":"生吃/烤制","imageUrl":"https://picsum.photos/seed/grasshopper/400/300","description":"随处可见，极其便携。"},{"id":"23","name":"蜗牛 (Snail)","category":"软体动物","calories":20,"riskLevel":"中","riskDescription":"可能携带导致脑炎的寄生虫。","precautions":["务必煮熟","清理粘液"],"bearQuote":"“法式料理的野外版。粘液有点恶心，但肉质还行。”","audienceReaction":"🐌 “这不是法式蜗牛，这是求生蜗牛。”","region":"全球","environment":"阴湿地带","eatingMethod":"烤制/煮食","imageUrl":"https://picsum.photos/seed/snail/400/300","description":"富含矿物质，获取难度极低。"},{"id":"24","name":"海胆 (Sea Urchin)","category":"海鲜","calories":120,"riskLevel":"中","riskDescription":"刺有毒或极易扎伤手。","precautions":["用石头敲开","只吃黄色的生殖腺"],"bearQuote":"“大海的精华。它的生殖腺充满了奶油感和海洋的味道。”","audienceReaction":"🌊 “贝尔在海边生活得还挺精致。”","region":"海岸线","environment":"海洋","eatingMethod":"生吃","imageUrl":"https://picsum.photos/seed/urchin/400/300","description":"礁石缝隙里的美食。"},{"id":"25","name":"椰子蟹 (Coconut Crab)","category":"甲壳类","calories":800,"riskLevel":"高","riskDescription":"巨大的螯能夹断手指。","precautions":["控制住它的大螯","尾部可能有毒（如果它吃了有毒果实）"],"bearQuote":"“它是求生者的梦想午餐。肉量充足，味道鲜美。”","audienceReaction":"🦀️ “这种螃蟹很贵的吧？贝尔真会吃。”","region":"热带海岛","environment":"雨林/海岸","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/crab/400/300","description":"陆地上最大的节肢动物。"},{"id":"26","name":"巨蜥 (Monitor Lizard)","category":"爬行动物","calories":1500,"riskLevel":"极高","riskDescription":"唾液中含有致命细菌。","precautions":["避免被咬到","剥皮后彻底煮沸"],"bearQuote":"“这是一场生存硬仗。只要杀掉它，你能吃三天。”","audienceReaction":"🐉 “这简直是怪兽对决。”","region":"亚洲/澳洲/非洲","environment":"多样","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/monitor/400/300","description":"凶猛的大型蜥蜴。"},{"id":"27","name":"鳄鱼肉 (Crocodile Meat)","category":"爬行动物","calories":2000,"riskLevel":"极高","riskDescription":"水中顶级掠食者，极难捕杀。","precautions":["通常寻找幼体或剩下的残肢","尾部肉质最佳"],"bearQuote":"“有点像鱼和鸡肉的混合体。非常紧实的肌肉。”","audienceReaction":"🐊 “贝尔，你才是食物链顶端的男人。”","region":"澳洲/非洲/东南亚","environment":"沼泽/河流","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/crocodile/400/300","description":"能量极高的肉类。"},{"id":"28","name":"蟾蜍 (Toad)","category":"两栖类","calories":40,"riskLevel":"极高","riskDescription":"皮肤上的腺体分泌剧毒。","precautions":["绝对不能带皮吃","彻底清理内脏"],"bearQuote":"“除非真的要饿死了，否则我不建议尝试。必须非常小心地剥皮。”","audienceReaction":"🐸 “这个风险太高了，真的不建议模范。”","region":"全球","environment":"湿地","eatingMethod":"剥皮烤制","imageUrl":"https://picsum.photos/seed/toad/400/300","description":"求生中的高风险补给。"},{"id":"29","name":"螃蟹 (Wild Crab)","category":"甲壳类","calories":150,"riskLevel":"中","riskDescription":"携带肺吸虫。","precautions":["必须烤熟","小心夹伤"],"bearQuote":"“荒野里的淡水宝藏。嚼碎它的壳，吸取里面的肉。”","audienceReaction":"🦀 “普通的美味。”","region":"全球","environment":"溪流/海岸","eatingMethod":"烤制","imageUrl":"https://picsum.photos/seed/wildcrab/400/300","description":"求生场景中常见的蛋白质。"},{"id":"30","name":"大型甲虫 (Large Beetle)","category":"昆虫","calories":20,"riskLevel":"中","riskDescription":"外壳可能划伤肠道。","precautions":["烤焦后剥去硬壳"],"bearQuote":"“如果它的甲壳太硬，就只吃腹部的软组织。”","audienceReaction":"🪲 “那种‘啪’的一声，我心脏都跳了一下。”","region":"全球","environment":"森林","eatingMethod":"生吃/剥壳","imageUrl":"https://picsum.photos/seed/beetle2/400/300","description":"富含甲壳素。"}];

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);

  const TOTAL_KCAL = FOOD_DATA.reduce((sum, f) => sum + f.calories, 0);
  const REGIONS = new Set(FOOD_DATA.map((f) => f.region)).size;
  const ENVS = new Set(FOOD_DATA.map((f) => f.environment)).size;
  const CATEGORIES = ['全部', ...new Set(FOOD_DATA.map((f) => f.category))];

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse = window.matchMedia('(pointer: coarse)').matches;

  /* -------------------------------------------------------------
     场景映射：环境 → 一张 AI 场景图。
     30 条数据里环境写法很散，归到 5 张统一风格的场景上，
     这样滚动分镜和卡片配图用的是同一套视觉，不会每换一张卡就跳色。
     ------------------------------------------------------------- */
  const SCENES = {
    jungle: { name: '雨林', color: '#8fb573' },
    desert: { name: '荒漠', color: '#e08b52' },
    snow: { name: '极地', color: '#9cc4d4' },
    coast: { name: '海岸', color: '#6fb0ad' },
    forest: { name: '林地', color: '#b8a86a' }
  };
  function sceneOf(env) {
    const e = env || '';
    if (/极寒|极地|雪山|冰/.test(e)) return 'snow';
    if (/荒漠|沙漠|峡谷|干燥|高海拔|草原|萨瓦纳/.test(e)) return 'desert';
    if (/海|溪流|河流|湿地|沼泽|河|潮/.test(e)) return 'coast';
    if (/雨林|潮湿|热带|洞穴|阴湿/.test(e)) return 'jungle';
    if (/森林|针叶|林地|灌木|草地/.test(e)) return 'forest';
    return 'jungle';
  }

  /* -------------------------------------------------------------
     图鉴线条图标：按类别程序化生成。
     原站的卡片图是 picsum 随机照片，跟内容毫无关系。这里改成
     「场景照片做底 + 统一线条图鉴图标做主体」，30 张卡不会撞脸，
     也保持了野外图鉴的调性。
     ------------------------------------------------------------- */
  const GLYPHS = {
    beetle: '<ellipse cx="32" cy="34" rx="12" ry="17"/><path d="M32 17v34M20 25l-7-6M44 25l7-6M20 33l-8 1M44 33l8 1M21 42l-7 7M43 42l7 7M27 17l-4-7M37 17l4-7"/>',
    worm: '<path d="M14 46c0-8 8-8 8-16s8-8 8-16 8-8 8-8"/><path d="M17 44l-5 4M23 38l-6 2M27 30l-6 1M31 23l-6 1M34 16l-5-3"/><circle cx="40" cy="12" r="2"/>',
    snake: '<path d="M46 12c-14 0-24 6-24 15s12 10 12 19-8 10-20 10"/><path d="M46 12c6 0 9 4 9 8s-4 7-9 7"/><circle cx="49" cy="16" r="1.2" fill="currentColor" stroke="none"/><path d="M52 27l3 5M52 27l-3 5"/>',
    spider: '<ellipse cx="32" cy="32" rx="9" ry="11"/><circle cx="32" cy="19" r="4"/><path d="M24 26L12 18M23 31L9 29M23 36L10 43M25 41L15 52M40 26l12-8M41 31l14-2M41 36l13 7M39 41l10 11"/>',
    crab: '<ellipse cx="32" cy="36" rx="15" ry="10"/><path d="M19 31L11 20M17 24l-6-3M17 24l1-7M45 31l8-11M47 24l6-3M47 24l-1-7M22 44l-5 7M27 46l-2 8M37 46l2 8M42 44l5 7"/><circle cx="27" cy="32" r="1.4" fill="currentColor" stroke="none"/><circle cx="37" cy="32" r="1.4" fill="currentColor" stroke="none"/>',
    fish: '<path d="M12 32c9-12 25-14 34 0-9 14-25 12-34 0z"/><path d="M46 32l10-8v16l-10-8z"/><circle cx="21" cy="30" r="1.4" fill="currentColor" stroke="none"/><path d="M28 23c3 6 3 12 0 18M35 25c2 5 2 9 0 14"/>',
    plant: '<path d="M32 54V22M32 38c-10 0-16-6-17-16 11 0 17 5 17 16zM32 30c9 0 15-6 16-15-10 0-16 5-16 15z"/><path d="M22 54h20M32 22l-3-6M32 22l3-6"/>',
    bone: '<path d="M18 20a6 6 0 1 0-4 10l28 16a6 6 0 1 0 4-10L18 20z"/><path d="M14 16a5 5 0 1 1 8 4M46 44a5 5 0 1 1 8 4"/>',
    organ: '<circle cx="32" cy="32" r="18"/><circle cx="32" cy="32" r="9"/><path d="M32 14v9M32 41v9M14 32h9M41 32h9M20 20l6 6M38 38l6 6M44 20l-6 6M26 38l-6 6"/>',
    drop: '<path d="M32 8c8 12 15 20 15 29a15 15 0 0 1-30 0c0-9 7-17 15-29z"/><path d="M24 38c0 5 3 8 8 9"/><circle cx="38" cy="34" r="1.4" fill="currentColor" stroke="none"/>'
  };
  const GLYPH_OF = {
    '昆虫': 'beetle', '多足类': 'worm', '环节动物': 'worm',
    '爬行动物': 'snake', '两栖类': 'snake', '蛛形纲': 'spider',
    '甲壳类': 'crab', '海鲜': 'fish', '鱼类': 'fish', '软体动物': 'fish',
    '植物': 'plant', '肉类': 'bone', '哺乳动物': 'bone',
    '内脏': 'organ', '排泄物/液体': 'drop'
  };
  function glyph(cat, cls = '') {
    const key = GLYPH_OF[cat] || 'beetle';
    return `<svg class="${cls}" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${GLYPHS[key]}</svg>`;
  }
  function splitName(name) {
    const m = String(name).match(/^(.*?)\s*[（(]([^）)]+)[）)]\s*$/);
    return m ? { zh: m[1].trim(), en: m[2].trim() } : { zh: name, en: '' };
  }

  /* -------------------------------------------------------------
     状态与渲染
     ------------------------------------------------------------- */
  const state = { category: '全部', query: '', view: 'grid' };
  const cardsEl = $('#cards');
  const graphEl = $('#graph');
  const emptyEl = $('#empty');

  function filtered() {
    const q = state.query.trim().toLowerCase();
    return FOOD_DATA.filter((f) => {
      const hitCat = state.category === '全部' || f.category === state.category;
      const hitQuery = !q || [f.name, f.description, f.region, f.environment, f.category]
        .join(' ').toLowerCase().includes(q);
      return hitCat && hitQuery;
    });
  }

  function renderStats() {
    const stats = [
      [FOOD_DATA.length, '补给项'],
      [REGIONS, '涉及地域'],
      [TOTAL_KCAL.toLocaleString('en-US'), '总热量 kcal']
    ];
    $('#heroStats').innerHTML = stats.map(([v, l]) => `<div><dt>${v}</dt><dd>${l}</dd></div>`).join('');
    $('#footerStats').innerHTML = stats.map(([v, l]) => `<div><b>${v}</b>${l}</div>`).join('');
  }

  function renderChips() {
    $('#chips').innerHTML = CATEGORIES.map((c) =>
      `<button type="button" class="chip${c === state.category ? ' is-active' : ''}" data-cat="${esc(c)}">${esc(c)}</button>`
    ).join('');
  }

  function cardHTML(f, i) {
    const n = splitName(f.name);
    const scene = sceneOf(f.environment);
    const no = String(f.id).padStart(2, '0');
    return `
      <button type="button" class="card reveal" data-id="${esc(f.id)}" style="transition-delay:${Math.min(i, 8) * 45}ms" aria-label="查看 ${esc(n.zh)} 的详情">
        <div class="card__visual" style="background-image:var(--img-${scene === 'forest' ? 'jungle' : scene})">
          <span class="card__no">No. ${no}</span>
          <span class="card__risk risk--${esc(f.riskLevel)}">风险 ${esc(f.riskLevel)}</span>
          <span class="card__glyph" style="color:var(--bone)">${glyph(f.category)}</span>
        </div>
        <div class="card__body">
          <p class="card__cat">${esc(f.category)} / ${esc(f.region)}</p>
          <h3 class="card__name">${esc(n.zh)}</h3>
          <p class="card__en">${esc(n.en || f.environment)}</p>
          <p class="card__quote">${esc(f.bearQuote)}</p>
          <div class="card__foot"><span>${esc(f.environment)}</span><span class="card__kcal">${f.calories} kcal</span></div>
        </div>
      </button>`;
  }

  function renderCards() {
    const list = filtered();
    if (state.view === 'graph') {
      cardsEl.hidden = true;
      emptyEl.hidden = true;
      graphEl.hidden = false;
      renderGraph(list);
    } else {
      graphEl.hidden = true;
      cardsEl.hidden = false;
      cardsEl.innerHTML = list.map(cardHTML).join('');
      emptyEl.hidden = list.length !== 0;
      observeReveals(cardsEl);
    }
  }

  /* -------------------------------------------------------------
     关系图：确定性环形布局。
     没用 d3 / 力导向 —— 原站依赖 d3 CDN，断网就白屏，而且
     80 多个节点随机弹开之后根本看不出关系。这里按环境分组排扇区，
     同类节点聚在一起，连线一眼能追到。
     ------------------------------------------------------------- */
  function renderGraph(list) {
    const W = 900, H = 640, cx = W / 2, cy = H / 2 - 10;
    const groups = Object.keys(SCENES);
    const buckets = Object.fromEntries(groups.map((g) => [g, list.filter((f) => sceneOf(f.environment) === g)]));
    const items = [];
    const groupPos = {};
    const step = (Math.PI * 2) / groups.length;

    groups.forEach((g, gi) => {
      const center = -Math.PI / 2 + gi * step;
      const gx = cx + Math.cos(center) * 118;
      const gy = cy + Math.sin(center) * 118;
      groupPos[g] = { x: gx, y: gy };
      const arr = buckets[g];
      arr.forEach((f, i) => {
        const spread = step * 0.72;
        const a = center - spread / 2 + (arr.length === 1 ? spread / 2 : (i / (arr.length - 1)) * spread);
        const r = 246 + (i % 3) * 12;
        items.push({ f, g, x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r, gx, gy });
      });
    });

    const links = items.map((it, i) => {
      const mx = (it.x + it.gx) / 2 + (it.y - cy) * 0.06;
      const my = (it.y + it.gy) / 2 - (it.x - cx) * 0.06;
      return `<path class="link" data-i="${i}" d="M${it.x.toFixed(1)},${it.y.toFixed(1)} Q${mx.toFixed(1)},${my.toFixed(1)} ${it.gx.toFixed(1)},${it.gy.toFixed(1)}"/>`;
    }).join('');

    const nodes = items.map((it, i) => {
      const n = splitName(it.f.name);
      const color = SCENES[it.g].color;
      return `<g class="node" data-i="${i}" data-g="${it.g}">
        <circle cx="${it.x.toFixed(1)}" cy="${it.y.toFixed(1)}" r="6" fill="${color}" opacity=".9"/>
        <circle cx="${it.x.toFixed(1)}" cy="${it.y.toFixed(1)}" r="12" fill="transparent"/>
        <text x="${(it.x + 11).toFixed(1)}" y="${(it.y + 4).toFixed(1)}">No.${String(it.f.id).padStart(2, '0')}</text>
        <title>${esc(n.zh)} · ${esc(it.f.category)} · ${it.f.calories} kcal</title>
      </g>`;
    }).join('');

    const groupNodes = groups.map((g) => {
      const p = groupPos[g];
      const count = buckets[g].length;
      return `<g><circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="25" fill="#152019" stroke="${SCENES[g].color}" stroke-width="1.5"/>
        <text x="${p.x.toFixed(1)}" y="${(p.y - 2).toFixed(1)}" text-anchor="middle" style="font:700 12px var(--font-sans);fill:var(--bone)">${SCENES[g].name}</text>
        <text x="${p.x.toFixed(1)}" y="${(p.y + 14).toFixed(1)}" text-anchor="middle" style="font:600 10px var(--font-mono);fill:var(--muted)">${count}</text></g>`;
    }).join('');

    const legend = groups.map((g) => `<span><i style="background:${SCENES[g].color}"></i>${SCENES[g].name}</span>`).join('');

    graphEl.innerHTML = `
      <div class="graph__head"><h3>按生存环境归类的补给</h3><div class="graph__legend">${legend}</div></div>
      <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="30 份补给与 5 类生存环境的关系图">
        <g class="links">${links}</g>${groupNodes}<g class="nodes">${nodes}</g>
      </svg>
      <p class="graph__note">每个点是 1 份补给，连到它出现的环境。移到点上高亮，点开看详情；切回「图鉴」可以搜名字。共 ${list.length} 项。</p>`;

    $$('.node', graphEl).forEach((node) => {
      const i = node.dataset.i;
      const g = node.dataset.g;
      const it = items[Number(i)];
      node.addEventListener('mouseenter', () => {
        graphEl.classList.add('is-dim');
        $$('.link', graphEl).forEach((l) => l.classList.toggle('is-hot', l.dataset.i === i));
        $$('.node', graphEl).forEach((n) => n.classList.toggle('is-hot', n.dataset.g === g));
      });
      node.addEventListener('mouseleave', () => {
        graphEl.classList.remove('is-dim');
        $$('.link,.node', graphEl).forEach((el) => el.classList.remove('is-hot'));
      });
      node.addEventListener('click', () => openModal(it.f));
      node.style.cursor = 'pointer';
    });
  }

  /* -------------------------------------------------------------
     弹窗
     ------------------------------------------------------------- */
  const modal = $('#modal');
  const modalBody = $('#modalBody');
  let lastFocus = null;

  function modalHTML(f) {
    const n = splitName(f.name);
    const scene = sceneOf(f.environment);
    const bg = scene === 'forest' ? 'jungle' : scene;
    return `
      <div class="modal__hero" style="background-image:var(--img-${bg})">
        <div class="modal__glyph" style="color:var(--bone)">${glyph(f.category)}</div>
      </div>
      <div class="modal__content">
        <p class="modal__cat">No. ${String(f.id).padStart(2, '0')} · ${esc(f.category)}</p>
        <h2 id="modalTitle">${esc(n.zh)}</h2>
        <p class="modal__en">${esc(n.en || f.environment)}</p>
        <div class="modal__facts">
          <span><b>${f.calories}</b> kcal</span>
          <span>风险 <b>${esc(f.riskLevel)}</b></span>
          <span>${esc(f.region)}</span>
          <span>${esc(f.environment)}</span>
          <span>${esc(f.eatingMethod)}</span>
        </div>
        <div class="modal__grid">
          <div class="modal__block"><h3>生存背景</h3><p>${esc(f.description)}</p></div>
          <div class="modal__block modal__warn">
            <h3>食用风险</h3><p>${esc(f.riskDescription)}</p>
            <ul>${(f.precautions || []).map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
          </div>
          <div class="modal__quote"><h3>贝爷原话</h3><p>${esc(f.bearQuote)}</p></div>
          <div class="modal__react"><h3>观众弹幕</h3><p>${esc(f.audienceReaction)}</p></div>
        </div>
      </div>`;
  }

  function openModal(f) {
    lastFocus = document.activeElement;
    modalBody.innerHTML = modalHTML(f);
    modal.hidden = false;
    document.body.classList.add('is-locked');
    $('.modal__close', modal).focus();
    $('.modal__panel', modal).scrollTop = 0;
  }
  function closeModal() {
    modal.hidden = true;
    document.body.classList.remove('is-locked');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  /* -------------------------------------------------------------
     滚动进场
     ------------------------------------------------------------- */
  let revealObserver;
  function observeReveals(root = document) {
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            revealObserver.unobserve(e.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    }
    $$('.reveal:not(.is-in)', root).forEach((el) => revealObserver.observe(el));
  }

  /* -------------------------------------------------------------
     滚动引擎：一个 rAF 循环统一驱动视差、分镜、罗盘。
     滚动和指针只写目标值，每帧按 dt 追值 —— 这样快速滚动时不会抖，
     也只需要一次布局写入。
     ------------------------------------------------------------- */
  const nav = $('#nav');
  const progressBar = $('#progressBar');
  const heroStage = $('#heroStage');
  const heroCopy = $('#heroCopy');
  const heroPlate = $('#heroPlate');
  const layers = $$('.layer[data-depth]', heroStage);
  const chapters = $$('.chapter');
  const scenes = $$('.ch-scene');
  const needle = $('#needle');
  const compass = $('#compass');
  const specimen = $('#specimen');
  const kitStage = $('#kitStage');

  let targetScroll = window.scrollY, smoothScroll = window.scrollY;
  let targetPX = 0, targetPY = 0, curPX = 0, curPY = 0;
  let lastT = 0;
  let activeScene = 0;

  if (needle) needle.style.transition = 'none';

  window.addEventListener('scroll', () => { targetScroll = window.scrollY; }, { passive: true });
  window.addEventListener('pointermove', (e) => {
    if (coarse) return;
    targetPX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetPY = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  function setActiveScene(i) {
    if (i === activeScene) return;
    activeScene = i;
    scenes.forEach((s, n) => s.classList.toggle('is-active', n === i));
  }

  function frame(t) {
    const dt = lastT ? Math.min(t - lastT, 64) : 16;
    lastT = t;
    const k = 1 - Math.pow(0.5, dt / 90);
    smoothScroll += (targetScroll - smoothScroll) * k;
    curPX += (targetPX - curPX) * (1 - Math.pow(0.5, dt / 220));
    curPY += (targetPY - curPY) * (1 - Math.pow(0.5, dt / 220));

    const docH = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docH > 0 ? clamp(targetScroll / docH, 0, 1) * 100 : 0) + '%';
    nav.classList.toggle('is-compact', targetScroll > 40);

    if (!reduced) {
      const vh = window.innerHeight;
      // Hero 六层：越靠前的层位移越大，形成纵深
      if (smoothScroll < vh * 1.4) {
        layers.forEach((layer) => {
          const d = Number(layer.dataset.depth);
          const base = layer.classList.contains('layer--far') ? 1.22 : 1.06;
          const tx = curPX * d * -34;
          const ty = smoothScroll * d * 0.34 + curPY * d * -16;
          layer.style.transform = `translate3d(${tx.toFixed(2)}px,${ty.toFixed(2)}px,0) scale(${base})`;
        });
        const p = clamp(smoothScroll / (vh * 0.8), 0, 1);
        heroCopy.style.transform = `translate3d(${(curPX * -8).toFixed(2)}px,${(smoothScroll * 0.22).toFixed(2)}px,0)`;
        heroCopy.style.opacity = String(1 - p * 0.95);
        if (heroPlate) {
          heroPlate.style.transform = `translate3d(${(curPX * 14).toFixed(2)}px,${(smoothScroll * 0.12).toFixed(2)}px,0) rotate(${(3 + curPX * 3).toFixed(2)}deg)`;
        }
      }

      // 分镜：哪个章节压在视口中线就切到哪张场景，并按滚动进度推近镜头
      let best = 0, bestDist = Infinity;
      chapters.forEach((ch, i) => {
        const r = ch.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - vh / 2);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setActiveScene(best);
      const active = scenes[activeScene];
      if (active) {
        const r = chapters[activeScene].getBoundingClientRect();
        const p = clamp((vh - r.top) / (vh + r.height), 0, 1);
        active.style.transform = `scale(${(1.14 - p * 0.1).toFixed(3)}) translate3d(${(curPX * -10).toFixed(2)}px,${(p * -18).toFixed(2)}px,0)`;
      }
    }

    // 罗盘指针跟着整页进度转，滚动就是「往前走」的方向
    if (needle) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const deg = (docH > 0 ? targetScroll / docH : 0) * 720 + curPX * 14;
      needle.style.transform = `translate(-50%,-50%) rotate(${deg.toFixed(2)}deg)`;
    }
    requestAnimationFrame(frame);
  }

  /* 3D 倾斜：只在细指针 + 允许动效时启用，避免手机上抢滚动 */
  if (!coarse && !reduced && kitStage) {
    kitStage.addEventListener('pointermove', (e) => {
      const r = kitStage.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      compass.style.transform = `rotateX(${(-py * 20).toFixed(2)}deg) rotateY(${(px * 24).toFixed(2)}deg)`;
      specimen.style.transform = `rotate(6deg) rotateX(${(-py * 12).toFixed(2)}deg) rotateY(${(px * 16).toFixed(2)}deg) translateZ(30px)`;
    });
    kitStage.addEventListener('pointerleave', () => {
      compass.style.transform = '';
      specimen.style.transform = '';
    });
  }

  /* 卡片轻微 3D 倾斜：进场动画结束后才接管 transform，避免和 reveal 打架 */
  if (!coarse && !reduced) {
    cardsEl.addEventListener('pointermove', (e) => {
      const card = e.target.closest('.card');
      if (!card || !card.classList.contains('is-in')) return;
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${(-py * 7).toFixed(2)}deg) rotateY(${(px * 8).toFixed(2)}deg) translateY(-6px)`;
    });
    cardsEl.addEventListener('pointerout', (e) => {
      const card = e.target.closest('.card');
      if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
    });
  }

  /* -------------------------------------------------------------
     事件绑定
     ------------------------------------------------------------- */
  $('#chips').addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    state.category = btn.dataset.cat;
    renderChips();
    renderCards();
  });

  $('#search').addEventListener('input', (e) => {
    state.query = e.target.value;
    renderCards();
  });

  $('#viewSwitch').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-view]');
    if (!btn) return;
    state.view = btn.dataset.view;
    $$('#viewSwitch button').forEach((b) => b.classList.toggle('is-active', b === btn));
    renderCards();
  });

  $('#navSearch').addEventListener('click', () => {
    $('#archive').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    // 平滑滚动期间直接 focus 会把页面拽回去，等落下再聚焦，且不触发二次滚动
    window.setTimeout(() => $('#search').focus({ preventScroll: true }), reduced ? 0 : 550);
  });

  $('#resetBtn').addEventListener('click', () => {
    state.category = '全部';
    state.query = '';
    $('#search').value = '';
    renderChips();
    renderCards();
  });

  cardsEl.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const f = FOOD_DATA.find((x) => x.id === card.dataset.id);
    if (f) openModal(f);
  });

  $('#randomBtn').addEventListener('click', () => {
    openModal(FOOD_DATA[Math.floor(Math.random() * FOOD_DATA.length)]);
  });

  modal.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeModal();
  });

  /* 启动 */
  renderStats();
  renderChips();
  renderCards();
  observeReveals();
  requestAnimationFrame(frame);
})();
