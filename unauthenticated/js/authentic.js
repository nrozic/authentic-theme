/*!
 * Authentic Theme 17.72 (https://github.com/qooob/authentic-theme)
 * Copyright 2016 Ilia Rostovtsev <programming@rostovtsev.ru>
 * Licensed under MIT (https://github.com/qooob/authentic-theme/blob/master/LICENSE)
 */
;
try {
	t__wi_p.$
} catch (e) {
	t__wi_p = window
}
var $_url = $.url(t___wi.location),
	$__source_protocol = $_url.attr("protocol"),
	$__source_port = $_url.attr("port"),
	$__source_url = $_url.attr("source"),
	$__source_path = $_url.attr("path"),
	$___source_path = $_url.attr("path").replace(/^\//g, "").replace(/\/$/g, ""),
	$__source_file = $_url.attr("file"),
	$__source_dir = $_url.attr("directory"),
	$___source_dir = $_url.attr("directory").replace(/^\//g, "").replace(/\/$/g, ""),
	$__source_query = $_url.attr("query"),
	$source_path = $_url.attr("path").replace(/^\//g, ""),
	$__host_url = $_url.attr("host"),
	$__current_directory = $_url.attr("directory"),
	$__relative_url = $_url.attr("relative"),
	$___relative_url = $_url.attr("relative").replace(/^\//g, "").replace(/\/$/g, ""),
	$current_page = $_url.attr("path").replace(/^\//g, "").replace(/\/\//g, "/"),
	$current_directory = $__current_directory.replace(/^\//g, ""),
	$current_page_full = $_url.attr("path").replace(/\/\//g, "/"),
	$webprefix = $("body").data("webprefix"),
	$webprefix_full = "",
	$__source_host_complete = ($__source_protocol + "://" + $__host_url + ($__source_port ? ":" : "") + $__source_port + ("/" + $webprefix + $__source_path)).replace(/\/\//g, "/"),
	$access_level = t__wi_p.$("#wrapper").data("access-level"),
	$hostname = t__wi_p.$("#wrapper").data("hostname"),
	$t_av__usermin = $("body").data("usermin"),
	$t___license_vm = t__wi_p.$("#wrapper").data("virtual-server-license"),
	$t___license_cm = t__wi_p.$("#wrapper").data("server-manager-license"),
	$t_uri_virtualmin = t__wi_p.location.search == "?virtualmin" ? 1 : 0,
	$t_uri_cloudmin = t__wi_p.location.search == "?cloudmin" ? 1 : 0,
	$t_uri_webmail = t__wi_p.location.search == "?mail" ? 1 : 0,
	$t_uri_dashboard = t__wi_p.location.search == "?dashboard" ? 1 : 0,
	$g__v__title = t__wi_p.$("html head title").data("initial");
if ($webprefix) {
	$webprefix = ($webprefix + "/").replace(/\/\//g, "/");
	$webprefix_full = $webprefix;
	$webprefix_full = ($webprefix_full.replace(/\/$/g, "")).replace(/\/\//g, "/");
	if (!$webprefix_full.substr(0, 1) == "/") {
		$webprefix_full = "/" + $webprefix_full
	}
	if ($webprefix.substr(-1) == "/") {
		$webprefix = $webprefix.substr(0, $webprefix.length - 1)
	}
}
if ($current_page_full && $current_page_full.indexOf("/servers/link.cgi/") > -1) {
	$____link = $current_page_full.split("/");
	if (/^\d+$/.test($____link[3])) {
		$_____link = $____link[1] + "/" + $____link[2] + "/" + $____link[3];
		$webprefix = $webprefix + $_____link + "/";
		$webprefix_full = $webprefix_full + "/" + $_____link;
		$_____link = $webprefix;
		$_____link_full = $webprefix_full
	} else {
		$_____link = $webprefix;
		$_____link_full = (("/" + $webprefix.replace(/\/$/g, "")).replace(/\/\//g, "/")).replace(/\/$/g, "")
	}
} else {
	$_____link = $webprefix;
	$_____link_full = (("/" + $webprefix.replace(/\/$/g, "")).replace(/\/\//g, "/")).replace(/\/$/g, "")
}
if ($__source_host_complete.substr(-1) == "/") {
	$__source_host_complete = $__source_host_complete.substr(0, $__source_host_complete.length - 1)
}
moment.locale($("body").data("language"));

function prt(b) {
	return console.log(b)
}(function (b) {
	b.fn.replaceTagName = function (p) {
		var o = [],
			n = this.length;
		while (n--) {
			var l = document.createElement(p),
				a = this[n],
				q = a.attributes;
			for (var r = q.length - 1; r >= 0; r--) {
				var m = q[r];
				l.setAttribute(m.name, m.value)
			}
			l.innerHTML = a.innerHTML;
			b(a).after(l).remove();
			o[n - 1] = l
		}
		return b(o)
	}
})(t___wi.jQuery);

function array_swap(g) {
	var f = {};
	for (var d in g) {
		f[g[d]] = d
	}
	return f
}

function dblrclick(g) {
	var d = 0,
		f = false;
	return function (a) {
		if (f) {
			clearTimeout(d);
			f = false;
			return g.apply(this, arguments)
		} else {
			f = true;
			d = setTimeout(function () {
				f = false
			}, 300)
		}
	}
}

function t_uri_upd() {
	$t_uri_virtualmin = t__wi_p.location.search == "?virtualmin" ? 1 : 0, $t_uri_cloudmin = t__wi_p.location.search == "?cloudmin" ? 1 : 0, $t_uri_webmail = t__wi_p.location.search == "?mail" ? 1 : 0, $t_uri_dashboard = t__wi_p.location.search == "?dashboard" ? 1 : 0
}

function is_module(a) {
	if ($.inArray(a, t__wi_p.$("body").data("available-modules")) > -1) {
		return true
	} else {
		return false
	}
}

function lang(a) {
	return t__wi_p.$("body").data("language-strings") ? t__wi_p.$("body").data("language-strings")[a] : false
}

function tab_action(d, c) {
	if (document.forms[0] && document.forms[0][d]) {
		document.forms[0][d].value = c
	}
}

function parse_bool(b) {
	return !(/^(false|0)$/i).test(b) && !!b
}
$(function () {
	var a;
	setInterval(function () {
		if (a == 0) {
			$(".blinking-default:not(.hidden)").css("opacity", "1");
			a = 1
		} else {
			if (a = 1) {
				$(".blinking-default:not(.hidden)").css("opacity", "0");
				a = 0
			}
		}
	}, 900)
});

function t__lo__btn_md() {
	return '<span class="cspinner in-btn-md" style="position: relative"><span class="cspinner-icon dark" style="width:12px; height:12px; margin-right: 7px;"></span></span>'
}

function __ie__() {
	var b = 0;
	var c = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
	var a = !!navigator.userAgent.match(/Trident\/7.0/);
	var d = navigator.userAgent.indexOf("rv:11.0");
	if (c) {
		b = new Number(RegExp.$1)
	}
	if (navigator.appVersion.indexOf("MSIE 10") != -1) {
		b = 10
	}
	if (a && d != -1) {
		b = 11
	}
	return b
}

function get_selected_text() {
	if (t___wi.getSelection) {
		return t___wi.getSelection().toString()
	} else {
		if (document.selection) {
			return document.selection.createRange().text
		}
	}
	return ""
}

function loaders_dismiss() {
	if (settings_hotkeys_active) {
		$(window).on("keydown", function (b) {
			if (!b.ctrlKey && b.keyCode == 27 && t__wi_p.$(".loader-container").is(":visible")) {
				b.preventDefault();
				b.stopPropagation();
				t__wi_p.__lre()
			}
			if (b.ctrlKey && b.keyCode == 27 && t__wi_p.$("#_menu_loader").length) {
				b.preventDefault();
				b.stopPropagation();
				t__wi_p.__lle()
			}
		})
	}
}

function modal_dismiss() {
	$(".modal.in").find("[data-dismiss]").trigger("click")
}

function is_scrolled_into_view(d) {
	var b = $(d),
		h = $(window),
		g = h.scrollTop(),
		f = g + h.height(),
		a = b.offset().top,
		c = a + b.height();
	return ((c <= f) && (a >= g))
}

function search_control(b) {
	if (settings_hotkeys_active) {
		if (!(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_focus_search && b[settings_hotkey_toggle_modifier])) {
			return true
		}
		b.preventDefault();
		$search = t__wi_p.$(".form-control.sidebar-search").focus();
		return false
	}
}

function access_level() {
	return t__wi_p.$("body").data("level")
}

function dashboard_switch() {
	if (t__wi_p.$("body").data("dashboard") == "1") {
		return true
	} else {
		return false
	}
}

function dashboard_switch_set() {
	t__wi_p.t__s("open_dashboard");
	t__wi_p.__cms();
	t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi")
}

function messenger(d, g, f) {
	t__wi_p.Messenger().post({
		message: d,
		hideAfter: g,
		showCloseButton: true,
		type: f
	})
}

function shortcut_control_checker(b) {
	if (access_level() == 0) {
		return true
	} else {
		if (is_module($.url(("/" + b)).attr("directory").replace(/\//g, ""))) {
			return true
		} else {
			return false
		}
	}
}

function shortcut_control(b) {
	if (settings_hotkeys_active) {
		if (!(String.fromCharCode(b.which) == "1" && settings_hotkey_custom_1 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "2" && settings_hotkey_custom_2 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "3" && settings_hotkey_custom_3 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "4" && settings_hotkey_custom_4 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "5" && settings_hotkey_custom_5 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "6" && settings_hotkey_custom_6 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "7" && settings_hotkey_custom_7 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "8" && settings_hotkey_custom_8 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which) == "9" && settings_hotkey_custom_9 && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_favorites && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_sysinfo && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_slider && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_reload && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_webmail && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_usermin && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_cloudmin && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_virtualmin && b[settings_hotkey_toggle_modifier]) && !(String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_webmin && b[settings_hotkey_toggle_modifier])) {
			return true
		}
		if (String.fromCharCode(b.which) == "1" && settings_hotkey_custom_1) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_1) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_1)
		}
		if (String.fromCharCode(b.which) == "2" && settings_hotkey_custom_2) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_2) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_2)
		}
		if (String.fromCharCode(b.which) == "3" && settings_hotkey_custom_3) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_3) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_3)
		}
		if (String.fromCharCode(b.which) == "4" && settings_hotkey_custom_4) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_4) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_4)
		}
		if (String.fromCharCode(b.which) == "5" && settings_hotkey_custom_5) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_5) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_5)
		}
		if (String.fromCharCode(b.which) == "6" && settings_hotkey_custom_6) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_6) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_6)
		}
		if (String.fromCharCode(b.which) == "7" && settings_hotkey_custom_7) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_7) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_7)
		}
		if (String.fromCharCode(b.which) == "8" && settings_hotkey_custom_8) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_8) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_8)
		}
		if (String.fromCharCode(b.which) == "9" && settings_hotkey_custom_9) {
			b.preventDefault();
			shortcut_control_checker(settings_hotkey_custom_9) && t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + settings_hotkey_custom_9)
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_webmin && t__wi_p.$('.switch-toggle input[id="open_webmin"]') && !t__wi_p.$('.switch-toggle input[id="open_webmin"]').is(":checked") && (product_name() != "Usermin" && product_name() != "Mail")) {
			b.preventDefault();
			t__wi_p.$('.switch-toggle input[id="open_webmin"]').trigger("click")
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_virtualmin && t__wi_p.$('.switch-toggle input[id="open_virtualmin"]') && !t__wi_p.$('.switch-toggle input[id="open_virtualmin"]').is(":checked") && (product_name() != "Usermin" && product_name() != "Mail")) {
			b.preventDefault();
			t__wi_p.$('.switch-toggle input[id="open_virtualmin"]').trigger("click")
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_cloudmin && t__wi_p.$('.switch-toggle input[id="open_cloudmin"]') && !t__wi_p.$('.switch-toggle input[id="open_cloudmin"]').is(":checked") && (product_name() != "Usermin" && product_name() != "Mail")) {
			b.preventDefault();
			t__wi_p.$('.switch-toggle input[id="open_cloudmin"]').trigger("click")
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_usermin && t__wi_p.$('.switch-toggle input[id="open_usermin"]') && !t__wi_p.$('.switch-toggle input[id="open_usermin"]').is(":checked") && (product_name() != "Webmin" && product_name() != "Virtualmin" && product_name() != "Cloudmin")) {
			b.preventDefault();
			t__wi_p.$('.switch-toggle input[id="open_usermin"]').trigger("click")
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_key_webmail && t__wi_p.$('.switch-toggle input[id="open_webmail"]') && !t__wi_p.$('.switch-toggle input[id="open_webmail"]').is(":checked") && (product_name() != "Webmin" && product_name() != "Virtualmin" && product_name() != "Cloudmin")) {
			b.preventDefault();
			t__wi_p.$('.switch-toggle input[id="open_webmail"]').trigger("click")
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_toggle_slider) {
			b.preventDefault();
			t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_reload && t__wi_p.$('.user-links a[data-refresh="true"]')) {
			b.preventDefault();
			if (t__wi_p.$('iframe[name="page"]') && t__wi_p.$('iframe[name="page"]').attr("src") && t__wi_p.$('iframe[name="page"]').attr("src").indexOf("filemin") > -1) {
				if (t__wi_p.$('iframe[name="page"]').contents()) {
					t__wi_p.$('iframe[name="page"]').contents().find(".btn-group i.fa-refresh").parent("button").trigger("click")
				}
			} else {
				t__wi_p.$('.user-links a[data-refresh="true"]').trigger("click")
			}
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_sysinfo) {
			b.preventDefault();
			if (dashboard_switch() == true) {
				dashboard_switch_set()
			} else {
				t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi")
			}
		}
		if (String.fromCharCode(b.which).toLowerCase() == settings_hotkey_favorites) {
			b.preventDefault();
			if (settings_favorites) {
				if ($(".favorites-menu-outer").css("left") != "0px") {
					$(".user-link.favorites").trigger("click")
				} else {
					t__wi_p.$(".favorites-menu-outer").removeClass("hover")
				}
			}
		}
		return false
	}
}

function right_module_title() {
	$_right_menu_title = t__wi_p.$('iframe[name="page"]').contents().find("#headln2c");
	if ($_right_menu_title.find("font").text().length) {
		return $_right_menu_title.find("font").text()
	} else {
		if ($_right_menu_title.text().length) {
			return $_right_menu_title.text().text()
		} else {
			return "->"
		}
	}
}

function t__s(b) {
	t__wi_p.$('.switch-toggle input:not([id="' + b + '"])').each(function () {
		$(this).removeAttr("checked")
	}).promise().done(function () {
		t__wi_p.$("#" + b).prop("checked", true)
	});
	if (b == "open_webmin" || b == "open_usermin") {
		t__wi_p.history.pushState(null, null, $_____link_full + "/");
		t__wi_p.$("#wrapper").data("virtual-server", -1);
		t__wi_p.$("#wrapper").data("server-manager", -1);
		t__wi_p.$("#wrapper").data("webmail", -1)
	} else {
		if (b == "open_dashboard") {
			t__wi_p.history.pushState(null, null, $_____link_full + "/?dashboard");
			t__wi_p.$("#wrapper").data("virtual-server", -1);
			t__wi_p.$("#wrapper").data("server-manager", -1);
			t__wi_p.$("#wrapper").data("webmail", -1)
		} else {
			if (b == "open_virtualmin") {
				t__wi_p.history.pushState(null, null, $_____link_full + "/?virtualmin");
				t__wi_p.$("#wrapper").data("virtual-server", 2);
				t__wi_p.$("#wrapper").data("server-manager", -1);
				t__wi_p.$("#wrapper").data("webmail", -1)
			} else {
				if (b == "open_cloudmin") {
					t__wi_p.history.pushState(null, null, $_____link_full + "/?cloudmin");
					t__wi_p.$("#wrapper").data("virtual-server", -1);
					t__wi_p.$("#wrapper").data("server-manager", 2);
					t__wi_p.$("#wrapper").data("webmail", -1)
				} else {
					if (b == "open_webmail") {
						t__wi_p.history.pushState(null, null, $_____link_full + "/?mail");
						t__wi_p.$("#wrapper").data("virtual-server", -1);
						t__wi_p.$("#wrapper").data("server-manager", -1);
						t__wi_p.$("#wrapper").data("webmail", 2)
					}
				}
			}
		}
	}
}

function hide_mobile_menu() {
	if (t__wi_p.$(".mobile-menu-toggler:visible").length && $(".mobile-menu-toggler").attr("style") && $(".mobile-menu-toggler").attr("style").indexOf("ease") == -1) {
		if (t__wi_p.$(".__logo")) {
			t__wi_p.$(".__logo").transition({
				y: 0
			}, 1000)
		}
		t__wi_p.$("aside, .mobile-menu-toggler").transition({
			x: 0
		}, 300, function () {
			t__wi_p.$(".mobile-menu-toggler").removeClass("selected").find("button").removeClass("btn-primary").addClass("btn-primary");
			t__wi_p.$(".switch-toggle").css("display", "none");
			t__wi_p.$("aside").addClass("hidden-xs")
		})
	}
}

function f__l__filter_r() {
	var a = "-webkit-filter: grayscale(0) sepia(0) saturate(1) hue-rotate(0deg) invert(0) brightness(1) contrast(1); filter: grayscale(0) sepia(0) saturate(1) hue-rotate(0deg) invert(0) brightness(1) contrast(1);";
	t__wi_p.$(".visible-xs.mobile-menu-toggler").attr("style", "position: fixed;" + a);
	t__wi_p.$("aside, .visible-xs.mobile-menu-toggler").attr("style", "z-index: 10; overflow: visible; transform: translate(" + settings_leftmenu_width + "px, 0px);" + a);
	$('input[name="settings_grayscale_level_navigation"], input[name="settings_sepia_level_navigation"], input[name="settings_hue_level_navigation"], input[name="settings_invert_level_navigation"]').val(0);
	$('input[name="settings_saturate_level_navigation"], input[name="settings_brightness_level_navigation"], input[name="settings_contrast_level_navigation"]').val(1);
	var b = $('input[name="settings_grayscale_level_navigation"], input[name="settings_sepia_level_navigation"], input[name="settings_saturate_level_navigation"], input[name="settings_hue_level_navigation"], input[name="settings_invert_level_navigation"], input[name="settings_brightness_level_navigation"], input[name="settings_contrast_level_navigation"]');
	b.each(function () {
		$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val())
	})
}

function f__c__filter_r() {
	var b = "-webkit-filter: grayscale(0) saturate(1) hue-rotate(0deg); filter: grayscale(0) saturate(1) hue-rotate(0deg);";
	$("body").attr("style", b);
	t__wi_p.$("#content .loading-container").attr("style", b);
	$('input[name="settings_grayscale_level_content"], input[name="settings_hue_level_content"]').val(0);
	$('input[name="settings_saturate_level_content"]').val(1);
	var a = $('input[name="settings_grayscale_level_content"], input[name="settings_saturate_level_content"], input[name="settings_hue_level_content"]');
	a.each(function () {
		$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val())
	})
}

function t_sel_i() {
	if (t__wi_p.$(".form-control.sidebar-search").is(":focus")) {
		return
	}
	var a = t__wi_p.$("aside select");
	if (a.length) {
		a.removeAttr("onchange disabled");
		a.data("select2") ? a.select2("destroy") : false;
		a.unbind("select2:select");
		a.select2({
			minimumResultsForSearch: (!$.browser.mobile ? 5 : -1)
		});
		setTimeout(function () {
			a.data("select2").open();
			a.data("select2").close()
		}, 1);
		$create_link = $('a.navigation_module_trigger[data-href^="/virtual-server/domain_form.cgi?generic=1&amp;gparent="]');
		if (!$.url($create_link.data("href")).param("gparent")) {
			$create_link.data("href", $create_link.data("href") + a.val())
		}
		a.on("select2:select", function (b) {
			if (b.currentTarget.id === "dom") {
				t__vm_l(b.currentTarget.value);
				t_vm_r(b.currentTarget.value)
			} else {
				if (b.currentTarget.id === "sid") {
					t__cm_l(b.currentTarget.value);
					t_cm_r(b.currentTarget.value)
				}
			}
		});
		$.each($("select > option"), function () {
			if ($(this).attr("style") && $(this).attr("style").indexOf("italic") > -1) {
				if ($(".select2-selection > .select2-selection__rendered").text().trim() == $(this).text().trim()) {
					$(".select2-selection > .select2-selection__rendered").attr("style", "color: #e73c38 !important; font-style:italic !important; ")
				}
			}
		});
		a.on("select2:open", function (b) {
			$.each($("select > option"), function () {
				if ($(this).attr("style") && $(this).attr("style").indexOf("italic") > -1) {
					var c = $(this);
					setTimeout(function () {
						t__wi_p.$("body").find('li[id$="' + c.attr("value") + '"]').attr("style", "color: #e73c38 !important; font-style:italic !important; ")
					}, 1)
				}
			})
		});
		if (t__wi_p.$("aside select option").size() - 1 === 0) {
			t__wi_p.$(".select2 span").css("cursor", "default");
			t__wi_p.$(".select2 .select2-selection__arrow").remove();
			a.on("select2:open", function () {
				t__wi_p.$(".select2-container .select2-dropdown").css("opacity", "0")
			})
		}
	}
}

function __mss() {
	if (product_name(1).toLowerCase() == "cloudmin") {
		if (t__wi_p.$("aside").find("li.menu-container.menu-status.hidden").find("font").length > 0) {
			var g = t__wi_p.$("aside").find("li.menu-container.menu-status.hidden").find("font"),
				f = g.text(),
				d = g.attr("color");
			if (d && (d.indexOf("00ff00") || d.indexOf("008800") || d.indexOf("00aa00"))) {
				d = "success"
			} else {
				if (d && (d.indexOf("ff6600") || d.indexOf("ff00ff") || d.indexOf("ff22ff") || d.indexOf("ff44ff"))) {
					d = "warning"
				} else {
					if (d && (d.indexOf("ff0000") || d.indexOf("ff1100") || d.indexOf("aa0000") || d.indexOf("ff2200") || d.indexOf("ff4400"))) {
						d = "danger"
					} else {
						d = "info"
					}
				}
			}
			if (f == "Virtualmin") {
				f = "VM"
			}
			setTimeout(function () {
				var a = t__wi_p.$("aside .select2-selection__rendered");
				if (!a.find(".menu-status-label").length) {
					a.append('<span class="pull-right label label-' + d + ' menu-status-label bg-light-grey pointer-events-none">' + f + "</span>");
					var b = t__wi_p.$("aside .select2-selection__rendered .menu-status-label");
					b.animate({
						opacity: 1
					}, 500);
					b.on("mouseover", function () {
						$(this).removeClass("bg-light-grey")
					}).on("mouseout", function () {
						$(this).addClass("bg-light-grey")
					});
					a.on("mouseover", function () {
						$(this).find(".menu-status-label").removeClass("bg-light-grey")
					}).on("mouseout", function () {
						$(this).find(".menu-status-label").addClass("bg-light-grey")
					})
				}
			}, 300)
		}
	}
}

function f__l_reload() {
	var a = t__wi_p.$t_uri_virtualmin ? "virtualmin" : t__wi_p.$t_uri_cloudmin ? "cloudmin" : "webmin";
	if (a == "webmin") {
		t__wi_p.t__s("open_webmin");
		t__wm_l("open_webmin")
	} else {
		if (a == "virtualmin") {
			t__wi_p.t__s("open_virtualmin");
			t__vm_l(t__wi_p.$("aside select").val())
		} else {
			if (a == "cloudmin") {
				t__wi_p.t__s("open_cloudmin");
				t__cm_l(t__wi_p.$("aside select").val())
			}
		}
	}
}

function __lls() {
	t__wi_p.t___p__ll = 1;
	if (settings_loader_top && t__wi_p.t___p__xhr_r === 0) {
		t__wi_p.NProgress.start()
	}
	t__wi_p.$(".mCSB_container, .mCSB_dragger").css("top", "0");
	!t__wi_p.$("#_menu_loader").length && t__wi_p.$("body ul.navigation").before('<span id="_menu_loader" class="loading loading-sm"></span>');
	!t__wi_p.$("#loader-close-sm").length && t__wi_p.$("#_menu_loader").before('<div class="loader-close sm hidden" id="loader-close-sm"><i class="fa fa-times-circle pull-right hidden scale-08"></i></div>');
	t__wi_p.setTimeout(function () {
		t__wi_p.$("#loader-close-sm").removeClass("hidden")
	}, 3000);
	t__wi_p.$("body aside .mCSB_scrollTools").css("visibility", "hidden");
	t__wi_p.$("body ul.navigation").css("visibility", "hidden");
	t__wi_p.$("body ul.user-links").css("visibility", "hidden");
	t__wi_p.$("aside ul.user-html").addClass("invisible")
}

function __lle() {
	t__wi_p.$("aside ul.user-html").removeClass("invisible");
	if (settings_loader_top && t__wi_p.t___p__xhr_r === 0 && __num()) {
		t__wi_p.NProgress.done()
	}
	t__wi_p.$___ajax_requested_url = "_blank";
	t__wi_p.$("body aside .mCSB_scrollTools").css("visibility", "visible");
	t__wi_p.$("body ul.navigation").css("visibility", "visible");
	t__wi_p.$("body ul.user-links").css("visibility", "visible");
	t__wi_p.$("#_menu_loader").remove();
	t__wi_p.$("#loader-close-sm").remove();
	t__wi_p.t_sel_i();
	__mss();
	if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__dlm == "function") {
		$('iframe[name="page"]').get(0).contentWindow.__dlm()
	}
}

function t__au__c___i(v, m) {
	if (v == "c") {
		t__wi_p.$(".autocomplete-suggestions").remove();
		t__wi_p.$(".form-control.sidebar-search").removeAttr("disabled");
		t__wi_p.$(".form-control.sidebar-search").autocomplete("dispose");
		t__wi_p.$(".form-control.sidebar-search").val("");
		if (m) {
			return
		}
	}
	var q = {};
	$.each(t__wi_p.$('li:not(.menu-exclude):not(.user-link) > ul[id^="global_"].sub > li:not(.menu-exclude):not(.user-link) > a'), function (a, b) {
		q[($(this).attr("href").substring(0, 1) == "/" ? "" : "/") + $(this).attr("href")] = $.trim($(this).text())
	});
	t__wi_p.$('li > a[target="page"][data-href="/virtual-server/index.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/sysinfo.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/virtual-server/history.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/list_folders.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/list_ifolders.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/list_addresses.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/edit_forward.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/edit_auto.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/edit_auto.cgi"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/filter/"], li:not(.menu-exclude):not(.user-link) > a[target="page"][data-href="/mailbox/edit_sig.cgi"]').each(function (a, b) {
		q[$(this).attr("data-href")] = $.trim($(this).text())
	});
	var u = $.map(q, function (b, a) {
		return {
			value: b,
			url: a,
			data: {
				category: product_name_lang(1)
			}
		}
	});
	var p = {};
	if ($current_page_full == $_____link_full + "/custom/" || $current_page_full == $_____link_full + "/custom/index.cgi" || $current_page_full == $_____link_full + "/backup-config/" || $current_page_full == $_____link_full + "/backup-config/index.cgi" || $current_page_full == $_____link_full + "/usermin/" || $current_page_full == $_____link_full + "/usermin/index.cgi" || $current_page_full == $_____link_full + "/webmin/" || $current_page_full == $_____link_full + "/webmin/index.cgi" || $current_page_full == $_____link_full + "/acl/" || $current_page_full == $_____link_full + "/acl/index.cgi" || $current_page_full == $_____link_full + "/init/" || $current_page_full == $_____link_full + "/init/index.cgi" || $current_page_full == $_____link_full + "/mount/" || $current_page_full == $_____link_full + "/mount/index.cgi" || $current_page_full == $_____link_full + "/quota/" || $current_page_full == $_____link_full + "/quota/index.cgi" || $current_page_full == $_____link_full + "/fsdump/" || $current_page_full == $_____link_full + "/fsdump/index.cgi" || $current_page_full == $_____link_full + "/inittab/" || $current_page_full == $_____link_full + "/inittab/index.cgi" || $current_page_full == $_____link_full + "/logrotate/" || $current_page_full == $_____link_full + "/logrotate/index.cgi" || $current_page_full == $_____link_full + "/mailcap/" || $current_page_full == $_____link_full + "/mailcap/index.cgi" || $current_page_full == $_____link_full + "/pam/" || $current_page_full == $_____link_full + "/pam/index.cgi" || $current_page_full == $_____link_full + "/proc/" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_user.cgi" || $current_page_full == $_____link_full + "/proc/index_size.cgi" || $current_page_full == $_____link_full + "/proc/index_cpu.cgi" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_search.cgi" || $current_page_full == $_____link_full + "/cron/" || $current_page_full == $_____link_full + "/cron/index.cgi" || $current_page_full == $_____link_full + "/syslog/" || $current_page_full == $_____link_full + "/syslog/index.cgi" || $current_page_full == $_____link_full + "/useradmin/" || $current_page_full == $_____link_full + "/useradmin/index.cgi" || $current_page_full == $_____link_full + "/apache/" || $current_page_full == $_____link_full + "/apache/index.cgi" || $current_page_full == $_____link_full + "/bind8/" || $current_page_full == $_____link_full + "/bind8/index.cgi" || $current_page_full == $_____link_full + "/dhcpd/" || $current_page_full == $_____link_full + "/dhcpd/index.cgi" || $current_page_full == $_____link_full + "/dovecot/" || $current_page_full == $_____link_full + "/dovecot/index.cgi" || $current_page_full == $_____link_full + "/ldap-server/" || $current_page_full == $_____link_full + "/ldap-server/index.cgi" || $current_page_full == $_____link_full + "/virtualmin-nginx/" || $current_page_full == $_____link_full + "/virtualmin-nginx/index.cgi" || $current_page_full == $_____link_full + "/fetchmail/" || $current_page_full == $_____link_full + "/fetchmail/index.cgi" || $current_page_full == $_____link_full + "/mysql/" || $current_page_full == $_____link_full + "/mysql/index.cgi" || $current_page_full == $_____link_full + "/mysql/edit_dbase.cgi" || $current_page_full == $_____link_full + "/postgresql/" || $current_page_full == $_____link_full + "/postgresql/index.cgi" || $current_page_full == $_____link_full + "/postgresql/edit_dbase.cgi" || $current_page_full == $_____link_full + "/postfix/" || $current_page_full == $_____link_full + "/postfix/index.cgi" || $current_page_full == $_____link_full + "/procmail/" || $current_page_full == $_____link_full + "/procmail/index.cgi" || $current_page_full == $_____link_full + "/proftpd/" || $current_page_full == $_____link_full + "/proftpd/index.cgi" || $current_page_full == $_____link_full + "/mailboxes/" || $current_page_full == $_____link_full + "/mailboxes/index.cgi" || $current_page_full == $_____link_full + "/mailboxes/list_mail.cgi" || $current_page_full == $_____link_full + "/mailbox/" || $current_page_full == $_____link_full + "/mailbox/index.cgi" || $current_page_full == $_____link_full + "/samba/" || $current_page_full == $_____link_full + "/samba/index.cgi" || $current_page_full == $_____link_full + "/spam/" || $current_page_full == $_____link_full + "/spam/index.cgi" || $current_page_full == $_____link_full + "/squid/" || $current_page_full == $_____link_full + "/squid/index.cgi" || $current_page_full == $_____link_full + "/sshd/" || $current_page_full == $_____link_full + "/sshd/index.cgi" || $current_page_full == $_____link_full + "/webalizer/" || $current_page_full == $_____link_full + "/webalizer/index.cgi" || $current_page_full == $_____link_full + "/cpan/" || $current_page_full == $_____link_full + "/cpan/index.cgi" || $current_page_full == $_____link_full + "/htaccess-htpasswd/" || $current_page_full == $_____link_full + "/htaccess-htpasswd/index.cgi" || $current_page_full == $_____link_full + "/status/" || $current_page_full == $_____link_full + "/status/index.cgi" || $current_page_full == $_____link_full + "/net/" || $current_page_full == $_____link_full + "/net/index.cgi" || $current_page_full == $_____link_full + "/tcpwrappers/" || $current_page_full == $_____link_full + "/tcpwrappers/index.cgi" || $current_page_full == $_____link_full + "/fdisk/" || $current_page_full == $_____link_full + "/fdisk/index.cgi" || $current_page_full == $_____link_full + "/fail2ban/" || $current_page_full == $_____link_full + "/fail2ban/index.cgi" || $current_page_full == $_____link_full + "/nis/" || $current_page_full == $_____link_full + "/nis/index.cgi" || $current_page_full == $_____link_full + "/passwd/" || $current_page_full == $_____link_full + "/passwd/index.cgi") {
		$(t__wi_p.$('iframe[name="page"]').contents().find(".panel-body a[href]:not([href*='javascript'],[href*='list_users.cgi?dom'],[href*='edit_hdparm.cgi?disk'],[href*='blink.cgi?disk'],[href*='smart-status/index.cgi?drive'],[href*='help.cgi'],[href*='edit_user.cgi?new='],[href*='edit_user.cgi?idx='],[href*='edit_recipe.cgi'],[href*='up.cgi'],[href*='down.cgi'],[href*='virt_index.cgi'],[href*='save_log.cgi'],[href*='backup.cgi'],[href*='activate.cgi'],[href*='#'])")).each(function (a, b) {
			if ($current_page_full == $_____link_full + "/syslog/" || $current_page_full == $_____link_full + "/syslog/index.cgi") {
				p["/" + $current_page + $(this).parent("td").next("td.td_tag").next("td.td_tag").next("td.td_tag").find("a").attr("href")] = $.trim($(this).text())
			} else {
				if ($current_page_full == $_____link_full + "/backup-config/" || $current_page_full == $_____link_full + "/backup-config/index.cgi") {
					$description = $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text())
				} else {
					if ($current_page_full == $_____link_full + "/mount/" || $current_page_full == $_____link_full + "/mount/index.cgi" || $current_page_full == $_____link_full + "/quota/" || $current_page_full == $_____link_full + "/quota/index.cgi") {
						$description = $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text())
					} else {
						if ($current_page_full == $_____link_full + "/fsdump/" || $current_page_full == $_____link_full + "/fsdump/index.cgi") {
							$description = $.trim($(this).parents("td").next("td").next("td").next("td").find("label").find("tt").find("tt").text())
						} else {
							if ($current_page_full == $_____link_full + "/proc/" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_user.cgi" || $current_page_full == $_____link_full + "/proc/index_size.cgi" || $current_page_full == $_____link_full + "/proc/index_cpu.cgi" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_search.cgi") {
								if ($current_page_full == $_____link_full + "/proc/index_size.cgi" || $current_page_full == $_____link_full + "/proc/index_cpu.cgi") {
									$description = $.trim($(this).parent("td").next("td.td_tag").text()) + " — " + $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text()) + " - " + $.trim($(this).parents("td").next("td").next("td").next("td").text())
								} else {
									if ($current_page_full == $_____link_full + "/proc/index_search.cgi") {
										$description = $.trim($(this).parent("td").next("td.td_tag").text()) + " — " + $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text()) + " - " + $.trim($(this).parents("td").next("td").next("td").next("td").next("td").text())
									} else {
										$description = $.trim($(this).parent("td").next("td.td_tag").text()) + " — " + $.trim($(this).parents("td").next("td").next("td").next("td").text())
									}
								}
							} else {
								if ($current_page_full == $_____link_full + "/useradmin/" || $current_page_full == $_____link_full + "/useradmin/index.cgi") {
									$description = $.trim($(this).parents("td").next("td").find("label").text()) + " — " + $(this).text() + ":" + $.trim($(this).parents("td").next("td").next("td").find("label").text()) + " - " + $.trim($(this).parents("td").next("td").next("td").next("td").next("td").find("label").text()) + ", " + $.trim($(this).parents("td").next("td").next("td").next("td").next("td").next("td").find("label").text())
								} else {
									if ($current_page_full == $_____link_full + "/mailboxes/list_mail.cgi" || $current_page_full == $_____link_full + "/mailbox/" || $current_page_full == $_____link_full + "/mailbox/index.cgi") {
										$description = $.trim($(this).parents("td").next("td").next("td").next("td").find("label").text()) + " — " + $.trim($(this).parents("td").next("td").find("label").text()) + " [" + $.trim($(this).parents("td").next("td").next("td").find("label").text()) + "]"
									} else {
										if ($current_page_full == $_____link_full + "/cpan/" || $current_page_full == $_____link_full + "/cpan/index.cgi") {
											$description = $.trim($(this).parents("td").next("td").next("td").find("label").text())
										} else {
											if ($current_page_full == $_____link_full + "/fdisk/" || $current_page_full == $_____link_full + "/fdisk/index.cgi") {
												$description = $.trim($(this).parent("td").next("td.td_tag").text()) + " - " + $.trim($(this).parent("td").next("td.td_tag").next("td.td_tag").text())
											} else {
												$description = $.trim($(this).parent("td").next("td.td_tag").text())
											}
										}
									}
								}
							}
						}
					}
				}
				$description ? $_description = true : $_description = false;
				p[($(this).attr("href").substring(0, 1) == "/" ? "" : "/") + $current_page + $(this).attr("href")] = $.trim($(this).text()) + ($_description ? " (" : "") + $description + ($_description ? ")" : "")
			}
		})
	}
	var o = $.map(p, function (b, a) {
		return {
			value: b,
			url: a,
			data: {
				category: right_module_title()
			}
		}
	});
	var n = {};
	$.each(t__wi_p.$('li:not(.menu-exclude):not(.user-link) > ul.sub:not([id^="global_"]) > li:not(.menu-exclude):not(.user-link) > a'), function (a, b) {
		n[($(this).attr("href").substring(0, 1) == "/" ? "" : "/") + $(this).attr("href")] = $.trim($(this).text())
	});
	t__wi_p.$('li:not(.menu-exclude):not(.user-link) > a[target="page"]:not([data-href="/acl/edit_user.cgi"],[data-href="/virtual-server/index.cgi"],[data-href="/sysinfo.cgi"],[data-href="/virtual-server/history.cgi"], [data-href="/mailbox/list_folders.cgi"], [data-href="/mailbox/list_ifolders.cgi"], [data-href="/mailbox/list_addresses.cgi"], [data-href="/filter/edit_forward.cgi"], [data-href="/filter/edit_auto.cgi"], [data-href="/filter/edit_auto.cgi"], [data-href="/filter/"], [data-href="/mailbox/edit_sig.cgi"])').each(function (a, b) {
		if (product_name(1).toLowerCase() != "usermin" && !dashboard_switch()) {
			n[$(this).attr("data-href")] = $.trim($(this).text())
		}
	});
	var w = $.map(n, function (b, a) {
		return {
			value: b,
			url: a,
			data: {
				category: t__wi_p.$("aside .select2-selection__rendered").text() ? '<span style="font-style: italic">' + t__wi_p.$("aside .select2-selection__rendered").clone().children().remove().end().text() + "</span>" : product_name_lang(0)
			}
		}
	});
	var t = {};
	t__wi_p.$("aside select option").each(function () {
		t[$(this).val() + ":::" + $(this).parent("select").attr("name")] = $.trim($(this).text())
	});
	var r = $.map(t, function (b, a) {
		return {
			value: b,
			url: a,
			data: {
				category: t__wi_p.$("aside select").data("autocomplete-title")
			}
		}
	});
	if (t__wi_p.location.search) {
		var s = w.concat(o).concat(r).concat(u)
	} else {
		var s = r.concat(o).concat(w).concat(u)
	}
	t__wi_p.$(".form-control.sidebar-search").on("keydown", function (a) {
		if (a.keyCode == 34 || a.keyCode == 33 || a.keyCode == 20 || a.keyCode == 17 || a.keyCode == 16 || a.keyCode == 9) {
			a.preventDefault();
			a.stopPropagation()
		}
	});
	t__wi_p.$(".form-control.sidebar-search").autocomplete({
		lookup: s,
		onSelect: function (a) {
			if (dashboard_switch() === true && t__wi_p.location.search === "?dashboard" && access_level() != 2 && access_level() != 4) {
				t__wi_p.t__s("open_webmin")
			}
			$(this).val("").blur();
			hide_mobile_menu();
			if (a.url.substring(0, 1) == "/") {
				var b = t__wi_p.$("body").find('a[href="' + a.url + '"]').attr("target");
				if (b && b == "_parent") {
					t__wi_p.location.href = t__wi_p.$("body").find('a[href="' + a.url + '"]').attr("href")
				} else {
					t__wi_p.$('iframe[name="page"]').attr("src", a.url.indexOf($_____link_full) > -1 ? a.url : $_____link_full + a.url)
				}
			} else {
				if (a.url && a.url.indexOf(":::") > -1) {
					t__wi_p.__lls();
					t__wi_p.$("select").val(a.url.split(":::")[0]).trigger("change").trigger("select2:select")
				} else {
					t__wi_p.__lls()
				}
			}
		},
		groupBy: "category",
		noSuggestionNotice: "No results found"
	})
}

function container_fluid_size() {
	t__wi_p.f__c_view();
	if (!t__wi_p.$(".mobile-menu-toggler").hasClass("selected")) {
		t__wi_p.$("aside").addClass("hidden-xs");
		t__wi_p.$("aside").css("transform", "translate(" + settings_leftmenu_width + "px, 0px)");
		t__wi_p.$(".switch-toggle").css("display", "table");
		if (t__wi_p.$(".__logo") && !t__wi_p.$(".mobile-menu-toggler:visible").length) {
			t__wi_p.$(".__logo").transition({
				y: "-140px"
			}, 700, function () {})
		} else {
			if (t__wi_p.$(".__logo")) {
				t__wi_p.$(".__logo").css("transform", "translate(0px, 0px)")
			}
		}
	}
	if (settings_notification_slider_fixed !== true || t__wi_p.$(".mobile-menu-toggler:visible").length) {
		n___p__f(0)
	} else {
		n___p__f(1)
	}
}

function __cms() {
	t__wi_p.$(".navigation > li:not('.has-sub')").removeClass("sub_active").find("span.current-large").remove();
	t__wi_p.$(".navigation > li > ul.sub > li").removeClass("sub_active").find("span.current").remove();
	t__wi_p.$(".navigation > li.has-sub").removeClass("active");
	t__wi_p.$(".navigation > li > ul.sub").hide();
	t__wi_p.$(".navigation > li > a > i.fa.fa-folder-open-o").removeClass("fa-folder-open-o")
}

function __is_same_origin(b) {
	if ((b.attr("href") && (b.attr("href").match("^http:") || b.attr("href").match("^https:") || b.attr("href").match("^ftp:")) && b.attr("target") != "page" && $.url(b.attr("href")).attr("host") != $__host_url) || b.attr("data-href") && (b.attr("data-href").match("^http:") || b.attr("data-href").match("^https:") || b.attr("data-href").match("^ftp:")) && $.url(b.attr("data-href")).attr("host") != $__host_url) {
		return 0
	} else {
		return 1
	}
}

function settings_update() {
	$.each(t__wi_p.$('iframe[name="page"]').contents().find("#atsettings .ui_form").serializeArray(), function (d, f) {
		if (f.value == "true" || f.value == "false") {
			if (f.value == "true") {
				var g = true
			} else {
				if (f.value == "false") {
					var g = false
				}
			}
		} else {
			var g = f.value
		}
		window[f.name] = g;
		t__wi_p[f.name] = g
	})
}

function loader_start_config() {
	$("body").on("click", 'a[href^="http"], a[href^="https"], a[href^="ftp"], a[href^="ftps"]', function (b) {
		if (!__is_same_origin($(this))) {
			$(this).attr("target", "_blank");
			t__wi_p.__lre()
		}
	});
	t__wi_p.$.each($('ul.navigation a[href^="http"], ul.navigation a[href^="https"], ul.navigation a[href^="ftp"], ul.navigation a[href^="ftps"], ul.navigation a[data-href^="http"], ul.navigation a[data-href^="https"], ul.navigation a[data-href^="ftp"], ul.navigation a[data-href^="ftps"]'), function () {
		$(this).removeClass("navigation_module_trigger").parents("li").addClass("navigation_external");
		$(this).attr("target", "_blank");
		$(this).attr("href", $(this).data("href"));
		$(this).removeAttr("data-href")
	})
}
loader_start_config();

function t__wm_l(b) {
	t_uri_upd();
	if (dashboard_switch() == false || $current_page_full == $_____link_full + "/webmin/edit_themes.cgi") {
		$.ajax({
			type: "GET",
			url: $_____link_full + "/index.cgi/?xhr-navigation=1&xhr-navigation-type=" + (b == "open_webmail" ? "webmail" : "webmin"),
			data: false,
			dataType: "text",
			success: function (a) {
				t__wi_p.$("body ul.navigation").html(a)
			}
		});
		t__m_b()
	}
}

function t__vm_l(b) {
	t_uri_upd();
	$.ajax({
		type: "GET",
		url: $_____link_full + "/index.cgi/?xhr-navigation=1&xhr-navigation-type=virtualmin" + (b ? ("&dom=" + b) : (settings_right_virtualmin_default ? ("&dom=" + settings_right_virtualmin_default) : false)),
		data: false,
		dataType: "text",
		success: function (a) {
			t__wi_p.$("body ul.navigation").html(a)
		}
	});
	t__m_b()
}

function t__cm_l(b) {
	t_uri_upd();
	$.ajax({
		type: "GET",
		url: $_____link_full + "/index.cgi/?xhr-navigation=1&xhr-navigation-type=cloudmin" + ((b || b === 0) ? ("&sid=" + b) : (settings_right_cloudmin_default ? ("&sid=" + settings_right_cloudmin_default) : false)),
		data: false,
		dataType: "text",
		success: function (a) {
			t__wi_p.$("body ul.navigation").html(a)
		}
	});
	t__m_b()
}

function t__m_b() {
	$.ajax({
		type: "GET",
		url: $_____link_full + "/index.cgi/?xhr-buttons=1&xhr-buttons-type=" + (($t_uri_virtualmin || $t_uri_cloudmin) ? 1 : 0) + "",
		data: false,
		dataType: "text",
		success: function (b) {
			t__wi_p.$("body ul.user-links").html(b)
		}
	})
}

function t__wm_r() {
	$("body").append('<span id="____switch"></span>');
	$.ajax({
		type: "GET",
		url: $_____link_full + "/index.cgi/?xhr-default=1",
		data: false,
		dataType: "text",
		success: function (b) {
			$("#____switch").html(b);
			$____switch = $("#____switch").text();
			t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + (($access_level == 3 && is_module("mailbox") && $t_uri_webmail) ? "/mailbox/index.cgi?id=INBOX" : (($____switch.substring(0, 1) == "/" ? "" : "/") + $____switch)));
			$("#____switch").remove()
		}
	})
}

function t_vm_r(c) {
	var d;
	if (c !== false) {
		d = "virtual-server/summary_domain.cgi?dom=" + c
	} else {
		if (settings_right_virtualmin_default == "sysinfo.cgi" || settings_right_virtualmin_default == "") {
			d = "sysinfo.cgi"
		} else {
			if (settings_right_virtualmin_default == "index.cgi") {
				d = "virtual-server/index.cgi"
			} else {
				d = "virtual-server/summary_domain.cgi?dom=" + settings_right_virtualmin_default
			}
		}
	}
	t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/" + d)
}

function t_cm_r(c) {
	var d;
	if (c !== false) {
		d = "server-manager/edit_serv.cgi?id=" + c
	} else {
		if (settings_right_cloudmin_default == "sysinfo.cgi" || settings_right_cloudmin_default == "") {
			d = "sysinfo.cgi"
		} else {
			if (settings_right_cloudmin_default == "index.cgi") {
				d = "server-manager/index.cgi"
			} else {
				d = "server-manager/edit_serv.cgi?id=" + settings_right_cloudmin_default
			}
		}
	}
	t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/" + d)
}

function t__m(d, g, f) {
	if (d === "open_virtualmin") {
		t__vm_l(false);
		if ((settings_right_reload == true || g === true) && f !== true) {
			t_vm_r(false)
		}
	} else {
		if (d === "open_cloudmin") {
			t__cm_l(false);
			if ((settings_right_reload == true || g === true) && f !== true) {
				t_cm_r(false)
			}
		} else {
			t__wm_l(d);
			if ((settings_right_reload == true || g === true) && f !== true) {
				t__wm_r()
			}
		}
	}
}

function ___dlm(c, d) {
	if (d) {
		__cms()
	}
	t__wi_p.$('a[href="' + c + '"]:first').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
}

function __samn() {
	return ':not(.menu-exclude-link, [data-href="/webmin/refresh_modules.cgi"])'
}

function __sam(h, k) {
	if (k === false) {
		var j = false,
			m = "href";
		if (t__wi_p.$('a[data-href="' + h + '"]' + __samn() + "").length) {
			j = "=";
			m = "data-href"
		} else {
			if (t__wi_p.$('a[data-href="' + h + '/"]' + __samn() + "").length) {
				j = "=";
				h = h + "/";
				m = "data-href"
			} else {
				if (t__wi_p.$('a[data-href="/' + h + '"]' + __samn() + "").length) {
					j = "=";
					h = "/" + h;
					m = "data-href"
				} else {
					if (t__wi_p.$('a[data-href^="' + h + '"]' + __samn() + "").length) {
						j = "^=";
						m = "data-href"
					} else {
						if (t__wi_p.$('a[data-href^="' + h + '/"]' + __samn() + "").length) {
							j = "^=";
							h = h + "/";
							m = "data-href"
						} else {
							if (t__wi_p.$('a[data-href^="/' + h + '"]' + __samn() + "").length) {
								j = "^=";
								h = "/" + h;
								m = "data-href"
							} else {
								if (t__wi_p.$('a[data-href$="' + h + '"]' + __samn() + "").length) {
									j = "$=";
									m = "data-href"
								} else {
									if (t__wi_p.$('a[data-href$="' + h + '/"]' + __samn() + "").length) {
										j = "$=";
										h = h + "/";
										m = "data-href"
									} else {
										if (t__wi_p.$('a[data-href$="/' + h + '"]' + __samn() + "").length) {
											j = "$=";
											h = "/" + h;
											m = "data-href"
										} else {
											if (t__wi_p.$('a[data-href*="' + h + '"]' + __samn() + "").length) {
												j = "*=";
												m = "data-href"
											} else {
												if (m === "href") {
													if (t__wi_p.$('a[href="' + h + '"]' + __samn() + "").length) {
														j = "="
													} else {
														if (t__wi_p.$('a[href="' + h + '/"]' + __samn() + "").length) {
															j = "=";
															h = h + "/"
														} else {
															if (t__wi_p.$('a[href="/' + h + '"]' + __samn() + "").length) {
																j = "=";
																h = "/" + h
															} else {
																if (t__wi_p.$('a[href^="' + h + '"]' + __samn() + "").length) {
																	j = "^="
																} else {
																	if (t__wi_p.$('a[href^="' + h + '/"]' + __samn() + "").length) {
																		j = "^=";
																		h = h + "/"
																	} else {
																		if (t__wi_p.$('a[href^="/' + h + '"]' + __samn() + "").length) {
																			j = "^=";
																			h = "/" + h
																		} else {
																			if (t__wi_p.$('a[href$="' + h + '"]' + __samn() + "").length) {
																				j = "$="
																			} else {
																				if (t__wi_p.$('a[href$="' + h + '/"]' + __samn() + "").length) {
																					j = "$=";
																					h = h + "/"
																				} else {
																					if (t__wi_p.$('a[href$="/' + h + '"]' + __samn() + "").length) {
																						j = "$=";
																						h = "/" + h
																					} else {
																						if (t__wi_p.$('a[href*="' + h + '"]' + __samn() + "").length) {
																							j = "*="
																						}
																					}
																				}
																			}
																		}
																	}
																}
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
		if (j) {
			if ((($current_page_full && $current_page_full.indexOf("/webmin/edit_themes.cgi") > -1) || ($source_path == $_____link + "settings-editor_read.cgi" || $source_path == $_____link + "settings-upload.cgi")) && t__wi_p.location.search != "?updating-webmin-theme" && (t__wi_p.$t_uri_virtualmin || t__wi_p.$t_uri_cloudmin)) {
				t__wi_p.__cms();
				return
			}
			__cms();
			t__wi_p.$("a[" + m + "" + j + '"' + h + '"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
		}
	} else {
		if ($__source_file == "settings-editor_read.cgi" || $__source_file == "settings-upload.cgi") {
			__sam("webmin/", false);
			return
		}
		if ($__source_path === "/config.cgi") {
			__sam($__source_query + "/", false);
			return
		}
		if ($__source_path === "/phpini/list_ini.cgi") {
			__sam($__source_query.replace(".", "%2E"), false);
			return
		}
		custom_url = "auto";
		if (custom_url != "auto") {
			$current_page = custom_url
		} else {
			$current_page = $_url.attr("path").replace(/^\//g, "")
		}
		if ($("#headln2l a").attr("href")) {
			if ($("#headln2l a").attr("href").indexOf(".cgi") >= 0) {
				$current_page_webmin = 1
			} else {
				$current_page_webmin = 0
			}
		} else {
			$current_page_webmin = 0
		}(($current_page.split("/")[0] == "virtual-server" || $current_page.split("/")[0] == "server-manager") && !$current_page_webmin && (t__wi_p.$("#wrapper").data("virtual-server") != -1 || t__wi_p.$("#wrapper").data("server-manager") != -1)) ? $current_page = $current_page.split("/")[0] + "/" + $current_page.split("/")[1]: $current_page = $current_page.split("/")[0] + "/";
		$current_page_search = t__wi_p.$('iframe[name="page"]').get(0) ? t__wi_p.$('iframe[name="page"]').get(0).contentWindow.location.search : 0;
		var l = [];
		t__wi_p.$('li > ul.sub li:not(.menu-exclude):not(.user-link) a:not(.menu-exclude-link, [data-href="/webmin/refresh_modules.cgi"])').each(function () {
			if ($(this).attr("href").substring(0, 1) == "/") {
				l.push($(this).attr("href").substring(1))
			} else {
				l.push($(this).attr("href"))
			}
		});
		if ((product_name() !== "Virtualmin" && $__source_file.indexOf("save_log.cgi") === -1) && (product_name() !== "Virtualmin" && $__source_file.indexOf("edit_log.cgi") === -1) && ($current_page_full && $current_page_full.indexOf("/servers/link.cgi/") === -1) && (l.indexOf($current_page) > -1 || l.indexOf(($current_page + "index.cgi")) > -1 || l.indexOf($current_page + $current_page_search) > -1 || l.indexOf(($current_page_full)) > -1 || l.indexOf(($current_page_full.substring(1))) > -1)) {
			if (product_name() !== "Virtualmin" && product_name() !== "Cloudmin") {
				__cms()
			}
			if (t__wi_p.$('a[href="' + $current_page + 'index.cgi"]').length) {
				$current_page = $current_page + "index.cgi"
			} else {
				if (t__wi_p.$('a[href="/' + $current_page + 'index.cgi"]').length) {
					$current_page = "/" + $current_page + "index.cgi"
				} else {
					if (t__wi_p.$('a[href="/' + $current_page + '"]').length) {
						$current_page = "/" + $current_page
					} else {
						if (t__wi_p.$('a[href="/' + $current_page + $current_page_search + '"]').length) {
							$current_page = "/" + $current_page + $current_page_search
						} else {
							if (t__wi_p.$('a[href="' + $current_page + $current_page_search + '"]').length) {
								$current_page = $current_page + $current_page_search
							}
						}
					}
				}
			}
			if (t__wi_p.$('a[href="' + $current_page + '"]').length) {
				t__wi_p.$('a[href="' + $current_page + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
			} else {
				if (t__wi_p.$('a[href="' + $current_page_full + '"]').length) {
					t__wi_p.$('a[href="' + $current_page_full + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
				} else {
					if (t__wi_p.$('a[href="' + $current_page_full.substring(1) + '"]').length) {
						t__wi_p.$('a[href="' + $current_page_full.substring(1) + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
					}
				}
			}
		} else {
			if ($t_uri_virtualmin || $t_uri_cloudmin) {
				$current_page_with_path = $_url.attr("path").substring(1);
				if ($current_page_with_path == "virtual-server/webminlog") {
					$current_page_with_path = "webminlog/search.cgi?"
				} else {
					if ($current_page_with_path == "virtual-server/syslog") {
						$current_page_with_path = "syslog/save_log.cgi?"
					} else {
						if ($current_page_with_path == "virtual-server/apache") {
							$current_page_with_path = "apache/virt_index.cgi?"
						} else {
							if ($current_page_with_path == "virtual-server/webalizer") {
								$current_page_with_path = "webalizer/edit_log.cgi?"
							} else {
								if ($current_page_with_path == "webminlog/search.cgi") {
									$current_page_with_path = "webminlog/search.cgi?"
								}
							}
						}
					}
				}
				if ($current_page_with_path == "apache/virt_index.cgi?" || $current_page_with_path == "apache/virt_index.cgi") {
					__cms();
					t__wi_p.$('a[href^="/' + $current_page_with_path + "?" + $_url.attr("query") + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
				} else {
					if ($current_page_with_path == "syslog/save_log.cgi") {
						if ($_url.attr("query").indexOf("access_log") > -1) {
							__cms();
							t__wi_p.$('a[href$="access%5Flog"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
						} else {
							if ($_url.attr("query").indexOf("error_log") > -1) {
								__cms();
								t__wi_p.$('a[href$="error%5Flog"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
							}
						}
					} else {
						if ($current_page_with_path == "webalizer/edit_log.cgi" || $current_page_with_path == "webalizer/index.cgi") {
							__cms();
							t__wi_p.$('a[href*="webalizer/"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
						} else {
							if ($current_page_with_path == "config.cgi" || $current_page_with_path == "/config.cgi") {
								__cms();
								t__wi_p.$('a[href*="config.cgi"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
							} else {
								if ($current_page_with_path == "webminlog/search.cgi?") {
									__cms();
									t__wi_p.$('a[href^="/webminlog/search.cgi"]:first' + __samn() + "").parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
								} else {
									if (typeof $current_page_with_path != "undefined" && t__wi_p.$('a[href*="' + $current_page_with_path + '"]:first' + __samn() + "").length > 0) {
										__cms();
										t__wi_p.$('a[href*="' + $current_page_with_path + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
									}
								}
							}
						}
					}
				}
			}
		}
		var n = [];
		t__wi_p.$("a.navigation_module_trigger").each(function () {
			if ($(this).hasClass("navigation_trigger_single_link")) {
				n.push($(this).data("href"))
			} else {
				if ($(this).data("href") != "/virtual-server/index.cgi") {
					n.push($(this).data("href"))
				} else {
					if ($(this).data("href") == "/virtual-server/index.cgi") {
						n.push("/virtual-server");
						n.push("/virtual-server/index.cgi")
					}
				}
			}
		});
		var l = [];
		t__wi_p.$('li > ul.sub li:not(.menu-exclude):not(.user-link) a:not(.menu-exclude-link, [data-href="/webmin/refresh_modules.cgi"])').each(function () {
			if ($(this).attr("href").substring(0, 1) == "/") {
				l.push($(this).attr("href").substring(1))
			} else {
				l.push($(this).attr("href"))
			}
		});
		$___current_page_search = $current_page.replace(/\/$/, "") + $current_page_search;
		$_current_page_search = "/" + $current_page.replace(/\/$/, "") + $current_page_search;
		if ($current_page_full == $_____link_full + "/virtual-server/history.cgi") {
			__cms();
			t__wi_p.$('a[data-href="/virtual-server/history.cgi"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
		} else {
			if ($current_page_full == $_____link_full + "/server-manager/index.cgi") {
				__cms();
				t__wi_p.$('a[data-href="/server-manager/index.cgi"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
			} else {
				if ($current_page_full == $_____link_full + "/webmin_search.cgi") {
					__cms()
				} else {
					if ((n.indexOf($_current_page_search) > -1)) {
						__cms();
						t__wi_p.$('a[data-href="' + $_current_page_search + ($_current_page_search == "/virtual-server" ? "/index.cgi" : "") + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
					} else {
						if (l.indexOf($_current_page_search) > -1 || l.indexOf($___current_page_search) > -1) {
							__cms();
							t__wi_p.$('a[href*="' + $___current_page_search + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
						} else {
							if (t__wi_p.$("#wrapper").data("product") == "usermin" && $t_uri_webmail && $current_page_full && ($current_page_full.indexOf("/mailbox") || $current_page_full.indexOf("/filter"))) {
								$_current_page_search_no_extra = $_current_page_search.replace("&user=", "").replace(/\./g, "%2E").replace("mailbox?id=", "mailbox/index.cgi?id=");
								$.each(n, function (b, a) {
									if ($_current_page_search_no_extra && $_current_page_search_no_extra.indexOf(a) > -1) {
										if (t__wi_p.$('a[data-href="' + a + '"]').length > 0) {
											__cms();
											t__wi_p.$('a[data-href="' + a + '"]').find(".fa.fa-folder-o").addClass("fa-folder-open-o");
											t__wi_p.$('a[data-href="' + a + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
										}
									}
								});
								$_current_page_search = "/" + $current_page + "index.cgi" + $current_page_search;
								$__relative_url == "/mailbox/edit_sig.cgi?" ? $__relative_url = "/mailbox/edit_sig.cgi" : false;
								if (t__wi_p.$('a[data-href="' + $__relative_url + '"]').length > 0) {
									__cms();
									t__wi_p.$('a[data-href="' + $__relative_url + '"]').find(".fa.fa-folder-o").addClass("fa-folder-open-o");
									t__wi_p.$('a[data-href="' + $__relative_url + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
								}
								if ($current_page_full == $_____link_full + "/mailbox/") {
									if (t__wi_p.$('a[data-href="' + $_current_page_search + '"]').length > 0) {
										__cms();
										t__wi_p.$('a[data-href="' + $_current_page_search + '"]').find(".fa.fa-folder-o").addClass("fa-folder-open-o");
										t__wi_p.$('a[data-href="' + $_current_page_search + '"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>')
									} else {
										if (t__wi_p.$('a[data-href="/mailbox/index.cgi?id=INBOX"]').length > 0 && n.indexOf("/" + $current_page) === -1) {
											__cms();
											t__wi_p.$('a[data-href="/mailbox/index.cgi?id=INBOX"]').parent("li:first-child").find(".fa.fa-folder-o").addClass("fa-folder-open-o");
											t__wi_p.$('a[data-href="/mailbox/index.cgi?id=INBOX"]').parent("li:first-child").addClass("sub_active").append('<span class="current-large"></span>')
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
}

function __dpt() {
	if (t__wi_p.$('li.sub_active a[href*="filemin"]').length) {
		if ($('iframe[name="page"]').get(0) && $('iframe[name="page"]').get(0).contentWindow && $('iframe[name="page"]').get(0).contentWindow.$('body[class*="filemin"] form input#path').val()) {
			t__wi_p.document.title = $('iframe[name="page"]').get(0).contentWindow.$('body[class*="filemin"] form input#path').val() + " - " + t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
		} else {
			t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
		}
	} else {
		if ((product_name() == "Virtualmin" || product_name() == "Cloudmin") && t__wi_p.$("select option:checked").text() && t__wi_p.$("select option:checked").text().length) {
			if (t__wi_p.$("li.sub_active a").text() && t__wi_p.$("li.sub_active a").text().length) {
				var a = $("#webmin_search_form").parent("li").prevAll();
				if (a.has(".sub_active, .current-large").length) {
					t__wi_p.document.title = t__wi_p.$("select option:checked").text() + " - " + t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
				} else {
					t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
				}
			} else {
				t__wi_p.document.title = product_name() + " — " + $g__v__title
			}
		} else {
			if (product_name() == "Mail") {
				if (t__wi_p.$("li.sub_active a").text() && t__wi_p.$("li.sub_active a").text().length) {
					t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " - Mail  — " + $g__v__title
				} else {
					t__wi_p.document.title = product_name() + " — " + $g__v__title
				}
			} else {
				if (t__wi_p.$("li.sub_active a").text() && t__wi_p.$("li.sub_active a").text().length) {
					t__wi_p.document.title = t__wi_p.$("li.sub_active a").text() + " — " + $g__v__title
				} else {
					t__wi_p.document.title = $g__v__title
				}
			}
		}
	}
	var b = $(".right-side-tabs .list-group-item:not(.no-notifications, .opacity-0_3)").length;
	if (settings_notification_slider_enabled) {
		titlenotifier.set(b)
	} else {
		titlenotifier.set(0)
	}
}

function __dlm(b) {
	if (t__wi_p.$___________m_locked === 1) {
		return
	}
	typeof b === "undefined" ? b = false : false;
	if (!b && $current_page_full == $_____link_full + "/virtual-server/summary_domain.cgi") {
		__sam("/virtual-server/index.cgi", false)
	}
	if (b) {
		__sam(b, false)
	} else {
		if (product_name() !== "Webmin" && product_name() !== "Usermin" && (t__wi_p.$('a[href*="' + $___relative_url + '"]:first' + __samn() + "").length || t__wi_p.$('a[data-href*="' + $___relative_url + '"]:first' + __samn() + "").length)) {
			__sam($___relative_url, false)
		} else {
			if ((product_name() !== "Virtualmin" && product_name() !== "Cloudmin") && product_name() !== "Webmin" && product_name() !== "Usermin" && (t__wi_p.$('a[href*="' + $___source_path + '"]:first' + __samn() + "").length || t__wi_p.$('a[data-href*="' + $___source_path + '"]:first' + __samn() + "").length)) {
				__sam($___source_path, false)
			} else {
				if ((product_name() !== "Virtualmin" && product_name() !== "Cloudmin") && (t__wi_p.$('a[href*="' + $___source_dir + '"]:first' + __samn() + "").length || t__wi_p.$('a[data-href*="' + $___source_dir + '"]:first' + __samn() + "").length) || ((access_level() == 2 || access_level() == 4) && t___wi.location.search == "?virtualmin")) {
					__sam($___source_dir, false)
				} else {
					if ($__source_file) {
						__sam($__source_file, true)
					}
				}
			}
		}
	}
	if (t__wi_p.$('a[data-href="/sysinfo.cgi"]').hasClass("hidden") && $current_page_full == $_____link_full + "/sysinfo.cgi") {
		__cms()
	}
	__dpt()
}

function t__m__m(h, g) {
	if ($.url($__source_url).param("refresh") == "1") {
		if (!$("body").contents().text().match(/___theme_post_save___/)) {
			var f = false;
			if ($.url($__source_url).param("id") || $.url($__source_url).param("dom") && ($t_uri_virtualmin || $t_uri_cloudmin)) {
				if ($t_uri_virtualmin) {
					f = $.url($__source_url).param("dom")
				} else {
					if ($t_uri_cloudmin) {
						f = $.url($__source_url).param("id")
					}
				}
			} else {
				if ($t_uri_virtualmin || $t_uri_cloudmin) {
					f = t__wi_p.$("aside select").val()
				}
			}
			if ($t_uri_virtualmin) {
				t__wi_p.t__vm_l(f)
			} else {
				if ($t_uri_cloudmin) {
					t__wi_p.t__cm_l(f)
				} else {
					var j = $(".switch-toggle input.dynamic:checked").attr("id");
					t__wi_p.t__wm_l((j ? j : "open_webmin"))
				}
			}
			return
		}
	} else {
		if (t__wi_p.t___p__ll === 0 && (($t_uri_virtualmin || $t_uri_cloudmin) && ($.url($__source_url).param("id") || $.url($__source_url).param("dom")))) {
			if (!$("body").contents().text().match(/___theme_post_save___/)) {
				if ($t_uri_virtualmin && $.url($__source_url).param("dom") && t__wi_p.$("aside select").val() && ($.url($__source_url).param("dom") != t__wi_p.$("aside select").val())) {
					t__wi_p.t__vm_l($.url($__source_url).param("dom"))
				} else {
					if ($t_uri_cloudmin && $.url($__source_url).param("id") && t__wi_p.$("aside select").val() && ($.url($__source_url).param("id") != t__wi_p.$("aside select").val())) {
						t__wi_p.t__cm_l($.url($__source_url).param("id"))
					}
				}
				return
			}
		}
	}
	if (t___wi.location != t__wi_p.location) {
		if ($__current_directory == $_____link_full + "/virtual-server/" || $current_page_full == $_____link_full + "/virtual-server/index.cgi" || $__relative_url == "/config.cgi?virtual-server") {
			if (t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_virtualmin" && t__wi_p.$('.switch-toggle input[id="open_virtualmin"]').length) {
				t__wi_p.t__s("open_virtualmin");
				t__wi_p.t__m("open_virtualmin", h, g)
			}
		} else {
			if ($__current_directory == $_____link_full + "/server-manager/" || $current_page_full == $_____link_full + "/server-manager/index.cgi" || $__relative_url == "/config.cgi?server-manager") {
				if (t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_cloudmin" && t__wi_p.$('.switch-toggle input[id="open_cloudmin"]').length) {
					t__wi_p.t__s("open_cloudmin");
					t__wi_p.t__m("open_cloudmin", h, g)
				}
			}
		}
	}
}

function ___f__tw() {
	if ($("body").attr("class") && $("body").attr("class").indexOf("filemin") > -1) {
		if ($__source_file == "config.cgi") {
			$('input[name="per_page"], input[name="disable_pagination"], input[name="menu_style"]').parents("td.col_value").parent("tr").addClass("hidden")
		}
		$("body").on("mouseleave", ".popover:not(.file-manager-help)", function (a) {
			a.preventDefault();
			a.stopPropagation();
			$(this).popover("hide")
		});
		$("body").find("#list_form").prev("div.total").append('. <span class="total_selected">' + lang("theme_xhred_filemin_selected_entries").replace("%value", "<span>0</span>") + '</span> <span class="label label-warning total_size hidden"><span class="total_size_data"></span></span>');
		$("body").append('<ul id="__f__c__m" class="dropdown-menu" role="menu" style="display:none">		            <li class="context-filemin-dependent-goto hidden"><a tabindex="-1" href="#" data-context-goto="1"><i class="fa fa-folder-open-o"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_goto") + '</a></li>		            <li class="divider context-filemin-dependent-goto"></li>		            <li><a tabindex="-1" href="#" data-context-select-all="1"><i class="fa fa-check-square-o"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_select_all") + '</a></li>		            <li><a tabindex="-1" href="#" data-context-deselect-all="1"><i class="fa fa-square-o"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_deselect_all") + '</a></li>		            <li><a tabindex="-1" href="#" data-context-invert-selection="1"><i class="fa fa-share-square-o"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_select_invert") + '</a></li>		            <li class="divider"></li>		            <li><a tabindex="-1" href="#" data-context-refresh="1">&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_refresh") + '</a></li>		            <li class="divider"></li>		            <li class="dropdown-submenu" role="menu">		            	<a tabindex="-1" href="#">&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_new") + '</a>		            	<ul class="dropdown-menu" role="menu">		            		<li><a tabindex="-1" href="#" data-context-newfile="1"><i class="fa fa-file-o"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newfile") + '</a></li>		            		<li><a tabindex="-1" href="#" data-context-newfolder="1"><i class="fa fa-folder-o"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newfoder") + '</a></li>		            		<li><a tabindex="-1" href="#" data-context-newarchive="1"><i class="fa fa-file-archive-o"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newarchive") + '</a></li>		            		<li class="dropdown-submenu" role="menu">				            	<a tabindex="-1" href="#"><i class="fa fa-exchange"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_transfer") + '</a>				            	<ul class="dropdown-menu" role="menu">				            		<li class="data-context-bookmarks"><a tabindex="-1" href="#" data-context-upload="1"><i class="fa fa-upload"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_upload") + '</a></li>				            		<li class="data-context-bookmarks"><a tabindex="-1" href="#" data-context-download="1"><i class="fa fa-download"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_download") + '</a></li>				            	</ul>				            </li>		            	</ul>		            </li>		            <li class="divider"></li>		            <li><a tabindex="-1" href="#" data-context-copy="1"><i class="fa fa-copy"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_copy") + '</a></li>		            <li><a tabindex="-1" href="#" data-context-cut="1"><i class="fa fa-cut"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_cut") + '</a></li>		            <li><a tabindex="-1" href="#" data-context-paste="1"><i class="fa fa-paste"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_paste") + '</a></li>		            <li class="divider"></li>		            <li><a tabindex="-1" href="#" data-context-delete="1"><i class="fa fa-trash"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_delete") + '</a></li>		            <li class="divider"></li>		            <li class="context-filemin-dependent-edit"><a tabindex="-1" href="#" data-context-edit="1">&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_edit") + '</a></li>		            <li><a tabindex="-1" href="#" data-context-rename="1">&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_rename") + '</a></li>		            <li class="context-filemin-dependent-download"><a tabindex="-1" href="#" data-context-download-file="1">&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_download_file") + '</a></li>		            <li class="divider"></li>		            <li><a tabindex="-1" href="#" data-context-search="1"><i class="fa fa-search"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_search") + '</a></li>		            <li class="divider"></li>		            		            <li class="dropdown-submenu" role="menu">		            	<a tabindex="-1" href="#"><i class="fa fa-bookmark-o"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_bookmarks") + '</a>		            	<ul class="dropdown-menu at-filemin-favorites-dropdown" role="menu">		            		<li class="data-context-bookmarks"><a tabindex="-1" href="#" data-context-bookmarks="1">' + lang("theme_xhred_filemin_context_bookmark_current") + '</a></li>		            		<li class="divider"></li>		            	</ul>		            </li>		            		            <li class="divider context-filemin-dependent-extract"></li>		            <li class="context-filemin-dependent-extract"><a tabindex="-1" href="#" data-context-extract="1"><i class="fa at-font-box-remove"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_extract") + '</a></li>		            <li class="divider"></li>		            <li class="dropdown-submenu context-properties" role="menu">		            	<a tabindex="-1" href="#">&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_properties") + '</a>		            	<ul class="dropdown-menu" role="menu">		            		<li><a tabindex="-1" href="#" data-context-calculate-selected-size="1"><i class="fa fa-calculator"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_calculate_selected_size") + '</a></li>		            		<li><a tabindex="-1" href="#" data-context-chmod="1"><i class="fa fa-gears"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_chmod") + '</a></li>		            		<li><a tabindex="-1" href="#" data-context-chown="1"><i class="fa fa-users"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_chown") + "</a></li>		            	</ul>		            </li>		        </ul>");
		$("body").on("click", "#__f__c__m li i.fa", function (a) {
			$(this).parents("a").trigger("click")
		});
		$("body").on("hidden.bs.modal", function () {
			$(".modal-backdrop").remove()
		});
		$("#select-unselect").parents("th").css("opacity", 0).addClass("pointer-events-none");
		$("body").on("submit", 'form[action="save_config.cgi"]', function () {
			localStorage.setItem("_________per_page", parseInt($('input[name="per_page"]').val()))
		});
		$("body").on("click", function (b) {
			$(".tooltip").each(function () {
				if (!$(this).is(b.target) && $(this).has(b.target).length === 0 && $(".tooltip").has(b.target).length === 0) {
					$(this).tooltip("hide")
				}
			})
		});
		$.each($(".modal .modal-content .modal-footer"), function (d, c) {
			$(this).wrapInner('<div class="btn-group"></div>')
		});
		$(".btn-group.pull-right").find(".fa-check-square").removeClass("fa-check-square").addClass("fa-share-square-o");
		if ($___relative_url.indexOf("index.cgi") === -1) {
			t___wi.history.pushState(null, null, $_____link_full + "/" + __f___mn() + "/index.cgi?path=");
			$('#headln2l > a[href*="filemin"][href*="index.cgi"]').addClass("hidden");
			if (settings_favorites) {
				f__dt()
			}
		}
		$("#headln2l .help_popup").css("padding", "6px 12px");
		$('ul > li > a[href^="bookmark.cgi?path="]').parents("ul").addClass("at-filemin-favorites-dropdown");
		$('div button[onclick="removeDialog()"]').addClass("disabled filemin-button-delete").removeAttr("onclick");
		$('a[onclick="chmodDialog()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-chmod");
		$('a[onclick="chownDialog()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-chown");
		$('a[onclick="compressDialog()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-compress");
		$('a[onclick="copySelected()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-copy");
		$('a[onclick="cutSelected()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-cut");
		if (!localStorage.getItem("copy") && !localStorage.getItem("cut")) {
			$('a[onclick*="paste.cgi"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-paste")
		} else {
			$('a[onclick*="paste.cgi"]').removeAttr("onclick").parent("li").addClass("filemin-button-paste")
		}
		$("body").on("click", 'button + .dropdown-menu.at-filemin-favorites-dropdown > li > a:not([href^="bookmark.cgi"])', function () {
			$(this).parents("ul").trigger("mouseleave")
		});
		$.each($(".btn-group.pull-right .btn-group"), function () {
			$(this).find("button > .caret").css("margin-left", "3px");
			$(this).find("button + ul.dropdown-menu > li > a").css("padding-left", "12px");
			$(this).find("button + ul.dropdown-menu > li > a > i").append("&nbsp;&nbsp;")
		});
		if (access_level() !== 0) {
			$("body").find(".breadcrumb li:first-child a").html('<i class="fa fa-user text-light">&nbsp;</i>')
		}
		__f___u(false, false, 0, 0);
		$("body").on("click", '#headln2l > a[href*="filemin"][href*="index.cgi"]', function (c) {
			c.preventDefault();
			c.stopPropagation();
			var d = "";
			if ($(".breadcrumb li:first-child a i").hasClass("fa-search")) {
				d = "index.cgi?path=" + $('#list_form > input[type="hidden"][name="path"]').val()
			} else {
				d = $(".breadcrumb > li:eq(-2) > a").attr("href")
			}
			if (!d) {
				d = "index.cgi?path="
			}
			__f____r("get", d, false, 0)
		});
		$("body").on("click", ".breadcrumb li > a:not(.fa-keyboard-o), .dropdown-menu.at-filemin-favorites-dropdown > li:not(.data-context-bookmarks) > a:not(.no_effect), #DataTables_Table_0 label > a.filemin-follow-file", function (c) {
			c.preventDefault();
			c.stopPropagation();
			var d = "index.cgi?path=";
			if ($(this).attr("href") && $(this).attr("href").indexOf("/filemin") === -1) {
				d = $(this).attr("href")
			}
			if (d === "index.cgi?path=/") {
				d = "index.cgi?path="
			}
			if (d && d.indexOf("bookmark.cgi?") > -1) {
				$keep_search = 1;
				return
			} else {
				$keep_search = 0
			}
			__f____r("get", d, false, $keep_search)
		});
		$("body").on("click", 'li.filemin-button-copy:not(".disabled") a', function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-clone">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_copying_selected") + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("copy", false)
		});
		$("body").on("click", 'li.filemin-button-cut:not(".disabled") a', function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-scissors">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_cutting_selected") + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("cut", false)
		});
		$("body").on("click", 'li.filemin-button-paste:not(".disabled") a', function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-clipboard">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_pasting_selected") + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("paste", false)
		});
		$("body").on("click", 'a[href^="extract.cgi"]', function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-file-archive-o">&nbsp;&nbsp;&nbsp;</i>' + lang("unpacking_archive") + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("extract", $(this).attr("href"))
		});
		$("body").find('#removeDialog button[type="button"][onclick="removeSelected()"]').removeAttr("onclick").addClass("_at_filemin_delete_submit");
		$("body").on("click", "#removeDialog button._at_filemin_delete_submit", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-trash-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_deleting_selected") + " " + lang("theme_xhred_global_please_wait"), 5, "warning");
			__f____a("delete", false);
			modal_dismiss()
		});
		$("#removeDialog").on("show.bs.modal", function () {
			var b = $(this).find("#items-to-remove");
			b.empty();
			$.each(_f__gr("checked"), function () {
				b.append($(this).val() + "<br>")
			})
		});
		$("body").find('#renameDialog button[type="button"][onclick="renameSelected()"]').removeAttr("onclick").addClass("_at_filemin_rename_submit");
		$("body").on("click", "#renameDialog button._at_filemin_rename_submit", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-i-cursor">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_renaming_selected") + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("rename", false)
		});
		$("body").on("submit", "#renameDialog", function (b) {
			b.preventDefault();
			b.stopPropagation();
			$("#renameDialog button._at_filemin_rename_submit").trigger("click")
		});
		$("#renameDialog").on("shown.bs.modal", function () {
			var b = $(this).find('input[type="text"]');
			b.focus();
			b.select()
		});
		$("#renameDialog").on("show.bs.modal", function () {
			var c = $(this).find('input[type="text"]'),
				d = $(this).find("button._at_filemin_rename_submit")
		});
		$('#renameDialog input[type="text"]').on("keyup change click input", function (d) {
			var c = $("#renameDialog").find("button._at_filemin_rename_submit");
			if ($(this).val()) {
				c.prop("disabled", false)
			} else {
				c.prop("disabled", true)
			}
		});
		$("body").find('#createFolderDialog button[type="button"][onclick="createFolder()"]').removeAttr("onclick").addClass("_at_filemin_create_folder_submit");
		$("body").on("click", "#createFolderDialog button._at_filemin_create_folder_submit", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-folder">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_creating_folder") + " `<samp>" + $('#createFolderForm input[name="name"]').val() + "</samp>`. " + lang("theme_xhred_global_please_wait") + "", 5, "info");
			__f____a("create_folder", false)
		});
		$("body").on("submit", "#createFolderForm", function (b) {
			b.preventDefault();
			b.stopPropagation();
			$("#createFolderDialog button._at_filemin_create_folder_submit").trigger("click")
		});
		$("#createFolderDialog").on("shown.bs.modal", function () {
			var b = $(this).find('input[type="text"]');
			b.focus()
		});
		$("#createFolderDialog").on("show.bs.modal", function () {
			var c = $(this).find('input[type="text"]'),
				d = $(this).find("button._at_filemin_create_folder_submit");
			c.val("");
			!c.val() && d.prop("disabled", true)
		});
		$('#createFolderDialog input[type="text"]').on("keyup change click input", function (d) {
			var c = $("#createFolderDialog").find("button._at_filemin_create_folder_submit");
			if ($(this).val()) {
				c.prop("disabled", false)
			} else {
				c.prop("disabled", true)
			}
		});
		$("body").find('#createFileDialog button[type="button"][onclick="createFile()"]').removeAttr("onclick").addClass("_at_filemin_create_file_submit");
		$("body").on("click", "#createFileDialog button._at_filemin_create_file_submit", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-file">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_creating_file") + " `<samp>" + $('#createFileForm input[name="name"]').val() + "</samp>`. " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("create_file", false)
		});
		$("body").on("submit", "#createFileForm", function (b) {
			b.preventDefault();
			b.stopPropagation();
			$("#createFileDialog button._at_filemin_create_file_submit").trigger("click")
		});
		$("#createFileDialog").on("shown.bs.modal", function () {
			var b = $(this).find('input[type="text"]');
			b.focus()
		});
		$("#createFileDialog").on("show.bs.modal", function () {
			var c = $(this).find('input[type="text"]'),
				d = $(this).find("button._at_filemin_create_file_submit");
			c.val("");
			!c.val() && d.prop("disabled", true)
		});
		$('#createFileDialog input[type="text"]').on("keyup change click input", function (d) {
			var c = $("#createFileDialog").find("button._at_filemin_create_file_submit");
			if ($(this).val()) {
				c.prop("disabled", false)
			} else {
				c.prop("disabled", true)
			}
		});
		$("body").find('#downFromUrlDialog button[type="button"][onclick="downFromUrl()"]').removeAttr("onclick").addClass("filemin-submitter-url_download");
		$("body").on("click", "#downFromUrlDialog button.filemin-submitter-url_download", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-download">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_downloading_from") + " <samp>" + $.url($('#downFromUrlForm input[name="link"]').val()).attr("host") + "</samp>. " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("url_download", false)
		});
		$("body").on("submit", "#downFromUrlForm", function (b) {
			b.preventDefault();
			b.stopPropagation();
			$("#downFromUrlDialog button.filemin-submitter-url_download").trigger("click")
		});
		$("#downFromUrlDialog").on("shown.bs.modal", function () {
			var b = $(this).find('input[name="link"]');
			b.focus()
		});
		$("#downFromUrlDialog").on("show.bs.modal", function () {
			var c = $(this).find('input[name="link"]'),
				d = $(this).find("button.filemin-submitter-url_download");
			!c.val() && d.prop("disabled", true)
		});
		$('#downFromUrlDialog input[name="link"]').on("keyup change click input", function (d) {
			var c = $("#downFromUrlDialog").find("button.filemin-submitter-url_download");
			if ($(this).val()) {
				c.prop("disabled", false)
			} else {
				c.prop("disabled", true)
			}
		});
		$("#readyForUploadDialog").on("show.bs.modal", function () {
			var b = $.url($("#upload-form").attr("action")).param()["id"];
			$("#upload-form").attr("action", "upload.cgi?path=" + $("#upload-form").find('input[name="path"]').val() + "&id=" + b + "")
		});
		$("body").find('#searchDialog button[type="button"][onclick="search()"]').removeAttr("onclick").addClass("_at_filemin_search_submit");
		$("body").on("click", "#searchDialog button._at_filemin_search_submit", function (b) {
			b.preventDefault();
			b.stopPropagation();
			__f____a("search", false)
		});
		$("body").on("submit", "#searchForm", function (b) {
			b.preventDefault();
			b.stopPropagation();
			$("#searchDialog button._at_filemin_search_submit").trigger("click")
		});
		$("#searchDialog").on("shown.bs.modal", function () {
			var b = $(this).find('input[type="text"]');
			b.focus()
		});
		$("#searchDialog").on("show.bs.modal", function () {
			var c = $(this).find('input[type="text"]'),
				d = $(this).find("button._at_filemin_search_submit");
			!c.val() && d.prop("disabled", true)
		});
		$("body").on("click", ".__filemin-search-results-data", function (b) {
			$('#headln2l > a[href*="filemin"][href*="index.cgi"]').trigger("click")
		});
		$('#searchDialog input[type="text"]').on("keyup change click input", function (d) {
			var c = $("#searchDialog").find("button._at_filemin_search_submit");
			if ($(this).val()) {
				c.prop("disabled", false)
			} else {
				c.prop("disabled", true)
			}
		});
		$("body").on("click", 'a[href^="bookmark.cgi"]', function (c) {
			c.preventDefault();
			c.stopPropagation();
			var d = $(this).attr("href");
			if (d === "bookmark.cgi?path=") {
				d = d + "/"
			}
			__f____a("bookmark", d)
		});
		$('body #chmodDialog button[onclick="chmodSelected()"]').removeAttr("onclick").addClass("filemin-submitter-chmod");
		$("body").on("click", "#chmodDialog button.filemin-submitter-chmod", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-user">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_setting_permissions").replace("%value", $("#perms").val()) + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("chmod", [$("#perms").val(), $('#chmodForm select[name="applyto"] option:selected').val()])
		});
		$("#chmodDialog").on("shown.bs.modal", function () {
			$('#chmodDialog input[id="perms"]').focus().select()
		});
		$("body").on("keyup", "#perms", function (b) {
			if (settings_window_customized_checkboxes_and_radios) {
				$("#chmodForm .acheckbox, #chmodForm .aradio").icheck("updated")
			}
		});
		$('body #chownDialog button[onclick="chownSelected()"]').removeAttr("onclick").addClass("filemin-submitter-chown");
		$("body").on("click", "#chownDialog button.filemin-submitter-chown", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-users">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_changing_ownership").replace("%value", $('#chownForm input[name="owner"]').val() + ":" + $('#chownForm input[name="group"]').val()) + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("chown", [$('#chownForm input[name="owner"]').val(), $('#chownForm input[name="group"]').val(), $("#chown-recursive").prop("checked")])
		});
		$("#chownDialog").on("shown.bs.modal", function () {
			$('#chownDialog input[name="owner"]').focus()
		});
		$("#chownDialog").on("show.bs.modal", function () {
			var b = $(this).find("button.filemin-submitter-chown");
			b.prop("disabled", true)
		});
		$('#chownDialog input[name="owner"], #chownDialog input[name="group"]').on("keyup change click input", function (d) {
			var c = $("#chownDialog").find("button.filemin-submitter-chown");
			if ($('#chownDialog input[name="owner"]').val() && $('#chownDialog input[name="group"]').val()) {
				c.prop("disabled", false)
			} else {
				c.prop("disabled", true)
			}
		});
		$('#chownDialog input[name="owner"], #chownDialog input[name="group"]').on("keyup", function (c) {
			c.preventDefault();
			var d = c.which;
			if (d == 13) {
				$("#chownDialog button.filemin-submitter-chown").trigger("click")
			}
		});
		$("#chownDialog").on("show.bs.modal", function () {
			$('#chownDialog input[name="owner"], #chownDialog input[name="group"]').val("");
			$("#chown-recursive").removeAttr("checked");
			if (settings_window_customized_checkboxes_and_radios) {
				$("#chown-recursive").icheck("updated")
			}
		});
		$('body #compressDialog button[onclick="compressSelected()"]').removeAttr("onclick").addClass("filemin-submitter-compress").prop("disabled", true);
		$("body").on("click", "#compressDialog button.filemin-submitter-compress", function (b) {
			b.preventDefault();
			b.stopPropagation();
			messenger('<i class="fa fa-file-archive-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_compressing_selected") + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			__f____a("compress", [$('#compressSelectedForm input[name="filename"]').val(), $('#compressSelectedForm select[name="method"] option:selected').val()])
		});
		$('#compressDialog input[name="filename"]').on("keyup change click input", function (d) {
			var c = $("#compressDialog").find("button.filemin-submitter-compress");
			if ($(this).val()) {
				c.prop("disabled", false)
			} else {
				c.prop("disabled", true)
			}
		});
		$("body").on("submit", "#compressSelectedForm", function (b) {
			b.preventDefault();
			b.stopPropagation();
			$("#compressDialog button.filemin-submitter-compress").trigger("click")
		});
		$("#compressDialog").on("show.bs.modal", function () {
			$('#compressDialog input[name="filename"]').val("")
		}).on("shown.bs.modal", function () {
			$('#compressDialog input[name="filename"]').focus()
		});
		$("body").on("click", ".dropdown-menu > li.disabled", function (b) {
			b.preventDefault();
			b.stopPropagation()
		});
		if ($__source_file === "index.cgi" && !$.url(t___wi.location).param("path")) {
			$("#headln2l").find('a[href*="filemin"][href*="index.cgi"]').addClass("hidden")
		}
		$(".btn-group.pull-right > button:eq(2)").removeAttr("onclick");
		$("body").on("click", ".btn-group.pull-right > button:eq(2)", function (c) {
			var d = $.url(t___wi.location).param("path");
			__f____r("get", "index.cgi?path=" + (d ? d : ""), false, 0);
			messenger('<i class="fa fa-refresh">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_refreshing") + " " + lang("theme_xhred_global_please_wait"), 2, "info")
		});
		setTimeout(function () {
			if (settings_thirdparty_filemin_hovered_toolbar != true) {
				$(".btn-group.pull-right > .btn-group > button").hover(function (b) {
					b.preventDefault();
					b.stopPropagation()
				})
			}
		}, 100);
		$("body").on("click", ".acheckbox, .btn-group.pull-right > button:eq(0), .btn-group.pull-right > button:eq(1), input", function () {
			if ($("#DataTables_Table_0 tbody input:checked").length !== 0) {
				__f___ub()
			} else {
				__f___lb()
			}
		});
		if (settings_window_customized_checkboxes_and_radios) {
			$("body").on("click", ".acheckbox, .btn-group.pull-right > button:eq(0), .btn-group.pull-right > button:eq(1)", function () {
				if ($("table .acheckbox:visible").filter(function () {
						return $(this).children("#select-unselect").length === 0
					}).length) {
					$(".acheckbox, .aradio").icheck("updated");
					if ($("table .acheckbox.checked:visible").filter(function () {
							return $(this).children("#select-unselect").length === 0
						}).length === $("table .acheckbox:visible").filter(function () {
							return $(this).children("#select-unselect").length === 0
						}).length) {
						$("#select-unselect").prop("checked", true)
					} else {
						$("#select-unselect").prop("checked", false)
					}
					$(".acheckbox, .aradio").icheck("updated")
				}
			})
		}
		$(".filemin-button-chmod a").html('<i class="fa fa-gears" aria-hidden="true"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_chmod"));
		$("#chmodDialog .modal-header h4").html('<i class="fa fa-gears" aria-hidden="true"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_chmod"));
		$(".filemin-button-chown a").html('<i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_chown"));
		$("#chownDialog .modal-header h4").html('<i class="fa fa-users" aria-hidden="true"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_chown"));
		$(".filemin-button-compress a").html('<i class="fa fa-file-archive-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newarchive"));
		$("#compressDialog .modal-header h4").html('<i class="fa fa-file-archive-o" aria-hidden="true"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newarchive"));
		$("#searchDialog .modal-header h4").html('<i class="fa fa-search" aria-hidden="true"></i>&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_search"));
		$(".filemin-button-copy a").html('<i class="fa fa-copy" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_copy"));
		$(".filemin-button-cut a").html('<i class="fa fa-cut" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_cut"));
		$('.btn-group .btn-group a[onclick="createFileDialog()"]').html('<i class="fa fa-file-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newfile"));
		$("#createFileDialog .modal-header h4").html('<i class="fa fa-file-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newfile"));
		$('.btn-group .btn-group a[onclick="createFolderDialog()"]').parent("li").addClass("_createFolderDialog_");
		$('.btn-group .btn-group a[onclick="createFolderDialog()"]').html('<i class="fa fa-folder-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newfoder"));
		$("#createFolderDialog .modal-header h4").html('<i class="fa fa-folder-o" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_newfoder"));
		$('.btn-group .btn-group a[onclick="viewReadyForUpload()"]').html('<i class="fa fa-upload" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_upload"));
		$("#readyForUploadDialog .modal-header h4").html('<i class="fa fa-upload" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_upload"));
		$('.btn-group .btn-group a[onclick="downFromUrlDialog()"]').html('<i class="fa fa-download" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_download"));
		$("#downFromUrlDialog .modal-header h4").html('<i class="fa fa-download" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;' + lang("theme_xhred_filemin_context_download"));
		$("#renameDialog .modal-header h4").prepend('<i class="fa fa-i-cursor" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;');
		$('.btn-group .btn-group a[onclick="downFromUrlDialog()"] i').removeClass("fa-globe").addClass("fa-download");
		$(".filemin-button-compress").detach().insertAfter("._createFolderDialog_");
		if (settings_thirdparty_filemin_hide_toolbar) {
			$(".btn-group.pull-right").addClass("hidden");
			$(".breadcrumb.pull-left").removeClass("pull-left").addClass("pull-right").css("margin-bottom", "-25px");
			$(".filemin-main-spinner").css({
				"margin-top": "40px",
				"margin-left": "170px"
			})
		}
		$(".btn-group .at-filemin-favorites-dropdown li:not(:first-child):not(:empty)").clone().insertAfter("li.data-context-bookmarks + .divider");
		$("body").on("shown.bs.popover", '[data-toggle="popover-path"]', function () {
			$(".popover-path-input").val($("#path").val());
			$(".popover-path-input").focus();
			$(".popover-path-input").parents(".popover").addClass("popover-path-data");
			$(".popover-path-input").keydown(function (a) {
				var b = a.keyCode ? a.keyCode : a.which;
				if (b == 13) {
					$(".breadcrumb").append('<li class="hidden popover-path-input-value"><a href="index.cgi?path=' + $(this).val() + '"></a></li>');
					$(".popover-path-input-value").find("a").trigger("click").remove()
				}
			})
		});
		$("body").on("click", ".popover-path-button", function () {
			var a = jQuery.Event("keydown");
			a.which = 13;
			$(".popover-path-input").trigger(a)
		});
		$("body").on("contextmenu", ".breadcrumb", function (a) {
			a.preventDefault();
			$('[data-toggle="popover-path"]').popover("show")
		});
		$("#nothingSelected").remove()
	}
}

function t__cm___init(d, f, h, g) {
	$.each(d, function (s, u) {
		var b = $(this),
			c = ["phpini", "bind8"],
			z = ["phpini"],
			m = ["bind8"];
		$("#headln2l a").attr("href") ? $page = $("#headln2l a").attr("href").split("/")[1] : $page = null;
		c.indexOf($page) >= 0 && $(this).data("name", "data");
		CodeMirror.modeURL = "/unauthenticated/js/codemirror/mode/%N/%N.js";
		var a = null,
			v = "text/plain";
		var t = false;
		if ($current_page_full == $_____link_full + "/custom/view.cgi") {
			t = $('form[action="save.cgi"]').find(".table-title").find("tt").text()
		} else {
			if ($('body[class^="filemin"]').length) {
				t = $.url($__relative_url).param("file")
			} else {
				t = $('select[name="file"]').val()
			}
		}
		var x = (f ? f : t),
			w, a, v;
		if (w = /.+\.([^.]+)$/.exec(x)) {
			var y = CodeMirror.findModeByExtension(w[1]);
			if (y) {
				a = y.mode;
				v = y.mime
			}
		} else {
			if (/\//.test(x)) {
				var y = CodeMirror.findModeByMIME(x);
				if (y) {
					a = y.mode;
					v = x
				}
			} else {
				a = null;
				v = "text/plain"
			}
		}
		if ($page == "apache" || $page == "postfix" || $page == "dovecot" || $page == "spam" || $page == "virtualmin-nginx" || $page == "sendmail" || $page == "samba" || $page == "proftpd" || $page == "fail2ban" || $page == "sshd" || $page == "squid" || $page == "ldap-server") {
			a = "rpm";
			v = "rpm-spec"
		} else {
			if ($page == "phpini") {
				a = "z80";
				v = "text/x-z80"
			} else {
				if ($page == "bind8" || $page == "procmail") {
					a = "clike";
					v = "text/x-java"
				} else {
					if ($page == "virtual-server" && $(this).attr("name") == "body") {
						a = "htmlmixed";
						v = "text/html"
					}
				}
			}
		}
		$current_file = $current_page_full.replace(/^\//g, "");
		if ($current_file) {
			$current_file = $current_file.split("/")[1]
		}
		if ($("textarea").length === 1 && $("textarea").parent("td.td_tag").length === 0 || $(".jsPanel").length) {
			if ($source_path == $_____link + "settings-editor_read.cgi" || (product_name(1).toLowerCase() == "virtualmin" && ($current_page_full == "/apache/allmanual_form.cgi" || $current_page_full == "/apache/manual_form.cgi" || $current_page_full == "/spam/edit_manual.cgi" || $current_page_full == "/virtual-server/edit_html.cgi" || $current_page_full == "/virtual-server/apply_style.cgi" || $current_page_full == "/phpini/edit_manual.cgi" || $('body[class*="filemin"]') && $('body[class*="filemin"]').length)) || (product_name(1).toLowerCase() == "cloudmin" && ($('body:not([class*="filemin"])'))) || product_name(1).toLowerCase() != "virtualmin" && product_name(1).toLowerCase() != "cloudmin" && $current_page_full != $_____link_full + "/virtualmin-sqlite/" && $current_page_full != $_____link_full + "/updown/" && $current_directory != $_____link + "firewalld/" && $current_directory != $_____link + "firewall/" && $current_directory != $_____link + "net/" && $current_directory != $_____link + "acl/" && $current_directory != $_____link + "inetd/" && $current_directory != $_____link + "nis/" && $current_directory != $_____link + "pap/" && $current_directory != $_____link + "ppp-client/" && $current_directory != $_____link + "pptp-client/" && $current_directory != $_____link + "pptp-server/" && $current_directory != $_____link + "shorewall/" && $current_directory != $_____link + "shorewall6/" && $current_directory != $_____link + "raid/" && $current_directory != $_____link + "lvm/" && $current_directory != $_____link + "fdisk/" && $current_directory != $_____link + "lpadmin/" && $current_directory != $_____link + "virtualmin-registrar/" && $current_directory && $current_directory.indexOf("cluster") === -1 && $current_file != "edit_access.cgi" && $current_file != "edit_file.cgi" && $current_file != "edit_referers.cgi" && $current_file != "edit_lock.cgi" && $current_file != "edit_mobile.cgi" && $current_file != "edit_user.cgi" && $current_file != "edit_unix.cgi" && $current_file != "edit_pass.cgi" && $current_file != "edit_dump.cgi" && $current_file != "edit_cron.cgi" && $current_file != "gbatch_form.cgi" && $current_file != "batch_form.cgi" && $current_file != "edit_score.cgi" && $current_file != "edit_ports.cgi" && $current_file != "acl.cgi" && $current_file != "edit_recs.cgi" && $current_file != "edit_dirs.cgi" && $current_page_full != $_____link_full + "/config.cgi" && $current_page_full != $_____link_full + "/backup-config/edit.cgi" && $current_page_full != $_____link_full + "/updown/index.cgi" && $current_page_full != $_____link_full + "/apache/edit_defines.cgi" && $current_page_full != $_____link_full + "/apache/edit_gmime_type.cgi" && $current_page_full != $_____link_full + "/fail2ban/edit_filter.cgi" && $current_page_full != $_____link_full + "/fail2ban/edit_action.cgi" && $current_page_full != $_____link_full + "/fail2ban/edit_jail.cgi" && $current_page_full != $_____link_full + "/usermin/edit_configs.cgi" && $current_page_full != $_____link_full + "/virtualmin-support/ticket.cgi" && $current_page_full != $_____link_full + "/virtualmin-support/login.cgi" && $current_page_full != $_____link_full + "/webminlog/view.cgi" && $current_page_full != $_____link_full + "/bind8/slave_form.cgi" && $current_page_full != $_____link_full + "/bind8/stub_form.cgi" && $current_page_full != $_____link_full + "/bind8/mass_form.cgi" && $current_page_full != $_____link_full + "/mysql/exec_form.cgi" && $current_page_full != $_____link_full + "/postgresql/exec_form.cgi" && $('body[class*="filemin"]') && $__source_file != "config.cgi") {
				if ($__relative_url == "/config.cgi?server-manager" || $("textarea").attr("id") === "notes") {
					return
				}
				window["__cm_editor_" + g] = CodeMirror.fromTextArea(u, {
					tabMode: "indent",
					matchBrackets: true,
					lineNumbers: true,
					lineWrapping: true,
					indentUnit: 0,
					autofocus: true,
					theme: settings_cm_editor_palette
				});
				window["__cm_editor_" + g].setOption("mode", v);
				if (a != "rpm") {
					CodeMirror.autoLoadMode(window["__cm_editor_" + g], a)
				}
				if ($current_directory != $_____link + "init/" && $current_file != "edit_cron.cgi" && $current_page_full != $_____link_full + "/virtualmin-password-recovery/" && $current_page_full != $_____link_full + "/bind8/forward_form.cgi") {
					h ? ($resize = h) : ($resize = 2.8);
					if (!h) {
						$window_height = ($(window).outerHeight() - ($(window).outerHeight() / $resize));
						window["__cm_editor_" + g].setSize(null, $window_height);
						$(t___wi).resize(function () {
							$window_height = ($(window).outerHeight() - ($(window).outerHeight() / $resize));
							window["__cm_editor_" + g].setSize(null, $window_height)
						})
					} else {
						window["__cm_editor_" + g].on("change", function (k, j) {
							d.val(window["__cm_editor_" + g].getValue());
							if ($(":focus").parents(".jsPanel").is(".jsPanel")) {
								$(":focus").parents(".jsPanel").find("._filemin_file_editor_save").addClass("text-danger")
							}
						});
						window["__cm_editor_" + g].setSize($resize[0], $resize[1])
					}
				}
			}
		}
	})
}(function (b) {
	(jQuery.browser = jQuery.browser || {}).mobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(b) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(b.substr(0, 4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(document).on("click", function (b) {
	if ($(b.target).attr("class") && $(b.target).attr("class").indexOf("select2") === 0) {} else {
		if (t__wi_p.$("aside select") && t__wi_p.$("aside select").length > 0 && t__wi_p.$("aside select").hasClass("select2-hidden-accessible")) {
			t__wi_p.$("aside select").select2("close")
		}
	}
});
$("a").each(function () {
	if ($(this).find("img").length) {
		$(this).css("text-decoration", "none")
	}
});
$('body:not([class*="filemin"])').on("keydown", function (g) {
	if (t__wi_p.$('aside input[name="search"]').is(":focus")) {
		return
	}
	if ($current_page_full == $_____link_full + "/server-manager/gvnc.cgi" || $current_page_full == $_____link_full + "/server-manager/login.cgi" || $current_page_full == $_____link_full + "/telnet/" || $current_page_full == $_____link_full + "/telnet/index.cgi" || $current_page_full == $_____link_full + "/stunnel/" || $current_page_full == $_____link_full + "/stunnel/index.cgi") {
		return
	}
	var f = g.keyCode ? g.keyCode : g.which;
	if (!$("input").is(":focus") && !$("select").is(":focus") && !$("textarea").is(":focus")) {
		var d = String.fromCharCode(f).toLowerCase();
		if (d && /[a-zA-Z0-9]/.test(d) && !g.ctrlKey && !g.altKey && !g.metaKey) {
			if (!$(".dataTables_filter label input").length) {
				setTimeout(function () {
					if (g.shiftKey && d == "1") {
						t__wi_p.$('aside input[name="search"]').focus().val("!")
					} else {
						t__wi_p.$('aside input[name="search"]').focus().val(d)
					}
				}, 1)
			} else {
				$(".dataTables_filter label input").trigger("keyup").focus()
			}
		}
	}
});
$.ajaxSetup({
	beforeSend: function (b, a) {
		t__wi_p.$___ajax_requested_url = a.url
	},
	complete: function (b, a) {
		if (b.getResponseHeader("Auth-type") === "auth-required=1") {
			t___wi.top.location.reload()
		}
	}
});
if (t___wi.location == t__wi_p.location) {
	if ($access_level == 0) {
		settings_notification_slider_fixed && t__wi_p.$("html").attr("data-slider-fixed", "1")
	}
	loaders_dismiss();
	if (t__wi_p.$___________initial === 1) {
		console.log("Welcome to Authentic Theme 17.72 https://github.com/qooob/authentic-theme")
	}
	$.ajax({
		type: "GET",
		url: $_____link_full + "/index.cgi/?xhr-get_theme_language=1",
		data: false,
		dataType: "text",
		success: function (a) {
			t__wi_p.$("body").data("language-strings", JSON.parse(a))
		}
	});
	$.ajax({
		type: "GET",
		url: $_____link_full + "/index.cgi/?xhr-get_available_modules=1",
		data: false,
		dataType: "text",
		success: function (a) {
			t__wi_p.$("body").data("available-modules", JSON.parse(a))
		}
	});
	typeof t__wi_p.t___p__xhr_l == "undefined" ? t__wi_p.t___p__xhr_l = 0 : false;
	typeof t__wi_p.t___p__ll == "undefined" ? t__wi_p.t___p__ll = 0 : false;
	$(function () {
		t___wi.parent.$___________left = 1
	});
	t__wi_p.$("body").on("focus", ".sidebar-search", function () {
		if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.t__au__c___i == "function") {
			t__wi_p.$('iframe[name="page"]').get(0).contentWindow.t__au__c___i("c", false)
		} else {
			t__wi_p.t__au__c___i("c", false)
		}
	});
	t__wi_p.$("body").on("blur", ".sidebar-search", function () {
		setTimeout(function () {
			t__wi_p.t__au__c___i("c", true)
		}, 150)
	});

	function __si__bg_upd_exec() {
		if (t__wi_p.$___ajax_requested_url.indexOf("?xhr-buttons=1") > -1 || t__wi_p.$___ajax_requested_url.indexOf("?xhr-navigation=1") > -1) {
			return
		}
		if (t__wi_p.$('iframe[name="page"]').contents().find("body .modal.in").length) {
			return
		}
		if ($access_level == 0) {
			t__wi_p.$___ajax_requested_url = "/index.cgi/?xhr-info=1";
			var b = t__wi_p.$('iframe[name="page"]').contents().find("body").find(".page.__sytem_information"),
				a = (b.length && __num()) ? b : 0;
			if (a) {
				$(a).find('h3 > a[data-refresh="system-status"]').addClass("disabled").find("i").addClass("fa-spin")
			}
			$.ajax({
				type: "GET",
				url: $_____link_full + "/index.cgi/?xhr-info=1",
				data: false,
				dataType: "json",
				success: function (c) {
					$.each(c, function (h, l) {
						if (a) {
							$(a).find('span[data-id="sysinfo_' + h + '"]').html(l);
							if (h == "local_time" || h == "uptime" || h == "running_proc") {
								var g = $(a).find('span[data-id="sysinfo_' + h + '"]'),
									f = $(a).find('span[data-id="sysinfo_' + h + '"] a'),
									j = $(a).find('span[data-id="sysinfo_' + h + '"]').text();
								if (h == "local_time" && settings_window_replace_timestamps) {
									if (f && f.length) {
										j = $(a).find('span[data-id="sysinfo_' + h + '"] a').data("convertible-timestamp-full");
										g.html(f.html(moment.unix(j).format(settings_window_replaced_timestamps_format_full)))
									} else {
										j = $(a).find('span[data-id="sysinfo_' + h + '"] > span').data("convertible-timestamp-full");
										g.html(moment.unix(j).format(settings_window_replaced_timestamps_format_full))
									}
								} else {
									(f && f.length) && g.html(f.html(j))
								}
							}
							if ($(a).find('.piechart[data-charts="sysinfo_' + h + '"]').length) {
								$(a).find('.piechart[data-charts="sysinfo_' + h + '"]').data("easyPieChart").update(l)
							}
							if (h == "cpu_percent" || h == "mem_percent" || h == "virt_percent" || h == "disk_percent") {
								localStorage.setItem("sysinfo_" + h + "_seen", l)
							}
							$(a).find(".modal-backdrop").remove()
						}
						$__id__ = moment().unix();
						if (h == "cpu_percent" || h == "mem_percent" || h == "virt_percent" || h == "disk_percent" || h == "csf_title" || h == "csf_remote_version" || h == "authentic_remote_version" || h == "package_message") {
							if (!localStorage.getItem("sysinfo_" + h)) {
								localStorage.setItem("sysinfo_" + h, l)
							}
						}
						if (!localStorage.getItem("sysinfo_package_message_initial")) {
							localStorage.setItem("sysinfo_package_message_initial", 1)
						}
						if (h == "authentic_theme_version") {
							if (!localStorage.getItem("sysinfo_theme_current_version") && l) {
								localStorage.setItem("sysinfo_theme_current_version", (l.match(/^\d+|\d+\b|\d+(?=\w)/g)[0] + "." + l.match(/^\d+|\d+\b|\d+(?=\w)/g)[1]))
							}
						}
						if (h == "csf_data") {
							if (!localStorage.getItem("sysinfo_csf_current_version") && l) {
								localStorage.setItem("sysinfo_csf_current_version", (l.match(/^\d+|\d+\b|\d+(?=\w)/g)[0] + "." + l.match(/^\d+|\d+\b|\d+(?=\w)/g)[1]))
							}
						}
						if (h == "csf_title" || h == "csf_remote_version" || h == "authentic_remote_version" || h == "package_message") {
							if (h == "package_message" && (localStorage.getItem("sysinfo_" + h) != l || localStorage.getItem("sysinfo_package_message_initial") == 1) && l && l.indexOf("badge-danger") > -1) {
								localStorage.setItem("notifications_" + $__id__ + "_package_message", JSON.stringify({
									title: lang("theme_xhred_notifications_packages_updates"),
									time: $__id__,
									timestamp: $__id__,
									message: ($(l).html().replace(/badge-danger/g, "badge-success")),
									readStatus: 0,
									type: h,
									link: $(l).attr("href")
								}));
								localStorage.setItem("sysinfo_" + h, l);
								localStorage.setItem("sysinfo_package_message_initial", 0)
							}
							if (settings_sysinfo_theme_updates) {
								if (localStorage.getItem("sysinfo_authentic_remote_version") == 0) {
									delete localStorage.sysinfo_authentic_remote_version
								}
								if (localStorage.getItem("sysinfo_theme_current_version") && localStorage.getItem("sysinfo_authentic_remote_version")) {
									if (h == "authentic_remote_version" && localStorage.getItem("sysinfo_theme_current_version") != l && l != "0" && l != "0.00" && l != null) {
										localStorage.setItem("notifications_" + $__id__ + "_authentic_remote_version", JSON.stringify({
											title: lang("theme_xhred_notifications_theme_update"),
											time: $__id__,
											timestamp: $__id__,
											message: lang("theme_xhred_notifications_theme_update_message").replace("%v", l) + '&nbsp;&nbsp;<span class="label label-success authentic_update" style="padding:0 6px; line-height: 12px; height:15px;font-size:11px" href="/webmin/edit_themes.cgi"><i class="fa fa-refresh" style="padding-top:1px"></i></span>',
											readStatus: 0,
											type: h,
											link: $_____link_full + "/sysinfo.cgi"
										}));
										localStorage.setItem("sysinfo_" + h, l);
										localStorage.setItem("sysinfo_theme_current_version", l)
									}
								}
							}
							if (settings_sysinfo_csf_updates) {
								if (localStorage.getItem("sysinfo_csf_current_version") && localStorage.getItem("sysinfo_csf_current_version") != null && localStorage.getItem("sysinfo_csf_remote_version")) {
									if (h == "csf_remote_version" && localStorage.getItem("sysinfo_csf_current_version") != l && l != "0" && l != "0.00" && l != null) {
										localStorage.setItem("notifications_" + $__id__ + "_csf_remote_version", JSON.stringify({
											title: lang("theme_xhred_notifications_firewall_update"),
											time: $__id__,
											timestamp: $__id__,
											message: lang("theme_xhred_notifications_firewall_update_message").replace("%v", l),
											readStatus: 0,
											type: h,
											link: $_____link_full + "/csf"
										}));
										localStorage.setItem("sysinfo_" + h, l);
										localStorage.setItem("sysinfo_csf_current_version", l)
									}
								}
							}
							if (h == "csf_title" && l && l.indexOf("label-danger") > -1 && localStorage.getItem("sysinfo_csf_not_running") != 1) {
								localStorage.setItem("notifications_" + $__id__ + "_csf_title", JSON.stringify({
									title: lang("theme_xhred_notifications_firewall_danger"),
									time: $__id__,
									timestamp: $__id__,
									message: lang("theme_xhred_notifications_firewall_danger_message").replace("%v", moment.unix($__id__).format(settings_window_replaced_timestamps_format_short)),
									readStatus: 0,
									type: h,
									link: $_____link_full + "/csf"
								}));
								localStorage.setItem("sysinfo_csf_not_running", 1)
							} else {
								if (h == "csf_title" && l && l.indexOf("label-danger") === -1) {
									delete localStorage.sysinfo_csf_not_running
								}
							}
						}
						if (h == "csf_deny") {
							var k = JSON.parse(l);
							$.each(k, function (s, p) {
								var p = p.split("|"),
									t = p[0],
									m = p[1],
									u = p[2],
									d = p[3],
									r = p[4],
									n = p[5],
									q = p[6],
									o = p[7];
								o = o.replace("*Port Scan*", ((u && d) ? 'Port <i data-port-href="http://www.speedguide.net/port.php?port=' + d + '" class="badge bg-dark-red">' + d + "</i> scan" : "Port scan"));
								if (!localStorage.getItem("allowed_trigger_" + (t + m.replace(/\./g, "0")) + "_csf_deny")) {
									localStorage.setItem("notifications_" + (t + m.replace(/\./g, "0")) + "_csf_deny", JSON.stringify({
										title: lang("theme_xhred_notifications_firewall_warning"),
										time: $__id__,
										timestamp: $__id__,
										message: o + ((u && d) ? " <span>(" + u + ":" + d + ")</span>" : ""),
										readStatus: 0,
										type: h,
										link: $_____link_full + "/csf"
									}));
									localStorage.setItem("allowed_trigger_" + (t + m.replace(/\./g, "0")) + "_csf_deny", 1)
								}
							})
						}
						if (h == "cpu_percent" || h == "mem_percent" || h == "virt_percent" || h == "disk_percent") {
							if (localStorage.getItem("sysinfo_" + h + "_seen") !== null && l >= 85 && localStorage.getItem("sysinfo_" + h + "_seen") < l) {}
						}
					});
					setTimeout(function () {
						t__wi_p.$___ajax_requested_url = "_blank"
					}, 500);
					setTimeout(function () {
						n___ck()
					}, 3000);
					if (a) {
						$(a).find('h3 > a[data-refresh="system-status"]').removeClass("disabled").find("i").removeClass("fa-spin")
					}
				}
			})
		}
	}

	function __si__bg_upd() {
		if (settings_notification_slider_enabled && !t__wi_p.$('iframe[name="page"]').contents().find("body .modal.in").length) {
			return t___wi.setInterval(function () {
				__si__bg_upd_exec()
			}, (settings_sysinfo_background_call_timeout * 60000))
		}
	}
	var __si__bg_upd_id = __si__bg_upd();
	if (settings_loader_top) {
		NProgress.configure({
			showSpinner: true,
			trickleRate: 0.08,
			trickleSpeed: 200
		})
	}
	$(window).ajaxStart(function () {
		if (t__wi_p.$___ajax_requested_url.indexOf("index.cgi/?xhr-info=1") === -1) {
			t___p__xhr_l = 1;
			t__wi_p.__lls()
		}
	}).ajaxStop(function () {
		if (t__wi_p.$___ajax_requested_url.indexOf("index.cgi/?xhr-info=1") === -1) {
			t___p__xhr_l = 0;
			t__wi_p.__lle()
		}
	});
	(function () {
		var k, j, l, h = {}.hasOwnProperty,
			g = function (a, c) {
				for (var d in c) {
					if (h.call(c, d)) {
						a[d] = c[d]
					}
				}

				function b() {
					this.constructor = a
				}
				b.prototype = c.prototype;
				a.prototype = new b();
				a.__super__ = c.prototype;
				return a
			};
		k = jQuery;
		l = '<div class="messenger-spinner">\n    <span class="messenger-spinner-side messenger-spinner-side-left">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n    <span class="messenger-spinner-side messenger-spinner-side-right">\n        <span class="messenger-spinner-fill"></span>\n    </span>\n</div>';
		j = (function (b) {
			g(a, b);

			function a() {
				return a.__super__.constructor.apply(this, arguments)
			}
			a.prototype.template = function (c) {
				var d;
				d = a.__super__.template.apply(this, arguments);
				d.append(k(l));
				return d
			};
			return a
		})(t___wi.Messenger.Message);
		t___wi.Messenger.themes.air = {
			Message: j
		};
		Messenger.options = {
			extraClasses: "messenger-fixed messenger-on-bottom",
			theme: "air"
		}
	}).call(this);
	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
		$("#content").attr("style", "-webkit-overflow-scrolling: touch !important; overflow-y: scroll !important;")
	}
	if (t__wi_p.$('a[target="page"][href="link/"]').first().length) {
		t__wi_p.$('a[target="page"][href="link/"]').first().attr("target", "blank")
	}
	$("aside").on("click", ".select2-container .select2-selection__arrow b", function (a) {
		a.preventDefault();
		a.stopPropagation()
	});
	$("body").on("keydown", ".sidebar-search", function (b) {
		if (t__wi_p.$("#wrapper").data("webmail") !== -1) {
			if (b.keyCode == 13) {
				b.preventDefault();
				return false
			}
		}
	});
	$("body").on("click", ".mobile-menu-toggler", function (b) {
		$this = $(this);
		if ($("aside").hasClass("hidden-xs")) {
			$(this).addClass("selected").find("button").addClass("btn-primary").removeClass("btn-default");
			if (t__wi_p.$(".__logo")) {
				t__wi_p.$(".__logo").css("transform", "translate(0px, 0px)");
				setTimeout(function () {
					t__wi_p.$(".__logo").transition({
						y: "-140px"
					}, 1000)
				}, 1100)
			}
			t__wi_p.$this.css("transform", "translate(0px, 0px)");
			t__wi_p.$("aside").css("transform", "translate(0px, 0px)");
			t__wi_p.$(".switch-toggle").css("display", "none");
			$("aside").removeClass("hidden-xs");
			t__wi_p.$("aside, .mobile-menu-toggler").transition({
				x: settings_leftmenu_width
			}, 1000);
			t__wi_p.$(".switch-toggle").css("display", "table")
		} else {
			hide_mobile_menu()
		}
	});
	$.each($('ul.navigation li.navigation_external a[href^="../servers/link.cgi/"]'), function (d, c) {
		$(this).attr("href", $__source_url + $(this).attr("href").replace("../", "").replace(/\/$/g, ""))
	});
	$("body").on("click", '.navigation a[target="page"], .user-links a[target="page"]', function () {
		hide_mobile_menu()
	});
	$("body").on("click", ".navigation > li:not('.sub-wrapper'):not('.menu-container'):not('.navigation_external')", function (h) {
		h.preventDefault();
		h.stopPropagation();
		t__wi_p.$___________m_locked = 1;
		typeof $processing == "undefined" ? $processing = false : false;
		if (!$processing) {
			$processing = true;
			var g = $("a", this).attr("href"),
				j = $("a", this).attr("target"),
				f = $(this);
			if (j) {
				$(".navigation > li > ul.sub > li").each(function () {
					$(this).removeClass("sub_active").find("span.current").remove()
				})
			}
			$("#webmin_search_form").submit(function () {
				$(".navigation > li > ul.sub > li").each(function () {
					$(this).removeClass("sub_active").find("span.current").remove()
				})
			});
			$.when($("#sidebar .navigation > li").each(function () {
				var a = $(this);
				if (!$(this).is(f)) {
					$(this).removeClass("active");
					if ($(this).find("a").attr("href") != "#search" && !$(this).find("a").attr("target")) {
						if ($(a.find("a").attr("href")).hasClass("sub")) {
							$(a.find("a").attr("href")).slideUp($settings_animation_left_slide_time)
						}
					}
				}
			})).done(function () {
				f.hasClass("active") ? f.removeClass("active") : (g != "#hide" && !j) ? f.addClass("active") : false;
				setTimeout(function () {
					if ($(g).is(":visible") && g != "#hide" && !j) {
						f.addClass("active")
					} else {
						f.removeClass("active")
					}
					$processing = false
				}, ((2 * $settings_animation_left_slide_time) > 0 ? (2 * $settings_animation_left_slide_time) : 1));
				$(g).slideToggle($settings_animation_left_slide_time)
			});
			if (g == "#search") {
				$('#sidebar input[name="search"]').focus()
			}
		}
	});
	$("body").on("click", ".navigation > li > ul.sub > li:not('.menu-container')", function (c) {
		if (c.target && $(c.target).is("li")) {
			return
		}
		var b = $(this);
		if (__num()) {
			t__wi_p.$(".navigation > li:not('.has-sub')").removeClass("sub_active").find("span.current-large").remove()
		}
		$(".navigation > li > ul.sub > li").each(function () {
			$(this).removeClass("sub_active").find("span.current").remove()
		});
		$("#webmin_search_form").find('input[name="search"]').val("");
		b.addClass("sub_active").append('<span class="current"></span>')
	});
	$(".navigation > li > ul.sub").each(function () {
		if ($(this).attr("id") === "") {
			$(this).remove()
		}
	});
	$("body").on("submit", "#webmin_search_form", function () {});
	$("body").on("click", ".navigation_module_trigger", function (b) {
		b.preventDefault();
		b.stopPropagation();
		$('iframe[name="page"]').attr("src", $(this).data("href"));
		$(".navbar-toggle:visible").trigger("click");
		t__wi_p.$(".navigation > li > ul.sub > li").removeClass("sub_active").find("span.current").remove();
		t__wi_p.$("#sidebar .navigation > ul.sub").slideUp($settings_animation_left_slide_time);
		t__wi_p.$("#sidebar .navigation > li").removeClass("active")
	});
	$('.switch-toggle label[for^="reserve_empty"]').on("click", function (b) {
		b.preventDefault()
	});
	$("body").on("click", 'a[data-refresh="true"]', function (b) {
		b.preventDefault();
		if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$__relative_url == "string") {
			t__wi_p.$('iframe[name="page"]').attr("src", t__wi_p.$('iframe[name="page"]').get(0).contentWindow.$__relative_url)
		}
	});
	$("body").on("click", function (b) {
		if (!$("ul.dropdown").is(b.target) && $("ul.dropdown").has(b.target).length === 0 && $(".open").has(b.target).length === 0) {
			$("ul.dropdown").removeClass("open")
		}
	});
	$(t__wi_p.$('iframe[name="page"]').contents()).on("click", function (b) {
		if (!t__wi_p.$("ul.dropdown").is(b.target) && t__wi_p.$("ul.dropdown").has(b.target).length === 0 && t__wi_p.$(".open").has(b.target).length === 0) {
			t__wi_p.$("body").find(".navbar-header").find(".dropdown.open").removeClass("open")
		}
	});

	function __tmp_opener() {
		t___wi.open($("#__tmp_openner").attr("href"));
		$("#__tmp_openner").remove()
	}

	function __tmp_opener_link(b) {
		$("body").append('<a href="' + t__wi_p.$__source_protocol + "://" + t__wi_p.$__host_url + ":" + $__source_port + b + '" target="_blank" class="hidden" id="__tmp_openner"></a>')
	}
	t__wi_p.$(".switch-toggle").on("contextmenu", "label", function (b) {
		b.preventDefault();
		if ($(this).attr("for") == "open_webmin" || $(this).attr("for") == "open_usermin") {
			__tmp_opener_link("");
			__tmp_opener()
		} else {
			if ($(this).attr("for") == "open_virtualmin") {
				__tmp_opener_link("?virtualmin");
				__tmp_opener()
			} else {
				if ($(this).attr("for") == "open_cloudmin") {
					__tmp_opener_link("?cloudmin");
					__tmp_opener()
				} else {
					if ($(this).attr("for") == "open_webmail") {
						__tmp_opener_link("?mail");
						__tmp_opener()
					}
				}
			}
		}
	});
	t__wi_p.$(".switch-toggle").on("click", "input.dynamic", function (b) {
		if (t___p__xhr_l === 1 || t___p__xhr_r === 1) {
			b.preventDefault();
			b.stopPropagation();
			return
		}
		t__wi_p.hide_mobile_menu();
		if ($(this).attr("id") == "open_thirdlane") {
			t__wi_p.location.href = $_____link_full + "/asterisk/index.cgi";
			return
		}
		t__wi_p.t__s($(this).attr("id"));
		if ($(this).attr("id") == "open_dashboard") {
			t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi");
			t__wi_p.__cms();
			return
		}
		t__m($(this).attr("id"), false, false)
	});
	t_sel_i();
	$("aside").mCustomScrollbar({
		axis: "y",
		theme: "minimal",
		scrollInertia: 100,
		scrollButtons: false,
		callbacks: {
			onScroll: function () {
				if (!t__wi_p.$(".mobile-menu-toggler").is(":visible")) {
					t__wi_p.$(".form-control.sidebar-search").blur();
					if (t__wi_p.$("aside select") && t__wi_p.$("aside select").length > 0 && t__wi_p.$("aside select").hasClass("select2-hidden-accessible")) {
						t__wi_p.$("aside select").select2("close")
					}
				}
			}
		}
	});
	t__wi_p.$(".loader").append('<div class="loader-close" id="loader-close"><i class="fa fa-times-circle pull-right hidden"></i></div>');
	$("body").on("mouseover", "#loader-close, #loader-close-sm", function () {
		$(this).find(".fa").removeClass("hidden")
	}).on("mouseout", "#loader-close, #loader-close-sm", function () {
		$(this).find(".fa").addClass("hidden")
	});
	$("body").on("click", "#loader-close > .fa", function (b) {
		t__wi_p.t___p__xhr_l = 0;
		t__wi_p.t___p__xhr_r = 0;
		t__wi_p.$___ajax_requested_url = "_blank";
		t__wi_p.__lre()
	}).on("click", "#loader-close-sm > .fa", function (b) {
		t__wi_p.t___p__xhr_l = 0;
		t__wi_p.t___p__xhr_r = 0;
		t__wi_p.$___ajax_requested_url = "_blank";
		t__wi_p.__lle()
	});
	__shell_commands__i__ = 0;
	t__wi_p.$(".form-control.sidebar-search").focus(function (a) {
		a.preventDefault();
		a.stopPropagation();
		__shell_commands__i__ = 0
	});
	$(window).keydown(function (f) {
		if ((!t__wi_p.$(".form-control.sidebar-search").val().trim() || t__wi_p.$(".form-control.sidebar-search").val().trim().startsWith("!")) && (f.keyCode == 38 || f.keyCode == 40)) {
			typeof localStorage.shell_commands == "undefined" ? localStorage.setItem("shell_commands", JSON.stringify({})) : false;
			var g = JSON.parse(localStorage.getItem("shell_commands")),
				d = g.length;
			f.preventDefault();
			f.stopPropagation();
			__shell_commands__i__ = f.keyCode == 40 ? ++__shell_commands__i__ : --__shell_commands__i__;
			if (__shell_commands__i__ < 0) {
				__shell_commands__i__ = d - 1
			}
			if (g[__shell_commands__i__ % d]) {
				t__wi_p.$(".form-control.sidebar-search").val(g[__shell_commands__i__ % d])
			}
			return
		} else {
			if (t__wi_p.$(".form-control.sidebar-search").val().trim().startsWith("!") && f.keyCode == 27) {
				f.preventDefault();
				f.stopPropagation();
				t__wi_p.$(".form-control.sidebar-search").val("");
				return
			}
		}
		if (t__wi_p.$(".form-control.sidebar-search").val().trim().startsWith("!") && f.keyCode == 13) {
			var h = JSON.parse(localStorage.getItem("shell_commands")),
				c = [],
				j = t__wi_p.$(".form-control.sidebar-search").val().trim();
			for (var b in h) {
				c.push(h[b])
			}
			c = jQuery.grep(c, function (a) {
				return a != j
			});
			c.push(j);
			localStorage.setItem("shell_commands", JSON.stringify(c))
		}
		if (t__wi_p.$(".form-control.sidebar-search").val().trim().startsWith("!") && f.keyCode == 13 && product_name(1).toLowerCase() != "cloudmin") {
			t__wi_p.$(".form-control.sidebar-search").addClass("_shell_form_");
			f.preventDefault();
			f.stopPropagation();
			if (t__wi_p.$('iframe[name="page"]').contents() && t__wi_p.$('iframe[name="page"]').contents().find("body").data("shell") == "1") {
				$__shell_form = '<form class="__shell_form__" role="form" action="' + $_____link_full + '/shell/index.cgi" method="post" enctype="multipart/form-data">									<input type="hidden" id="cmd" name="cmd" value="' + t__wi_p.$(".form-control.sidebar-search").val().trim().substring(1).trim() + '">								</form>';
				t__wi_p.$('iframe[name="page"]').contents().find("body").append($__shell_form);
				t__wi_p.$('iframe[name="page"]').contents().find(".__shell_form__").submit();
				if (product_name(1).toLowerCase() == "virtualmin") {
					__cms()
				} else {
					if (!t__wi_p.$("a[href^='shell']").attr("href")) {
						t__wi_p.t__wm_l("open_webmin")
					}
				}
			}
		} else {
			if (t__wi_p.$(".form-control.sidebar-search").val().trim().startsWith("!") && f.keyCode == 13 && product_name(1).toLowerCase() == "cloudmin") {
				t__wi_p.$(".form-control.sidebar-search").addClass("_shell_form_");
				f.preventDefault();
				f.stopPropagation();
				if (t__wi_p.$('iframe[name="page"]').contents() && t__wi_p.$('a[target="page"][href*="/server-manager/save_serv.cgi"]').length && t__wi_p.$('a[target="page"][href*="shell=1"]').length) {
					$__shell_form = '<form class="__shell_form__" role="form" action="' + $_____link_full + '/server-manager/shell.cgi" method="post" enctype="multipart/form-data">									<input type="hidden" id="id" name="id" value="' + t__wi_p.$("#sid").val() + '">									<input type="hidden" id="cmd" name="cmd" value="' + t__wi_p.$(".form-control.sidebar-search").val().trim().substring(1).trim() + '">								</form>';
					t__wi_p.$('iframe[name="page"]').contents().find("body").append($__shell_form);
					t__wi_p.$('iframe[name="page"]').contents().find(".__shell_form__").submit();
					__cms();
					t__wi_p.$('a[href*="server-manager/save_serv.cgi"]').parent("li:not(.menu-exclude):not(.user-link)").addClass("sub_active").append('<span class="current-large"></span>').parent("ul.sub").show().parent("li:not(.menu-exclude):not(.user-link)").prev("li").addClass("active")
				}
			}
		}
	});
	$(window).keyup(function (b) {
		t__wi_p.search_control(b);
		t__wi_p.shortcut_control(b)
	});
	$("body").on("submit", "#webmin_search_form", function (b) {
		setTimeout(function () {
			t__wi_p.$(".navigation > li:not('.has-sub')").removeClass("sub_active").find("span.current-large").remove();
			t__wi_p.$(".form-control.sidebar-search").val("")
		}, 30)
	});
	if (settings_favorites) {
		$("aside").on("click", ".user-links > li.favorites", function (b) {
			$(".favorites-menu-outer").addClass("hover")
		});
		$("body").on("click", "nav.favorites-menu li a", function () {});
		$("body").on("click", ".favorites-menu-close, nav.favorites-menu li a", function () {
			t__wi_p.$(".favorites-menu-outer").removeClass("hover")
		});
		$(document).on("keydown", function (b) {
			if ($(".favorites-menu-outer").css("left") == "0px" && b.keyCode == 27) {
				t__wi_p.$(".favorites-menu-outer").removeClass("hover")
			}
		})
	}
	favicon = new Favico({
		animation: "none"
	});

	function n___fv() {
		if (!settings_notification_slider_enabled) {
			return
		}
		var a = $(".right-side-tabs .list-group-item:not(.no-notifications, .opacity-0_3)").length;
		favicon.badge(a);
		__dpt();
		if (a > 0) {
			$(".right-side-tabs-toggler button i.fa-bell").addClass("faa-ring faa-slow animated-hover");
			$(".right-side-tabs-toggler button span.badge").removeClass("hidden").text(a)
		} else {
			$(".right-side-tabs-toggler button i.fa-bell").removeClass("faa-ring faa-slow animated-hover");
			$(".right-side-tabs-toggler button span.badge").addClass("hidden").text(0)
		}
	}

	function n___ck() {
		var b = {};
		$.each(localStorage, function (j, o) {
			if (typeof j == "string" && j.indexOf("notifications_") > -1) {
				var l = j.split("_")[1],
					p = JSON.parse(o),
					d = p.title,
					g = p.time,
					h = p.timestamp,
					k = p.message,
					f = p.readStatus,
					m = p.type,
					n = p.link;
				b[g] = "" + l + "~~~~" + d + "~~~~" + g + "~~~~" + h + "~~~~" + k + "~~~~" + f + "~~~~" + m + "~~~~" + n;
				if ($('.list-group-item[id="' + l + '"][data-type="' + m + '"]').length) {
					$('.list-group-item[id="' + l + '"][data-type="' + m + '"] .list-group-item-heading small').text(moment.unix(g).fromNow())
				}
			}
		});
		var c = [];
		for (var a in b) {
			if (b.hasOwnProperty(a)) {
				c.push(a)
			}
		}
		$current_localData_notifications_sorted_keys = c.sort();
		$.each($current_localData_notifications_sorted_keys, function (j, p) {
			var o = b[p],
				l = o.split("~~~~")[0],
				d = o.split("~~~~")[1],
				g = o.split("~~~~")[2],
				h = o.split("~~~~")[3],
				k = o.split("~~~~")[4],
				f = o.split("~~~~")[5],
				m = o.split("~~~~")[6],
				n = o.split("~~~~")[7];
			if (!$('.list-group-item[id="' + l + '"][data-type="' + m + '"]').length) {
				n___ad(l, d, g, h, k, f, m, n)
			}
		})
	}

	function n___rm() {
		$.each(localStorage, function (b, a) {
			if (typeof b == "string" && b.indexOf("notifications_") > -1) {
				delete localStorage[b]
			}
		})
	}

	function n___mr(d, a, b, f) {
		var c = JSON.parse(localStorage["notifications_" + d + "_" + a]);
		localStorage.setItem("notifications_" + d + "_" + a, JSON.stringify({
			title: c.title,
			time: c.time,
			timestamp: c.timestamp,
			message: c.message,
			readStatus: b,
			type: c.type,
			link: c.link
		}));
		f && n___fv()
	}

	function n___mr_a() {
		$(".right-side-tabs .list-group-item:not(.no-notifications)").each(function () {
			$(this).addClass("opacity-0_3");
			n___mr($(this).attr("id"), $(this).data("type"), 1, 0)
		}).promise().done(function () {
			n___fv()
		})
	}

	function n___ad(j, h, g, c, d, f, a, b) {
		$(".right-side-tabs .list-group").prepend('			<a class="list-group-item right-side-tabs-notification' + (f == "1" ? " opacity-0_3" : "") + '" data-type="' + a + '" id="' + j + '" href="' + b + '">			    <div class="media-body">			    <i class="fa fa-fw fa-trash-o pull-right hidden"></i>			    <i class="af af-fw af-clear-all pull-right hidden"></i>			        <div class="list-group-item-heading">' + h + " <small>" + moment.unix(g).fromNow() + "</small></div>			        <small>" + d + "</small>			    </div>			</a>			");
		$(".right-side-tabs-no-notifications").remove();
		n___fv();
		if (!t__wi_p.$___________initial) {
			n___em()
		}
	}

	function n___em() {
		setTimeout(function () {
			if ($(".right-side-tabs .list-group-item").length === 0) {
				$(".right-side-tabs .list-group").prepend('				<div class="right-side-tabs-no-notifications" style="opacity: 0">	                <div class="list-group-item text-center no-notifications">	                    <small class="list-group-item-text text-lighter">NO NOTIFICATIONS</small>	                </div>	            </div>			');
				$(".right-side-tabs-no-notifications").animate({
					opacity: "1"
				}, $settings_animation_left_slide_time, function () {})
			}
			n___fv()
		}, $settings_animation_left_slide_time)
	}
	if ($access_level == 0) {
		$("body").append('		<div id="right-side-tabs" class="' + (settings_notification_slider_enabled ? "" : " hidden ") + "right-side-tabs" + (settings_notification_slider_fixed ? " right-side-tabs-fixed" : "") + '" data-background-style="' + settings_notification_color + '">	  		<ul class="nav nav-tabs" role="tablist">				<li role="presentation" class="active"><a href="#right-side-tabs-notifications" aria-controls="home" role="tab" data-toggle="tab">Notifications</a></li>			</ul>			<div class="tab-content">			    <div role="tabpanel" class="tab-pane active" id="right-side-tabs-notifications">		    		<div class="list-group"></div>			    </div>			    <div class="right-side-tabs-dismiss">			    	<i class="fa fa-fw fa-lg fa-refresh margined-left-8"></i>			    	<i class="fa fa-fw fa-lg fa-trash pull-right"></i>			    	<i class="af af-lg af-clear-all pull-right"></i>			  	</div>			</div>		</div>		  <div class="' + (settings_notification_slider_enabled ? "" : " hidden ") + "right-side-tabs-toggler" + (settings_notification_slider_fixed ? " hidden" : "") + '" data-background-style="' + settings_notification_color + '">		  	<button type="button" class="btn btn-primary btn-menu-toggler" style="padding-left: 6px; padding-right: 5px;' + ((__ie__() > 5 && __ie__() <= 11) ? " right: 0; position: fixed;" : "") + '">		  		<span class="badge badge-danger hidden"></span>		  		<i class="fa fa-fw fa-lg fa-bell"></i>		  	</button>		  </div>  	')
	}
	$(".right-side-tabs .tab-pane").each(function () {
		$(this).css("height", $(window).height() - 92)
	});
	$(".right-side-tabs").on("mouseover", ".list-group-item", function (a) {
		$(this).find(".fa.fa-trash-o").removeClass("hidden");
		!$(this).hasClass("opacity-0_3") && $(this).find(".af-clear-all").removeClass("hidden")
	}).on("mouseout", ".list-group-item", function (a) {
		$(this).find(".fa.fa-trash-o").addClass("hidden");
		$(this).find(".af-clear-all").addClass("hidden")
	});
	$(".right-side-tabs").on("click", "[data-port-href]", function (a) {
		a.preventDefault();
		a.stopPropagation();
		t___wi.open($(this).data("port-href"))
	});
	$(".right-side-tabs").on("click", 'a.list-group-item[data-type="csf_deny"]', function (a) {
		a.preventDefault();
		a.stopPropagation();
		if ($(a.target).is(".fa.fa-trash-o") || $(a.target).is(".af-clear-all") || $(a.target).is("[data-port-href]")) {
			return
		}
		t__wi_p.$('iframe[name="page"]').contents().find("body").append('						<form action="' + $_____link_full + '/csf/" method="post" class="hidden" id="csf_temporary_ip_entries">                    		<input type="hidden" name="action" value="temp">                		</form>');
		t__wi_p.$('iframe[name="page"]').contents().find("form#csf_temporary_ip_entries").submit();
		t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
	});
	$(".right-side-tabs").on("click contextmenu", "a.list-group-item", function (a) {
		a.preventDefault();
		if (typeof t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__num == "function" && !t__wi_p.$('iframe[name="page"]').get(0).contentWindow.__num()) {
			a.preventDefault();
			a.stopPropagation();
			return
		}
		if (a.type == "click" && ($(a.target).is(".authentic_update") || $(a.target).is(".fa-refresh"))) {
			n___mr($($(this).parents("a.list-group-item").context).attr("id"), $($(this).parents("a.list-group-item").context).data("type"), 1, 1);
			$($(this).parents("a.list-group-item").context).addClass("opacity-0_3");
			t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click");
			t__wi_p.history.pushState(null, null, $_____link_full + "/?updating-webmin-theme");
			t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/webmin/edit_themes.cgi");
			return
		}
		if (a.type == "contextmenu") {
			$(this).find(".af-clear-all").trigger("click");
			a.preventDefault();
			a.stopPropagation();
			return
		}
		if (!$(a.target).is(".fa.fa-trash-o") && !$(a.target).is(".af-clear-all") && !$(a.target).is("[data-port-href]")) {
			if ($(this).attr("href") && $(this).attr("href").length && $(this).attr("href") != "undefined" && $(this).attr("data-type") != "csf_deny") {
				$(this).addClass("opacity-0_3");
				$(this).find(".af-clear-all").addClass("hidden");
				n___mr($(this).attr("id"), $(this).data("type"), 1, 1);
				t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click");
				t__wi_p.$('iframe[name="page"]').attr("src", $(this).attr("href"))
			} else {
				$(this).addClass("opacity-0_3");
				n___mr($(this).attr("id"), $(this).data("type"), 1, 1)
			}
		} else {
			if ($(a.target).is(".af-clear-all")) {
				$(this).addClass("opacity-0_3");
				$(this).find(".af-clear-all").addClass("hidden");
				n___mr($(this).attr("id"), $(this).data("type"), 1, 1);
				return
			}
			$(this).animate({
				opacity: "0"
			}, $settings_animation_left_slide_time, function () {
				$(this).remove();
				delete localStorage["notifications_" + $(this).attr("id") + "_" + $(this).data("type")];
				n___em()
			})
		}
	});
	$(".right-side-tabs-dismiss i.fa-refresh").click(function (a) {
		t__wi_p.__si__bg_upd_exec();
		var b = $(this);
		b.addClass("fa-spin");
		setTimeout(function () {
			b.removeClass("fa-spin")
		}, 2000)
	});
	$(".right-side-tabs-dismiss i.af-clear-all").click(function (a) {
		n___mr_a()
	});
	$(".right-side-tabs-dismiss i.fa-trash").click(function (a) {
		$(".right-side-tabs .list-group-item:not(.no-notifications)").animate({
			opacity: "0"
		}, $settings_animation_left_slide_time, function () {
			$(this).remove();
			n___rm();
			n___em()
		})
	});
	$("body").on("click", ".right-side-tabs-toggler:not(.hidden)", function (a) {
		if ($(this).hasClass("opened")) {
			$(this).removeClass("opened");
			$(this).animate({
				right: "0"
			}, $settings_animation_left_slide_time);
			$(".right-side-tabs").animate({
				right: "-302"
			}, $settings_animation_left_slide_time);
			if (__ie__() > 5 && __ie__() <= 11) {
				$(this).find("button").animate({
					right: "0"
				}, $settings_animation_left_slide_time)
			}
		} else {
			$(this).addClass("opened");
			$(this).animate({
				right: "300"
			}, $settings_animation_left_slide_time);
			$(".right-side-tabs").animate({
				right: "0"
			}, $settings_animation_left_slide_time);
			if (__ie__() > 5 && __ie__() <= 11) {
				$(this).find("button").animate({
					right: "300"
				}, $settings_animation_left_slide_time)
			}
		}
	});
	$(".right-side-tabs .tab-pane").mCustomScrollbar({
		axis: "y",
		theme: "minimal",
		scrollInertia: 100,
		scrollButtons: false
	});
	$("aside, .btn-menu-toggler").click(function (a) {
		if (!t__wi_p.$(".right-side-tabs-toggler").hasClass("hidden") && t__wi_p.$(".right-side-tabs-toggler").hasClass("opened") && !$(a.target).is(".btn-menu-toggler") && !$(a.target).is(".fa-bell") && !$(a.target).is(".badge.badge-danger")) {
			t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
		}
	});
	n___em();
	n___ck();
	setTimeout(function () {
		__si__bg_upd_exec()
	}, 5000)
} else {
	typeof t__wi_p.t___p__xhr_r == "undefined" ? t__wi_p.t___p__xhr_r = 0 : false;
	loaders_dismiss();
	$(window).ajaxStart(function () {
		t__wi_p.t___p__xhr_r = 1;
		if (t__wi_p.t___p__xhr_l === 0) {
			if (settings_loader_top && t__wi_p.$___ajax_requested_url.indexOf("index.cgi/?xhr-info=1") === -1) {
				t__wi_p.NProgress.start()
			}
		}
	}).ajaxStop(function () {
		if (t__wi_p.t___p__xhr_l === 0) {
			if (settings_loader_top && __num()) {
				t__wi_p.NProgress.done()
			}
			if (t__wi_p.t___p__ll === 1) {
				t__wi_p.__lle()
			}
		}
		t__wi_p.t___p__xhr_r = 0
	});
	$("body").attr("style", $("body").data("style"));

	function __r____changed() {
		if ($("body").attr("class") && $("body").attr("class").indexOf("filemin") > -1) {
			$(".total_size_data").parent("span").addClass("hidden");
			var a = _f__table.dataTable().$("tr.hl-aw", {
				filter: "applied"
			}).length;
			$(".total_selected span").text(a)
		}
	}

	function __f___mn() {
		var b = $("body").attr("class");
		if (b) {
			b = b.split(/\s+/)[0]
		} else {
			b = "filemin"
		}
		return b
	}

	function __f___gd() {
		return $(_f__table.fnGetNodes()).find("input").add($("#list_form > input")).serialize()
	}

	function _f__gr(b) {
		if (b) {
			return $(_f__table.fnGetNodes()).find("input:checked")
		} else {
			return $(_f__table.fnGetNodes()).find("input")
		}
	}

	function __f___ub() {
		$("div button.filemin-button-delete").removeClass("disabled").attr("onclick", "removeDialog()");
		$(".filemin-button-chmod").removeClass("disabled").find("a").attr("onclick", "chmodDialog()");
		$(".filemin-button-chown").removeClass("disabled").find("a").attr("onclick", "chownDialog()");
		$(".filemin-button-compress").removeClass("disabled").find("a").attr("onclick", "compressDialog()");
		$(".filemin-button-copy").removeClass("disabled");
		$(".filemin-button-cut").removeClass("disabled")
	}

	function __f___lb() {
		$("div button.filemin-button-delete").addClass("disabled").removeAttr("onclick");
		$(".filemin-button-chmod").addClass("disabled").find("a").removeAttr("onclick");
		$(".filemin-button-chown").addClass("disabled").find("a").removeAttr("onclick");
		$(".filemin-button-compress").addClass("disabled").find("a").removeAttr("onclick");
		$(".filemin-button-copy").addClass("disabled").find("a").removeAttr("onclick");
		$(".filemin-button-cut").addClass("disabled").find("a").removeAttr("onclick")
	}

	function __f_____sl() {}

	function __f_____hl() {}

	function __f_____hl_() {
		setTimeout(function () {}, 750)
	}

	function __f_____lo(c, d) {
		if (d === true) {
			$("body").find("#list_form table tbody").addClass((c ? " filemin-updating" : "") + "");
			$("body").find("ul.pagination").addClass("pointer-events-none")
		}
		__f_____sl()
	}

	function __f_____ul() {
		$("body").find("#list_form table tbody").css("opacity", "1").removeClass("filemin-updating");
		$("body").find("ul.pagination").css("opacity", "1").removeClass("pointer-events-none");
		__f_____hl();
		$(".btn-group.pull-right > .btn-group > button").removeClass("disabled")
	}

	function __f____a(j, g) {
		var l = $('#list_form > input[type="hidden"][name="path"]').val();
		if (j != "bookmark") {
			__f_____lo(false, true)
		}
		if (j === "copy" || j === "cut") {
			__f_____ul();
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/" + j + ".cgi",
				data: __f___gd(),
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error")
					} else {
						delete localStorage.cut;
						delete localStorage.copy;
						localStorage.setItem(j, 1);
						$(".filemin-button-paste").removeClass("disabled")
					}
					if (j === "copy") {
						setTimeout(function () {
							messenger('<i class="fa fa-clone">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_copying_successful"), 5, "success")
						}, 10)
					} else {
						if (j === "cut") {
							setTimeout(function () {
								messenger('<i class="fa fa-scissors">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_cutting_successful"), 5, "warning")
							}, 10)
						}
					}
				},
				error: function (a) {}
			})
		}
		if (j === "paste") {
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/paste.cgi?path=" + l,
				data: false,
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul()
					} else {
						delete localStorage.cut;
						if (!localStorage.copy) {
							$(".filemin-button-paste").addClass("disabled")
						}
						messenger('<i class="fa fa-clipboard">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_pasting_successful"), 5, "success");
						__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
					}
				},
				error: function (a) {}
			})
		}
		if (j === "extract") {
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/" + g,
				data: false,
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error")
					} else {}
					messenger('<i class="fa fa-file-archive-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_extracting_archive") + " " + lang("theme_xhred_global_please_wait"), 5, "info");
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 0, j)
				},
				error: function (a) {}
			})
		}
		if (j === "bookmark") {
			__f_____sl();
			__f_____hl_();
			$("body").find("ul.dropdown-menu.at-filemin-favorites-dropdown").append('<li><a href="index.cgi?path=' + l + '" style="padding-left: 12px;">' + l + "</a></li>");
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/" + g,
				data: false,
				dataType: "text",
				success: function (a) {
					messenger('<i class="fa fa-bookmark-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_bookmark_success").replace("%value", (l ? l : "/")), 5, "info")
				},
				error: function (a) {}
			})
		}
		if (j === "delete") {
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/delete.cgi",
				data: __f___gd(),
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error")
					}
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
				},
				error: function (a) {}
			})
		}
		if (j === "rename") {
			var h = $('#list_form > input[type="hidden"][name="path"]').val();
			modal_dismiss();
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/rename.cgi",
				data: $("#renameForm").serialize(),
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					}
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
				},
				error: function (a) {}
			})
		}
		if (j === "create_folder") {
			var h = $('#list_form > input[type="hidden"][name="path"]').val();
			modal_dismiss();
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/create_folder.cgi",
				data: $("#createFolderForm").serialize(),
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					}
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
				},
				error: function (a) {}
			})
		}
		if (j === "create_file") {
			var h = $('#list_form > input[type="hidden"][name="path"]').val();
			modal_dismiss();
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/create_file.cgi",
				data: $("#createFileForm").serialize(),
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					}
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
				},
				error: function (a) {}
			})
		}
		if (j === "url_download") {
			var h = $('#list_form > input[type="hidden"][name="path"]').val();
			modal_dismiss();
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/http_download.cgi",
				data: $("#downFromUrlForm").serialize(),
				dataType: "text",
				success: function (a) {
					if (!$(a).find(".panel-body").text().match(/100 %/) && !$(a).find(".panel-body").text().match(/100%/) && !$(a).find(".panel-body h3").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 0, j);
						return
					} else {
						if ($(a).find(".panel-body h3").length) {
							messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body h3").html(), 10, "error");
							__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 0, j);
							return
						} else {
							messenger('<i class="fa fa-download">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "success");
							__f____r("get", "index.cgi?path=" + (h ? h : ""), false, 0)
						}
					}
				},
				error: function (a) {}
			})
		}
		if (j === "search") {
			var h = $('#list_form > input[type="hidden"][name="path"]').val(),
				k = $("#searchForm").find('input[name="query"]').val();
			modal_dismiss();
			messenger('<i class="fa fa-search">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_searching").replace("%value", $('#searchForm input[name="query"]').val()) + " " + lang("theme_xhred_global_please_wait"), 5, "info");
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/search.cgi",
				data: $("#searchForm").serialize(),
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					}
					var b = $('body[class*="filemin"]');
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 0, "search");
					$("#list_form table").find(".fa-i-cursor").parent("a.action-link").remove();
					$("#list_form table").find(".at-font-box-remove").parent("a.action-link").remove();
					$("#list_form table").find(".fa-edit").parent("a.action-link").remove();
					if (b.find(".breadcrumb .fa-hdd-o").length) {
						b.find(".breadcrumb .fa-hdd-o").removeClass("fa-hdd-o").addClass("fa-search").addClass("text-light")
					} else {
						b.find(".breadcrumb li:first-child a").html('<i class="fa fa-search text-light"></i>')
					}
					b.find(".breadcrumb li:not(:first-child) a").replaceWith(function () {
						return $("<span>", {
							html: $(this).html()
						})
					});
					b.find(".breadcrumb li").addClass("text-light");
					$(".__filemin-search-results").remove();
					$_br = $(".breadcrumb > li:last-child");
					$_br.html($_br.html() + '<span class="__filemin-search-results">' + ($(".breadcrumb > li:last-child a i").hasClass("fa-search") ? "&nbsp;&nbsp;&nbsp;/&nbsp;" : "") + '&nbsp;&nbsp;:&nbsp;&nbsp;<span class="text-primary __filemin-search-results-data cursor-pointer">`<em>' + k + "</em>`</span></span>");
					if (__list_table_total_rows > 1) {
						messenger('<i class="fa fa-search">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_search_founds").replace("%value", __list_table_total_rows), 5, "success")
					} else {
						if (__list_table_total_rows == 1) {
							messenger('<i class="fa fa-search">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_search_found"), 5, "success")
						} else {
							messenger('<i class="fa fa-search">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_search_no_matches"), 5, "warning")
						}
					}
					if (settings_favorites) {
						f__dt()
					}
				},
				error: function (a) {}
			})
		}
		if (j === "chmod") {
			$("#list_form").append('<input type="hidden" name="perms" value="' + g[0] + '" class="_filemin-tmp-chmod-inputs">');
			$("#list_form").append('<input type="hidden" name="applyto" value="' + g[1] + '" class="_filemin-tmp-chmod-inputs">');
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/chmod.cgi",
				data: __f___gd(),
				dataType: "text",
				success: function (a) {
					$("#list_form ._filemin-tmp-chmod-inputs").remove();
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					}
					modal_dismiss();
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
				},
				error: function (a) {}
			})
		}
		if (j === "chown") {
			$("#list_form").append('<input type="hidden" name="owner" value="' + g[0] + '" class="_filemin-tmp-chown-inputs">');
			$("#list_form").append('<input type="hidden" name="group" value="' + g[1] + '" class="_filemin-tmp-chown-inputs">');
			$("#list_form").append('<input type="hidden" name="recursive" value="' + g[2] + '" class="_filemin-tmp-chown-inputs">');
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/chown.cgi",
				data: __f___gd(),
				dataType: "text",
				success: function (a) {
					$("#list_form ._filemin-tmp-chown-inputs").remove();
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					}
					modal_dismiss();
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
				},
				error: function (a) {}
			})
		}
		if (j === "compress") {
			$("#list_form").append('<input type="hidden" name="arch" value="' + g[0] + '" class="_filemin-tmp-compress-inputs">');
			$("#list_form").append('<input type="hidden" name="method" value="' + g[1] + '" class="_filemin-tmp-compress-inputs">');
			modal_dismiss();
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/compress.cgi",
				data: __f___gd(),
				dataType: "text",
				success: function (a) {
					$("#list_form ._filemin-tmp-compress-inputs").remove();
					if (!$(a).find("#list_form").length) {
						messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					}
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), 1, j)
				},
				error: function (a) {}
			})
		}
	}

	function __f___cs() {
		$("#list_form table tbody tr").removeClass("m-active m-not-active")
	}

	function __f___ds_a() {
		var a = document.getElementsByClassName("ui_checked_columns");
		for (i = 0; i < a.length; i++) {
			var b = a[i].getElementsByTagName("input")[0];
			if (b.checked) {
				rowClick(a[i])
			}
		}
		if (settings_window_customized_checkboxes_and_radios) {
			$(".acheckbox, .aradio").icheck("updated")
		}
		__f___lb()
	}

	function __f__get_fs() {
		$(".total_size_data").parent("span").addClass("hidden");
		$(".total_size_data").data("total", 0);
		$.each(_f__table.dataTable().$("tr.hl-aw", {
			filter: "applied"
		}), function () {
			var d = $(this),
				c = $('#list_form > input[type="hidden"][name="path"]').val().replace(/\/$/g, "") + "/" + d.find("td:nth-child(3) a").text(),
				a = d.find("td.column-filesize").find("label"),
				b = _f__table.dataTable().$("tr.hl-aw", {
					filter: "applied"
				});
			__f_____sl();
			a.html('<span class="cspinner" style="margin-top: -11px; margin-left: 14px;"><span class="cspinner-icon small"></span></span>');
			$.ajax({
				type: "POST",
				url: $_____link_full + "/index.cgi/?xhr-get_size=1&xhr-get_size_path=" + c,
				data: false,
				dataType: "text",
				success: function (f) {
					var h = f.split("|");
					a.html(h[0]);
					var g;
					if (isNaN(parseInt(h[1]))) {
						g = 0
					} else {
						g = parseInt(h[1])
					}
					$(".total_size_data").data("total", (parseInt($(".total_size_data").data("total")) + g));
					if (!b.find("td.column-filesize").find("label").find(".cspinner").length) {
						$.ajax({
							type: "POST",
							url: $_____link_full + "/index.cgi/?xhr-get_nice_size=1&xhr-get_nice_size_sum=" + parseInt($(".total_size_data").data("total")),
							data: false,
							dataType: "text",
							success: function (k) {
								$(".total_size_data").text(k);
								$(".total_size_data").parent("span").removeClass("hidden")
							},
							error: function (j) {}
						});
						setTimeout(function () {
							__f_____hl()
						}, 600)
					}
				},
				error: function (f) {}
			})
		})
	}

	function __f__c__m() {
		var a = $("#list_form table");
		if (a.hasClass("contextmenu-initialized")) {
			return
		}
		a.addClass("contextmenu-initialized");
		a.contextMenu({
			menuSelector: "#__f__c__m",
			menuSelectorTriggered: function (d, b) {
				if ($("#DataTables_Table_0 tbody tr input").length && d.parents("tr").find("input:checked").length === 0) {
					__f___ds_a();
					d.parents("tr").find("td:first-child input").trigger("click");
					var c = jQuery.Event("keydown");
					c.which = 40;
					$("body").trigger(c);
					d.parents("tr").find("td:first-child").trigger("contextmenu")
				}
				if (d.parents("tr").find("i.fa-folder-open-o").length) {
					$(".context-filemin-dependent-goto").removeClass("hidden")
				} else {
					$(".context-filemin-dependent-goto").addClass("hidden")
				}
				if (!d.parents("tr").find("i.fa-edit").length) {
					$(".context-filemin-dependent-edit").addClass("hidden")
				} else {
					$(".context-filemin-dependent-edit").removeClass("hidden")
				}
				if (!d.parents("tr").find('a[href*="download.cgi"]').length) {
					$(".context-filemin-dependent-download").addClass("hidden")
				} else {
					$(".context-filemin-dependent-download").removeClass("hidden")
				}
				if (!d.parents("tr").find("i.fa.at-font-box-remove").length) {
					$(".context-filemin-dependent-extract").addClass("hidden")
				} else {
					$(".context-filemin-dependent-extract").removeClass("hidden")
				}
				if ($(".filemin-button-compress").hasClass("disabled")) {
					$("a[data-context-newarchive]").addClass("disabled").parent("li").addClass("disabled")
				} else {
					$("a[data-context-newarchive]").removeClass("disabled").parent("li").removeClass("disabled")
				}
				if ($(".filemin-button-copy").hasClass("disabled")) {
					$("a[data-context-copy]").addClass("disabled").parent("li").addClass("disabled")
				} else {
					$("a[data-context-copy]").removeClass("disabled").parent("li").removeClass("disabled")
				}
				if ($(".filemin-button-cut").hasClass("disabled")) {
					$("a[data-context-cut]").addClass("disabled").parent("li").addClass("disabled")
				} else {
					$("a[data-context-cut]").removeClass("disabled").parent("li").removeClass("disabled")
				}
				if ($(".filemin-button-paste").hasClass("disabled")) {
					$("a[data-context-paste]").addClass("disabled").parent("li").addClass("disabled")
				} else {
					$("a[data-context-paste]").removeClass("disabled").parent("li").removeClass("disabled")
				}
				if ($(".filemin-button-delete").hasClass("disabled")) {
					$("a[data-context-delete]").addClass("disabled").parent("li").addClass("disabled");
					$("a[data-context-rename]").addClass("disabled").parent("li").addClass("disabled")
				} else {
					$("a[data-context-delete]").removeClass("disabled").parent("li").removeClass("disabled");
					$("a[data-context-rename]").removeClass("disabled").parent("li").removeClass("disabled")
				}
				if ($(".filemin-button-chmod").hasClass("disabled") && $(".filemin-button-chown").hasClass("disabled")) {
					$(".context-properties").addClass("disabled")
				} else {
					$(".context-properties").removeClass("disabled")
				}
				_f__table.dataTable().$("tr.hl-aw", {
					filter: "applied"
				}).length ? $("a[data-context-calculate-selected-size]").parent("li").removeClass("hidden") : $("a[data-context-calculate-selected-size]").parent("li").addClass("hidden");
				if ($(".filemin-button-chmod").hasClass("disabled")) {
					$("a[data-context-chmod]").addClass("disabled").parent("li").addClass("disabled")
				} else {
					$("a[data-context-chmod]").removeClass("disabled").parent("li").removeClass("disabled")
				}
				if ($(".filemin-button-chown").hasClass("disabled")) {
					$("a[data-context-chown]").addClass("disabled").parent("li").addClass("disabled")
				} else {
					$("a[data-context-chown]").removeClass("disabled").parent("li").removeClass("disabled")
				}
			},
			menuSelected: function (b, c) {
				if (c.data("context-goto") == "1") {
					b.parents("tr").find('a.filemin-follow-file[href^="index.cgi?"]').trigger("click")
				}
				if (c.data("context-select-all") == "1") {
					$('button[onclick="selectAll()"]').trigger("click");
					__r____changed()
				}
				if (c.data("context-deselect-all") == "1") {
					__f___ds_a();
					__r____changed()
				}
				if (c.data("context-invert-selection") == "1") {
					$('button[onclick="invertSelection()"]').trigger("click");
					__r____changed()
				}
				if (c.data("context-refresh") == "1") {
					$("button > .fa-refresh").parent("button").trigger("click")
				}
				if (c.data("context-newfile") == "1") {
					$('a[onclick="createFileDialog()"]').trigger("click")
				}
				if (c.data("context-newfolder") == "1") {
					$('a[onclick="createFolderDialog()"]').trigger("click")
				}
				if (c.data("context-newarchive") == "1") {
					$('a[onclick="compressDialog()"]').trigger("click")
				}
				if (c.data("context-upload") == "1") {
					$('a[onclick="viewReadyForUpload()"]').trigger("click")
				}
				if (c.data("context-download") == "1") {
					$('a[onclick="downFromUrlDialog()"]').trigger("click")
				}
				if (c.data("context-copy") == "1") {
					$(".filemin-button-copy a").trigger("click")
				}
				if (c.data("context-cut") == "1") {
					$(".filemin-button-cut a").trigger("click")
				}
				if (c.data("context-paste") == "1") {
					$(".filemin-button-paste a").trigger("click")
				}
				if (c.data("context-delete") == "1") {
					$(".filemin-button-delete").trigger("click")
				}
				if (c.data("context-bookmarks") == "1") {
					$('a[href^="bookmark.cgi"]').trigger("click")
				}
				if (c.data("context-search") == "1") {
					$('a[onclick="searchDialog()"]').trigger("click")
				}
				if (c.data("context-edit") == "1") {
					b.parents("tr").addClass("m-active");
					b.parents("tr").find('a[href^="edit_file.cgi?"]').trigger("click")
				}
				if (c.data("context-rename") == "1") {
					b.parents("tr").find('a[onclick^="renameDialog("]').trigger("click")
				}
				if (c.data("context-download-file") == "1") {
					$(b.parents("tr").find('a[href^="download.cgi?"]'))[0].click()
				}
				if (c.data("context-extract") == "1") {
					b.parents("tr").find('a[href^="extract.cgi?"]').trigger("click")
				}
				if (c.data("context-calculate-selected-size") == "1") {
					__f__get_fs()
				}
				if (c.data("context-chmod") == "1") {
					$('a[onclick="chmodDialog()"]').trigger("click")
				}
				if (c.data("context-chown") == "1") {
					$('a[onclick="chownDialog()"]').trigger("click")
				}
			}
		})
	}

	function __f___u(r, p, k, q) {
		$("#DataTables_Table_0").dataTable().fnDestroy();
		$("body").unbind("keydown", onkeydown);
		if (r === "upd") {
			var n = p.find(".fa-font").first().parents("td").index();
			$("body").find("#list_form table tbody").empty();
			$("body").find("#list_form table tbody").append(p);
			__f_____ul();
			__mr()
		} else {
			var n = $("#list_form table").find(".fa-font").first().parents("td").index()
		}
		if (typeof localStorage["DataTables_DataTables_Table_0_/" + __f___mn() + "/index.cgi"] != "undefined") {
			_filemin_data = JSON.parse(localStorage["DataTables_DataTables_Table_0_/" + __f___mn() + "/index.cgi"])
		} else {
			_filemin_data = false
		}
		var m = ($.inArray($("#headln2r > a[data-config-pagination]").data("config-pagination"), [5, 10, 15, 20, 25, 30, 35, 40, 50, 100, 250, 500, 1000]) > -1 ? $("#headln2r > a[data-config-pagination]").data("config-pagination") : 25),
			l = (($.inArray(parseInt(localStorage.getItem("_________per_page")), [5, 10, 15, 20, 25, 30, 35, 40, 50, 100, 250, 500, 1000]) > -1) ? parseInt(localStorage.getItem("_________per_page")) : false),
			o = ((_filemin_data.length && !l) ? (l ? l : _filemin_data.length) : m);
		delete localStorage._________per_page;
		if (n != 3 && n != 4) {
			n = false
		}
		if (settings_window_customized_checkboxes_and_radios) {
			$(".acheckbox, .aradio").icheck("destroy");
			$('input[type="radio"], input[type="checkbox"]').icheck({
				checkboxClass: "acheckbox",
				radioClass: "aradio",
				increaseArea: "20%"
			})
		}
		__f__c__m();
		$("#list_form > table").unbind("click");
		$("#list_form > table").on("click", 'a .fa.fa-edit, a[href^="edit_file.cgi"]', function (a) {
			a.preventDefault();
			a.stopPropagation();
			var a = jQuery.Event("keydown");
			a.which = 115;
			$("body").trigger(a)
		});
		_f__table = $("#list_form > table").dataTable({
			order: [],
			aaSorting: [],
			bDestroy: true,
			fnDrawCallback: function (b) {
				__list_table_total_rows = b.fnRecordsTotal();
				if (b.fnRecordsTotal() <= b._iDisplayLength) {
					$(".dataTables_paginate").hide()
				} else {
					$(".dataTables_paginate").show()
				}
				var d = $("#list_form table"),
					c = d.find(".fa-font").parents("td").index();
				if (c > 1 && settings_thirdparty_filemin_hide_actions == true) {
					$("#list_form table thead th").eq(c).addClass("hidden");
					d.find(".fa-font").parents("td").addClass("hidden")
				}
				$("#DataTables_Table_0_previous > a").html('<i class="fa fa-angle-left"></i>').css("border-top-left-radius", "2px").css("border-bottom-left-radius", "2px");
				$("#DataTables_Table_0_next > a").html('<i class="fa fa-angle-right"></i>').css("border-top-right-radius", "2px").css("border-bottom-right-radius", "2px");
				d.find(".fa-font").removeClass("fa-font").addClass("fa-i-cursor").css("margin-right", "5px").css("margin-left", "5px");
				d.find(".fa-external-link").removeClass("fa-external-link").addClass("at-font-box-remove").css("margin-right", "5px").css("margin-left", "5px");
				d.find(".fa-edit").css("margin-right", "7px").css("margin-left", "7px");
				d.find(".fa-arrow-right").removeClass("fa-arrow-right").addClass("fa-folder-open-o").css("margin-right", "30px").css("margin-left", "30px").parent("a").addClass("filemin-follow-file");
				if ($(".breadcrumb li:first-child a").find(".fa-search").length) {
					d.find(".fa-i-cursor").parent("a.action-link").remove();
					d.find(".at-font-box-remove").parent("a.action-link").remove();
					d.find(".fa-edit").parent("a.action-link").remove()
				}
				$.each($("#list_form table tbody tr:not('.row-filesize-done') td"), function () {
					if (/((\d+(\s+)|\d+\.\d+(\s+)))(TB|GB|MB|KB|Byte|Bytes|ТБ|ГБ|МБ|КБ|Байт)|(Unlimited|Ubegrenset|Nielimitowane|Ilimitado|无限制|Не ограничено|No Limit|Same as admin)/i.test($(this).text())) {
						if ($(this).index() > 1) {
							list_form_table_file_size = $(this).index()
						}
					}
				}).promise().done(function () {
					if (typeof list_form_table_file_size != "undefined") {
						$.each($("#list_form table tbody tr:not('.row-filesize-done') td"), function () {
							if ($(this).parent("tr").find('img[src$=".png"]').length) {
								$(this).parent("tr").find("td").eq(list_form_table_file_size).addClass("column-filesize")
							}
							if ($(this).parent("tr").find('img[src$="inode-directory.png"]').length || $(this).parent("tr").find('img[src$="inode-symlink.png"]').length || $(this).parent("tr").find('img[src$="inode-mount-point.png"]').length) {
								$(this).parent("tr").find("td").eq(list_form_table_file_size).addClass("column-filesize").find("label").text("")
							}
						}).promise().done(function () {
							$("#list_form table thead th").eq(list_form_table_file_size).css("min-width", "51px")
						})
					}
				});
				if (!$(".breadcrumb li:first-child").find(".fa.fa-keyboard-o").length) {
					$(".breadcrumb li:first-child").prepend('<a class="fa fa-keyboard-o popover-path" style="position: absolute; margin-left: -12px; margin-top: 4px; font-size: 80%;" data-container="body" data-toggle="popover-path" data-placement="' + (settings_thirdparty_filemin_hide_toolbar != true ? "right" : "left") + '" data-html="true" data-trigger="click" data-content=\'<div class="form-horizontal"> <div class="input-group input-group-sm"> <span class="input-group-addon"><i class="fa fa-folder-open-o"></i></span><input type="text" class="form-control popover-path-input" placeholder="' + lang("theme_xhred_filemin_manual_path") + '"> <span class="input-group-btn" style="width:0;"> <button class="btn btn-sm btn-default popover-path-button" type="button"><i class="fa fa-chevron-circle-right text-lighter"></i></button> </span> </div> </div>\'></a>');
					if (settings_thirdparty_filemin_hide_toolbar != true) {
						$(".fa.fa-keyboard-o.popover-path").detach().appendTo(".breadcrumb li:last-child");
						$(".fa.fa-keyboard-o.popover-path").css("margin-left", "2px")
					}
					$('[data-toggle="popover-path"]').popover()
				}
				var a = $("#list_form table tbody tr td:nth-child(2)");
				a.unbind("mouseover");
				a.on("mouseover", "img", function (j) {
					var s = $(this).parents("td"),
						h = s.find('img[src*="inode-symlink"]'),
						f = s.next("td").find("a"),
						g = $('#list_form > input[type="hidden"][name="path"]').val().replace(/\/$/g, "") + "/" + f.text();
					if (h.length) {
						if (h.attr("symlink-title") != 1) {
							!h.parent().find(".cspinner").length && h.before('<span class="cspinner" style="margin-top: 1px; margin-left: -20px;"><span class="cspinner-icon small"></span></span>');
							$.ajax({
								type: "POST",
								url: $_____link_full + "/index.cgi/?xhr-get_symlink=1&xhr-get_symlink_path=" + g,
								data: false,
								dataType: "text",
								success: function (t) {
									h.attr("data-content", '<code class="text-nowrap">' + t + "</code>").attr("symlink-title", "1").data("trigger", "manual").data("html", true).data("placement", "right").data("container", "body").data("animation", false);
									h.is(":hover") && h.popover("show");
									h.on("mouseenter", function () {
										if (h.is(":hover")) {
											$(this).popover("show")
										}
									}).on("mouseleave", function () {
										var u = this;
										setTimeout(function () {
											if (!$(".popover:hover").length && !h.is(":hover")) {
												$(u).popover("hide")
											}
										}, 200)
									});
									h.parent().find(".cspinner").remove()
								},
								error: function (t) {}
							})
						}
					}
				})
			},
			initComplete: function (b) {
				$("#list_form table tbody").on("mouseout", "tr", function (c) {
					__f___cs()
				}).on("mouseover", "tr", function (c) {
					$(this).addClass("m-active")
				});
				if (k === 0 || $("#list_form table tbody tr").length === 1 && $("#list_form table tbody tr td.dataTables_empty").length) {
					$("div.dataTables_filter input").val("").trigger("keyup")
				}
				$('select[name="DataTables_Table_0_length"]').val(o).change();
				var a;
				$("body").on("keydown", function (c) {
					var h = c.keyCode ? c.keyCode : c.which;
					if ($("#__f__c__m").is(":visible") && h == 27) {
						$("#__f__c__m").css("display", "none");
						return
					} else {
						if ($("#__f__c__m").is(":visible")) {
							return
						}
					}
					if ($("input.popover-path-input").is(":focus")) {
						return
					}
					if ((h == 120 || h == 121) && !c.ctrlKey && !c.shiftKey && !$(":focus").parents(".jsPanel").is(".jsPanel") && !$(".modal.in").length) {
						if (h == 120) {
							$('a[onclick="downFromUrlDialog()"]').trigger("click");
							return
						}
						if (h == 121) {
							$('a[onclick="viewReadyForUpload()"]').trigger("click");
							return
						}
					}
					if (!$("input.popover-path-input").is(":focus") && String.fromCharCode(h).toLowerCase() == "l" && c.ctrlKey && !$(":focus").parents(".jsPanel").is(".jsPanel") && !$(".modal.in").length) {
						c.preventDefault();
						c.stopPropagation();
						var w = $('#headln2r > a[href^="config.cgi"]');
						if (is_scrolled_into_view(w)) {
							$('[data-toggle="popover-path"]').popover("show")
						} else {
							w.scrollintoview({
								duration: 200,
								direction: "vertical",
								complete: function () {
									setTimeout(function () {
										$('[data-toggle="popover-path"]').popover("show")
									}, 100)
								}
							})
						}
						return
					}
					if (h == 93 && !$(":focus").parents(".jsPanel").is(".jsPanel") && !$(".modal.in").length && $("#list_form table tbody tr.m-active").length) {
						c.preventDefault();
						c.stopPropagation();
						$("#list_form table tbody tr.m-active").find("td:first-child input").trigger("contextmenu");
						return
					}
					if (h == 13 && $(":focus").parents(".jsPanel").is(".jsPanel")) {
						if (c.ctrlKey && c.shiftKey) {
							$(":focus").parents(".jsPanel").find("._filemin_file_editor_save").trigger("click");
							$(":focus").parents(".jsPanel").find(".jsPanel-btn-close").trigger("click")
						} else {
							if (c.ctrlKey) {
								$(":focus").parents(".jsPanel").find("._filemin_file_editor_save").trigger("click")
							}
						}
					}
					if (h == 27 && $(":focus").parents(".jsPanel").is(".jsPanel")) {
						if (c.ctrlKey) {
							$(":focus").parents(".jsPanel").find(".jsPanel-btn-min").trigger("click")
						} else {
							$(":focus").parents(".jsPanel").find(".jsPanel-btn-close").trigger("click")
						}
						return
					}
					if ($(":focus").parents(".jsPanel").is(".jsPanel")) {
						return
					}
					if (h == 13 && $("#list_form table tbody tr.m-active").length === 1 && !$(".modal.in").length && t__wi_p.t___p__xhr_r === 0) {
						$("#list_form table tbody tr.m-active").find("td:first-child").trigger("click");
						return
					}
					if (!$(".modal.in").length && c.ctrlKey && (String.fromCharCode(h).toLowerCase() == "c" || String.fromCharCode(h).toLowerCase() == "v" || String.fromCharCode(h).toLowerCase() == "x")) {
						if ($("#list_form table tbody tr td:first-child").find("input:checked").length === 0 && $("#list_form table tbody tr.m-active").length === 1 && c.ctrlKey && (String.fromCharCode(h).toLowerCase() == "c" || String.fromCharCode(h).toLowerCase() == "v" || String.fromCharCode(h).toLowerCase() == "x")) {
							$("#list_form table tbody tr.m-active").find("td:first-child input").trigger("click")
						}
					}
					if (h == 13) {
						if ($(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							if ($(".modal.in .modal-footer button._at_filemin_delete_submit").length) {
								$(".modal.in .modal-footer button._at_filemin_delete_submit").trigger("click")
							} else {
								if ($(".modal.in .modal-footer button.filemin-submitter-chmod").length) {
									$(".modal.in .modal-footer button.filemin-submitter-chmod").trigger("click")
								} else {
									if ($(".modal.in .modal-footer button._at_filemin_create_folder_submit").length) {
										$(".modal.in .modal-footer button._at_filemin_create_folder_submit").trigger("click")
									} else {
										if ($(".modal.in .modal-footer button._at_filemin_create_file_submit").length) {
											$(".modal.in .modal-footer button._at_filemin_create_file_submit").trigger("click")
										} else {
											if ($(".modal.in .modal-footer button.filemin-submitter-compress").length) {
												$(".modal.in .modal-footer button.filemin-submitter-compress").trigger("click")
											} else {
												if ($(".modal.in .modal-footer button._at_filemin_rename_submit").length) {
													$(".modal.in .modal-footer button._at_filemin_rename_submit").trigger("click")
												} else {
													if ($(".modal.in .modal-footer button._at_filemin_search_submit").length) {
														$(".modal.in .modal-footer button._at_filemin_search_submit").trigger("click")
													}
												}
											}
										}
									}
								}
							}
						}
					}
					if (h == 13 && $("#list_form table tbody tr").length === 1 && !$(".modal.in").length && t__wi_p.t___p__xhr_r === 0) {
						$("#list_form table tbody tr").find("td:first-child").trigger("click");
						return
					}
					if (h == 13) {
						return
					}
					if ((h == 32) && !c.shiftKey && !$("#list_form table tbody tr.m-active").length) {
						return
					}
					if ((h == 46 || h == 113 || h == 114 || h == 115 || h == 116 || h == 117 || h == 119) && !_f__table.dataTable().$("tr.hl-aw", {
							filter: "applied"
						}).length && !$(".ui_checked_columns input:checked").length && !$(".modal.in").length && !$(".popover").is(":visible") && !$("input").is(":focus") && !$("#list_form table tbody tr.m-active").length && (!c.shiftKey || (h == 116 && c.shiftKey) || (h == 115 && !c.shiftKey))) {
						c.preventDefault();
						c.stopPropagation();
						if (t___wi.document.activeElement && $(t___wi.document.activeElement).is('a[href^="edit_file.cgi"]')) {
							return
						}
						messenger('<i class="fa fa-exclamation-circle">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_nothing_is_selected"), 3, "warning");
						return
					}
					if (!c.shiftKey && !c.ctrlKey && !c.altKey && !c.metaKey && !$("#__f__c__m").is(":visible")) {
						if (h != 33 && h != 34 && $("#list_form table tbody tr.m-active").length) {
							c.preventDefault();
							c.stopPropagation()
						}
						if (typeof ___contextmenu__triggered___ != "undefined") {
							return
						}
						a = $("#list_form table tbody tr.m-active").removeClass("m-active");
						var j = a.index();
						var y = a.index();
						if (h == 38 && !$(".modal.in").length) {
							y--;
							$(".dataTables_filter label input").blur();
							$("#list_form table tbody tr").addClass("m-not-active")
						}
						if (h == 40 && !$(".modal.in").length) {
							y++;
							$(".dataTables_filter label input").blur();
							$("#list_form table tbody tr").addClass("m-not-active")
						}
					}
					if ((h == 38 || h == 40 || h == 32 || h == 13 || h == 46 || h == 119 || h == 117 || h == 115 || h == 116 || h == 113 || h == 114) && !$(".modal.in").length) {
						a = $("#list_form table tbody tr").eq(y).addClass("m-active m-not-active")
					}
					if (h == 27) {
						c.preventDefault();
						c.stopPropagation();
						$('.modal.in button[data-dismiss="modal"]').trigger("click")
					}
					if (h == 35 && !$("input").is(":focus")) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							a = $("#list_form table tbody tr").eq(parseInt($("#list_form table tbody tr").length) - 1).addClass("m-active m-not-active")
						}
					}
					if (h == 36 && !$("input").is(":focus")) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							a = $("#list_form table tbody tr").eq(0).addClass("m-active m-not-active")
						}
					}
					if (h == 13) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							$(".dataTables_filter label input").blur();
							$("#list_form table tbody tr.m-active").find("td:first-child").trigger("click")
						}
					}
					if (h == 8 && !$(".filemin-main-spinner").is(":visible") && !$("input").is(":focus")) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							$('#headln2l > a[href*="filemin"][href*="index.cgi"]:not(.hidden)').trigger("click")
						}
					}
					if (h == 32) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							var v = $("#list_form table tbody tr.m-active"),
								d = jQuery.Event("keydown");
							v.find("td:first-child input").trigger("click");
							d.which = 40;
							$("body").trigger(d)
						}
					}
					if (h == 106 || (c.shiftKey && h == 56)) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							$('body button[onclick="invertSelection()"]').trigger("click");
							__r____changed()
						}
					}
					if (h == 107 || (c.shiftKey && h == 187)) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							$('body button[onclick="selectAll()"]').trigger("click");
							__r____changed()
						}
					}
					if (h == 109 || (c.shiftKey && h == 189)) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							var z = document.getElementsByClassName("ui_checked_columns");
							for (i = 0; i < z.length; i++) {
								var g = z[i].getElementsByTagName("input")[0];
								if (g.checked) {
									rowClick(z[i])
								}
							}
							if (settings_window_customized_checkboxes_and_radios) {
								$(".acheckbox, .aradio").icheck("updated")
							}
							__f___lb();
							__r____changed()
						}
					}
					if ((h == 46 || h == 119) && !$("input").is(":focus")) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							if ($(".filemin-button-delete.disabled").length) {
								$("#list_form table tbody tr.m-active").find("td:first-child input").trigger("click")
							}
							$("body .filemin-button-delete").trigger("click");
							__f___cs()
						}
					}
					if (h == 113) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							if ($(".filemin-button-chmod.disabled").length) {
								$("#list_form table tbody tr.m-active").find("td:first-child input").trigger("click")
							}
							$("body .filemin-button-chmod a").trigger("click");
							__f___cs()
						}
					}
					if (h == 114) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							if ($(".filemin-button-chown.disabled").length) {
								$("#list_form table tbody tr.m-active").find("td:first-child input").trigger("click")
							}
							$("body .filemin-button-chown a").trigger("click");
							__f___cs()
						}
					}
					if (h == 116 && !c.shiftKey) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							if ($(".filemin-button-compress.disabled").length) {
								$("#list_form table tbody tr.m-active").find("td:first-child input").trigger("click")
							}
							$("body .filemin-button-compress a").trigger("click");
							__f___cs()
						}
					}
					if (h == 118 && !c.shiftKey && !c.ctrlKey) {
						if (!$(".modal.in").length) {
							c.preventDefault();
							c.stopPropagation();
							$('a[onclick = "createFolderDialog()"]').trigger("click");
							__f___cs()
						}
					}
					if (h == 117) {
						if (!$(".modal.in").length) {
							if ($("#list_form table tbody tr.m-active").find("i.fa-i-cursor").parent("a").length) {
								c.preventDefault();
								c.stopPropagation();
								$("#list_form table tbody tr.m-active").find("i.fa-i-cursor").parent("a").trigger("click");
								__f___cs()
							}
						}
					}
					if (h == 115 && !c.shiftKey) {
						if (!$(".modal.in").length) {
							if ($("#list_form table tbody tr.m-active").find("i.fa-edit").parent("a").length) {
								c.preventDefault();
								var u = "jsp_" + parseInt(Math.random() * 1000000000000000000);
								window[u] = $.jsPanel({
									ajax: {
										url: $("#list_form table tbody tr.m-active").find("i.fa-edit").parent("a").attr("href"),
										dataType: "text",
										autoload: false,
										done: function (I, B, H, D) {
											var G = $(I).find(".ui_form"),
												J = "<strong>" + $(I).find(".panel-body").contents().filter(function () {
													return !!$.trim(this.innerHTML || this.data)
												}).first().text() + "</strong>",
												C = $(this).parents("div.jsPanel"),
												t = (parseInt(D.attr("id").replace("jsPanel-", "")) + 1);
											if (!$(G).find("textarea").length) {
												var G = $(I).find('form[action="save_file.cgi"]').append($(I).find("#data").removeAttr("id")).prepend($(I).find("#file").removeAttr("id")).prepend($(I).find("#path").removeAttr("id")),
													J = "<strong>" + $(I).find(".table-title").text() + "</strong>"
											}
											D.title(J);
											C.data("jspuid", u);
											C.find(".jsPanel-hdr h3").prepend('<i class="fa fa-lg fa-pencil-square-o" alt="Edit" style="margin-right: 7px; vertical-align: -15%">&nbsp;&nbsp;</i>').find("strong").attr("title", $(J).text());
											C.find(".jsPanel-content").html(G);
											$("#jsPanel-min-container").css({
												width: $(window).width(),
												overflow: "auto"
											});
											var F = C.find(".jsPanel-content");
											var s = F.find(".ui_form_end_buttons tr td span:first-child input"),
												E = F.find(".ui_form_end_buttons tr td span:nth-child(2) input");
											F.find(".ui_form_end_buttons").remove();
											C.find(".jsPanel-hdr .jsPanel-hdr-r").append('<div class="jsPanel-btn-save _filemin_file_editor_save" style="margin-right: 10px; margin-top: 5px;"><i class="fa fa-floppy-o"></i></div>');
											C.find(".jsPanel-btn-max").trigger("click");
											t__cm___init(F.find("textarea"), $(J).text(), [null, parseInt(F.css("height"))], t);
											C.animate({
												opacity: 1
											}, 400, function () {
												window["__cm_editor_" + t].focus()
											});
											D.on("jspanelbeforeclose", function (x, L) {
												var A = $("#" + L)
											});
											C.find("._filemin_file_editor_save").click(function (x) {
												$(this).find("i").replaceWith(t__lo__btn_md());
												$(this).removeClass("text-danger");
												C.find('form[action="save_file.cgi"]').submit()
											});

											function K() {
												var x = C.find("._filemin_file_editor_save");
												x.find(".cspinner").remove();
												x.find("i").remove();
												x.prepend('<i class="fa fa-floppy-o"></i>')
											}
											C.find('form[action="save_file.cgi"]').submit(function (x) {
												x.preventDefault();
												x.stopPropagation();
												messenger('<i class="fa fa-floppy-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_saving_file").replace("%value", J) + " " + lang("theme_xhred_global_please_wait"), 2, "info");
												$.ajax({
													type: "POST",
													url: $_____link_full + "/" + __f___mn() + "/save_file.cgi",
													data: C.find('form[action="save_file.cgi"]').serialize(),
													dataType: "text",
													success: function (L) {
														var M = C.find("._filemin_file_editor_save .cspinner");
														if (!$(L).find("textarea#data").length) {
															messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + $(L).find(".panel-body").html(), 5, "error");
															if (M.parent(".btn").index() === 1) {
																modal_dismiss()
															}
															K();
															return
														}
														messenger('<i class="fa fa-check-circle">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_file_saved").replace("%value", J), 3, "success");
														K()
													}
												})
											})
										}
									},
									selector: "body",
									resizable: "disabled",
									draggable: "disabled",
									theme: "light",
									controls: {
										normalize: "disable",
										smallify: "disable"
									},
									maximizedMargin: {
										top: 20,
										right: 25,
										bottom: 20,
										left: 25
									},
									dblclicks: {
										title: "minimize"
									},
									onbeforeclose: function () {
										if ($("body").find(".bootbox-filemin-save-prompt").length && this.find("._filemin_file_editor_save.text-danger").length) {
											return false
										}
										if (this.find("._filemin_file_editor_save.text-danger").length) {
											$this = this;
											bootbox.dialog({
												message: "" + lang("theme_xhred_filemin_file_edit_but_not_saved") + " <br><br>" + lang("theme_xhred_filemin_file_edit_but_not_saved_what_to_do") + "",
												title: '<i class="fa fa-question-circle font-size-80p bootbox-filemin-save-prompt">&nbsp;&nbsp;</i> <strong class="font-size-90p">' + $this.find(".jsPanel-title strong").text() + "</strong>",
												buttons: {
													success: {
														label: '&nbsp;<i class="fa fa-floppy-o">&nbsp;&nbsp;</i>' + lang("theme_xhred_global_save_and_close") + "&nbsp;&nbsp;",
														className: "btn-primary vertical-align-top ",
														callback: function () {
															$this.find(".jsPanel-btn-save").trigger("click");
															$this.find(".jsPanel-btn-close").trigger("click")
														}
													},
													danger: {
														label: '&nbsp;<i class="fa fa-times-circle-o">&nbsp;&nbsp;</i>' + lang("theme_xhred_global_close_without_saving") + "&nbsp;&nbsp;",
														className: "btn-danger vertical-align-top margined-left--2",
														callback: function () {
															$this.find("._filemin_file_editor_save.text-danger").removeClass("text-danger");
															$this.find(".jsPanel-btn-close").trigger("click")
														}
													},
													main: {
														label: '&nbsp;<i class="fa fa-arrow-circle-o-left">&nbsp;&nbsp;</i>' + lang("theme_xhred_global_continue_editing") + "&nbsp;&nbsp;",
														className: "btn-default vertical-align-top margined-left--2",
														callback: function () {
															setTimeout(function () {
																var s = window["__cm_editor_" + (parseInt($this.attr("id").replace("jsPanel-", "")) + 1)];
																s && s.focus()
															}, 100)
														}
													}
												},
												onEscape: function () {
													setTimeout(function () {
														var s = window["__cm_editor_" + (parseInt($this.attr("id").replace("jsPanel-", "")) + 1)];
														s && s.focus()
													}, 100)
												}
											});
											return false
										}
									},
									onbeforemaximize: function () {
										if ($("body").find(".bootbox-filemin-save-prompt").length && this.find("._filemin_file_editor_save.text-danger").length) {
											return false
										}
									}
								});
								__f___cs()
							} else {
								messenger('<i class="fa fa-exclamation-circle">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_not_editable"), 5, "warning")
							}
						}
					}
					if (!$("input").is(":focus") && !$("select").is(":focus") && !$("textarea").is(":focus") && !$(".modal.in").length && h != 32 && h != 113 && h != 114 && h != 106 && h != 107 && h != 116 && h != 109 && h != 46 && h != 119 && h != 118 && h != 115) {
						if ($("#DataTables_Table_0_next").parents("ul.pagination").hasClass("pointer-events-none")) {
							return
						}
						if (h === 39) {
							$("#DataTables_Table_0_next").trigger("click");
							$("#list_form table tbody tr.m-active").removeClass("m-active");
							$("#list_form table tbody tr").addClass("m-not-active")
						} else {
							if (h === 37) {
								$("#DataTables_Table_0_previous").trigger("click");
								$("#list_form table tbody tr.m-active").removeClass("m-active");
								$("#list_form table tbody tr").addClass("m-not-active")
							} else {
								var f = String.fromCharCode(h);
								if (f && /[a-zA-Z0-9]/.test(f) && !c.ctrlKey && !c.altKey && !c.metaKey) {
									$(".dataTables_filter label input").trigger("keyup").focus()
								}
							}
						}
					}
					if (c.shiftKey && c.ctrlKey) {
						return
					}
					if (!$(".modal.in").length && !$(".popover").is(":visible") && !$("input.popover-path-input").is(":focus") && (h == 115 || h == 116 || h == 118 || String.fromCharCode(h).toLowerCase() == "c" || String.fromCharCode(h).toLowerCase() == "v" || String.fromCharCode(h).toLowerCase() == "x")) {
						if ((!(String.fromCharCode(c.which).toLowerCase() == "c" && c.ctrlKey) && !(String.fromCharCode(c.which).toLowerCase() == "v" && c.ctrlKey) && !(String.fromCharCode(c.which).toLowerCase() == "x" && c.ctrlKey) && !(h == 115 && c.shiftKey) && !(h == 116 && c.shiftKey) && !(h == 118 && c.shiftKey)) && !(c.which == 19)) {
							return true
						}
						c.preventDefault();
						if (h == 115) {
							if (!$(".modal.in").length) {
								c.stopPropagation();
								$('a[onclick = "createFileDialog()"]').trigger("click");
								__f___cs();
								return
							}
						}
						if (h == 116) {
							if (!$(".modal.in").length) {
								c.stopPropagation();
								if ($("#list_form table tbody tr.m-active").find("i.at-font-box-remove").parent("a").length) {
									c.preventDefault();
									c.stopPropagation();
									$("#list_form table tbody tr.m-active").find("i.at-font-box-remove").parent("a")[0].click();
									__f___cs()
								} else {
									messenger('<i class="fa fa-exclamation-circle">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_not_decompressable"), 5, "warning")
								}
								return
							}
						}
						if (h == 118) {
							if (!$(".modal.in").length) {
								c.stopPropagation();
								$('a[onclick = "searchDialog()"]').trigger("click");
								__f___cs();
								return
							}
						}
						if (String.fromCharCode(h).toLowerCase() == "c") {
							if (!$(".modal.in").length && !$(".popover").is(":visible") && !$("input.popover-path-input").is(":focus")) {
								c.stopPropagation();
								if (!$(".filemin-button-copy.disabled").length) {
									$("body .filemin-button-copy a").trigger("click");
									__f___cs()
								} else {
									messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_no_selection_to_copy"), 5, "error")
								}
								return
							}
						}
						if (String.fromCharCode(h).toLowerCase() == "v") {
							if (!$(".modal.in").length && !$(".popover").is(":visible") && !$("input.popover-path-input").is(":focus")) {
								c.stopPropagation();
								if (!$(".filemin-button-paste.disabled").length) {
									$("body .filemin-button-paste a").trigger("click");
									__f___cs()
								} else {
									messenger('<i class="fa fa-clipboard">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_empty_clipboard"), 5, "error")
								}
								return
							}
						}
						if (String.fromCharCode(h).toLowerCase() == "x") {
							if (!$(".modal.in").length && !$(".popover").is(":visible") && !$("input.popover-path-input").is(":focus")) {
								c.stopPropagation();
								if (!$(".filemin-button-cut.disabled").length) {
									$("body .filemin-button-cut a").trigger("click");
									__f___cs()
								} else {
									messenger('<i class="fa fa-exclamation-triangle">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_no_selection_to_cut"), 5, "error")
								}
								return
							}
						}
						return
					}
				})
			},
			bInfo: true,
			destroy: true,
			oLanguage: {
				sEmptyTable: lang("theme_xhred_datatable_semptytable"),
				sInfo: lang("theme_xhred_datatable_sinfo"),
				sInfoEmpty: lang("theme_xhred_datatable_sinfoempty"),
				sLengthMenu: lang("theme_xhred_datatable_slengthmenu"),
				sLoadingRecords: lang("theme_xhred_datatable_sloadingrecords"),
				sProcessing: lang("theme_xhred_datatable_sprocessing"),
				sSearch: " ",
				sZeroRecords: lang("theme_xhred_datatable_szerorecords")
			},
			conditionalPaging: true,
			columnDefs: [{
				orderable: false,
				targets: [0, 1, (n ? n : 0)]
			}],
			bStateSave: true,
			bPaginate: o,
			aLengthMenu: [[5, 10, 15, 20, 25, 30, 35, 40, 50, 100, 250, 500, 1000], [5, 10, 15, 20, 25, 30, 35, 40, 50, 100, 250, 500, 1000]]
		});
		$('div button[onclick="removeDialog()"]').addClass("disabled filemin-button-delete").removeAttr("onclick");
		$('a[onclick="chmodDialog()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-chmod");
		$('a[onclick="chownDialog()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-chown");
		$('a[onclick="compressDialog()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-compress");
		$('a[onclick="copySelected()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-copy");
		$("li.filemin-button-copy").addClass("disabled");
		$('a[onclick="cutSelected()"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-cut");
		$("li.filemin-button-cut").addClass("disabled");
		if (!localStorage.getItem("copy") && !localStorage.getItem("cut")) {
			$('a[onclick*="paste.cgi"]').removeAttr("onclick").parent("li").addClass("disabled filemin-button-paste")
		} else {
			$('a[onclick*="paste.cgi"]').removeAttr("onclick").parent("li").addClass("filemin-button-paste")
		}
		if (q === "extract") {
			messenger('<i class="fa fa-file-archive-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_extraction"), 5, "success")
		} else {
			if (q === "delete") {
				messenger('<i class="fa fa-trash-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_deletion"), 5, "success")
			} else {
				if (q === "chmod") {
					messenger('<i class="fa fa-cogs">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_permissions"), 5, "success")
				} else {
					if (q === "chown") {
						messenger('<i class="fa fa-users">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_ownership"), 5, "success")
					} else {
						if (q === "compress") {
							messenger('<i class="fa fa-file-archive-o">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_compression"), 5, "success")
						} else {
							if (q === "rename") {
								messenger('<i class="fa fa-i-cursor">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_rename"), 5, "success")
							} else {
								if (q === "create_folder") {
									messenger('<i class="fa fa-folder">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_folder_creation").replace("%value", $('#createFolderForm input[name="name"]').val()), 5, "success")
								} else {
									if (q === "create_file") {
										messenger('<i class="fa fa-file">&nbsp;&nbsp;&nbsp;</i>' + lang("theme_xhred_filemin_successful_file_creation").replace("%value", $('#createFileForm input[name="name"]').val()), 5, "success")
									}
								}
							}
						}
					}
				}
			}
		}
	}

	function __f____r(k, n, m, h) {
		if (k === "get") {
			if ($("body").find("#list_form table tbody").hasClass("filemin-updating")) {
				return
			}
			var l = $.url(n).param("path"),
				j = l.split("/");
			__f_____lo(true, true);
			$('a[href="' + n + '"] img').before('<span class="cspinner" style="margin-top: 1px; margin-left: -25px;"><span class="cspinner-icon small"></span></span>');
			$.ajax({
				type: "POST",
				url: $_____link_full + "/" + __f___mn() + "/" + n,
				data: false,
				dataType: "text",
				success: function (a) {
					if (!$(a).find("#list_form").length) {
						messenger($(a).find(".panel-body").html(), 10, "error");
						__f_____ul();
						return
					} else {
						$('[data-toggle="popover-path"]').popover("hide")
					}
					var b = $("body");
					b.find(".breadcrumb").empty();
					$__path_prev = "";
					if (access_level() == 0) {
						b.find(".breadcrumb").append('<li><a href="index.cgi?path="><i class="fa fa-hdd-o">&nbsp;</i></a></li>')
					} else {
						b.find(".breadcrumb").append('<li><a href="index.cgi?path="><i class="fa fa-user text-light">&nbsp;</i></a></li>')
					}
					$.each(j, function (c, d) {
						$__path_prev = $__path_prev + (d != "" ? "/" + d : "");
						if (d != "") {
							b.find(".breadcrumb").append('<li><a href="index.cgi?path=' + $__path_prev + '">' + d + "</a></li>")
						}
					});
					if (l) {
						$('#headln2l > a[href*="filemin"][href*="index.cgi"]').removeClass("hidden")
					} else {
						$('#headln2l > a[href*="filemin"][href*="index.cgi"]').addClass("hidden")
					}
					t___wi.history.pushState(null, null, $_____link_full + "/" + __f___mn() + "/index.cgi?path=" + l);
					if ($(a).find("#list_form").prev("div.total").length) {
						$(".total").html($(a).find("#list_form").prev("div.total").html());
						$("body").find("#list_form").prev("div.total").append('. <span class="total_selected">' + lang("theme_xhred_filemin_selected_entries").replace("%value", "<span>0</span>") + '</span> <span class="label label-warning total_size hidden"><span class="total_size_data"></span></span>')
					}
					$.each($('.modal .modal-body form input[name="path"], #list_form > input[type="hidden"][name="path"]'), function () {
						$(this).val(l)
					});
					$('ul li a[href^="bookmark.cgi?path="]').attr("href", "bookmark.cgi?path=" + l);
					__f___u("upd", $(a).find("#list_form table").find(".ui_checked_columns"), h, false);
					if (settings_favorites) {
						f__dt()
					}
					t__wi_p.__dpt();
					$("#__f__c__m").css("display", "none")
				},
				error: function (a) {}
			})
		}
	}
	if (settings_favorites) {
		function f__gc() {
			return t__wi_p.$("#favorites-menu .favorites-menu-content li:not(.exclude)").length
		}

		function f__g() {
			var b = [];
			$.each(t__wi_p.$("#favorites-menu .favorites-menu-content li:not(.exclude) a"), function () {
				var f = $(this).text(),
					g = $(this).attr("href"),
					a = $(this).find(".wbm-sm").attr("data-product");
				favorite = {};
				favorite.link = g;
				favorite.title = f.trim();
				favorite.icon = a;
				b.push(favorite)
			});
			return b
		}

		function f__u() {
			$.ajax({
				type: "POST",
				url: $_____link_full + "/settings-favorites_save.cgi",
				data: ('{"favorites":' + JSON.stringify(f__g(), null, 4).replace(/\\n/g, "\\n").replace(/\\'/g, "\\'").replace(/\\"/g, '\\"').replace(/\\&/g, "\\&").replace(/\\r/g, "\\r").replace(/\\t/g, "\\t").replace(/\\b/g, "\\b").replace(/\\f/g, "\\f") + "}"),
				success: function (b) {},
				error: function (b) {}
			})
		}

		function f__a(d, g, f) {
			if (f__gc() === 0) {
				t__wi_p.$("#favorites-menu .favorites-menu-content li.favorites-no-message").addClass("hidden");
				t__wi_p.$("#favorites-menu .favorites-menu-content .favorites-title sup a").removeClass("hidden")
			}
			t__wi_p.$("#favorites-menu .favorites-menu-content li.favorites-title").after('						<li class="menu-exclude ui-sortable-handle">                        	<a class="menu-exclude-link" target="page" href="' + d + '"><i data-product="' + f + '" class="wbm-' + f + ' wbm-sm">&nbsp;</i><span class="f__c">                            ' + g + '                        	&nbsp;<small class="hidden" style="font-size: 0.6em; position: absolute; margin-top: -1px"><i class="fa fa-times"></i></small></span></a>                    	</li>					')
		}

		function f__us() {
			if (f__gc() === 0) {
				t__wi_p.$("#favorites-menu .favorites-menu-content li.favorites-no-message").removeClass("hidden");
				t__wi_p.$("#favorites-menu .favorites-menu-content .favorites-title sup a").addClass("hidden")
			}
		}

		function f__r(b) {
			t__wi_p.$("#favorites-menu .favorites-menu-content").find('a[href="' + b + '"]').parent("li").effect("drop", {}, 300, function () {
				$(this).remove();
				$("#headln2c > .favorites").addClass("fa-star-o").removeClass("fa-star text-warning");
				f__us();
				f__u()
			})
		}

		function f__dt() {
			$(f__g()).each(function () {
				if ($(this)[0]) {
					var b = $.url(t___wi.location).attr("relative");
					if ($(this)[0].link == b || $(this)[0].link + "index.cgi" == b) {
						setTimeout(function () {
							$("#headln2c > .favorites").addClass("fa-star").removeClass("fa-star-o")
						}, 100);
						return false
					} else {
						setTimeout(function () {
							$("#headln2c > .favorites").removeClass("fa-star").addClass("fa-star-o")
						}, 100)
					}
				}
			})
		}
		f__dt();
		if (settings_favorites && access_level() == 0) {
			$("#headln2c").prepend('<i class="fa fa-inverse fa-2x fa-star-o text-lighter favorites" style="position: absolute; margin-left: -35px; margin-top: 2px;"></i>&nbsp;');
			$("body").append('<span id="favorites-target" style="position: absolute; top: 0; right: 0; visibility: hidden"></span>')
		}
		$("body").on("click", "#headln2c > .favorites", function (o) {
			o.preventDefault();
			var m = $.url(t___wi.location).attr("relative");
			if ($(this).hasClass("fa-star-o")) {
				$(this).removeClass("fa-star-o").addClass("fa-star text-warning");
				var l = $("#headln2c > font").text(),
					p = t__wi_p.$(".has-sub.active").text().trim(),
					j = t__wi_p.$(".sub_active").text().trim(),
					k = "",
					n = "";
				if (product_name() === "Virtualmin" || product_name() === "Cloudmin") {
					k = t__wi_p.$(".ui_select option:selected").text()
				}
				if ($('body[class^="filemin"]').length) {
					n = $.url(t___wi.location).param("path");
					if (!n) {
						n = "[/]"
					} else {
						n = "[" + n + "]"
					}
				}
				f__a(m, (((k.length ? (k + " – ") : "") + (p.length ? (p + "/") : "") + (j.length ? (j + ": ") : "")) + l.trim() + (n.length ? (" " + n) : "")), (product_name() === "Virtualmin" ? "virtualmin" : product_name() === "Cloudmin" ? "cloudmin" : "webmin"))
			} else {
				$(this).addClass("fa-star-o").removeClass("fa-star text-warning");
				f__r(m)
			}
			f__u()
		});
		t__wi_p.$("#favorites-menu > div > nav > ul").sortable({
			revert: true,
			delay: 100,
			update: function () {
				f__u()
			}
		});
		t__wi_p.$("#favorites-menu .favorites-menu-content li.favorites-title").hover(function () {
			$(this).find("sup").removeClass("hidden")
		}, function () {
			$(this).find("sup").addClass("hidden")
		});
		t__wi_p.$("#favorites-menu .favorites-menu-content").on("mouseover", "li:not(.exclude) span.f__c, li:not(.exclude) span.f__c small", function () {
			$(this).find("small").removeClass("hidden")
		}).on("mouseleave", "li:not(.exclude) span.f__c, li:not(.exclude) span.f__c small", function () {
			$(this).find("small").addClass("hidden")
		});
		t__wi_p.$("#favorites-menu .favorites-menu-content").on("mouseover", "li:not(.exclude) small", function () {
			$(this).find(".fa-times").removeClass("fa-times").addClass("fa-times-circle");
			$(this).animate({
				"font-size": "0.7em",
				"margin-top": "-2px",
				"margin-left": "-1px"
			}, 160)
		}).on("mouseleave", "li:not(.exclude) small", function () {
			$(this).find(".fa-times-circle").removeClass("fa-times-circle").addClass("fa-times");
			$(this).animate({
				"font-size": "0.6em",
				"margin-top": "-1px",
				"margin-left": "0"
			}, 80)
		});
		t__wi_p.$("#favorites-menu .favorites-menu-content").on("click", "li:not(.exclude) small .fa-times-circle", function (b) {
			b.preventDefault();
			b.stopPropagation();
			f__r($(this).parents("a").attr("href"))
		});
		$(document).on("keydown", function (b) {
			if (t__wi_p.$(".favorites-menu-outer").css("left") == "0px" && b.keyCode == 27) {
				t__wi_p.$(".favorites-menu-outer").removeClass("hover")
			}
		});
		f__us()
	}

	function datePicker(d, q, r, p) {
		$monthCorrection = $(q).find("option:eq(0)").val() == 1 ? 0 : 1;
		var m = $(p),
			o = parseInt($(d).val()),
			l = ($(q).val() ? parseInt($(q).val()) + $monthCorrection : false),
			n = $(r).val();
		m.datepicker({
			format: " yyyy-m-d",
			language: $("body").data("language"),
			autoclose: true
		}).on("hide", function (a) {
			var b = m.val() ? m.val().split("-") : false;
			m.val("");
			if (b) {
				$(d).val(parseInt(b[2]));
				$(q).val(parseInt(b[1]) - $monthCorrection);
				$(r).val(parseInt(b[0]))
			}
		}).focus()
	}
	var $product_name = t__wi_p.$("#wrapper").data("product");
	$('body:not(".mobile-menu-toggler")').on("click", function (b) {
		t__wi_p.hide_mobile_menu();
		if (t__wi_p.$(".autocomplete-suggestions").is(":visible")) {}
	});
	if (t__wi_p.$(".switch-toggle").find('label[for="open_thirdlane"]').length) {
		t__wi_p.$('.switch-toggle input:not([id="open_webmin"])').each(function () {
			$(this).removeAttr("checked")
		}).promise().done(function () {
			t__wi_p.$("#open_webmin").prop("checked", true)
		})
	}
	if (__num()) {
		if ($current_directory == $_____link + "init/") {
			$.each($("table.table tbody tr"), function () {
				$(this).addClass("ui_checked_columns")
			})
		}

		function __mr() {
			$.each($(".ui_checked_columns"), function (a, b) {
				$(b).on("click", "td", function (d) {
					if ($(b).find("a[href]") && !$("body").hasClass("servers")) {
						var c = $(b).find("a[href]")[0],
							f = $(this).parents("tr.ui_checked_columns");
						if (c && ($(this).find("a").attr("href") === $(c).attr("href") || $(this).find("a").attr("href") === undefined) && !$(d.target).is("select, input, .acheckbox, .aradio") && ($(this).parent("tr").find('a[href*="download.cgi"]').length === 0)) {
							d.preventDefault();
							if ($("body").attr("class") && $("body").attr("class").indexOf("filemin") > -1 && $(c).attr("href") && $(c).attr("href").indexOf("index.cgi?path=") > -1) {
								__f____r("get", $(c).attr("href"), false, 0);
								return
							}
							if ($(c).attr("target")) {
								window.open($(c).attr("href"), $(c).attr("target"))
							} else {
								window.location.href = $(c).attr("href")
							}
						}
					}
				}).on("contextmenu", "td", function (c) {
					var d = $(this).parents("tr.ui_checked_columns");
					if ($('body[class^="filemin"]').length) {
						if (!c.shiftKey && !c.altKey && !c.ctrlKey && $("#DataTables_Table_0 tbody input:checked").length >= 1) {
							return
						}
					}
					c.preventDefault();
					if (($(this).parents("tr").find('input[type="checkbox"]:first').length && $(this).parents("tr").find('input[type="checkbox"][disabled]').length === 0) || ($(this).parents("tr").find('input[type="checkbox"][disabled]').length && $(this).parents("tr").find("input").length > 1)) {
						if (d.find('input[type="checkbox"]:first').is(":checked")) {
							d.removeClass("hl-aw");
							__r____changed()
						} else {
							d.addClass("hl-aw");
							__r____changed()
						}
						d.find('input[type="checkbox"]:first').trigger("click");
						if (settings_window_customized_checkboxes_and_radios) {
							$(".acheckbox, .aradio").icheck("updated")
						}
					}
				})
			})
		}
		__mr();
		$.each($('input[type="radio"], input[type="checkbox"]'), function () {
			if ($(this)[0]) {
				$___text = $(this)[0].nextSibling
			}
			if ($(this).next("label").length === 0 && $___text && $___text.nodeValue && $___text.nodeValue.length > 1) {
				$(this).addClass("ui_radio");
				var c = $(this).attr("id") ? 'for="' + $(this).attr("id") + '"' : false;
				if (c === false && $(this).attr("name") && $(this).val()) {
					var d = "__replaced_" + $(this).attr("name") + "_" + $(this).val() + "";
					var c = 'for="' + d + '"';
					$(this).attr("id", d)
				}
				$($___text).wrap('<label class="radio"' + c + ">" + $___text.nodeValue.replace(/<hr>/g, "&lt;hr&gt;").replace(/<header>/g, "&lt;header&gt;") + " </label>");
				$($___text).remove()
			}
		}).promise().done(function () {
			if (settings_window_customized_checkboxes_and_radios) {
				$('input[type="radio"], input[type="checkbox"]').icheck({
					checkboxClass: "acheckbox",
					radioClass: "aradio",
					increaseArea: "20%"
				})
			}
		});
		$.each($(".ui_checked_columns td.ui_checked_checkbox"), function () {
			if (!$(this).parent("tr.ui_checked_columns").find('input[type="checkbox"][disabled]:first').length) {
				if (settings_window_customized_checkboxes_and_radios) {
					if ($(this).find(".acheckbox").hasClass("checked")) {
						$(this).parent("tr.ui_checked_columns").addClass("hl-aw")
					}
				} else {
					if ($(this).find('input[type="checkbox"]:first').is(":checked")) {
						$(this).parent("tr.ui_checked_columns").addClass("hl-aw")
					}
				}
				if (settings_window_customized_checkboxes_and_radios) {
					$(".acheckbox, .aradio").icheck("updated")
				}
			}
		});
		$("body").on("change", 'input[type="checkbox"], input[type="radio"]', function (b) {
			var c = $(this).parents("tr.ui_checked_columns");
			if (c.length && c.find("input:first").is($(this))) {
				if ($(this).is(":checked")) {
					c.addClass("hl-aw");
					__r____changed()
				} else {
					c.removeClass("hl-aw");
					__r____changed()
				}
			}
			setTimeout(function () {
				if (settings_window_customized_checkboxes_and_radios) {
					$(".acheckbox, .aradio").icheck("updated")
				}
			}, 2)
		});
		$("body").on("click", ".ui_link, .ui_link_replaced", function () {
			if (settings_window_customized_checkboxes_and_radios) {
				$(".acheckbox, .aradio").icheck("updated");
				$.each($(".acheckbox"), function () {
					if ($(this).hasClass("checked")) {
						$(this).parents("tr.ui_checked_columns").addClass("hl-aw");
						__r____changed()
					} else {
						$(this).parents("tr.ui_checked_columns").removeClass("hl-aw");
						__r____changed()
					}
				})
			} else {
				$.each($('input[type="checkbox"]'), function () {
					if ($(this).is(":checked")) {
						$(this).parents("tr.ui_checked_columns").addClass("hl-aw");
						__r____changed()
					} else {
						$(this).parents("tr.ui_checked_columns").removeClass("hl-aw");
						__r____changed()
					}
				})
			}
		});
		if ($current_page_full == $_____link_full + "/mysql/view_table.cgi") {
			$("body").on("click", ".ui_checked_checkbox", function (b) {
				$(this).find('input[type="checkbox"]').trigger("click");
				$(".acheckbox").icheck("updated")
			})
		}
	}
	if ($("body").hasClass("servers")) {
		$('form[action="delete_servs.cgi"] a.icon_link, form[action="delete_servs.cgi"] a.ui_link, form[action="delete_servs.cgi"] .col-xs-1').on("click", function (f) {
			var h = $__source_url + $(this).attr("href"),
				g = $(this).attr("href"),
				j = $(this);
			if ((g && g.indexOf("edit_serv.cgi") > -1) || (g && g.indexOf("logout.cgi") > -1)) {
				t___wi.location.href = g
			} else {
				if (g && g.indexOf("://") === -1) {
					t___wi.open(h)
				} else {
					t___wi.open(g)
				}
			}
			f.preventDefault();
			f.stopPropagation()
		})
	}
	if ($current_page_full == $_____link_full + "/apache/edit_global.cgi" || $current_page_full == $_____link_full + "/apache/edit_virt.cgi" || $current_page_full == $_____link_full + "/apache/edit_dir.cgi") {
		$.each($(".ui_opt_textbox.form-control"), function () {
			if ($(this).parent("span").next("button.btn.btn-default.file_chooser_button").length > 0) {
				$(this).css("margin-right", "4px")
			}
		})
	}
	$.each($("input[onclick]"), function () {
		if (!$(this).parent(".aradio").length) {
			$(this).next("label").attr("style", "margin-left: 3px !important;")
		}
	});

	function hidden_opener(c, d) {
		if ($("#" + c).parent(".opener_container").length === 0) {
			$("#" + c).wrapAll('<div class="opener_container opener_sub_container margined-top"></div>')
		}
		if ($("#" + c).hasClass("opener_shown")) {
			$("#" + c).parent(".opener_container").show().find("#" + c).slideUp($settings_animation_tabs_slide_time, function () {
				$("#" + c).removeClass("opener_shown").addClass("opener_hidden").parent('.opener_container:not(".opener_sub_container")').hide();
				$("#" + c).parent(".opener_sub_container").removeClass("margined-top")
			})
		} else {
			$("#" + c).slideUp(0).removeClass("opener_hidden").addClass("opener_shown").parent(".opener_container").slideDown($settings_animation_tabs_slide_time).find(".opener_shown").slideDown($settings_animation_tabs_slide_time);
			$("#" + c).parent(".opener_sub_container").addClass("margined-top")
		}
	}
	if ($(".opener_shown").length > 0) {
		if ($(".opener_trigger").length > 0) {
			$(".panel-body  .ui_form .table  tbody  tr").removeClass("thead");
			$(".opener_trigger").parents("table.table").attr("style", "margin-bottom:6px !important; border-collapse: separate !important; border: 0 !important; border-bottom:1px solid #f0f0f0 !important;");
			$(".opener_trigger").parents("tr").attr("style", "border: 0 !important");
			$(".opener_trigger").parent("td").attr("style", "vertical-align: middle; height:37px; text-align:left; border:0; border-left:1px solid #f0f0f0; border-right:1px solid #f0f0f0; border-top:4px solid #f0f0f0; box-shadow:0 1px 1px rgba(0,0,0,.05); border-top-left-radius:4px; border-top-right-radius:4px");
			$(".opener_trigger").parent("td").find("a").addClass("link_hover_effect").attr("style", "padding-left:3px; font-size:16px; line-height: 20px !important; font-weight: 400 !important")
		}
	}
	if ($('a[href^="javascript:hidden_opener"]:not(".opener_trigger")').length > 0) {
		$('a[href^="javascript:hidden_opener"]:not(".opener_trigger")').each(function () {
			$(this).find("img").length > 0 ? $(this).remove() : false;
			$(this).css("border-bottom", "0");
			$(this).parents("table.table").attr("style", "margin-bottom:6px !important; border-collapse: separate !important; border: 0 !important; border-bottom:1px solid #f0f0f0 !important;");
			$(this).parent("td").attr("style", "vertical-align: middle; height:27px; background: #f5f5f5; text-align:left; border:0; border-left:1px solid #f0f0f0; border-right:1px solid #f0f0f0; border-top:4px solid #f0f0f0; border-bottom:1px solid #f0f0f0 !important; border-top-left-radius:4px; border-top-right-radius:4px");
			$(this).parent("td").find("a").addClass("link_hover_effect").attr("style", "padding-left:6px; font-size:14px; font-weight: 400 !important; background: #f5f5f5 !important");
			if ($(this).parent().is(".panel-body") || $(this).parent().is(".ui_form")) {
				var c = $(this).parent().is(".panel-body") ? ".panel-body" : ".ui_form";
				$(this).parent(c).find('a[href^="javascript:hidden_opener"]:eq(1)').wrapAll('<div class="opener_extra_container"></div>');
				$(this).parent('.panel-body > a[href^="javascript:hidden_opener"]:first-child').remove();
				var d = $(this).parent(c).find(".opener_extra_container");
				$(d).next("br").remove();
				$(d).attr("style", "vertical-align: middle; height:30px; background: #f5f5f5; text-align:left; border:0; border-left:1px solid #f0f0f0; border-right:1px solid #f0f0f0; border-top:4px solid #f0f0f0; border-bottom:1px solid #f0f0f0 !important; border-top-left-radius:4px; border-top-right-radius:4px;");
				$(d).find("a").attr("style", "padding-left:8px; line-height:24px; font-size:14px; font-weight: 400 !important; background: #f5f5f5 !important").addClass("link_hover_effect");
				$(d).next(".opener_hidden").attr("style", "padding:8px")
			}
		});
		$.each($(".opener_hidden"), function () {
			$(this).css("display", "none")
		})
	}
	$("a.opener_trigger").each(function () {
		$(this).parent("td").css("text-align", "left")
	});
	$('form[action*="seen_newfeatures.cgi"]').each(function () {
		$(this).parents("table.table-striped.table-rounded").next(".ui_form_end_buttons").css("margin-top", "14px")
	});
	$("body").on("submit", 'form[action*="seen_newfeatures.cgi"]', function (b) {
		b.preventDefault();
		$this = $(this);
		$.ajax({
			type: "GET",
			url: $(this).attr("action"),
			data: false,
			statusCode: {
				200: function () {
					$this.parents(".panel.panel-default").remove()
				}
			}
		})
	});
	$(t__wi_p.$('iframe[name="page"]').contents()).keydown(function (b) {
		t__wi_p.search_control(b);
		t__wi_p.shortcut_control(b)
	});
	$("body").on("click", ".authentic_update", function (b) {
		b.preventDefault();
		b.stopPropagation();
		t__wi_p.history.pushState(null, null, $_____link_full + "/?updating-webmin-theme");
		t__wi_p.$('iframe[name="page"]').attr("src", $(this).attr("href"))
	});
	$("body").on("click contextmenu", 'a[data-href*="/webmin/edit_webmincron.cgi"], a[data-href*="/package-updates/index.cgi"]', function (b) {
		b.preventDefault();
		b.stopPropagation();
		if ($(this).attr("data-refresh").indexOf("package-updates") !== -1) {
			t__wi_p.history.pushState(null, null, $_____link_full + "/?recollecting")
		} else {
			t__wi_p.history.pushState(null, null, $_____link_full + "/?recollect")
		}
		t__wi_p.$('iframe[name="page"]').attr("src", $(this).attr("data-href"))
	});
	$("#tall_0").before("<br>");
	$(".opener_container").each(function (d, c) {
		if ($(this).find("div").hasClass("opener_hidden")) {
			$(this).hide()
		} else {
			$(this).show()
		}
	});
	$("body").tooltip({
		selector: '[data-toggle="tooltip"], [data-toggle="virtualmin-license"], .panel-body td a',
		html: true
	});
	$.each($("div.barchart"), function () {
		var d = $(this).find('img[src*="red.gif"]'),
			c = $(this).parent("td").contents().filter(function () {
				return this.nodeType == 3
			}).text();
		if (d && d.attr("width")) {
			$(this).parent("td").html('<div class="graph-container graph-container-fw"><div class="graph"><div class="description"> ' + c + ' </div><strong class="bar" style="width:' + d.attr("width") + '">' + d.attr("width") + "</strong></div></div>")
		}
	});
	$('.panel-body > form > table > tbody > tr > td:has(input[type="submit"])').parents("table.table-hardcoded > tbody > tr").css("border", "none").parents("table").css("margin-top", "20px");
	$('.panel-body > form > table > tbody > tr > td:has(input[type="submit"])').parents("table.table-hardcoded > tbody").css("border", "none");
	$('.ui_grid_table > tbody > tr.ui_grid_row > td:has(button[type="submit"])').parents("table.ui_grid_table").css("border", "none");
	$("form.ui_form > table label.radio, form.ui_form > table label.checkbox").each(function () {
		var j = $(this),
			h = j.find("i.fa"),
			f = j.find("i.fa").text().trim(),
			g = j.text().trim();
		if (f.length === 0 && g.length === 0) {
			h.parent("label").remove()
		}
	});
	if ($current_page_full && $current_page_full.indexOf("/webmin/edit_themes.cgi") > -1 && t__wi_p.location.search != "?updating-webmin-theme") {
		$(function () {
			function b() {
				$("#atrestore").confirmation({}, function () {
					$(this).off();
					var a = $(this);
					if (!a.hasClass("btn-inverse")) {
						t__wi_p.__lls();
						setTimeout(function () {
							a.text($__theme_text_right_restoring + "...").prepend('<i class="fa fa-fw fa-circle-o-notch faa-spin faa-slow animated" style="margin-right:7px;"></i>').removeClass("btn-danger btn-default ").addClass("btn-inverse opacity-0_5");
							setTimeout(function () {
								var d = $(".ui_form").serialize();
								$.ajax({
									type: "POST",
									url: $_____link_full + "/index.cgi?xhr-settings=1&restore=1",
									data: d,
									success: function (c) {
										setTimeout(function () {
											t__wi_p.t_sel_i();
											t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/webmin/edit_themes.cgi?restored")
										}, 800);
										a.text($__theme_text_right_restored).prepend('<i class="fa fa-fw fa-check-square-o" style="margin-right:7px;"></i>').removeClass("btn-inverse opacity-0_5").addClass("btn-default");
										setTimeout(function () {
											a.text($__theme_text_right_restored).prepend('<i class="fa fa-fw fa-history" style="margin-right:7px;"></i>')
										}, 1000)
									},
									error: function (c) {
										a.text($__theme_text_right_error + "!").prepend('<i class="fa fa-fw fa-exclamation-triangle" style="margin-right:7px;"></i>').addClass("btn-danger").removeClass("btn-default btn-inverse opacity-0_5");
										b()
									}
								})
							}, 1000)
						}, 0)
					}
				})
			}
			$(".nav.nav-tabs").prepend('<li><a data-toggle="tab" href="#atsettings"><span class="cspinner" style="position: relative"><span class="cspinner-icon" style="width:12px; height:12px; "></span></span></a></li>');
			$(".tab-pane").first().before('<div id="atsettings" class="tab-pane text-center"><span class="cspinner" style="margin-top:18px; position: relative"><span class="cspinner-icon"></span></span></div>');
			$('.nav-tabs a[href="#atsettings"]').tab("show");
			$.ajax({
				type: "GET",
				url: $_____link_full + "/index.cgi/?xhr-settings=1",
				data: false,
				dataType: "text",
				success: function (n) {
					$("#atsettings").html(n);
					var q = $("div#atsettings").find(".ui_form");
					$__theme_text_right_save = q.data("text-save");
					$__theme_text_right_saved = q.data("text-settings_right_saved");
					$__theme_text_right_saving = q.data("text-settings_right_saving");
					$__theme_text_right_restore_defaults = q.data("text-settings_right_restore_defaults");
					$__theme_text_right_restored = q.data("text-settings_right_restored");
					$__theme_text_right_restoring = q.data("text-settings_right_restoring");
					$__theme_text_right_error = q.data("text-error");
					$('.nav-tabs a[href="#atsettings"]').text(q.data("text-current_theme"));
					$("div#atsettings").removeClass("text-center");
					b();
					settings_update();
					if (settings_window_customized_checkboxes_and_radios) {
						$('input[type="radio"][name^="settings_"], input[type="checkbox"][name^="settings_"]').icheck({
							checkboxClass: "acheckbox",
							radioClass: "aradio",
							increaseArea: "20%"
						})
					}
					var p = $("body").find(".fa.fa-sub-title").parent("span");
					$(p).next("br").remove();
					$(p).next("div.smaller").attr("style", "margin-top: -15px !important");
					p.remove();

					function j(c) {
						typeof c == "undefined" ? c = $('input[name="settings_right_hide_table_icons"]:checked') : false;
						var d = ["settings_right_small_table_icons", "settings_right_xsmall_table_icons", "settings_right_animate_table_icons", "settings_right_grayscaled_table_icons"];
						if (c.val() == "true") {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"]').prop("disabled", true);
								$('input[name="' + g + '"]').parent(".aradio").addClass("disabled")
							})
						} else {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"]').prop("disabled", false);
								$('input[name="' + g + '"]').parent(".aradio").removeClass("disabled")
							})
						}
					}
					j();
					$('input[name="settings_right_hide_table_icons"]').on("change", function () {
						j($(this));
						o()
					});

					function k(c) {
						typeof c == "undefined" ? c = $('input[name="settings_hotkeys_active"]:checked') : false;
						var d = ["settings_hotkey_custom_1", "settings_hotkey_custom_2", "settings_hotkey_custom_3", "settings_hotkey_custom_4", "settings_hotkey_custom_5", "settings_hotkey_custom_6", "settings_hotkey_custom_7", "settings_hotkey_custom_8", "settings_hotkey_custom_9", "settings_hotkey_toggle_modifier", "settings_hotkey_toggle_key_webmin", "settings_hotkey_toggle_key_virtualmin", "settings_hotkey_toggle_key_cloudmin", "settings_hotkey_toggle_key_usermin", "settings_hotkey_toggle_key_webmail", "settings_hotkey_focus_search", "settings_hotkey_toggle_slider", "settings_hotkey_reload", "settings_hotkey_sysinfo", "settings_hotkey_favorites"];
						if (c.val() == "false") {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", true)
							})
						} else {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", false)
							})
						}
					}
					k();
					$('input[name="settings_hotkeys_active"]').on("change", function () {
						k($(this))
					});

					function l(c) {
						typeof c == "undefined" ? c = $('input[name="settings_notification_slider_enabled"]:checked') : false;
						var d = ["settings_notification_color", "settings_notification_slider_fixed", "settings_sysinfo_background_call_timeout"];
						if (c.val() == "false") {
							$.each(d, function (f, g) {
								if (g == "settings_notification_slider_fixed") {
									$('input[name="settings_notification_slider_fixed"][value="false"]').trigger("click")
								}
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", true).parent(".aradio").addClass("disabled")
							})
						} else {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", false).parent(".aradio").removeClass("disabled")
							})
						}
					}
					l();
					$('input[name="settings_notification_slider_enabled"]').on("change", function () {
						l($(this))
					});

					function o(c) {
						typeof c == "undefined" ? c = $('input[name="settings_right_xsmall_table_icons"]:checked') : false;
						var d = ["settings_right_small_table_icons"];
						if (c.val() == "true") {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", true);
								$('input[name="' + g + '"], select[name="' + g + '"]').parent(".aradio").addClass("disabled")
							})
						} else {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", false);
								$('input[name="' + g + '"], select[name="' + g + '"]').parent(".aradio").removeClass("disabled")
							})
						}
					}
					o();
					$('input[name="settings_right_xsmall_table_icons"]').on("change", function () {
						o($(this))
					});

					function r(c) {
						typeof c == "undefined" ? c = $('input[name="settings_thirdparty_filemin_hide_toolbar"]:checked') : false;
						var d = ["settings_thirdparty_filemin_hovered_toolbar"];
						if (c.val() == "true") {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", true);
								$('input[name="' + g + '"], select[name="' + g + '"]').parent(".aradio").addClass("disabled")
							})
						} else {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"], select[name="' + g + '"]').prop("disabled", false);
								$('input[name="' + g + '"], select[name="' + g + '"]').parent(".aradio").removeClass("disabled")
							})
						}
					}
					r();
					$('input[name="settings_thirdparty_filemin_hide_toolbar"]').on("change", function () {
						r($(this))
					});

					function m(c) {
						typeof c == "undefined" ? c = $('input[name="settings_sysinfo_easypie_charts"]:checked') : false;
						var d = ["settings_sysinfo_easypie_charts_width", "settings_sysinfo_easypie_charts_scale"];
						if (c.val() == "true") {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"]').prop("disabled", false).removeClass("disabled")
							})
						} else {
							$.each(d, function (f, g) {
								$('input[name="' + g + '"]').prop("disabled", true).addClass("disabled")
							})
						}
					}
					m();
					$('input[name="settings_sysinfo_easypie_charts"]').on("change", function () {
						m($(this))
					});
					$('select[name="settings_navigation_color"]').on("click keyup change", function (c) {
						$("body").attr("data-theme", $(this).val());
						t__wi_p.$("body").attr("data-theme", $(this).val())
					});
					$('select[name="settings_background_color"]').on("click keyup change", function (c) {
						$("html").attr("data-background-style", $(this).val())
					});
					$('select[name="settings_notification_color"]').change(function (c) {
						t__wi_p.$("body .right-side-tabs, body .right-side-tabs-toggler").attr("data-background-style", $(this).val())
					});
					$('input[name="settings_notification_slider_enabled"]').change(function (c) {
						if ($(this).val() == "true") {
							t__wi_p.$("body .right-side-tabs-toggler").removeClass("hidden");
							t__wi_p.$("body .right-side-tabs").removeClass("hidden")
						} else {
							t__wi_p.$("body .right-side-tabs-toggler").addClass("hidden");
							t__wi_p.$("body .right-side-tabs").addClass("hidden")
						}
						settings_update()
					});
					$('input[name="settings_notification_slider_fixed"]').change(function (c) {
						if ($(this).val() == "true") {
							n___p__f(1)
						} else {
							n___p__f(0)
						}
						settings_update()
					});
					$('select[name="settings_navigation_color"]').after('<i class="fa fa-cog text-light settings_navigation_color_toggle cursor-default" data-name="settings_navigation_color" style="margin-left: 10px; background-color: transparent !important"></i>																		 <i class="fa fa-refresh text-light settings_navigation_color_reset cursor-default hidden" data-name="settings_navigation_color" style="margin-left: 4px; background-color: transparent !important"></i>');
					$('select[name="settings_background_color"]').after('<i class="fa fa-cog text-light settings_background_color_toggle cursor-default" data-name="settings_background_color" style="margin-left: 10px; background-color: transparent !important"></i>																		 <i class="fa fa-refresh text-light settings_background_color_reset cursor-default hidden" data-name="settings_background_color" style="margin-left: 4px; background-color: transparent !important"></i>');
					$(".settings_navigation_color_toggle, .settings_background_color_toggle").on("click", function () {
						if (typeof window[$(this).attr("data-name") + "controller"] == "undefined" || window[$(this).attr("data-name") + "controller"] == "hidden") {
							$("." + $(this).attr("data-name") + "_reset, ." + $(this).attr("data-name") + "_rows").removeClass("hidden");
							window[$(this).attr("data-name") + "controller"] = "shown"
						} else {
							$("." + $(this).attr("data-name") + "_reset, ." + $(this).attr("data-name") + "_rows").addClass("hidden");
							window[$(this).attr("data-name") + "controller"] = "hidden"
						}
					});
					$(".settings_navigation_color_reset, .settings_background_color_reset").on("click", function () {
						if ($(this).attr("data-name") == "settings_navigation_color") {
							f__l__filter_r()
						} else {
							f__c__filter_r()
						}
					});
					var a = $('input[name="settings_grayscale_level_navigation"], input[name="settings_sepia_level_navigation"], input[name="settings_saturate_level_navigation"], input[name="settings_hue_level_navigation"], input[name="settings_invert_level_navigation"], input[name="settings_brightness_level_navigation"], input[name="settings_contrast_level_navigation"]');
					a.on("click keyup change", function (c) {
						var d = "-webkit-filter: grayscale(" + $('input[name="settings_grayscale_level_navigation"]').val() + ") sepia(" + $('input[name="settings_sepia_level_navigation"]').val() + ") saturate(" + $('input[name="settings_saturate_level_navigation"]').val() + ") hue-rotate(" + $('input[name="settings_hue_level_navigation"]').val() + "deg) invert(" + $('input[name="settings_invert_level_navigation"]').val() + ") brightness(" + $('input[name="settings_brightness_level_navigation"]').val() + ") contrast(" + $('input[name="settings_contrast_level_navigation"]').val() + "); filter: grayscale(" + $('input[name="settings_grayscale_level_navigation"]').val() + ") sepia(" + $('input[name="settings_sepia_level_navigation"]').val() + ") saturate(" + $('input[name="settings_saturate_level_navigation"]').val() + ") hue-rotate(" + $('input[name="settings_hue_level_navigation"]').val() + "deg) invert(" + $('input[name="settings_invert_level_navigation"]').val() + ") brightness(" + $('input[name="settings_brightness_level_navigation"]').val() + ") contrast(" + $('input[name="settings_contrast_level_navigation"]').val() + ");";
						t__wi_p.$(".visible-xs.mobile-menu-toggler").attr("style", "position: fixed;" + d);
						t__wi_p.$("aside, .visible-xs.mobile-menu-toggler").attr("style", "z-index: 10; overflow: visible; transform: translate(" + settings_leftmenu_width + "px, 0px);" + d);
						$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val());
						settings_update()
					});
					a.each(function () {
						$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val());
						$(this).parent().parent("td").parent("tr.atshover").addClass("hidden settings_navigation_color_rows")
					});
					var t = $('input[name="settings_grayscale_level_content"], input[name="settings_saturate_level_content"], input[name="settings_hue_level_content"]');
					t.on("click keyup change", function (c) {
						var d = "-webkit-filter: grayscale(" + $('input[name="settings_grayscale_level_content"]').val() + ") saturate(" + $('input[name="settings_saturate_level_content"]').val() + ") hue-rotate(" + $('input[name="settings_hue_level_content"]').val() + "deg); filter: grayscale(" + $('input[name="settings_grayscale_level_content"]').val() + ") saturate(" + $('input[name="settings_saturate_level_content"]').val() + ") hue-rotate(" + $('input[name="settings_hue_level_content"]').val() + "deg);";
						$("body").attr("style", d);
						t__wi_p.$("#content .loading-container").attr("style", d);
						$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val());
						settings_update()
					});
					t.each(function () {
						$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val());
						$(this).parent().parent("td").parent("tr.atshover").addClass("hidden settings_background_color_rows")
					});
					var s = $('input[name="settings_leftmenu_width"]');
					s.on("click keyup change", function (c) {
						t__wi_p.f__r__s($(this).val(), $(this).val());
						$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val());
						settings_update();
						t__wi_p.settings_leftmenu_width_initial = $(this).val()
					});
					s.each(function () {
						$('code[data-name="' + $(this).attr("name") + '"]').text($(this).val());
						t__wi_p.settings_leftmenu_width_initial = $(this).val()
					});
					if ($__source_query == "restored") {
						a.trigger("click");
						t.trigger("click");
						s.trigger("click");
						$('select[name="settings_navigation_color"], select[name="settings_background_color"]').trigger("change");
						window.history.pushState(null, null, $_____link_full + "/webmin/edit_themes.cgi")
					}
					t__wi_p.$("aside ul.user-html li.user-html-string").html($('input[name="settings_leftmenu_user_html"]').val());
					$('input[name="settings_leftmenu_user_html"]').keyup(function (c) {
						t__wi_p.$("aside ul.user-html li.user-html-string").html($(this).val())
					});
					if (dashboard_switch()) {
						$('input[name="settings_sysinfo_link_mini"]').parent().parent().parent().parent("tr").remove()
					}
					t__wi_p.__cms();
					if (!$t_uri_virtualmin && !$t_uri_cloudmin) {
						t__wi_p.__dlm("webmin/")
					}
					$('input[name^="settings_thirdparty_filemin"], input[name="settings_sysinfo_easypie_charts_width"], input[name="settings_sysinfo_easypie_charts_scale"]').parents("td.col_value.atscontent").parent("tr.atshover").addClass("settings_option_padded");
					$('input[data-role="tagsinput"]').tagsinput()
				}
			})
		});
		$("body").on("click", "#atsave:not(.btn-inverse)", function (d) {
			d.preventDefault();
			$(this).text($__theme_text_right_saving).prepend('<i class="fa fa-fw fa-circle-o-notch faa-spin faa-slow animated" style="margin-right:7px;"></i>').removeClass("btn-danger btn-success").addClass("btn-inverse opacity-0_5");
			var c = $(this);
			parse_bool($('input[name="settings_window_customized_checkboxes_and_radios"]:checked').val()) != settings_window_customized_checkboxes_and_radios ? _settings_reload = true : _settings_reload = false;
			settings_update();
			setTimeout(function () {
				$.ajax({
					type: "POST",
					url: $_____link_full + "/index.cgi?xhr-settings=1&save=1",
					data: c.parents("form").serialize(),
					dataType: "text",
					success: function (a) {
						t__wi_p.__lls();
						c.text($__theme_text_right_saved).prepend('<i class="fa fa-fw fa-check-square-o" style="margin-right:7px;"></i>').removeClass("btn-inverse opacity-0_5").addClass("btn-success");
						f__l_reload();
						setTimeout(function () {
							if (_settings_reload) {
								t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/webmin/edit_themes.cgi")
							} else {
								c.text($__theme_text_right_save).prepend('<i class="fa fa-fw fa-floppy-o" style="margin-right:7px;"></i>')
							}
						}, 1800)
					},
					error: function () {
						c.text($__theme_text_right_error + "!").prepend('<i class="fa fa-fw fa-exclamation-triangle" style="margin-right:7px;"></i>').addClass("btn-danger").removeClass("btn-success btn-inverse opacity-0_5")
					}
				})
			}, 300)
		})
	}

	function set_location_search() {
		if (t__wi_p.$("#wrapper").data("virtual-server") != -1) {
			t__wi_p.history.pushState(null, null, $_____link_full + "/?virtualmin")
		} else {
			if (t__wi_p.$("#wrapper").data("server-manager") != -1) {
				t__wi_p.history.pushState(null, null, $_____link_full + "/?cloudmin")
			} else {
				if (t__wi_p.$("#wrapper").data("dashboard") != -1) {
					t__wi_p.history.pushState(null, null, $_____link_full + "/?dashboard")
				} else {
					t__wi_p.history.pushState(null, null, $_____link_full + "/")
				}
			}
		}
	}
	if (t__wi_p.location.search == "?theme-update-finished" || $("#wrapper").data("notice") == 1) {
		__s___();
		setTimeout(function () {
			t__wi_p.$('iframe[name="page"]').contents().find("button[data-target='#update_notice']").click();
			t__wi_p.$('.right-side-tabs-notification[data-type="authentic_remote_version"]').find("i.af-clear-all").trigger("click")
		}, 400)
	}
	$("body").on("click", 'button[data-href="#theme-info"]', function (b) {
		b.preventDefault();
		t__wi_p.$('iframe[name="page"]').contents().find("button[data-target='#update_notice']").addClass("manual").click()
	});
	$("body").on("hide.bs.modal", "#update_notice", function () {
		if (!t__wi_p.$('iframe[name="page"]').contents().find("button[data-target='#update_notice']").hasClass("manual")) {
			t__wi_p.$('iframe[name="page"]').contents().find("button[data-target='#update_notice']").removeClass("manual");
			t__wi_p.$("aside").hide();
			t__wi_p.$(".loader-container").css("background-color", "#f0f0f0").show();
			t__wi_p.location = t__wi_p.location
		} else {
			t__wi_p.$("aside").find(".modal-backdrop.fade.in").remove()
		}
	}).on("show.bs.modal", "#update_notice", function () {
		t__wi_p.$("aside").append('<div class="modal-backdrop fade in"></div>')
	});
	if ($current_page_full && $current_page_full.indexOf("/webmin/edit_themes.cgi") > -1 && t__wi_p.location.search == "?updating-webmin-theme") {
		setTimeout(function () {
			$iframe = t__wi_p.$('iframe[name="page"]').contents();
			$iframe.find(".panel-body .tab-pane.active").removeClass("active");
			$iframe.find(".panel-body #att_install").addClass("active");
			$iframe.find('.panel-body .ui_radio_table.table-hardcoded input[id="source_2"]').prop("checked", true);
			$iframe.find('.panel-body .ui_radio_table.table-hardcoded input[id="source_2"]').parents("td").next("td").find('input[name="url"]').val("https://raw.githubusercontent.com/qooob/authentic-theme/master/.build/authentic-theme-latest.wbt.gz");
			$iframe.find('.panel-body .tab-pane.active form[action^="install_theme."]').submit();
			t__wi_p.history.pushState(null, null, $_____link_full + "/?downloading-webmin-theme")
		}, 400)
	} else {
		if ($current_page_full && ($current_page_full.indexOf("/webmin/install_theme.cgi") > -1 || $current_page_full.indexOf("/usermin/install_theme.cgi") > -1 || $current_page_full.indexOf("/usermin/edit_themes.cgi") > -1) && (t__wi_p.location.search == "?downloading-webmin-theme" || t__wi_p.location.search == "?downloading-usermin-theme" || t__wi_p.location.search == "?updating-usermin-theme")) {
			if (t__wi_p.$t_av__usermin && t__wi_p.location.search != "?downloading-usermin-theme") {
				if (t__wi_p.location.search == "?updating-usermin-theme") {
					setTimeout(function () {
						$__iframe = t__wi_p.$('iframe[name="page"]').contents();
						$__iframe.find('input[name="source"][value="2"]').prop("checked", true);
						$__iframe.find('input[name="url"]').val("https://raw.githubusercontent.com/qooob/authentic-theme/master/.build/authentic-theme-latest.wbt.gz");
						$__iframe.find('form[action^="install_theme."]').submit();
						t__wi_p.history.pushState(null, null, $_____link_full + "/?downloading-usermin-theme")
					}, 400)
				} else {
					t__wi_p.history.pushState(null, null, $_____link_full + "/?updating-usermin-theme");
					t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/usermin/edit_themes.cgi")
				}
			} else {
				t__wi_p.history.pushState(null, null, $_____link_full + "/?theme-update-finished");
				t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi")
			}
		} else {
			if ($current_page_full && $current_page_full.indexOf("/sysinfo.cgi") > -1 && t__wi_p.location.search == "?theme-update-finished") {
				set_location_search();
				$(t__wi_p).on("popstate", function () {
					t__wi_p.history.pushState(null, null, $_____link_full + "/")
				})
			}
		}
	}
	if ($current_page_full && $current_page_full.indexOf("/package-updates/index.cgi") > -1 && t__wi_p.location.search == "?recollecting") {
		t__wi_p.history.pushState(null, null, $_____link_full + "/?recollecting-package-updates");
		t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/package-updates/index.cgi?mode=updates")
	} else {
		if ($current_page_full && $current_page_full.indexOf("/package-updates/index.cgi") > -1 && t__wi_p.location.search == "?recollecting-package-updates") {
			setTimeout(function () {
				$iframe = t__wi_p.$('iframe[name="page"]').contents();
				var b = $iframe.find('form[action^="update."]');
				b.append('<input type="hidden" name="refresh" value="1">');
				b.submit();
				t__wi_p.history.pushState(null, null, $_____link_full + "/?recollecting-package-updates-processing")
			}, 400)
		} else {
			if ($current_page_full && $current_page_full.indexOf("/package-updates/update.cgi") > -1 && t__wi_p.location.search == "?recollecting-package-updates-processing") {
				$iframe = t__wi_p.$('iframe[name="page"]').contents();
				$iframe.find("#refresh").trigger("click");
				t__wi_p.history.pushState(null, null, $_____link_full + "/?recollect");
				t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/webmin/edit_webmincron.cgi")
			}
		}
	}
	if ($current_page_full && $current_page_full.indexOf("/webmin/edit_webmincron.cgi") > -1 && t__wi_p.location.search == "?recollect") {
		setTimeout(function () {
			$sysinfo_content = $("body");
			$sysinfo_content.find("#" + $sysinfo_content.find("label:contains('cleanup_temp_files')").attr("for")).prop("checked", true);
			$sysinfo_content.find("#" + $sysinfo_content.find("label:contains('scheduled_collect_system_info')").attr("for")).prop("checked", true);
			$sysinfo_content.find("#" + $sysinfo_content.find("label:contains('collectinfo.pl')").attr("for")).prop("checked", true);
			$sysinfo_content.find("#" + $sysinfo_content.find("label:contains('status.pl')").attr("for")).prop("checked", true);
			$form_sysinfo = $sysinfo_content.find('form[action^="delete_webmincron."]');
			$form_sysinfo.append('<input type="hidden" name="run" value="1">');
			$form_sysinfo.submit();
			t__wi_p.history.pushState(null, null, $_____link_full + "/?recollect-system-status")
		}, 400)
	} else {
		if ($current_page_full && $current_page_full.indexOf("/webmin/delete_webmincron.cgi") > -1 && t__wi_p.location.search == "?recollect-system-status") {
			t__wi_p.history.pushState(null, null, $_____link_full + "/?recollect-finished");
			t__wi_p.$('iframe[name="page"]').attr("src", $_____link_full + "/sysinfo.cgi")
		} else {
			if ($current_page_full && $current_page_full.indexOf("/sysinfo.cgi") > -1 && t__wi_p.location.search == "?recollect-finished") {
				set_location_search();
				$(t__wi_p).on("popstate", function () {
					t__wi_p.history.pushState(null, null, $_____link_full + "/")
				})
			}
		}
	}
	$("#system-status > div.panel-body > table > tbody > tr").on("mouseover", function () {
		$(this).find(".btn-hidden").removeClass("hidden")
	}).on("mouseout", function () {
		$(this).find(".btn-hidden").addClass("hidden")
	});
	$('input[name="but_switch"]').on("click", function (b) {
		$(t__wi_p).on("popstate", function () {
			t__wi_p.history.pushState(null, null, $_____link_full + "/")
		});
		$(this).parents("form").attr("target", "_top")
	});
	$('form[action*="switch_user.cgi"], a[href*="switch_user.cgi"]').each(function () {
		$(t__wi_p).on("popstate", function () {
			t__wi_p.history.pushState(null, null, $_____link_full + "/")
		});
		$(this).attr("target", "_top")
	});
	if ($current_directory == $_____link + "status/") {
		$('td > label > img[src*="images/up.gif"]:not(".ui_icon_protected")').each(function (d, f) {
			var g = $(this);
			$(f).attr("src", "" + $_____link_full + "/images/check.png")
		});
		$('td > label > img[src*="images/down.gif"]:not(".ui_icon_protected")').each(function (d, f) {
			var g = $(this);
			$(f).attr("src", "" + $_____link_full + "/images/cross.png")
		});
		$('td > label > img[src*="images/not.gif"]:not(".ui_icon_protected")').each(function (d, f) {
			var g = $(this);
			$(f).attr("src", "" + $_____link_full + "/images/not.png")
		})
	}
	$('.ui_form[action^="delete_mons"] tr.ui_checked_columns > td > label > img[src="images/up.gif"]:not(".ui_icon_protected"), .ui_form[action^="save_mon"] img[src="images/up.gif"]:not(".ui_icon_protected"), table.ui_buttons_table > tbody > tr.ui_buttons_row > td.ui_buttons_label > img[src="images/up.gif"]:not(".ui_icon_protected")').each(function (d, f) {
		var g = $(this);
		$(f).attr("src", "" + $_____link_full + "/images/check.png")
	});
	$('.ui_form[action^="delete_mons"] tr.ui_checked_columns > td > label > img[src="images/down.gif"]:not(".ui_icon_protected"), .ui_form[action^="save_mon"] img[src="images/down.gif"]:not(".ui_icon_protected"), table.ui_buttons_table > tbody > tr.ui_buttons_row > td.ui_buttons_label > img[src="images/down.gif"]:not(".ui_icon_protected")').each(function (d, f) {
		var g = $(this);
		$(f).attr("src", "" + $_____link_full + "/images/cross.png")
	});
	$('.ui_form[action^="delete_mons"] tr.ui_checked_columns > td > label > img[src="images/not.gif"]:not(".ui_icon_protected"), .ui_form[action^="save_mon"] img[src="images/not.gif"]:not(".ui_icon_protected"), table.ui_buttons_table > tbody > tr.ui_buttons_row > td.ui_buttons_label > img[src="images/not.gif"]:not(".ui_icon_protected")').each(function (d, f) {
		var g = $(this);
		$(f).attr("src", "" + $_____link_full + "/images/not.png")
	});
	$('img[src^="images"]:not(".ui_icon_protected")').each(function (d, f) {
		var g = $(this),
			f = f;
		if ($__current_directory == $_____link_full + "/virtual-server/") {
			$(f).attr("src", "" + $_____link_full + "/" + g.attr("src"))
		} else {
			if ($('body[class^="filemin"]').length) {
				return
			}
			$.ajax({
				type: "HEAD",
				data: false,
				url: $_____link_full + "/" + g.attr("src"),
				success: function () {
					$(f).attr("src", "" + $_____link_full + "/" + g.attr("src"))
				},
				error: function () {}
			})
		}
	});
	$('img[src^="../images"]:not(".ui_icon_protected")').each(function (d, f) {
		var g = $(this),
			f = f;
		if ($__current_directory == $_____link_full + "/virtual-server/") {
			$(f).attr("src", "" + $_____link_full + "/" + g.attr("src").replace("../", ""))
		} else {
			if ($('body[class^="filemin"]').length) {
				return
			}
			$.ajax({
				type: "HEAD",
				data: false,
				url: $_____link_full + "/" + g.attr("src"),
				success: function () {
					$(f).attr("src", "" + $_____link_full + "/" + g.attr("src").replace("../", ""))
				},
				error: function () {}
			})
		}
	});
	$("input").each(function (c, d) {
		if ($(this).attr("src") == "images/ok.gif") {
			$(d).attr("src", "" + $_____link_full + "/" + $(this).attr("src"));
			$(this).parents("td").attr("style", "white-space: nowrap")
		}
	});
	t__cm___init($("textarea"), false, false, "static");
	if ($(".ui_table tr td").has(".ui_grid_table.table-hardcoded") && ($current_directory == $_____link + "passwd/" || $current_directory == $_____link + "mailboxes/" || $current_page_full == $_____link_full + "/usermin/list_configs.cgi")) {
		$(".ui_table tr td .ui_grid_table.table-hardcoded").parents("table").css("border", "1px solid #f0f0f0");
		$(".ui_table tr td .ui_grid_table.table-hardcoded").addClass("table").parents("tr").css("border", "1px solid #f0f0f0")
	}
	if (($("body").attr("class") && $('body[class="custom"]').length || ($("body").attr("class") && $("body").attr("class").search(/custom\d+$/) === 0)) && $__source_file == "view.cgi") {
		var $_tt = $('form[action="save.cgi"]').find(".table-title").find("tt").text();
		$('form[action="save.cgi"]').find(".table-title").find("b").empty().append("<tt>" + $_tt + "</tt>")
	}
	$.each($("form > table"), function () {
		if ($(this).next('input[type="submit"]')) {
			if ($(this).attr("style")) {} else {}
		}
	});
	$.each($("table tr"), function () {
		if ($(this).is(":empty")) {
			$(this).remove()
		}
	});

	function __tables() {
		if ($current_directory == $_____link + "backup-config/" && $("table#show_backup_destination") || $current_page_full == $_____link_full + "/virtual-server/summary_domain.cgi" || $current_page_full == $_____link_full + "/usermin/edit_categories.cgi" || $current_page_full == $_____link_full + "/usermin/edit_defacl.cgi" || $current_page_full == $_____link_full + "/proc/index_search.cgi" || $current_page_full == $_____link_full + "/quota/list_groups.cgi" || $current_page_full == $_____link_full + "/bind8/conf_misc.cgi" || $current_page_full == $_____link_full + "/bind8/edit_recs.cgi" || $current_page_full == $_____link_full + "/postfix/sasl.cgi" || $current_page_full == $_____link_full + "/postfix/edit_master.cgi" || $current_page_full == $_____link_full + "/squid/edit_icp.cgi" || $current_page_full == $_____link_full + "/squid/edit_misc.cgi" || $current_page_full == $_____link_full + "/cpan/edit_mod.cgi" || $current_page_full == $_____link_full + "/phpini/edit_errors.cgi" || $current_page_full == $_____link_full + "/acl/edit_acl.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_domain.cgi" || $current_page_full == $_____link_full + "/apache/edit_virt.cgi" || $current_page_full == $_____link_full + "/apache/edit_dir.cgi" || $current_page_full == $_____link_full + "/mysql/edit_cnf.cgi" || $current_page_full == $_____link_full + "/squid/edit_logs.cgi" || $current_page_full == $_____link_full + "/net/edit_aifc.cgi" || $current_page_full == $_____link_full + "/phpini/edit_misc.cgi") {
			return [$("table#show_backup_destination"), $('form[action="save_categories.cgi"] > .table-hardcoded'), $('form[action="save_defacl.cgi"] > .table-hardcoded'), $('form[action="index_search.cgi"] .sub_table_container.table-hardcoded'), $('form[action="save_misc.cgi"] .sub_table_container.table-hardcoded'), $('form[action="save_sasl.cgi"] .table-hardcoded'), $('form[action="save_master.cgi"] .sub_table_container.table-hardcoded'), $('form[action="save_icp.cgi"] .table.table-striped.table-rounded.table-condensed.table-subtable'), $('form[action="save_misc.cgi"] .table.table-striped.table-rounded.table-condensed.table-subtable'), $(".table-responsive > .table.table-striped.table-rounded.table-condensed.table-subtable"), $(".table-responsive > .table.table-striped.table-rounded.table-condensed.table-subtable > .sub_table_container.table-hardcoded"), $("#hiddendiv_opts"), $('.ui_form[action="save_virt.cgi"] .sub_table_container.table-hardcoded')]
		} else {
			return false
		}
	}
	if (__tables()) {
		$.each(__tables(), function (d, g) {
			var f = $(this);
			$.each(f.find("td"), function () {
				if (!$(this).find("hr").length) {
					$(this).removeAttr("colspan")
				}
			});
			$.each(f.find("tbody"), function () {
				var a = $(this).children("tr"),
					c = [];
				$.each(a, function () {
					c.push($(this).children("td").length)
				});
				var b = Math.max.apply(this, c);
				$.each(a, function () {
					var l = $(this).children("td").length;
					if (b != l && !$(this).find("hr").length && __tables()) {
						for (var k = 0; k < (b - l); k++) {
							$(this).append("<td></td>")
						}
					}
				})
			})
		})
	}
	$.each($("span > input"), function () {
		var g = $(this).parent("span").next(".file_chooser_button"),
			f = $(this).parent("span").next('input[type="button"][onclick]'),
			d = $(this).parent("span").next("select");
		if (g) {
			g.attr("style", "display: inline; width:40px; height: 28px; margin-right:0 !important; margin-top:4px !important;").find("i.fa-files-o").css("margin-top", "0")
		}
		if ($(this).parents(".tab-content")) {
			g.css("margin-top", "4px")
		}
		if (f) {
			f.attr("style", "display: inline; width:40px; height: 28px; margin-right:0 !important; margin-top:4px !important;").next("i.fa-files-o").css("margin-top", "11px")
		}
		if (d) {
			d.attr("style", "margin-top:4px !important;")
		}
	});
	$.each($('input[type="button"][onclick^="ifield"]'), function (d, c) {
		$(this).css("margin-left", "0").css("width", "40px").css("height", "28px")
	});
	$('.ui_form[action="switch.cgi"] > input.form-control.ui_textbox').next('input[type="button"][onclick^="ifield"]').attr("style", "margin-top: 2px !important; margin-bottom: 2px !important; margin-left: 0 !important");
	if ($current_directory == $_____link + "cshrc/") {
		$("textarea").each(function (d, c) {
			$(this).attr("style", "height: 20em !important")
		})
	}
	if ($current_page_full == $_____link_full + "/acl/" || $current_page_full == $_____link_full + "/acl/edit_user.cgi") {
		$('.ui_grid_table.table-hardcoded .ui_grid_row .ui_grid_cell input[type="checkbox"], .table-hardcoded .col_value input[type="checkbox"]').each(function (d, c) {
			$(this).attr("style", "vertical-align: bottom !important")
		})
	}
	if ($("body").attr("class") && $('body[class="custom"]').length || ($("body").attr("class") && $("body").attr("class").search(/custom\d+$/) === 0)) {
		$(".panel-body > .ui_grid_table.table-hardcoded").each(function (d, c) {
			$(this).attr("style", "margin-top: 3px !important")
		});
		$(".panel-body td > .ui_form").each(function () {
			$(this).attr("style", "padding-top: 0 !important")
		});
		$(".panel-body > a.ui_link").each(function (d, c) {
			$(this).addClass("btn btn-inverse btn-tiny ui_link_replaced").removeClass("ui_link");
			$(this).text($(this).text().replace(/\.$/, ""));
			$(this).parent().contents().filter(function () {
				return this.nodeType == 3
			}).remove();
			if (($(this).attr("href").indexOf("edit_cmd.cgi?new") === 0)) {
				$(this).html('<i class="fa fa-terminal"> </i> ' + $(this).text())
			}
			if (($(this).attr("href").indexOf("edit_file.cgi?new") === 0)) {
				$(this).html('<i class="fa fa-edit"> </i> ' + $(this).text())
			}
			if (($(this).attr("href").indexOf("edit_sql.cgi?new") === 0)) {
				$(this).html('<i class="fa fa-database"> </i> ' + $(this).text())
			}
		});
		$.each($('td.td_tag:contains("|")'), function () {
			$(this).find('a[href^="edit_"]').addClass("ui_link_replaced btn btn-success btn-xxs").css("margin-right", "3px").removeClass("ui_link").prepend('<i class="fa fa-pencil">&nbsp;</i>');
			$(this).find('a:not([href^="edit_"])').remove();
			$(this).parents("table").find("thead > tr > th:eq(2)").addClass("pointer-events-none").html("")
		});
		$('td.td_tag:contains("|")').contents().filter(function () {
			return this.nodeType == 3
		}).remove()
	}
	if ($current_page_full == $_____link_full + "/virtual-server/list_sched.cgi" || $current_page_full == $_____link_full + "/ldap-server/edit_schema.cgi" || $current_page_full == $_____link_full + "/mailboxes/view_mail.cgi" || $current_page_full == $_____link_full + "/mailbox/view_mail.cgi" || $current_page_full == $_____link_full + "/mailbox/list_folders.cgi" || $current_page_full == $_____link_full + "/phpini/" || $current_page_full == $_____link_full + "/phpini/index.cgi" || $current_page_full == $_____link_full + "/fsdump/" || $current_page_full == $_____link_full + "/fsdump/index.cgi" || $current_page_full == $_____link_full + "/fdisk/" || $current_page_full == $_____link_full + "/fdisk/index.cgi" || $current_page_full == $_____link_full + "/virtualmin-awstats/" || $current_page_full == $_____link_full + "/virtualmin-awstats/index.cgi") {
		$.each($('tr td:last-child:contains("|")'), function () {
			if ($current_page_full == $_____link_full + "/virtual-server/list_sched.cgi") {
				$(this).find('a[href^="backup_form.cgi"]').html($(this).find('a[href^="backup_form.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-floppy-o" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href^="restore_form.cgi"]').html($(this).find('a[href^="restore_form.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-primary btn-xxs").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-reply" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>')
			}
			if ($current_page_full == $_____link_full + "/ldap-server/edit_schema.cgi") {
				$(this).find('a[href^="view_sfile.cgi"]').html($(this).find('a[href^="view_sfile.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-eye" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href^="edit_sfile.cgi"]').html($(this).find('a[href^="edit_sfile.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-primary btn-xxs").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-pencil" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>')
			}
			if ($current_page_full == $_____link_full + "/phpini/" || $current_page_full == $_____link_full + "/phpini/index.cgi") {
				$(this).find('a[href^="list_ini.cgi"]').html($(this).find('a[href^="list_ini.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-cog" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href^="edit_manual.cgi"]').html($(this).find('a[href^="edit_manual.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-primary btn-xxs").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-pencil" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>')
			}
			if ($current_page_full == $_____link_full + "/fdisk/" || $current_page_full == $_____link_full + "/fdisk/index.cgi") {
				$(this).find('a[href^="edit_hdparm.cgi"]').html($(this).find('a[href^="edit_hdparm.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link");
				$(this).find('a[href*="smart-status/index.cgi"]').html($(this).find('a[href*="smart-status/index.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-info btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link");
				$(this).find('a[href^="blink.cgi"]').html($(this).find('a[href^="blink.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-warning btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link")
			}
			if ($current_page_full == $_____link_full + "/mailbox/list_folders.cgi") {
				$(this).find('a[href^="index.cgi"]').html($(this).find('a[href^="index.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").removeClass("ui_link").prepend('<i class="fa fa-eye" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href^="edit_auto.cgi"]').html($(this).find('a[href^="edit_auto.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-info btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").removeClass("ui_link").prepend('<i class="fa fa-recycle" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href^="copy_form.cgi"]').html($(this).find('a[href^="copy_form.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-warning btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").removeClass("ui_link").prepend('<i class="fa fa-clone" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>')
			}
			if ($current_page_full == $_____link_full + "/mailboxes/view_mail.cgi" || $current_page_full == $_____link_full + "/mailbox/view_mail.cgi") {
				$(this).find('a[href^="detach.cgi"]:not([href*="&save=1"]):not([target="_blank"])').html($(this).find('a[href^="detach.cgi"]:not([href*="&save=1"]):not([target="_blank"])').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-primary btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").removeClass("ui_link").prepend('<i class="fa fa-eye" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href*="detach.cgi"][target="_blank"]').html($(this).find('a[href*="detach.cgi"][target="_blank"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-external-link" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href*="&save=1"]:not([target="_blank"])').html($(this).find('a[href*="&save=1"]:not([target="_blank"])').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-warning btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-download" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>')
			}
			if ($current_page_full == $_____link_full + "/virtualmin-awstats/" || $current_page_full == $_____link_full + "/virtualmin-awstats/index.cgi") {
				$(this).find('a[href^="view.cgi"]').html($(this).find('a[href^="view.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-eye" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href^="config.cgi"]').html($(this).find('a[href^="config.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-primary btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-cog" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>')
			}
		});
		$('tr td:last-child:contains("|")').contents().filter(function () {
			return this.nodeType == 3
		}).remove();
		if ($current_page_full == $_____link_full + "/fsdump/" || $current_page_full == $_____link_full + "/fsdump/index.cgi") {
			$.each($("tr td:last-child"), function () {
				$(this).find('a[href^="backup.cgi"]').html($(this).find('a[href^="backup.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-success btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-floppy-o" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>');
				$(this).find('a[href^="kill.cgi"]').html($(this).find('a[href^="kill.cgi"]').text().replace(/\.\.$/, "&nbsp;")).addClass("ui_link_replaced btn btn-danger btn-xxs").removeClass("heighter-34").attr("style", "margin-top: 0 !important; margin-bottom: 0 !important; margin-right: 3px").removeClass("ui_link").prepend('<i class="fa fa-trash-o" style="vertical-align: baseline !important">&nbsp;&nbsp;</i>')
			})
		}
	}
	if ($current_page_full == $_____link_full + "/fdisk/edit_disk.cgi") {
		var __delete = [];
		$.each($(".panel-body > table.table.table-striped tbody tr"), function (a, b) {
			if ($(this).find("td:nth-child(3)").find('img[src*="images/use"]').length || $(this).find("td:nth-child(3)").find('img[src*="images/gap"]').length) {
				$(this).find("td:nth-child(3)").remove();
				__delete.push(a)
			}
		});
		if (!$.isEmptyObject(__delete)) {
			$(".panel-body > table.table.table-striped thead").find("th:nth-child(3)").remove();
			delete __delete
		}
	}
	if ($current_page_full == $_____link_full + "/virtual-server/edit_link.cgi") {
		$(".table-hardcoded").find('input[name="open"]').parent("td").parent("tr").remove()
	}
	if ($current_directory == $_____link + "init/") {
		$('.table.table-striped.table-condensed tr.tr_tag td.td_tag input[type="checkbox"]').each(function (d, c) {
			$(this).attr("style", "vertical-align: middle !important")
		})
	}
	if ($current_page_full.indexOf(".cgi") === -1 && $current_directory == $_____link + "useradmin/") {
		$('.table.table-striped.table-condensed tbody tr td input[type="checkbox"], .table.table-striped.table-condensed tbody tr td label').each(function (d, c) {
			$(this).parents("td").attr("style", "padding: 2px 2px 0 2px !important")
		});
		$(".table.table-striped.table-condensed tbody tr td label").each(function (d, c) {
			$(this).attr("style", "vertical-align: bottom !important")
		})
	}
	if ($current_directory == $_____link + "proc/" || $source_path == $_____link + "proc/index.cgi" || ($current_directory == $_____link + "fetchmail/" && $("link").attr("href") == "/images/favicon-usermin.ico")) {
		if ($current_directory == $_____link + "proc/" || $source_path == $_____link + "proc/index.cgi") {
			$("a.ui_link + b").addClass("btn btn-success").css("margin-top", "3px").css("margin-left", "3px");
			$("b + a.ui_link").addClass("btn btn-success").css("margin-top", "3px").css("margin-left", "3px");
			if ($('.panel-body > b:first-child:contains("Display")').length > 0) {
				$(".panel-body > b:first-child").remove()
			}
			if ($(".panel-body").find("b:first-child").text() == "PID") {
				$(".panel-body").find("b:first-child").addClass("btn btn-success").css("margin-top", "3px")
			}
		}
		$(".panel-body").contents().filter(function () {
			return this.nodeType == 3
		}).remove();
		$(".panel-body > a.ui_link").css("margin-left", "3px")
	}
	if ($current_directory == $_____link + "procmail/") {
		$(".panel-body p:first-child").next("p").contents().filter(function () {
			return this.nodeType == 3
		}).remove();
		$(".panel-body p:last-child").prev("a.ui_link").remove()
	}
	if ($current_directory == $_____link + "cron/" || $source_path == $_____link + "cron/index.cgi") {
		$('.panel-body form.ui_form[action="index.cgi"]').next("script").next("b").next("p").contents().filter(function () {
			return this.nodeType == 3
		}).remove()
	}
	if ($current_directory == $_____link + "filter/") {
		$(".panel-body > b").next("p").contents().filter(function () {
			return this.nodeType == 3
		}).remove()
	}
	if ($current_directory == $_____link + "dhcpd/") {
		$(".panel-body > p").contents().filter(function () {
			return this.nodeType == 3
		}).remove()
	}
	if ($current_directory == $_____link + "htaccess-htpasswd/" || $current_directory == $_____link + "forward/") {
		$("td table.table-hardcoded.table.table-subtable").removeClass("table-striped")
	}
	$("td.td_tag").contents().filter(function () {
		return this.nodeType == 3
	}).next("input").css("margin-left", "3px");
	$(".ui_buttons_hr > td > table.table-hardcoded > tbody > tr > td[nowrap]").each(function () {
		$(this).parents("table").attr("style", "margin-bottom: 15px !important")
	});
	$("textarea.form-control.ui_textarea").next('button[type="button"].btn-default').each(function () {
		$(this).prev("textarea").attr("style", "margin-bottom: 1px !important");
		$(this).attr("style", "width:100% !important; padding-top: 0; height:28px !important")
	});
	$("textarea.form-control.ui_textarea").next("br").next('button[type="button"].btn-default').each(function () {
		$(this).prev("textarea").attr("style", "margin-bottom: 1px !important");
		$(this).attr("style", "width:100% !important; padding-top: 0; height:28px !important")
	});
	$(".table-hardcoded > tbody > tr > td > input.form-control.ui_textbox").next('button[type="button"].ui_button').each(function () {
		$(this).attr("style", "margin-top: 2px !important")
	});
	$(".table-hardcoded > tbody > tr > td.col_label b a, .ui_table_row td a").each(function (d, c) {
		if (!$(this).attr("href")) {
			$(this).attr("style", "color: #333; text-decoration: none; cursor:default")
		}
	});
	$('input[name="all_weekdays"], .ui_grid_cell > table.table-condensed, table.table-hardcoded table.table-condensed, select[multiple][name="days"]').each(function () {
		$(this).parent("td").attr("style", "vertical-align: top !important; padding-left:2px; padding-right:2px;")
	});
	$('input[type="submit"]').each(function () {
		$(this).addClass("btn btn-default")
	});
	$("table tr th").each(function () {
		if ($(this).text()) {
			$(this).attr("style", "width: auto")
		}
	});
	$("table thead th:not(.table-title)").each(function () {
		$(this).css("border-top", "none");
		$(this).css("border-bottom", "none")
	});
	if ($("body").attr("class") && $("body").attr("class").indexOf("filemin") > -1) {
		$("#headln2l").prepend('<a onClick=\'window.open("/help.cgi/authentic-theme/file-manager", "help", "toolbar=no,menubar=no,scrollbars=yes,width=600,height=400,resizable=yes"); return false\' href="/help.cgi/authentic-theme/file-manager"></a>')
	}
	if (settings_right_iconize_header_links) {
		$.each($(".panel-heading > table.header > tbody > tr > td > a"), function () {
			if ($(this).attr("href") && $(this).attr("href").indexOf("config.cgi") > -1 || $(this).attr("href").indexOf("man/search.cgi") > -1 || $(this).attr("href").indexOf("/index.cgi") > -1 || $(this).attr("href") == $__current_directory || ($(this).attr("href").indexOf("index.cgi") > -1 && $current_directory == $_____link + "openvpn/") || ($(this).attr("href").indexOf("index.cgi?") > -1 && $current_directory == $_____link + "spam/") || $(this).attr("href").indexOf("restart_zone.cgi") > -1 || $(this).attr("href").indexOf("restart.cgi") > -1 || $(this).attr("href").indexOf("apply.cgi") > -1 || $(this).attr("href").indexOf("start.cgi") > -1 || $(this).attr("href").indexOf("stop.cgi") > -1 || ($(this).attr("href") == "//" && ($source_path == $_____link + "settings-editor_read.cgi" || $source_path == $_____link + "settings-upload.cgi")) || $(this).attr("href").indexOf("delete_") > -1 || $(this).attr("href").indexOf("list_mail.cgi") > -1 || $(this).attr("href").indexOf("/virtual-") > -1 || $(this).attr("href").indexOf("/virtualmin-") > -1 || $(this).attr("href").indexOf("/server-") > -1 || $(this).attr("href").indexOf("help.cgi") > -1) {
				$.each($(this).next("br"), function () {
					$(this).remove()
				});
				$.each($(this).prev("br"), function () {
					$(this).remove()
				});
				if ($(this).attr("href").indexOf("help.cgi") > -1) {
					var d = $(this),
						c = $(this).parent("td");
					$(this).remove();
					c.append(d)
				}
				if ($(this).attr("href").indexOf("/index.cgi") > -1 || $(this).attr("href") == $__current_directory || $(this).attr("href").indexOf("/virtual-") > -1 || $(this).attr("href").indexOf("/virtualmin-") > -1 || $(this).attr("href").indexOf("/server-") > -1) {
					$iconized_class = "fa-arrow-left";
					$(this).data("title", "")
				} else {
					if ($(this).attr("href") == "//" && ($source_path == $_____link + "settings-editor_read.cgi" || $source_path == $_____link + "settings-upload.cgi")) {
						$iconized_class = "fa-arrow-left";
						$(this).attr("href", "/webmin/edit_themes.cgi").data("title", "")
					} else {
						if ($(this).attr("href").indexOf("config.cgi") > -1) {
							$iconized_class = "fa-cog";
							$(this).data("title", "")
						} else {
							if ($(this).attr("href").indexOf("restart.cgi") > -1 || $(this).attr("href").indexOf("apply.cgi") > -1) {
								$iconized_class = "fa-refresh"
							} else {
								if ($(this).attr("href").indexOf("restart_zone.cgi") > -1) {
									$iconized_class = "fa-retweet"
								} else {
									if ($(this).attr("href").indexOf("start.cgi") > -1) {
										$iconized_class = "fa-play"
									} else {
										if ($(this).attr("href").indexOf("stop.cgi") > -1) {
											$iconized_class = "fa-square"
										} else {
											if ($(this).attr("href").indexOf("man/search.cgi") > -1) {
												$iconized_class = "fa-search"
											} else {
												if ($(this).attr("href").indexOf("delete_") > -1) {
													$iconized_class = "fa-trash-o"
												} else {
													if ($(this).attr("href").indexOf("list_mail.cgi") > -1) {
														$iconized_class = "fa-inbox"
													} else {
														if ($(this).attr("href").indexOf("index.cgi") > -1 && $current_directory == $_____link + "openvpn/") {
															$iconized_class = "fa-cogs"
														} else {
															if ($(this).attr("href").indexOf("index.cgi?") > -1 && $current_directory == $_____link + "spam/") {
																$iconized_class = "fa-arrow-left"
															}
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
				if ($(this).attr("href").indexOf("help.cgi") > -1) {
					$iconized_class = "fa-question-circle";
					$(this).data("title", "")
				}
				$(this).attr("data-title", $(this).text()).attr("data-container", "body").addClass("btn btn-link text-lighter").removeClass("ui_link").css("margin-right", "3px").append('<i class="fa ' + $iconized_class + '"></i>');
				$(this).contents().filter(function () {
					return this.nodeType == 3
				}).remove();
				$(this).tooltip();
				if ((($current_directory == $_____link + "apache/" || $current_directory == $_____link + "proftpd/") && ($(this).attr("href").indexOf("restart.cgi") > -1 || $(this).attr("href").indexOf("apply.cgi") > -1)) || $(this).parent("td").find("a") && $(this).parent("td").find("a").length == 1 || $(this).attr("href").indexOf("man/search.cgi") > -1 || $(this).attr("href").indexOf("config.cgi") > -1 || $(this).attr("href").indexOf("/index.cgi") > -1 || $(this).attr("href").indexOf("/index.cgi") > -1 || $(this).attr("href").indexOf("/virtual-") > -1 || $(this).attr("href").indexOf("/virtualmin-") > -1 || $(this).attr("href").indexOf("/server-") > -1) {
					if (($(this).attr("href").indexOf("/index.cgi") > -1 || $(this).attr("href").indexOf("config.cgi") > -1) && $("body").attr("class") && $("body").attr("class").indexOf("filemin") > -1) {
						$(this).attr("style", "margin-right: 0 !important; padding: 6px 12px")
					} else {
						$(this).attr("style", "margin-right: 0 !important")
					}
				}
			}
			$("#headln2l").removeClass("invisible")
		})
	}
	if ($source_path == $_____link + "settings-editor_read.cgi" || $source_path == $_____link + "settings-upload.cgi") {
		if (t__wi_p.$('link[href*="/unauthenticated/css/styles.css"]').length) {
			t__wi_p.$('link[href*="/unauthenticated/css/styles.css"]').attr("href", t__wi_p.$('link[href*="/unauthenticated/css/styles.css"]').attr("href").split("?")[0] + "?" + (new Date()).getTime())
		}
		if (t__wi_p.$('script[src*="/unauthenticated/js/scripts.js"]').length) {
			t__wi_p.$('script[src*="/unauthenticated/js/scripts.js"]').attr("src", t__wi_p.$('script[src*="/unauthenticated/js/scripts.js"]').attr("src").split("?")[0] + "?" + (new Date()).getTime())
		}
		$("body").on("click", 'a[href="/settings-editor_read.cgi"], a[href="/settings-upload.cgi"]', function () {});
		setTimeout(function () {
			$(".file-editor-saved").remove();
			$(".file-editor-save").removeClass("hidden")
		}, 2400);
		if ($__relative_url == "/settings-upload.cgi?saved=1") {
			$.each($(".file_chooser_button_preview:first"), function () {
				if (!$(this).hasClass("disabled")) {
					if (t__wi_p.$("aside + .__logo").length) {
						t__wi_p.$('.__logo img[src*="/images/logo.png"]').attr("src", t__wi_p.$('.__logo img[src*="/images/logo.png"]').attr("src").split("?")[0] + "?" + (new Date()).getTime());
						t__wi_p.$("aside + .__logo").attr("style", "transform: translate(0px, 0px);");
						setTimeout(function () {
							t__wi_p.$(".__logo").transition({
								y: "-140px"
							}, 1200)
						}, 400)
					} else {
						t__wi_p.$("aside").after('<div class="__logo _logo" style="transform: translate(0px, 0px);"><img src="' + $webprefix + "/images/logo.png?" + (new Date()).getTime() + '"></div>');
						setTimeout(function () {
							t__wi_p.$(".__logo").transition({
								y: "-140px"
							}, 1200)
						}, 400)
					}
				} else {
					t__wi_p.$("aside + .__logo").remove()
				}
			})
		}
	}
	if ($source_path == $_____link + "settings-upload.cgi") {
		$(function () {
			$_authenticated_logo = $('input[name="authenticated_logo"]:checked').val();
			$_unauthenticated_logo = $('input[name="unauthenticated_logo"]:checked').val();

			function c(a) {
				typeof a == "undefined" ? a = $('input[name="authenticated_logo"]:checked') : false;
				var b = ["authenticated_logo_file"];
				if (a.val() != "true") {
					$.each(b, function (h, j) {
						$('input[name="' + j + '"]').parents(".file-input-wrapper").addClass("disabled").prev(".file_chooser_button_preview").addClass("disabled")
					})
				} else {
					$.each(b, function (h, j) {
						$('input[name="' + j + '"]').parents(".file-input-wrapper").removeClass("disabled");
						if ($_authenticated_logo == "true") {
							$('input[name="' + j + '"]').parents(".file-input-wrapper").prev(".file_chooser_button_preview").removeClass("disabled")
						}
					})
				}
			}
			c();
			$('input[name="authenticated_logo"]').on("change", function () {
				c($(this))
			});

			function d(a) {
				typeof a == "undefined" ? a = $('input[name="unauthenticated_logo"]:checked') : false;
				var b = ["unauthenticated_logo_file"];
				if (a.val() != "true") {
					$.each(b, function (h, j) {
						$('input[name="' + j + '"]').parents(".file-input-wrapper").addClass("disabled").prev(".file_chooser_button_preview").addClass("disabled")
					})
				} else {
					$.each(b, function (h, j) {
						$('input[name="' + j + '"]').parents(".file-input-wrapper").removeClass("disabled");
						if ($_unauthenticated_logo == "true") {
							$('input[name="' + j + '"]').parents(".file-input-wrapper").prev(".file_chooser_button_preview").removeClass("disabled")
						}
					})
				}
			}
			d();
			$('input[name="unauthenticated_logo"]').on("change", function () {
				d($(this))
			})
		});
		$(".file_chooser_button_preview").on("mouseout", function (b) {
			$(this).css("background", "white")
		}).on("mouseover", function (b) {
			$(this).css("background", "#eee")
		});
		$.each($(".file_chooser_button_preview"), function () {
			if ($(this).data("image")) {
				$(this).popover({
					trigger: "hover",
					html: true,
					content: function () {
						return "<img src='" + $(this).data("image") + "'>"
					}
				})
			}
		});
		var $__webmin_path = $('a[href^="/settings-editor_read.cgi?file=%path%"]');
		$__webmin_path.attr("href", $__webmin_path.attr("href").replace("%path%", $("#path").val()))
	}
	$.each($('td.ui_grid_cell:contains("|")'), function () {
		$(this).contents().filter(function () {
			return this.nodeType == 3
		}).remove()
	});
	$('a[href*="help.cgi"][onclick], a[href*="showpass.cgi?"][onclick]').attr("onclick", "").unbind("click").addClass("help_popup");
	$(".help_popup").each(function () {
		$(this).attr("style", "color: #333; text-decoration: none; cursor:help")
	});
	$(".help_popup").on("click", function (g) {
		g.stopPropagation();
		g.preventDefault();
		if ($(this).is(g.target) && $(".popover").is(":visible")) {
			$(".popover").popover("hide");
			return true
		}
		var j = $(this),
			h = $(this).attr("href"),
			f = $(this).parents("td");
		f.append('<div class="_tmp_help_content hidden"></div>');
		$.ajax({
			type: "POST",
			url: j.attr("href"),
			data: false,
			dataType: "text",
			success: function (a) {
				f.find("._tmp_help_content").html(a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ""));
				$help_title = f.find("._tmp_help_content .ui_subheading").first().text();
				$help_body = f.find("._tmp_help_content title").remove();
				$help_body = f.find("._tmp_help_content h3.ui_subheading").remove();
				$help_body = f.find("._tmp_help_content h3").addClass("h3_help");
				$help_body = f.find("._tmp_help_content hr").remove();
				$help_body = f.find("._tmp_help_content a").removeAttr("href").css("text-decoration", "none").css("color", "#333").css("font-style", "italic");
				$help_body = f.find("._tmp_help_content").html();
				f.find("._tmp_help_content").remove();
				j.popover({
					html: true,
					container: "body",
					title: function () {
						return $help_title
					},
					content: function () {
						return $help_body
					},
					placement: "right"
				});
				j.popover("show");
				$("body").on("click", function () {
					if (get_selected_text().length === 0) {
						j.popover("destroy")
					}
				});
				j.on("shown.bs.popover", function () {
					if ($help_body.indexOf("<ad>") > -1) {
						$(".popover").animate({
							"max-width": "540px"
						}, 300)
					}
					$("body").find(".popover:visible").addClass("module-help");
					$('body[class*="filemin"]').find(".popover:visible").addClass("file-manager-help");
					if ($current_page_full && $current_page_full.indexOf("/webmin/edit_themes.cgi") > -1 && t__wi_p.location.search != "?updating-webmin-theme") {
						$("body").find(".popover:visible").addClass("at-help");
						var m = $(".link-theme").text(),
							d = $(".link-theme2").text(),
							c = $(".link-changelog").text(),
							b = $(".link-me").text(),
							n = $(".link-donation").text(),
							l = $(".link-youtube").text(),
							k = $(".link-github").text();
						$(".link-changelog");
						$(".link-theme").replaceWith('<a href="https://github.com/qooob/authentic-theme" target="_blank"><em>' + m + "</em></a>");
						$(".link-theme2").replaceWith('<a href="https://github.com/qooob/authentic-theme" target="_blank"><em>' + d + "</em></a>");
						$(".link-changelog").replaceWith('<a href="https://github.com/qooob/authentic-theme/blob/master/CHANGELOG.md" target="_blank" class="label label-default pull-right link-changelog"><em class="fa fa-history" style="font-size: 90%">&nbsp;&nbsp;<span class="font-family-default">' + c + "</span></em></a>");
						$(".link-changelog").detach().appendTo(".at-help .popover-title");
						$(".link-me").replaceWith('<a href="http://rostovtsev.ru" target="_blank"><em>' + b + "</em></a>");
						$(".link-donation").replaceWith('<a target="_blank" class="badge fa fa-paypal" style="font-size: 11px; background-color: #5bc0de;" href="https://www.paypal.com/cgi-bin/webscr?cmd=_donations&amp;lc=us&amp;business=programming%40rostovtsev%2eru&amp;currency_code=USD&amp;bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHostedGuest"> <span class="font-family-default">' + n + "</span></a>");
						$(".link-youtube").replaceWith('<a title="" data-original-title="" class="badge label-danger fa fa-youtube" style="font-size: 11px; background-color: #c9302c;" target="_blank" href="http://youtu.be/f_oy3qX2GXo"> <span class="font-family-default">' + l + "</span></a>");
						$(".link-github").replaceWith('<a title="" data-original-title="" class="badge fa fa-github" style="font-size: 11px; background-color: #337ab7;" target="_blank" href="https://github.com/qooob/authentic-theme/issues"> <span class="font-family-default">' + k + "</span></a>")
					}
				});
				j.on("hidden.bs.popover", function () {
					j.popover("destroy")
				})
			}
		})
	});
	if ($current_directory == $_____link + "fdisk/" || $current_directory == $_____link + "postfix/" || $current_directory == $_____link + "pam/" || $current_directory == $_____link + "syslog/") {
		$("p > a[href], table + a[href], div.panel-body > a.ui_link").each(function (d, c) {
			$(this).text($(this).text().replace(/\.$/, ""))
		})
	}
	$('.panel-body > form > p > a.ui_link, .panel-body > table.table + a.ui_link, .panel-body > p > a:not([href*="config.cgi?bacula-backup"]), body[data-current-product="usermin"] div.panel-body > p > a, div.panel-body > a[href^="edit_"]:not([href^="edit_user.cgi?user="]), .ui_form > a, .ui_grid_cell > :not(input):not(.acheckbox):not(.aradio):not(label) + a.ui_link:not([href^="edit_acl.cgi"], [href^="edit_rpc.cgi"], [href^="edit_user.cgi?user="]), .ui_grid_cell > a.select_all, .ui_grid_cell > a.select_invert, .ui_grid_cell > :not(input):not(.acheckbox):not(.aradio):not(label) + a[href*=".cgi"]:not([href^="edit_acl.cgi"], [href^="edit_rpc.cgi"], [href^="edit_user.cgi?user="]), .ui_grid_cell > a[href*=".cgi"]:first-child:not([href^="edit_rpc.cgi"],[href^="edit_nuser.cgi"],[href*="edit_user.cgi?idx"]), .tab-pane > p > a, .tab-pane > a.ui_link, .tab-pane > .table-condensed > a.ui_link, .tab-pane > a, .panel-body > p > a.ui_link, a.select_all, a.select_invert, form[action="delete.cgi"] > table table.ui_grid_table + a').each(function () {
		if ($current_directory != $_____link + "passwd/" && $(this).text() && $current_page_full != $_____link_full + "/mailboxes/" && $current_page_full != $_____link_full + "/mailboxes/index.cgi" && $current_page_full != $_____link_full + "/usermin/list_configs.cgi" && !$(this).hasClass("help_popup")) {
			$(this).addClass("btn btn-inverse btn-tiny ui_link_replaced");
			$(this).text($(this).text().replace(/\.$/, ""));
			var b = $(this).parent().contents().filter(function () {
				return this.nodeType == 3
			});
			if (b) {
				$.each(b, function () {
					if ($(this).text() && $(this).text().length <= 3) {
						$(this).remove()
					}
				})
			}
			if ($(this).hasClass("select_all")) {
				$(this).html('<i class="fa fa-check-square-o"> </i> ' + $(this).text())
			}
			if ($(this).hasClass("select_invert")) {
				$(this).html('<i class="fa fa-share-square-o"> </i> ' + $(this).text())
			}
			if ($(this).attr("href") && (($(this).attr("href").indexOf("edit") === 0 && $(this).attr("href").indexOf("edit_allow") !== 0) || $(this).attr("href").indexOf("master_form") === 0 || $(this).attr("href").indexOf("slave_form") === 0 || $(this).attr("href").indexOf("stub_form") === 0 || $(this).attr("href").indexOf("forward_form") === 0 || $(this).attr("href").indexOf("delegation_form") === 0 || $(this).attr("href").indexOf("mass_form") === 0 || $(this).attr("href").indexOf("newdb_form") === 0)) {
				$(this).html('<i class="fa fa-plus-square-o"> </i> ' + $(this).text())
			} else {
				if ($(this).attr("href") && $(this).attr("href").indexOf("edit_allow") === 0) {
					$(this).html('<i class="fa fa-shield"> </i> ' + $(this).text())
				} else {
					if ($(this).attr("href") && $(this).attr("href").indexOf("mass_ucreate") === 0) {
						$(this).html('<i class="fa fa-user"> </i> ' + $(this).text())
					}
				}
			}
			if ($current_directory == $_____link + "custom/") {
				if (($(this).attr("href") && $(this).attr("href").indexOf("edit_cmd.cgi?new") === 0)) {
					$(this).html('<i class="fa fa-terminal"> </i> ' + $(this).text())
				}
				if (($(this).attr("href") && $(this).attr("href").indexOf("edit_file.cgi?new") === 0)) {
					$(this).html('<i class="fa fa-edit"> </i> ' + $(this).text())
				}
				if (($(this).attr("href") && $(this).attr("href").indexOf("edit_sql.cgi?new") === 0)) {
					$(this).html('<i class="fa fa-database"> </i> ' + $(this).text())
				}
			}
			if (!$(this).attr("href")) {
				$(this).remove()
			}
		}
	});
	$.each($(".btn-tiny.ui_link_replaced"), function () {
		if ($(this).prev('[class="table table-striped table-condensed"]').length && $(this).next(':not(".ui_link_replaced")').length) {
			$(this).removeClass("btn-tiny ui_link_replaced").addClass("ui_link_re-replaced")
		}
	});
	$("a.ui_link_replaced").each(function () {
		if ($(this).prev().is("b")) {
			$(this).prev("b").addClass("btn btn-success btn-tiny").attr("style", "margin-left: 3px !important; margin-right: 3px !important; ")
		}
		if ($(this).next().is("b")) {
			$(this).next("b").addClass("btn btn-success btn-tiny").attr("style", "margin-left: 3px !important; margin-right: 3px !important; ")
		}
	});
	$("a.ui_link_replaced").each(function () {
		if ($(this).next().is("a.ui_link_replaced") && !$(this).hasClass("select_all") && !$(this).hasClass("select_invert")) {
			$(this).next("a.ui_link_replaced").not(".btn-xxs").attr("style", "margin-left: 3px !important;");
			return false
		} else {
			if ($(this).prev().is("a.ui_link_replaced") && !$(this).hasClass("select_all") && !$(this).hasClass("select_invert")) {
				$(this).prev("a.ui_link_replaced").not(".btn-xxs").attr("style", "margin-right: 3px !important;");
				return false
			}
		}
	});
	if ($current_directory == $_____link + "fetchmail/") {
		$("a.ui_link").each(function () {
			$(this).addClass("btn btn-inverse btn-tiny ui_link_replaced").css("margin-bottom", "10px").css("margin-top", "4px");
			$(this).text($(this).text().replace(/\.$/, ""));
			$(this).parent().contents().filter(function () {
				return this.nodeType == 3
			}).remove()
		})
	}
	$('select.ui_select[name="days"]').each(function () {
		$(this).parent("td").attr("style", "vertical-align: top !important")
	});
	$.each($(".panel-body > .ui_link"), function () {
		if ($current_directory == $_____link + "pam/" || $current_directory == $_____link + "syslog/" || $current_page_full == $_____link_full + "/postfix/master.cgi") {
			$(this).html('<i class="fa fa-plus-square-o text-muted">&nbsp;&nbsp;</i>' + $(this).text())
		}
	});
	$('input[type="submit"]').each(function () {
		if ($__source_dir && $__source_dir.indexOf("virtualmin-mailman") > -1) {
			return
		}
		if ($(this).val().indexOf("Start at") != -1 || $(this).val() == "Scan for servers") {
			$(this).addClass("btn-primary")
		}
		if (($(this).attr("name") && $(this).attr("name").indexOf("send") > -1)) {
			$(this).addClass("btn-info")
		}
		if ($(this).val().indexOf("Delete") != -1 || ($(this).attr("name") && $(this).attr("name").indexOf("delete") > -1)) {
			$(this).addClass("btn-danger")
		}
		if ($(this).val().indexOf("Stop") != -1 || $(this).val().indexOf("Warning") != -1 || $(this).val().indexOf("Restart") != -1 || ($(this).attr("name") && $(this).attr("name").indexOf("disable") > -1) || ($(this).attr("name") && $(this).attr("name").indexOf("draft") > -1) || ($(this).attr("name") && $(this).attr("name").indexOf("remove") > -1)) {
			$(this).addClass("btn-warning")
		}
		if ($(this).val().indexOf("Download") > -1 || $(this).val() == "Save" || $(this).val().indexOf("Create") > -1) {
			if ($(this).attr("class") && $(this).attr("class").indexOf("btn-danger") === -1 && $(this).attr("class").indexOf("btn-warning") === -1 && $(this).attr("class").indexOf("btn-info") === -1) {
				$(this).addClass("btn-success")
			}
		}
		if (($(this).attr("name") && $(this).attr("name") == "confirm") || ($(this).attr("name") && $(this).attr("name").indexOf("enable") > -1) || ($(this).attr("name") && $(this).attr("name").indexOf("save") > -1) || ($(this).attr("name") && $(this).attr("name").match("^apply")) || ($(this).attr("name") && $(this).attr("name").indexOf("ok") > -1) || ($(this).attr("name") && $(this).attr("name").indexOf("new") > -1) || ($(this).attr("name") && $(this).attr("name").indexOf("create") > -1) || ($(this).attr("name") && $(this).attr("name").indexOf("start") > -1)) {
			if ($(this).attr("class") && $(this).attr("class").indexOf("btn-danger") === -1 && $(this).attr("class").indexOf("btn-warning") === -1 && $(this).attr("class").indexOf("btn-info") === -1) {
				$(this).addClass("btn-success")
			}
		}
	});
	if ($current_directory == $_____link + "mailboxes/" || $current_page_full == $_____link_full + "/mailboxes/index.cgi" || $current_directory == $_____link + "mailbox/" || $current_page_full == $_____link_full + "/postfix/view_mailq.cgi") {
		$("body").find("form").removeAttr("onsubmit");
		$header_tables = $("body").find('input[name="from"]').parents(".tab-pane").parent("td");
		$header_tables.children("table").hide();
		$.each($header_tables.find("input, textarea, select"), function () {
			if (!$(this).hasClass("ui_select") && !$(this).attr("onclick") && $(this).attr("type") != "checkbox" && $(this).attr("type") != "submit") {
				$(this).attr("style", "width: 60%").addClass("inline-block")
			}
			if ($(this).attr("onclick")) {
				$(this).addClass("inline-block")
			}
		});
		t___wi.onbeforeunload = null;
		if ($("body").find('input.ui_hidden[name="html_edit"]').val() == 1) {
			tinyMCE.baseURL = "/unauthenticated/js/tinymce";
			tinyMCE.init({
				mode: "exact",
				elements: "body",
				auto_focus: "body",
				language: $("body").data("language"),
				menubar: false,
				height: 420,
				plugins: ["advlist autolink lists link image charmap print hr anchor pagebreak fullscreen", "searchreplace wordcount visualblocks visualchars code", "insertdatetime media nonbreaking save table contextmenu directionality", "template paste textcolor colorpicker textpattern"],
				toolbar1: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | fullscreen print media | forecolor backcolor | visualblocks charmap code"
			})
		}
		$("body").find('input[name="from"]').parents(".tab-pane").prev("table").remove();
		$("body").find('input[name="from"]').parents(".tab-pane ").parent("td").find("div, table").each(function (d, c) {
			$(this).find(".col_label").css("width", "20%");
			$(this).find('input[name="subject"]').parent("td").prev("td").find("b").attr("style", "font-size: 13px !important");
			$(this).find('input[name="subject"]').parents("table").show();
			$(this).find('input[name="subject"]').parent("td").find(".submitter").remove()
		});
		$editor_mode_link_container = $("body").find('textarea[id="body"]').parents("table").find("thead > tr > th:last-child");
		$editor_mode_link = $editor_mode_link_container.find("a").addClass("editor_mode_link");
		$editor_mode_link_container.parent("tr").find("th:first-child").append($editor_mode_link);
		$editor_mode_link_container.remove();
		$editor_mode_link_button = $("body").find('textarea[id="body"]').parents("table").find(".editor_mode_link");
		$editor_mode_link_button_state = $editor_mode_link_button.attr("href") ? $editor_mode_link_button.attr("href").indexOf("html=0") : false;
		$editor_mode_link_button.attr("title", $editor_mode_link_button.text()).addClass("editor_mode_link_button pull-right btn btn-sm " + ($editor_mode_link_button_state == -1 ? "btn-success" : "btn-primary")).html('<i class="fa ' + ($editor_mode_link_button_state == -1 ? "fa-font" : "fa-text-width") + '"> </i>');
		$("body").find('textarea[id="body"]').parents("table").find("thead > tr > th").find("b").css("padding-left", "45px");
		$(".editor_mode_link_button").tooltip();
		$fileinput_container = $("body").find('a[onclick="return add_ss_attachment()"]');
		$fileinput_container.parent("td").contents().filter(function () {
			return this.nodeType == 3
		}).remove();
		$fileinput_container.remove();
		$fileinput_add_another_attachment = $("body").find('a[onclick="return add_attachment()"]');
		$fileinput_add_another_attachment.addClass("btn btn-default");
		$fileinput_add_another_attachment.text($fileinput_add_another_attachment.text().replace(/\.$/, ""));
		if ($current_page_full.indexOf("view_mail.cgi") > -1 || $current_page_full.indexOf("view_mailq.cgi") > -1) {
			$table_title_header_container = $(".ui_form").find("div.table-responsive").first().find(".table-title");
			$table_title_links_container = $table_title_header_container.next();
			$table_title_links_container.contents().filter(function () {
				return this.nodeType == 3
			}).remove();
			$table_title_links_container.find("a").addClass("table_title_links pull-right btn btn-info btn-tiny");
			$table_title_links = $table_title_links_container.html();
			$table_title_header_container.append($table_title_links);
			$table_title_links_container.remove();
			$table_title_header_container_text_padding = 35;
			$(".table-title > a.table_title_links").each(function () {
				$table_title_header_container_text_padding = ($current_page_full == $_____link_full + "/postfix/view_mailq.cgi" ? 120 : 235)
			});
			$(".table_title_links_container a").each(function () {
				$table_title_header_container_text_padding = $table_title_header_container_text_padding + $(this).width()
			});
			$table_title_header_container.find("b").css("padding-left", $table_title_header_container_text_padding);
			$table_title_second_container = $(".ui_form").find("div.table-responsive").first().next("div.table-responsive").find("table:first-child");
			$table_title_header_container = $(".ui_form").find("div.table-responsive").first().next("div.table-responsive").find("th:first-child");
			$table_title_links_container = $(".ui_form").find("div.table-responsive").first().next("div.table-responsive").find("th:last-child");
			if ($(".ui_form").find("div.table-responsive").first().next("div.table-responsive").find("th").length == 2) {
				$table_title_links_container.remove()
			} else {}
			$table_title_links_container.find("a").addClass("table_title_links pull-right btn btn-tiny");
			if ($table_title_links_container.find("a").attr("href") && $table_title_links_container.find("a").attr("href").indexOf("body=1") > -1) {
				$table_title_links_container.find("a").addClass("btn-info")
			} else {
				$table_title_links_container.find("a").addClass("btn-warning")
			}
			$table_title_links = $table_title_links_container.html();
			$table_title_header_container.append($table_title_links);
			$table_title_header_container_text_padding = 10;
			$table_title_header_container.find("a").each(function () {
				$table_title_header_container_text_padding = $table_title_header_container_text_padding + $(this).width()
			});
			setTimeout(function () {
				if ($(".ui_form").find("div.table-responsive").first().find("table:first-child").outerWidth() != $(".ui_form").find("div.table-responsive").first().next("div.table-responsive").find("table:first-child").outerWidth()) {
					var b = parseInt($(".ui_form").find("div.table-responsive").first().find("table:first-child").width() / 2);
					$table_title_second_container.find(".table-title").addClass("left").find("b").css("padding-left", b - 175);
					$table_title_second_container.find(".pull-right").removeClass("pull-right").addClass("pull-left")
				}
				$.each($table_title_second_container.find("table"), function () {
					$(this).removeClass().addClass("clear-formatting");
					$.each($(this).find("td.col_value"), function () {
						$(this).css("background-color", "white")
					})
				})
			}, 30);
			$table_title_header_container.find("b").css("padding-left", $table_title_header_container_text_padding);
			if ($table_title_header_container.find("b") && $table_title_header_container.find("b").length > 1) {
				if ($table_title_header_container.find("b:first-child").text() == $table_title_header_container.find("b:last-child").text()) {
					$table_title_header_container.find("b:last-child").remove()
				}
			}
		}
		$("td > a").on("click", function () {
			if ($(this).attr("onclick") == "return add_attachment()") {}
			$("input[type=file]").each(function () {
				if (!$(this).parent("a").hasClass("file-input-wrapper")) {
					$(this).bootstrapFileInput()
				}
			})
		});
		if (settings_mailbox_slash_delimiter) {
			$("select.ui_select[name] > option").each(function (d, c) {
				$(c).text($(c).text().replace(/\./g, "/").replace(/\/\//g, "/"))
			})
		}
		$.each($('table td[align="right"], table td[align="left"]'), function (d, c) {
			$(this).attr("style", "border: 0 !important;");
			$(this).parents("tbody").attr("style", "border: 0 !important;");
			$(this).parents("table.table-hardcoded.table.table-striped.table-condensed.table-subtable").removeClass("table-hardcoded table table-striped table-rounded table-condensed table-subtable")
		});
		$.each($("div.table-responsive > table tbody tr td > table.table-hardcoded"), function (d, c) {
			$(this).find("tr > td.col_label > b").removeAttr("style");
			$(this).removeClass("table table-rounded table-condensed")
		});
		$.each($("div.table-responsive > table tbody tr td > div.tab-pane"), function (d, c) {
			$(this).find("table").removeClass("table");
			$(this).parents("div.table-responsive").find("table").removeClass("table-striped table-subtable")
		});
		$.each($('div.table-responsive > table tbody tr td > div.tab-pane .col_value > input[type="button"][onclick^="ifield"]'), function (d, c) {
			$(this).attr("style", "margin-left: 0; margin-bottom: 3px !important")
		})
	}
	$.each($(".barchart"), function () {
		$(this).find("img").attr("height", 4)
	});
	$('#extended_sysinfo div[aria-labelledby^="updates-"] div.panel-body div.table-responsive table.table.table-striped.table-condensed').next("table.ui_form_end_buttons").css("margin-top", "10px");
	$('#extended_sysinfo div[aria-labelledby^="updates-"] div.panel-body div.table-responsive table.table.table-striped.table-condensed').next("table.ui_form_end_buttons").css("margin-top", "10px").prev("table.table-condensed").prev("table.table.table-striped.table-rounded").addClass("invisible");
	$("a").each(function () {
		if (!$(this).attr("href")) {
			$(this).addClass("no_effect")
		}
	});
	if ($current_page_full == $_____link_full + "/virtual-server/domain_form.cgi" || $current_page_full == $_____link_full + "/server-manager/list_images.cgi") {
		$(".panel-body > a").each(function () {
			$(this).addClass("btn btn-inverse btn-tiny ui_link_replaced").removeClass("ui_link");
			$(this).text($(this).text().replace(/\.$/, ""))
		});
		$.each($('.panel-body:contains("|")'), function () {
			$(this).contents().filter(function () {
				return this.nodeType == 3
			}).wrap('<span class="btn btn-success btn-tiny btn-automated"></span>')
		});
		$.each($(".btn-automated"), function () {
			if ($(this).text().length < 4) {
				$(this).remove()
			} else {
				$(this).text($(this).text().replace("|", "").replace("|", "").replace(/(?:\r\n|\r|\n)/g, ""))
			}
		});
		$(".panel-body > b").css("margin-right", "7px");
		if ($current_page_full == $_____link_full + "/virtual-server/domain_form.cgi") {
			$.each($(".btn-automated, .ui_link_replaced"), function (c, d) {
				if (c == 0) {
					$(this).html('<i class="fa fa-plus-square"> </i> ' + $(this).text())
				}
				if (c == 1) {
					$(this).html('<i class="fa fa-level-down"> </i> ' + $(this).text())
				}
				if (c == 2) {
					$(this).html('<i class="fa fa-reply fa-flip-horizontal"> </i> ' + $(this).text())
				}
				if (c == 3) {
					$(this).html('<i class="fa fa-reply-all fa-flip-horizontal"> </i> ' + $(this).text())
				}
			})
		}
	}
	if ($current_page_full == $_____link_full + "/server-manager/edit_serv.cgi") {
		setTimeout(function () {
			$('.opener_container .table-hardcoded .col_value a[href^="edit_serv.cgi"]').each(function () {
				$(this).addClass("btn btn-inverse btn-xxs ui_link_replaced margined-right-2").removeClass("ui_link").attr("style", "margin-top: 0 !important");
				$(this).text($(this).text().replace(/\.$/, ""))
			});
			$.each($('.opener_container .table-hardcoded .col_value:contains("|")'), function () {
				if ($(this).find('a[href^="edit_serv.cgi"]').length) {
					$(this).contents().filter(function () {
						return this.nodeType == 3
					}).wrap('<a class="btn btn-success btn-xxs ui_link_replaced btn-automated margined-right-2" style="margin-top: 0 !important"></a>')
				}
				$.each($(".btn-automated"), function () {
					if ($(this).text().length < 4) {
						$(this).remove()
					} else {
						$(this).text($(this).text().replace("|", "").replace("|", "").replace(/(?:\r\n|\r|\n)/g, ""))
					}
				})
			})
		}, 20)
	}
	if (settings_sysinfo_easypie_charts && $current_page_full == $_____link_full + "/sysinfo.cgi") {
		t__wi_p.$('iframe[name="page"]').contents().find("body").find(".page.__sytem_information").find(".piechart").easyPieChart({
			barColor: function (b) {
				return (b < 50 ? "#5cb85c" : b < 85 ? "#f0ad4e" : "#cb3935")
			},
			size: 160,
			scaleLength: settings_sysinfo_easypie_charts_scale,
			trackWidth: settings_sysinfo_easypie_charts_width,
			lineWidth: (settings_sysinfo_easypie_charts_width / 1.2),
			lineCap: "square",
			onStep: function (g, d, f) {
				$(this.el).find(".percent").text(Math.round(f))
			}
		})
	}
	$.each($("input:not(.ui_upload)"), function () {
		if ($(this).css("height") == "28px") {
			$(this).prev("input").addClass("heighter-28")
		}
	});
	$.each($("select"), function () {
		if ($(this).next("input").css("height") == "34px") {
			$(this).addClass("heighter-34")
		}
	});
	$.each($(".ui_buttons_row input, .ui_buttons_row select"), function () {
		$(this).addClass("heighter-34")
	});
	$.each($(".ui_form > input, .ui_form > select"), function () {
		$(this).addClass("heighter-34")
	});
	$.each($("tr > .ui_form"), function () {
		if ($(this).next().next("td").find("input.submitter")) {
			$(this).next().next("td").find("input.submitter").addClass("heighter-34")
		}
	});
	$.each($("input.heighter-34").next(".file_chooser_button"), function () {
		$(this).addClass("heighter-34");
		$(this).find(".fa.fa-files-o").css("margin-top", "0")
	});
	setTimeout(function () {
		$.each($("select"), function () {
			if ($(this).next("input").outerHeight() == 34 || $(this).prev("input").outerHeight() == 34) {
				$(this).addClass("heighter-34").removeClass("heighter-28")
			} else {
				if ($(this).next("input").outerHeight() == 28 || $(this).prev("input").outerHeight() == 28) {
					$(this).addClass("heighter-28").removeClass("heighter-34")
				}
			}
		})
	}, 1);
	if (t__wi_p.$('iframe[name="page"]').contents().find('iframe:not([name="page"])').length) {
		var $this = t__wi_p.$('iframe[name="page"]').contents().find('iframe:not([name="page"])');
		$this.on("load", function () {
			$this.contents().find("#term").css("width", "99.3%").css("height", "576px").css("margin-top", "4px")
		});
		$(this).next("br").remove().next('input[type="button"]').remove();
		$(this).next('input[type="button"]').remove();
		$(this).next("p").remove()
	}
	$(".row.icons-row.vertical-align").on("click", ".icons-container, .small-icons-container, .xsmall-icons-container", function () {
		t___wi.location.href = $(this).find("a").attr("href")
	});
	$.each($(".file_chooser_button"), function () {
		if ($(this).prev("input").attr("style") && $(this).prev("input").attr("style").indexOf("max-width: 100%") > -1) {
			$(this).prev("input").css("max-width", "93%")
		}
	});
	if ($source_path == $_____link + "sysinfo.cgi" && settings_sysinfo_link_mini == true) {
		t__wi_p.$(".navigation > li:not('.has-sub')").removeClass("sub_active").find("span.current-large").remove()
	}
	$.each($('input[value="..."], input[value=" ..."], input[value="  ..."], input[value="... "], input[value="...  "], input[value=" ... "], input[value="  ...  "]'), function () {
		$(this).after('<i class="fa fa-fw fa-files-o file_chooser_button_attached" style="font-size:11px; pointer-events: none"></i>');
		$(this).attr("value", "")
	});
	$.each($(".file_chooser_button"), function () {
		$(this).prev("input").css("margin-top", "2px").css("margin-bottom", "2px")
	});
	$.each($(".file_chooser_button_attached"), function () {
		$(this).prev('input[type="button"]').prev("input").css("margin-top", "2px").css("margin-bottom", "2px");
		if (!$(this).parents(".ui_buttons_label").length && !$(this).parents(".table-subtable").length) {
			$(this).css("margin-top", "11px")
		}
	});
	$.each($(".ui_form > .file_chooser_button_attached"), function () {
		if (($(this).prev(".heighter-34") && $(this).prev(".heighter-34").length) || ($(this).next(".heighter-34") && $(this).next(".heighter-34").length)) {
			$(this).css("margin-top", "16px");
			$(this).prev("input[onclick]").css("width", "40px")
		}
	});
	$.each($('.ui_form[action="init_cache.cgi"] > .file_chooser_button_attached'), function () {
		if (($(this).prev(".heighter-34") && $(this).prev(".heighter-34").length) || ($(this).next(".heighter-34") && $(this).next(".heighter-34").length)) {
			$(this).css("margin-top", "14px")
		}
	});
	$.each($(".col_value > .file_chooser_button_attached"), function () {
		$(this).prev("input[onclick]").css("width", "40px").css("margin-left", "0")
	});
	$("a.ui_link, .btn").each(function () {
		if ($(this).text().substr(-1) == ".") {
			$(this).text($(this).text().substr(0, $(this).text().length - 1))
		}
		if ($(this).text().substr(-1) == ".") {
			$(this).text($(this).text().substr(0, $(this).text().length - 1))
		}
		if ($(this).text().substr(-1) == ".") {
			$(this).text($(this).text().substr(0, $(this).text().length - 1))
		}
	});
	if ($current_page_full == $_____link_full + "/virtualmin-mailman/" || $current_page_full == $_____link_full + "/virtualmin-mailman/index.cgi") {
		$("input[name^=reset_]").addClass("heighter-28")
	}
	if ($current_page_full == $_____link_full + "/software/edit_pack.cgi" || $current_page_full == $_____link_full + "/apache/show.cgi" || $current_page_full == $_____link_full + "/proc/index_search.cgi") {
		$.each($(".btn:not(.file_chooser_button)"), function () {
			$(this).removeClass("heighter-28").addClass("heighter-34")
		})
	}
	if ($current_page_full == $_____link_full + "/virtualmin-git/" || $current_page_full == $_____link_full + "/virtualmin-git/index.cgi") {
		$.each($(".btn.btn-default.submitter.ui_submit"), function () {
			$(this).removeClass("heighter-28").addClass("heighter-28")
		})
	}
	if ($current_page_full == $_____link_full + "/apache/edit_global.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_newlinks.cgi" || $current_page_full == $_____link_full + "/virtualmin-awstats/" || $current_page_full == $_____link_full + "/postfix/master.cgi") {
		$.each($(".ui_link_replaced"), function () {
			$(this).not(".btn-xxs").removeClass("btn-tiny").addClass("heighter-34")
		})
	}
	if ($current_page_full == $_____link_full + "/virtualmin-init/" || $current_page_full == $_____link_full + "/virtualmin-dav/list_shares.cgi" || $current_page_full == $_____link_full + "/squid/edit_acl.cgi" || $current_page_full == $_____link_full + "/virtualmin-nginx/" || $current_page_full == $_____link_full + "/fdisk/edit_disk.cgi" || $current_page_full == $_____link_full + "/server-manager/edit_newlinks.cgi" || $current_directory == $_____link + "backup-config/") {
		$.each($(".ui_link_re-replaced"), function () {
			$(this).addClass("btn-tiny").removeClass("heighter-34")
		})
	}
	if ($current_page_full == $_____link_full + "/pam/") {
		$(".panel-body > a.ui_link").addClass("btn-tiny")
	}
	if ($current_page_full == $_____link_full + "/syslog/" || $current_page_full == $_____link_full + "/syslog/index.cgi") {
		$.each($(".btn"), function () {
			$(this).removeClass("btn-tiny")
		})
	}
	if ($current_page_full == $_____link_full + "/status/edit_mon.cgi") {
		$('td.col_value > table[cellspacing="1"] tbody').attr("style", "border: 0 !important;");
		$.each($("table.sub_table_container td > font"), function () {
			$(this).parents("tbody").attr("style", "border: 0 !important; ");
			$(this).contents().unwrap().wrap('<i class="fa fa-info-circle">&nbsp;</i>')
		})
	}
	if ($current_page_full == $_____link_full + "/shell/" || $current_page_full == $_____link_full + "/shell/index.cgi" || $current_page_full == $_____link_full + "/server-manager/shell.cgi") {
		$.each($(".btn:not(.btn-link), select, input"), function () {
			$(this).removeClass("heighter-28").addClass("heighter-34");
			if ($(this).is('input[type="button"]')) {
				$($(this).addClass("submitter"))
			}
			if (t__wi_p.$(".form-control.sidebar-search").val().trim().startsWith("!")) {
				t__wi_p.$(".form-control.sidebar-search").val("")
			}
			$(".ui_form").find("input.btn.btn-default:first").addClass("btn-success")
		});
		$("input#cmd").focus()
	}
	$.each($(".acheckbox + label, .aradio + label"), function (d, c) {
		if ($(this).find("br:last-child").length) {
			$(this).prev(".acheckbox, .aradio").attr("style", "margin-left: 0 !important;")
		}
	});
	$.each($("input"), function () {
		if ($(this).css("height") == "28px" && $(this).next("input").css("height") != "28px") {
			if ($(this).is(':not([type="hidden"])')) {
				$(this).next("input").addClass("heighter-28")
			}
		}
	});
	$.each($("select"), function () {
		if ($(this).css("height") == "34px" && $(this).next("select").css("height") != "34px") {
			$(this).next("select").addClass("heighter-34")
		}
	});
	if ($current_page_full == $_____link_full + "/cluster-passwd/edit_passwd.cgi") {
		$.each($("input + button"), function (d, c) {
			if ($(this).css("height") == "28px") {
				$(this).addClass("heighter-28").css("line-height", "12px").css("margin-top", "2px")
			}
		})
	}
	if (t___wi.location.pathname == "/virtual-server/history.cgi" || t___wi.location.pathname == "/server-manager/bwgraph.cgi" || t___wi.location.pathname == "/server-manager/history.cgi" || t___wi.location.pathname == "/server-manager/one_history.cgi") {
		$.each($("table tr td .acheckbox + a"), function () {
			$(this).css("margin-left", "4px")
		});
		$("body").find("table.ui_form_end_buttons .btn.btn-default.submitter.ui_submit").addClass("btn-success");
		$(".panel-body > table tr td b").each(function (d, c) {
			$(this).addClass("btn btn-success btn-tiny ui_link_replaced")
		});
		$(".panel-body > table a").each(function (d, c) {
			$(this).addClass("btn btn-inverse btn-tiny ui_link_replaced").removeClass("ui_link");
			$(this).text($(this).text().replace(/\.$/, ""));
			if ($(this).text() && $(this).text().indexOf("<<") > -1) {
				$(this).text($(this).text().replace(/\<\</, ""));
				$(this).html('<i style="vertical-align: baseline !important;" class="fa fa-angle-double-left"> </i> ' + $(this).text())
			}
			if ($(this).text() && $(this).text().indexOf(">>") > -1) {
				$(this).text($(this).text().replace(/\>\>/, ""));
				$(this).html($(this).text() + ' <i style="vertical-align: baseline !important;" class="fa fa-angle-double-right"> </i>')
			}
			$(this).parent().contents().filter(function () {
				return this.nodeType == 3
			}).remove();
			if (($(this).attr("href").indexOf("edit_cmd.cgi?new") === 0)) {
				$(this).html('<i class="fa fa-terminal"> </i> ' + $(this).text())
			}
			if (($(this).attr("href").indexOf("edit_file.cgi?new") === 0)) {
				$(this).html('<i class="fa fa-edit"> </i> ' + $(this).text())
			}
			if (($(this).attr("href").indexOf("edit_sql.cgi?new") === 0)) {
				$(this).html('<i class="fa fa-database"> </i> ' + $(this).text())
			}
			$(this).parents("table").css("margin-bottom", "3px")
		});
		if ($("#history").next("table.ui_grid_table").next("a").length) {
			$("#history").next("table").next("a").addClass("btn btn-info btn-tiny ui_link_replaced").attr("style", "margin-top: 4px !important").attr("target", "_blank");
			$("#history").next("table").next("a").text($("#history").next("table").next("a").text().replace(/\.\.$/, ""));
			$("#history").next("table").next("a").html('<i style="vertical-align: baseline !important;" class="fa fa-external-link"></i>&nbsp;' + $("#history").next("table").next("a").text())
		} else {
			$("#history").next("a").addClass("btn btn-info btn-tiny ui_link_replaced").attr("style", "margin-top: 4px !important").attr("target", "_blank");
			$("#history").next("a").text($("#history").next("a").text().replace(/\.\.$/, ""));
			$("#history").next("a").html('<i style="vertical-align: baseline !important;" class="fa fa-external-link"></i>&nbsp;' + $("#history").next("a").text())
		}
		$(".panel-body > hr + b").attr("style", "font-size: 16px; font-weight: normal;");
		$(".panel-body > hr + b").text($(".panel-body > hr + b").text().replace(/\:$/, ""))
	}

	function tt__m__res() {
		var b;
		$(window).on("resize", function () {
			clearTimeout(b);
			b = setTimeout(function () {
				container_fluid_size()
			}, 1000)
		})
	}
	tt__m__res();
	$('input[type="file"]').bootstrapFileInput();
	setTimeout(function () {
		$.each($(".file-input-wrapper > span"), function () {
			$(this).html('<i class="fa fa-fw fa-paperclip">')
		})
	}, 1);
	setTimeout(function () {
		if (typeof onLoad === "function" && typeof onResize === "function") {
			onLoad();
			$(window).resize(function (b) {
				onResize()
			})
		}
	}, 600);
	$.each($('tr > td[valign="top"][width="50%"]'), function () {
		$(this).attr("style", "vertical-align: top !important; " + $(this).attr("style"))
	});
	$("body table").each(function (d, f) {
		var g = $(this);
		if (!$(f).hasClass("table") && !$(f).hasClass("header") && !$(f).hasClass("ui_form_end_buttons") && !$(f).hasClass("ui_table")) {
			$(f).addClass("table-hardcoded");
			if ($product_name == "usermin") {
				$(f).addClass("table-subtable");
				if ($(f).find("tr.thead").length || $(f).hasClass("sub_table_container table-hardcoded table-subtable")) {
					$(f).find("tr.thead").attr("style", "border: 1px solid #efefef");
					$(f).attr("style", "border: 1px solid #efefef")
				} else {
					if ($(f).attr("style") && $current_page_full.indexOf("view_mail.cgi") > -1) {} else {
						$(f).attr("style", "margin-top: 10px;")
					}
				}
			}
		}
	});

	function __init_dt_(a) {
		$.fn.dataTableExt.sErrMode = "throw";
		a.dataTable({
			order: [],
			aaSorting: [],
			bDestroy: true,
			bPaginate: false,
			bInfo: false,
			destroy: true,
			oLanguage: {
				sEmptyTable: lang("theme_xhred_datatable_semptytable"),
				sInfo: lang("theme_xhred_datatable_sinfo"),
				sInfoEmpty: lang("theme_xhred_datatable_sinfoempty"),
				sLengthMenu: lang("theme_xhred_datatable_slengthmenu"),
				sLoadingRecords: lang("theme_xhred_datatable_sloadingrecords"),
				sProcessing: lang("theme_xhred_datatable_sprocessing"),
				sSearch: " ",
				sZeroRecords: lang("theme_xhred_datatable_szerorecords")
			}
		})
	}
	if ((($current_page_full.indexOf(".cgi") === -1 || $current_page_full.indexOf("link.cgi") !== -1) || $current_page_full == $_____link_full + "/proc/open_files.cgi" || $current_page_full == $_____link_full + "/webmin/edit_webmincron.cgi" || $current_page_full == $_____link_full + "/postfix/mailq.cgi" || $current_page_full == $_____link_full + "/webmin_search.cgi" || $current_page_full == $_____link_full + "/useradmin/index.cgi" || $current_page_full == $_____link_full + "/quota/list_users.cgi" || $current_page_full == $_____link_full + "/quota/list_groups.cgi" || $current_page_full == $_____link_full + "/init/index.cgi") && ($current_directory == $_____link + "webmin/" || $current_directory == $_____link + "proc/" || $source_path == $_____link + "webmin_search.cgi" || $current_directory == $_____link + "postfix/" || $current_directory == $_____link + "virtual-server/" || $current_directory == $_____link + "init/" || $current_directory == $_____link + "mount/" || $current_directory == $_____link + "custom/" || $current_directory == $_____link + "quota/" || $current_directory == $_____link + "fsdump/" || $current_directory == $_____link + "inittab/" || $current_directory == $_____link + "logrotate/" || $current_directory == $_____link + "mailcap/" || $current_directory == $_____link + "cron/" || $current_directory == $_____link + "software/" || $current_directory == $_____link + "syslog/" || $current_directory == $_____link + "useradmin/" || $current_directory == $_____link + "apache/" || $current_directory == $_____link + "webalizer/" || $current_directory == $_____link + "cpan/" || $current_directory == $_____link + "htaccess-htpasswd/" || $current_directory == $_____link + "fdisk/") || $current_page_full == $_____link_full + "/man/search.cgi" || $current_page_full == $_____link_full + "/proc/index_tree.cgi" || $current_page_full == $_____link_full + "/proc/index_user.cgi" || $current_page_full == $_____link_full + "/proc/index_size.cgi" || $current_page_full == $_____link_full + "/proc/index_cpu.cgi" || $current_page_full == $_____link_full + "/proc/index_search.cgi" || $current_page_full == $_____link_full + "/software/search.cgi" || $current_page_full == $_____link_full + "/virtual-server/index.cgi" || $current_page_full == $_____link_full + "/virtual-server/list_users.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_newplan.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_newfeatures.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_newtmpl.cgi" || $current_page_full == $_____link_full + "/virtual-server/backuplog.cgi" || $current_page_full == $_____link_full + "/package-updates/index.cgi" || $current_page_full == $_____link_full + "/virtual-server/usage.cgi" || $current_page_full == $_____link_full + "/virtual-server/search.cgi" || (($current_page_full == $_____link_full + "/fetchmail/" || $current_page_full == $_____link_full + "/filter/") && product_name() == "Usermin")) {
		$("table").each(function () {
			if ($(this).find("thead") && $(this).find("thead").length && $(this).find("thead tr th") && $(this).find("thead tr th").length > 2) {
				if ($(this).find("thead") && $(this).find("thead").length > 1) {
					var d = $(this).find("thead:first-child");
					d.remove();
					if (product_name() == "Webmin" && ($current_page_full == $_____link_full + "/quota/list_users.cgi" || $current_page_full == $_____link_full + "/quota/list_groups.cgi")) {
						$(this).before(d);
						$(this).prev("thead").replaceTagName("table")
					}
				}
				__init_dt_($(this));
				$(this).find("th").each(function () {
					if (!$(this).text()) {
						$(this).css("opacity", "0").css("cursor", "default")
					}
				});
				var c = -Infinity;
				$(this).find("tr").each(function (a, b) {
					c = Math.max(c, parseFloat(a))
				});
				if (c < 10) {
					$(this).parents(".dataTables_wrapper").find(".dataTables_filter").remove()
				}
				$(".dataTables_filter input").attr("placeholder", "Filter")
			}
		})
	}
	if ($current_page_full == $_____link_full + "/virtual-server/list_scripts.cgi") {
		__init_dt_($("#att_existing > form > table.table.table-striped.table-condensed"));
		$("#att_existing > form > div table.table.table-striped.table-condensed").prev(".dataTables_filter").attr("style", "margin-top: -27px !important;")
	}
	if ($current_page_full == $_____link_full + "/virtual-server/edit_newscripts.cgi") {
		__init_dt_($("#att_summary > table.table.table-striped.table-condensed"));
		$("#att_summary > div table.table.table-striped.table-condensed").prev(".dataTables_filter").attr("style", "margin-top: -20px !important;")
	}
	if ($current_page_full == $_____link_full + "/server-manager/index.cgi" || $current_page_full == $_____link_full + "/virtualmin-htpasswd/index.cgi") {
		__init_dt_($("body > div > div > div.panel-body > form > table.table.table-striped.table-condensed"));
		$("#DataTables_Table_0").prev(".dataTables_filter").attr("style", "margin-top: -24px !important;")
	}
	if ($current_page_full == $_____link_full + "/servers" || $current_page_full == $_____link_full + "/servers/index.cgi") {
		__init_dt_($("table.table-striped.table-condensed"));
		$("table.table-striped.table-condensed").parents(".dataTables_wrapper").css("margin-top", "-15px")
	}
	$.each($('table.table.table-striped.table-condensed.dataTable.no-footer > thead > tr[role="row"]:first-child'), function (d, c) {
		$(this).attr("style", "border-top: 4px solid #f2f2f2 !important")
	});
	if (typeof refresher != "undefined") {
		t___wi.clearInterval(refresher)
	}
	if (typeof $__was_runner != "undefined") {
		t___wi.clearInterval($__was_runner)
	}
	$("body").unbind("mousewheel");
	$("html").unbind("mousewheel");
	delete refresh;
	delete refresher;
	delete $__was_runner;
	$__was_runner_is_done = 1;
	$.each($('button[onclick^="t___wi.ifield"].btn.btn-default.ui_button'), function () {
		$(this).addClass("file_chooser_button_emulate")
	});
	$.each($(".file_chooser_button_emulate"), function () {
		if (!$(this).find(".fa-files-o").length) {
			$(this).append('<i class="fa fa-fw fa-files-o" style="font-size:11px; pointer-events: none"></i>')
		}
		if ($(this).prev("input").css("height") == "28px") {
			$(this).addClass("heighter-28")
		}
	});
	$.each($("label > img"), function (d, c) {
		$(this).attr("style", "vertical-align: baseline !important")
	});
	$.each($('select[multiple][name="weekdays"]'), function () {
		$(this).parents('td[valign="top"], td.td_tag').attr("style", "vertical-align: top !important");
		$(this).parents('table[width="100%"]').parents(".ui_radio_table.table-hardcoded").css("width", "100%")
	});
	$("body").on("click", ".csf-submit", function (d) {
		d.preventDefault();
		var c = $(this).data("id");
		$("#" + c).submit()
	});
	$.each($("label").find("br"), function () {
		$(this).parent("label").prev(".aradio, .acheckbox").attr("style", "margin-left: 0 !important;");
		$(this).parent("label").next(".aradio, .acheckbox").attr("style", "margin-left: 0 !important;")
	});
	$("body").on("contextmenu", 'label, .acheckbox, .aradio, input[type="radio"], input[type="checkbox"]', function (b) {
		b.preventDefault();
		if (!$(this).find("a").length && !$(this).parents("tr.ui_checked_columns").length) {
			$(this).trigger("click")
		}
	});
	$.each($(".table-responsive + .table-responsive + .table-hardcoded td"), function () {
		if ($(this).find(".heighter-34").length) {
			$.each($(".table-responsive + .table-responsive + .table-hardcoded td"), function () {
				$(this).find(".btn").addClass("heighter-34")
			})
		}
	});
	if ($current_page_full == $_____link_full + "/cpan/edit_mod.cgi") {
		$('form[action="download.cgi"]').next().next().next().find(".submitter.ui_submit").addClass("heighter-34")
	}
	if ($current_page_full == $_____link_full + "/cpan/" || $current_page_full == $_____link_full + "/cpan/index.cgi") {
		$('input[name="cpan"]').next("button").append('<i class="fa fa-fw fa-files-o" style="font-size:11px; margin-top: -6px; pointer-events: none"></i>').attr("style", "width: 40px; height: 28px; vertical-align:middle !important; margin-top:2px; margin-bottom:2px;")
	}
	if ($("form").find(".icons-row:not(.inline-row)").length) {
		$("form").find(".icons-row").addClass("_processed_");
		$("form").find(".icons-row").css("border-top", "1px solid #efefef").css("border-bottom", "1px solid #efefef");
		$("form").find(".icons-row").find(".icons-container").addClass("icons-container-stretched");
		$("form").find(".icons-row").find(".xsmall-icons-container").addClass("xsmall-icons-container-stretched")
	}

	function __m_ico_row_tb() {
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").css({
			"padding-top": "8px",
			"padding-bottom": "8px"
		});
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").css("border-top", "1px solid #efefef").css("border-bottom", "1px solid #efefef");
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").find(".xsmall-icons-container").addClass("xsmall-icons-container-stretched")
	}

	function __m_ico_row_t() {
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").css({
			"padding-top": "8px"
		});
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").css("border-top", "1px solid #efefef");
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").find(".xsmall-icons-container").addClass("xsmall-icons-container-stretched")
	}

	function __m_ico_row_b() {
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").css({
			"padding-bottom": "6px"
		});
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").css("border-bottom", "1px solid #efefef");
		$("body").find(".icons-row:not(._processed_):not(.inline-row)").find(".xsmall-icons-container").addClass("xsmall-icons-container-stretched")
	}
	if ($current_page_full == $_____link_full + "/lvm/" || $current_page_full == $_____link_full + "/virtualmin-support/" || $current_page_full == $_____link_full + "/proftpd/virt_index.cgi" || $current_page_full == $_____link_full + "/dhcpd/" || $current_page_full == $_____link_full + "/dhcpd/index.cgi" || $current_page_full == $_____link_full + "/cluster-usermin/" || $current_page_full == $_____link_full + "/cluster-usermin/index.cgi" || $current_page_full == $_____link_full + "/cluster-useradmin/" || $current_page_full == $_____link_full + "/cluster-useradmin/index.cgi" || $current_page_full == $_____link_full + "/cluster-webmin/" || $current_page_full == $_____link_full + "/cluster-webmin/index.cgi") {
		__m_ico_row_tb()
	}
	if ($current_page_full == $_____link_full + "/proftpd/" || $current_page_full == $_____link_full + "/proftpd/index.cgi" || $current_page_full == $_____link_full + "/bacula-backup/" || $current_page_full == $_____link_full + "/bacula-backup/index.cgi") {
		__m_ico_row_t()
	}
	if ($current_page_full == $_____link_full + "//") {
		__m_ico_row_b()
	}
	$("body").on("contextmenu", "div.icons-container, div.small-icons-container, div.xsmall-icons-container", function (b) {
		b.preventDefault();
		if ($(this).find("input").is(":checked")) {
			$(this).find("input").prop("checked", false);
			$(this).removeClass("highlighted")
		} else {
			if ($(this).find("input").length) {
				$(this).find("input").prop("checked", true);
				$(this).addClass("highlighted")
			}
		}
	});
	if ($("body").find(".icons-row > div.icons-container").length || $("body").find(".icons-row > div.small-icons-container").length || $("body").find(".icons-row > div.xsmall-icons-container").length) {
		$("body").on("click", ".select_all", function () {
			if ($(this).parents("form").find('.icons-row div[class*="icons-container"]').length) {
				$.each($(".icons-row .hidden-forged-6"), function () {
					$(this).parents('div[class*="icons-container"]').addClass("highlighted")
				})
			}
		}).on("click", ".select_invert", function () {
			$.each($(".icons-row .hidden-forged-6"), function () {
				if ($(this).find("input").is(":checked")) {
					$(this).parents('div[class*="icons-container"]').addClass("highlighted")
				} else {
					$(this).parents('div[class*="icons-container"]').removeClass("highlighted")
				}
			})
		});
		$.each($(".icons-row .hidden-forged-6"), function () {
			if ($(this).find("input").is(":checked")) {
				$(this).parents('div[class*="icons-container"]').addClass("highlighted")
			}
		});
		$.each($(".hidden-forged-7 > a"), function () {
			$(this).removeClass();
			if ($(this).parents(".hidden-forged-7").hasClass("hidden-forged-7-small")) {
				$(this).html('<i class="fa fa-pencil-square text-dark text-dark-hoverd"> </i>')
			} else {
				if ($(this).parents(".hidden-forged-7").hasClass("hidden-forged-7-xsmall")) {
					$(this).html('<i class="fa fa-pencil-square text-dark text-dark-hoverd"> </i>')
				} else {
					$(this).html('<i class="fa fa-lg fa-pencil-square text-dark text-dark-hoverd"> </i>')
				}
			}
		});
		$("body").on("mouseover", '.icons-row div[class*="icons-container"]', function (b) {
			$(this).find(".hidden-forged-7").removeClass("hidden-forged")
		}).on("mouseout", function (b) {
			$(this).find(".hidden-forged-7").addClass("hidden-forged")
		})
	}
	if ($current_directory == $_____link + "virtualmin-registrar/") {
		$.each($("td > input "), function () {
			if ($(this).parents("table.table-hardcoded").find('form[action="edit.cgi"]').length) {
				$(this).css("margin-left", "5px");
				$(this).parent("td").prev("td").find("select").css("margin-left", "5px")
			}
		})
	}
	if ($current_page_full == $_____link_full + "/cluster-webmin/edit_host.cgi") {
		$.each($(".panel-body > .table-hardcoded"), function () {
			$(this).attr("style", "margin-top: 10px !important")
		})
	}
	if ($current_page_full == $_____link_full + "/virtual-server/list_scripts.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_newscripts.cgi") {
		$('form[action="disable_scripts.cgi"] thead + thead tr th, form[action="disable_scripts.cgi"] tbody + thead tr th, form[action="script_form.cgi"] thead + thead tr th, form[action="script_form.cgi"] tbody + thead tr th').attr("colspan", "5")
	}
	$.each($(".file_chooser_button_attached"), function (d, c) {
		if ($(this).prev('input[onclick*=".cgi"]')) {
			$(this).prev('input[onclick*=".cgi"]').css("width", "40px")
		}
	});
	if (product_name(1).toLowerCase() == "cloudmin" && ($current_page_full == $_____link_full + "/server-manager/add_form.cgi" || $current_page_full == $_____link_full + "/server-manager/scan_form.cgi")) {
		$.each($("label"), function () {
			$(this).find("br").remove()
		})
	}
	if (($current_page_full == $_____link_full + "/mysql/view_table.cgi" || $current_page_full == $_____link_full + "/postgresql/view_table.cgi") && $("td.td_tag > table.table-hardcoded")) {
		var $___colspan = $("td.td_tag > table.table-hardcoded").parents("table").find("thead").find("tr").find("th").length;
		$("td.td_tag > table.table-hardcoded").parent("td.td_tag").attr("colspan", $___colspan).attr("style", "padding: 1px !important;")
	}
	if ($current_page_full == $_____link_full + "/virtual-server/backup_form.cgi" && $__source_url && $__source_url.indexOf("?sched=") > -1) {
		$("body > div > div > div.panel-body > form > table:nth-child(4) > tbody > tr:nth-child(2) > td").css("display", "table-cell")
	}
	if ($__source_path === "/config.cgi") {
		$("thead tr th.table-title").prepend('<i class="fa fa-cogs">&nbsp;&nbsp;</i>')
	}
	___f__tw();
	$.each($('form[action="save_global.cgi"], form[action="save_iptables.cgi"], form[action="save_domain.cgi"],form[action="domain_setup.cgi"],form[action="mass_create.cgi"],form[action="save_roundrobin.cgi"],form[action="save_alert.cgi"], body.time form[action="apply.cgi"]'), function () {
		$(this).find(".col_header").removeClass("col_header")
	});
	if ($__relative_url === "/virtual-server/edit_newchangelog.cgi" || $__relative_url === "/server-manager/edit_newchangelog.cgi" || $__relative_url === "/shell/" || $__relative_url === "/shell/index.cgi" || $__relative_url === "/server-manager/shell.cgi") {
		$("td.col_value.col_value").removeClass("col_header")
	}
	if ($__relative_url === "/ldap-server/edit_ldif.cgi") {
		$("span > input.ui_opt_textbox").unwrap()
	}
	if ($current_page_full == $_____link_full + "/server-manager/gvnc.cgi") {
		$("body.server-manager p > object").css("height", "100%").parent("p").attr("style", "display: block; height: " + parseInt($(window).outerHeight() / 1.4) + "px")
	}
	if (t___wi.location.search != "?dashboard" && dashboard_switch() == true) {
		if ($__source_file == "sysinfo.cgi") {
			t__wi_p.t__s("open_dashboard");
			t__wi_p.__cms()
		} else {
			if (t__wi_p.$("#open_webmin").length > 0 && t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_webmin" && __num()) {
				t__wi_p.t__s("open_webmin")
			} else {
				if (t__wi_p.$("#open_virtualmin").length > 0 && t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_virtualmin" && __num()) {
					t__wi_p.t__s("open_virtualmin")
				} else {
					if (t__wi_p.$("#open_cloudmin").length > 0 && t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_cloudmin" && __num()) {
						t__wi_p.t__s("open_cloudmin")
					} else {
						if (t__wi_p.$("#open_usermin").length > 0 && t__wi_p.$(".switch-toggle input:checked").attr("id") != "open_usermin" && __num()) {
							t__wi_p.t__s("open_usermin")
						}
					}
				}
			}
		}
	}
	if ($current_page_full == $_____link_full + "/spam/edit_simple.cgi" || $current_page_full == $_____link_full + "/spam/edit_header.cgi") {
		var target = $(".ui_form .table-responsive table.table.table-striped.table-rounded.table-condensed.table-subtable > thead tr th:first-child"),
			container = $(".ui_form .table-responsive table.table.table-striped.table-rounded.table-condensed.table-subtable > thead tr th:last-child"),
			link = container.find("a");
		target.append(link);
		container.remove();
		target.find("a").addClass("table_title_links pull-right btn btn-warning btn-tiny").attr("style", "position: absolute; right: 20px; margin-top: 3px !important;");
		if (target.find("a").attr("href").indexOf("edit_simple.cgi") > -1) {
			target.find("a").removeClass("btn-warning").addClass("btn-success")
		}
	}
	if ($current_page_full == $_____link_full + "/server-manager/edit_pass.cgi" && $('form[action="save_pass.cgi"]').find('a[href*="edit_pass.cgi?"]:not(.btn)').length) {
		var target = $(".ui_form .table-responsive table.table.table-striped.table-rounded.table-condensed.table-subtable > thead tr th:first-child"),
			container = $(".ui_form .table-responsive table.table.table-striped.table-rounded.table-condensed.table-subtable > thead tr th:last-child"),
			link = container.find("a");
		target.append(link);
		container.remove();
		target.find("a").addClass("table_title_links pull-right btn btn-info btn-tiny").attr("style", "position: absolute; right: 20px; margin-top: 3px !important;")
	}
	$('.panel-default + a[href="/virtual-server/"]').attr("href", "/virtual-server/index.cgi");
	$('.panel-default + a[href="/server-manager/"]').attr("href", "/server-manager/index.cgi");
	if ($__current_directory == $_____link_full + "/virtual-server/") {
		$("#headln2l > a:first-child .fa-arrow-left").parent("a").attr("href", "/virtual-server/index.cgi")
	} else {
		if ($__current_directory == $_____link_full + "/server-manager/") {
			$("#headln2l > a:first-child .fa-arrow-left").parent("a").attr("href", "/server-manager/index.cgi")
		}
	}
	if ($current_directory == $_____link + "acl/") {
		$("body.acl > div > div > div.panel-body > form > div > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td > table > tbody").attr("style", "border: 0 !important");
		var $t__acl_title = $("br").next(".ui_grid_table.table-hardcoded").find("tbody").attr("style", "border: 1px solid #eee !important").parent("table").prev("br").prev("b");
		$("br").next(".ui_grid_table.table-hardcoded").css("margin-bottom", "3px");
		$.each($t__acl_title, function (c, d) {
			if ($(this).text() == "") {
				$(this).next("br").remove();
				$(this).remove()
			}
		});
		$t__acl_title.attr("style", "margin-bottom: -3px !important").next("br").remove()
	}
	$('form[action="bootup.cgi"]').on("submit", function (b) {
		if ($("#starting").length > 0) {
			$("#starting").remove();
			$(this).append('<input type="hidden" id="starting" name="starting" value="' + $('input[name="boot"]:checked').val() + '">')
		} else {
			if ($("#table").length > 0) {
				$(this).append('<input type="hidden" id="table" name="table" value="' + $('input[name="boot"]:checked').val() + '">')
			} else {
				if ($('input[name="boot"][type="hidden"]').length > 0) {
					$('input[name="boot"][type="hidden"]').remove();
					$(this).append('<input type="hidden" name="boot" value="' + $('input[name="boot"]:checked').val() + '">')
				}
			}
		}
	});
	if ($('body[class*="bandwidth"]').length) {
		$(".fa.fa-calendar.file_chooser_button_attached").attr("style", "font-size: 11px; margin-top: 9px !important; pointer-events: none; margin-left: -27px !important;")
	}
	if ($current_page_full == $_____link_full + "/mysql/exec_form.cgi" || $current_page_full == $_____link_full + "/postgresql/exec_form.cgi") {
		$('select[name="old"], input[name="clear"], select[name="charset"]').removeClass("heighter-34").addClass("heighter-28");
		$('input[name="clear"]').attr("style", "margin-bottom: 3px !important;");
		$('select[name="old"]').attr("style", "margin-bottom: 3px !important; margin-right: 0 !important;")
	}
	if ($(".ui_post_header.hidden").html() && $(".ui_post_header.hidden").html().length > 5) {
		$("#headln2c").append($(".ui_post_header.hidden").html());
		$(".ui_post_header.hidden").remove()
	}
	if ($current_page_full && $current_page_full.indexOf("/sysinfo.cgi") > -1 && __num()) {
		function _update_time_() {
			var a = $("[data-convertible-timestamp-full]");
			a.data("convertible-timestamp-full", (parseInt(a.data("convertible-timestamp-full")) + 1));
			a.text(moment.unix(a.data("convertible-timestamp-full")).format(settings_window_replaced_timestamps_format_full))
		}
		$(function () {
			setInterval(_update_time_, 1000)
		});
		$.each($(".piechart"), function () {
			if (isNaN($(this).data("percent"))) {
				$(this).parents(".text-center").remove()
			}
		}).promise().done(function () {
			var c = $("span[data-charts]"),
				b = 'div[class^="col-xs-"]',
				a = c.parents(".row").find(b).length;
			$.each(c.parents(".row"), function () {
				$(this).find(b).removeClass().addClass("text-center col-xs-6 col-sm-" + (12 / a) + "")
			})
		});
		$.each($(".panel-default:not(#system-status)"), function (a, b) {
			if (!$(this).parent(".panel-group").length) {
				$(this).detach().appendTo(".panel-group")
			}
		});
		$(".panel-default:not(#system-status)").sort(function (d, c) {
			return $(d).data("sorter") > $(c).data("sorter")
		}).each(function () {
			var a = $(this);
			a.remove();
			$(a).appendTo(".panel-group")
		}).promise().done(function () {
			$("#serial-virtual-server, #ftypes-virtual-server").parent(".panel").detach().prependTo(".panel-group");
			$("#vm2servers-server-manager, #serial-server-manager").parent(".panel").detach().prependTo(".panel-group");
			$("#sysinfo-virtual-server").parent(".panel").detach().prependTo(".panel-group");
			$("#status-virtual-server").parent(".panel").detach().prependTo(".panel-group");
			$("#newfeatures-virtual-server").parent(".panel").detach().prependTo(".panel-group")
		})
	}
	$("body").on("click", "a#atclearcache", function (a) {
		localStorage.clear();
		t__wi_p.$(".right-side-tabs-dismiss .fa-trash").trigger("click");
		t__wi_p.$(".right-side-tabs-dismiss .fa-refresh").trigger("click");
		var b = $(this);
		b.find(".fa-hourglass-o").removeClass("fa-hourglass-o").addClass("fa-circle-o-notch fa-spin");
		setTimeout(function () {
			b.find(".fa-circle-o-notch.fa-spin").removeClass("fa-hourglass-o fa-spin").addClass("fa-hourglass-o")
		}, 400)
	});
	$("body").click(function (a) {
		if ($(a.target).is('select[name="settings_navigation_color"], select[name="settings_background_color"], select[name="settings_notification_color"], input[name="settings_notification_slider_fixed"], label[for^="settings_notification_slider_fixed"], div.aradio')) {
			return
		}
		if (t__wi_p.$(".right-side-tabs-toggler").hasClass("opened") && !t__wi_p.$(".right-side-tabs-toggler").hasClass("hidden")) {
			t__wi_p.$(".right-side-tabs-toggler:not(.hidden)").trigger("click")
		}
	});
	if ($current_page_full == $_____link_full + "/virtual-server/edit_phpmode.cgi") {
		$("#hiddendiv_phpinfo table tbody tr").css("border", "1px solid #eee")
	}
	if (settings_window_replace_timestamps) {
		$.each($("[data-convertible-timestamp-full]"), function () {
			$(this).text(moment.unix($(this).data("convertible-timestamp-full")).format(settings_window_replaced_timestamps_format_full))
		});
		$.each($("[data-convertible-timestamp-short]"), function () {
			$(this).text(moment.unix($(this).data("convertible-timestamp-short")).format(settings_window_replaced_timestamps_format_short))
		})
	}
	$.each($('a[href*="showpass.cgi?"][onclick]'), function () {
		$(this).html('<i class="fa fa-lg fa-key margined-left-4"></i>').css("color", "#555")
	});
	if ($current_page_full == $_____link_full + "/webmin/edit_startpage.cgi") {
		$('select[name="deftab"]').parents("td.col_value").parent("tr").hide();
		$('select[name="gotomodule"] option').each(function () {
			($(this).val() == "virtual-server" || $(this).val() == "server-manager" || $(this).val() == "csf") && $(this).remove()
		})
	}
	if ($current_page_full == $_____link_full + "/webmin/edit_ui.cgi" || $current_page_full == $_____link_full + "/usermin/edit_ui.cgi") {
		$('input[name*="cs_link_def"], input[name*="cs_header_def"], input[name*="cs_table_def"], input[name*="cs_text_def"], input[name*="cs_page_def"], input[name*="width_def"], input[name*="height_def"], input[name*="sizedate_def"], input[name*="texttitles"]').parents("td.col_value").parent("tr").addClass("hidden")
	}
	if ($__relative_url == "/config.cgi?virtual-server" || $__relative_url == "/config.cgi?server-manager") {
		$('input[name="theme_image"], input[name="theme_link"], input[name="theme_alt"]').parents("td.col_value").parent("tr").hide()
	}
	if ($current_page_full == $_____link_full + "/virtual-server/edit_resel.cgi") {
		$('input[name="logo"][id="logo"], input[name="link"]').parents("td.col_value").parent("tr").hide()
	}
	if ($('body[class^="syslog"]').length && $__source_query && $__source_query.indexOf("view=1") > -1) {
		$("pre").each(function () {
			var c = $(this),
				a = c.html();
			c.empty();
			var b = CodeMirror(this, {
				value: a,
				lineNumbers: true,
				mode: null,
				theme: settings_cm_view_palette,
				readOnly: true,
				viewportMargin: Infinity
			})
		})
	}
	if ($current_page_full == $_____link_full + "/virtual-server/domain_form.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_domain.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_user.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_alias.cgi" || $current_page_full == $_____link_full + "/virtual-server/edit_limits.cgi") {
		__is_shifted = false;
		__is_tabbed = false;
		$(document).on("keyup keydown", function (a) {
			var b = a.keyCode ? a.keyCode : a.which;
			__is_shifted = a.shiftKey;
			__is_tabbed = (b == 9 ? true : false)
		});
		$("input, select").on("blur", function () {
			if (__is_tabbed && !$(this).next("input:visible").length && !$(this).prev("input:visible").length && !$(this).next("select:visible").length && !$(this).prev("select:visible").length) {
				if (!__is_shifted) {
					if ($(this).parent("td").parent("tr").next("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').length || $(this).parent("td").parent("tr").next("script").next("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').length || $(this).parent("td").parent("tr").next("script").next("script").next("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').length) {
						$(this).parent("td").parent("tr").next("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').focus();
						$(this).parent("td").parent("tr").next("script").next("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').focus();
						$(this).parent("td").parent("tr").next("script").next("script").next("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').focus()
					} else {
						$(this).parent("td").parent("tr").next("tr").find("select:first:visible").focus();
						$(this).parent("td").parent("tr").next("script").next("tr").find("select:first:visible").focus();
						$(this).parent("td").parent("tr").next("script").next("script").next("tr").find("select:first:visible").focus()
					}
				} else {
					if ($(this).parent("td").parent("tr").prev("tr").find("select:visible").length || $(this).parent("td").parent("tr").prev("script").prev("tr").find("select:visible").length || $(this).parent("td").parent("tr").prev("script").prev("script").prev("tr").find("select:visible").length) {
						$(this).parent("td").parent("tr").prev("tr").find("select:first:visible").focus();
						$(this).parent("td").parent("tr").prev("script").prev("tr").find("select:first:visible").focus();
						$(this).parent("td").parent("tr").prev("script").prev("script").prev("tr").find("select:first:visible").focus()
					} else {
						$(this).parent("td").parent("tr").prev("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').focus();
						$(this).parent("td").parent("tr").prev("script").prev("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').focus();
						$(this).parent("td").parent("tr").prev("script").prev("script").prev("tr").find('input[type="text"]:first:visible, input[type="password"]:first:visible').focus()
					}
				}
			}
		})
	}
	if ($(".sub_table_container").find(".CodeMirror").length) {
		$(".sub_table_container").addClass("xcontent-force-no-styling")
	}
	t___wi.onbeforeunload = function (b) {
		t___wi.parent.$___________right = 0;
		t__wi_p.__lrs()
	}
};
