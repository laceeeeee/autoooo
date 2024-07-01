//Mon Jul 01 2024 01:16:12 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
console.log("配置代理池: OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL");
console.log("配置api代理: OPENCARD_API_PROXY_URL");
global_agent_http_proxy_isopen = false;
if (!process.env.OPENCARD_API_PROXY_URL) {
  if (process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL) {
    global_agent_http_proxy_isopen = true;
    require("global-agent/bootstrap");
    global.GLOBAL_AGENT.HTTP_PROXY = process.env.OPENCARD_GLOBAL_AGENT_HTTP_PROXY_URL || "";
  }
}
api_proxy_open = false;
if (process.env.OPENCARD_API_PROXY_URL) {
  api_proxy_open = true;
  your_proxy_url = process.env.OPENCARD_API_PROXY_URL;
}
console.log("配置代理池: " + (global_agent_http_proxy_isopen == true ? "已配置" : "未配置") + " ");
console.log("配置api代理: " + (api_proxy_open == true ? "已配置" : "未配置"));
if (api_proxy_open == true) {
  HttpsProxyAgent = require("https-proxy-agent");
}
const proenv_0x5a52d6 = $.isNode() ? require("./jdCookie.js") : "";
const proenv_0x456d0c = require("axios");
const proenv_0x4f0f6a = require("crypto-js");
let proenv_0x21e8cc = [],
  proenv_0x214107 = "";
let proenv_0x318332 = "";
let proenv_0x1e57eb = [];
let proenv_0x5c0962 = "";
let proenv_0x46edf8 = "jdapp;android;11.1.4;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM00 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
let proenv_0x987791 = "http://hz.feverrun.top:99/share/card/getToken";
addcart = 1;
collectshop = 1;
viewshop = 1;
if (parseInt(process.env.DPLHTY_ADDCART) == 0) {
  addcart = 0;
} else {
  addcart = parseInt(process.env.DPLHTY_ADDCART) || 1;
}
if (parseInt(process.env.DPLHTY_COLLECTSHOP) == 0) {
  collectshop = 0;
} else {
  collectshop = parseInt(process.env.DPLHTY_COLLECTSHOP) || 1;
}
if (parseInt(process.env.DPLHTY_VIEWSHOP) == 0) {
  viewshop = 0;
} else {
  viewshop = parseInt(process.env.DPLHTY_VIEWSHOP) || 1;
}
if (process.env.DPLHTY_CODE) {
  console.log("检测到 DPLHTY_CODE 将会全部助力给这个码 " + process.env.DPLHTY_CODE);
  proenv_0x5c0962 = process.env.DPLHTY_CODE || "";
} else {
  console.log("未检测到 DPLHTY_CODE 将会全部助力给内部第一个号");
}
console.log("是否做一键关注: " + (addcart ? "是" : "否"));
console.log("是否做一键加购: " + (collectshop ? "是" : "否"));
console.log("是否做浏览任务: " + (viewshop ? "是" : "否"));
proenv_0x318332 = "6580d19d07e8473d935d404bc_240701";
$.shopList = [];
if ($.isNode()) {
  Object.keys(proenv_0x5a52d6).forEach(_0x1ef17d => {
    proenv_0x21e8cc.push(proenv_0x5a52d6[_0x1ef17d]);
  });
  proenv_0x1e57eb = proenv_0x318332.split("&");
  if (process.env.DPLHTY_EXCHANGE_ID) {
    exchange_id = process.env.DPLHTY_EXCHANGE_ID;
  } else {
    exchange_id = "";
  }
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  proenv_0x21e8cc = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ...proenv_0x183d91($.getdata("CookiesJD") || "[]").map(_0x662a0b => {
    return _0x662a0b.cookie;
  })].filter(_0x2a6980 => {
    return !!_0x2a6980;
  });
}
allMessage = "";
message = "";
$.hotFlag = false;
$.outFlag = false;
$.activityEnd = false;
$.authorinviteNick = "";
$.usedChance = 0;
let proenv_0x1af0b3 = "";
let proenv_0xab64b = false;
let proenv_0x4c626c = false;
!(async () => {
  if (process.env.PRO_REDIS_URL) {
    try {
      $.redis = require("redis");
      pro_redis_url = process.env.PRO_REDIS_URL;
      const _0x4e3915 = {
        url: pro_redis_url
      };
      $.client = $.redis.createClient(_0x4e3915);
      if ($.client) {
        console.log("本地Redis已检测到配置链接");
        await $.client.connect();
      }
    } catch (_0x2ada5d) {
      console.log(_0x2ada5d);
      console.log("本地Redis连接失败, 退出执行！！！");
      process.exit(1);
    }
  }
  if (!proenv_0x21e8cc[0]) {
    console.log("未检测到cookie");
    process.exit(1);
    return;
  }
  $.oneNick = "";
  if (proenv_0x5c0962) {
    $.inviteNick = "" + proenv_0x5c0962;
    console.log("当前将全部助力给: " + $.inviteNick);
  } else {
    try {
      await $.wait(parseInt(Math.random() * 550 + 350, 10));
      let _0x3947c7 = await proenv_0x10501c("dplh");
      codeArr = _0x3947c7.split("&");
      $.inviteNick = codeArr[parseInt(Math.random() * codeArr.length)];
      $.authorinviteNick = $.inviteNick;
    } catch (_0xb3742e) {
      $.inviteNick = "";
    }
  }
  $.appkey = "73835122";
  $.userId = "10299171";
  $.MixNicks = "";
  console.log();
  console.log("问题反馈: https://t.me/proenvc");
  console.log();
  if (!(proenv_0x1e57eb.length >= 1)) {
    console.log("未填写大牌的活动id,退出执行！！！");
    process.exit(1);
  }
  for (let _0x163b45 of proenv_0x1e57eb) {
    $.actId = _0x163b45;
    console.log("当前活动id: " + $.actId);
    for (let _0x35eeb2 = 0; _0x35eeb2 < proenv_0x21e8cc.length; _0x35eeb2++) {
      proenv_0x214107 = proenv_0x21e8cc[_0x35eeb2];
      if (proenv_0x214107) {
        $.UserName = decodeURIComponent(proenv_0x214107.match(/pt_pin=([^; ]+)(?=;?)/) && proenv_0x214107.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = _0x35eeb2 + 1;
        message = "";
        $.bean = 0;
        $.hotFlag = false;
        $.outFlag = false;
        $.nickName = "";
        console.log("******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********");
        await proenv_0x5a1393();
        await proenv_0x388d88();
        if (_0x35eeb2 == 0 && !$.MixNick) {
          $.inviteNick = $.inviteNick;
        }
        if ($.outFlag || $.activityEnd) {
          break;
        }
        if (api_proxy_open == true) {
          await $.wait(parseInt(Math.random() * 250 + 250), 10);
        } else {
          await $.wait(parseInt(Math.random() * 2500 + 2000), 10);
        }
      }
    }
  }
  process.exit(1);
})().catch(_0x330cfe => $.logErr(_0x330cfe)).finally(() => $.done());
async function proenv_0x388d88() {
  try {
    $.ERR_BAD_REQUEST = 0;
    $.ECONNRESET = 0;
    $.hasEnd = false;
    $.endTime = 0;
    $.startTime = 0;
    proenv_0x1af0b3 = "";
    $.Token = "";
    $.Pin = "";
    $.MixNick = "";
    proenv_0x4c626c = false;
    proenv_0xab64b = false;
    $.hasCollectShop = 0;
    $.hasAddCart = 0;
    $.activityEnd = false;
    $.continueFlag = false;
    $.awardSettings = [];
    $.remainPoint = 0;
    $.totalPoint = 0;
    $.viewShopFlag = false;
    $.openList = [];
    if (api_proxy_open == true) {
      await proenv_0xc34f80();
      if ($.getIpStatus == false) {
        await proenv_0xc34f80();
        console.log("代理获取失败，跳过此次执行！");
        return;
      }
    }
    $.isvObfuscator = "";
    await proenv_0x3a2fa5();
    if ($.Token == "") {
      console.log("获取[token]失败！");
      return;
    }
    await proenv_0x234fea("activity_load");
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    if ($.startTime && Date.now() < $.startTime) {
      console.log("活动未开始");
      $.activityEnd = true;
      return;
    }
    if ($.endTime && Date.now() > $.endTime) {
      $.MixNick = "";
      $.activityEnd = true;
      console.log("活动结束");
      return;
    }
    if ($.index == 1) {
      console.log("开始时间：" + proenv_0x4634c2($.startTime));
      console.log("结束时间: " + proenv_0x4634c2($.endTime));
    }
    if ($.MixNick == "") {
      console.log("获取cookie失败");
      return;
    }
    $.toBind = 0;
    await proenv_0x234fea("绑定");
    await $.wait(parseInt(Math.random() * 500 + 500, 10));
    await proenv_0x234fea("shopList");
    $.shopLists = [];
    if ($.activityEnd == true) {
      console.log("活动未开始!");
      return;
    }
    if ($.activityEnd) {
      return;
    }
    console.log("全部卡:" + $.userIdList);
    console.log("需要开:" + $.userIdNeedList);
    if ($.userIdNeedList) {
      console.log("开卡" + $.userIdNeedList.length + "张");
      let _0x35a0dc = 0;
      for (o of $.userIdNeedList) {
        proenv_0x4c626c = true;
        $.missionType = "openCard";
        $.openCard = false;
        $.joinVenderId = o;
        await proenv_0x234fea("mission");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await proenv_0x234fea("getShopOpenCardInfo");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await proenv_0x234fea("bindWithVender");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        if ($.errorJoinShop.indexOf("开卡失败，请稍后重试~") > -1 || $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 || $.errorJoinShop.indexOf("加入店铺会员失败") > -1) {
          console.log("第1次重试");
          await proenv_0x234fea("getShopOpenCardInfo");
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          await proenv_0x234fea("bindWithVender");
          await $.wait(parseInt(Math.random() * 500 + 500, 10));
          if ($.errorJoinShop.indexOf("开卡失败，请稍后重试~") > -1 || $.errorJoinShop.indexOf("活动太火爆，请稍后再试") > -1 || $.errorJoinShop.indexOf("加入店铺会员失败") > -1) {
            console.log("账号分太低或者是ip有问题, 跳过此账号");
            $.continueFlag = true;
            break;
          }
        }
        _0x35a0dc += 1;
        if (_0x35a0dc % 9 == 0 && api_proxy_open == true) {
          await proenv_0xc34f80();
          await $.wait(parseInt(Math.random() * 250 + 250, 10));
        }
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
        await proenv_0x234fea("activity_load");
        await proenv_0x234fea("mission");
        await $.wait(parseInt(Math.random() * 500 + 500, 10));
      }
    }
    $.joinVenderId = "";
    if (collectshop == 1) {
      if ($.hasCollectShop == 0) {
        proenv_0xab64b = true;
        $.missionType = "uniteCollectShop";
        await proenv_0x234fea("mission");
        await $.wait(parseInt(Math.random() * 1000 + 500, 10));
      } else {
        console.log("已经关注");
        if (proenv_0x4c626c == true) {
          proenv_0xab64b = true;
          $.missionType = "uniteCollectShop";
          await proenv_0x234fea("mission");
          await $.wait(parseInt(Math.random() * 1000 + 500, 10));
        }
      }
    } else {
      console.log("如需做关注任务，设置如下");
      console.log("export DPLHTY_COLLECTSHOP=\"1\" ");
    }
    if (addcart == 1) {
      if ($.hasAddCart == 0) {
        proenv_0xab64b = true;
        $.missionType = "uniteAddCart";
        await proenv_0x234fea("mission");
        await $.wait(parseInt(Math.random() * 1000 + 500, 10));
      } else {
        console.log("已经加购");
        if (proenv_0x4c626c == true) {
          proenv_0xab64b = true;
          $.missionType = "uniteAddCart";
          await proenv_0x234fea("mission");
          await $.wait(parseInt(Math.random() * 1000 + 500, 10));
        }
      }
    } else {
      console.log("如需做加购任务，设置如下");
      console.log("export DPLHTY_ADDCART=\"1\" ");
    }
    if (viewshop == 1) {
      $.goodsNumId = "";
      if ($.shopList.length >= 1) {
        for (let _0xe5a886 of $.shopList) {
          $.goodsNumId = proenv_0x28a57d("venderId", _0xe5a886.openCardUrl) || _0xe5a886.userId;
          console.log("浏览: " + $.goodsNumId);
          $.missionType = "viewShop";
          await proenv_0x234fea("mission");
          await $.wait(parseInt(Math.random() * 1000 + 5000, 10));
          if ($.viewShopFlag == true) {
            console.log("今日浏览任务已经到上限了");
            break;
          }
        }
      } else {
        console.log("暂无浏览内容");
      }
    } else {
      console.log("如需做浏览任务，设置如下");
      console.log("export DPLHTY_VIEWSHOP=\"1\" ");
    }
    if (proenv_0xab64b == true) {
      await proenv_0x234fea("activity_load");
      await $.wait(parseInt(Math.random() * 500 + 500), 10);
    }
    $.runFalag = true;
    await proenv_0x234fea("getAwardSettingList");
    await $.wait(parseInt(Math.random() * 500 + 500), 10);
    console.log("我的积分: 总积分" + $.totalPoint + "分, 可用积分" + $.remainPoint + "分");
    console.log("最低奖品需要积分 " + ($.min_exchange_score || "") + "分 - " + ($.min_exchange_id || ""));
    if (exchange_id != "") {
      console.log("检测到奖品兑换id不为空， 开始兑换");
      if ($.remainPoint >= $.min_exchange_score) {
        $.awardId = exchange_id;
        await proenv_0x234fea("exchangePost");
        await $.wait(parseInt(Math.random() * 500 + 500), 10);
      } else {
        console.log("你的积分还不足以兑换奖品");
      }
    } else {
      console.log("并未检测到兑换的奖品id 考虑到奖品可能出现 \"啊哦~奖品与你擦肩而过！的情况\"");
      console.log("默认不主动进行奖品兑换， 活动期间奖品只能兑换一次");
      console.log("推荐手动进入活动链接进行兑换");
    }
    await $.wait(parseInt(Math.random() * 500 + 500), 10);
    await proenv_0x234fea("myAward");
    await $.wait(parseInt(Math.random() * 500 + 500), 10);
    await proenv_0x234fea("inviteList");
    await $.wait(parseInt(Math.random() * 500 + 500), 10);
    if (proenv_0x5c0962) {
      $.inviteNick = $.inviteNick;
    } else {
      if ($.index == 1) {
        $.inviteNick = $.MixNick;
        $.oneNick = $.MixNick;
        if (!$.oneNick) {
          $.inviteNick = "" + $.authorinviteNick;
        }
      }
    }
    console.log($.MixNick);
    await $.wait(parseInt(Math.random() * 2500 + 2500, 10));
  } catch (_0x34f70d) {
    console.log(_0x34f70d);
  }
}
async function proenv_0x234fea(_0x27b67c) {
  let _0x150345 = "https://jinggengjcq-isv.isvjcloud.com";
  let _0x10276b = "";
  let _0x344a6d = "POST";
  let _0xa2d01c = "";
  switch (_0x27b67c) {
    case "isvObfuscator":
      url = "https://api.m.jd.com/client.action?functionId=isvObfuscator";
      _0x10276b = await proenv_0x3c172f();
      break;
    case "activity_load":
      url = _0x150345 + "/dm/front/jdJoinCardtf/activity/load?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      const _0x377176 = {
        jdToken: $.Token,
        source: "01",
        inviteNick: $.inviteNick || ""
      };
      _0xa2d01c = _0x377176;
      if ($.joinVenderId) {
        _0xa2d01c = {
          ..._0xa2d01c,
          shopId: $.joinVenderId
        };
      }
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/activity/load", _0xa2d01c);
      break;
    case "shopList":
      url = _0x150345 + "/dm/front/jdJoinCardtf/shop/shopList?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      _0xa2d01c = {};
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/shop/shopList", _0xa2d01c);
      break;
    case "shopProduct":
      url = _0x150345 + "/dm/front/jdJoinCardtf/shop/shopProduct?open_id=&mix_nick=" + ($.MixNick || "") + "&push_way=1&user_id=" + $.userId;
      _0xa2d01c = {};
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/shop/shopProduct", _0xa2d01c);
      break;
    case "绑定":
      url = _0x150345 + "/dm/front/jdJoinCardtf/customer/inviteRelation?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      const _0x17ae99 = {
        inviterNick: $.inviteNick || ""
      };
      _0xa2d01c = _0x17ae99;
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/customer/inviteRelation", _0xa2d01c);
      break;
    case "mission":
      url = _0x150345 + "/dm/front/jdJoinCardtf/mission/completeMission?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      if ($.goodsNumId) {
        const _0x4a67c2 = {
          goodsNumId: $.goodsNumId,
          missionType: $.missionType
        };
        _0xa2d01c = _0x4a67c2;
      } else {
        const _0x32a261 = {
          missionType: $.missionType
        };
        _0xa2d01c = _0x32a261;
      }
      if ($.joinVenderId) {
        _0xa2d01c = {
          ..._0xa2d01c,
          shopId: $.joinVenderId
        };
      }
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/mission/completeMission", _0xa2d01c);
      break;
    case "drawPost":
      url = _0x150345 + "/dm/front/jdJoinCardtf/interactive/drawPost?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      const _0x5801d0 = {
        dataType: "draw",
        usedGameNum: "2"
      };
      _0xa2d01c = _0x5801d0;
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/interactive/drawPost", _0xa2d01c);
      break;
    case "exchangePost":
      url = _0x150345 + "/dm/front/jdJoinCardtf/interactive/exchangePost?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      const _0x32fe21 = {
        awardId: $.awardId,
        dataType: "exchange",
        pushWay: 1
      };
      _0xa2d01c = _0x32fe21;
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/interactive/exchangePost", _0xa2d01c);
      break;
    case "myAward":
      url = _0x150345 + "/dm/front/jdJoinCardtf/awards/list?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      const _0xbf231a = {
        pageNo: 1,
        pageSize: 9999
      };
      _0xa2d01c = _0xbf231a;
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/awards/list", _0xa2d01c);
      break;
    case "inviteList":
      url = _0x150345 + "/dm/front/jdJoinCardtf/customer/inviteList?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      const _0x4bf8b1 = {
        actId: $.actId,
        buyerNick: $.mixNick || "",
        inviteType: 1,
        missionType: "shareAct",
        pageNum: 1,
        pageSize: 16,
        userId: $.userId
      };
      _0xa2d01c = _0x4bf8b1;
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/customer/inviteList", _0xa2d01c);
      break;
    case "getAwardSettingList":
      url = _0x150345 + "/dm/front/jdJoinCardtf/awards/getAwardSettingList?open_id=&mix_nick=" + ($.MixNick || "") + "&user_id=" + $.userId;
      const _0x11fcf3 = {
        dataType: "exchange",
        pushWay: 1
      };
      _0xa2d01c = _0x11fcf3;
      _0x10276b = proenv_0x1d0f4c("/jdJoinCardtf/awards/getAwardSettingList", _0xa2d01c);
      break;
    case "getShopOpenCardInfo":
      _0x344a6d = "post";
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      const _0x158c64 = {
        venderId: $.joinVenderId,
        channel: 102,
        payUpShop: true,
        queryVersion: "10.5.2",
        appid: "27004",
        needSecurity: true,
        bizId: "shopmember_m_jd_com"
      };
      _0x10276b = _0x158c64;
      h5st = await proenv_0x1c535f("27004", _0x10276b);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=getShopOpenCardInfo&body=" + encodeURIComponent(JSON.stringify(_0x10276b)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x10276b = "";
      break;
    case "bindWithVender":
      if (!$.joinVenderId) {
        console.log("没有开卡id");
        break;
      }
      _0x344a6d = "post";
      if ($.shopactivityId == "") {
        const _0x404206 = {
          venderId: $.joinVenderId,
          shopId: $.joinVenderId,
          bindByVerifyCodeFlag: 1,
          registerExtend: {},
          writeChildFlag: 0,
          channel: 102,
          appid: "27004",
          needSecurity: true,
          bizId: "shopmember_m_jd_com"
        };
        _0x10276b = _0x404206;
      } else {
        const _0x416b21 = {
          venderId: $.joinVenderId,
          shopId: $.joinVenderId,
          bindByVerifyCodeFlag: 1,
          registerExtend: {},
          writeChildFlag: 0,
          activityId: $.shopactivityId,
          channel: 102,
          appid: "27004",
          needSecurity: true,
          bizId: "shopmember_m_jd_com"
        };
        _0x10276b = _0x416b21;
      }
      h5st = await proenv_0x1c535f("27004", _0x10276b);
      h5st = encodeURIComponent(h5st);
      await $.wait(parseInt(Math.random() * 250 + 150, 10));
      url = "https://api.m.jd.com/client.action?functionId=bindWithVender&body=" + encodeURIComponent(JSON.stringify(_0x10276b)) + "&t=" + Date.now() + "&appid=shopmember_m_jd_com&clientVersion=9.2.0&client=H5&area=1_72_2799_0&uuid=88888&h5st=" + h5st + "&x-api-eid-token=";
      _0x10276b = "";
      break;
    default:
      console.log("错误" + _0x27b67c);
  }
  let _0x291ad8 = proenv_0x5d26fc(_0x27b67c, url, _0x10276b, _0x344a6d);
  if (api_proxy_open == true || global_agent_http_proxy_isopen == true) {
    await $.wait(parseInt(Math.random() * 500 + 350, 10));
  } else {
    await $.wait(parseInt(Math.random() * 1000 + 550, 10));
  }
  options = {};
  if (api_proxy_open == true) {
    let _0x120cc9 = "http://" + $.ip + ":" + $.ipo;
    let _0x477a29 = await new HttpsProxyAgent.HttpsProxyAgent(_0x120cc9);
    let _0x2b6087 = _0x477a29;
    const _0x42be2b = {
      headers: _0x291ad8.headers,
      timeout: _0x291ad8.timeout,
      proxy: false,
      httpAgent: _0x2b6087,
      httpsAgent: _0x477a29
    };
    options = _0x42be2b;
  } else {
    const _0x480e76 = {
      headers: _0x291ad8.headers,
      timeout: _0x291ad8.timeout
    };
    options = _0x480e76;
  }
  if (_0x344a6d.toLowerCase().includes("post")) {
    return proenv_0x456d0c.post(url, _0x10276b, options).then(function (_0x52d9e6) {
      _0x52d9e6 = proenv_0x576fc9(_0x52d9e6);
      if (_0x52d9e6) {
        proenv_0x3c1b43(_0x27b67c, _0x52d9e6);
      }
    }).catch(async function (_0x4ed980) {
      if (_0x4ed980.response) {
        console.log(_0x4ed980.response.status);
        if (!(api_proxy_open == true || global_agent_http_proxy_isopen == true)) {
          if (_0x4ed980.response.status == "493") {
            console.log("ip可能已经被限制， 过十分钟再来！！！");
            $.outFlag = true;
            process.exit(1);
          }
        }
        _0x4ed980.response.status == "403";
      }
      console.log("错误码1: " + _0x27b67c + " - " + _0x4ed980.code);
      if (api_proxy_open == true && (_0x4ed980.code == "ECONNRESET" || _0x4ed980.code == "ECONNREFUSED" || _0x4ed980.code == "ETIMEDOUT")) {
        await $.wait(parseInt(Math.random() * 500 + 350, 10));
        if ($.ECONNRESET >= 50) {
          console.log("代理失败太多(可能代理失效了，请检查代理白名单是否掉出，额度是否超了), 强制退出");
          process.exit(1);
        } else {
          $.ECONNRESET += 1;
          $.getIpStatus = true;
          await proenv_0xc34f80();
          await proenv_0x234fea(_0x27b67c);
        }
      }
      if (_0x4ed980.code == "ECONNABORTED" || _0x4ed980.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x27b67c) || _0x4ed980.code == "ERR_BAD_RESPONSE" || _0x4ed980.code == "EAI_AGAIN" || _0x4ed980.code == "ETIMEDOUT") {
        if ($.ERR_BAD_REQUEST >= 15) {
          $.ERR_BAD_REQUEST = 0;
        } else {
          $.ERR_BAD_REQUEST += 1;
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          await proenv_0x234fea(_0x27b67c);
        }
      }
    });
  } else {
    if (_0x344a6d == "get" || _0x344a6d == "GET") {
      return proenv_0x456d0c.get(url, options).then(function (_0x2fb06e) {
        _0x2fb06e = proenv_0x576fc9(_0x2fb06e);
        if (_0x2fb06e) {
          proenv_0x3c1b43(_0x27b67c, _0x2fb06e);
        }
      }).catch(async function (_0x52d170) {
        if (_0x52d170.response) {
          console.log(_0x52d170.response.status);
          if (!(api_proxy_open == true || global_agent_http_proxy_isopen == true)) {
            if (_0x52d170.response.status == "493") {
              console.log("ip可能已经被限制， 过十分钟再来！！！");
              $.outFlag = true;
              process.exit(1);
            }
          }
          _0x52d170.response.status == "403";
        }
        console.log("错误码2: " + _0x27b67c + " - " + _0x52d170.code);
        if (api_proxy_open == true && (_0x52d170.code == "ECONNRESET" || _0x52d170.code == "ECONNREFUSED" || _0x52d170.code == "ETIMEDOUT")) {
          await $.wait(parseInt(Math.random() * 500 + 350, 10));
          if ($.ECONNRESET >= 50) {
            console.log("代理失败太多(可能代理失效了，请检查代理白名单是否掉出，额度是否超了), 强制退出");
            process.exit(1);
          } else {
            $.ECONNRESET += 1;
            $.getIpStatus = true;
            await proenv_0xc34f80();
            await proenv_0x234fea(_0x27b67c);
          }
        }
        if (_0x52d170.code == "ECONNABORTED" || _0x52d170.code == "ERR_BAD_REQUEST" && !["isvObfuscator", "getCk"].includes(_0x27b67c) || _0x52d170.code == "ERR_BAD_RESPONSE" || _0x52d170.code == "EAI_AGAIN" || _0x52d170.code == "ETIMEDOUT") {
          if ($.ERR_BAD_REQUEST >= 15) {
            $.ERR_BAD_REQUEST = 0;
          } else {
            $.ERR_BAD_REQUEST += 1;
            await $.wait(parseInt(Math.random() * 500 + 350, 10));
            await proenv_0x234fea(_0x27b67c);
          }
        }
      });
    }
  }
}
function proenv_0x3c1b43(_0x2230a2, _0x1b2a82) {
  let _0x277032 = "";
  try {
    if (!["accessLog", "attendLog", "getCk", "drawContent", "accessLogWithAD", "accessLog"].includes(_0x2230a2)) {
      if (_0x1b2a82) {
        _0x277032 = JSON.parse(_0x1b2a82);
      }
    }
  } catch (_0x3c0b63) {
    console.log(_0x3c0b63.message);
    console.log(_0x2230a2 + " 执行任务异常");
    $.runFalag = false;
  }
  try {
    switch (_0x2230a2) {
      case "isvObfuscator":
        if (typeof _0x277032 == "object") {
          if (_0x277032.errcode == 0) {
            if (typeof _0x277032.token != "undefined") {
              $.Token = _0x277032.token;
            }
          } else {
            if (_0x277032.message) {
              console.log(_0x2230a2 + " " + (_0x277032.message || ""));
            } else {
              console.log(_0x1b2a82);
            }
          }
        } else {
          console.log(_0x1b2a82);
        }
        break;
      case "绑定":
        console.log(_0x277032.data.msg);
        break;
      case "shopProduct":
        if (_0x277032.success == true && _0x277032.errorCode == "200" && _0x277032.data) {
          $.productList = _0x277032.data.data || [];
        }
        break;
      case "accessLogWithAD":
        break;
      case "drawContent":
        break;
      case "activity_load":
        if (_0x1b2a82.indexOf("未开始") > -1 || _0x1b2a82.indexOf("已结束") > -1) {
          $.activityEnd = true;
        }
        if (_0x277032.success == true && _0x277032.data) {
          _0x277032 = _0x277032.data;
          if (_0x277032.msg || _0x277032.data.isOpenCard) {
            if ((_0x277032.msg || _0x277032.data.isOpenCard || "").indexOf("绑定成功") > -1) {
              $.toBind = 1;
            }
          }
          $.openCardMsg = _0x277032.data.openCardMsg || "";
          if ($.openCard != "") {
            console.log($.openCardMsg);
          }
          $.endTime = _0x277032.data.cusActivity.endTime || 0;
          $.startTime = _0x277032.data.cusActivity.startTime || 0;
          $.MixNick = _0x277032.data.missionCustomer.buyerNick || "";
          $.usedChance = _0x277032.data.missionCustomer.usedChance || 0;
          $.usedPoint = _0x277032.data.missionCustomer.usedPoint || 0;
          $.totalPoint = _0x277032.data.missionCustomer.totalPoint || 0;
          $.totalChance = _0x277032.data.missionCustomer.totalChance || 0;
          $.remainPoint = _0x277032.data.missionCustomer.remainPoint || 0;
          $.remainChance = _0x277032.data.missionCustomer.remainChance || 0;
          $.hasCollectShop = _0x277032.data.missionCustomer.hasCollectShop || 0;
          $.hasAddCart = _0x277032.data.missionCustomer.hasAddCart || 0;
        }
        break;
      case "mission":
        if (_0x1b2a82.indexOf("赠送次数已达上限") > -1) {
          $.viewShopFlag = true;
        }
        if (_0x277032.success == true && _0x277032.data) {
          _0x277032 = _0x277032.data;
          if (_0x277032.data.remark.indexOf("不是会员") > -1) {
            $.openCard = true;
          } else {
            $.openCard = false;
          }
          if (_0x277032.data.remark) {
            console.log(_0x277032.data.remark || "");
          }
        }
        break;
      case "shopList":
        try {
          if ($.shopList.length >= 1) {
            $.shopList = $.shopList || [];
          } else {
            $.shopList = _0x277032.data.data || [];
          }
        } catch (_0x258190) {
          if ($.shopList.length >= 1) {
            $.shopList = $.shopList || [];
          } else {
            $.shopList = [];
          }
        }
        $.openList = _0x277032.data.data ? _0x277032.data.data : [];
        if (_0x1b2a82.indexOf("未开始") > -1) {
          $.activityEnd = true;
        }
        if (_0x277032.success == true) {
          $.openList = _0x277032.data.data || [];
          $.userIdList = [];
          $.userIdNeedList = [];
          Object.values($.openList).forEach(function (_0x28ced6) {
            let _0x27c58b = proenv_0x28a57d("venderId", _0x28ced6.openCardUrl) || _0x28ced6.userId;
            $.userIdList.push(_0x27c58b);
            if (_0x28ced6.open == false) {
              $.userIdNeedList.push(_0x27c58b);
            }
          });
        }
        break;
      case "myAward":
        if (_0x277032.success == true && _0x277032.data) {
          _0x277032 = _0x277032.data;
          console.log("我的奖品：");
          let _0x2711d2 = 0;
          for (let _0x2bc3b5 in _0x277032.data.list || []) {
            let _0x54bc8d = _0x277032.data.list[_0x2bc3b5];
            _0x2711d2 += Number(_0x54bc8d.awardDes);
          }
          if (_0x2711d2 > 0) {
            console.log("共获得" + _0x2711d2 + "京豆 无法判断奖励是否为邀请奖励，所以直接显示获得多少豆");
          }
        }
        break;
      case "inviteList":
        if (_0x277032.success == true && _0x277032.data) {
          _0x277032 = _0x277032.data;
          console.log("邀请人数: " + (_0x277032.data.inviteNum || 0));
        }
        break;
      case "drawPost":
        break;
      case "exchangePost":
        console.log(_0x1b2a82);
        break;
      case "getAwardSettingList":
        if (_0x277032.success == true && _0x277032.data) {
          $.awardSettings = _0x277032.data.data.awardSettings || [];
          if ($.awardSettings.length >= 1) {
            $.min_exchange_id = 0;
            $.min_exchange_score = 200;
            for (let _0x21b616 of $.awardSettings) {
              if (parseInt(_0x21b616.awardDes) > $.min_exchange_id) {
                $.min_exchange_id = _0x21b616.id;
                $.min_exchange_score = parseInt(_0x21b616.awardDes);
              }
              console.log("兑换奖品: " + _0x21b616.awardName + "(" + _0x21b616.awardType + " - " + _0x21b616.id + ") 需要" + _0x21b616.awardDes + "积分， 还剩" + _0x21b616.remainNum + "份");
            }
          }
        }
        break;
      case "getShopOpenCardInfo":
        if (_0x1b2a82) {
          _0x1b2a82 = _0x1b2a82 && _0x1b2a82.match(/jsonp_.*?\((.*?)\);/) && _0x1b2a82.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1b2a82;
          _0x277032 = JSON.parse(_0x1b2a82);
          if (_0x277032 && _0x277032.success == true) {
            openCardStatus = _0x277032.result[0].userInfo.openCardStatus || 0;
            venderCardName = _0x277032.result[0].shopMemberCardInfo.venderCardName || "";
            if (openCardStatus === 1) {
              console.log("已入会: " + $.joinVenderId + " - " + venderCardName);
            } else {
              if (openCardStatus == 0) {
                console.log("去开卡: " + $.joinVenderId + " - " + venderCardName);
              }
            }
            $.shopactivityId = _0x277032.result[0].interestsRuleList && _0x277032.result[0].interestsRuleList[0] && _0x277032.result[0].interestsRuleList[0].interestsInfo && _0x277032.result[0].interestsRuleList[0].interestsInfo.activityId || "";
          } else {
            _0x277032.busiCode == "9001";
            _0x277032.busiCode == "1";
          }
        }
        break;
      case "bindWithVender":
        if (_0x1b2a82) {
          _0x1b2a82 = _0x1b2a82 && _0x1b2a82.match(/jsonp_.*?\((.*?)\);/) && _0x1b2a82.match(/jsonp_.*?\((.*?)\);/)[1] || _0x1b2a82;
          _0x1b2a82.indexOf("加入店铺会员成功") > -1 || _0x1b2a82.indexOf("已经是本店会员") > -1;
          _0x1b2a82.indexOf("活动太火爆，请稍后再试") > -1;
          _0x277032 = JSON.parse(_0x1b2a82);
          if (_0x277032 && _0x277032.success === true) {
            if (_0x277032.busiCode == 0) {
              console.log("" + _0x277032.message);
            } else {
              console.log(_0x277032.busiCode + ": " + _0x277032.message);
            }
            $.errorJoinShop = _0x277032.message || "";
            if (_0x277032.result && _0x277032.result.giftInfo) {
              for (let _0x4a3d20 of _0x277032.result.giftInfo.giftList) {
                console.log("入会获得: " + _0x4a3d20.discountString + _0x4a3d20.prizeName + _0x4a3d20.secondLineDesc);
              }
            }
          } else {
            if (_0x277032 && typeof _0x277032 == "object" && _0x277032.message) {
              $.errorJoinShop = _0x277032.message || "";
              console.log(_0x277032.busiCode + ": " + _0x277032.message);
              _0x277032.busiCode == "2001";
              _0x277032.busiCode == "9002";
              _0x277032.busiCode == "9003";
              _0x277032.busiCode == "0";
            } else {
              console.log(_0x1b2a82);
            }
          }
        }
        break;
      default:
        break;
    }
    if (typeof _0x277032 == "object") {
      if (_0x277032.errorMessage) {
        if (_0x277032.errorMessage.indexOf("火爆") > -1) {
          $.hotFlag = true;
        }
      }
    }
  } catch (_0x4b7e2c) {}
}
function proenv_0x5d26fc(_0x4fc4a6, _0xcea070, _0x128035, _0x1e6c11 = "post") {
  const _0x4f2a58 = {
    Accept: "application/json",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "zh-cn",
    Connection: "keep-alive",
    "Content-Type": "application/x-www-form-urlencoded",
    Cookie: proenv_0x214107,
    "User-Agent": $.UA,
    "X-Requested-With": "XMLHttpRequest"
  };
  let _0x46340c = _0x4f2a58;
  if (_0xcea070.indexOf("https://jinggengjcq-isv.isvjcloud.com") > -1) {
    _0x46340c.Origin = "https://jinggengjcq-isv.isvjcloud.com";
    _0x46340c["Content-Type"] = "application/json; charset=utf-8";
    delete _0x46340c.Cookie;
  }
  if (["getShopOpenCardInfo", "bindWithVender"].includes(_0x4fc4a6)) {
    const _0x46e7a8 = {
      Accept: "*/*",
      "User-Agent": $.UA,
      "content-type": "application/x-www-form-urlencoded",
      "x-rp-client": "h5_1.0.0",
      "x-referer-page": "https://pages.jd.com/member/shopcard",
      origin: "https://pages.jd.com",
      "X-Requested-With": "com.jingdong.app.mall",
      "Sec-Fetch-Site": "same-site",
      "Sec-Fetch-Mode": "cors",
      "Sec-Fetch-Dest": "empty",
      Referer: "https://pages.jd.com/",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
      Cookie: proenv_0x214107
    };
    _0x46340c = _0x46e7a8;
  }
  if (_0x1e6c11.toLowerCase().includes("get")) {
    const _0x1d24b7 = {
      url: _0xcea070,
      method: _0x1e6c11,
      headers: _0x46340c,
      timeout: 30000
    };
    return _0x1d24b7;
  } else {
    if (_0x1e6c11.toLowerCase().includes("post")) {
      const _0x4e68e2 = {
        url: _0xcea070,
        method: _0x1e6c11,
        headers: _0x46340c,
        body: _0x128035,
        timeout: 30000
      };
      return _0x4e68e2;
    }
  }
}
function proenv_0x1d0f4c(_0x51a26f, _0xf094d8) {
  const _0x2e277e = {
    jsonRpc: "2.0",
    params: {}
  };
  _0x2e277e.params.commonParameter = {};
  _0x2e277e.params.admJson = {
    ..._0xf094d8
  };
  _0x2e277e.params.admJson.actId = $.actId;
  _0x2e277e.params.admJson.buyerNick = $.MixNick || "";
  _0x2e277e.params.admJson.method = _0x51a26f;
  _0x2e277e.params.admJson.userId = $.userId;
  _0x2e277e.params.commonParameter.m = "POST";
  _0x2e277e.params.commonParameter.timestamp = Date.now();
  _0x2e277e.params.commonParameter.userId = $.userId;
  b = _0x2e277e;
  Object.assign(b.params.admJson, _0xf094d8);
  let _0x17e749 = proenv_0xca2551(b.params.admJson);
  b.params.commonParameter.oba = _0x17e749.sign;
  b.params.commonParameter.timestamp = _0x17e749.timeStamp;
  return $.toStr(b, b);
}
async function proenv_0x5a1393() {
  try {
    let _0x3f4930 = ["jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;BKL-AL20Build/HUAWEIBKL-AL20;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/89.0.4389.72MQQBrowser/6.2TBS/046249MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;U;Android10;zh-CN;TAS-AL00Build/HUAWEITAS-AL00)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/78.0.3904.108UCBrowser/13.1.8.1098MobileSafari/537.36", "jdapp;android;12.2.0;;;M/5.0;appBuild/2397;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jd.jdlite%22%7D;Mozilla/5.0(Linux;Android10;MI9Build/QKQ1.190825.002;wv)AppleWebKit/537.36(KHTML,likeGecko)Version/4.0Chrome/77.0.3865.120MQQBrowser/6.2TBS/045415MobileSafari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; ONEPLUS A3000 Build/PKQ1.181203.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046247 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 12; Redmi Note 9 Pro) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 11; RMX2001) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13; M2012K11C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.5414.117 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.28 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 10; Redmi Note 7) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/89.0.4389.86 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 9; MI 9) AppleWebKit/537.36 (KHTML, like Gecko) Brave Chrome/88.0.4324.96 Mobile Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.0.0; Pixel C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.111 Safari/537.36", "jdapp;android;12.0.8;;;M/5.0;appBuild/22709;ef/1;ep/%7B%22hdid%22%3A%22JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw%3D%22%2C%22ts%22%3A" + Date.now() + "%2C%22ridx%22%3A-1%2C%22cipher%22%3A%7B%22sv%22%3A%22EG%3D%3D%22%2C%22ad%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%2C%22od%22%3A%22%22%2C%22ov%22%3A%22Ctq%3D%22%2C%22ud%22%3A%22" + encodeURIComponent(proenv_0xaa9b41(proenv_0x4f0f6a.SHA1($.UserName).toString())) + "%22%7D%2C%22ciphertype%22%3A5%2C%22version%22%3A%221.2.0%22%2C%22appname%22%3A%22com.jingdong.app.mall%22%7D;Mozilla/5.0 (Linux; Android 8.1.0; OPPO R11; Build/OPM1.171019.011) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.4280.141 Mobile Safari/537.36 Firefox-KiToBrowser/115.0"];
    let _0x59c596 = parseInt(Math.random() * _0x3f4930.length);
    let _0x50f657 = _0x3f4930[_0x59c596];
    $.UA = _0x50f657;
    return _0x50f657;
  } catch (_0x1a321e) {
    console.log(_0x1a321e);
  }
}
function proenv_0xaa9b41(_0x1dc02d, _0x17de2f) {
  _0x32f504 = _0x32f504 || "KLMNOPQRSTABCDEFGHIJUVWXYZabcdopqrstuvwxefghijklmnyz0123456789+/";
  var _0xd3dce = "";
  var _0x57a84b, _0x2c5413, _0x363562, _0x217bde, _0x576a0c, _0x13ab1e;
  var _0x3d0c0e = 0;
  _0x1dc02d = _0x1dc02d.replace(/rn/g, "n");
  var _0x32f504 = "";
  for (var _0xd3dce = 0; _0xd3dce < _0x1dc02d.length; _0xd3dce++) {
    {
      var _0x3e1cf2 = _0x1dc02d.charCodeAt(_0xd3dce);
      if (_0x3e1cf2 < 128) {
        _0x32f504 += String.fromCharCode(_0x3e1cf2);
      } else {
        _0x3e1cf2 > 127 && _0x3e1cf2 < 2048 ? (_0x32f504 += String.fromCharCode(_0x3e1cf2 >> 6 | 192), _0x32f504 += String.fromCharCode(_0x3e1cf2 & 63 | 128)) : (_0x32f504 += String.fromCharCode(_0x3e1cf2 >> 12 | 224), _0x32f504 += String.fromCharCode(_0x3e1cf2 >> 6 & 63 | 128), _0x32f504 += String.fromCharCode(_0x3e1cf2 & 63 | 128));
      }
    }
  }
  while (_0x3d0c0e < _0x1dc02d.length) {
    _0x3e1cf2 = _0x1dc02d.charCodeAt(_0x3d0c0e++);
    _0x57a84b = _0x1dc02d.charCodeAt(_0x3d0c0e++);
    _0x2c5413 = _0x1dc02d.charCodeAt(_0x3d0c0e++);
    _0x363562 = _0x3e1cf2 >> 2;
    _0x217bde = (_0x3e1cf2 & 3) << 4 | _0x57a84b >> 4;
    _0x576a0c = (_0x57a84b & 15) << 2 | _0x2c5413 >> 6;
    _0x13ab1e = _0x2c5413 & 63;
    if (isNaN(_0x57a84b)) {
      _0x576a0c = _0x13ab1e = 64;
    } else {
      isNaN(_0x2c5413) && (_0x13ab1e = 64);
    }
    _0xd3dce = _0xd3dce + _0x32f504.charAt(_0x363562) + _0x32f504.charAt(_0x217bde) + _0x32f504.charAt(_0x576a0c) + _0x32f504.charAt(_0x13ab1e);
  }
  while (_0xd3dce.length % 4 > 1) {
    _0xd3dce += "=";
  }
  return _0xd3dce;
}
function proenv_0x5a6ef1(_0x1ff59d) {
  _0x1ff59d = _0x1ff59d || 32;
  let _0x264c13 = "abcdef0123456789",
    _0x443872 = _0x264c13.length,
    _0x1e962e = "";
  for (i = 0; i < _0x1ff59d; i++) {
    _0x1e962e += _0x264c13.charAt(Math.floor(Math.random() * _0x443872));
  }
  return _0x1e962e;
}
function proenv_0x183d91(_0x5a77bf) {
  if (typeof _0x5a77bf == "string") {
    try {
      return JSON.parse(_0x5a77bf);
    } catch (_0x454657) {
      console.log(_0x454657);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function proenv_0xca2551(_0x1486a5) {
  switch ($.actId) {
    default:
      tt = "6cc5dbd8900e434b94c4bdb0c16348ed";
      ii = "c1614da9ac68";
      break;
  }
  a = new Date().valueOf();
  t = tt;
  i = ii;
  u = JSON.stringify(_0x1486a5);
  d = encodeURIComponent(u);
  s = new RegExp("'", "g");
  c = new RegExp("~", "g");
  d = d.replace(s, "%27");
  d = d.replace(c, "%7E");
  p = "f" + i + "D" + d + "c" + a + t;
  l = proenv_0x4f0f6a.MD5(p.toLowerCase()).toString();
  const _0x736ef8 = {
    sign: l,
    timeStamp: a
  };
  return _0x736ef8;
}
function proenv_0x253d14() {
  let _0x5a8700 = "0123456789";
  let _0xc0a51a = 13;
  let _0x7dfbce = "";
  for (; _0xc0a51a--;) {
    _0x7dfbce += _0x5a8700[Math.random() * _0x5a8700.length | 0];
  }
  return (_0x7dfbce + Date.now()).slice(0, 16);
}
function proenv_0x10501c(_0x2c5e73) {
  return new Promise(_0x547874 => {
    const _0x426263 = {
      "User-Agent": proenv_0x46edf8
    };
    const _0x5c593a = {
      url: "http://hz.feverrun.top:99/share/get/author?flag=" + _0x2c5e73,
      headers: _0x426263,
      timeout: 60000
    };
    $.get(_0x5c593a, (_0x3227bc, _0x24b9cb, _0x51de87) => {
      try {
        if (!_0x3227bc) {
          try {
            _0x51de87 = _0x51de87;
          } catch (_0x26253a) {
            _0x51de87 = "";
          }
        }
      } catch (_0x309f49) {} finally {
        _0x547874(_0x51de87 || "");
      }
    });
  });
}
function proenv_0x3c172f() {
  return new Promise(_0x540ba9 => {
    const _0x1dc1e6 = {
      "User-Agent": proenv_0x46edf8
    };
    const _0x479ee5 = {
      url: proenv_0x987791 + "?type=jinggengjcq",
      headers: _0x1dc1e6,
      timeout: 60000
    };
    $.get(_0x479ee5, (_0x5b909b, _0xd0e181, _0x192f2c) => {
      try {
        if (_0x5b909b) {
          console.log("请求失败，请检查网路");
        } else {
          try {
            _0x192f2c = JSON.parse(_0x192f2c);
            if (_0x192f2c.code == 0) {
              _0x192f2c = _0x192f2c.data;
            } else {
              _0x192f2c = "";
            }
          } catch (_0x2991a8) {
            _0x192f2c = "";
          }
        }
      } catch (_0xbf47dd) {} finally {
        _0x540ba9(_0x192f2c || "");
      }
    });
  });
}
function proenv_0x103c81(_0x440d46, _0x3192f8) {
  return Math.floor(Math.random() * (_0x3192f8 - _0x440d46)) + _0x440d46;
}
async function proenv_0x1c535f(_0x388536, _0xdbfbb3) {
  return new Promise(_0x134c4a => {
    const _0x292aa6 = {
      "User-Agent": "jdapp;android;11.4.1;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o410 Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36"
    };
    const _0x505732 = {
      url: "http://hz.feverrun.top:99/share/card/getH5st410",
      body: "bid=" + _0x388536 + "&body=" + JSON.stringify(_0xdbfbb3),
      headers: _0x292aa6,
      timeout: 60000
    };
    $.post(_0x505732, (_0xf64af8, _0x4f1713, _0x19e243) => {
      try {
        if (_0xf64af8) {
          console.log("请求失败，请检查网路");
          console.log(_0xf64af8);
        } else {
          try {
            _0x19e243 = _0x19e243;
          } catch (_0x388c29) {
            _0x19e243 = "";
          }
        }
      } catch (_0x4caa54) {} finally {
        _0x134c4a(_0x19e243 || "");
      }
    });
  });
}
function proenv_0x576fc9(_0x1ebf00) {
  if (_0x1ebf00.status == 200 && _0x1ebf00.data) {
    _0x1ebf00 = _0x1ebf00.data;
    if (typeof _0x1ebf00 == "object") {
      return JSON.stringify(_0x1ebf00);
    } else {
      return _0x1ebf00;
    }
  } else {
    return "";
  }
}
async function proenv_0x8f3d48(_0x4e0e80, _0x28c052) {
  await $.wait(parseInt(Math.random() * 350 + 300, 10));
  return new Promise(_0x436735 => {
    const _0x505694 = {
      url: "http://hz.feverrun.top:99/share/sub/subIsvToken",
      body: "pin=" + encodeURIComponent(_0x4e0e80) + "&token=" + _0x28c052,
      headers: {},
      timeout: 60000
    };
    _0x505694.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
    $.post(_0x505694, (_0x5284a2, _0x298908, _0x77e3e6) => {
      try {
        if (_0x5284a2) {
          console.log("缓存token失败2");
          _0x77e3e6 = "";
        } else {
          try {
            _0x77e3e6 = _0x77e3e6;
          } catch (_0xa26d83) {
            _0x77e3e6 = "";
          }
        }
      } catch (_0x43542a) {
        _0x77e3e6 = "";
      } finally {
        _0x436735(_0x77e3e6 || "");
      }
    });
  });
}
async function proenv_0x1c1b6b(_0x2189be) {
  await $.wait(parseInt(Math.random() * 350 + 300, 10));
  if ($.client) {
    return new Promise(async _0x54c59f => {
      data = await $.client.get(_0x2189be);
      _0x54c59f(data || "");
    });
  } else {
    return new Promise(_0x437b7c => {
      const _0x258948 = {
        url: "http://hz.feverrun.top:99/share/get/getIsvToken",
        body: "pin=" + encodeURIComponent(_0x2189be),
        headers: {},
        timeout: 60000
      };
      _0x258948.headers["User-Agent"] = "jdapp;android;11.5.0;jdSupportDarkMode/0;Mozilla/5.0 (Linux; Android 10; PCCM0o Build/QKQ1.191021.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/89.0.4389.72 MQQBrowser/6.2 TBS/046011 Mobile Safari/537.36";
      $.post(_0x258948, (_0x227e9f, _0x4146a0, _0x24bce0) => {
        try {
          if (_0x227e9f) {
            console.log("缓存token失败1");
            _0x24bce0 = "";
          } else {
            try {
              _0x24bce0 = _0x24bce0;
            } catch (_0x3c8312) {
              _0x24bce0 = "";
            }
          }
        } catch (_0x4bd712) {
          _0x24bce0 = "";
        } finally {
          _0x437b7c(_0x24bce0 || "");
        }
      });
    });
  }
}
async function proenv_0x3a2fa5() {
  if ($.client) {
    return new Promise(async _0x50a286 => {
      $token = await proenv_0x1c1b6b(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.Token = $token;
      } else {
        for (let _0x49fceb = 0; _0x49fceb < 1; _0x49fceb++) {
          await proenv_0x234fea("isvObfuscator");
          if ($.Token != "" && $.Token != undefined) {
            console.log("缓存token成功");
            await $.client.set(encodeURIComponent($.UserName), $.Token);
            await $.client.expire(encodeURIComponent($.UserName), 1740);
            break;
          } else {
            console.log("缓存token失败" + (_0x49fceb + 1));
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
      }
      _0x50a286();
    });
  } else {
    return new Promise(async _0x121078 => {
      $token = await proenv_0x1c1b6b(encodeURIComponent($.UserName));
      if ($token != "") {
        console.log("读取缓存token成功");
        $.Token = $token;
      } else {
        for (let _0x56d369 = 0; _0x56d369 < 1; _0x56d369++) {
          await proenv_0x234fea("isvObfuscator");
          if ($.Token != "" && $.Token != undefined) {
            console.log("缓存token成功");
            await proenv_0x8f3d48(encodeURIComponent($.UserName), $.Token);
            break;
          } else {
            console.log("缓存token失败" + (_0x56d369 + 1));
          }
          if ($.isvObfuscator.indexOf("参数异常") > -1) {
            break;
          }
        }
      }
      _0x121078();
    });
  }
}
async function proenv_0xc34f80() {
  return new Promise(async _0x1354fe => {
    try {
      await $.wait(parseInt(Math.random() * 350 + 250, 10));
      let _0x5c65fd = await proenv_0x1cb9b7();
      if (_0x5c65fd != "") {
        $.getIpStatus = true;
        console.log("当前: " + _0x5c65fd);
        ips = _0x5c65fd.split(":");
        $.ip = ips[0];
        $.ipo = ips[1];
        await $.wait(parseInt(Math.random() * 350 + 250, 10));
      } else {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    } catch (_0x417fb1) {
      $.getIpStatus = false;
      console.log("代理获取失败");
    }
    if ($.getIpStatus == false) {
      try {
        await $.wait(parseInt(Math.random() * 350 + 250, 10));
        let _0x4c4fcb = await proenv_0x1cb9b7();
        if (_0x4c4fcb != "") {
          $.getIpStatus = true;
          console.log("当前: " + _0x4c4fcb);
          ips = _0x4c4fcb.split(":");
          $.ip = ips[0];
          $.ipo = ips[1];
          await $.wait(parseInt(Math.random() * 350 + 250, 10));
        } else {
          $.getIpStatus = false;
          console.log("代理获取失败");
        }
      } catch (_0x3b85c7) {
        $.getIpStatus = false;
        console.log("代理获取失败");
      }
    }
    if ($.getIpStatus == false) {
      console.log("代理获取失败，跳过此次执行！");
      _0x1354fe(false);
    } else {
      _0x1354fe(true);
    }
  });
}
function proenv_0x1cb9b7() {
  try {
    return new Promise(_0x5c5fa8 => {
      const _0x50ac51 = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/538.38"
      };
      const _0x4e3a9b = {
        url: your_proxy_url,
        headers: _0x50ac51,
        timeout: 30000
      };
      $.get(_0x4e3a9b, (_0x37473f, _0x27873c, _0x1f9592) => {
        try {
          if (_0x37473f) {
            console.log("获取Ip失败");
          } else {
            try {
              if (_0x1f9592.indexOf("\r\n") > -1) {
                _0x1f9592 = _0x1f9592.split("\r\n");
                if (_0x1f9592.length >= 1) {
                  _0x1f9592 = _0x1f9592[0];
                }
              } else {
                if (_0x1f9592.indexOf("\n") > -1) {
                  _0x1f9592 = _0x1f9592.split("\n");
                  if (_0x1f9592.length >= 1) {
                    _0x1f9592 = _0x1f9592[0];
                  }
                } else {
                  if (_0x1f9592.indexOf("\r") > -1) {
                    _0x1f9592 = _0x1f9592.split("\r");
                    if (_0x1f9592.length >= 1) {
                      _0x1f9592 = _0x1f9592[0];
                    }
                  } else {
                    if (_0x1f9592.indexOf("\t") > -1) {
                      _0x1f9592 = _0x1f9592.split("\t");
                      if (_0x1f9592.length >= 1) {
                        _0x1f9592 = _0x1f9592[0];
                      }
                    }
                  }
                }
              }
            } catch (_0x956906) {
              _0x1f9592 = "";
            }
          }
        } catch (_0x469e24) {} finally {
          _0x5c5fa8(_0x1f9592 || "");
        }
      });
    });
  } catch (_0x48a276) {
    console.log(_0x48a276.message);
  }
}
function proenv_0x28a57d(_0x3ea7f7, _0x277cb6) {
  if (!_0x277cb6) {
    _0x277cb6 = location.href;
  }
  var _0x2b8303 = new RegExp("(^|[&?])" + _0x3ea7f7 + "=([^&]*)(&|$)");
  var _0x4cc324 = _0x277cb6.match(_0x2b8303);
  if (_0x4cc324 != null) {
    return decodeURIComponent(_0x4cc324[2]);
  }
  return "";
}
function proenv_0x4634c2(_0x3634d4 = +new Date()) {
  var _0x167374 = new Date(_0x3634d4 + 28800000);
  return _0x167374.toJSON().substr(0, 19).replace("T", " ").replace(/-/g, ".");
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}