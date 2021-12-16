let pos = 0
let index = 0
let xy_pattern = [
22,
23,
13,
12,
11,
21,
31,
32,
33,
34,
24,
14,
4,
3,
2,
1,
0,
10,
20,
30,
40,
41,
42,
43,
44
]
loops.everyInterval(1000, function () {
    pos = xy_pattern[index]
    led.toggle(pos / 10, pos % 10)
    index += 1
    if (index == xy_pattern.length) {
        index = 0
    }
})
