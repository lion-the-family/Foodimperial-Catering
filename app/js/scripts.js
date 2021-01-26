(function () {
  'use strict';

  var headerMenu = function headerMenu() {
    var button = document.querySelector('.site-menu-btn');
    var container = document.querySelector('.site-header-container');
    button.addEventListener('click', function () {
      container.classList.toggle('active');
    });
  };

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var filterMenu = function filterMenu() {
    var container = document.querySelector('.s-dishes-container');

    var setStartState = function setStartState() {
      var items = document.querySelectorAll('[data-item]');
      var wholeItem = document.querySelector('.dish-type-all');
      items.forEach(function (item) {
        return item.classList.remove('active');
      });
      wholeItem.classList.add('active');
    };

    setStartState();
    container.addEventListener('click', function (e) {
      var _map = ['[data-item]', '.filters-btn', '.s-dishes-accept-btn', '.s-dishes-close-btn'].map(function (selector) {
        return e.target.closest(selector);
      }),
          _map2 = _slicedToArray(_map, 4),
          item = _map2[0],
          filtersBtn = _map2[1],
          acceptBtn = _map2[2],
          closeBtn = _map2[3];

      if (item) item.classList.toggle('active');
      if (filtersBtn) container.classList.toggle('filtered');
      if (acceptBtn) container.classList.remove('filtered');

      if (closeBtn) {
        setStartState();
        container.classList.remove('filtered');
      }
    });
  };

  var countDishes = function countDishes() {
    var gallery = document.querySelector('.s-dishes-gallery');
    gallery.addEventListener('click', function (e) {
      var counter = e.target.closest('.dish-counter');
      var button = e.target.closest('[data-counter-btn]');
      if (!(counter && button)) return;
      var numberElem = counter.querySelector('.dish-counter-number');
      var number = +numberElem.textContent;
      if (button.classList.contains('dish-counter-minus') && number > 1) number--;
      if (button.classList.contains('dish-counter-plus') && number < 99) number++;
      numberElem.textContent = number;
    });
  };

  var paymentMenu = function paymentMenu() {
    var menu = document.querySelector('.s-payment-menu');
    menu.addEventListener('click', function (e) {
      var triggeredItem = e.target.closest('.s-payment-item');
      var activeItem = menu.querySelector('.s-payment-item.active');
      if (!triggeredItem || triggeredItem.classList.contains('.active')) return;
      if (activeItem) activeItem.classList.remove('active');
      triggeredItem.classList.add('active');
    });
  };

  var app = function app() {
    countDishes();
    filterMenu();
    headerMenu();
    paymentMenu();
  };

  app();

}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXMiOlsiaGVhZGVyLW1vYmlsZS1tZW51LmpzIiwiZmlsdGVyLW1lbnUuanMiLCJkaXNoLWNvdW50ZXJzLmpzIiwicGF5bWVudC1tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlck1lbnUgPSAoKSA9PiB7XHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpdGUtbWVudS1idG4nKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1oZWFkZXItY29udGFpbmVyJyk7XHJcblxyXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhlYWRlck1lbnU7IiwiY29uc3QgZmlsdGVyTWVudSA9ICgpID0+IHtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucy1kaXNoZXMtY29udGFpbmVyJyk7XHJcblxyXG4gIGNvbnN0IHNldFN0YXJ0U3RhdGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWl0ZW1dJyk7XHJcbiAgICBjb25zdCB3aG9sZUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzaC10eXBlLWFsbCcpO1xyXG5cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgd2hvbGVJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH07XHJcblxyXG4gIHNldFN0YXJ0U3RhdGUoKTtcclxuXHJcbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IFtpdGVtLCBmaWx0ZXJzQnRuLCBhY2NlcHRCdG4sIGNsb3NlQnRuXSA9IFtcclxuICAgICAgJ1tkYXRhLWl0ZW1dJyxcclxuICAgICAgJy5maWx0ZXJzLWJ0bicsXHJcbiAgICAgICcucy1kaXNoZXMtYWNjZXB0LWJ0bicsXHJcbiAgICAgICcucy1kaXNoZXMtY2xvc2UtYnRuJ1xyXG4gICAgXS5tYXAoKHNlbGVjdG9yKSA9PiBlLnRhcmdldC5jbG9zZXN0KHNlbGVjdG9yKSk7XHJcblxyXG4gICAgaWYgKGl0ZW0pIGl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZmlsdGVyc0J0bikgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlcmVkJyk7XHJcbiAgICBpZiAoYWNjZXB0QnRuKSBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyZWQnKTtcclxuXHJcbiAgICBpZiAoY2xvc2VCdG4pIHtcclxuICAgICAgc2V0U3RhcnRTdGF0ZSgpO1xyXG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZmlsdGVyZWQnKVxyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmaWx0ZXJNZW51OyIsImNvbnN0IGNvdW50RGlzaGVzID0gKCkgPT4ge1xyXG4gIGNvbnN0IGdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucy1kaXNoZXMtZ2FsbGVyeScpO1xyXG5cclxuICBnYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgIGNvbnN0IGNvdW50ZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcuZGlzaC1jb3VudGVyJyk7XHJcbiAgICBjb25zdCBidXR0b24gPSBlLnRhcmdldC5jbG9zZXN0KCdbZGF0YS1jb3VudGVyLWJ0bl0nKTtcclxuXHJcbiAgICBpZiAoIShjb3VudGVyICYmIGJ1dHRvbikpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBudW1iZXJFbGVtID0gY291bnRlci5xdWVyeVNlbGVjdG9yKCcuZGlzaC1jb3VudGVyLW51bWJlcicpO1xyXG4gICAgbGV0IG51bWJlciA9ICtudW1iZXJFbGVtLnRleHRDb250ZW50O1xyXG5cclxuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNoLWNvdW50ZXItbWludXMnKSAmJiBudW1iZXIgPiAxKSBudW1iZXItLTtcclxuICAgIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNoLWNvdW50ZXItcGx1cycpICYmIG51bWJlciA8IDk5KSBudW1iZXIrKztcclxuXHJcbiAgICBudW1iZXJFbGVtLnRleHRDb250ZW50ID0gbnVtYmVyO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3VudERpc2hlczsiLCJjb25zdCBwYXltZW50TWVudSA9ICgpID0+IHtcclxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnMtcGF5bWVudC1tZW51Jyk7XHJcblxyXG4gIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgY29uc3QgdHJpZ2dlcmVkSXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5zLXBheW1lbnQtaXRlbScpO1xyXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IG1lbnUucXVlcnlTZWxlY3RvcignLnMtcGF5bWVudC1pdGVtLmFjdGl2ZScpO1xyXG5cclxuICAgIGlmICghdHJpZ2dlcmVkSXRlbSB8fCB0cmlnZ2VyZWRJdGVtLmNsYXNzTGlzdC5jb250YWlucygnLmFjdGl2ZScpKSByZXR1cm47XHJcblxyXG4gICAgaWYgKGFjdGl2ZUl0ZW0pIGFjdGl2ZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICB0cmlnZ2VyZWRJdGVtLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwYXltZW50TWVudTsiXSwibmFtZXMiOlsiaGVhZGVyTWVudSIsImJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmaWx0ZXJNZW51Iiwic2V0U3RhcnRTdGF0ZSIsIml0ZW1zIiwicXVlcnlTZWxlY3RvckFsbCIsIndob2xlSXRlbSIsImZvckVhY2giLCJpdGVtIiwicmVtb3ZlIiwiYWRkIiwiZSIsIm1hcCIsInNlbGVjdG9yIiwidGFyZ2V0IiwiY2xvc2VzdCIsImZpbHRlcnNCdG4iLCJhY2NlcHRCdG4iLCJjbG9zZUJ0biIsImNvdW50RGlzaGVzIiwiZ2FsbGVyeSIsImNvdW50ZXIiLCJudW1iZXJFbGVtIiwibnVtYmVyIiwidGV4dENvbnRlbnQiLCJjb250YWlucyIsInBheW1lbnRNZW51IiwibWVudSIsInRyaWdnZXJlZEl0ZW0iLCJhY3RpdmVJdGVtIl0sIm1hcHBpbmdzIjoiOzs7RUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0VBQ3ZCLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGdCQUF2QixDQUFmO0VBQ0EsTUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQWxCO0VBRUFGLEVBQUFBLE1BQU0sQ0FBQ0ksZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtFQUNyQ0QsSUFBQUEsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxNQUFwQixDQUEyQixRQUEzQjtFQUNELEdBRkQ7RUFHRCxDQVBEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDQUEsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtFQUN2QixNQUFNSixTQUFTLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBbEI7O0VBRUEsTUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFn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
