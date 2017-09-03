/** é€šç”¨çš„JS**/
// é€šç”¨è¿”å›žé¡¶éƒ¨
$(function() {
  // é¦–å…ˆå°†#back-to-topéšè—
  $('#slider-goTop').hide();
  // å½“æ»šåŠ¨æ¡çš„ä½ç½®å¤„äºŽè·é¡¶éƒ¨100åƒç´ ä»¥ä¸‹æ—¶ï¼Œè·³è½¬é“¾æŽ¥å‡ºçŽ°ï¼Œå¦åˆ™æ¶ˆå¤±
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $('#slider-goTop').fadeIn();
    } else {
      $('#slider-goTop').fadeOut();
    }
  });
  // å½“ç‚¹å‡»è·³è½¬é“¾æŽ¥åŽï¼Œå›žåˆ°é¡µé¢é¡¶éƒ¨ä½ç½®
  $('#slider-goTop').click(function() {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });
  // è¿”å›žé¡¶éƒ¨ç­‰æ»‘å—hoveräº‹ä»¶
  $('#slider-chat,#slider-qq,#slider-phone,#slider-wechat').hover(
    function() {
      $(this).next().show();
    },
    function() {
      $(this).next().hide();
    }
  );
});

// é€šç”¨wavesçº¿æ¡åŠ¨ç”»
$(function() {
  function a() {
    var a = $(window).width(),
      b = (768 - a) / 768 + 1,
      c = 1;
    fmhPara = $('.feature-mi').height() < 641 || $('.feature-ai').height() < 641 || $('.feature-bi').height() < 641 ? 0 : 1, a < 768 ? ($('.mi-headline-bg').css('height', $('.feature-mi').height() + 28 * b * c + 'px'), $('.ai-headline-bg').css('height', $('.feature-ai').height() + 28 * b * c + 'px'), $('.bi-headline-bg').css('height', $('.feature-bi').height() + 28 * b * c + 'px'), $('.ee-headline-bg').css('height', $('.feature-ee').height() + parseInt($('.feature-ee').css('padding-top')) + 20 * b + 'px')) : ($('.mi-headline-bg').removeAttr('style'), $('.ai-headline-bg').removeAttr('style'), $('.bi-headline-bg').removeAttr('style'), $('.ee-headline-bg').removeAttr('style'));
  }
  setTimeout(function() {
    a();
  }, 100), $(window).resize(function() {
    a();
  });
}), (function(a, b) {
  'use strict';
  typeof define === 'function' && typeof define.amd === 'object' ? define([], function() {
    return b(a);
  }) : a.SineWaves = b(a);
}(this, function() {
  'use strict';

  function a(a) {
    if (this.options = i.defaults(this.options, a), this.el = this.options.el, delete this.options.el, !this.el) return false; // throw "No Canvas Selected";åˆ˜æ˜ŽæŽ’é”™æ³¨é”€
    if (this.ctx = this.el.getContext('2d'), this.waves = this.options.waves, delete this.options.waves, !this.waves || !this.waves.length) throw 'No waves specified';
    this.dpr = window.devicePixelRatio || 1, this.updateDimensions(), window.addEventListener('resize', this.updateDimensions.bind(this)), this.setupUserFunctions(), this.easeFn = i.getFn(n, this.options.ease, 'linear'), this.rotation = i.degreesToRadians(this.options.rotate), i.isType(this.options.running, 'boolean') && (this.running = this.options.running), this.setupWaveFns(), this.loop();
  }
  function b(a, b) {
    return i.isType(a, 'number') ? a : (a = a.toString(), a.indexOf('%') > -1 ? (a = parseFloat(a), a > 1 && (a /= 100), b * a) : a.indexOf('px') > -1 ? parseInt(a, 10) : void 0);
  }
  Function.prototype.bind || (Function.prototype.bind = function(a) {
    if (typeof this !== 'function') throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    var b = Array.prototype.slice.call(arguments, 1),
      c = this,
      d = function() {},
      e = function() {
        return c.apply(this instanceof d && a ? this : a, b.concat(Array.prototype.slice.call(arguments)));
      };
    return d.prototype = this.prototype, e.prototype = new d(), e;
  });
  for (var c = ['ms', 'moz', 'webkit', 'o'], d = 0; d < c.length && !window.requestAnimationFrame; ++d) window.requestAnimationFrame = window[c[d] + 'RequestAnimationFrame'], window.cancelAnimationFrame = window[c[d] + 'CancelAnimationFrame'] || window[c[d] + 'CancelRequestAnimationFrame'];
  if (!window.requestAnimationFrame) {
    var e = 0;
    window.requestAnimationFrame = function(a) {
      var b = (new Date()).getTime(),
        c = Math.max(0, 16 - (b - e)),
        d = window.setTimeout(function() {
          a(b + c);
        }, c);
      return e = b + c, d;
    };
  }
  window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
    clearTimeout(a);
  });
  var f = Math.PI / 180,
    // åŽŸæ¥çš„å€¼ä¸ºg=2 * Math.PI ç”¨äºŽä¿®æ­£sineinoutå³è¾¹çš„æ­£å¼¦å€¼
    g = 2.6 * Math.PI,
    h = Math.PI / 2,
    i = {},
    j = i.isType = function(a, b) {
      var c = {}.toString.call(a).toLowerCase();
      return c === '[object ' + b.toLowerCase() + ']';
    },
    k = i.isFunction = function(a) {
      return j(a, 'function');
    },
    l = i.isString = function(a) {
      return j(a, 'string');
    },
    m = (i.isNumber = function(a) {
      return j(a, 'number');
    }, i.shallowClone = function(a) {
        var b = {};
        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
        return b;
      }),
    n = (i.defaults = function(a, b) {
      j(b, 'object') || (b = {});
      var c = m(a);
      for (var d in b) b.hasOwnProperty(d) && (c[d] = b[d]);
      return c;
    }, i.degreesToRadians = function(a) {
        if (!j(a, 'number')) throw new TypeError('Degrees is not a number');
        return a * f;
      }, i.getFn = function(a, b, c) {
        return k(b) ? b : l(b) && k(a[b.toLowerCase()]) ? a[b.toLowerCase()] : a[c];
      }, {});
  n.linear = function(a, b) {
    return b;
  }, n.sinein = function(a, b) {
    return b * (Math.sin(a * Math.PI - h) + 1) * 0.5;
  }, n.sineout = function(a, b) {
    return b * (Math.sin(a * Math.PI + h) + 1) * 0.5;
  }, n.sineinout = function(a, b) {
    return b * (Math.sin(a * g - h) + 1) * 0.5;
  };
  var o = {};
  o.sine = function(a) {
    return Math.sin(a);
  }, o.sin = o.sine, o.sign = function(a) {
    return a = +a, a === 0 || isNaN(a) ? a : a > 0 ? 1 : -1;
  }, o.square = function(a) {
    return o.sign(Math.sin(a * g));
  }, o.sawtooth = function(a) {
    return 2 * (a - Math.floor(a + 0.5));
  }, o.triangle = function(a) {
    return Math.abs(o.sawtooth(a));
  }, a.prototype.options = {
    speed: 10,
    rotate: 0,
    ease: 'Linear',
    wavesWidth: '95%'
  }, a.prototype.setupWaveFns = function() {
    for (var a = -1, b = this.waves.length; ++a < b;) this.waves[a].waveFn = i.getFn(o, this.waves[a].type, 'sine');
  }, a.prototype.setupUserFunctions = function() {
    i.isFunction(this.options.resizeEvent) && (this.options.resizeEvent.call(this), window.addEventListener('resize', this.options.resizeEvent.bind(this))), i.isFunction(this.options.initialize) && this.options.initialize.call(this);
  };
  var p = {
    timeModifier: 1,
    amplitude: 50,
    wavelength: 50,
    segmentLength: 10,
    lineWidth: 1,
    strokeStyle: 'rgba(255, 255, 255, 0.2)',
    type: 'Sine'
  };
  return a.prototype.getDimension = function(a) {
    return i.isNumber(this.options[a]) ? this.options[a] : i.isFunction(this.options[a]) ? this.options[a].call(this, this.el) : a === 'width' ? this.el.clientWidth : a === 'height' ? this.el.clientHeight : void 0;
  }, a.prototype.updateDimensions = function() {
    var a = this.getDimension('width'),
      c = this.getDimension('height');
    this.width = this.el.width = a * this.dpr, this.height = this.el.height = c * this.dpr, this.el.style.width = a + 'px', this.el.style.height = c + 'px', this.waveWidth = b(this.options.wavesWidth, this.width), this.waveLeft = (this.width - this.waveWidth) / 2, this.yAxis = this.height / 2;
  }, a.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }, a.prototype.time = 0, a.prototype.update = function(a) {
    this.time = this.time - 0.007, typeof a === 'undefined' && (a = this.time);
    var b = -1,
      c = this.waves.length;
    for (this.clear(), this.ctx.save(), this.rotation > 0 && (this.ctx.translate(this.width / 2, this.height / 2), this.ctx.rotate(this.rotation), this.ctx.translate(-this.width / 2, -this.height / 2)); ++b < c;) {
      var d = this.waves[b].timeModifier || 1;
      this.drawWave(a * d, this.waves[b]);
    }
    this.ctx.restore(), b = void 0, c = void 0;
  }, a.prototype.getPoint = function(a, b, c) {
    var d = a * this.options.speed + (-this.yAxis + b) / c.wavelength,
      e = c.waveFn.call(this, d, o),
      f = this.easeFn.call(this, b / this.waveWidth, c.amplitude);
    return d = b + this.waveLeft, e = f * e + this.yAxis, {
      x: d,
      y: e
    };
  }, a.prototype.drawWave = function(a, b) {
    b = i.defaults(p, b), this.ctx.lineWidth = b.lineWidth * this.dpr, this.ctx.strokeStyle = b.strokeStyle, this.ctx.lineCap = 'butt', this.ctx.lineJoin = 'round', this.ctx.beginPath(), this.ctx.moveTo(0, this.yAxis), this.ctx.lineTo(this.waveLeft, this.yAxis);
    var c, d;
    for (c = 0; c < this.waveWidth; c += b.segmentLength) d = this.getPoint(a, c, b), this.ctx.lineTo(d.x, d.y), d = void 0;
    c = void 0, b = void 0, this.ctx.lineTo(this.width, this.yAxis), this.ctx.stroke();
  }, a.prototype.running = !0, a.prototype.loop = function() {
    this.running === !0 && this.update(), window.requestAnimationFrame(this.loop.bind(this));
  }, a.prototype.Waves = o, a.prototype.Ease = n, a;
})), $(function() {
  var a = new SineWaves({
      el: document.getElementById('waves'),
      // è®¾ç½®æ­£å¼¦æ³¢é€Ÿåº¦ åˆ˜æ˜Žæ³¨é‡Š
      speed: 4,
      width: function() {
        var a = $(document).width();
        // åŽŸæ¥çš„å€¼, è®¾ç½®æ­£å¼¦æ³¢çš„å®½åº¦, çŽ°åœ¨è®¾ç½®ä¸ºä¸Žå…ƒç´ åŒå®½
        // return 768 > a ? 3 * $("#waves").parent().width() : 1.4 * $("#waves").parent().width()
        return 1.4 * $('#waves').parent().width();
      },
      height: function() {
        return $('#waves').parent().height();
      },
      // åŽŸæ¥çš„å€¼, å¯ä»¥æ­£å¼¦æ³¢å®½åº¦, å±…ä¸­, ä¸¤è¾¹è¶…å‡ºéƒ¨åˆ†éšè—
      // wavesWidth: "100%",
      wavesWidth: '130%', // 150
      ease: 'SineInOut',
      waves: [{
        timeModifier: 0.5,
        lineWidth: 2,
        amplitude: 150,
        wavelength: 200,
        segmentLength: 1
      }, {
        timeModifier: 0.5,
        lineWidth: 2,
        amplitude: 100,
        wavelength: 150,
        segmentLength: 1
      }, {
        timeModifier: 0.5,
        lineWidth: 2,
        amplitude: 50,
        wavelength: 80,
        segmentLength: 1
      }],
      initialize: function() {},
      resizeEvent: function() {
        var a = this.ctx.createLinearGradient(0, 0, this.width, 0);
        // åŽŸæ¥çš„å€¼, è®¾ç½®çº¿æ¡æ¸å˜é€æ˜Žåº¦, ä»¥åŠå¼€å§‹æ¿€å˜çš„ä½ç½®
        // a.addColorStop(0, "rgba(255, 255, 255, 0)"), a.addColorStop(.5, "rgba(255, 255, 255, 0.2)"), a.addColorStop(1, "rgba(255, 255, 255, 0)");
        a.addColorStop(0, 'rgba(255, 255, 255, 0)'), a.addColorStop(0.1, 'rgba(255, 255, 255, 0.2)'), a.addColorStop(1, 'rgba(255, 255, 255, 0)');
        for (var b = -1, c = this.waves.length; ++b < c;) this.waves[b].strokeStyle = a;
        b = void 0, c = void 0, a = void 0;
      }
    }),
    b = $('#waves'),
    c = $(document).scrollTop(),
    d = $(document).scrollTop() + $(window).height(),
    e = b.offset().top + b.height(),
    f = b.offset().top;
  (c > e || f > d) && (a.running = !1, a.update()), $(window).bind('scroll', function() {
    c = $(document).scrollTop(), d = $(document).scrollTop() + $(window).height(), e = b.offset().top + b.height(), f = b.offset().top, c > e || f > d ? (a.running = !1, a.update()) : (a.running = !0, a.update());
  });
});

$(function() {
  // åœ¨çº¿å’¨è¯¢ç‚¹å‡»äº‹ä»¶
  $('.web-chat').click(function() {
    var chatUrl = '#';
    var iName = 'åœ¨çº¿å’¨è¯¢';
    var iWidth = 720;
    var iHeight = 600;
    // èŽ·å¾—çª—å£çš„åž‚ç›´ä½ç½®
    var iTop = (window.screen.availHeight - 30 - iHeight) / 2;
    // èŽ·å¾—çª—å£çš„æ°´å¹³ä½ç½®
    var iLeft = (window.screen.availWidth - 10 - iWidth) / 2;
    window.open(chatUrl, iName, 'height=' + iHeight + ',width=' + iWidth + ',top=' + iTop + ',left=' + iLeft + ',toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
  });
  // å¯¼èˆªæ¡æœ€åŽä¸€ä¸ªåŠ hidden-sm
  $('#bs-example-navbar-collapse-1 li:last').addClass('hidden-sm');
});

// æ”¶è—æœ¬ç«™
function AddFavorite(title, url) {
  try {
    window.external.addFavorite(url, title);
  } catch (e) {
    try {
      window.sidebar.addPanel(title, url, '');
    } catch (e) {
      alert('æŠ±æ­‰ï¼Œæ‚¨æ‰€ä½¿ç”¨çš„æµè§ˆå™¨æ— æ³•å®Œæˆæ­¤æ“ä½œã€‚\n\nåŠ å…¥æ”¶è—å¤±è´¥ï¼Œè¯·ä½¿ç”¨Ctrl+Dè¿›è¡Œæ·»åŠ ');
    }
  }
}
