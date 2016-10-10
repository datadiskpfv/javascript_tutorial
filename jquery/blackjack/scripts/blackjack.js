/**
 * Created by pvalle on 10/10/2016.
 */

function card(name, suit, value) {
    this.name = name;
    this.suit = suit;
    this.value = value;
}

var used_cards = new Array();

function deal() {
  for(var i=0; i < 2; i++) {
      hit();
  }
}

function getRandom(num) {
    var my_num = Math.floor(Math.random() * num);
    return my_num;
}

function hit() {
    var good_card = false;

    do {
        var index = getRandom(52);
        if (!$.inArray(index, used_cards ) > -1 ) {
            good_card = true;
            var c = deck[index];
            used_cards[used_cards.length] = index;
            hand.cards[hand.cards.length] = c;
            var $d = $("<div>");
            $d.addClass("current_hand").appendTo("#my_hand");

        }
    }
}
