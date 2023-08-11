/* FeedEk jQuery RSS/ATOM Feed Plugin v3.2.0
* https://jquery-plugins.net/FeedEk/FeedEk.html  https://github.com/enginkizil/FeedEk 
* Author : Engin KIZIL */
(function ($) {
	$.fn.FeedEk = function (options) {
		var def = $.extend({
			MaxCount: 5,
			ShowDesc: true,
			ShowPubDate: true,
			DescCharacterLimit: 0,
			TitleLinkTarget: "_blank",
			DateFormat: "",
			DateFormatLang: "en",
			Offset: 0,
			ShowAuthor: false,
			AuthorLabel: "Author:",
			Success: function () { },
			Error: function () { }
		}, options);
		var divFeed = this;
		var init = function () {
			if (def.FeedUrl == undefined) return;
			if ($.isArray(def.FeedUrl)) {
				def.FeedUrl = def.FeedUrl.map(t => encodeURIComponent(t)).join(",,,");
			}
			else {
				def.FeedUrl = encodeURIComponent(def.FeedUrl);
			}
			getFeedData();
		}
		var getFeedData = function () {
			divFeed.empty();
			divFeed.append('<div class="spinner-border" role="status"></div>');
			$.ajax({
				url: "https://feed.jquery-plugins.net/load?url=" + def.FeedUrl + "&maxCount=" + def.MaxCount + "&dateCulture=" + def.DateFormatLang + "&dateFormat=" + def.DateFormat + "&offset=" + def.Offset,
				dataType: "json",
				success: function (result) {
					divFeed.empty();
					if (result.data == null) return;
					divFeed.append(generateHtml(result.data));
					def.Success(result.data);
				},
				error: function (error) {
					def.Error(error);
				}
			});
		}
		var generateHtml = function (data) {
			var s = "";
			$.each(data, function (e, itm) {
				s += '<div class="card mb-3"><div class="card-header"><div class="row"><div class="col-8 text-left"><h5 class="card-title">' + itm.title + '</h5></div><div class="col-4 text-right"><h6 class="card-subtitle mb-2 text-muted">'
				
				if (def.ShowPubDate) {
					s += '<div class="itemDate">';
					if ($.trim(def.DateFormat).length > 0) {
						s += itm.publishDateFormatted;
					}
					else {
						s += new Date(itm.publishDate).toLocaleDateString();
					}
					s += '</div>';
				}
				
				s += '</h6></div></div></div><div class="card-body"><div class="row"><div class="col-8 text-left"><p>'
				
				if (def.ShowDesc) {
					s += getDescription(itm.description);
				}

				s += '</p><br><a href="' + itm.link + '" target="' + def.TitleLinkTarget + '" class="btn btn-success btn-sm  stretched-link">read more</a></div><div class="col-4 text-right"></div></div></div></div>';

				if (def.ShowAuthor) {
					s += '<div class="itemAuthor">' + def.AuthorLabel + ' ' + itm.author + '</div>';
				}
				s += '</div>';
			});
			return '<div class="">' + s + '</div>';
			
		}
		var getDescription = function (desc) {
			if (def.DescCharacterLimit > 0 && desc.length > def.DescCharacterLimit) {
				desc = desc.substring(0, def.DescCharacterLimit) + '...';
			}
			return DOMPurify.sanitize(
				desc, 
				{
					ALLOWED_TAGS: ['p', 'b', 'a', 'code',]
				}
			);
		}
		init();
	}
})(jQuery);