module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "ALVI",
  description: "", 
  prefix: false,
  category: "user",
 premium: false,
  usages: "",
  cooldowns: 5, 
  dependencies: {
  }
};


module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n🐰🍒শী্ঁত্ঁ শী্ঁত্ঁ ভা্ঁব্ঁ কি্ঁসে্ঁর্ঁ জা্ঁনি্ঁ এ্ঁক্ঁটা্ঁ অ্ঁভা্ঁব্ঁ_🙊🙈\n\n✢━━━━━━━━━━━━━━━✢\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🌻-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🌻 ",
" === 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」 ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n--ღღ🦋🖤✨-\n\n--𝐋𝐨𝐯𝐞 𝐢'𝐬 𝐁𝐞𝐚𝐮𝐭𝐢𝐟𝐮𝐥 __☺️🦋✨\n\n--𝐥𝐟 𝐭𝐡𝐞 𝐥𝐨𝐯𝐞𝐝 𝐨𝐧𝐞 𝐢𝐬 𝐫𝐢𝐠𝐡𝐭..!🦋🍁💫\n\n-ভালোবাসা সুন্দর ___,🖤🦋\n\n- যদি প্রিয় মানুষটি সঠিক হয়....!☺️🖤🙂✨🌼\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🌹-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🌹 ",
"___=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n❥◎⃝! শূন্যতায় ভাসি🙃 \n\n❥কখনো হাসি -😁💚_আবার কাঁদি!-😅\n\n❥বেলা শেষে 🌌শূন্যতায় জড়িয়ে ও পূর্ণতা খুঁজি😊❤\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : ♦-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-♦ ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n ❥»̶̶͓͓͓̽̽̽⑅⃝✺❥᭄❥\n\n___💚__পৃথিবীটা আজ...\n\nমিথ্যে মায়াতে ভরা...!💚🌺\n\n____🥀_তাই তো পৃথীবীর মানুষ আজ....!\n\nঅভিনয়ের সেরা...👎🥀\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 😍-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-😍 ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n💜🔐🌈 ___\n\n- 𝗧𝗵𝗶𝘀 𝗮𝗯𝗼𝘂𝘁 𝗹𝗶𝗻𝗲-!! 😽🧡✨\n\n🍁_সবাই তো খুশি চায়_আর আমি প্রতিটা খুশিতে তোমাকে চাই⚜️— -!!-) 😊🖤\n\n___💜🔐🌈\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🌸-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🌸 ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\n\n___চোখের দেখায় নয়,মনের দেখায় ভালবাসি!!😇✨\n\n- কাছে থাকো কিংবা দূরে,তোমাকে ভেবেই হাসি!!🖤🐰\n\n💖🦋\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 💮-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-💮 ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:༅༎💙🦋\n༆𝐓𝐡𝐢𝐬 𝐚𝐛𝐨𝐮𝐭 𝐥𝐢𝐧𝐞_⚠︎🙅🏻‍♂️✨\n\n😽︵۵মানুষ! হচ্ছে!বৃষ্টির!মতো!Life a ! অনেক মানুষ !আসবে!অনেক মানুষ !যাবে!💔🥰\n\n:༅༎💙🦋 সঠিক!মানুষটা!ঠিকই!ছায়া!হয়ে!পাশে!থাকবে -/ ఌ︵💚🌻\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🌿-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🌿",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n:(-𝙄 𝙖𝙢 𝘼𝙙𝙙𝙞𝙘𝙩𝙚𝙙 𝙏𝙤👀🙈\n\n_')𝙈𝙮 𝙁𝙖𝙫𝙤𝙧𝙞𝙩𝙚 𝙋𝙚𝙧𝙨𝙤𝙣..!\n\n🐰🦋 -(^আমি আমার প্রিয় মানুষটার প্রতি আসক্ত >!💖🔐🍭)😇\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🍁-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🍁 ",

"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n𝙗𝙚𝙡𝙞𝙚𝙫𝙚 𝙩𝙝𝙞𝙨 𝙡𝙞𝙣𝙚-!!🦋🐭\n\n🐰' —'পারফেক্ট' কাউকে পাবার থেকে'কাউকে' পারফেক্ট' বানিয়ে নিতে পারাটা' বড় অর্জন'--)🌼💜\n\n___🍒🖇️✨___\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🏵-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🏵 ",
"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🅄🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n°🐹💙🍒\n\n_𝗧𝗿𝘂𝘀𝘁 𝗺e 🔐💚\n°\n\n__!!☁️✨🌺আপনাকে পাওয়ার দাবি!আমি মৃত্যুর পরও ছাড়বো না,,🔐💚 🙂\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🌺-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🌺 ",

"=== 「𝗣𝗿𝗲𝗳𝗶𝘅 𝐄𝐯𝐞𝐧𝐭」  ===\n  --❖--🅃🄰🄽🅅🄸🅁-🄱🄾🅃(✷‿✷) --❖--\n✢━━━━━━━━━━━━━━━✢\n\n__𝗥𝗶𝗴𝗵𝘁 𝗽𝗲𝗼𝗽𝗹𝗲 𝗮𝗿𝗲 𝗮𝗹𝘄𝗮𝘆𝗲𝘀 𝗮𝗻𝗴𝗿𝘆 𝗯𝗲𝗰𝗮𝘂𝘀𝗲 𝘁𝗵𝗲𝘆 𝗰𝗮𝗻'𝘁 𝘀𝘁𝗮𝗻𝗱 𝘆𝗼𝘂 𝘄𝗶𝘁𝗵 𝗼𝘁𝗵𝗲𝗿𝘀🌸✨\n\n___সঠিক মানুষ সব সময়ই রাগি হয়'\n\nকারণ তারা অন্যের সাথে তোমাকে সহ্য করতে পারবে নাহ্!😌🫶🖤\n\n✢━━━━━━━━━━━━━━━✢\n\n𝐂𝐫𝐞𝐚𝐭𝐨𝐫 : 🥀-𝗕Ø𝗦𝗦•𝗧𝗔𝗡𝗩𝗜𝗥-🥀 "
 ];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/UtKEhr0.mp4",
  "https://i.imgur.com/iIaWTaC.mp4",
  "https://i.imgur.com/l1qlgvS.mp4",
  "https://i.imgur.com/7f3zzP1.mp4",
  "https://i.imgur.com/cAnQykl.mp4",
  "https://i.imgur.com/93yveNx.mp4",
  "https://i.imgur.com/S1hPcWP.mp4",
  "https://i.imgur.com/GcyMXs6.mp4",
  "https://i.imgur.com/4GSI2i8.mp4",
  "https://i.imgur.com/7jMAqqR.mp4",
  "https://i.imgur.com/3DjfALk.mp4",
  "https://i.imgur.com/99UQY5i.mp4",
  "https://i.imgur.com/w2hX8p9.mp4",
  "https://i.imgur.com/u6w2wCw.mp4",
  "https://i.imgur.com/qbHb4TV.mp4",
  "https://i.imgur.com/oVOPILK.mp4",
  "https://i.imgur.com/XYIixNU.mp4",
  "https://i.imgur.com/V3TqiXF.mp4",
  "https://i.imgur.com/3hx98bS.mp4",
  "https://i.imgur.com/hdx7x0j.mp4",
  "https://i.imgur.com/ofB5UPz.mp4",
  "https://i.imgur.com/pljQEPg.mp4",
  "https://i.imgur.com/SE3DgRT.mp4",
  "https://i.imgur.com/a9yHovY.mp4",
  "https://i.imgur.com/0ldaQFb.mp4",
  "https://i.imgur.com/cfcMXOi.mp4",
  "https://i.imgur.com/OwzP64Y.mp4",
  "https://i.imgur.com/65dBzTD.mp4",
  "https://i.imgur.com/Q5z7xZt.mp4",
  "https://i.imgur.com/rBvRkAq.mp4",
  "https://i.imgur.com/dE2aFPX.mp4",
  "https://i.imgur.com/B5myZLc.mp4",
  "https://i.imgur.com/d7al0kz.mp4",
  "https://i.imgur.com/wGO7lxC.mp4",
  "https://i.imgur.com/XYsmu14.mp4",
  "https://i.imgur.com/RVsTiRm.mp4",
  "https://i.imgur.com/0ukh2CK.mp4",
  "https://i.imgur.com/sEtUDg2.mp4",
  "https://i.imgur.com/e9B6Xqx.mp4",
  "https://i.imgur.com/W5dKfLc.mp4",
  "https://i.imgur.com/vSMFyaD.mp4",
  "https://i.imgur.com/ZJsfgkG.mp4",
  "https://i.imgur.com/P1QJVHY.mp4",
  "https://i.imgur.com/x7LYsp7.mp4",
  "https://i.imgur.com/KRdDVBp.mp4",
  "https://i.imgur.com/HBaXulv.mp4",
  "https://i.imgur.com/iA0wpCd.mp4",
  "https://i.imgur.com/gfgxieW.mp4",
"https://i.imgur.com/43aO3Nn.mp4",
"https://i.imgur.com/1ZTM6DT.mp4",
"https://i.imgur.com/yTmA5HF.mp4",
"https://i.imgur.com/6P9GLyH.mp4",
"https://i.imgur.com/qUQMqBO.mp4",
"https://i.imgur.com/6B5GyxD.mp4",
"https://i.imgur.com/r99fNFk.mp4",
"https://i.imgur.com/ddFVO87.mp4",
"https://i.imgur.com/u8L9HGF.mp4",
"https://i.imgur.com/zcibYK7.mp4",
"https://i.imgur.com/Ikadz0Z.mp4",
"https://i.imgur.com/RXanGhO.mp4",
"https://i.imgur.com/LtBd5zy.mp4",
"https://i.imgur.com/CvFKWhc.mp4",
"https://i.imgur.com/pOn0wcX.mp4",
"https://i.imgur.com/4x07AvR.mp4",
"https://i.imgur.com/Rf8wj3R.mp4",
"https://i.imgur.com/7THpS7L.mp4",
"https://i.imgur.com/Y323uee.mp4",
"https://i.imgur.com/yeFqV9d.mp4",
"https://i.imgur.com/mJoVzEg.mp4",
"https://i.imgur.com/WlPTRzv.mp4",
"https://i.imgur.com/XVbr337.mp4",
"https://i.imgur.com/QygK30k.mp4",
"https://i.imgur.com/V6EOaiO.mp4",
"https://i.imgur.com/mCFNiXt.mp4",
"https://i.imgur.com/S8I7fH4.mp4",
"https://i.imgur.com/0Yu5y5l.mp4",
"https://i.imgur.com/O9GP9iZ.mp4",
"https://i.imgur.com/KGA0RBA.mp4",
"https://i.imgur.com/mdHHxzX.mp4",
"https://i.imgur.com/DMU6eTu.mp4",
"https://i.imgur.com/boWuxIu.mp4",
"https://i.imgur.com/aHua4Dh.mp4",
"https://i.imgur.com/oQ03oPf.mp4",
"https://i.imgur.com/WSCcoQT.mp4",
"https://i.imgur.com/r7E2Xmv.mp4",
"https://i.imgur.com/o495Tr6.mp4",
"https://i.imgur.com/I4SnGpF.mp4",
"https://i.imgur.com/tGn5AXl.mp4",
"https://i.imgur.com/3FgCnEm.mp4",
"https://i.imgur.com/taEqWUk.mp4",
"https://i.imgur.com/altj0gz.mp4",
"https://i.imgur.com/8pKd0x2.mp4",
"https://i.imgur.com/qoeSExU.mp4",
"https://i.imgur.com/x7LYsp7.mp4",
"https://i.imgur.com/KRdDVBp.mp4",
"https://i.imgur.com/STNajBB.mp4",
"https://i.imgur.com/HBaXulv.mp4",
"https://i.imgur.com/iA0wpCd.mp4",
"https://i.imgur.com/J7qPrpr.mp4",
"https://i.imgur.com/b5TbJc8.mp4",
"https://i.imgur.com/Ok2BR3t.mp4",
"https://i.imgur.com/rpSDliz.mp4",
"https://i.imgur.com/ey8NJy2.mp4",
"https://i.imgur.com/qEXaIVT.mp4",
"https://i.imgur.com/i2Jj4KS.mp4",
"https://i.imgur.com/u5EvR8G.mp4",
"https://i.imgur.com/YC64kD4.mp4",
"https://i.imgur.com/1XY7gEm.mp4",
"https://i.imgur.com/Tv1DMT4.mp4",
"https://i.imgur.com/rfS4ihW.mp4",
"https://i.imgur.com/fYl4DRh.mp4",
"https://i.imgur.com/WxDW5wX.mp4",
"https://i.imgur.com/zXjPa6A.mp4",
"https://i.imgur.com/KtbfcKD.mp4",
"https://i.imgur.com/lkuN5U0.mp4",
"https://i.imgur.com/Wv85YgQ.mp4",
"https://i.imgur.com/GVE1Nbm.mp4",
"https://i.imgur.com/TobpCyu.mp4",
"https://i.imgur.com/97vEPqO.mp4",
"https://i.imgur.com/EmD9iPX.mp4",
"https://i.imgur.com/FpKdJk9.mp4",
"https://i.imgur.com/u47ToWR.mp4",
"https://i.imgur.com/6xIVvJd.mp4",
"https://i.imgur.com/xqms4ja.mp4",
"https://i.imgur.com/EqUlV7n.mp4",
"https://i.imgur.com/6WA09Vh.mp4",
"https://i.imgur.com/BBDW3Rq.mp4",
"https://i.imgur.com/P2VN5vA.mp4",
"https://i.imgur.com/J25ZSn2.mp4",
"https://i.imgur.com/KELcIRX.mp4",
"https://i.imgur.com/J25ZSn2.mp4",
"https://i.imgur.com/KELcIRX.mp4",
"https://i.imgur.com/BfksKgK.mp4",
"https://i.imgur.com/YLdLfm2.mp4",
"https://i.imgur.com/nWCXEKq.mp4",
"https://i.imgur.com/84OA0Bj.mp4", 
"https://i.imgur.com/3wYEwbI.mp4",
"https://i.imgur.com/ZUxKmxe.mp4",
"https://i.imgur.com/P1nAqzZ.mp4",
"https://i.imgur.com/GrtTCT2.mp4",
"https://i.imgur.com/pG2A3oc.mp4",
"https://i.imgur.com/ASDe8rb.mp4",
"https://i.imgur.com/0czk2iY.mp4",
"https://i.imgur.com/lgbo3Vl.mp4",
"https://i.imgur.com/KhXcUy3.mp4",
"https://i.imgur.com/W071YUz.mp4",
"https://i.imgur.com/sNujqcx.mp4",
"https://i.imgur.com/zmbIS1H.mp4",
"https://i.imgur.com/vhMJqsx.mp4",
"https://i.imgur.com/BufXEgS.mp4",
"https://i.imgur.com/ClBRcZv.mp4",
"https://i.imgur.com/EEKg4kP.mp4"

]
   var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
