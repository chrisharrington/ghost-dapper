import Query from "query-string";

export default {
    get: function(url, params) {
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("get", url + "?" + Query.stringify(params));

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200)
                        resolve(JSON.parse(xhr.responseText));
                    else
                        reject({ status: xhr.status, response: xhr.responseText });
                }
            };

            xhr.send(null);
        });
    },

    post: function(url, params) {
        return new Promise(function(resolve, reject) {
            params = Query.stringify(params);

            var xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);

            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200)
                        resolve(JSON.parse(xhr.responseText));
                    else
                        reject({ status: xhr.status, });
                }
            }
            xhr.send(params);
        });
    }
};
