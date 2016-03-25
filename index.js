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
            desc: 'Search music',
            icon: "#fa fa-music"
        });
        
    }

    function execute(id, payload) {
        
        if (payload == 'all') {
            shell.openExternal('http://www.allmusic.com/search/all/'+encodeURI(id));
    
        }else{
            return;
        }
    }

    return {search, execute};
};