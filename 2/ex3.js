// Written by Cameron Cairns
// Exercise 2.3 Display an Arbitrarily Sized Chess Board
// Board is defined as a square in the exercise so only
// one dimension is kept track of
var dimension = 8;
// This is the string used to print out each row
var row_print_out;
for(var rowcount = 0; rowcount < dimension; rowcount++){
    // The below logic ensures that even and odd rows
    // will start with a different color than the other so
    // that the successive alternating colors within
    // the rows will only be diagonal to tiles filled
    // with that color like a chess board
    if (rowcount % 2 === 0){
        row_print_out = '';
        // Is even
        for (var columncount = 0; columncount < dimension; columncount++){
            if(columncount % 2 === 0){
                row_print_out += '#';
            }
            else{
                row_print_out += ' ';
            }
        }
        console.log(row_print_out)
    }
    else{
        // Is odd
        row_print_out = '';
        for (var columncount = 0; columncount < dimension; columncount++){
            if(columncount % 2 === 0){
                row_print_out += ' ';
            }
            else{
                row_print_out += '#';
            }
        }
        console.log(row_print_out)
    }
}
