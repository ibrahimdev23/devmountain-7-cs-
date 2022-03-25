
// Results for the tinyArray
insert 51.787 μs
append 133.153 μs

//Results for the smallArray
insert 64.981 μs
append 128.417 μs

//Results for the mediumArray
insert 239.304 μs
append 199.349 μs


//Results for the largeArray
insert 13.439468 ms
append 861.773 μs

// results for extraLargeArray 
insert  1.766417871 s
append 4.751837 ms



// Appending function is better for time and space because it loops through each element only once
//on the other hand the Insert function goes through each item twice because it has
// to shift every item after looping through it. 
//the space compelexity is the same for both because only the num array is affecting the memory space