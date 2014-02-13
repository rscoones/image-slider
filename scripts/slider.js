slider = {
    // no touchy
    _animation: null,
    _list: null,
    _current: 0,

    // go nuts
    _speed: 500,
    _width: 200,
    _height: 400,
    _items: [],
    _holder: "slider",

    create: function (props) {
        for (var i in props) {
            this.set(i, props[i]);
        }
        this.refresh();
    },

    refresh: function () {
        var holder = document.getElementById(this._holder);
        holder.style.width = parseInt(this._width) + "px";
        holder.style.height = parseInt(this._height) + "px";

        this._empty();
        for (var i = 0; i < this._items.length; i++) {
            this._addItem(this._items[i]);
        }
    },

    next: function () {
        if (this._animation === null && this._current < this._items.length - 1) {
            var start = parseInt(this._list.style.left);
            var end = start - parseInt(this._width);
            this._animate(start, end);
            this._current++;
        }
    },

    previous: function () {
        if (this._animation === null && this._current > 0) {
            var start = parseInt(this._list.style.left);
            var end = start + parseInt(this._width);
            this._animate(start, end);
            this._current--;
        }
    },

    goto: function (number) {
        if (this._animation === null && number < this._items.length + 1) {
            var offset = Math.abs(this._current - --number);
            var start = parseInt(this._list.style.left);

            if (offset > 0) {
                if (this._current > number) {
                    this._current -= offset;
                    var end = start + (parseInt(this._width)) * offset;
                } else {
                    this._current += offset;
                    var end = start - (parseInt(this._width)) * offset;
                }

                this._animate(start, end);
            }
        }
    },

    set: function (prop, val) {
        var existed = (this["_" + prop]) ? true : false;
        this["_" + prop] = val;
        if (!existed) {
            console.warn("Warning: Property did not previously exist but has been set anyway, you may have spelt incorectly.");
        }
    },

    get: function (prop) {
        if (!this["_" + prop]) {
            console.warn("Property not found");
        }
        return this["_" + prop];
    },

    _animate: function (start, end) {
        if (start > end) {
            this._list.style.left = start - (this._width / 10) + "px";
        } else {
            this._list.style.left = start + (this._width / 10) + "px";
        }
        if (parseInt(this._list.style.left) != end) {
            var self = this;
            this._animation = setTimeout(function () {
                self._animate(parseInt(self._list.style.left), end);
            }, this._speed / 10);
        } else {
            this._animation = null;
        }
    },

    _empty: function () {
        var holder = document.getElementById(this._holder);
        while (holder.hasChildNodes()) {
            holder.removeChild(holder.lastChild);
        }

        this._createImageHolder();
        this._createButtons();
    },

    _createImageHolder: function () {
        this._list = document.createElement("ul");
        this._list.setAttribute("id", "slider_images");
        this._list.style.left = "0px";
        this._list.style.width = parseInt(this._width) * this._items.length + "px";
        this._list.style.height = parseInt(this._height) + "px";
        document.getElementById(this._holder).appendChild(this._list);
    },

    _createButtons: function () {
        var self = this;

        var numbers = document.createElement("ul");
        numbers.setAttribute("id", "slider_numbers");
        for (var i = 0; i < this._items.length; i++) {
            var number = document.createElement("li");
            number.innerHTML = i + 1;
            numbers.appendChild(number);
            number.onclick = function () {
                self.goto(parseInt(this.innerHTML));
            }
        }
        document.getElementById(this._holder).appendChild(numbers);

        var prev = document.createElement("span");
        prev.setAttribute("id", "slider_previous");
        prev.onclick = function () {
            self.previous();
        }
        document.getElementById(this._holder).appendChild(prev);

        var next = document.createElement("span");
        next.setAttribute("id", "slider_next");
        next.onclick = function () {
            self.next();
        }
        document.getElementById(this._holder).appendChild(next);
    },

    _addItem: function (item) {
        var li = document.createElement("li");
        li.style.width = parseInt(this._width) + "px";
        li.style.height = parseInt(this._height) + "px";

        var img = document.createElement("img");
        img.src = item.src;
        img.alt = item.alt;
        img.style.width = parseInt(this._width) + "px";
        img.style.height = parseInt(this._height) + "px";

        li.appendChild(img);
        this._list.appendChild(li);
    }
};