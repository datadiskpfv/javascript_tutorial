/**
 * Created by vallep on 8/13/2016.
 */

// a do loop will always execute once
var i = 0;
do {
    process.stdout.write(i.toString() + ' ');
    i++
} while ( i < 11);

// its possible that a while may not even be executed
process.stdout.write("\n");
while ( i < 21)
{
    process.stdout.write(i.toString() + ' ');
    i++;
}

// the traditional for loop
process.stdout.write("\n");
for ( var y = 0; y < 11; y++) {
    process.stdout.write(y.toString() + ' ');
}

// a for in loop used by many programming languages
process.stdout.write("\n");
array1 = [101, 102, 103, 104, 105]
for ( var x in array1 ) {
    process.stdout.write(x.toString() + ' ');
}

// labelled statements, first use with break
var num = 0;
outermost:
for (var i=0; i < 10; i++) {
    for (var j=0; j < 10; j++ ) {
        if (i == 5 && j == 5) {
            break outermost;
        }
        num++;
    }
}
process.stdout.write('\n' + num.toString() + '\n');

// now use a labelled statement with continue
var num = 0;
outermost:
    for (var i=0; i < 10; i++) {
        for (var j=0; j < 10; j++ ) {
            if (i == 5 && j == 5) {
                continue outermost;
            }
            num++;
        }
    }
process.stdout.write(num.toString() + '\n');

// can use with but poor practice, all this does add location. to each of the right hand side
/*
with(location) {
    var qs = search.substring(1);        search.substring(1) becomes location.search.substring(1)
    var hostName = hostname;
    var url = href;
}
*/