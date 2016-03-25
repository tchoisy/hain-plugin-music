'use strict';


module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
        const query_trim = query.trim();
        if (query_trim.length == 0) {
            return;
        }

        res.add({
            id: query_trim,
            payload: 'all',
            title: 'Search ' + query_trim,
            desc: 'Search on allmusic.com',
            icon: "#fa fa-music"
        });
        res.add({
            id: query_trim,
            payload: 'albums',
            title: 'Search album ' + query_trim,
            desc: 'Search an album on allmusic.com',
            icon: "#fa fa-music"
        });
        res.add({
            id: query_trim,
            payload: 'artists',
            title: 'Search artist ' + query_trim,
            desc: 'Search an artist on allmusic.com',
            icon: "#fa fa-music"
        });
        res.add({
            id: query_trim,
            payload: 'compositions',
            title: 'Search composition ' + query_trim,
            desc: 'Search a composition on allmusic.com',
            icon: "#fa fa-music"
        });
        res.add({
            id: query_trim,
            payload: 'songs',
            title: 'Search song ' + query_trim,
            desc: 'Search a song on allmusic.com',
            icon: "#fa fa-music"
        });
        
    }

    function execute(id, payload) {
        var type = "all";
        if (payload == 'all') {
            type = "all";
        }else if (payload == 'albums') {
            type = "albums";
        }
        else if (payload == 'artists') {
            type = "artists";
        }
        else if (payload == 'compositions') {
            type = "compositions";
        }
        else if (payload == 'songs') {
            type = "songs";
        }
        else{
            return;
        }
        shell.openExternal('http://www.allmusic.com/search/'+type+'/'+encodeURI(id));
    }

    return {search, execute};
};