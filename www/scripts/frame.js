define(
    ['sharedf'],
  function(sharedf){
        var mtextfrm = document.getElementById('mainframe').contentDocument;
        var savedcolor = null;
        var savedsize = null;
        function get_style(id){
            var style = mtextfrm.getElementById(id);
            if(!style){
                style = mtextfrm.createElement('style');
            } else {
                mtextfrm.getElementsByTagName('head')[0]
                        .removeChild(style);
            }
            style.id = id;
            style.type="text/css";
            return style;
        }
        return {
            set_fontsize:function(size){
                if(!size) size = savedsize;
                else savedsize = size;
                style = get_style('txtsize');
                style.innerHTML = "body {\n    font-size: "+size+"em;\n}";
                mtextfrm.getElementsByTagName('head')[0]
                        .appendChild(style);
            },
            set_fontcolor:function(color){
                if(!color) color = savedcolor;
                else savedcolor = color;
                style = get_style('txtcolor');
                style.innerHTML = "body {\n    color: "+color+";\n}";
                mtextfrm.getElementsByTagName('head')[0]
                        .appendChild(style);
            },
            set_sizes:function(){
                style = get_style('imgsize');
                style.innerHTML = 'img { max-height: '+(window.innerHeight)+'px; max-width:'+(window.innerWidth)+'px; overflow:hidden}';
                mtextfrm.getElementsByTagName('head')[0]
                        .appendChild(style);
            },
            prc_from_anchor:function(anchor, prc){
                console.log("Got"); //NFP
                console.log("anchor "+anchor); //NFP
                console.log("prc "+prc); //NFP
                var ancel = mtextfrm.contentDocument.getElementById(anchor);
                console.log("ancel:"); //NFP
                console.log(ancel); //NFP
                if(!ancel) 
                    if(!prc) return 0;
                    else return prc;
                var antop = parseFloat(stuff.getStyle(ancel, 'top'));
                var cheight = parseFloat(stuff.getStyle(mtext, 'height'));
                return 100.0*antop/cheight;
            }
        }
  }
);
