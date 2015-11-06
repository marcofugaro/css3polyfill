CSS3 Polyfill
=============

2016? Still for some obscure reason supporting IE8 even though [microsoft itself stopped supporting it](https://www.reddit.com/r/web_design/comments/3nz4fc/microsoft_stops_supporting_internet_explorer_8910/)? Want to use those cool CSS3 features introduced in 2011? Don't worry!

CSS3 Polyfill is a collection of polyfills for the main CSS3 features:

- [`vw, vh, vmin`](https://github.com/saabi/vminpoly)
- [`background-size`](https://github.com/Metafalica/background-size-emu)
- [`calc()`](https://github.com/closingtag/calc-polyfill)
- [`transform`](https://github.com/pbakaus/transformie)
- [`rem`](https://github.com/chuckcarpenter/REM-unit-polyfill)

It doesn't include other properties such as `box-shadow`, `border-radius` or `linear-gradient` as you usually shouldn't care about providing a fallback for minor graphical issues, if you want you can [provide css fallbacks yourself](https://css-tricks.com/css3-gradients/).

For a `flexbox` fallback you can check out [flexie](https://github.com/doctyper/flexie), remember flexbox isn't supported in IE9 as well.

##Usage

You can insert the script in the IE8 section of your website's head, next to `html5shiv` and `respond.js`
    <!--[if lt IE 9]>
      <script src="js/css3-polyfill.js"></script>
    <![endif]-->

Or you can require it with bower
    bower install css3polyfill