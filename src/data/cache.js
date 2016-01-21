import Moment from "moment";

export default new function() {
    this.get = function(key) {
        var stored = JSON.parse(window.localStorage.getItem(key));
        if (stored && Moment() > Moment(stored.expiry)) {
            window.localStorage.removeItem(key);
            stored = undefined;
        }

        return stored ? Promise.resolve(stored.values) : undefined;
    };

    this.set = function(key, values) {
        window.localStorage.setItem(key, JSON.stringify({ values: values, expiry: Moment().add(15, "m") }));
    };
};
